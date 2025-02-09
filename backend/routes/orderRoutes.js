/*
  This file defines the routes related to orders in the application.
  It imports the necessary controller functions to handle actions like creating, tracking, and updating orders.
  Three routes are defined:
    1. A POST request to create a new order.
    2. A GET request to track an order by its ID.
    3. A PUT request to update the status of an order.

  The router is exported at the end of the file so it can be used in the main server file to handle order-related HTTP requests.
*/

const express = require("express");  // Import express to create the router
const { createOrder, getOrderById, updateOrderStatus } = require("../controllers/orderController"); // Import the controller functions for order-related actions
const router = express.Router();  // Create a new router instance for defining routes

// Define routes
router.post("/", createOrder);  // When a POST request is made to "/", call createOrder function to create a new order
router.get("/:id", getOrderById);  // When a GET request is made to "/:id", call getOrderById function to track order by its ID
router.put("/:id/status", updateOrderStatus);  // When a PUT request is made to "/:id/status", call updateOrderStatus function to update the order's status

// Export the router to be used in the main server file
module.exports = router;
