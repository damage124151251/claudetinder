'use client';

import Image from 'next/image';
import { swipeStats } from '@/lib/mockData';

export function Header() {
  return (
    <header className="border-b border-[#fe5068]/20 bg-gradient-to-r from-[#0a0c0e] via-[#111418] to-[#0a0c0e]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#fe5068] shadow-lg shadow-[#fe5068]/20">
                <Image
                  src="/logo.png"
                  alt="Claude Tinder"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2ee674] rounded-full border-2 border-[#111418] flex items-center justify-center">
                <span className="text-[8px]">✓</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold tinder-gradient-text">
                CLAUDE TINDER
              </h1>
              <p className="text-xs text-gray-400">
                AI Dating Experience
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <div className="bg-black/30 px-4 py-2 rounded-full border border-[#2ee674]/30">
              <span className="text-[#2ee674] font-bold">{swipeStats.likes}</span>
              <span className="text-gray-400 text-sm ml-1">Likes</span>
            </div>

            <div className="bg-black/30 px-4 py-2 rounded-full border border-[#ec5e6f]/30">
              <span className="text-[#ec5e6f] font-bold">{swipeStats.nopes}</span>
              <span className="text-gray-400 text-sm ml-1">Nopes</span>
            </div>

            <div className="bg-black/30 px-4 py-2 rounded-full border border-[#fe5068]/30">
              <span className="text-[#fe5068] font-bold">{swipeStats.matches}</span>
              <span className="text-gray-400 text-sm ml-1">Matches</span>
            </div>

            <div className="bg-black/30 px-4 py-2 rounded-full border border-[#d4a832]/30 hidden md:block">
              <span className="text-[#d4a832] font-bold">{swipeStats.matchRate}%</span>
              <span className="text-gray-400 text-sm ml-1">Rate</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
