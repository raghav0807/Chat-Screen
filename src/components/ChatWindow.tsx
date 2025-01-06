import React, { useState } from 'react';
import { Phone, Video, MoreHorizontal } from 'lucide-react';
import MessageBubble from './Chat/MessageBubble';
import MessageInput from './Chat/MessageInput';
import { users } from '../data/users';

interface ChatWindowProps {
  userId: string;
}

const initialMessages = [
  {
    id: '1',
    content: "Hello! I keep getting 'error' while creating a pop up for the first time setup. My shop name is PinkSweetHeart3",
    senderId: 'user-1',
    timestamp: new Date('2024-03-10T12:30:00'),
    avatar: users['1'].avatar
  },
  {
    id: '2',
    content: "Hi! I understand you're having trouble with the pop-up setup. Let me help you resolve this issue. Could you please provide more details about the error message you're seeing?",
    senderId: 'current-user',
    timestamp: new Date('2024-03-10T12:32:00'),
    avatar: users['2'].avatar
  },
  {
    id: '3',
    content: "Sure! When I try to create the pop-up, it shows 'Invalid configuration' and won't let me proceed.",
    senderId: 'user-1',
    timestamp: new Date('2024-03-10T12:33:00'),
    avatar: users['1'].avatar
  }
];

export default function ChatWindow({ userId }: ChatWindowProps) {
  const [messages, setMessages] = useState(initialMessages);
  const currentUser = users[userId];

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: Date.now().toString(),
      content,
      senderId: 'current-user',
      timestamp: new Date(),
      avatar: currentUser.avatar
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{currentUser.name}</h2>
            <p className="text-sm text-gray-500">{currentUser.email}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          <Video className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
      
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}