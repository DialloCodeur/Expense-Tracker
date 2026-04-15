import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const authMiddleware = async (req, res, next) => {
    try {
        const authHeaders = req.headers.authorization;
        //console.log(authHeaders)
        if (!authHeaders) {
            return res.status(401).json({ message: "No token provided" });
        }
        const token = authHeaders.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token invalid" });
    }
}

export default authMiddleware;