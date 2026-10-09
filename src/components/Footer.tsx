import React from 'react';
import { Leaf, Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'te';
  onNavigate: (page: 'home' | 'causes' | 'prevention' | 'campaigns' | 'community') => void;
  onSelectFeature: (id: string) => void;
  onOpenPledge: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onSelectFeature,
  onOpenPledge,
}) => {
  return (
    <footer className="border-t border-[#0d231b] bg-[#020b08] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-[#00e599]/30 text-[#00e599]">
                <Leaf className="w-4 h-4 text-[#00e599] fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Air<span className="text-[#00e599]">Care</span>
              </span>
            </div>
            <span className="hidden sm:inline-block text-[#1b3d31]">•</span>
            <p className="text-xs text-[#7e9a8f] tracking-wide font-medium">
              {language === 'en'
                ? 'Clean Air • Healthy People • Sustainable Planet'
                : 'స్వచ్ఛమైన గాలి • ఆరోగ్యవంతమైన ప్రజలు • పచ్చని భూమి'}
            </p>
          </div>

          {/* Footer Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-[#7e9a8f] font-medium">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Home' : 'హోమ్'}
            </button>
            <span className="text-[#153127]">|</span>
            <button
              onClick={() => {
                onNavigate('causes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Causes & Effects' : 'కారణాలు & ప్రభావాలు'}
            </button>
            <span className="text-[#153127]">|</span>
            <button
              onClick={() => {
                onNavigate('prevention');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Prevention' : 'నివారణ'}
            </button>
            <span className="text-[#153127]">|</span>
            <button
              onClick={() => {
                onNavigate('campaigns');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#00e599] transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Campaigns' : 'ప్రచారాలు'}
            </button>
            <span className="text-[#153127]">|</span>
            <button
              onClick={() => {
                onNavigate('community');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#00e599] font-bold transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Community' : 'సమాజం'}
            </button>
          </nav>

          {/* Slogan & Action */}
          <button
            onClick={onOpenPledge}
            className="flex items-center gap-2 text-xs font-semibold text-[#00e599] tracking-wide bg-emerald-950/40 hover:bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-500/30 transition-colors cursor-pointer"
          >
            <Leaf className="w-3.5 h-3.5 text-[#00e599]" />
            <span>{language === 'en' ? 'Take Citizen Pledge' : 'ప్రతిజ్ఞ చేయండి'}</span>
          </button>
        </div>

        <div className="pt-6 border-t border-[#091b15] text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <span>© {new Date().getFullYear()} AirCare Initiative. Dedicated to clean air and youth climate leadership.</span>
          <Heart className="w-3 h-3 text-[#00e599] fill-current inline" />
        </div>
      </div>
    </footer>
  );
};
