const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  customizedOptions: { type: Object, required: true },
  shippingStatus: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
  estimatedDelivery: { type: Date, required: true },
  email: { type: String, required: true },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
