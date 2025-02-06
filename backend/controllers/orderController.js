const Order = require("../models/Order");

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { productId, customizedOptions, email } = req.body;

    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 7); // Estimated 7 days from now

    const newOrder = new Order({
      productId,
      customizedOptions,
      estimatedDelivery,
      email,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", orderId: newOrder._id });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error: error.message });
  }
};

// Update order shipping status
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.shippingStatus = status; // Update status
    await order.save();

    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order status", error: error.message });
  }
};

module.exports = { createOrder, getOrderById, updateOrderStatus };
