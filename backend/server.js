//TODO: Understand why expenses are not retrieved when /api/expenses is called with GET method, test other routes with postmann and then begin the frontend implementation
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expenseRoutes from "./routes/expenseRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    try {
        app.use("/api/expenses", expenseRoutes);
        app.use("/api/auth", authRoutes);
        app.use("/api/users", userRoutes);
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
main().catch(err => console.log(err));

