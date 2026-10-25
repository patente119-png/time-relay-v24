-- TIME RELAY V24.2 Supabase setup (MVP)
-- Run once in Supabase Dashboard > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.relays (
  id text primary key,
  type text not null,
  title text not null,
  deadline date,
  approval text not null default 'approval',
  owner text not null,
  co_admins text[] not null default '{}',
  note text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.entries (
  id uuid primary key default gen_random_uuid(),
  relay_id text not null references public.relays(id) on delete cascade,
  name text not null,
  message text not null,
  future_message text,
  photo_path text,
  photo_url text,
  status text not null default 'pending',
  submitted_at timestamptz not null default now()
);

create index if not exists entries_relay_id_idx on public.entries(relay_id);
create index if not exists entries_submitted_at_idx on public.entries(submitted_at);

alter table public.relays enable row level security;
alter table public.entries enable row level security;

-- V24.2 MVP: link-based participation. These policies intentionally allow
-- anonymous visitors who know a relay link to read the room and submit/read entries.
-- Before public production, replace these with Supabase Auth + admin/member policies.
drop policy if exists "relay public read" on public.relays;
create policy "relay public read" on public.relays for select to anon, authenticated using (true);

drop policy if exists "relay public insert" on public.relays;
create policy "relay public insert" on public.relays for insert to anon, authenticated with check (true);

drop policy if exists "relay public update" on public.relays;
create policy "relay public update" on public.relays for update to anon, authenticated using (true) with check (true);

drop policy if exists "entry public read" on public.entries;
create policy "entry public read" on public.entries for select to anon, authenticated using (true);

drop policy if exists "entry public insert" on public.entries;
create policy "entry public insert" on public.entries for insert to anon, authenticated with check (true);

-- Storage bucket for relay photos (MVP uses public read URLs)
insert into storage.buckets (id, name, public)
values ('relay-photos','relay-photos',true)
on conflict (id) do update set public=true;

drop policy if exists "relay photo public upload" on storage.objects;
create policy "relay photo public upload" on storage.objects
for insert to anon, authenticated
with check (bucket_id='relay-photos');

drop policy if exists "relay photo public read" on storage.objects;
create policy "relay photo public read" on storage.objects
for select to anon, authenticated
using (bucket_id='relay-photos');

-- Enable Realtime for entries. If already added, the duplicate-object exception is ignored.
do $$
begin
  alter publication supabase_realtime add table public.entries;
exception when duplicate_object then null;
end $$;
