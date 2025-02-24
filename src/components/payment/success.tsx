import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<{ id: string } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      setError(true);
      return;
    }

    fetch(`https://node-307s.onrender.com/api/confirm-payment?session_id=${sessionId}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch order details");
        return res.json();
      })
      .then(data => {
        setOrder(data.order);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [sessionId]);

  if (loading) return <h1>Processing payment...</h1>;
  if (error) return <h1>Payment failed. Please try again.</h1>;

  return (
    <div>
      <h1>Payment Successful! 🎉</h1>
      <p>Order ID: {order?.id}</p>
    </div>
  );
}
