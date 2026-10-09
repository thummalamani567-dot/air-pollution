import React, { useState } from 'react';
import { Wind, ArrowRight, ShieldCheck, TreePine, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'te';
  onExploreAQI: () => void;
  onExploreMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreAQI,
  onExploreMore,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const heroImageSrc =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDqt5CQSAFWMofUW50ySSLY-ANf433FurBXSdbPy_Y2HLceapWC0O_P60bieTrvY9sBJ2pJ706pRyggb3NxbLSBWQfsp8bHPJ6_A2YxdBMGDFlFdh1dECPtIeCGcxujYfEZWS4oY_lePjsiovDubNfiJ2VqvEsGhAs6ktGwJDRbV8hqc1RPrkOYWGp4iPY--mP61xdh7-OQg_XrsMJ0Zu8RCWyYxkWUKtcvf3CqgGG8NuMjQXKbB75A';

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Background Graphic & Composition */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Visual Media Background with styled CSS fallback container */}
        <div className="absolute inset-0 bg-[#030B07] overflow-hidden">
          {!imageError ? (
            <img
              src={heroImageSrc}
              alt="Atmospheric landscape contrasting industrial smog transitioning to pure nature"
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                imageLoaded ? 'opacity-40' : 'opacity-0'
              }`}
            />
          ) : (
            // Styled CSS / SVG mesh fallback if external asset fails
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/25 via-[#07160F] to-[#030B07]" />
          )}
        </div>

        {/* Cinematic dark scrim gradients for absolute text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030B07]/90 via-[#030B07]/60 to-[#030B07]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030B07]/85 via-transparent to-[#030B07]/85" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-6 md:mt-10">
        {/* Subtle unboxed kicker / mission badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4ADE80] mb-5">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>
            {language === 'en'
              ? 'Youth Climate & Atmospheric Health Network'
              : 'యువజన వాతావరణ & ఆరోగ్య వేదిక'}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-md text-balance">
          {language === 'en' ? (
            <>
              Breathe Clean.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#4ADE80] to-emerald-400">
                Live Green.
              </span>
            </>
          ) : (
            <>
              స్వచ్ఛమైన గాలి పీల్చండి.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] via-[#4ADE80] to-emerald-400">
                పచ్చదనంతో జీవించండి.
              </span>
            </>
          )}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-normal leading-relaxed drop-shadow text-balance">
          {language === 'en' ? (
            <>
              Understand air pollution. Discover solutions.
              <br className="hidden sm:inline" /> Take action for a healthier planet.
            </>
          ) : (
            <>
              వాయు కాలుష్యాన్ని అర్థం చేసుకోండి. పరిష్కారాలను కనుగొనండి.
              <br className="hidden sm:inline" /> ఆరోగ్యకరమైన రేపటి కోసం భాగస్వాములు కండి.
            </>
          )}
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreAQI}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#4ADE80] hover:bg-emerald-400 text-[#030B07] font-semibold text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            type="button"
          >
            <Wind className="w-4 h-4 text-[#030B07]" />
            <span>{language === 'en' ? 'Explore Air Quality' : 'గాలి నాణ్యతను తనిఖీ చేయండి'}</span>
          </button>

          <button
            onClick={onExploreMore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-600 hover:border-[#4ADE80] bg-[#030B07]/80 hover:bg-[#07160F] text-white font-medium text-sm transition-all duration-200 backdrop-blur-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            type="button"
          >
            <span>{language === 'en' ? 'Learn More' : 'మరింత తెలుసుకోండి'}</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        {/* Clean unboxed proof metadata with typographic separators */}
        <div className="mt-12 pt-8 border-t border-[#153E2B]/40 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-gray-400 font-medium">
          <span className="flex items-center gap-1.5 text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            {language === 'en' ? 'Real-time AQI Tracking' : 'ప్రత్యక్ష గాలి పర్యవేక్షణ'}
          </span>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <span>{language === 'en' ? '180+ School Monitored Campuses' : '180+ విద్యా ప్రాంగణాలు'}</span>
          <span aria-hidden="true" className="text-gray-600">·</span>
          <span className="flex items-center gap-1.5 text-gray-300">
            <TreePine className="w-3.5 h-3.5 text-emerald-400" />
            {language === 'en' ? '45,200+ Native Saplings Planted' : '45,200+ నాటిన మొక్కలు'}
          </span>
        </div>
      </div>
    </section>
  );
};
