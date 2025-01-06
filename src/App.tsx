import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import UserProfile from './components/UserProfile';

function App() {
  const [selectedUserId, setSelectedUserId] = useState('1');

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      <Sidebar onSelectUser={setSelectedUserId} selectedUserId={selectedUserId} />
      <ChatWindow userId={selectedUserId} />
      <UserProfile userId={selectedUserId} />
    </div>
  );
}

export default App;