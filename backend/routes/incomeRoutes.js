import express from "express"
import { createIncome } from "../controllers/incomeController"

const router = express.Router();
router.post("/", createIncome);
export default router;