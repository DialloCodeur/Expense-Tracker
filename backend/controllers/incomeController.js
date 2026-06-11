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
        const allIncomes = await Income.find({ user: req.user.id });
        res.status(200).json(allIncomes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateIncome = async (req, res) => {
    try {
        const { amount } = req.body;
        //const { id } = req.params;
        const updatedIncome = await Income.findByIdAndUpdate({
            //_id: id,
            user: req.user.id
        }, {
            $set: amount
        }, {
            returnDocument: "after",
            runValidators: true
        });
        if (!updateIncome) {
            return res.status(404).json({ message: "Income not found" })
        }
        res.status(200).json(updateIncome);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}