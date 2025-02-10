/**
 * This script is used to seed the MongoDB database with product data
 * from a JSON file (products.json). It performs the following steps:
 * 1. Connects to the MongoDB database using environment variables.
 * 2. Reads the product data from the products.json file.
 * 3. Deletes existing product records (optional, to prevent duplicates).
 * 4. Inserts new product records into the database.
 * 5. Exits the process after completion.
 *
 * Usage:
 * Run npm run seed to execute this script and populate the database.
 */

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const Product = require("../models/Product"); // Import the Product model

dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB using MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 20000, // Increase timeout to handle delays
  })
  .then(() => console.log("✅ MongoDB connected for seeding"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if connection fails
  });

// Define the path to the products.json file
const productsFilePath = path.join(__dirname, "./products.json");

// Read the JSON file and parse it into JavaScript objects
const productsData = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

/**
 * Function to import products into MongoDB
 * - Deletes existing product data (optional)
 * - Inserts new product data from products.json
 */
const importProducts = async () => {
  try {
    await Product.deleteMany(); // Remove all existing products to avoid duplication
    await Product.insertMany(productsData); // Insert new products
    console.log("✅ Products imported successfully!");
    process.exit(); // Exit the script after successful execution
  } catch (error) {
    console.error("❌ Error importing products:", error);
    process.exit(1); // Exit the script with an error code
  }
};

// Execute the import function
importProducts();