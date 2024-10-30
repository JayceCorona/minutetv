import React from 'react';

const WalletCard = ({ balance }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-4">Your Wallet</h2>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Available Balance:</span>
        <span className="text-2xl font-bold text-green-600">${balance}</span>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Funds
      </button>
    </div>
  );
};

export default WalletCard; 