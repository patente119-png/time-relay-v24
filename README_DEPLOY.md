# TIME RELAY V24.5.3 — Exact Face + Composition Fix

- Stronger exact-face protection mask: wider cheeks, jaw and ear coverage.
- No de-aging, beautifying, gender swap or identity substitution.
- Home screen clears any previous generated-photo background.
- Wider head-to-waist / upper-hip composition; rejects face-close and chest-only crops.
- Graduation caps and vintage high-school caps sit slightly forward.
- Confirmed drill-uniform pattern remains ivory/white with dense bold black curved maze motifs.
- One rectangular vintage student satchel with visible handle and natural grip; rejects warped/floating bags and fused hands.
- Keeps V24.5.2 preprocessing/cache speed optimizations.

Deploy: upload the CONTENTS of this folder to the GitHub repository root, commit, and keep Vercel Root Directory as `./`.

Recommended Vercel env:
- IMAGE_PROVIDER=fal
- FAL_FACE_EDIT_MODEL=ideogram/v4.5/edit
- FAL_EDIT_PRECISION=high
- FAL_EDIT_QUALITY=low
