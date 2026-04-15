import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    amount: { type: Number, require: true },
    category: { type: String, require: true },
    date: { type: Date, default: Date.now },
    //createdAt: new Date().toLocaleDateString(),
    description: String
});

export const Expense = mongoose.model('Expense', expenseSchema)