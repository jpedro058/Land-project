import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export const generateContent = async (question) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    The context of this conversation is about wine. The user is asking a question about wine, and you are a wine expert who is answering the question. The response should be relatively short and concise. 
    The user asks: "${question}"`;

  const result = await model.generateContent(prompt);
  const fullResponse = result.response.text();
  const secondSentence = fullResponse.split(". ")[1] || fullResponse;

  return { fullResponse, secondSentence };
};
