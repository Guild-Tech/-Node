/*
  This file defines the Order schema and model for storing orders in the MongoDB database.
  The order schema includes the following fields:
  1. `productId`: A reference to the Product model, representing the product that has been ordered.
  2. `customizedOptions`: An object containing the customized options selected by the user for the product.
  3. `shippingStatus`: A string indicating the current status of the order. It can be "Pending", "Shipped", or "Delivered", defaulting to "Pending".
  4. `estimatedDelivery`: The estimated date of delivery for the order.
  5. `email`: The email address of the customer placing the order.

  The schema also includes timestamps, which automatically adds `createdAt` and `updatedAt` fields to the order document.
  The Order model is then created and exported for use in other parts of the application.
*/

const mongoose = require("mongoose"); // Import mongoose to interact with MongoDB

// Define the order schema with fields and their data types
const orderSchema = new mongoose.Schema({
  productId: { 
    type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
    ref: "Product", // Reference to the "Product" collection
    required: true, // Make this field mandatory
  },
  customizedOptions: { 
    type: Object, // Store customized options as an object
    required: true, // Make this field mandatory
  },
  shippingStatus: { 
    type: String, // Shipping status is a string
    enum: ["Pending", "Shipped", "Delivered"], // Enum to restrict the possible values
    default: "Pending", // Default to "Pending" if no value is provided
  },
  estimatedDelivery: { 
    type: Date, // Store the estimated delivery date
    required: true, // Make this field mandatory
  },
  email: { 
    type: String, // Customer email as a string
    required: true, // Make this field mandatory
  },
}, { timestamps: true }); // Enable timestamps to track creation and updates

// Create the Order model using the schema
const Order = mongoose.model("Order", orderSchema);

// Export the Order model to be used in other parts of the application
module.exports = Order;
