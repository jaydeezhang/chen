import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateArtifactDescription = async (artifactName: string, period: string): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Unable to generate dynamic description.";
  }

  try {
    const prompt = `
      你是南京博物院的资深数字策展人。请为文物"${artifactName}"（${period}）写一段优美、富有诗意且具有历史深度的介绍。
      
      要求：
      1. 风格典雅，体现中国传统文化韵味。
      2. 包含该文物的艺术特色、历史背景或文化寓意。
      3. 字数控制在150字以内。
      4. 语言简洁生动，吸引现代观众。
      
      请直接返回介绍文本，不要包含Markdown格式或其他多余内容。
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "暂无详细介绍。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "智能解说暂时不可用，请稍后再试。";
  }
};