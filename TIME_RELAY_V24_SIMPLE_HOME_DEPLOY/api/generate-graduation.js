import OpenAI, { toFile } from 'openai';

const STAGES = {
  kindergarten: 'Korean kindergarten or preschool graduation theme',
  elementary: 'Korean elementary school graduation theme',
  middle: 'Korean middle school graduation theme',
  high: 'Korean high school graduation theme',
  university: 'Korean university or graduate school graduation theme'
};

const LOOKS = {
  kg_today_gown: 'current Korean kindergarten graduation portrait, small graduation gown, correctly fitted mortarboard, pastel flower bouquet, simple diploma folder, bright flower-and-balloon photo-zone atmosphere',
  kg_today_hanbok: 'current Korean kindergarten graduation portrait in a neat modern hanbok, small bouquet, simple diploma folder, bright graduation photo-zone',
  kg_today_uniform: 'current Korean kindergarten graduation portrait in a neat kindergarten uniform, small bouquet and diploma folder, school entrance or bright graduation photo-zone',
  elem_today_gown: 'current Korean elementary-school graduation portrait, graduation gown and correctly fitted mortarboard, bouquet and diploma folder, clean school graduation photo-zone',
  elem_today_formal: 'current Korean elementary-school graduation portrait, neat age-appropriate formal outfit, bouquet and diploma folder, bright school hall or graduation photo-zone',
  elem_today_hanbok: 'current Korean elementary-school graduation portrait in modern hanbok, bouquet and diploma folder, tasteful flower-and-balloon graduation photo-zone',
  middle_today_uniform: 'current Korean middle-school graduation portrait, neat school uniform, bouquet and diploma folder, realistic school entrance or graduation photo-zone',
  middle_today_knit: 'current Korean middle-school graduation portrait, school uniform layered with a neat V-neck knit vest, bouquet, school corridor or classroom graduation setting',
  middle_today_gown: 'current Korean middle-school graduation portrait, graduation gown and correctly fitted mortarboard, bouquet and diploma folder, simple school photo-zone',
  high_today_uniform: 'current Korean high-school graduation portrait, modern blazer school uniform with white shirt and tie or ribbon as appropriate, bouquet and diploma folder, school graduation photo-zone',
  high_today_knit: 'current Korean high-school graduation portrait, white shirt and V-neck knit vest school uniform, bouquet, school corridor or classroom background',
  high_today_daily: 'current Korean high-school graduation portrait in comfortable school daily-wear or polo-style schoolwear, bouquet and diploma folder, school yard or campus photo-zone',
  high_today_formal: 'current Korean high-school graduation portrait in neat semi-formal or suit-like ceremony outfit, bouquet and diploma folder, tasteful school or studio graduation background',
  uni_today_gown: 'current Korean university graduation portrait, academic gown and correctly fitted mortarboard, diploma folder and bouquet, university campus or official graduation photo-zone',
  uni_today_modern: 'current Korean university graduation portrait, modern tailored academic gown, correctly fitted mortarboard, bouquet and diploma, polished campus graduation photography',
  uni_today_hanbok: 'current Korean university graduation portrait in elegant modern hanbok, bouquet and diploma folder, university campus or tasteful graduation photo-zone',
  uni_today_formal: 'current Korean university graduation portrait in neat formal suit or smart formalwear, diploma folder and bouquet, university campus background',
  dream_doctor: 'future-doctor costume, clean white medical coat, simple stethoscope, bright clinic or study background, friendly safe portrait, no readable badge text',
  dream_firefighter: 'future-firefighter costume, clean firefighter turnout jacket and helmet worn naturally, fire-station background, no active emergency and no dangerous flames',
  dream_police: 'future-police-officer inspired uniform, neat and friendly, no weapon, no baton, no readable badge text, safe civic-service portrait',
  dream_astronaut: 'future-astronaut suit, realistic modern space suit, face fully visible, helmet fitted correctly or held beside the body, spacecraft training background',
  dream_chef: 'future-chef costume, clean chef jacket and apron, chef hat fitted naturally, bright safe kitchen background',
  dream_teacher: 'future-teacher outfit, neat smart-casual clothing, holding a book or teaching material, classroom background, warm trustworthy portrait',
  dream_scientist: 'future scientist or robotics researcher outfit, clean lab coat, small robot model or tablet, bright safe laboratory background, no hazardous experiment',
  dream_pilot: 'future airline pilot outfit, neat pilot uniform, cockpit or airport-training background, pilot cap held at the side or fitted naturally, no brand logos',
  kg_memory_uniform: 'nostalgic old Korean kindergarten graduation portrait, simple vintage kindergarten uniform, small satchel or old school bag optional, warm old-photo studio mood',
  kg_memory_studio: 'nostalgic Korean kindergarten graduation studio portrait inspired by old family photo albums, simple ceremony outfit, vintage studio backdrop',
  elem_memory_bag: 'nostalgic older Korean elementary-school portrait, simple period schoolwear, rectangular dark brown or black hard-sided student book bag with handle, old classroom or schoolyard, no modern backpack',
  elem_memory_pe: 'nostalgic old Korean elementary-school physical-education tracksuit, simple stripe details, vintage school playground or gym',
  elem_memory_album: 'nostalgic Korean elementary-school graduation album portrait, period-inspired neat clothing, subtle aged photo-studio or school background',
  middle_memory_black: 'nostalgic Korean middle-school student portrait, neat black or very dark school uniform, old rectangular hard-sided book bag, vintage classroom or school corridor',
  middle_memory_cap: 'nostalgic Korean middle-school student portrait, dark traditional school uniform with period student cap correctly fitted on the head, old rectangular book bag, vintage schoolyard or corridor',
  middle_memory_pe: 'nostalgic Korean middle-school physical-education tracksuit, old school playground or gym, period school-photo atmosphere',
  high_memory_drill: '1970s–1980s South Korean high-school school-drill student portrait, light off-white or pale gray-white uniform with moderate irregular black or charcoal speckled blotches, black pattern clearly visible but not overly dense, traditional old student cap fitted naturally on the head with a small visible 中 or 高 emblem on the front, old gray rectangular hard-sided Korean student school bag with a top handle, authentic 1970s–1980s Korean classroom background with blackboard, wooden desks and chairs, old classroom windows, briquette coal heater, metal lunch boxes warming naturally on top of the heater, warm nostalgic school atmosphere, clearly a student and not a soldier, no weapon, no rifle, no tactical gear, no modern military uniform, no digital camouflage, no leopard print, no fashion shirt pattern',
  high_memory_black: 'nostalgic older Korean high-school student portrait, simple black or very dark traditional student uniform with clean straight silhouette, old rectangular hard-sided student book bag in gray, dark gray, black or dark brown with a top handle, 1970s–1980s Korean classroom, school corridor or school gate, wooden desks and old blackboard where appropriate, no modern backpack, no modern streetwear, no brand logos',
  high_memory_cap: 'nostalgic older Korean high-school student portrait, dark traditional student uniform with a period student cap correctly fitted to the head, cap base physically touching the hair with realistic contact shadow, small visible 中 or 高 emblem on the cap front, old rectangular hard-sided student bag in gray, dark gray, black or dark brown with top handle, old Korean classroom, school corridor or school gate, no floating cap, no oversized cap, no modern baseball cap, no modern backpack',
  high_memory_girl_uniform: 'nostalgic Korean high-school girl student portrait, neat period girls school uniform in dark navy or black tones, modest blouse-and-skirt or classic old school-uniform silhouette, old rectangular hard-sided Korean student school bag in gray, dark gray, black or dark brown with top handle, 1970s–1980s Korean classroom or school corridor background, wooden desks and old blackboard where appropriate, no modern fashion styling, no modern backpack, no cosplay feeling',
  high_memory_girl_cap: 'nostalgic Korean high-school girl student portrait, period girls school uniform with a traditional student cap fitted naturally on the head, cap base physically touching the hair with realistic contact shadow, small visible 中 or 高 emblem on the cap front, old rectangular hard-sided Korean student school bag in gray or dark gray with top handle, old Korean classroom, corridor or school gate background, no floating cap, no oversized cap, no modern baseball cap, no modern backpack',
  high_memory_pe: 'nostalgic 1970s–1980s Korean high-school physical-education portrait, simple slightly loose school tracksuit with restrained stripe or piping details, period sneakers, old dirt school playground or vintage school gym, authentic Korean school-photo mood, no modern sports branding, no glossy contemporary training suit',
  high_memory_album: 'nostalgic Korean high-school graduation-album portrait, old-style student uniform or neat period ceremony clothing, diploma or small bouquet allowed, old rectangular hard-sided school bag placed naturally beside the student, old classroom with wooden desks and blackboard, school corridor, or modest vintage Korean photo studio, subtle retro film atmosphere while keeping the face crisp and realistic, no modern luxury studio styling',
  uni_memory_gown: 'nostalgic Korean university graduation portrait inspired by older graduation albums, traditional academic gown and correctly fitted mortarboard, diploma folder, vintage campus or studio mood',
  uni_memory_campus: 'nostalgic Korean university campus portrait, period-inspired formal campus clothing, books or old leather-style satchel, vintage campus background'
};

function promptFor(stage, lookKey){
  const stageText = STAGES[stage];
  const look = LOOKS[lookKey];
  if(!stageText || !look) return null;
  return `Photorealistic portrait edit of the EXACT SAME PERSON in the uploaded photo.

IDENTITY:
Preserve the same person's identity and same apparent age. Keep face shape, forehead, hairline, hair, eyes, nose, mouth, jaw, ears and skin tone. Do not beautify, de-age, age-up, gender-swap, or replace the person.

TARGET:
Education stage: ${stageText}.
Selected concept: ${look}.

HEADWEAR:
Any mortarboard, student cap, helmet, chef hat or pilot cap must physically sit on the head at correct scale and perspective. The base must touch the hair/scalp naturally with realistic contact shadow. No floating hat, no detached cap, no gap above the head, no oversized headwear, no disconnected tassel. For old student caps, a small 中 or 高 emblem on the front may be used when appropriate.

PROPS:
Bouquets, diploma folders, books and old school bags must be held naturally or placed naturally beside the person. Old school bags must be rectangular, rigid, hard-sided and hand-carried with a top handle. Prefer gray, dark gray, black or dark brown. Never replace them with a modern backpack.

HISTORICAL SCHOOL RULE:
For nostalgic Korean school concepts, keep a school-student atmosphere. Do not convert school-drill clothing into a modern soldier, tactical operator, military portrait, fashion-camouflage outfit, or cosplay character.

PORTRAIT:
Natural head-neck-body connection, realistic anatomy, realistic fabric and lighting, crisp face, full head visible. Background should support the selected graduation, school, career, or nostalgic concept.

No text, no school logo, no brand logo, no watermark, no app UI, no border, no caption.`;
}

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).json({error:'POST only'});
  try{
    const { imageBase64, mime='image/jpeg', stage='high', lookKey } = req.body || {};
    if(!imageBase64) return res.status(400).json({error:'얼굴 사진이 없습니다.'});
    const prompt = promptFor(stage,lookKey);
    if(!prompt) return res.status(400).json({error:'학령 또는 스타일이 올바르지 않습니다.'});
    if(!process.env.OPENAI_API_KEY) return res.status(500).json({error:'OPENAI_API_KEY가 설정되지 않았습니다.'});

    const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
    const buf = Buffer.from(imageBase64,'base64');
    const image = await toFile(buf,'face.jpg',{type:mime});
    const model = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2';
    const size = process.env.OPENAI_IMAGE_SIZE || '1024x1024';
    const quality = process.env.OPENAI_IMAGE_QUALITY || 'low';
    const output_compression = Number(process.env.OPENAI_IMAGE_COMPRESSION || 72);
    const started = Date.now();
    const result = await openai.images.edit({
      model, image, prompt, size, quality,
      output_format:'jpeg', output_compression, n:1
    });
    const elapsedMs = Date.now()-started;
    const b64 = result?.data?.[0]?.b64_json;
    if(!b64) throw new Error('이미지 데이터를 받지 못했습니다.');
    return res.status(200).json({ok:true,imageBase64:b64,mime:'image/jpeg',elapsedMs});
  }catch(err){
    console.error(err);
    const status = Number(err?.status) || 500;
    return res.status(status>=400 && status<600 ? status : 500).json({error:String(err?.message || '이미지 생성 오류')});
  }
}
