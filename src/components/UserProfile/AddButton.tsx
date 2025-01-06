import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface AddButtonProps {
  onAdd: (value: string) => void;
  placeholder?: string;
  type?: 'info' | 'tag';
}

export default function AddButton({ onAdd, placeholder = 'Add new...', type = 'info' }: AddButtonProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue('');
      setIsAdding(false);
    }
  };

  if (!isAdding) {
    return (
      <button 
        onClick={() => setIsAdding(true)}
        className="text-blue-600 text-sm hover:text-blue-700"
      >
        Add
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 text-sm border rounded px-2 py-1"
        autoFocus
      />
      <button type="submit" className="text-blue-600 hover:text-blue-700">
        <Plus className="w-4 h-4" />
      </button>
      <button 
        type="button" 
        onClick={() => setIsAdding(false)}
        className="text-gray-400 hover:text-gray-500"
      >
        <X className="w-4 h-4" />
      </button>
    </form>
  );
}