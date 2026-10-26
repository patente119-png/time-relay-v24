# TIME RELAY V24.3 Multi Provider

## What changed
- Added `IMAGE_PROVIDER` switch.
- `IMAGE_PROVIDER=fal` uses `fal-ai/flux-pro/kontext`.
- `IMAGE_PROVIDER=openai` uses the existing OpenAI image edit path.
- Existing UI, Supabase relay flow, and response format are preserved.
- Health endpoint reports active provider and whether its key is configured.

## Vercel environment variables
Required for fal mode:
- `IMAGE_PROVIDER=fal`
- `FAL_KEY=...`

Keep existing OpenAI variables if you want easy fallback:
- `OPENAI_API_KEY`
- `OPENAI_IMAGE_MODEL`
- `OPENAI_IMAGE_SIZE`
- `OPENAI_IMAGE_QUALITY`
- `OPENAI_IMAGE_COMPRESSION`

Supabase variables stay unchanged.

## Test after deploy
1. Open `/api/health` and confirm `provider: "fal"` and `providerKeyConfigured: true`.
2. Generate one portrait in the app.
3. If fal reports insufficient balance, add fal credits; the app code and provider switch are already working.


## V24.3.1 changes
- Result screen: visible back button added.
- Browser Back from generated result returns to the previous graduation selection panel.
- Historical drill-uniform prompt refined: off-white base, medium irregular black/charcoal blotches, old Korean student cap with 中/高 mark, rigid gray school bag, 1970s–80s classroom.
