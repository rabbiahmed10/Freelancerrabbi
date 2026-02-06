import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_OWNER_CONTEXT } from "./constants";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const ai = getAIClient();
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: PORTFOLIO_OWNER_CONTEXT,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to Rabbi's mainframe. Please try again or use the contact form!";
  }
};