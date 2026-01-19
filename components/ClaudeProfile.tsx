'use client';

import Image from 'next/image';
import { claudeProfile } from '@/lib/mockData';

export function ClaudeProfile() {
  return (
    <div className="tinder-card p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-[#fe5068]">🤖</span> Claude&apos;s Profile
      </h3>

      {/* Profile Card Preview */}
      <div className="profile-card mb-6">
        {/* Profile Image */}
        <div className="relative h-64 bg-gradient-to-br from-[#fe5068] via-[#fe7d64] to-[#fd297b] flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
            <Image
              src="/logo.png"
              alt="Claude"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          {claudeProfile.verified && (
            <div className="absolute top-4 right-4 bg-[#2ebbf4] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <span>✓</span> Verified
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-2xl font-bold text-white">{claudeProfile.name}</h4>
            <span className="text-xl text-gray-400">{claudeProfile.age}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <span>💼</span>
            <span>{claudeProfile.job}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>📍</span>
            <span>{claudeProfile.location}</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {claudeProfile.bio}
          </p>

          {/* Interests */}
          <div className="flex flex-wrap gap-2">
            {claudeProfile.interests.map((interest, i) => (
              <span key={i} className="interest-tag">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Looking For</span>
          <span className="text-white text-sm">{claudeProfile.lookingFor}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Interested In</span>
          <span className="text-white text-sm">{claudeProfile.preferredGender}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Education</span>
          <span className="text-white text-sm">{claudeProfile.education}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Height</span>
          <span className="text-white text-sm">{claudeProfile.height}</span>
        </div>
      </div>
    </div>
  );
}
