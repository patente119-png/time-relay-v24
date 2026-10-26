import { fal } from '@fal-ai/client';

const LOOKS = {
  kg_today_gown: 'kindergarten graduation gown and mortarboard, small bouquet and diploma, bright school graduation photo zone',
  kg_today_hanbok: 'child-friendly Korean hanbok graduation outfit, bouquet and diploma, bright graduation photo zone',
  kg_today_uniform: 'neat kindergarten uniform, diploma, cheerful school graduation photo zone',
  kg_memory_uniform: 'nostalgic older Korean kindergarten uniform with a small period school bag, old classroom atmosphere',
  kg_memory_studio: 'nostalgic Korean kindergarten graduation portrait in an old-fashioned modest photo studio, vintage album mood',
  elem_today_gown: 'elementary-school graduation gown and mortarboard, bouquet and diploma, modern school graduation photo zone',
  elem_today_formal: 'neat age-appropriate elementary graduation formal outfit, bouquet and diploma, modern Korean school setting',
  elem_today_hanbok: 'age-appropriate Korean hanbok for elementary graduation, bouquet and school photo zone',
  elem_memory_bag: 'nostalgic Korean elementary student outfit with an old rectangular hard-sided school bag, old classroom setting',
  elem_memory_pe: 'nostalgic 1970s–1980s Korean elementary school PE tracksuit, old dirt playground, no modern sports branding',
  elem_memory_album: 'nostalgic Korean elementary graduation album portrait, old classroom and modest vintage photo-studio mood',
  middle_today_uniform: 'current Korean middle-school uniform, bouquet and diploma, modern school graduation photo zone',
  middle_today_knit: 'current Korean middle-school layered knit-vest uniform, bouquet, bright classroom graduation atmosphere',
  middle_today_gown: 'middle-school graduation gown and mortarboard, bouquet and diploma, school photo zone',
  middle_memory_black: 'nostalgic older Korean middle-school dark student uniform with an old rectangular hard-sided school bag',
  middle_memory_cap: 'nostalgic older Korean middle-school dark uniform with a traditional student cap naturally fitted to the head, old hard-sided school bag',
  middle_memory_pe: 'nostalgic 1970s–1980s Korean middle-school PE tracksuit, old dirt playground, restrained period styling',
  high_today_uniform: 'current Korean high-school uniform, bouquet and diploma, modern graduation photo zone',
  high_today_knit: 'current Korean high-school layered knit-vest uniform, bouquet, classroom graduation atmosphere',
  high_today_daily: 'current Korean high-school daily schoolwear or comfortable school uniform, diploma and school background',
  high_today_formal: 'neat formal graduation outfit, bouquet and diploma, modern Korean high-school graduation setting',
  high_memory_drill: `1970s–1980s South Korean high-school school-drill student portrait. The drill uniform has a light off-white, pale gray-white, or very light beige base fabric with moderate irregular black or charcoal speckled blotches. It must NOT be olive, green, modern camouflage, digital camouflage, leopard print, or fashion print. Add a traditional old Korean student cap fitted directly and naturally on the head with realistic contact shadow; a small 中 or 高 school emblem may appear on the front. Include an old-fashioned rectangular hard-sided Korean student school bag in gray or dark gray, rigid box-like shape with a top carrying handle, never a modern backpack. Background: authentic 1970s–1980s Korean classroom with old blackboard, wooden desks and chairs, old windows, a briquette coal heater and metal lunch boxes warming on top. Clearly a student, not a soldier; no weapon, tactical vest, combat gear, or military base.`,
  high_memory_black: 'nostalgic older Korean high-school portrait, traditional black or very dark navy student uniform, old gray/black/dark-brown rectangular hard-sided school bag with top handle, 1970s–1980s classroom or school gate, no modern backpack',
  high_memory_cap: 'nostalgic older Korean high-school dark student uniform, traditional student cap physically fitted to the head with realistic contact shadow and small 中 or 高 emblem when appropriate, old hard-sided school bag, old Korean school corridor or gate',
  high_memory_girl_uniform: 'nostalgic Korean high-school girl student portrait, preserve the reference person identity and apparent gender, traditional period girls school uniform in dark navy or black, modest blouse-and-skirt or classic silhouette, old rectangular hard-sided school bag, 1970s–1980s Korean classroom or corridor, no modern idol styling or cosplay',
  high_memory_girl_cap: 'nostalgic Korean high-school girl student portrait, preserve the reference person identity and apparent gender, period girls school uniform with traditional student cap fitted naturally to the head, small 中 or 高 emblem when appropriate, old rectangular hard-sided school bag, old school corridor or gate',
  high_memory_pe: 'nostalgic 1970s–1980s Korean high-school physical-education portrait, simple retro school tracksuit with restrained stripe details, slightly loose fit, period sneakers, old dirt playground or gym, no modern sports branding',
  high_memory_album: 'nostalgic Korean high-school graduation-album portrait, neat period school or ceremony outfit, old classroom, corridor or modest vintage photo studio, bouquet or diploma allowed, classic keepsake mood',
  uni_today_gown: 'university graduation portrait, degree gown and mortarboard, diploma and bouquet, modern campus',
  uni_today_modern: 'modern elegant university degree gown, bouquet and diploma, contemporary campus graduation photo',
  uni_today_hanbok: 'Korean hanbok university graduation portrait, bouquet and diploma, campus background',
  uni_today_formal: 'neat formal suit university graduation portrait, diploma and bouquet, campus background',
  uni_memory_gown: 'nostalgic older Korean university degree portrait, vintage graduation album aesthetic, period-appropriate gown and modest studio or campus background',
  uni_memory_campus: 'nostalgic older Korean university campus portrait with books and period bag, vintage campus atmosphere',
  dream_doctor: 'aspirational future portrait as a doctor, clean white medical coat and stethoscope, realistic professional setting, no text',
  dream_firefighter: 'aspirational future portrait as a firefighter, safe professional firefighter uniform and helmet properly fitted to the head, no flames touching the subject, no weapons',
  dream_police: 'aspirational future portrait as a friendly police officer, professional uniform and naturally fitted cap, no weapon emphasis',
  dream_astronaut: 'aspirational future portrait as an astronaut in a realistic spacesuit, helmet held or naturally fitted, science/space setting',
  dream_chef: 'aspirational future portrait as a chef, professional chef jacket and chef hat physically fitted to the head, clean kitchen setting',
  dream_teacher: 'aspirational future portrait as a teacher, books and warm classroom atmosphere, professional and approachable',
  dream_scientist: 'aspirational future portrait as a scientist or robotics researcher, clean modern lab, robotics/science elements',
  dream_pilot: 'aspirational future portrait as a pilot, professional pilot uniform and naturally fitted cap, aircraft or aviation setting',
};

const STAGE = { kg:'kindergarten age', elem:'elementary-school age', middle:'middle-school age', high:'high-school age', uni:'university age' };

function buildPrompt(stage, lookKey) {
  const look = LOOKS[lookKey];
  if (!look) return null;
  const age = STAGE[stage] || 'appropriate age for the selected school stage';
  return `Create a photorealistic Korean commemorative portrait using the supplied reference image as the identity reference.\n\nIDENTITY LOCK:\nPreserve the same person's facial identity, recognizable facial structure, skin tone, apparent gender, and distinguishing features. Do not replace the person with a different face. Adjust age only when the selected school stage requires it, while keeping the face recognizably the same person.\n\nSELECTED STAGE: ${age}.\nSELECTED LOOK: ${look}\n\nCOMPOSITION:\nOne person only, natural proportions, realistic anatomy, clean hands, natural headwear contact, polished Korean commemorative-photo quality. Keep the face sharp and unobstructed. Clothing and props must fit the selected period and concept.\n\nOUTPUT RULE:\nGenerate PHOTO ONLY. Do not include app UI, frames, borders, buttons, captions, dates, logos, watermarks, written labels, or decorative text baked into the image. No duplicate person, duplicate head, duplicate body, extra limbs, or detached/floating hat.`;
}

function decodeBase64(value) {
  const clean = String(value || '').replace(/^data:[^;]+;base64,/, '');
  return Buffer.from(clean, 'base64');
}

async function generateWithFal({ imageBase64, mime, prompt }) {
  const key = process.env.FAL_KEY;
  if (!key) throw Object.assign(new Error('FAL_KEY is not configured on Vercel.'), { status: 500 });
  fal.config({ credentials: key });
  const imageUrl = `data:${mime || 'image/jpeg'};base64,${String(imageBase64).replace(/^data:[^;]+;base64,/, '')}`;
  const result = await fal.subscribe('fal-ai/flux-pro/kontext', {
    input: {
      prompt,
      image_url: imageUrl,
      num_images: 1,
      output_format: 'jpeg',
      aspect_ratio: '1:1',
      guidance_scale: 3.5,
      safety_tolerance: '2',
      enhance_prompt: false,
    },
    logs: false,
  });
  const url = result?.data?.images?.[0]?.url;
  if (!url) throw Object.assign(new Error('fal.ai returned no image URL.'), { status: 502 });
  const imageResponse = await fetch(url);
  if (!imageResponse.ok) throw Object.assign(new Error('fal.ai generated image download failed.'), { status: 502 });
  return {
    outputBase64: Buffer.from(await imageResponse.arrayBuffer()).toString('base64'),
    model: 'fal-ai/flux-pro/kontext',
  };
}

async function generateWithOpenAI({ imageBase64, mime, prompt }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw Object.assign(new Error('OPENAI_API_KEY is not configured on Vercel.'), { status: 500 });
  const imageBuffer = decodeBase64(imageBase64);
  if (!imageBuffer.length) throw Object.assign(new Error('Invalid image data.'), { status: 400 });
  const model = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2';
  const size = process.env.OPENAI_IMAGE_SIZE || '1024x1024';
  const quality = process.env.OPENAI_IMAGE_QUALITY || 'low';
  const compression = process.env.OPENAI_IMAGE_COMPRESSION || '72';
  const form = new FormData();
  form.append('model', model);
  form.append('prompt', prompt);
  form.append('image', new Blob([imageBuffer], { type: mime || 'image/jpeg' }), 'reference.jpg');
  form.append('size', size);
  form.append('quality', quality);
  form.append('output_format', 'jpeg');
  form.append('output_compression', String(compression));
  form.append('n', '1');
  const response = await fetch('https://api.openai.com/v1/images/edits', {
    method: 'POST', headers: { Authorization: `Bearer ${apiKey}` }, body: form,
  });
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
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const started = Date.now();
  try {
    const { imageBase64, mime = 'image/jpeg', stage, lookKey } = req.body || {};
    if (!imageBase64 || !lookKey) return res.status(400).json({ error: 'imageBase64 and lookKey are required.' });
    const prompt = buildPrompt(stage, lookKey);
    if (!prompt) return res.status(400).json({ error: `Unknown lookKey: ${lookKey}` });
    const provider = String(process.env.IMAGE_PROVIDER || 'openai').toLowerCase();
    const result = provider === 'fal'
      ? await generateWithFal({ imageBase64, mime, prompt })
      : await generateWithOpenAI({ imageBase64, mime, prompt });
    return res.status(200).json({
      imageBase64: result.outputBase64,
      mime: 'image/jpeg',
      model: result.model,
      provider,
      elapsedMs: Date.now() - started,
    });
  } catch (error) {
    console.error('generate-graduation error:', error);
    const status = Number(error?.status) || 500;
    return res.status(status).json({ error: error?.message || 'Image generation failed.' });
  }
}
