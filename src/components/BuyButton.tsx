"use client";

export function BuyButton() {

  const handleClick = async () => {
    const res = await fetch('/api/checkout_sessions', { method: 'POST' });
    const data = await res.json();

    if (data.id) {
      window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
    }
  };

  return <button onClick={handleClick} className="px-4 py-2 bg-purple-500 text-white rounded">購入する</button>;
}