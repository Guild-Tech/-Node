const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/Order"); // Your MongoDB Order model

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

router.post("/", express.raw({ type: "application/json" }), async (req, res) => {
  let event;

  try {
    // Verifying the event's signature
    event = stripe.webhooks.constructEvent(req.body, req.headers["stripe-signature"], endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  // Handling different types of events
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const order = await Order.findOne({ paymentIntentId: paymentIntent.id });

    if (order) {
      order.status = "paid"; // Update the order's status
      await order.save();
      console.log(`✅ Order ${order._id} marked as paid`);
    }
  }

  // Respond to Stripe to acknowledge receipt of the event
  res.json({ received: true });
});

module.exports = router;
