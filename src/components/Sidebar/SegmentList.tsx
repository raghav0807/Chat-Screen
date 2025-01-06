import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { Segment } from '../../data/segments';

interface SegmentListProps {
  segments: Segment[];
  onSelectSegment: (segmentId: string) => void;
  selectedId?: string;
}

export default function SegmentList({ segments, onSelectSegment, selectedId }: SegmentListProps) {
  return (
    <div className="space-y-2">
      {segments.map((segment) => (
        <div
          key={segment.id}
          onClick={() => onSelectSegment(segment.id)}
          className={`p-3 rounded-lg hover:bg-gray-50 cursor-pointer ${
            selectedId === segment.id ? 'bg-blue-50' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-400" />
              <h3 className="font-medium text-sm">{segment.name}</h3>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-xs text-gray-500 mb-1">{segment.description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
              {segment.userCount} users
            </span>
            {segment.criteria.map((criterion, index) => (
              <span
                key={index}
                className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full"
              >
                {criterion.type}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}