require('dotenv').config();  
console.log(process.env.MONGO_URI);  // Verify that it's correctly loaded
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes"); // Ensure this path is correct
const orderRoutes = require("./routes/orderRoutes"); // Import orderRoutes
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const cors = require("cors"); // Add this import for CORS
const bodyParser = require("body-parser"); // Make sure body-parser is imported

// Connect to MongoDB
const uri = "mongodb+srv://guildtechnology0:AGNKDFi6644ZkkEd@cluster0.tdauz.mongodb.net/"; // Ensure this URI is correct

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
       console.log('Connected to MongoDB');
   })
   .catch(err => {
       console.log('Error connecting to MongoDB:', err);
   });

// Use the product and order routes with proper prefixes
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

// Setup middleware for cross-origin requests
app.use(cors());
app.use(bodyParser.json()); // Parse JSON requests

// Import and use the payment routes
const paymentRouter = require('./routes/paymentRoutes'); // Adjust path if necessary
app.use('/api', paymentRouter); // All payment routes will be prefixed with /api

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(process.env.STRIPE_SECRET_KEY); // This should log your Stripe secret key
  console.log(process.env.MONGO_URI); // This should log your MongoDB URI
});
