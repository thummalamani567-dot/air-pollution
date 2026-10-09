import React, { useState } from 'react';
import { Leaf, Menu, X, Globe, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'causes' | 'prevention' | 'campaigns' | 'community';
  setCurrentPage: (page: 'home' | 'causes' | 'prevention' | 'campaigns' | 'community') => void;
  language: 'en' | 'te';
  setLanguage: (lang: 'en' | 'te') => void;
  onOpenPledge: () => void;
  onSelectFeature: (featureId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  language,
  setLanguage,
  onOpenPledge,
  onSelectFeature,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'causes') {
      setCurrentPage('causes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'prevention') {
      setCurrentPage('prevention');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'campaigns') {
      setCurrentPage('campaigns');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'community') {
      setCurrentPage('community');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onSelectFeature(id);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#030d0a]/95 backdrop-blur-md border-b border-[#0d231b] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md cursor-pointer"
          aria-label="AirCare Homepage"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-[#00e599]/30 flex items-center justify-center text-[#00e599] transition-transform duration-200 group-hover:scale-105 shadow-lg shadow-emerald-950/50">
            <Leaf className="w-5 h-5 fill-current" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white flex items-center">
            Air<span className="text-[#00e599]">Care</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links (Clean typography with active indicator) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          {/* Home Link */}
          <button
            onClick={() => handleNavClick('home')}
            className={`relative py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              currentPage === 'home'
                ? 'text-[#00e599] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00e599] after:rounded-full'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {language === 'en' ? 'Home' : 'హోమ్'}
          </button>

          {/* Causes & Effects */}
          <button
            onClick={() => handleNavClick('causes')}
            className={`relative py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              currentPage === 'causes'
                ? 'text-[#00e599] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00e599] after:rounded-full'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {language === 'en' ? 'Causes & Effects' : 'కారణాలు & ప్రభావాలు'}
          </button>

          {/* Prevention Methods */}
          <button
            onClick={() => handleNavClick('prevention')}
            className={`relative py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              currentPage === 'prevention'
                ? 'text-[#00e599] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00e599] after:rounded-full'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {language === 'en' ? 'Prevention' : 'నివారణ'}
          </button>

          {/* Campaigns */}
          <button
            onClick={() => handleNavClick('campaigns')}
            className={`relative py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              currentPage === 'campaigns'
                ? 'text-[#00e599] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00e599] after:rounded-full'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {language === 'en' ? 'Campaigns' : 'ప్రచారాలు'}
          </button>

          {/* Community */}
          <button
            onClick={() => handleNavClick('community')}
            className={`relative py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              currentPage === 'community'
                ? 'text-[#00e599] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#00e599] after:rounded-full'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {language === 'en' ? 'Community' : 'సమాజం'}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Language Selector */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
            className="flex items-center gap-2 bg-[#091b15] hover:bg-[#0f2921] border border-[#16382c] px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-slate-200 transition-all cursor-pointer whitespace-nowrap shrink-0"
            title="Toggle Language: English / Telugu"
            type="button"
          >
            <Globe className="w-3.5 h-3.5 text-[#00e599]" />
            <span>EN / తెలుగు</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenPledge}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00e599] hover:bg-[#34d399] text-[#030d0a] text-xs font-bold transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-emerald-500/25 whitespace-nowrap shrink-0 cursor-pointer"
            type="button"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Join Movement' : 'ప్రతిజ్ఞ చేయండి'}</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030d0a]/95 border-b border-[#0d231b] px-5 py-4 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'home' ? 'text-[#00e599] font-bold' : 'text-gray-200'
            }`}
          >
            {language === 'en' ? 'Home' : 'హోమ్'}
          </button>
          <button
            onClick={() => handleNavClick('causes')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'causes' ? 'text-[#00e599] font-bold' : 'text-gray-200'
            }`}
          >
            {language === 'en' ? 'Causes & Effects' : 'కారణాలు & ప్రభావాలు'}
          </button>
          <button
            onClick={() => handleNavClick('prevention')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'prevention' ? 'text-[#00e599] font-bold' : 'text-gray-200'
            }`}
          >
            {language === 'en' ? 'Prevention' : 'నివారణ'}
          </button>
          <button
            onClick={() => handleNavClick('campaigns')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'campaigns' ? 'text-[#00e599] font-bold' : 'text-gray-200'
            }`}
          >
            {language === 'en' ? 'Campaigns' : 'ప్రచారాలు'}
          </button>
          <button
            onClick={() => handleNavClick('community')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'community' ? 'text-[#00e599] font-bold' : 'text-gray-200'
            }`}
          >
            {language === 'en' ? 'Community' : 'సమాజం'}
          </button>
          <div className="pt-2 border-t border-gray-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPledge();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#00e599] text-[#030d0a] text-sm font-bold shadow-md shadow-emerald-500/20"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{language === 'en' ? 'Join Movement' : 'ప్రతిజ్ఞ చేయండి'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
