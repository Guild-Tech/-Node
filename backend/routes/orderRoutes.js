const express = require("express");
const { createOrder, getOrderById, updateOrderStatus } = require("../controllers/orderController");
const router = express.Router();

router.post("/", createOrder); // Create new order
router.get("/:id", getOrderById); // Track order by ID
router.put("/:id/status", updateOrderStatus); // Update order status

module.exports = router;
