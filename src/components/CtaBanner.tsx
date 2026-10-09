import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  language: 'en' | 'te';
  onOpenPledge: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  language,
  onOpenPledge,
}) => {
  return (
    <section className="relative py-28 overflow-hidden" id="join">
      {/* Background Wave & Glow Graphics */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg
          className="w-[900px] h-[320px] max-w-full"
          fill="none"
          viewBox="0 0 1000 300"
        >
          <path
            d="M0 150 C300 50, 700 250, 1000 150"
            stroke="#22C55E"
            strokeDasharray="8 8"
            strokeWidth="2"
          />
          <path
            d="M0 180 C300 80, 700 280, 1000 180"
            stroke="#34D399"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Outline Leaf Motifs Left and Right */}
      <div className="absolute left-8 lg:left-28 top-1/2 -translate-y-1/2 opacity-25 hidden md:block pointer-events-none">
        <svg
          className="w-24 h-24 text-[#4ADE80]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A9.49 9.49 0 0 0 12 21a9.92 9.92 0 0 0 8.94-5.5 10.07 10.07 0 0 0 .93-6.55A12.3 12.3 0 0 0 17 8z" />
          <path d="M12 21a9.92 9.92 0 0 0 8.94-5.5" />
          <path d="M8.38 18.1L16.32 10.16" />
        </svg>
      </div>
      <div className="absolute right-8 lg:right-28 top-1/2 -translate-y-1/2 opacity-25 hidden md:block pointer-events-none">
        <svg
          className="w-24 h-24 text-[#4ADE80] transform -scale-x-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A9.49 9.49 0 0 0 12 21a9.92 9.92 0 0 0 8.94-5.5 10.07 10.07 0 0 0 .93-6.55A12.3 12.3 0 0 0 17 8z" />
          <path d="M12 21a9.92 9.92 0 0 0 8.94-5.5" />
          <path d="M8.38 18.1L16.32 10.16" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Leaf Top Badge */}
        <div className="inline-flex justify-center text-[#4ADE80] mb-3">
          <Leaf className="w-7 h-7 fill-current" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          {language === 'en'
            ? "Let's Breathe Better Together"
            : 'కలసికట్టుగా స్వచ్ఛమైన గాలి పీల్చుకుందాం'}
        </h2>

        <p className="text-sm sm:text-base text-gray-300 mb-8 flex items-center justify-center gap-2">
          <span>{language === 'en' ? 'Awareness today' : 'నేటి అవగాహన'}</span>
          <span className="text-[#4ADE80] font-bold">→</span>
          <span>{language === 'en' ? 'Clean air tomorrow' : 'రేపటి స్వచ్ఛమైన గాలి'}</span>
        </p>

        {/* Primary Action Button */}
        <button
          onClick={onOpenPledge}
          className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#4ADE80] hover:bg-emerald-400 text-[#030B07] font-bold text-sm tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-emerald-500/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          type="button"
        >
          <span>{language === 'en' ? 'Join the Movement' : 'ఉద్యమంలో చేరండి'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
