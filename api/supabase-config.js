export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const url = process.env.SUPABASE_URL || '';
  const key = process.env.SUPABASE_PUBLISHABLE_KEY || '';

  if (!url || !key) {
    return res.status(500).json({
      error: 'Supabase environment variables are not configured',
      urlConfigured: Boolean(url),
      keyConfigured: Boolean(key),
    });
  }

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ url, key });
}
