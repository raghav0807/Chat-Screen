export interface MessageItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
}

export interface ChatMessage {
  id: string;
  content: string;
  senderId: string;
  timestamp: Date;
  avatar?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
}

export interface Stats {
  revenue: number;
  orders: number;
  webVisits: number;
  clicks: number;
}