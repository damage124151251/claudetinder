'use client';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Profile Analysis',
      description: 'Claude reads the entire profile, including bio, interests, and photos. Every detail is processed.',
      icon: '🔍',
      color: '#2ebbf4',
    },
    {
      number: '02',
      title: 'Interest Matching',
      description: 'Shared interests are identified and weighted based on potential conversation quality.',
      icon: '🎯',
      color: '#2ee674',
    },
    {
      number: '03',
      title: 'Compatibility Score',
      description: 'A match score is calculated using 47 different factors, from humor to intellectual depth.',
      icon: '📊',
      color: '#d4a832',
    },
    {
      number: '04',
      title: 'Decision Made',
      description: 'Based on the analysis, Claude decides: Like, Super Like, or Nope.',
      icon: '💝',
      color: '#fe5068',
    },
  ];

  return (
    <div className="tinder-card p-6">
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-[#fe5068]">❓</span> How Claude Tinder Works
      </h3>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}` }}
              >
                {step.icon}
              </div>
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold" style={{ color: step.color }}>{step.number}</span>
                <h4 className="font-bold text-white">{step.title}</h4>
              </div>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-700">
        <p className="text-xs text-gray-400 text-center">
          <span className="text-[#fe5068]">Note:</span> This is a simulation for entertainment purposes. Claude cannot actually use dating apps, but this demonstrates how AI might approach the concept of compatibility and matching.
        </p>
      </div>
    </div>
  );
}
