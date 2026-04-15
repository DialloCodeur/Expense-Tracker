import express from "express";
import { createExpense, getExpenses, updateExpense, deleteExpense, filterExpensesByDate, filterExpensesByCategory } from "../controllers/expenseController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware, createExpense);
router.get("/", authMiddleware, getExpenses);
//router.get("/", authMiddleware, resetExpenses);
router.patch("/:id", authMiddleware, updateExpense);
router.delete("/:id", authMiddleware, deleteExpense);
router.get("/", authMiddleware, filterExpensesByDate);
router.get("/", authMiddleware, filterExpensesByCategory);
export default router
