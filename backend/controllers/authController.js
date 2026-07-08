import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, confirmedPassword } = req.body;
        if (!name || !email || !password || !confirmedPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const nameRegex = /^[A-ZÀ-ÖØ-öø-ÿ]+(?:[ '\-][A-ZÀ-ÖØ-öø-ÿ]+)*$/i
        if (!nameRegex.test(name)) {
            return res.status(400).json({ message: "Name should contain only letters, spaces, hyphens or apostrophes" });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email" });
        }
        const passwordRegex = /^[0-9A-Z!@#$%^&*]+$/i
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: "Password should contain only letters, numbers and !@#$%^&*" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password should contain at least 6 characters" });
        }
        if (!/[A-Z]/i.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
            return res.status(400).json({ message: "Password must include letters, numbers and special characters" });
        }
        if (confirmedPassword !== password) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { "expiresIn": "2h" });
        res.status(201).json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email or Password incorrect" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Email or Password incorrect" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
        res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}