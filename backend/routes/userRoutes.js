import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();
router.get("/profile", authMiddleware, (req, res) => {
    res.json(req.user);
});
router.get("/profile", authMiddleware, getProfile);
router.patch("profile/:id", authMiddleware, updateProfile);

export default router;