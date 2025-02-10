/*
  This file contains the controller functions for handling order-related operations:
  - createOrder: Creates a new order with product details and stores it in the database.
  - getOrderById: Fetches an order by its unique ID.
  - updateOrderStatus: Updates the shipping status of an existing order.

  These functions handle the business logic for creating, retrieving, and updating orders. If an operation is successful,
  a response is sent with relevant data. Errors are caught and an error message is returned with a 500 status code.
*/

const Order = require("../models/Order");  // Import the Order model to interact with the orders collection in MongoDB

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { productId, customizedOptions, email } = req.body;  // Destructure product ID, customized options, and email from the request body

    const estimatedDelivery = new Date();  // Create a new Date object for estimated delivery
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);  // Set the estimated delivery to 7 days from now

    // Create a new order object using the provided data
    const newOrder = new Order({
      productId,
      customizedOptions,
      estimatedDelivery,
      email,
    });

    await newOrder.save();  // Save the new order to the database
    res.status(201).json({ message: "Order placed successfully", orderId: newOrder._id });  // Return a success response with the new order's ID
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });  // Handle errors and return an error message with a 500 status code
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);  // Find the order by its ID in the URL parameters
    if (!order) return res.status(404).json({ message: "Order not found" });  // Return a 404 error if the order doesn't exist

    res.status(200).json(order);  // Return the order details in the response
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error: error.message });  // Handle errors and return an error message with a 500 status code
  }
};

// Update order shipping status
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;  // Destructure the status from the request body
    const order = await Order.findById(req.params.id);  // Find the order by its ID in the URL parameters
    if (!order) return res.status(404).json({ message: "Order not found" });  // Return a 404 error if the order doesn't exist

    order.shippingStatus = status;  // Update the order's shipping status
    await order.save();  // Save the updated order to the database

    res.json({ message: "Order status updated", order });  // Return a success response with the updated order
  } catch (error) {
    res.status(500).json({ message: "Error updating order status", error: error.message });  // Handle errors and return an error message with a 500 status code
  }
};

module.exports = { createOrder, getOrderById, updateOrderStatus };  // Export the controller functions for use in the routes
