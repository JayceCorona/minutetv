import React, { useState } from 'react';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    // Integrate with Stripe here
    console.log(`Processing payment for $${amount}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Add Funds</h2>
      <form onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter amount"
            min="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Card Information</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded mb-2"
            placeholder="Card number"
          />
          <div className="flex gap-2">
            <input
              type="text"
              className="w-1/2 px-3 py-2 border rounded"
              placeholder="MM/YY"
            />
            <input
              type="text"
              className="w-1/2 px-3 py-2 border rounded"
              placeholder="CVC"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm; 