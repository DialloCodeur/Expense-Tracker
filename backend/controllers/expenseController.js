import { Expense } from "../models/Expense.js";

export const createExpense = async (req, res) => {
    try {
        const { amount, category, date, description } = req.body;
        const expense = await Expense.create({
            amount,
            category,
            date,
            description,
            user: req.user.id
        });
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const getExpenses = async (req, res) => {
    try {
        //console.log(req.user.id)
        const allExpenses = await Expense.find({ user: req.user.id });
        //console.log(allExpenses);
        res.status(200).json(allExpenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/*export const resetExpenses = async (req, res) => {
    try {
        //const user = req.user;
        res.status(200).json({
            _id = "",
            amount = 0,
            category = "",
            date = null,
            description = ""
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}*/

export const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const allowedFields = ["amount", "category", "date", "description"];
        const updatedFields = {};
        Object.keys(req.body).forEach((key) => {
            if (allowedFields.includes(key)) {
                updatedFields[key] = req.body[key];
            }
        }
        );
        const updatedExpense = await Expense.findByIdAndUpdate(
            { _id: id, user: req.user.id },
            { $set: updatedFields },
            { returnDocument: "after", runValidators: true }
        );
        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await Expense.findOneAndDelete({ _id: id, user: req.user.id });
        if(!id){
            return res.status(404).json({message: "Incorrect id"})
        }
        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const filterExpensesByDate = async (req, res) => {
    try {
        const filtredExpenses = await Expense.find({ date: req.query.date, user: req.user.id });
        res.status(200).json(filtredExpenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const filterExpensesByCategory = async (req, res) => {
    try {
        const filter = {
            user: req.user.id
        }
        filter.category = {
            $regex: req.query.category,
            $options: "i"
        }
        const filtredExpenses = await Expense.find(filter);
        res.status(200).json(filtredExpenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}