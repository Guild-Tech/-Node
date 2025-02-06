const express = require("express");
const { getAllProducts } = require("../controllers/productController");  // Ensure this is correct
const router = express.Router();

// Define routes
router.get("/products", getAllProducts);  // Fetch all products

module.exports = router;
