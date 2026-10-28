import { fal } from '@fal-ai/client';

const LOOKS = {
  high_memory_drill: `Keep the protected face pixels exactly unchanged. Edit only the unprotected region.
Create a realistic 1970s–1980s Korean school-memory portrait. Replace clothing with the FINAL CONFIRMED school-drill uniform pattern from the supplied reference: warm white or ivory fabric covered edge-to-edge with dense, bold, high-contrast black irregular curved maze-like motifs. The black motifs must be thicker, more numerous and more continuous than scattered spots. Use the same pattern across the full jacket and trousers. Absolutely no gray cloud blotches, no tiny dots, no sparse camouflage spots, no leopard print, no digital camouflage, no khaki, no olive, no green military camouflage.
Add the FINAL CONFIRMED vintage Korean high-school cap: black or very dark navy rounded cloth crown, narrow glossy black band, short glossy black visor, small centered gold 高 emblem. Wear it slightly forward and low on the forehead, naturally fitted to the head, never floating or pushed backward. It must look like a civilian old Korean high-school student cap, not a baseball cap, military officer cap or naval cap. Add ONE period rectangular boxy gray-green student satchel with a clearly visible top handle and simple metal clasp. The hand must grip the handle naturally with anatomically correct fingers; no fused fingers, floating handle, warped bag, duplicate bag or bag merged into the body. Use a realistic old Korean classroom with green chalkboard, worn wooden desks, aged windows, briquette heater and metal lunch boxes. This is a civilian student memory scene, never a military scene.`,
  high_memory_black: `Keep the protected face pixels exactly unchanged. Change only clothing, accessories and background. Traditional 1970s–1980s Korean black or very dark navy high-school student uniform, period rectangular hard-sided school bag, old Korean school corridor or classroom.`,
  high_memory_cap: `Keep the protected face pixels exactly unchanged. Change only clothing, cap, bag and background. Traditional dark Korean high-school uniform, confirmed black/navy rounded student cap worn slightly forward and low on the forehead, short glossy visor and centered gold 高 emblem; ONE old rectangular hard-sided student bag with a clearly visible handle and natural hand grip, old Korean school corridor.`,
  high_memory_girl_uniform: `Keep the protected face pixels exactly unchanged. Change only clothing, bag and background. Modest period Korean girls high-school uniform in dark navy/black, old rectangular student bag, 1970s–1980s Korean classroom or corridor.`,
  high_memory_girl_cap: `Keep the protected face pixels exactly unchanged. Change only clothing, hat, bag and background. Use a period-appropriate Korean GIRLS' high-school hat: a modest dark navy/black soft rounded cloth school hat with a feminine, compact crown and a small restrained brim, fitted low and slightly forward on the forehead. It must NOT be the male peaked 高 student cap, NOT a military/officer cap, NOT a baseball cap, and no oversized glossy visor. Pair it with a modest period Korean girls' school uniform and ONE old rectangular school bag with a natural hand grip in an old Korean school corridor.`,
  high_memory_pe: `Keep the protected face pixels exactly unchanged. Change only clothing and background. Simple 1970s–1980s Korean high-school PE tracksuit with restrained stripes and old dirt playground or gym.`,
  high_memory_album: `Keep the protected face pixels exactly unchanged. Change only clothing, props and background. Nostalgic Korean high-school graduation-album portrait in an old classroom, corridor or modest vintage studio.`,
  high_today_uniform: `Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a current Korean high-school graduation portrait with school uniform, bouquet and diploma.`,
  high_today_knit: `Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a current Korean high-school knit-vest uniform graduation portrait with bouquet.`,
  high_today_daily: `Keep the protected face pixels exactly unchanged. Change only clothing, props and background to current Korean high-school daily schoolwear and graduation setting.`,
  high_today_formal: `Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a neat formal graduation portrait with bouquet and diploma.`,
  kg_today_gown:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a kindergarten graduation gown, bouquet and diploma. The mortarboard must sit LOWER and slightly FORWARD on the head, with the front edge resting naturally above the eyebrows; never pushed backward or perched high.',
  kg_today_hanbok:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to Korean hanbok graduation styling.',
  kg_today_uniform:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a neat kindergarten-style graduation uniform setting.',
  kg_memory_uniform:'Keep the protected face pixels exactly unchanged. Change only clothing, bag and background to a nostalgic older Korean kindergarten uniform and classroom.',
  kg_memory_studio:'Keep the protected face pixels exactly unchanged. Change only clothing and background to a nostalgic Korean kindergarten graduation studio portrait.',
  elem_today_gown:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to an elementary graduation gown, bouquet and diploma. The mortarboard must sit LOWER and slightly FORWARD on the head, front edge naturally above the eyebrows; never pushed backward or floating.',
  elem_today_formal:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a neat elementary graduation formal outfit.',
  elem_today_hanbok:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to Korean hanbok graduation styling.',
  elem_memory_bag:'Keep the protected face pixels exactly unchanged. Change only clothing, bag and background to a nostalgic Korean elementary student outfit with old rectangular hard-sided bag and classroom.',
  elem_memory_pe:'Keep the protected face pixels exactly unchanged. Change only clothing and background to a 1970s–1980s Korean elementary PE tracksuit and dirt playground.',
  elem_memory_album:'Keep the protected face pixels exactly unchanged. Change only clothing and background to a nostalgic Korean elementary graduation album portrait.',
  middle_today_uniform:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a current Korean middle-school graduation portrait.',
  middle_today_knit:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a current Korean middle-school knit-vest uniform graduation portrait.',
  middle_today_gown:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a middle-school graduation gown portrait. Mortarboard sits low and slightly forward, not pushed back.',
  middle_memory_black:'Keep the protected face pixels exactly unchanged. Change only clothing, bag and background to an older Korean middle-school dark student uniform with old hard-sided bag.',
  middle_memory_cap:'Keep the protected face pixels exactly unchanged. Change only clothing, cap, bag and background to a nostalgic Korean middle-school uniform and traditional student cap.',
  middle_memory_pe:'Keep the protected face pixels exactly unchanged. Change only clothing and background to a 1970s–1980s Korean middle-school PE tracksuit.',
  uni_today_gown:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a university degree gown, diploma and bouquet on campus. Mortarboard sits low and slightly forward with the front edge naturally above the eyebrows; never pushed backward.',
  uni_today_modern:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a modern university graduation portrait.',
  uni_today_hanbok:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a Korean hanbok university graduation portrait.',
  uni_today_formal:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a formal university graduation portrait.',
  uni_memory_gown:'Keep the protected face pixels exactly unchanged. Change only clothing and background to a nostalgic Korean university graduation album portrait.',
  uni_memory_campus:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a nostalgic older Korean university campus portrait.',
  dream_doctor:'Keep the protected face pixels exactly unchanged. Change only clothing and background to a doctor portrait with white coat and stethoscope.',
  dream_firefighter:'Keep the protected face pixels exactly unchanged. Change only clothing, helmet and background to a professional firefighter portrait. Firefighter helmet must sit securely LOWER and slightly FORWARD, with the front brim just above the eyebrows; never perched high, floating, or tilted backward.',
  dream_police:'Keep the protected face pixels exactly unchanged. Change only clothing, cap and background to a friendly police officer portrait. Use a realistic police peaked cap fitted LOW and slightly FORWARD, visor naturally above the eyebrows and level; never pushed backward, floating or oversized.',
  dream_astronaut:'Keep the protected face pixels exactly unchanged. Change only clothing, astronaut helmet and background to a realistic astronaut portrait. Helmet must be centered and seated naturally around the head with the face centered in the visor opening; helmet/visor must NOT tilt backward or expose an unnaturally large forehead. Keep the helmet slightly forward and level.',
  dream_chef:'Keep the protected face pixels exactly unchanged. Change only clothing, chef hat and background to a professional chef portrait.',
  dream_teacher:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a teacher portrait.',
  dream_scientist:'Keep the protected face pixels exactly unchanged. Change only clothing, props and background to a scientist or robotics researcher portrait.',
  dream_pilot:'Keep the protected face pixels exactly unchanged. Change only clothing, pilot cap and background to a professional pilot portrait. Pilot cap must sit LOW and slightly FORWARD, with the visor naturally just above the eyebrows; never pushed backward or perched high.'
};

function buildPrompt(lookKey) {
  const edit = LOOKS[lookKey];
  if (!edit) return null;
  return `${edit}\n\nCOMPOSITION RULE — MUST FOLLOW: create a wider medium half-body portrait, framed from the top of the head down to the waist or upper hips; when a bag is requested, include enough of the lower torso and hand to show the bag naturally. The person's head should occupy roughly 20–25% of the image height. Pull the virtual camera back noticeably and keep generous space around the body. Show both shoulders, chest, abdomen/waist and the relevant prop. If the reference is a close-up, OUTPAINT the missing torso and scene instead of copying the close crop. Never return a passport-photo crop, face close-up, chest-only portrait, oversized head-and-shoulders crop, or tight selfie framing.\n\nEXACT FACE RULE — HIGHEST PRIORITY: white mask pixels are protected source pixels and must remain pixel-faithful to the registered face. Keep the same eye shape and spacing, nose, mouth, jawline, cheek shape, ears, skin tone, age appearance and facial asymmetry. Do not redraw, beautify, de-age, age, gender-swap, smooth, stylize or reinterpret the face. Do not substitute a younger model or a different person. Blend only the editable hair/clothing/background around the protected face boundary.\n\nPROP PHYSICS RULE: any bag, diploma or bouquet must have realistic scale and contact. Hands must have anatomically plausible fingers and naturally grip handles or objects. No floating props, duplicated props, warped handles, fused hands, or objects merging into the torso.\n\nHEADGEAR FIT RULE: every hat, cap or helmet must be physically seated on the head, slightly forward rather than backward, with a natural contact line at the hair/forehead. Do not perch headgear high above the skull, tilt it backward, float it, or leave an excessive forehead gap.\n\nSEAMLESS FULL-FRAME RULE: create one continuous full-bleed photograph. Never show an inset portrait rectangle, passport-photo box, pasted central photo, inner frame, hard rectangular edge, or blurred-border collage. Extend the generated environment seamlessly behind and around the protected face.\n\nOutput a photorealistic photo only: no app UI, border, stars, dots, text, watermark, date or caption.`;
}

function cleanBase64(value) {
  return String(value || '').replace(/^data:[^;]+;base64,/, '');
}

async function generateWithFal({ imageBase64, maskBase64, mime, maskMime, prompt }) {
  const key = process.env.FAL_KEY;
  if (!key) throw Object.assign(new Error('FAL_KEY is not configured on Vercel.'), { status: 500 });
  if (!maskBase64) throw Object.assign(new Error('Face-protection mask is missing.'), { status: 400 });
  fal.config({ credentials: key });
  const model = process.env.FAL_FACE_EDIT_MODEL || 'ideogram/v4.5/edit';
  const imageUri = `data:${mime || 'image/jpeg'};base64,${cleanBase64(imageBase64)}`;
  const maskUri = `data:${maskMime || 'image/png'};base64,${cleanBase64(maskBase64)}`;
  const result = await fal.subscribe(model, {
    input: {
      prompt,
      image_url: imageUri,
      reference_image_urls: [imageUri],
      mask_url: maskUri,
      edit_precision: process.env.FAL_EDIT_PRECISION || 'high',
      quality: process.env.FAL_EDIT_QUALITY || 'low',
      image_size: 'auto',
      num_images: 1,
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
  const imageBuffer = Buffer.from(cleanBase64(imageBase64), 'base64');
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
    const { imageBase64, maskBase64, mime='image/jpeg', maskMime='image/png', lookKey } = req.body || {};
    if (!imageBase64 || !lookKey) return res.status(400).json({ error:'imageBase64 and lookKey are required.' });
    const prompt = buildPrompt(lookKey);
    if (!prompt) return res.status(400).json({ error:`Unknown lookKey: ${lookKey}` });
    const provider = String(process.env.IMAGE_PROVIDER || 'fal').toLowerCase();
    const result = provider === 'fal'
      ? await generateWithFal({ imageBase64, maskBase64, mime, maskMime, prompt })
      : await generateWithOpenAI({ imageBase64, mime, prompt });
    return res.status(200).json({
      imageBase64: result.outputBase64,
      mime:'image/jpeg',
      model: result.model,
      provider,
      identityMode: provider === 'fal' ? 'face-protected-mask-edit' : 'reference-edit',
      elapsedMs: Date.now()-started
    });
  } catch (error) {
    console.error('generate-graduation error:', error);
    const status = Number(error?.status) || 500;
    return res.status(status).json({ error:error?.message || 'Image edit failed.' });
  }
}
