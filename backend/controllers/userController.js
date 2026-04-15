import { User } from "../models/User.js";
import bcrypt from "bcryptjs"

export const getProfile = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/*export const resetProfile = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({})
    } catch (error) {
        
    }
}*/

export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const { name, email, password } = req.body;
        user.name = name || user.name;
        user.email = email || user.email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}