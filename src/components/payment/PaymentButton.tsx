import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); // Use your public key

interface PaymentButtonProps {
  amount: number;
  orderDetails: any;
}

export default function PaymentButton({ amount, orderDetails }: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          orderDetails,
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/cancel`,
        }),
      });

      const { sessionId } = await response.json();
    
    if (!sessionId) {
      throw new Error('Session ID is missing from response.');
    }

    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Stripe Error:', error);
    }
  } catch (error) {
    console.error('Payment Error:', error);
  }
};

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
    >
      {loading ? 'Processing...' : 'Proceed to Payment'}
    </button>
  );
}
