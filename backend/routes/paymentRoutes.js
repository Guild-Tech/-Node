const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Endpoint to create a Stripe Checkout Session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { products, successUrl, cancelUrl } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ error: 'No products provided' });
    }

    const line_items = products.map((product) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: successUrl || `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: 'Failed to create Stripe session' });
  }
});

// Endpoint to retrieve a checkout session
router.get('/checkout-session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.json(session);
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    res.status(500).json({ error: 'Failed to retrieve checkout session' });
  }
});

module.exports = router;
