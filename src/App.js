import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Mock Components
const StreamPlayer = () => (
  <div className="bg-black rounded-lg p-4 h-full">
    <div className="text-white text-center">Stream Window</div>
  </div>
);

const AuctionBox = () => (
  <div className="bg-gray-800 rounded-lg p-4 h-full">
    <h2 className="text-white text-xl mb-4">Current Auction</h2>
    <div className="text-white">
      <p>Time Left: 4:59</p>
      <p>Current Bid: $10</p>
      <button className="bg-blue-500 px-4 py-2 rounded mt-4">Place Bid</button>
    </div>
  </div>
);

const Chat = () => (
  <div className="bg-gray-800 rounded-lg p-4 h-full">
    <h2 className="text-white text-xl mb-4">Live Chat</h2>
    <div className="text-white">Chat messages will appear here</div>
  </div>
);

// Main Layout
const MainLayout = () => (
  <div className="flex h-screen bg-gray-900 p-4">
    <div className="flex flex-col w-2/3 pr-4 space-y-4">
      <div className="h-2/3">
        <StreamPlayer />
      </div>
      <div className="h-1/3">
        <AuctionBox />
      </div>
    </div>
    <div className="w-1/3">
      <Chat />
    </div>
  </div>
);

// Login Component
const Login = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl text-white font-bold mb-6">Login to MinuteTV</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App; 