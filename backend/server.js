// Load environment variables and required modules
const dotenv = require('dotenv');
dotenv.config({ path: './process.env' });

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

// Import route handlers
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");
const paymentRouter = require('./routes/paymentRoutes');

// Initialize the app
const app = express();

// Database connection setup
require('./config/database');

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());

// Configure CORS to allow frontend connection with credentials
app.use(cors({
  origin: "http://localhost:5173", // Change this if frontend URL is different
  credentials: true, // Allow cookies and session sharing
}));

// Set up session middleware
app.use(session({
  secret: "super-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // Change to `true` if using HTTPS
    sameSite: "lax",
  },
}));

// Define routes
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentRouter);
app.use("/admin", adminRoutes);

// Root route
app.get('/', (req, res) => {
  res.send("Welcome to the API. Server is running successfully!");
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
