import { StreamChat } from 'stream-chat';

const chatClient = StreamChat.getInstance(process.env.REACT_APP_STREAM_KEY);

export const initializeChat = async (userId, username) => {
  try {
    const token = chatClient.createToken(userId);
    await chatClient.connectUser(
      {
        id: userId,
        name: username,
      },
      token,
    );
    return chatClient;
  } catch (error) {
    console.error('Error connecting to chat:', error);
    return null;
  }
}; 