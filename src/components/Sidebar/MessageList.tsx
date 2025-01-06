import React from 'react';
import { MessageItem } from '../../types';

interface MessageListProps {
  messages: MessageItem[];
  onSelectMessage: (id: string) => void;
  selectedId: string;
}

export default function MessageList({ messages, onSelectMessage, selectedId }: MessageListProps) {
  return (
    <div className="space-y-2">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-3 rounded-lg hover:bg-gray-50 cursor-pointer ${
            selectedId === message.id ? 'bg-blue-50' : ''
          }`}
          onClick={() => onSelectMessage(message.id)}
        >
          <div className="flex items-center space-x-3">
            <img
              src={message.avatar}
              alt={`${message.name}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-medium">{message.name}</p>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{message.lastMessage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}