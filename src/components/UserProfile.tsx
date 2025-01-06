import React, { useState } from 'react';
import { Mail, Phone, Calendar, Tag } from 'lucide-react';
import { users } from '../data/users';
import AddButton from './UserProfile/AddButton';

interface UserProfileProps {
  userId: string;
}

export default function UserProfile({ userId }: UserProfileProps) {
  const user = users[userId];
  const [userTags, setUserTags] = useState(user.tags || []);
  const [userInfo, setUserInfo] = useState({
    email: user.email,
    phone: user.phone,
    joinDate: user.joinDate
  });

  const handleAddTag = (tag: string) => {
    if (!userTags.includes(tag)) {
      setUserTags([...userTags, tag]);
    }
  };

  const handleAddInfo = (info: string) => {
    // In a real app, you'd validate the info type
    setUserInfo({ ...userInfo, email: info });
  };

  if (!user) return null;

  return (
    <div className="w-80 border-l bg-white h-screen p-4 overflow-y-auto">
      <div className="text-center mb-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-20 h-20 rounded-full mx-auto mb-3"
        />
        <h2 className="font-semibold text-lg">{user.name}</h2>
        <p className="text-sm text-gray-500">11:50pm in {user.location}</p>
      </div>

      {user.isAdmin && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500 mb-1">Revenue</h3>
            <p className="text-xl font-bold">${user.stats.revenue}</p>
            <p className="text-xs text-gray-500">{user.stats.orders} Orders</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm text-gray-500 mb-1">Web Visits</h3>
            <p className="text-xl font-bold">{user.stats.webVisits}</p>
            <p className="text-xs text-gray-500">{user.stats.clicks} Link Clicks</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Information</h3>
          <AddButton onAdd={handleAddInfo} placeholder="Add information" type="info" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-sm">{userInfo.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400" />
            <span className="text-sm">{userInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-sm">Joined {userInfo.joinDate}</span>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Tags</h3>
            <AddButton onAdd={handleAddTag} placeholder="Add tag" type="tag" />
          </div>
          <div className="flex flex-wrap gap-2">
            {userTags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-sm px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}