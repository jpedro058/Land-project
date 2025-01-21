import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const createServer = () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(bodyParser.json());

  return app;
};

export default createServer;
