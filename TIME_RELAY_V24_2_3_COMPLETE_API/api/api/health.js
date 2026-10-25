export default async function handler(req, res) {
  return res.status(200).json({
    ok: true,
    version: 'V24.2.3 Complete API',
    model: process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2',
    keyConfigured: Boolean(process.env.OPENAI_API_KEY),
    supabaseConfigured: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_PUBLISHABLE_KEY),
  });
}
