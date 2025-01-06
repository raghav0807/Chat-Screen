import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import MessageList from './Sidebar/MessageList';
import SegmentList from './Sidebar/SegmentList';
import SegmentTabs from './Sidebar/SegmentTabs';
import { users } from '../data/users';
import { segments } from '../data/segments';

interface SidebarProps {
  onSelectUser: (userId: string) => void;
  selectedUserId: string;
}

const initialMessages = Object.values(users).map(user => ({
  id: user.id,
  name: user.name,
  avatar: user.avatar,
  lastMessage: 'Last message...',
  time: '5m',
  unread: user.id === '1'
}));

export default function Sidebar({ onSelectUser, selectedUserId }: SidebarProps) {
  const [activeTab, setActiveTab] = useState('messages');
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>();

  const handleSegmentSelect = (segmentId: string) => {
    setSelectedSegmentId(segmentId);
    // In a real app, this would filter users based on segment criteria
    onSelectUser('1'); // Default to first user for demo
  };

  return (
    <div className="w-64 bg-white border-r h-screen">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-bold">BlueChat</h1>
        </div>
      </div>
      
      <div className="p-4">
        <SegmentTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'messages' ? (
          <MessageList
            messages={initialMessages}
            selectedId={selectedUserId}
            onSelectMessage={onSelectUser}
          />
        ) : (
          <SegmentList
            segments={segments}
            selectedId={selectedSegmentId}
            onSelectSegment={handleSegmentSelect}
          />
        )}
      </div>
    </div>
  );
}