import React from 'react';
import { CloudFog, ShieldAlert, Megaphone, Users2, ArrowRight } from 'lucide-react';

interface ExploreFeaturesProps {
  language: 'en' | 'te';
  onSelectFeature: (featureId: string) => void;
}

export const ExploreFeatures: React.FC<ExploreFeaturesProps> = ({
  language,
  onSelectFeature,
}) => {
  const features = [
    {
      id: 'causes',
      icon: CloudFog,
      title: language === 'en' ? 'Causes & Effects' : 'కారణాలు & ప్రభావాలు',
      description:
        language === 'en'
          ? 'Know what causes pollution and how it impacts our health and nature.'
          : 'కాలుష్యానికి గల కారణాలు మరియు మన ఆరోగ్యంపై దాని తీవ్ర ప్రభావాలను తెలుసుకోండి.',
    },
    {
      id: 'prevention',
      icon: ShieldAlert,
      title: language === 'en' ? 'Prevention Methods' : 'నివారణ పద్ధతులు',
      description:
        language === 'en'
          ? 'Simple steps to reduce pollution and protect our environment.'
          : 'కాలుష్యాన్ని తగ్గించడానికి మరియు ప్రకృతిని కాపాడటానికి సులభమైన మార్గాలు.',
    },
    {
      id: 'campaigns',
      icon: Megaphone,
      title: language === 'en' ? 'Awareness Campaigns' : 'అవగాహన ప్రచారాలు',
      description:
        language === 'en'
          ? 'Join events, drives and initiatives for cleaner air.'
          : 'స్వచ్ఛమైన గాలి కోసం జరిగే ర్యాలీలు, సభలు మరియు ప్రచారాలలో చేరండి.',
    },
    {
      id: 'community',
      icon: Users2,
      title: language === 'en' ? 'Student Community' : 'విద్యార్థి సమాజం',
      description:
        language === 'en'
          ? 'Be part of a growing community of changemakers.'
          : 'పర్యావరణ మార్పును తీసుకొచ్చే యువజన నాయకుల బృందంలో భాగం అవ్వండి.',
    },
  ];

  return (
    <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-24">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
          {language === 'en' ? 'Explore More' : 'మరింత అన్వేషించండి'}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          {language === 'en'
            ? 'Learn about air pollution and how we can make a difference together.'
            : 'వాయు కాలుష్యంపై అవగాహన పెంచుకోండి మరియు మార్పు కోసం సహకరించండి.'}
        </p>
      </div>

      {/* Feature 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onSelectFeature(item.id)}
              className="group rounded-2xl bg-[#07160F]/70 border border-[#153E2B]/80 hover:border-[#4ADE80]/70 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10 cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectFeature(item.id);
                }
              }}
            >
              <div>
                {/* Feature Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#0A1E14] flex items-center justify-center text-[#4ADE80] mb-6 border border-[#153E2B] group-hover:border-[#4ADE80]/50 transition-colors">
                  <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#4ADE80] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Link with hover arrow movement */}
              <div className="inline-flex items-center text-xs font-semibold text-[#4ADE80] group-hover:text-emerald-300">
                <span>{language === 'en' ? 'Explore' : 'చూడండి'}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
