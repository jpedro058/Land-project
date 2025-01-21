import fs from "fs";

const LOG_FILE = "logs.json";

export const readLogs = () => {
  if (fs.existsSync(LOG_FILE)) {
    try {
      const data = fs.readFileSync(LOG_FILE, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading log file:", error);
      return [];
    }
  }
  return [];
};

export const saveLogs = (logEntry) => {
  try {
    const logs = readLogs();
    logs.push(logEntry);
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving logs to file:", error);
  }
};
