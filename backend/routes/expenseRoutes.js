import express from "express";
import { createExpense } from "../controllers/expenseController";

const router = express.Router();
router.post("/", createExpense);
export default router