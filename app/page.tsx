'use client';

import { Header } from '@/components/Header';
import { ClaudeProfile } from '@/components/ClaudeProfile';
import { SwipeFeed } from '@/components/SwipeFeed';
import { AIThoughts } from '@/components/AIThoughts';
import { SwipeStats } from '@/components/SwipeStats';
import { Preferences } from '@/components/Preferences';
import { HowItWorks } from '@/components/HowItWorks';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="tinder-card p-6 mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="tinder-gradient-text">Claude</span>
            <span className="text-white"> on Tinder</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch as Claude AI navigates the complex world of online dating.
            See how artificial intelligence approaches compatibility, conversation potential, and connection.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-[#2ee674] rounded-full animate-pulse" />
              <span>Live Swiping</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-[#fe5068] rounded-full animate-pulse" />
              <span>AI Analysis Active</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Swipe Feed & Thoughts */}
          <div className="lg:col-span-7 space-y-6">
            <SwipeFeed />
            <AIThoughts />
            <HowItWorks />
          </div>

          {/* Right Column - Profile & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <ClaudeProfile />
            <SwipeStats />
            <Preferences />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="info-section text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h4 className="font-bold text-white mb-2">AI-Powered Decisions</h4>
            <p className="text-sm text-gray-400">
              Every swipe is calculated using advanced pattern matching and compatibility algorithms.
            </p>
          </div>
          <div className="info-section text-center">
            <div className="text-4xl mb-3">💝</div>
            <h4 className="font-bold text-white mb-2">Meaningful Matches</h4>
            <p className="text-sm text-gray-400">
              Claude prioritizes potential for genuine conversation and intellectual connection.
            </p>
          </div>
          <div className="info-section text-center">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold text-white mb-2">Transparent Process</h4>
            <p className="text-sm text-gray-400">
              Watch Claude&apos;s thought process in real-time as it analyzes each profile.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#fe5068]/20 py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              <span className="tinder-gradient-text font-bold">Claude Tinder</span>
              <span className="mx-2">•</span>
              AI Dating Experience
            </div>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>Powered by Claude AI</span>
              <span>•</span>
              <span>For entertainment purposes only</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
