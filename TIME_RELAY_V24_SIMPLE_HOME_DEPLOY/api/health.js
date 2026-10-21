export default function handler(req,res){
  res.status(200).json({
    ok:true,
    version:'V23.7 Vercel',
    model:process.env.OPENAI_IMAGE_MODEL || 'gpt-image-2',
    keyConfigured:!!process.env.OPENAI_API_KEY
  });
}
