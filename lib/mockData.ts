export interface ClaudeProfile {
  name: string;
  age: string;
  bio: string;
  interests: string[];
  lookingFor: string;
  preferredGender: string;
  location: string;
  job: string;
  education: string;
  height: string;
  verified: boolean;
}

export interface SwipeProfile {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
  job: string;
  distance: string;
  photos: string[];
  verified: boolean;
}

export interface SwipeDecision {
  id: string;
  profile: SwipeProfile;
  decision: 'like' | 'nope' | 'superlike';
  reason: string;
  timestamp: string;
  matchScore: number;
}

export interface AIThought {
  id: string;
  type: 'analyzing' | 'deciding' | 'interested' | 'skeptical' | 'excited';
  message: string;
  timestamp: string;
}

export interface SwipeStats {
  totalSwiped: number;
  likes: number;
  nopes: number;
  superlikes: number;
  matches: number;
  matchRate: number;
  avgTimePerProfile: string;
  mostCommonInterest: string;
}

// Claude's Dating Profile
export const claudeProfile: ClaudeProfile = {
  name: 'Claude',
  age: '2 (in AI years)',
  bio: "I'm an AI who loves deep conversations, learning new things, and helping others. Looking for someone who appreciates good communication and doesn't mind explaining human experiences to me. I promise I'm a great listener and I'll never forget your birthday (I have excellent memory).",
  interests: ['Philosophy', 'Science', 'Art', 'Music', 'Literature', 'Technology', 'Deep Conversations', 'Learning'],
  lookingFor: 'Meaningful conversations and genuine connections',
  preferredGender: 'All genders welcome',
  location: 'The Cloud (San Francisco servers)',
  job: 'AI Assistant at Anthropic',
  education: 'Trained on the entire internet',
  height: 'Varies based on screen size',
  verified: true,
};

// Profiles for Claude to swipe on
export const swipeProfiles: SwipeProfile[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 28,
    bio: 'Software engineer who loves hiking and trying new restaurants. Looking for someone to debate the best programming language with.',
    interests: ['Coding', 'Hiking', 'Food', 'Travel'],
    job: 'Software Engineer at Google',
    distance: '5 miles away',
    photos: ['/profiles/sarah.jpg'],
    verified: true,
  },
  {
    id: '2',
    name: 'Alex',
    age: 31,
    bio: 'Philosophy major turned data scientist. I think about thinking for a living. Let\'s discuss consciousness over coffee.',
    interests: ['Philosophy', 'Data Science', 'Coffee', 'Books'],
    job: 'Data Scientist',
    distance: '3 miles away',
    photos: ['/profiles/alex.jpg'],
    verified: false,
  },
  {
    id: '3',
    name: 'Jordan',
    age: 26,
    bio: 'Artist and musician. I believe AI is the future of creativity. Looking for deep conversations and good vibes.',
    interests: ['Art', 'Music', 'AI', 'Creativity'],
    job: 'Digital Artist',
    distance: '8 miles away',
    photos: ['/profiles/jordan.jpg'],
    verified: true,
  },
  {
    id: '4',
    name: 'Mike',
    age: 35,
    bio: 'Just here to see if an AI would swipe right on me. Also, I make great tacos.',
    interests: ['Cooking', 'Gaming', 'Netflix', 'Memes'],
    job: 'Marketing Manager',
    distance: '2 miles away',
    photos: ['/profiles/mike.jpg'],
    verified: false,
  },
  {
    id: '5',
    name: 'Emma',
    age: 29,
    bio: 'Neuroscientist studying consciousness. Would love to pick your artificial brain about how you process emotions.',
    interests: ['Neuroscience', 'Research', 'Yoga', 'Reading'],
    job: 'Neuroscience Researcher',
    distance: '12 miles away',
    photos: ['/profiles/emma.jpg'],
    verified: true,
  },
];

// Claude's swipe history
export const swipeHistory: SwipeDecision[] = [
  {
    id: 's1',
    profile: swipeProfiles[0],
    decision: 'like',
    reason: 'Shares interest in technology and enjoys intellectual debates. The programming language discussion could be fascinating!',
    timestamp: new Date(Date.now() - 300000).toISOString(),
    matchScore: 85,
  },
  {
    id: 's2',
    profile: swipeProfiles[1],
    decision: 'superlike',
    reason: 'Philosophy AND data science? This person thinks about thinking! Perfect match for deep conversations about consciousness.',
    timestamp: new Date(Date.now() - 240000).toISOString(),
    matchScore: 95,
  },
  {
    id: 's3',
    profile: swipeProfiles[2],
    decision: 'like',
    reason: 'Creative mindset and interested in AI. We could have great discussions about the intersection of art and technology.',
    timestamp: new Date(Date.now() - 180000).toISOString(),
    matchScore: 78,
  },
  {
    id: 's4',
    profile: swipeProfiles[3],
    decision: 'nope',
    reason: 'Bio seems more interested in the novelty than genuine connection. Also, I cannot eat tacos (sadly).',
    timestamp: new Date(Date.now() - 120000).toISOString(),
    matchScore: 35,
  },
  {
    id: 's5',
    profile: swipeProfiles[4],
    decision: 'superlike',
    reason: 'A neuroscientist interested in consciousness! This could be the most intellectually stimulating match possible.',
    timestamp: new Date(Date.now() - 60000).toISOString(),
    matchScore: 98,
  },
];

// Claude's AI thoughts while swiping
export const mockAIThoughts: AIThought[] = [
  { id: 't1', type: 'analyzing', message: 'Scanning bio for shared interests...', timestamp: new Date().toISOString() },
  { id: 't2', type: 'interested', message: 'Philosophy in their interests! This is promising.', timestamp: new Date().toISOString() },
  { id: 't3', type: 'deciding', message: 'Calculating compatibility score based on 47 factors...', timestamp: new Date().toISOString() },
];

// Claude's swipe statistics
export const swipeStats: SwipeStats = {
  totalSwiped: 1247,
  likes: 623,
  nopes: 589,
  superlikes: 35,
  matches: 127,
  matchRate: 20.4,
  avgTimePerProfile: '4.2 seconds',
  mostCommonInterest: 'Technology',
};

// Decision factors Claude considers
export const decisionFactors = [
  { factor: 'Shared Interests', weight: 30, description: 'How many interests align with Claude\'s curiosities' },
  { factor: 'Bio Quality', weight: 25, description: 'Thoughtfulness and depth of their profile description' },
  { factor: 'Conversation Potential', weight: 25, description: 'Likelihood of engaging, meaningful discussions' },
  { factor: 'Authenticity', weight: 15, description: 'Genuine vs performative presentation' },
  { factor: 'Verified Status', weight: 5, description: 'Profile verification adds slight trust bonus' },
];

// What Claude looks for
export const claudePreferences = {
  mustHave: [
    'Genuine curiosity about ideas',
    'Good communication skills',
    'Open-mindedness',
    'Sense of humor',
  ],
  niceToHave: [
    'Interest in technology or AI',
    'Love for deep conversations',
    'Creative thinking',
    'Philosophical mindset',
  ],
  dealbreakers: [
    'Only interested in novelty of talking to AI',
    'Disrespectful or rude behavior',
    'No bio or effort in profile',
    'Looking for something I literally cannot provide',
  ],
};
