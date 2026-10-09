import React, { useState } from 'react';
import { Leaf, Zap, Users, Globe2, Sparkles, CheckCircle } from 'lucide-react';

interface StorySectionProps {
  language: 'en' | 'te';
  onOpenPledge: () => void;
  onExploreCampaigns: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({
  language,
  onOpenPledge,
  onExploreCampaigns,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const plantImageSrc =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBlHm722M5xhx1AfLgsa-AWDGdtGYDB26gCiUVElUl9RXkRNNgRnbAG8bSWP1P_Gy9fexbPKYmRRh5pybyBpvOPIjEGK07S_olNKJxZHpf9SdNtzxujh8eRu9n9uSu3fDzhBrm6vMmVJefOfFawX8NE2-pbKPdgjjoPmLqcSHpbWJ4mSTwJfOEe6cosbMQEJXVvRrTl7Bpv6vtxZNDotaZzKi0P01C0yM8Vq9RQPcb4TauUKuOzMtjp';

  return (
    <section className="border-y border-[#153E2B]/40 bg-gradient-to-b from-[#020905] via-[#05170E] to-[#020905] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Hands Planting Sprout */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#153E2B]/80 group bg-[#07160F] min-h-[360px]">
              {!imageError ? (
                <img
                  src={plantImageSrc}
                  alt="Hands holding rich soil nurturing a vibrant green sprout"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-80 sm:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : (
                <div className="w-full h-80 sm:h-96 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-950 via-[#07160F] to-[#030B07] p-8 text-center">
                  <Leaf className="w-16 h-16 text-emerald-400 mb-4" />
                  <span className="text-xl font-bold text-white">Nurturing Clean Air</span>
                  <span className="text-xs text-gray-400 mt-2">Every seedling brings us closer to clean skies</span>
                </div>
              )}

              {/* Tint overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Floating Artistic Quote Overlay */}
              <div className="absolute top-8 left-8 select-none pointer-events-none">
                <span className="block text-2xl sm:text-3xl font-serif italic text-white drop-shadow-md">
                  Small
                </span>
                <span className="block text-2xl sm:text-3xl font-serif italic text-white drop-shadow-md ml-4 text-[#4ADE80]">
                  Steps
                </span>
                <span className="block text-2xl sm:text-3xl font-serif italic text-white drop-shadow-md">
                  Big
                </span>
                <span className="block text-2xl sm:text-3xl font-serif italic text-white drop-shadow-md ml-4 text-emerald-300">
                  Change
                </span>
              </div>

              {/* Decorative Accent Icon */}
              <div className="absolute top-10 right-8 text-[#4ADE80] opacity-80">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>

              {/* Bottom tag on image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-gray-200 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {language === 'en' ? 'Community Reforestation' : 'సామాజిక వన మహోత్సవం'}
                </span>
                <span className="text-emerald-400 font-bold tabular-nums">45K+ Trees</span>
              </div>
            </div>
          </div>

          {/* Right Content: Description & 3 Value Pillars */}
          <div className="lg:col-span-7">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 text-[#4ADE80] mb-4 font-bold text-sm tracking-wide">
              <Leaf className="w-5 h-5 fill-current" />
              <span>
                {language === 'en' ? 'Together for Cleaner Air' : 'స్వచ్ఛమైన గాలి కోసం అందరం కలసికట్టుగా'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5 leading-snug">
              {language === 'en'
                ? 'AirCare is a platform to spread awareness, provide reliable information and empower students to take action against air pollution.'
                : 'ఎయిర్‌కేర్ అనేది వాయు కాలుష్యంపై అవగాహన కల్పించడానికి, ఖచ్చితమైన సమాచారాన్ని అందించడానికి మరియు విద్యార్థులను క్రియాశీలకంగా మార్చడానికి రూపొందించిన వేదిక.'}
            </h2>

            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed max-w-xl">
              {language === 'en'
                ? 'From classrooms to communities, our network empowers modern leaders with real-time pollution metrics, tree restoration guides, and grassroots youth campaigns.'
                : 'తరగతి గదుల నుండి స్థానిక ప్రాంతాల వరకు, మా నెట్‌వర్క్ విద్యార్థులకు ప్రత్యక్ష వాయు సూచికలు, మొక్కల పెంపకం మార్గదర్శకాలు మరియు యువజన ప్రచారాల ద్వారా శక్తినిస్తుంది.'}
            </p>

            {/* 3 Badges / Column Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#153E2B]/60 mb-8">
              {/* Badge 1 */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-[#07160F] border border-[#153E2B] flex items-center justify-center text-[#4ADE80] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {language === 'en' ? (
                    <>Cleaner<br />Environment</>
                  ) : (
                    <>స్వచ్ఛమైన<br />పరిసరాలు</>
                  )}
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-start border-l border-[#153E2B]/60 pl-3 sm:pl-6">
                <div className="w-10 h-10 rounded-xl bg-[#07160F] border border-[#153E2B] flex items-center justify-center text-[#4ADE80] mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {language === 'en' ? (
                    <>Healthier<br />Communities</>
                  ) : (
                    <>ఆరోగ్యకర<br />సమాజం</>
                  )}
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-start border-l border-[#153E2B]/60 pl-3 sm:pl-6">
                <div className="w-10 h-10 rounded-xl bg-[#07160F] border border-[#153E2B] flex items-center justify-center text-[#4ADE80] mb-3">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {language === 'en' ? (
                    <>A Greener<br />Future</>
                  ) : (
                    <>పచ్చని<br />భవితవ్యం</>
                  )}
                </span>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenPledge}
                className="px-6 py-2.5 rounded-full bg-[#4ADE80] hover:bg-emerald-400 text-[#030B07] text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                {language === 'en' ? 'Take the Clean Air Pledge' : 'ప్రతిజ్ఞ తీసుకోండి'}
              </button>
              <button
                onClick={onExploreCampaigns}
                className="px-5 py-2.5 rounded-full border border-gray-700 hover:border-emerald-500/60 bg-[#07160F] text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                {language === 'en' ? 'Explore Youth Campaigns' : 'యువజన కార్యక్రమాలు చూడండి'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
