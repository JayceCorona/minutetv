import React, { useState, useEffect } from 'react';

const AuctionBox = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [currentBid, setCurrentBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // Reset auction
          setCurrentBid(0);
          return 300;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const placeBid = (amount) => {
    if (amount > currentBid) {
      setCurrentBid(amount);
      // Update highest bidder
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl text-white mb-4">Stream Slot Auction</h2>
      <div className="flex justify-between mb-4">
        <span className="text-white">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
        <span className="text-white">Current Bid: ${currentBid}</span>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => placeBid(currentBid + 5)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Bid $5
        </button>
        <button 
          onClick={() => placeBid(currentBid + 10)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Bid $10
        </button>
      </div>
    </div>
  );
};

export default AuctionBox; 