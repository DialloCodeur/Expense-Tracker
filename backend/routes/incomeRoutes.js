import express from "express"
import { createIncome } from "../controllers/incomeController.js"

const router = express.Router();
router.post("/", createIncome);
export default router;