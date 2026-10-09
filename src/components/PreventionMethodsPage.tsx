import React, { useState } from 'react';
import {
  Bus,
  Bike,
  Flame,
  TreePine,
  Zap,
  Wrench,
  Lightbulb,
  Recycle,
  ShoppingBag,
  RotateCcw,
  Users,
  Heart,
  Globe2,
  ShieldCheck,
  ArrowRight,
  Leaf,
} from 'lucide-react';

interface PreventionMethodsPageProps {
  language: 'en' | 'te';
  onNavigateHome: () => void;
  onNavigateCampaigns: () => void;
  onOpenPledge: () => void;
}

export const PreventionMethodsPage: React.FC<PreventionMethodsPageProps> = ({
  language,
  onNavigateHome,
  onNavigateCampaigns,
  onOpenPledge,
}) => {
  const [activeEcoAction, setActiveEcoAction] = useState<'reduce' | 'reuse' | 'recycle'>('reduce');

  const scrollToCards = () => {
    const el = document.getElementById('prevention-cards');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderImg = (src: string, alt: string, className: string) => (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        (e.target as HTMLElement).style.display = 'none';
      }}
      className={className}
    />
  );

  const preventionCards = [
    {
      num: '01',
      title: language === 'en' ? 'Use Public Transport' : 'ప్రజా రవాణాను ఉపయోగించండి',
      desc:
        language === 'en'
          ? 'Choose buses, metro or carpooling to reduce vehicle emissions.'
          : 'వాహన ఉద్గారాలను తగ్గించడానికి బస్సులు, మెట్రో లేదా కార్‌పూలింగ్ ఎంచుకోండి.',
      icon: Bus,
      tag: language === 'en' ? 'Less vehicles = Cleaner air' : 'తక్కువ వాహనాలు = స్వచ్ఛమైన గాలి',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6TrtDDlJQxbffsnMVHpUH9uOEpx4JjUxl-YqpmQ7hFOvyyCqr7EkCsyCmT0p1_tF2BF3guk6iH57Nj_80yMzN6yZBsKRPlIDVtmiKP6Ab3dt737zo-Cr0oMoxQdrLOO04nhEB_93yfia-FKfPwk83OGGegmK8_JHR4FE7pHERrMdeYrqX0TQF8P_wso5a2zyCTAHR1WRLmgbWZWFvq94GDbsDYVxicvwWYoYfTfhMYh0O73kG4lVU',
      imgAlt: 'Modern green electric public bus driving through clean city street',
    },
    {
      num: '02',
      title: language === 'en' ? 'Walk or Cycle' : 'నడవండి లేదా సైకిల్ తొక్కండి',
      desc:
        language === 'en'
          ? 'Keep yourself fit and help the environment at the same time.'
          : 'శరీర దృఢత్వాన్ని కాపాడుకుంటూనే పర్యావరణానికి మేలు చేయండి.',
      icon: Bike,
      tag: language === 'en' ? 'More cycles = Less pollution' : 'ఎక్కువ సైక్లింగ్ = తక్కువ కాలుష్యం',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyf5pUL5ZqsIb-a2f3AqdQkZ008YD5D3JdCAbNBmWsnHw1kjXnJODjTB16tJ9oDMjmnQUvL8dEq1CB5Vf87G2wYKvoEWayRuIwDf2wxZxdRwjZcw5TOk3sSCBpPV0VZGrKMef48w3dymn_SnR5Bw_zi9kwQf9daaI6NLVpJ7HH2emjHFsrPhc7pCvHtGFkpsJjjbnYTggXgmXO1uF3LIPrbsd9ah9DummIScxso65FRUkMFVlG7HcG',
      imgAlt: 'Cyclist riding outdoors along green path during warm golden hour sunset',
    },
    {
      num: '03',
      title: language === 'en' ? 'Avoid Burning Waste' : 'చెత్తను కాల్చవద్దు',
      desc:
        language === 'en'
          ? 'Do not burn garbage, leaves or plastic. It releases toxic chemicals into the air.'
          : 'చెత్త, ఆకులు లేదా ప్లాస్టిక్‌ను కాల్చకండి. ఇది వాతావరణంలోకి విష రసాయనాలను విడుదల చేస్తుంది.',
      icon: Flame,
      tag: language === 'en' ? 'Stop burning = Clean air' : 'దహనం ఆపండి = స్వచ్ఛమైన గాలి',
      isProhibited: true,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnap9Hi7uzonQiB7ycMQgnXkaNr6uigkBSt_yLVVWiAawMPYQXbr5RWmeTUH-PCGRY3rTMJN78EXsm4cSkUHxSYwb-3X85GIY3ZIXgS__r_rRcVjQQ5gXGebWjZuZ9TXC_gPicDciozXonFJatRupWU6fcPplNgP8pDrXlE5BL2Yz4t3RJV-Kl_U6Ws0Tegmp-SClGdfytE_TTiZk0KU_7APfDLWmDXUy7mohMc4RDmxnjF067tpvO',
      imgAlt: 'Open bonfire burning debris producing smoke',
    },
    {
      num: '04',
      title: language === 'en' ? 'Plant and Protect Trees' : 'మొక్కలు నాటండి & సంరక్షించండి',
      desc:
        language === 'en'
          ? 'Trees absorb CO₂ and release oxygen, improving air quality.'
          : 'చెట్లు కార్బన్ డయాక్సైడ్‌ను పీల్చుకుని ప్రాణవాయువును విడుదల చేస్తాయి.',
      icon: TreePine,
      tag: language === 'en' ? 'More trees = Fresh air' : 'ఎక్కువ చెట్లు = తాజా గాలి',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnGMDoFoeCbJHTZB4RcyLSvHnOD7Z-ISt_9ydzHm6wFb60fxTXabgC1CXFkuFWYilXl8fg0tOXOXRp1lIlm7Kx4CM51Pp_mGe3ssl4Vn58B-VrOnzq3TT9O4kR6ZSA9-CUxf_kaubE4bNQoU_syRfnRHWzmXRBr_2Z8VlT4XzFPzJC4y2ZSgCrZ4IPGCY_909Zcf7gPiDdxjQBUIFQ4cp6CfNY-Ek970mb256qtrHj8PS0otTb93R3',
      imgAlt: 'Hands carefully planting young tree seedling in fertile earth',
    },
    {
      num: '05',
      title: language === 'en' ? 'Save Electricity' : 'విద్యుత్‌ను ఆదా చేయండి',
      desc:
        language === 'en'
          ? 'Use energy-efficient devices and turn off lights and fans when not in use.'
          : 'విద్యుత్ పొదుపు సాధనాలను వాడండి మరియు అవసరం లేనప్పుడు లైట్లు, ఫ్యాన్లు ఆపివేయండి.',
      icon: Zap,
      tag: language === 'en' ? 'Save energy = Less emissions' : 'శక్తి పొదుపు = తక్కువ ఉద్గారాలు',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFBZ3vqaq_yu_8-r5ICln-cgsa6XFfdwSuwAXvVjykYNlIqAfii5Vddz2tgjf-pw4OnE5FME5qBltVXRNXSqXrjMp0c1IvDG5KUl_f2qYXWT2wYjEA6efbwJZdoNL_LVkD15w84goZXmkZGmjhFuhuo2lhW8sf_KV_o2o_50B3BY_SI2g0-3iLd9RFKpDiHlOxiPuAOMExgtuwMBdnY9uvlRECobPOf8IF6t13ylEmMnnQ2ggDiET9',
      imgAlt: 'Hand toggling modern light switch off with warm illuminated bulb background',
    },
    {
      num: '06',
      title: language === 'en' ? 'Maintain Vehicles' : 'వాహనాల సక్రమ నిర్వహణ',
      desc:
        language === 'en'
          ? 'Regular servicing reduces harmful emissions and improves fuel efficiency.'
          : 'సమయానికి సర్వీసింగ్ చేయించడం ద్వారా హానికరమైన పొగ తగ్గి మైలేజ్ పెరుగుతుంది.',
      icon: Wrench,
      tag: language === 'en' ? 'Well maintained = Cleaner air' : 'మంచి నిర్వహణ = స్వచ్ఛమైన గాలి',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj0jFSYj2oCGrD-mPBLSnUQGkHGzJ_1E-_2AXtZbSZMIM4WXDpu1QRGfwjw-vaRZkc9HtwSDRiAt_hP2-4HiGSegzAkGZpOzUwwUYtg4j6UogS1XpF57YrcnTsvYNvC2mbB6vptXgVJfxMhgR13fUvJjHyU9MDcqlcgIqa9ZpfN97wwd7R8t8lxyghONzr-iviIyD0aofhL6gfMONEfTzEEcIytuvakfXYLYu93f3Xw-jTkhIpnNy8',
      imgAlt: 'Mechanic inspects and tunes clean high efficiency car engine in workshop',
    },
  ];

  return (
    <div className="bg-[#030d09] text-gray-200 antialiased selection:bg-emerald-500 selection:text-black">
      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative hero-glow pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 z-10">
              {/* Small Section Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[#00e599] text-xs font-semibold tracking-wider uppercase mb-6">
                <Leaf className="w-3.5 h-3.5 text-[#00e599]" />
                <span>{language === 'en' ? 'Prevention Methods' : 'నివారణ పద్ధతులు'}</span>
              </div>

              {/* Big Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-white leading-[1.12] mb-6">
                {language === 'en' ? (
                  <>
                    Small Changes
                    <br />
                    <span className="text-[#00e599] text-glow">Make a Big Difference</span>
                  </>
                ) : (
                  <>
                    చిన్న మార్పులు
                    <br />
                    <span className="text-[#00e599] text-glow">గొప్ప మార్పును తెస్తాయి</span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mb-9">
                {language === 'en'
                  ? 'Air pollution can be reduced. We all can play a part by making simple, sustainable choices in our daily lives.'
                  : 'వాయు కాలుష్యాన్ని మనం తగ్గించగలం. మన రోజువారీ జీవితంలో చిన్న చిన్న జాగ్రత్తలు పాటించడం ద్వారా ఆరోగ్యకరమైన పర్యావరణాన్ని సృష్టించవచ్చు.'}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToCards}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#00e599] text-[#030d09] font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:bg-[#34d399] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  type="button"
                >
                  <Leaf className="w-4 h-4 text-[#030d09]" />
                  <span>{language === 'en' ? 'Adopt Green Habits' : 'మంచి అలవాట్లు అలవరచుకోండి'}</span>
                  <span className="text-base font-bold">→</span>
                </button>

                <button
                  onClick={onNavigateHome}
                  className="px-5 py-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  {language === 'en' ? '← Back to Home' : '← హోమ్‌కు వెళ్లండి'}
                </button>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Background Ambient Glow */}
                <div className="absolute -top-10 -right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Main Hero Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-emerald-500/25 shadow-2xl shadow-emerald-950/60 bg-gradient-to-tr from-[#051912] to-[#0c2a20]">
                  {renderImg(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCpfMnWag-TWOL_U749ya5BeeeETm3yvYKoGLk_lOl9H9pKkkWpcDvFfQgTkKI1sor18Gi9vR2-OMVvI7ZzK150IKQUMLSWQ022wxPOUdg05_6Jz3jGeaPfVFW2pJZPUSnUEQ5fGQRZ5MiPrgLLzYCQ3xkcivMiZKZATi2RixMRHTwOwfrP6tYgvWpY55HhM0SXMlmYREEmBpcu1HPwXEEwEXpudgYEvGW9f_TRbw8hEJ2bo-GneHFR',
                    'Hands holding fertile soil with a flourishing green seedling under warm sun',
                    'w-full h-[380px] sm:h-[430px] lg:h-[460px] object-cover object-center filter brightness-[1.03] contrast-[1.05]'
                  )}

                  {/* Bottom Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020906] via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* Cursive Slogan Badge Over Image */}
                  <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-right pointer-events-none select-none">
                    <div className="font-handwriting text-3xl sm:text-4xl text-[#34d399] tracking-wider leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] transform -rotate-2">
                      Cleaner Air
                      <br />
                      <span className="text-[#00e599]">Brighter Future</span>
                    </div>

                    {/* Leaf Doodle Accent */}
                    <div className="flex justify-end mt-1 pr-1 text-[#00e599]">
                      <svg className="w-8 h-4 rotate-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 3C11.5 3.5 6 10 4 16c4-1 9-4 12-8.5C18 5 21 3 21 3zm-9 14c-3 1.5-6 1.5-8 1 1-3 3-5.5 5-7-1 3.5 1 5.5 3 6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PREVENTION METHODS GRID (6 CARDS) */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#030d09]" id="prevention-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00e599]">
                <Leaf className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {language === 'en'
                  ? 'Simple Ways to Prevent Air Pollution'
                  : 'వాయు కాలుష్యాన్ని నివారించే సులభమైన మార్గాలు'}
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base ml-12">
              {language === 'en'
                ? 'Follow these easy steps to reduce pollution and create a healthier environment.'
                : 'కాలుష్యాన్ని తగ్గించడానికి మరియు స్వచ్ఛమైన వాతావరణాన్ని నిర్మించడానికి ఈ పద్ధతులను అనుసరించండి.'}
            </p>
          </div>

          {/* 6 Prevention Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.num}
                  className="bg-[#071913] border border-[#11382b] rounded-2xl p-5 flex flex-col justify-between card-hover group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 font-bold text-xs tabular-nums">
                        {card.num}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center text-[#00e599]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00e599] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>

                  <div>
                    {/* Thumbnail */}
                    <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3.5 bg-emerald-950/20 border border-emerald-950/50 flex items-center justify-center">
                      {renderImg(
                        card.img,
                        card.imgAlt,
                        `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                          card.isProhibited ? 'filter brightness-75' : ''
                        }`
                      )}

                      {/* Red Stop Sign Overlay for Avoid Burning Waste */}
                      {card.isProhibited && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                          <div className="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center relative shadow-lg">
                            <div className="w-full h-1 bg-red-500 transform -rotate-45" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Tag */}
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <span className="text-sm">🌿</span>
                      <span>{card.tag}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DAILY ECO TIP SECTION */}
      {/* ======================================================== */}
      <section className="py-6 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#041911] via-[#062118] to-[#041610] border border-emerald-500/30 overflow-hidden shadow-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00e599]">
                    <Lightbulb className="w-5 h-5 text-[#00e599]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {language === 'en' ? 'Daily Eco Tip' : 'రోజువారీ పర్యావరణ సూచన'}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-xl">
                  {language === 'en'
                    ? 'Try to reduce single-use plastics. Use reusable bags, bottles and containers. Small steps create a big impact!'
                    : 'ఒక్కసారి వాడే ప్లాస్టిక్‌ను నివారించండి. పునర్వినియోగ సంచులు, స్టీల్ సీసాలు వాడండి. చిన్న మార్పులే మహత్తర ఫలితాలనిస్తాయి!'}
                </p>

                {/* 3 Circular Action Badges: Reduce, Reuse, Recycle */}
                <div className="flex items-center gap-6 sm:gap-10">
                  {/* Reduce */}
                  <div
                    onClick={() => setActiveEcoAction('reduce')}
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${
                        activeEcoAction === 'reduce'
                          ? 'border-[#00e599] bg-emerald-500/20 text-[#00e599] shadow-lg shadow-emerald-500/20 scale-105'
                          : 'border-emerald-500/40 bg-emerald-950/50 text-[#00e599] group-hover:bg-emerald-500/20'
                      }`}
                    >
                      <RotateCcw className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-gray-300">
                      {language === 'en' ? 'Reduce' : 'తగ్గించండి'}
                    </span>
                  </div>

                  {/* Reuse */}
                  <div
                    onClick={() => setActiveEcoAction('reuse')}
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${
                        activeEcoAction === 'reuse'
                          ? 'border-[#00e599] bg-emerald-500/20 text-[#00e599] shadow-lg shadow-emerald-500/20 scale-105'
                          : 'border-emerald-500/40 bg-emerald-950/50 text-[#00e599] group-hover:bg-emerald-500/20'
                      }`}
                    >
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-gray-300">
                      {language === 'en' ? 'Reuse' : 'మళ్లీ వాడండి'}
                    </span>
                  </div>

                  {/* Recycle */}
                  <div
                    onClick={() => setActiveEcoAction('recycle')}
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${
                        activeEcoAction === 'recycle'
                          ? 'border-[#00e599] bg-emerald-500/20 text-[#00e599] shadow-lg shadow-emerald-500/20 scale-105'
                          : 'border-emerald-500/40 bg-emerald-950/50 text-[#00e599] group-hover:bg-emerald-500/20'
                      }`}
                    >
                      <Recycle className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-gray-300">
                      {language === 'en' ? 'Recycle' : 'రీసైకిల్ చేయండి'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Eco Graphic Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#07241a]/60 shadow-xl">
                  {renderImg(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBYq7DmQCgn6odH3I56wV9YxKz8kc1_Lvr436vxI5QeC0qQ7gmNeqVDN5uHRqu6XkbFhy9I1oVdla2RuV95HU34x62DgxdtbIk5DGqstIGUwU7AOt076WZ6uf37ijepIrwzxqW-WoT4eNbvOlFl7KdBeBdMH8tjpaxM-9PC0ZP79YpxaQuQpHAc3By7gYqsdG7MGEDnkwS4tP3Ms_hl6tTh-LgstFq0jdAjltNrDsDyaA6f2nz_MQL7',
                    'Eco-friendly reusable tote bag printed with GO GREEN and stainless steel bottle surrounded by leaves',
                    'w-full h-64 sm:h-72 object-cover object-center filter contrast-105'
                  )}
                  {/* Graphic overlay badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02130e] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                      {language === 'en' ? 'Sustainable Lifestyle' : 'సుస్థిర జీవన విధానం'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. JOIN THE MOVEMENT CTA */}
      {/* ======================================================== */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-500/30 bg-[#061c15] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Hands Holding Globe Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-lg">
                  {renderImg(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAihCzGXl4gVrra2jYPeO8JfUeMpD2UF2pEG4Es5C-fzgHqfUj7YXNJwfZt5auvkncpEYXauf8IMKboFRrjJuohENIZvCMZ2h_KRp4_EZzixeCucMzlRqmy5-qIrzysMR5KQTLhHBfXJHNqTyiPSQmg-mzWj1cMp7B8MH4Fr01m5aWezM2YbYhpU6Zl_dYo9n1FpyFvkRnhk0FNVleVuTt8DYd-GbIBxanhBcebQpCskwM28T9LBCWO',
                    'Gentle cupped hands protecting green miniature Earth globe with leaves',
                    'w-full h-full object-cover object-center filter brightness-95'
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#061c15]/20 to-[#061c15]/90 pointer-events-none" />

                  {/* Cursive Slogan */}
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right pointer-events-none select-none">
                    <span className="font-handwriting text-3xl sm:text-4xl text-[#34d399] tracking-wider leading-tight block transform -rotate-3 drop-shadow">
                      Together
                      <br />
                      We Can
                    </span>
                    <div className="flex justify-end text-[#00e599] mt-0.5">
                      <svg className="w-6 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 3C11.5 3.5 6 10 4 16c4-1 9-4 12-8.5C18 5 21 3 21 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[#00e599]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {language === 'en' ? 'Join the Movement' : 'ఉద్యమంలో చేరండి'}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mb-6">
                  {language === 'en'
                    ? 'Be a part of clean air initiatives. Participate in campaigns, share ideas, and inspire others.'
                    : 'స్వచ్ఛమైన గాలి ఉద్యమాల్లో భాగం అవ్వండి. ప్రచారాలలో పాల్గొనండి, మీ ఆలోచనలను పంచుకోండి మరియు ఇతరులను ప్రేరేపించండి.'}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenPledge}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00e599] text-[#030d09] font-bold text-sm tracking-wide shadow-md shadow-emerald-500/20 hover:bg-[#34d399] transition-all duration-200 cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Take the Clean Air Pledge' : 'ప్రతిజ్ఞ తీసుకోండి'}</span>
                    <span className="text-base font-bold">→</span>
                  </button>

                  <button
                    onClick={onNavigateCampaigns}
                    className="px-5 py-3 rounded-full border border-gray-700 hover:border-[#00e599]/60 text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'View Campaigns' : 'కార్యక్రమాలు చూడండి'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. IMPACT PILLARS GRID (4 COLUMNS) */}
      {/* ======================================================== */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Pillar 1 */}
            <div className="p-4 rounded-2xl bg-[#061812] border border-[#11382a] flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-[#00e599] shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {language === 'en' ? 'Cleaner Air' : 'స్వచ్ఛమైన గాలి'}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {language === 'en' ? 'Healthier people' : 'ఆరోగ్యవంతమైన ప్రజలు'}
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-2xl bg-[#061812] border border-[#11382a] flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-[#00e599] shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {language === 'en' ? 'Healthier Lives' : 'ఆరోగ్యకర జీవనం'}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {language === 'en' ? 'Stronger communities' : 'బలమైన సమాజం'}
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-2xl bg-[#061812] border border-[#11382a] flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-[#00e599] shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {language === 'en' ? 'Greener Planet' : 'పచ్చని భూమి'}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {language === 'en' ? 'Sustainable future' : 'సుస్థిర భవిష్యత్తు'}
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 rounded-2xl bg-[#061812] border border-[#11382a] flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-[#00e599] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {language === 'en' ? 'Your Actions Matter' : 'మీ కృషి ముఖ్యం'}
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {language === 'en' ? 'Start today' : 'ఈరోజే మొదలుపెట్టండి'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
