import createServer from "./src/config/server.js";
import logsRoutes from "./src/routes/logs.js";
import queryRoutes from "./src/routes/query.js";

const app = createServer();
const PORT = 8080;

// Routes
app.use("/logs", logsRoutes);
app.use("/query", queryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/* import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulated database
const LOG_FILE = "logs.json";
let logs = [];
if (fs.existsSync(LOG_FILE)) {
  try {
    const data = fs.readFileSync(LOG_FILE, "utf-8");
    logs = JSON.parse(data);
  } catch (error) {
    console.error("Error reading log file:", error);
  }
}

const genAI = new GoogleGenerativeAI("AIzaSyCF3w-1w9BtlzS3zDI457YxqjdB33lyHgU");

function saveLogsToFile() {
  try {
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving logs to file:", error);
  }
}

// Route to query the LLM
app.post("/query", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    // Call the LLM API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      The context of this conversation is about wine. The user is asking a question about wine, and you are a wine expert who is answering the question. The response should be relatively short and concise. 
      The user asks: "${question}"`;

    const result = await model.generateContent(prompt);

    const fullResponse = result.response.text();
    const secondSentence = fullResponse.split(". ")[1] || fullResponse;

    // Simulate collecting additional data (e.g., user IP)
    const userIP =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // Save to logs
    const logEntry = {
      question,
      fullResponse,
      secondSentence,
      userIP,
      timestamp: new Date().toISOString(),
    };
    logs.push(logEntry);
    saveLogsToFile();

    console.log("New log entry:", logEntry);
    res.json(logEntry);
  } catch (error) {
    console.error("Error querying the LLM:", error);
    res.status(500).json({ error: "Failed to query the LLM." });
  }
});

// Route to retrieve logs
app.get("/logs", (req, res) => {
  res.json(logs);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 */
