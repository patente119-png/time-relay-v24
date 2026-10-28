# TIME RELAY V24.5.2 — Wider Composition + Fast Generate

Changes:
- Prepares the registered portrait on a 768x768 outpaint-ready canvas so the subject appears smaller and the model has room to create a head-to-waist composition.
- Strongly rejects face close-up / chest-only / passport-photo framing.
- Keeps the confirmed drill-uniform pattern: ivory base + dense bold black curved maze-like motifs.
- Reuses precomputed face Base64 + protection mask for regenerate, avoiding repeated browser preprocessing.
- Default fal edit quality is `low` for faster generation while `FAL_EDIT_PRECISION=high` remains recommended for face protection.

Deploy: upload the contents of this folder to the GitHub repository root, commit, and keep Vercel Root Directory as `./`.

Recommended Vercel env:
- IMAGE_PROVIDER=fal
- FAL_FACE_EDIT_MODEL=ideogram/v4.5/edit
- FAL_EDIT_PRECISION=high
- FAL_EDIT_QUALITY=low
