# TIME RELAY V24.5 — Face Protected Edit

핵심 변경: 등록 얼굴을 AI가 다시 그리지 않도록 브라우저에서 얼굴 보호 마스크를 자동 생성합니다.

- 흰색 마스크 영역: 원본 얼굴 픽셀 보존
- 검정 마스크 영역: 의상·모자·가방·배경 편집
- fal 기본 모델: `ideogram/v4.5/edit`
- `edit_precision=high`로 unchanged-pixel restoration 사용
- 기본 품질: `medium`

## fal API Key 권한
기존 fal API Key의 Allowed models에 다음 모델을 추가해야 합니다.

`ideogram/v4.5/edit`

## Vercel 환경변수
기존 변수는 유지하고 아래를 추가/수정합니다.

- `IMAGE_PROVIDER=fal`
- `FAL_FACE_EDIT_MODEL=ideogram/v4.5/edit`
- `FAL_EDIT_PRECISION=high`
- `FAL_EDIT_QUALITY=medium`

`FAL_KEY`, OpenAI 변수, Supabase 변수는 그대로 유지합니다.

## 배포
ZIP 안의 내용만 GitHub 저장소 루트에 덮어쓰기 → Commit → Vercel 자동 배포.
Root Directory는 `./` 유지.

## 확인
`/api/health`에서 다음을 확인합니다.

- version: `V24.5 Face Protected Edit`
- model: `ideogram/v4.5/edit`
- identityMode: `face-protected-mask-edit`

주의: 자동 얼굴 보호 마스크는 정면/반정면 인물사진을 기준으로 한 보수적 중앙 얼굴 영역입니다. 등록 사진에서 얼굴이 크게 좌우로 치우친 경우에는 향후 수동 위치 조정 기능을 추가하는 것이 좋습니다.
