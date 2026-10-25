# TIME RELAY V24.2 — Supabase Realtime

이번 버전은 `우리의 릴레이`를 여러 기기에서 실제로 연결합니다.

## 작동
- 방장이 릴레이 방 생성 → Supabase `relays` 저장
- 초대 링크를 카톡/QR로 전달
- 참가자가 앱 설치 없이 사진 + 한 줄 메시지 제출
- 사진은 Supabase Storage `relay-photos`에 저장
- 제출 데이터는 `entries`에 저장
- 방장이 `참여자 LIVE`를 열어두면 Realtime으로 새 제출이 즉시 표시

## 1. Supabase 준비
1. Supabase 프로젝트 생성
2. SQL Editor에서 `SUPABASE_SETUP.sql` 전체 실행
3. Project Settings/API에서 Project URL과 Publishable key 확인

## 2. Vercel Environment Variables
기존 OpenAI 변수에 아래 2개 추가:
- `SUPABASE_URL` = https://xxxxx.supabase.co
- `SUPABASE_PUBLISHABLE_KEY` = sb_publishable_... (또는 legacy anon key)

`service_role` 키는 절대 GitHub/브라우저/Vercel 프런트 설정에 넣지 마세요.

## 3. GitHub/Vercel
이 폴더 내용을 기존 V24 프로젝트에 업로드/덮어쓴 뒤 Commit하면 Vercel이 재배포합니다. Root Directory는 이 폴더를 GitHub 상위 폴더로 올렸다면 폴더명으로 지정합니다.

## 보안 주의
V24.2는 기능 검증용 MVP라서 링크를 아는 사람이 릴레이와 참여 내용을 읽을 수 있는 단순 RLS 정책입니다. 실제 공개 서비스 전에는 Supabase Auth를 붙여 `방장/공동방장/참가자` 권한을 분리하고 Storage를 private로 전환하는 V24.3 보안 단계가 필요합니다.


V24.2.1 FIX: Added Supabase JS browser client CDN before app initialization.
