import express from "express";
import { queryModel } from "../controllers/queryController.js";

const router = express.Router();

router.post("/", queryModel);

export default router;
