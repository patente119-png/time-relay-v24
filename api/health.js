export default async function handler(req, res) {
  const provider = String(process.env.IMAGE_PROVIDER || 'fal').toLowerCase();
  const falModel = process.env.FAL_FACE_EDIT_MODEL || 'ideogram/v4.5/edit';
  return res.status(200).json({
    ok: true,
    version: 'V24.5 Face Protected Edit',
    provider,
    model: provider === 'fal' ? falModel : (process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2'),
    providerKeyConfigured: provider === 'fal' ? Boolean(process.env.FAL_KEY) : Boolean(process.env.OPENAI_API_KEY),
    openaiConfigured: Boolean(process.env.OPENAI_API_KEY),
    falConfigured: Boolean(process.env.FAL_KEY),
    supabaseConfigured: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_PUBLISHABLE_KEY),
    identityMode: provider === 'fal' ? 'face-protected-mask-edit' : 'reference-edit',
    editPrecision: process.env.FAL_EDIT_PRECISION || 'high',
    editQuality: process.env.FAL_EDIT_QUALITY || 'medium'
  });
}
