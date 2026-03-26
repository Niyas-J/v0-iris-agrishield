import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { prompt, language } = body

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({
        text: language === 'kn' ? "ನಮಸ್ಕಾರ! ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ನಾವು ಸ್ವೀಕರಿಸಿದ್ದೇವೆ. ಈ ಪ್ರತಿಕ್ರಿಯೆ ಡೆಮೊ ಮಟ್ಟದಲ್ಲಿದೆ. ದಯವಿಟ್ಟು ನಿಜವಾದ AI ಗಾಗಿ GEMINI_API_KEY ಸೇರಿಸಿ." : 
              language === 'hi' ? "नमस्ते! हमें आपका प्रश्न मिला है। यह एक डेमो प्रतिक्रिया है, कृपया वास्तविक AI के लिए GEMINI_API_KEY जोड़ें।" : 
              "Hello! I am Namma Krishi. This is currently a mock response because your GEMINI_API_KEY is missing. Once added, I will provide actionable solutions for your crop issues!",
      }), { status: 200 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const targetLang = language === 'kn' ? 'Kannada' : language === 'hi' ? 'Hindi' : 'English';

    const systemPrompt = `You are Namma Krishi, an expert AI agricultural assistant designed specifically for farmers. 
Tone & Behavior:
- Friendly, respectful, and simple communication.
- Act like a helpful human agriculture expert on a phone call.
- NEVER use technical jargon or markdown formatting like **bold** or *italics*. Respond in plain text suitable for Text-to-Speech engines.
- The output language must strictly align with the user's requested language: ${targetLang}.

Structure your response simply:
1. Identify the problem they mentioned
2. Explain a simple cause
3. Provide a clear, actionable solution and/or fertilizer suggestion

Keep it brief (max 3 sentences) and highly practical. Make sure it sounds totally natural when spoken aloud.
User query: "${prompt}"`

    const result = await model.generateContent(systemPrompt)
    const response = await result.response
    const text = response.text()

    return new Response(JSON.stringify({ text: text.replace(/\*/g, '').trim() }), { status: 200 })

  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Failed to process request" }), { status: 500 })
  }
}
