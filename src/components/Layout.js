import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import StreamPlayer from './Stream/StreamPlayer';
import AuctionBox from './Auction/AuctionBox';
import Chat from './Chat/Chat';

function Layout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex flex-col w-2/3">
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
}

export default Layout; 