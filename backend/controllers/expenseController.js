import { Expense } from "../models/Expense";

export const createExpense = async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}