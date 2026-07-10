import { Income } from "../models/Income.js";

export const createIncome = async (req, res) => {
    try {
        const { amount } = req.body;
        const income = await Income.create({
            amount,
            user: req.user.id
        });
        res.status(201).json(income);
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export const getIncome = async (req, res) => {
    try {
        const income = await Income.find({ user: req.user.id });
        console.log(income);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateIncome = async (req, res) => {
    try {
        const { amount } = req.body;
        if (amount === undefined) {
            return res.status(400).json({ message: "Amount is required" });
        }
        const updatedIncome = await Income.findOneAndUpdate(
            { user: req.user.id },
            { $set: { amount } },
            { new: true, runValidators: true }
        );
        if (!updatedIncome) {
            return res.status(404).json({ message: "Income not found" })
        }
        console.log(updatedIncome);
        res.status(200).json(updatedIncome);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}