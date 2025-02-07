/*
  This code sets up a webhook endpoint to listen for events from Stripe. 
  It verifies the webhook event signature to ensure the event is coming from Stripe, 
  processes the event, and updates the status of an order in the MongoDB database. 
  Specifically, the code listens for a 'payment_intent.succeeded' event, indicating a successful payment, 
  and updates the order status to 'paid'. 
  The code uses the Stripe Node.js library and your Order model from MongoDB.

  The webhook secret is retrieved from environment variables to authenticate incoming requests.
*/

const express = require("express"); // Import Express to create the router
const router = express.Router(); // Create a new router for handling API requests
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with the secret key from environment variables
const Order = require("../models/Order"); // Import the Order model to interact with the MongoDB database

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // Fetch the Stripe webhook secret for verifying the events

// Set up a POST route to handle Stripe webhook events
router.post("/", express.raw({ type: "application/json" }), async (req, res) => {
  let event;

  try {
    // Verifying the event's signature to ensure it's from Stripe
    event = stripe.webhooks.constructEvent(req.body, req.headers["stripe-signature"], endpointSecret);
  } catch (err) {
    // If verification fails, log the error and send a 400 response
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  // Handling specific event types from Stripe
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object; // Get the payment intent object from the event
    const order = await Order.findOne({ paymentIntentId: paymentIntent.id }); // Find the corresponding order in the database using the payment intent ID

    if (order) {
      order.status = "paid"; // Update the order's status to 'paid'
      await order.save(); // Save the updated order
      console.log(`✅ Order ${order._id} marked as paid`); // Log the order status update
    }
  }

  // Send a response back to Stripe acknowledging receipt of the event
  res.json({ received: true });
});

module.exports = router; // Export the router to be used in other parts of the app
