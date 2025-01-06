import React from 'react';

const tabs = [
  { id: 'messages', label: 'Messages', count: 212 },
  { id: 'segments', label: 'Segments' }
];

export default function SegmentTabs({ activeTab, onTabChange }: { 
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="flex space-x-4 border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`pb-2 px-1 relative ${
            activeTab === tab.id
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          <div className="flex items-center space-x-2">
            <span>{tab.label}</span>
            {tab.count && (
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                {tab.count}
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}