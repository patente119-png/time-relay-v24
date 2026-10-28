# TIME RELAY V24.4 — Exact Identity Edit

핵심 변경:
- fal 기본 모델을 `blackforestlabs/flux-3/edit-image`로 변경
- 새 사람을 생성하는 방식이 아니라 등록사진을 직접 편집
- 등록 얼굴의 나이/성별/표정/얼굴형/헤어를 바꾸지 않도록 프롬프트 강화
- 고교모자: 검정/남색 둥근 학생모 + 짧은 유광 챙 + 금색 高
- 교련복: 아이보리 바탕 + 검정 곡선/미로형 고밀도 무늬
- 결과 화면 별/점 장식 숨김 유지
- 모바일 홈 Fix 유지

## 중요: fal API Key 권한
기존 키가 `fal-ai/flux-pro/kontext`만 허용한다면 V24.4는 Forbidden이 납니다.
fal API Key의 Allowed models에 아래 모델을 추가하거나 새 키를 발급하세요.

`blackforestlabs/flux-3/edit-image`

Vercel Environment Variables:
- `IMAGE_PROVIDER=fal`
- `FAL_KEY=...`
- `FAL_EDIT_MODEL=blackforestlabs/flux-3/edit-image`
- `FAL_EDIT_RESOLUTION=1k`

기존 OpenAI/Supabase 변수는 유지합니다.

배포 후 확인:
`/api/health`

정상 예:
- version: V24.4 Exact Identity Edit
- provider: fal
- model: blackforestlabs/flux-3/edit-image
- identityMode: edit-existing-photo
