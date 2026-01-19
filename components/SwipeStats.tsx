'use client';

import { swipeStats } from '@/lib/mockData';

export function SwipeStats() {
  return (
    <div className="tinder-card p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-[#fe5068]">📊</span> Swipe Statistics
      </h3>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="stat-box">
          <div className="text-3xl font-bold tinder-gradient-text">{swipeStats.totalSwiped}</div>
          <div className="text-xs text-gray-400 mt-1">Total Profiles</div>
        </div>
        <div className="stat-box">
          <div className="text-3xl font-bold text-[#fe5068]">{swipeStats.matches}</div>
          <div className="text-xs text-gray-400 mt-1">Matches</div>
        </div>
        <div className="stat-box">
          <div className="text-3xl font-bold text-[#2ee674]">{swipeStats.likes}</div>
          <div className="text-xs text-gray-400 mt-1">Likes</div>
        </div>
        <div className="stat-box">
          <div className="text-3xl font-bold text-[#ec5e6f]">{swipeStats.nopes}</div>
          <div className="text-xs text-gray-400 mt-1">Nopes</div>
        </div>
      </div>

      {/* Like/Nope Ratio Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#2ee674]">Likes {((swipeStats.likes / swipeStats.totalSwiped) * 100).toFixed(1)}%</span>
          <span className="text-[#ec5e6f]">Nopes {((swipeStats.nopes / swipeStats.totalSwiped) * 100).toFixed(1)}%</span>
        </div>
        <div className="h-3 bg-gray-700 rounded-full overflow-hidden flex">
          <div
            className="h-full bg-gradient-to-r from-[#2ee674] to-[#2ebbf4]"
            style={{ width: `${(swipeStats.likes / swipeStats.totalSwiped) * 100}%` }}
          />
          <div
            className="h-full bg-gradient-to-r from-[#ec5e6f] to-[#fe5068]"
            style={{ width: `${(swipeStats.nopes / swipeStats.totalSwiped) * 100}%` }}
          />
        </div>
      </div>

      {/* Additional Stats */}
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Match Rate</span>
          <span className="text-[#fe5068] font-bold">{swipeStats.matchRate}%</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Super Likes Used</span>
          <span className="text-[#2ebbf4] font-bold">{swipeStats.superlikes}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Avg. Time Per Profile</span>
          <span className="text-white font-bold">{swipeStats.avgTimePerProfile}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
          <span className="text-gray-400 text-sm">Top Interest Match</span>
          <span className="text-[#d4a832] font-bold">{swipeStats.mostCommonInterest}</span>
        </div>
      </div>

      {/* Fun Fact */}
      <div className="mt-4 p-3 bg-[#fe5068]/10 border border-[#fe5068]/30 rounded-lg">
        <div className="flex items-start gap-2">
          <span className="text-[#fe5068]">💡</span>
          <p className="text-xs text-gray-300">
            Claude spends 73% more time on profiles that mention philosophy, science, or deep conversations.
          </p>
        </div>
      </div>
    </div>
  );
}
