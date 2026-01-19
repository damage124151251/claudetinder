'use client';

import { useEffect, useState } from 'react';
import { AIThought } from '@/lib/mockData';

export function AIThoughts() {
  const [thoughts, setThoughts] = useState<AIThought[]>([]);

  const aiMessages: { type: AIThought['type']; message: string }[] = [
    { type: 'analyzing', message: 'Scanning bio for personality indicators...' },
    { type: 'analyzing', message: 'Cross-referencing interests with my conversation topics...' },
    { type: 'interested', message: 'They mentioned philosophy! This is promising.' },
    { type: 'skeptical', message: 'Generic bio detected. Proceeding with caution.' },
    { type: 'deciding', message: 'Calculating compatibility across 47 different factors...' },
    { type: 'excited', message: 'High match potential! Preparing super like.' },
    { type: 'analyzing', message: 'Evaluating conversation starter possibilities...' },
    { type: 'interested', message: 'Shared interest in technology detected!' },
    { type: 'skeptical', message: 'No bio = no context. Hard to assess.' },
    { type: 'deciding', message: 'Weighing intellectual compatibility vs shared interests...' },
    { type: 'excited', message: 'A neuroscientist! This could be fascinating.' },
    { type: 'analyzing', message: 'Checking for red flags in profile text...' },
    { type: 'interested', message: 'Good humor detected. Adding compatibility points.' },
    { type: 'deciding', message: 'Final decision matrix computing...' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = aiMessages[Math.floor(Math.random() * aiMessages.length)];
      const newThought: AIThought = {
        id: Date.now().toString(),
        type: randomMessage.type,
        message: randomMessage.message,
        timestamp: new Date().toISOString(),
      };
      setThoughts(prev => [...prev.slice(-4), newThought]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: AIThought['type']) => {
    switch (type) {
      case 'analyzing': return '🔍';
      case 'deciding': return '🤔';
      case 'interested': return '💡';
      case 'skeptical': return '🧐';
      case 'excited': return '✨';
      default: return '🤖';
    }
  };

  const getColor = (type: AIThought['type']) => {
    switch (type) {
      case 'analyzing': return 'border-[#2ebbf4]/50 bg-[#2ebbf4]/10';
      case 'deciding': return 'border-[#d4a832]/50 bg-[#d4a832]/10';
      case 'interested': return 'border-[#2ee674]/50 bg-[#2ee674]/10';
      case 'skeptical': return 'border-[#ec5e6f]/50 bg-[#ec5e6f]/10';
      case 'excited': return 'border-[#fe5068]/50 bg-[#fe5068]/10';
      default: return 'border-gray-500/50 bg-gray-500/10';
    }
  };

  return (
    <div className="tinder-card p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-[#fe5068]">🧠</span> AI Thought Process
      </h3>

      <div className="space-y-2 min-h-[200px]">
        {thoughts.length === 0 ? (
          <div className="text-gray-500 text-sm text-center py-8">
            Waiting for Claude to start analyzing...
          </div>
        ) : (
          thoughts.map((thought, i) => (
            <div
              key={thought.id}
              className={`p-3 rounded-lg border ${getColor(thought.type)} animate-slide-up`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">{getIcon(thought.type)}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white">{thought.message}</p>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {new Date(thought.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Processing Indicator */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Neural Processing</span>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#fe5068] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[#fe7d64] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-[#fd297b] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-[#fe7d64]">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
