import React, { useEffect, useState } from 'react';
import {
  Chat as StreamChat,
  Channel,
  Window,
  MessageList,
  MessageInput,
} from 'stream-chat-react';
import { initializeChat } from '../../services/streamChat';
import 'stream-chat-react/dist/css/index.css';

const Chat = () => {
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const setupChat = async () => {
        const client = await initializeChat(user.id, user.username);
        if (client) {
          const channel = client.channel('livestream', 'minutetv', {
            name: 'MinuteTV Chat',
          });
          await channel.watch();
          setChatClient(client);
          setChannel(channel);
        }
      };
      setupChat();
    }

    return () => {
      if (chatClient) chatClient.disconnectUser();
    };
  }, []);

  if (!chatClient || !channel) return <div>Loading chat...</div>;

  return (
    <div className="h-full">
      <StreamChat client={chatClient} theme="team dark">
        <Channel channel={channel}>
          <Window>
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </StreamChat>
    </div>
  );
};

export default Chat; 