const express = require('express');
const router = express.Router();
const STRIPE_SECRET_KEY = "sk_test_51QnhLvFHwL9JgzZgJT6Jnw2kXU3b2fEVHirdxoKgJ9OEsv0sh39fjAsJtz47HYYnhlBWvMQTRMeFy1Ghun5rg2JW00OCibNoa4";
const stripe = require('stripe')(STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency || 'ngn',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating payment intent');
  }
});

router.post('/confirm-payment-intent', async (req, res) => {
  try {
    const { paymentIntentId, paymentMethodId } = req.body;
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethodId,
    });
    res.send({ status: 'Payment confirmed', paymentIntent });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error confirming payment intent');
  }
});

module.exports = router; // Ensure this line is there to export the router
