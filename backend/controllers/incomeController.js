import { Income } from "../models/Income";

export const createIncome = async (req, res) => {
    try {
        const income = Income.create(req.body);
        res.status(201).json(income)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}