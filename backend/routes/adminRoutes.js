const express = require("express");
const router = express.Router();

const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "admin123",
};

// Admin login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    req.session.admin = true;
    return res.json({ redirect: "/admin/dashboard" });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

// Admin dashboard access control
router.get("/dashboard", (req, res) => {
  if (!req.session.admin) {
    return res.status(401).json({ message: "Unauthorized, please log in." });
  }
  res.json({ message: "Welcome to the admin dashboard!" });
});

// Admin logout
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully", redirect: "/admin/login" });
  });
});

module.exports = router;
