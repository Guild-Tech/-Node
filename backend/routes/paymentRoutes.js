/*
  This code sets up two endpoints for handling Stripe payments:
  1. `/create-payment-intent`: This endpoint is used to create a payment intent with a specified amount and currency.
     It communicates with the Stripe API to generate a payment intent and returns the client secret needed for the frontend.
  2. `/confirm-payment-intent`: This endpoint is used to confirm the payment after the user provides payment method details.
     It confirms the payment intent by passing the payment method ID, and returns the payment status and payment intent information.
  Both endpoints handle errors and respond with appropriate messages if something goes wrong.

  The Stripe secret key is retrieved from environment variables to securely access the Stripe API.
*/

const express = require('express'); // Import Express to create the router
const router = express.Router(); // Create a new router for handling API requests
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with the secret key from environment variables

// Endpoint to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body; // Destructure the amount and currency from the request body
    // Create a payment intent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Payment amount
      currency: currency || 'ngn', // Currency (default to NGN if not provided)
    });
    res.send({ clientSecret: paymentIntent.client_secret }); // Send the client secret back to the client for further processing
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).send('Error creating payment intent'); // Send an error response
  }
});

// Endpoint to confirm a payment intent
router.post('/confirm-payment-intent', async (req, res) => {
  try {
    const { paymentIntentId, paymentMethodId } = req.body; // Destructure the payment intent ID and payment method ID from the request body
    // Confirm the payment intent with the provided payment method ID
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethodId, // Payment method ID to confirm the payment
    });
    res.send({ status: 'Payment confirmed', paymentIntent }); // Send confirmation and payment intent details back to the client
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).send('Error confirming payment intent'); // Send an error response
  }
});

module.exports = router; // Export the router to be used in other parts of the app
