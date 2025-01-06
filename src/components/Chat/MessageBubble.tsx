import React from 'react';
import { ChatMessage } from '../../types';

export default function MessageBubble({ message }: { message: ChatMessage }) {
  const isOutgoing = message.senderId === 'current-user';

  return (
    <div className={`flex items-start space-x-2 ${isOutgoing ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {!isOutgoing && (
        <img
          src={message.avatar}
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
      )}
      <div
        className={`p-3 rounded-lg max-w-md ${
          isOutgoing ? 'bg-blue-600 text-white' : 'bg-gray-100'
        }`}
      >
        <p>{message.content}</p>
        <span className="text-xs text-gray-500 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>
    </div>
  );
}