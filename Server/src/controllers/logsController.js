import { readLogs, saveLogs } from "../utils/fileHandler.js";

export const getLogs = (req, res) => {
  try {
    const logs = readLogs();
    res.json(logs);
  } catch (error) {
    console.error("Error retrieving logs:", error);
    res.status(500).json({ error: "Failed to retrieve logs." });
  }
};
