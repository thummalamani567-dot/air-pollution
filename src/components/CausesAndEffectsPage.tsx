import React, { useState } from 'react';
import {
  Factory,
  Car,
  Flame,
  HardHat,
  TreePine,
  Activity,
  Heart,
  Sprout,
  Bird,
  Globe,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Megaphone,
  Users2,
  ChevronRight,
  Info,
} from 'lucide-react';

interface CausesAndEffectsPageProps {
  language: 'en' | 'te';
  onNavigateHome: () => void;
  onSelectFeature: (featureId: string) => void;
  onOpenPledge: () => void;
}

export const CausesAndEffectsPage: React.FC<CausesAndEffectsPageProps> = ({
  language,
  onNavigateHome,
  onSelectFeature,
  onOpenPledge,
}) => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);
  const [selectedCauseId, setSelectedCauseId] = useState<string | null>(null);

  // Fallback image helper
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

  const majorCauses = [
    {
      id: 'vehicle',
      title: language === 'en' ? 'Vehicle Emissions' : 'వాహనాల ఉద్గారాలు',
      desc:
        language === 'en'
          ? 'Cars, bikes and trucks release harmful gases like CO₂, NOₓ and particulate matter.'
          : 'కార్లు, బైకులు మరియు ట్రక్కులు CO₂, NOₓ మరియు సూక్ష్మ ధూళికణాల వంటి హానికరమైన వాయువులను విడుదల చేస్తాయి.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjTvgD8TXkqEiicc14Mw-hDJityRGBhR-oy7JUuAMPYH1RbGbz9NpaQqixCS0W9CvHYK4LSoarRlj2KmCSV7T4IPTikp3_aLPXAnjj8GF-BuGd1BHUGBvMY1wCVgKvLInFtNnfmLRQo8z0LPlqQc0yHG3oQGiPU_48hXFhZxTrmb3HwvscwgWCF0V-sE2GdiEwIcrTxSFPZDx1738x-a8WYOUQIY8em6X26PExxnDLtR4NRY8VbeY6',
      icon: Car,
      fact: language === 'en' ? 'Accounts for over 40% of urban nitrogen oxides (NOx).' : 'నగరాల్లో 40% పైగా నైట్రోజన్ ఆక్సైడ్లు వాహనాల నుంచే వస్తాయి.',
    },
    {
      id: 'industrial',
      title: language === 'en' ? 'Industrial Emissions' : 'పారిశ్రామిక ఉద్గారాలు',
      desc:
        language === 'en'
          ? 'Factories and power plants release toxic gases and fine particles into the air.'
          : 'కర్మాగారాలు మరియు విద్యుత్ ప్లాంట్లు విషపూరిత వాయువులను మరియు సూక్ష్మ రేణువులను గాలిలోకి విడుదల చేస్తాయి.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtTrPwwftLsz3e0gqadSG67RON5TqsEwKdN8QfBsLwZX5SgK6aqrdwHfz3knP4dNy190qlvFT-q05VpjsKQRNalERfeBsTPI32CJYramPd9S3ia2S7X48b99OuCrt4YqFCeE0pwjTO32pNpq2l_ezGWuTbLtBPjSl2uDczxLf4oV_D8DtWuUMWABbSZueTNmfhnHc7UeIBWKaudzjMyQt9D28plmrpZNRSy3uX8aSYUYL1ahopMmKY',
      icon: Factory,
      fact: language === 'en' ? 'Coal-fired plants produce sulfur dioxide causing acid rain.' : 'బొగ్గు ఆధారిత ప్లాంట్లు ఆమ్ల వర్షాలకు కారణమయ్యే SO₂ ను విడుదల చేస్తాయి.',
    },
    {
      id: 'waste',
      title: language === 'en' ? 'Burning Waste' : 'చెత్త దహనం',
      desc:
        language === 'en'
          ? 'Open burning of garbage, plastic and biomass releases harmful smoke and chemicals.'
          : 'చెత్త, ప్లాస్టిక్ మరియు వ్యర్థాలను బహిరంగంగా కాల్చడం వల్ల హానికరమైన పొగ మరియు రసాయనాలు విడుదలవుతాయి.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA00vCjgYewHdI4utq9My5denJlue943be4Bt_EwWvOJtlxCmXZHe_g2GlfpVfH16Mj59YlXowbOpriDygyu_bu_p_yOGP3BnQnDPcjSSN7q0kme6XJKjJ8YGa8q8GdIYN-KlP_2fXmWw-loiV9eTV2IDU_meS1MKemB0ukOWz2hm1EZYD778_vrWC8OX5Wyed5ET4OkBG2S-cpYq_gaVx4usU5JwBgTUZtL96i6R7IR42MLWV5EADD',
      icon: Flame,
      fact: language === 'en' ? 'Releases carcinogenic dioxins and high concentrations of black carbon.' : 'క్యాన్సర్‌కు కారణమయ్యే డయాక్సిన్‌లు మరియు బ్లాక్ కార్బన్‌ను విడుదల చేస్తుంది.',
    },
    {
      id: 'construction',
      title: language === 'en' ? 'Construction Dust' : 'భవన నిర్మాణ ధూళి',
      desc:
        language === 'en'
          ? 'Construction and demolition activities create dust particles that pollute the air.'
          : 'నిర్మాణ మరియు కూల్చివేత పనుల వలన వచ్చే దుమ్ము కణాలు గాలిని కలుషితం చేస్తాయి.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDteiwVlH7S-yNy93sOzXZOb9IwJ-GRMHzdHIkySMR5WJ3t3tHuh1N-CP_DDtQnFvFCVYcG6-zD5uA32auFnTrVia3OXEXzl2zMLwut3dZCOIioIEaKzMuz_G_-VQ48FDpokiQ2iOSgrL0_P_MoOS0dzlBeQqSNYURNbgzVND_8mdJJ3WooXf-KHhsoM7VFpWgsOkC-N1gJU7uVD_01l2Sn8UviEPogrSgDDrdW9IwCh12zTtOLdmjF',
      icon: HardHat,
      fact: language === 'en' ? 'Main source of PM10 particles that irritate throat and eyes.' : 'గొంతు మరియు కళ్లను చికాకు పెట్టే PM10 కణాలకు ప్రధాన మూలం.',
    },
    {
      id: 'deforestation',
      title: language === 'en' ? 'Deforestation' : 'అడవుల నరికివేత',
      desc:
        language === 'en'
          ? 'Cutting trees reduces natural air filters and increases carbon dioxide in the atmosphere.'
          : 'చెట్లను నరికివేయడం వల్ల గాలిని శుభ్రపరిచే సహజ వ్యవస్థ తగ్గి కార్బన్ డయాక్సైడ్ పెరుగుతుంది.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPt9baP1QJe-eIaqTKW2U6578k44nB3Q18L-nO6wr1yig6OgCIVFZaab4_-XTJZUPHCo5bZ4A5PQQXfEk_mDYfK3Nw6GzqX8MGEAWZX4Pbg8Gh-XqXQ34Xcc1Hxuv1NoZU46WTYJZCRC2tXn9e9kECPiu_RObsRT5Rungmtuwyv4Ch7WiIU1a4pzaKosr4kFB5FnxuExwoF6AjMSidioOna2Si09JyGF3wHoYr_kUJwCas0zRMBXpL',
      icon: TreePine,
      fact: language === 'en' ? 'One mature tree can absorb ~22kg of CO2 every year.' : 'ఒక పెద్ద చెట్టు సంవత్సరానికి సుమారు 22 కిలోల CO₂ ను గ్రహిస్తుంది.',
    },
  ];

  const effectsList = [
    {
      id: 'human_health',
      title: language === 'en' ? 'Human Health' : 'మానవ ఆరోగ్యం',
      icon: Heart,
      iconColor: 'text-red-400',
      iconBg: 'bg-red-950/60 border-red-500/50',
      bullets:
        language === 'en'
          ? [
              'Breathing problems (asthma, bronchitis)',
              'Heart disease & cardiovascular stress',
              'Lung tissue inflammation & cancer',
              'Reduced overall life expectancy',
            ]
          : [
              'శ్వాస సమస్యలు (ఆస్తమా, బ్రోన్కైటిస్)',
              'గుండె సంబంధిత వ్యాధులు',
              'ఊపిరితిత్తుల క్యాన్సర్ ప్రమాదం',
              'ఆయుఃప్రమాణం గణనీయంగా తగ్గడం',
            ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWvO2aLm3h9i13mJa5z2CPsp8B6_avwjdX-1AP6H7IdZhf5BivJwtZ5TVaWYa1pkWu2arOnAJO7MAWhcjXYMbAv5z7wYYMQ0VW0vTgYFMTwVE-8J4f_IIxqq2rWCIOKbHnWWTGzgdJVdscsAsJen7t-s0cIyK2JoksNP_Rt-2qw4xpCKFmNMgr74sDLGb12uKxBkO7EGiLmWKL3XzqeWUBb_oL1rhOH0fjB9M0B2C__aC_DbnM65Tp',
      imgAlt: 'Medical anatomical representation of lungs affected by smoke',
    },
    {
      id: 'plants_crops',
      title: language === 'en' ? 'Plants & Crops' : 'మొక్కలు & పంటలు',
      icon: Sprout,
      iconColor: 'text-[#10b981]',
      iconBg: 'bg-emerald-950/60 border-[#10b981]/60',
      bullets:
        language === 'en'
          ? [
              'Damages leaf stomata and roots',
              'Reduces agricultural crop yield by 15-30%',
              'Disrupts photosynthesis and soil nutrients',
              'Directly affects regional food security',
            ]
          : [
              'ఆకులు మరియు వేర్లకు తీవ్ర నష్టం',
              'పంట దిగుబడి 15-30% వరకు తగ్గడం',
              'కిరణజన్య సంయోగక్రియకు ఆటంకం',
              'ఆహార భద్రతపై ప్రత్యక్ష ప్రభావం',
            ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDM7dSWaI8dNk_zJjA_xZjBMeW35bSFYRXVmmqLPd1tiPFzKAcjKJUxYaVyF3oCOZFfYp-b3xbI8BRpliE3SmVHMsrSj39nOVe1BXS5RJv1-WwlTkO7dEN3W0p5NWSOYAPFMdEFpWliPtz8nOeTt4k_prGjWbopMtSz6AATWF2rBvgpucl6UqDp0SAoJ0xTpLemY6LhvfO4ckHc4SVGAyWE99C4LcdtRwbClZ_nMCakva83z6UpMn9',
      imgAlt: 'Small green seedling growing in soil under dramatic sunlight',
    },
    {
      id: 'animals_wildlife',
      title: language === 'en' ? 'Animals & Wildlife' : 'జంతువులు & వన్యప్రాణులు',
      icon: Bird,
      iconColor: 'text-teal-300',
      iconBg: 'bg-teal-950/60 border-teal-400/60',
      bullets:
        language === 'en'
          ? [
              'Respiratory and neurological issues in animals',
              'Destruction and degradation of natural habitats',
              'Acid rain poisoning aquatic ecosystems',
              'Accelerated decline in local biodiversity',
            ]
          : [
              'జంతువులలో శ్వాసకోశ మరియు నాడీ సంబంధిత సమస్యలు',
              'సహజ ఆవాసాలు నాశనం కావడం',
              'ఆమ్ల వర్షాల వల్ల జలచరాల మనుగడ ప్రశ్నార్థకం',
              'జీవవైవిధ్యం వేగంగా క్షీణించడం',
            ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ680dwLBgHz2l99gVgEYdRuymfvKf5v5wvnx8rFeTpTOQazU6gogf_3d8HwfB5cSHlMVo0-0m5ALouQos76d522JUmAN4PGLT32Mj3zcZu_4_Oe6QDDCm0gWnFGcT8dx9l9oEGWo74BSVIZUegNRdJ74-NTmEK6P8lXefY-HuBvAMSg4Vfa5qOauzvf7YcmOMqBWZXYkSpjuryg_P6ze0R8Agppm3yTL5wk9NISvpt0nRPe7Mjjju',
      imgAlt: 'Small bird perched on branch against a hazy city skyline',
    },
    {
      id: 'climate_change',
      title: language === 'en' ? 'Climate Change' : 'వాతావరణ మార్పు',
      icon: Globe,
      iconColor: 'text-cyan-300',
      iconBg: 'bg-cyan-950/60 border-cyan-400/60',
      bullets:
        language === 'en'
          ? [
              'Intensified global atmospheric warming',
              'Frequency of extreme heatwaves & storms',
              'Melting glaciers and rising sea levels',
              'Disruption of seasonal monsoons & rainfall',
            ]
          : [
              'భూతాపం తీవ్రతరం కావడం',
              'తీవ్రమైన వడగాడ్పులు మరియు తుఫానులు',
              'హిమానీనదాలు కరిగి సముద్ర మట్టాలు పెరగడం',
              'రుతుపవనాల గమనం తారుమారు కావడం',
            ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS_3JKhrU04av1kWflvu5D1pfMojyVfmJMjPuTsMbp2l5gFJ2uSy58e_x78mw0-ZjhpTAYaVRffHAg2dsl82ljNZCSahj8HILwjhvw7CB088Gh8dgE_pWPp22l3-gAPG85DPmkjxN7FU295FiCFPS7Q3CiUP5jKc1uN94f-rKZqZPd5kKXgLAuQ52ElSn2gbrIfFpkxnAtU1Raj6F4s_OstY5cnLrWIZ8v2WAOPz-EQC1rjY5GPgBe',
      imgAlt: 'Artistic depiction of Earth half cracked by drought and half lush green',
    },
  ];

  return (
    <div className="bg-[#03120e] text-slate-100 font-sans antialiased selection:bg-[#10b981] selection:text-[#020d09]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden border-b border-[#0e3d2c]/40">
        {/* Background Atmospheric Imagery */}
        <div className="absolute inset-0 z-0">
          {!heroImageError ? (
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1WEc1eRpiKPncrkwzVgSJTkq-ADhLINOPuZxa2Xgw1D3dKwEW_q_JQTVF0KirGMP6xOLrQQhtoL_aUgPfgUl4SJ7JTwXTrzEC7ZCYcLhhPx8o6ujozA4CEC-5QFHdG7Qcd8T4jn5YaFI9IyFbdpApq2iNU4SZYx8jsh4dsy2B6dLQWKBKpM02p1JfMI95iTpNsRe0qW9hrJPH9CcGh4mhkMAM6MgRsuERBEbicSQViGvhtIGvqiNmfIRcM"
              alt="Industrial air pollution and factory smokestacks billowing smoke over a cityscape"
              referrerPolicy="no-referrer"
              onLoad={() => setHeroImageLoaded(true)}
              onError={() => setHeroImageError(true)}
              className={`w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12] transition-opacity duration-700 ${
                heroImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-[#021810] via-[#041710] to-[#03120e]" />
          )}

          {/* Gradients to fit AirCare aesthetic */}
          <div className="absolute inset-0 mask-hero-gradient pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03120e] via-[#03120e]/80 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-8 space-y-6 max-w-2xl">
            {/* Sub-category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#10b981]/40 text-[#10b981] text-xs font-bold tracking-widest uppercase">
              <svg
                className="w-3.5 h-3.5 stroke-[#10b981] fill-[#10b981]"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              </svg>
              <span>{language === 'en' ? 'Causes & Effects' : 'కారణాలు & ప్రభావాలు'}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {language === 'en' ? (
                <>
                  Why is Air Pollution <br />
                  <span className="text-[#10b981] hero-glow-text">Happening?</span>
                </>
              ) : (
                <>
                  వాయు కాలుష్యం ఎందుకు <br />
                  <span className="text-[#10b981] hero-glow-text">జరుగుతోంది?</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {language === 'en'
                ? 'Air pollution is caused by harmful substances in the air that make it unsafe to breathe. It affects our health, environment and future.'
                : 'గాలిలోని ప్రమాదకర పదార్ధాలు దానిని పీల్చడానికి సురక్షితం కాకుండా చేస్తాయి. ఇది మన ఆరోగ్యం, పర్యావరణం మరియు భవిష్యత్తుపై తీవ్ర ప్రభావం చూపుతుంది.'}
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectFeature('prevention')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-950/90 hover:bg-emerald-900 border border-[#10b981]/80 text-white font-medium text-sm transition-all shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer"
                type="button"
              >
                <span>{language === 'en' ? 'Learn How to Prevent' : 'నివారణ మార్గాలు తెలుసుకోండి'}</span>
                <ArrowRight className="w-4 h-4 text-[#10b981]" />
              </button>

              <button
                onClick={onNavigateHome}
                className="px-5 py-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                {language === 'en' ? '← Back to Home' : '← హోమ్‌కు వెళ్లండి'}
              </button>
            </div>
          </div>

          {/* Right Column: Decorative Handwriting Badge */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center text-center select-none pr-4">
            <div className="rotate-[-6deg] p-6 text-[#10b981] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              <p className="font-handwriting text-5xl leading-tight tracking-wide font-bold">
                Cleaner Air <br /> Healthier Life
              </p>
              {/* Stylized Flourish Leaf Underline */}
              <div className="flex items-center justify-center mt-1">
                <svg
                  className="w-24 h-6 text-[#10b981] fill-none stroke-current stroke-2"
                  viewBox="0 0 100 24"
                >
                  <path d="M5 12 Q 50 22 95 6" strokeLinecap="round" />
                  <path d="M75 14 Q 85 8 92 6 Q 84 15 80 18" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAJOR CAUSES OF AIR POLLUTION */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 bg-[#031510] relative" id="causes-and-effects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title & Subtitle */}
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-[#10b981]/50 flex items-center justify-center text-[#10b981] shadow-sm">
                <Factory className="w-6 h-6 stroke-current fill-[#10b981]/20" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === 'en' ? (
                  <>
                    Major <span className="text-[#10b981]">Causes</span> of Air Pollution
                  </>
                ) : (
                  <>
                    వాయు కాలుష్యానికి <span className="text-[#10b981]">ప్రధాన కారణాలు</span>
                  </>
                )}
              </h2>
            </div>
            <p className="mt-2 text-sm text-gray-300 font-normal">
              {language === 'en'
                ? 'Air pollution comes from many sources. Here are the main causes:'
                : 'వాయు కాలుష్యం అనేక మూలాల నుండి వస్తుంది. ఇవి ప్రధాన కారణాలు:'}
            </p>
          </div>

          {/* 5-Column Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {majorCauses.map((cause) => {
              const Icon = cause.icon;
              return (
                <article
                  key={cause.id}
                  onClick={() => setSelectedCauseId(cause.id === selectedCauseId ? null : cause.id)}
                  className="bg-[#052118]/80 rounded-2xl overflow-hidden border border-[#0e3d2c] card-hover-effect flex flex-col group cursor-pointer transition-all"
                >
                  <div className="relative h-44 overflow-hidden bg-black/40">
                    {renderImg(
                      cause.img,
                      cause.title,
                      'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052118] via-transparent to-black/20" />

                    {/* Circular Badge Icon */}
                    <div className="absolute bottom-2 left-3 w-10 h-10 rounded-full bg-emerald-950 border border-[#10b981] text-[#10b981] flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                        {cause.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed mb-3">
                        {cause.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#0e3d2c]/60 flex items-center justify-between text-[11px] text-[#10b981]">
                      <span className="font-semibold">{cause.fact}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. EFFECTS OF AIR POLLUTION */}
      {/* ======================================================== */}
      <section className="py-16 md:py-24 bg-[#020d09] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title & Subtitle */}
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-[#10b981]/50 flex items-center justify-center text-[#10b981] shadow-sm">
                <Activity className="w-6 h-6 stroke-current" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {language === 'en' ? (
                  <>
                    <span className="text-[#10b981]">Effects</span> of Air Pollution
                  </>
                ) : (
                  <>
                    వాయు కాలుష్యం వల్ల కలిగే <span className="text-[#10b981]">నష్టాలు & ప్రభావాలు</span>
                  </>
                )}
              </h2>
            </div>
            <p className="mt-2 text-sm text-gray-300 font-normal">
              {language === 'en'
                ? 'Air pollution harms living beings and the environment in many ways.'
                : 'వాయు కాలుష్యం జీవరాశులను మరియు పర్యావరణాన్ని అనేక విధాలుగా దెబ్బతీస్తుంది.'}
            </p>
          </div>

          {/* 4-Column Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {effectsList.map((effect) => {
              const Icon = effect.icon;
              return (
                <article
                  key={effect.id}
                  className="bg-[#052016]/70 rounded-2xl border border-[#0e3d2c]/80 glow-border card-hover-effect flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-5">
                    {/* Header with category icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-9 h-9 rounded-full ${effect.iconBg} flex items-center justify-center ${effect.iconColor}`}
                      >
                        <Icon className="w-5 h-5 stroke-current" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#10b981] transition-colors">
                        {effect.title}
                      </h3>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs text-gray-300 mb-6">
                      {effect.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Image Thumbnail */}
                  <div className="h-36 w-full relative overflow-hidden bg-black/50 border-t border-[#0e3d2c]/40">
                    {renderImg(
                      effect.img,
                      effect.imgAlt,
                      'w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500'
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052016] via-transparent to-transparent" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. LEARN MORE SECTION */}
      {/* ======================================================== */}
      <section className="py-16 md:py-20 bg-[#041912] border-t border-[#0e3d2c]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Visual: Hands Holding Green Seedling */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl border border-[#0e3d2c]/80 group">
              <div className="h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                {renderImg(
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZYBTZ_kvxtqI4V_yA5W9ML840Ek4TsWsscgHuqe8gvDvG6MYAtDY_8siJEqlAm_bkuZAq59shxSnejRUdgxV0Y1CRZ72xevMvnb3uGaQxKE-_kbnFzQNHf9i6DdDCsHMdKEMI8NOZVZfmQQrrTSTRmbPnicuUEGrG_N3S0tYcjMD4tpcbFI8pEJJCDLD0YsdF9RIcwCh_UQIzEs5UsMMdF9Mj8Rr-xXCStNrY_-ekep0qoR7QioJ2',
                  'Hands gently holding a fresh green seedling sprouting from rich dark soil',
                  'w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95'
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#041912]/20 to-[#041912]/80 pointer-events-none" />
            </div>

            {/* Right Content & Action Hub */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-[#10b981]/60 flex items-center justify-center text-[#10b981]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {language === 'en' ? 'Learn More' : 'మరింత తెలుసుకోండి'}
                  </h2>
                </div>
                <p className="text-sm text-gray-300 max-w-xl">
                  {language === 'en'
                    ? 'Knowledge creates change. Explore our detailed resources and take the next step towards a cleaner, greener future.'
                    : 'జ్ఞానం మార్పును సృష్టిస్తుంది. మా వివరమైన వనరులను పరిశీలించి, స్వచ్ఛమైన మరియు పచ్చని రేపటి వైపు ముందడుగు వేయండి.'}
                </p>
              </div>

              {/* 3 Quick Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Action Card 1: Prevention */}
                <button
                  onClick={() => onSelectFeature('prevention')}
                  className="bg-[#06241a]/90 hover:bg-[#093325] border border-[#0e3d2c] hover:border-[#10b981]/70 rounded-xl p-4 transition-all card-hover-effect flex flex-col justify-between group text-left cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {language === 'en' ? 'Prevention Methods' : 'నివారణ పద్ధతులు'}
                    </span>
                    <span className="text-xs text-[#10b981] font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-1">
                      {language === 'en' ? 'Explore →' : 'చూడండి →'}
                    </span>
                  </div>
                </button>

                {/* Action Card 2: Campaigns */}
                <button
                  onClick={() => onSelectFeature('campaigns')}
                  className="bg-[#06241a]/90 hover:bg-[#093325] border border-[#0e3d2c] hover:border-[#10b981]/70 rounded-xl p-4 transition-all card-hover-effect flex flex-col justify-between group text-left cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {language === 'en' ? 'Awareness Campaigns' : 'అవగాహన ప్రచారాలు'}
                    </span>
                    <span className="text-xs text-[#10b981] font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-1">
                      {language === 'en' ? 'View →' : 'కార్యక్రమాలు →'}
                    </span>
                  </div>
                </button>

                {/* Action Card 3: Community */}
                <button
                  onClick={() => onSelectFeature('community')}
                  className="bg-[#06241a]/90 hover:bg-[#093325] border border-[#0e3d2c] hover:border-[#10b981]/70 rounded-xl p-4 transition-all card-hover-effect flex flex-col justify-between group text-left cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {language === 'en' ? 'Student Community' : 'విద్యార్థి సమాజం'}
                    </span>
                    <span className="text-xs text-[#10b981] font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-1">
                      {language === 'en' ? 'Join →' : 'చేరండి →'}
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. MOTTO SLOGAN BANNER */}
      {/* ======================================================== */}
      <section className="py-10 bg-[#020b07] border-y border-[#0e3d2c]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6">
          {/* Neon Outline Leaf Left */}
          <svg
            className="w-8 h-8 text-[#10b981] stroke-current fill-none stroke-1.5 hidden sm:block opacity-75"
            viewBox="0 0 24 24"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>

          {/* Center Motto Text */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-bold text-white tracking-wide">
            {language === 'en' ? (
              <>
                <span className="text-emerald-400">Less Pollution</span>
                <span className="text-[#10b981]">→</span>
                <span className="text-emerald-300">More Green</span>
                <span className="text-[#10b981]">→</span>
                <span className="text-emerald-100">A Healthier Tomorrow</span>
              </>
            ) : (
              <>
                <span className="text-emerald-400">తక్కువ కాలుష్యం</span>
                <span className="text-[#10b981]">→</span>
                <span className="text-emerald-300">ఎక్కువ పచ్చదనం</span>
                <span className="text-[#10b981]">→</span>
                <span className="text-emerald-100">ఆరోగ్యకరమైన రేపు</span>
              </>
            )}
          </div>

          {/* Neon Outline Leaf Right */}
          <svg
            className="w-8 h-8 text-[#10b981] stroke-current fill-none stroke-1.5 hidden sm:block opacity-75 rotate-180"
            viewBox="0 0 24 24"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>
      </section>
    </div>
  );
};
