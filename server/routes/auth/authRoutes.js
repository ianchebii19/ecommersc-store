const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
} = require("../../controlers/auth/authControlers");

const authRoutes = express.Router();

// Use authRoutes instead of router
authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);
authRoutes.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = authRoutes;
