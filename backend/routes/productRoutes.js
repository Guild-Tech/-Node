/*
  This file defines the routes related to products in the application.
  It imports the necessary controllers to handle product-related actions.
  The route for fetching all products is defined as a GET request to "/products".
  The `getAllProducts` function from the `productController` is responsible for retrieving the list of products from the database.

  The router is exported at the end of the file so it can be used in the main server file to handle product-related HTTP requests.
*/

const express = require("express"); // Import express for creating the router
const { getAllProducts, getProductById } = require("../controllers/productController");  // Import the controller function to fetch all products
const router = express.Router(); // Create a new router instance for defining routes

// Define routes
router.get("/products", getAllProducts);  // When a GET request is made to "/products", call the getAllProducts function
router.get("/products/:id", getProductById);  // Fetch product by ID

// Export the router so it can be used in other files
module.exports = router;
