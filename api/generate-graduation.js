import { fal } from '@fal-ai/client';

const LOOKS = {
  high_memory_drill: `EDIT ONLY the clothing, hat, bag and background of image 1. The person in image 1 must remain the exact same person.

FACE AND IDENTITY — DO NOT EDIT:
Do not redraw, regenerate, beautify, de-age, age, gender-swap, reshape, retouch, smooth, stylize or reinterpret the face. Preserve the exact facial pixels and recognizable identity as closely as the edit model allows: same apparent age, eye shape and spacing, eyebrows, nose, lips, jawline, cheeks, skin tone, facial asymmetry, hairline, hairstyle, head shape, expression and gaze. Do not replace the face with a generic student or model. Keep body proportions and pose natural and consistent with image 1.

CLOTHING — CONFIRMED KOREAN SCHOOL-DRILL UNIFORM:
Replace only the clothing with a 1970s–1980s Korean school-drill uniform. Fabric base is warm white / ivory. Cover jacket and trousers with dense, high-contrast black irregular organic squiggles and maze-like curved strokes exactly in the visual spirit of the supplied historical reference: tightly spaced, non-repeating, hand-drawn-looking black shapes on white. NOT gray cloud spots, NOT polka dots, NOT leopard print, NOT digital camouflage, NOT woodland camouflage, NOT olive/khaki military fabric.

CAP — CONFIRMED VINTAGE HIGH-SCHOOL CAP:
Add a traditional black or very dark navy Korean high-school student cap: rounded soft cloth crown, narrow glossy black band, short glossy black visor, small centered gold 高 emblem. It must sit naturally on the head with realistic contact and shadow. Do not use a baseball cap, field cap, officer cap, naval cap or ceremonial military hat.

BAG:
Add a period-correct rectangular boxy Korean student satchel, rigid/semi-rigid, muted gray-green or olive-gray canvas, darker reinforced edges, simple flap and metal clasp. No modern backpack, laptop bag or luxury bag.

BACKGROUND:
Replace only the background with a realistic 1970s–1980s Korean classroom: green chalkboard, worn wooden desks, aged windows, briquette/coal heater and metal lunch boxes. Documentary school-memory atmosphere, natural daylight. Clearly a student memory scene, never a soldier or military base.

OUTPUT: photorealistic photo only. No text, UI, frame, stars, dots, watermark or captions.`,

  high_memory_black: `Edit image 1 while preserving the person's exact face, age, gender, expression, hair and identity. Do not redraw or beautify the face. Change only clothing, accessories and background. Dress the person in a traditional 1970s–1980s Korean black or very dark navy high-school student uniform with a period rectangular hard-sided school bag. Use a realistic old Korean school corridor or classroom. Photo only, no text or UI.`,
  high_memory_cap: `Edit image 1 while preserving the person's exact face, age, gender, expression, hair and identity. Do not redraw the face. Change only clothing, cap, bag and background. Use a traditional dark Korean high-school uniform and a confirmed vintage black/navy rounded high-school student cap with glossy short visor and small gold 高 emblem. Add an old rectangular hard-sided student bag and an old Korean school corridor. Photo only.`,
  high_memory_girl_uniform: `Edit image 1 while preserving the person's exact face, age, apparent gender, expression and identity. Change only clothing, bag and background. Use a modest period Korean girls high-school uniform in dark navy/black with an old rectangular student bag and a 1970s–1980s Korean classroom/corridor. No idol styling, no face beautification.`,
  high_memory_girl_cap: `Edit image 1 while preserving the person's exact face, age, apparent gender, expression and identity. Change only clothing, cap, bag and background. Use a period Korean girls school uniform with a vintage black/navy rounded high-school student cap with glossy visor and small gold 高 emblem, plus an old rectangular bag and old school corridor.`,
  high_memory_pe: `Edit image 1 while preserving the exact face, age, gender, expression, hair and identity. Change only clothing and background. Use a simple 1970s–1980s Korean high-school PE tracksuit with restrained stripes and an old dirt playground or gym. No modern branding.`,
  high_memory_album: `Edit image 1 while preserving the exact face, age, gender, expression, hair and identity. Change only clothing, props and background. Create a nostalgic Korean high-school graduation-album portrait in an old classroom, corridor or modest vintage studio.`,

  high_today_uniform: `Preserve the exact face, age, gender, hair and identity from image 1. Change only clothing, props and background to a current Korean high-school graduation portrait with school uniform, bouquet and diploma. Do not make the person younger.`,
  high_today_knit: `Preserve the exact face, age, gender, hair and identity from image 1. Change only clothing, props and background to a current Korean high-school knit-vest uniform graduation portrait with bouquet.`,
  high_today_daily: `Preserve the exact face, age, gender, hair and identity from image 1. Change only clothing, props and background to current Korean high-school daily schoolwear and graduation setting.`,
  high_today_formal: `Preserve the exact face, age, gender, hair and identity from image 1. Change only clothing, props and background to a neat formal graduation portrait with bouquet and diploma.`,

  kg_today_gown:'Preserve the exact face and identity in image 1. Change only clothing, props and background to a kindergarten graduation gown, mortarboard, bouquet and diploma. Do not alter age appearance.',
  kg_today_hanbok:'Preserve the exact face and identity in image 1. Change only clothing, props and background to Korean hanbok graduation styling. Do not alter age appearance.',
  kg_today_uniform:'Preserve the exact face and identity in image 1. Change only clothing, props and background to a neat kindergarten-style graduation uniform setting. Do not alter age appearance.',
  kg_memory_uniform:'Preserve the exact face and identity in image 1. Change only clothing, bag and background to a nostalgic older Korean kindergarten uniform and classroom. Do not alter age appearance.',
  kg_memory_studio:'Preserve the exact face and identity in image 1. Change only clothing and background to a nostalgic Korean kindergarten graduation studio portrait. Do not alter age appearance.',
  elem_today_gown:'Preserve the exact face and identity in image 1. Change only clothing, props and background to an elementary graduation gown, mortarboard, bouquet and diploma. Do not alter age appearance.',
  elem_today_formal:'Preserve the exact face and identity in image 1. Change only clothing, props and background to a neat elementary graduation formal outfit. Do not alter age appearance.',
  elem_today_hanbok:'Preserve the exact face and identity in image 1. Change only clothing, props and background to Korean hanbok graduation styling. Do not alter age appearance.',
  elem_memory_bag:'Preserve the exact face and identity in image 1. Change only clothing, bag and background to a nostalgic Korean elementary student outfit with old rectangular hard-sided bag and classroom. Do not alter age appearance.',
  elem_memory_pe:'Preserve the exact face and identity in image 1. Change only clothing and background to a 1970s–1980s Korean elementary PE tracksuit and dirt playground. Do not alter age appearance.',
  elem_memory_album:'Preserve the exact face and identity in image 1. Change only clothing and background to a nostalgic Korean elementary graduation album portrait. Do not alter age appearance.',
  middle_today_uniform:'Preserve the exact face and identity in image 1. Change only clothing, props and background to a current Korean middle-school graduation portrait. Do not alter age appearance.',
  middle_today_knit:'Preserve the exact face and identity in image 1. Change only clothing, props and background to a current Korean middle-school knit-vest uniform graduation portrait. Do not alter age appearance.',
  middle_today_gown:'Preserve the exact face and identity in image 1. Change only clothing, props and background to a middle-school graduation gown portrait. Do not alter age appearance.',
  middle_memory_black:'Preserve the exact face and identity in image 1. Change only clothing, bag and background to an older Korean middle-school dark student uniform with old hard-sided bag. Do not alter age appearance.',
  middle_memory_cap:'Preserve the exact face and identity in image 1. Change only clothing, cap, bag and background to a nostalgic Korean middle-school uniform and traditional student cap. Do not alter age appearance.',
  middle_memory_pe:'Preserve the exact face and identity in image 1. Change only clothing and background to a 1970s–1980s Korean middle-school PE tracksuit. Do not alter age appearance.',
  uni_today_gown:'Preserve the exact face, age and identity in image 1. Change only clothing, props and background to a university degree gown, mortarboard, diploma and bouquet on campus.',
  uni_today_modern:'Preserve the exact face, age and identity in image 1. Change only clothing, props and background to a modern university graduation portrait.',
  uni_today_hanbok:'Preserve the exact face, age and identity in image 1. Change only clothing, props and background to a Korean hanbok university graduation portrait.',
  uni_today_formal:'Preserve the exact face, age and identity in image 1. Change only clothing, props and background to a formal university graduation portrait.',
  uni_memory_gown:'Preserve the exact face, age and identity in image 1. Change only clothing and background to a nostalgic Korean university graduation album portrait.',
  uni_memory_campus:'Preserve the exact face, age and identity in image 1. Change only clothing, props and background to a nostalgic older Korean university campus portrait.',
  dream_doctor:'Preserve the exact face, age and identity in image 1. Change only clothing and background to a doctor portrait with white coat and stethoscope.',
  dream_firefighter:'Preserve the exact face, age and identity in image 1. Change only clothing, helmet and background to a professional firefighter portrait.',
  dream_police:'Preserve the exact face, age and identity in image 1. Change only clothing, cap and background to a friendly police officer portrait.',
  dream_astronaut:'Preserve the exact face, age and identity in image 1. Change only clothing and background to a realistic astronaut portrait.',
  dream_chef:'Preserve the exact face, age and identity in image 1. Change only clothing, chef hat and background to a professional chef portrait.',
  dream_teacher:'Preserve the exact face, age and identity in image 1. Change only clothing, props and background to a teacher portrait.',
  dream_scientist:'Preserve the exact face, age and identity in image 1. Change only clothing, props and background to a scientist or robotics researcher portrait.',
  dream_pilot:'Preserve the exact face, age and identity in image 1. Change only clothing, pilot cap and background to a professional pilot portrait.',
};

function buildPrompt(lookKey) {
  const edit = LOOKS[lookKey];
  if (!edit) return null;
  return `${edit}\n\nABSOLUTE IDENTITY RULE: image 1 is the source photo, not merely an inspiration. Keep the same human identity and apparent age. Do not generate a new person. Do not retouch or beautify the face. Modify only the requested non-face elements. Keep photorealistic anatomy and realistic headwear contact. Output photo only, no app UI, border, stars, decorative dots, text, watermark, date or caption.`;
}

function decodeBase64(value) {
  const clean = String(value || '').replace(/^data:[^;]+;base64,/, '');
  return Buffer.from(clean, 'base64');
}

async function generateWithFal({ imageBase64, mime, prompt }) {
  const key = process.env.FAL_KEY;
  if (!key) throw Object.assign(new Error('FAL_KEY is not configured on Vercel.'), { status: 500 });
  fal.config({ credentials: key });
  const model = process.env.FAL_EDIT_MODEL || 'blackforestlabs/flux-3/edit-image';
  const dataUri = `data:${mime || 'image/jpeg'};base64,${String(imageBase64).replace(/^data:[^;]+;base64,/, '')}`;
  const result = await fal.subscribe(model, {
    input: {
      prompt,
      image_urls: [dataUri],
      aspect_ratio: 'auto',
      resolution: process.env.FAL_EDIT_RESOLUTION || '1k',
      enable_prompt_expansion: false,
      safety_tolerance: 2,
      output_format: 'jpeg',
    },
    logs: false,
  });
  const url = result?.data?.images?.[0]?.url;
  if (!url) throw Object.assign(new Error('fal.ai returned no image URL.'), { status: 502 });
  const imageResponse = await fetch(url);
  if (!imageResponse.ok) throw Object.assign(new Error('fal.ai generated image download failed.'), { status: 502 });
  return { outputBase64: Buffer.from(await imageResponse.arrayBuffer()).toString('base64'), model };
}

async function generateWithOpenAI({ imageBase64, mime, prompt }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw Object.assign(new Error('OPENAI_API_KEY is not configured on Vercel.'), { status: 500 });
  const imageBuffer = decodeBase64(imageBase64);
  if (!imageBuffer.length) throw Object.assign(new Error('Invalid image data.'), { status: 400 });
  const model = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2';
  const form = new FormData();
  form.append('model', model);
  form.append('prompt', prompt);
  form.append('image', new Blob([imageBuffer], { type: mime || 'image/jpeg' }), 'reference.jpg');
  form.append('size', process.env.OPENAI_IMAGE_SIZE || '1024x1024');
  form.append('quality', process.env.OPENAI_IMAGE_QUALITY || 'low');
  form.append('output_format', 'jpeg');
  form.append('output_compression', String(process.env.OPENAI_IMAGE_COMPRESSION || '72'));
  form.append('n', '1');
  const response = await fetch('https://api.openai.com/v1/images/edits', { method:'POST', headers:{ Authorization:`Bearer ${apiKey}` }, body:form });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw Object.assign(new Error(data?.error?.message || `OpenAI image request failed (${response.status})`), { status: response.status });
  const item = data?.data?.[0] || {};
  let outputBase64 = item.b64_json || '';
  if (!outputBase64 && item.url) {
    const imageResponse = await fetch(item.url);
    if (!imageResponse.ok) throw Object.assign(new Error('Generated image download failed.'), { status: 502 });
    outputBase64 = Buffer.from(await imageResponse.arrayBuffer()).toString('base64');
  }
  if (!outputBase64) throw Object.assign(new Error('OpenAI returned no image data.'), { status: 502 });
  return { outputBase64, model };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error:'Method not allowed' });
  }
  const started = Date.now();
  try {
    const { imageBase64, mime='image/jpeg', lookKey } = req.body || {};
    if (!imageBase64 || !lookKey) return res.status(400).json({ error:'imageBase64 and lookKey are required.' });
    const prompt = buildPrompt(lookKey);
    if (!prompt) return res.status(400).json({ error:`Unknown lookKey: ${lookKey}` });
    const provider = String(process.env.IMAGE_PROVIDER || 'fal').toLowerCase();
    const result = provider === 'fal'
      ? await generateWithFal({ imageBase64, mime, prompt })
      : await generateWithOpenAI({ imageBase64, mime, prompt });
    return res.status(200).json({ imageBase64:result.outputBase64, mime:'image/jpeg', model:result.model, provider, identityMode:'edit-existing-photo', elapsedMs:Date.now()-started });
  } catch (error) {
    console.error('generate-graduation error:', error);
    const status = Number(error?.status) || 500;
    return res.status(status).json({ error:error?.message || 'Image edit failed.' });
  }
}
