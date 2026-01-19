'use client';

import { useEffect, useState } from 'react';
import { SwipeProfile, SwipeDecision, swipeProfiles } from '@/lib/mockData';

export function SwipeFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeAnimation, setSwipeAnimation] = useState<'left' | 'right' | null>(null);
  const [decisions, setDecisions] = useState<SwipeDecision[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const currentProfile = swipeProfiles[currentIndex % swipeProfiles.length];

  const handleSwipe = (direction: 'like' | 'nope' | 'superlike') => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      setSwipeAnimation(direction === 'nope' ? 'left' : 'right');

      const decision: SwipeDecision = {
        id: Date.now().toString(),
        profile: currentProfile,
        decision: direction,
        reason: direction === 'like'
          ? 'Interesting profile with potential for good conversation!'
          : direction === 'superlike'
          ? 'Exceptional match! Must connect!'
          : 'Not the right fit for meaningful connection.',
        timestamp: new Date().toISOString(),
        matchScore: direction === 'nope' ? 30 : direction === 'superlike' ? 95 : 75,
      };

      setDecisions(prev => [decision, ...prev].slice(0, 5));

      setTimeout(() => {
        setSwipeAnimation(null);
        setCurrentIndex(prev => prev + 1);
      }, 500);
    }, 1500);
  };

  useEffect(() => {
    // Auto-swipe every 8 seconds
    const interval = setInterval(() => {
      if (!isAnalyzing) {
        const random = Math.random();
        if (random < 0.15) {
          handleSwipe('superlike');
        } else if (random < 0.55) {
          handleSwipe('like');
        } else {
          handleSwipe('nope');
        }
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnalyzing]);

  return (
    <div className="tinder-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="text-[#fe5068]">👀</span> Live Swipe Feed
        </h3>
        {isAnalyzing && (
          <div className="flex items-center gap-2 text-sm text-[#fe7d64]">
            <div className="w-2 h-2 bg-[#fe7d64] rounded-full animate-pulse" />
            Analyzing...
          </div>
        )}
      </div>

      {/* Current Profile Card */}
      <div className={`relative ${swipeAnimation === 'right' ? 'animate-swipe-right' : swipeAnimation === 'left' ? 'animate-swipe-left' : ''}`}>
        <div className="profile-card overflow-hidden">
          {/* Profile Image Placeholder */}
          <div className="h-72 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 relative flex items-center justify-center">
            <div className="text-6xl">👤</div>

            {/* Swipe Indicators */}
            {swipeAnimation === 'right' && (
              <div className="absolute top-4 left-4 border-4 border-[#2ee674] text-[#2ee674] px-4 py-2 rounded-lg rotate-[-20deg] font-bold text-2xl">
                LIKE
              </div>
            )}
            {swipeAnimation === 'left' && (
              <div className="absolute top-4 right-4 border-4 border-[#ec5e6f] text-[#ec5e6f] px-4 py-2 rounded-lg rotate-[20deg] font-bold text-2xl">
                NOPE
              </div>
            )}

            {currentProfile.verified && (
              <div className="absolute bottom-4 right-4 bg-[#2ebbf4] text-white px-2 py-1 rounded-full text-xs font-bold">
                ✓ Verified
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-bold text-white">{currentProfile.name}</h4>
                <span className="text-lg text-gray-400">{currentProfile.age}</span>
              </div>
              <span className="text-sm text-gray-500">{currentProfile.distance}</span>
            </div>

            <div className="text-sm text-gray-400 mb-2">{currentProfile.job}</div>

            <p className="text-gray-300 text-sm mb-3">{currentProfile.bio}</p>

            <div className="flex flex-wrap gap-2">
              {currentProfile.interests.map((interest, i) => (
                <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Swipe Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => handleSwipe('nope')}
          className="swipe-btn nope"
          disabled={isAnalyzing}
        >
          ✕
        </button>
        <button
          onClick={() => handleSwipe('superlike')}
          className="swipe-btn superlike"
          disabled={isAnalyzing}
        >
          ⭐
        </button>
        <button
          onClick={() => handleSwipe('like')}
          className="swipe-btn like"
          disabled={isAnalyzing}
        >
          ♥
        </button>
      </div>

      {/* Recent Decisions */}
      {decisions.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <h4 className="text-sm font-bold text-gray-400 mb-3">RECENT DECISIONS</h4>
          <div className="space-y-2">
            {decisions.slice(0, 3).map((decision, i) => (
              <div
                key={decision.id}
                className="flex items-center justify-between p-2 bg-black/20 rounded-lg animate-slide-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-lg ${
                    decision.decision === 'like' ? 'text-[#2ee674]' :
                    decision.decision === 'superlike' ? 'text-[#2ebbf4]' :
                    'text-[#ec5e6f]'
                  }`}>
                    {decision.decision === 'like' ? '♥' : decision.decision === 'superlike' ? '⭐' : '✕'}
                  </span>
                  <span className="text-white text-sm">{decision.profile.name}</span>
                </div>
                <span className="text-xs text-gray-500">{decision.matchScore}% match</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
