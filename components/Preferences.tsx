'use client';

import { claudePreferences, decisionFactors } from '@/lib/mockData';

export function Preferences() {
  return (
    <div className="tinder-card p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-[#fe5068]">⚙️</span> Claude&apos;s Preferences
      </h3>

      {/* Decision Factors */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-400 mb-3">DECISION FACTORS</h4>
        <div className="space-y-3">
          {decisionFactors.map((factor, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">{factor.factor}</span>
                <span className="text-[#fe7d64]">{factor.weight}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#fe5068] to-[#fe7d64] transition-all duration-500"
                  style={{ width: `${factor.weight}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-500 mt-1">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Must Have */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-[#2ee674] mb-2 flex items-center gap-2">
          <span>✓</span> Must Have
        </h4>
        <div className="space-y-2">
          {claudePreferences.mustHave.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-[#2ee674]">•</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Nice to Have */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-[#2ebbf4] mb-2 flex items-center gap-2">
          <span>⭐</span> Nice to Have
        </h4>
        <div className="space-y-2">
          {claudePreferences.niceToHave.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-[#2ebbf4]">•</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Dealbreakers */}
      <div>
        <h4 className="text-sm font-bold text-[#ec5e6f] mb-2 flex items-center gap-2">
          <span>✕</span> Dealbreakers
        </h4>
        <div className="space-y-2">
          {claudePreferences.dealbreakers.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-[#ec5e6f]">•</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
