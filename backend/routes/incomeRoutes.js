import express from "express";
import { createIncome, getIncome, updateIncome } from "../controllers/incomeController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware, createIncome);
router.get("/", authMiddleware, getIncome);
router.patch("/", authMiddleware, updateIncome);
export default router;