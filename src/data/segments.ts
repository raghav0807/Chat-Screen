export interface Segment {
  id: string;
  name: string;
  description: string;
  userCount: number;
  criteria: {
    type: 'tag' | 'location' | 'joinDate' | 'revenue';
    value: string;
  }[];
}

export const segments: Segment[] = [
  {
    id: '1',
    name: 'Premium Users',
    description: 'Users with Premium subscription',
    userCount: 245,
    criteria: [
      { type: 'tag', value: 'Premium User' }
    ]
  },
  {
    id: '2',
    name: 'New York Users',
    description: 'Users located in New York',
    userCount: 132,
    criteria: [
      { type: 'location', value: 'New York' }
    ]
  },
  {
    id: '3',
    name: 'High Value',
    description: 'Users with revenue > $1000',
    userCount: 89,
    criteria: [
      { type: 'revenue', value: '1000' }
    ]
  },
  {
    id: '4',
    name: 'Recent Joins',
    description: 'Users who joined in last 30 days',
    userCount: 167,
    criteria: [
      { type: 'joinDate', value: '30' }
    ]
  }
];