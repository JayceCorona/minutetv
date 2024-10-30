import React from 'react';

function Layout() {
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex flex-col w-2/3">
        <div className="h-2/3 bg-gray-800 p-4">
          {/* Stream Player will go here */}
          <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">Stream Player</span>
          </div>
        </div>
        <div className="h-1/3 bg-gray-800 p-4 mt-4">
          {/* Auction Box will go here */}
          <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">Auction Box</span>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-gray-800 p-4 ml-4">
        {/* Chat will go here */}
        <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl">Chat</span>
        </div>
      </div>
    </div>
  );
}

export default Layout; 