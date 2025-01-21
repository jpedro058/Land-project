import { generateContent } from "../services/genAIService.js";
import { saveLogs } from "../utils/fileHandler.js";

export const queryModel = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const { fullResponse, secondSentence } = await generateContent(question);
    const userIP =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const logEntry = {
      question,
      fullResponse,
      secondSentence,
      userIP,
      timestamp: new Date().toISOString(),
    };

    saveLogs(logEntry);

    console.log("New log entry:", logEntry);
    res.json(logEntry);
  } catch (error) {
    console.error("Error querying the model:", error);
    res.status(500).json({ error: "Failed to query the model." });
  }
};
