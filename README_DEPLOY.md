# TIME RELAY V24.2.3 COMPLETE API

This package fixes the missing Vercel API folder in V24.2.2.

Included:
- index.html
- api/health.js
- api/supabase-config.js
- api/generate-graduation.js
- package.json
- vercel.json
- ENV_TEMPLATE.txt

Required Vercel environment variables:
- OPENAI_API_KEY
- OPENAI_IMAGE_MODEL=gpt-image-2
- OPENAI_IMAGE_SIZE=1024x1024
- OPENAI_IMAGE_QUALITY=low
- OPENAI_IMAGE_COMPRESSION=72
- SUPABASE_URL
- SUPABASE_PUBLISHABLE_KEY

After deployment test:
1. /api/health
2. /api/supabase-config
3. App > 나의 시간 > generate an image
4. App > 우리의 릴레이 > 새 릴레이
