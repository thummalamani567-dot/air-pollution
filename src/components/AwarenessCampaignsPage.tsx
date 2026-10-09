import React, { useState } from 'react';
import {
  Leaf,
  Megaphone,
  CalendarDays,
  MapPin,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TreePine,
  Users,
  GraduationCap,
  Image as ImageIcon,
  Share2,
  Sprout,
  UserPlus,
  X,
} from 'lucide-react';
import { CampaignRegisterModal } from './CampaignRegisterModal';

interface AwarenessCampaignsPageProps {
  language: 'en' | 'te';
  onNavigateHome: () => void;
  onNavigatePrevention: () => void;
  onOpenPledge: () => void;
}

export const AwarenessCampaignsPage: React.FC<AwarenessCampaignsPageProps> = ({
  language,
  onNavigateHome,
  onNavigatePrevention,
  onOpenPledge,
}) => {
  const [selectedCampaign, setSelectedCampaign] = useState<{
    title: string;
    date: string;
    location: string;
  } | null>(null);

  const [activeGalleryPhoto, setActiveGalleryPhoto] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  const [calendarMonth, setCalendarMonth] = useState<'nov' | 'dec'>('nov');

  const scrollToCampaigns = () => {
    const el = document.getElementById('campaigns');
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

  const campaigns = [
    {
      id: 'campus_drive',
      title: language === 'en' ? 'Green Campus Drive' : 'గ్రీన్ క్యాంపస్ డ్రైవ్',
      dateDay: '15',
      dateMonth: 'Nov',
      category: language === 'en' ? 'Tree Plantation' : 'మొక్కలు నాటడం',
      location: language === 'en' ? 'College Campus, Main Ground' : 'కళాశాల ప్రాంగణం, మెయిన్ గ్రౌండ్',
      time: '09:00 AM – 12:00 PM',
      desc:
        language === 'en'
          ? "Let's plant trees and create a greener, cleaner campus together."
          : 'కలిసికట్టుగా మొక్కలు నాటి స్వచ్ఛమైన, పచ్చని ప్రాంగణాన్ని నిర్మిద్దాం.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI2Sy4UqD-MIK9yYp1-Iuobve_9LEoO1M1oWO1pe93S8D-5hhaV-87Oj5bPNLZKJt2WMrz1yEO4E1F-DN5CMZfh5JMBITM5dmGRTJsE7i5tYA_vAtvtjGOV-z_hoJRiGkDw1c-auBlNjoIBbfxpg1rHLoBg-qCvAJR94dgzrgJm8kNpgByKXEUus7ewxxwYBEOXCcedqw54VO3GKN1yiWPCRsMaZB6qVF8CFiuF9cL1ZyNXU2FedVA',
    },
    {
      id: 'clean_air_rally',
      title: language === 'en' ? 'Clean Air Awareness Rally' : 'స్వచ్ఛ గాలి అవగాహన ర్యాలీ',
      dateDay: '22',
      dateMonth: 'Nov',
      category: language === 'en' ? 'Rally' : 'ర్యాలీ',
      location: language === 'en' ? 'City Center, Hyderabad' : 'సిటీ సెంటర్, హైదరాబాద్',
      time: '08:00 AM – 11:00 AM',
      desc:
        language === 'en'
          ? 'Walk for clean air, raise your voice for a healthier tomorrow.'
          : 'స్వచ్ఛమైన గాలి కోసం నడవండి, ఆరోగ్యకరమైన రేపటి కోసం మీ గళాన్ని వినిపించండి.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuyODr4oJMc2wW31Zp9MgifIKI5M_v6L-dUYGG9gk_j8YAwSmnLEaYAeOLpU3sDQQlgJIT65Iji-dbU-6yKOLIn8jAmyz8Ygbo_3ea2_R6xyRgZ81ynzB9xEoO91BbRaonA_Ldyw2yhPq1Piq6rk9h-N-3kRDOkU7QLTRnMy7KlEvn7wC9YdF85yG7nae3rqm3lD04OBs4SSDJZoxCUAfHkqAta62KXP8MJsHBdHN4w0DNi-noTE4L',
    },
    {
      id: 'poster_contest',
      title: language === 'en' ? 'Poster & Slogan Contest' : 'పోస్టర్ & నినాదాల పోటీ',
      dateDay: '05',
      dateMonth: 'Dec',
      category: language === 'en' ? 'Poster Making' : 'పోస్టర్ తయారీ',
      location: language === 'en' ? 'College Seminar Hall' : 'కళాశాల సెమినార్ హాల్',
      time: '10:00 AM – 01:00 PM',
      desc:
        language === 'en'
          ? 'Express your ideas and creativity for a cleaner planet.'
          : 'స్వచ్ఛమైన భూమి కోసం మీ సృజనాత్మక ఆలోచనలను ఆవిష్కరించండి.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZbW4ur9mEJRHvQLAKxbGOQkGCQfCv0TGi6dJtdDtQ0nrfsyorQw-IRxwIpPKyEfBU3f9T1zHjLvRHIjY8ngHilswBe06UHlA-xG3n9FPYPHqXnhx0teYCOGVNNxLUd8GM7BrsefyCA6UqnD2qtD0qNL2oMbWvI6or6DbnhJIt7FBib54pKuSfTwRCxCL-wcdHvc8jeurIiCV_tlGHPhrtqHbspdg8Blt7OL8Pv4WlhMZYnFgquKKK',
    },
    {
      id: 'awareness_walk',
      title: language === 'en' ? 'Awareness Walk' : 'పర్యావరణ అవగాహన నడక',
      dateDay: '12',
      dateMonth: 'Dec',
      category: language === 'en' ? 'Clean Air' : 'స్వచ్ఛ గాలి',
      location: language === 'en' ? 'University Road' : 'యూనివర్సిటీ రోడ్',
      time: '07:00 AM – 09:00 AM',
      desc:
        language === 'en'
          ? 'Spread awareness, inspire change and walk for a better future.'
          : 'అవగాహన కల్పించండి, మార్పును ప్రేరేపించండి మరియు మంచి భవిష్యత్తు కోసం నడవండి.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLYnf_ICKlSnE0dFvXA9HrEEEAbNH4wimYw-aiH1f6--24AhroAYUoLcpGcgArbaNX9T3o2IFzC1Apn7ASPfS6jZOGjS30nrA4cdfKK8JzSchTMWXyeg3Mbv3kioPB1hcgpqMTPqgcE9Mwcmjq6IeyTKJ3_YWCtJ5iJdmNb1MbAZzmQq8JiiK80TYPC8tfna51HiLGfoOvZiPQ34QnIzncx0cublwlTH3ofV-FhW48S2GGzSCmD23V',
    },
  ];

  const galleryPhotos = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3VQdi37Y4einKLe21knsLROogpNb02kPLsoKGAgWKdy3-my7tZsanEwx5nsikeI6MCWIGab7deAVKk1PCe1QB0Nagfgr7aDlAP2DM_9G-omNXEuixcdLzT72PmNhuA949r8aqfSHuEhp_yRy4gVJBig_CyAS7_E0cTXfiHrEB0ORx3-dzBtVmK2hj9n4gVtqfaxLEmw9Rok77T7IF1nnG9ELFKtUMYxvwcz9t-wTM8_kou0tazOgy',
      caption: 'Go Green Plantation Drive',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL-LqUKduiyFUFa5W1iB6EdJ1Suji1hjiq-jRYozhLzZQxBsudaHPeL5ubDJQoyv0K94Yz2SQ7bN6wW85zLi_6eEsyhJeuNtLxGSPKQrgdKM0Eci8ACUD3Eiba3_-f3G0tN3zJfJTeiYA_vohk1EClkl6ilb1mKMi-qPudXRIeWQ1K6CcFiXDZpMjf-Hd2oTg8htQlClaKTslDLHliYY9BMYmZW9SFLelYLV82sAuC2RJlNhklq_UK',
      caption: 'Clean Air March',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-zKEsqeyCGcbNpSxtGxJXf-rwvqOWpu5dHZ8U1WLsxswJVgKiJ2VyPCAnFXVAnFpSO30_jqLG0Fli8QjcI7WVIwmlTDYOnOcKU9fVKC9DT6_AyZE8OiLEBlbSXuwwXGFm2367TWU-FY6UgPPE3pRPrQjvkK6aQgMMxXw2kjrTeZeJlDPv8aCYBXmoPegyr6ytAGe0IxeMWhBc03s85x9dEXcnz3PWqnfcXbb5AWj5LsKKCRRz4Av2',
      caption: 'Campus Rally Presentation',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOW8S-FJsvRnNqaPmBqPWt_x5Aqk6-kSITVxQECSwZQnr61O1kwWq08kZP3-5ZHURZ0AKNDC0a5v88H8QUYPaaROvJ4k8fvmAbFLYUFv_vDTWCjwpNavQNiR7nR6eQPPWUruAj-J-zxZAlola6eVS4B4GJqfQG247xCEnQiGXy00U_GchRFfOk6_57V9UfQYj1hkZpRcl8pSZJ4InWmgb0dGa9o4qlVNNJc3oGkukatCDuX0VGCWvg',
      caption: 'Student Workshop & Seminar',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw3-QmeUGl3rl2XfizqOKA5gElvoAVPfglFbKtq0buUHqNAE51F7ZEediaJDrKv3mrVC8pMqV5xVkTWnSI4dCN8WPoxvPHscL2YdivyrCadV9piyP9ShBLDjrpmXFbUVKgoUq-nbJAKLeJixxq9qXKwqAWO-rZtdxqfIuNBFw3--eUPwl0OybXxwPSLtM5Sxa8QEoAtkBYmoIb8HOfUqnpFJFwoDUTWFur1oLC2Zh5TAfH33x-yy1q',
      caption: 'Eco Wall Art & 3R Mural',
    },
  ];

  return (
    <div className="bg-[#051109] text-white font-sans antialiased selection:bg-[#00e599] selection:text-[#051109] overflow-x-hidden min-h-screen">
      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative hero-glow pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1a3e2a]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy & CTA */}
            <div className="lg:col-span-5 space-y-6">
              {/* Pill tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1f14] border border-[#1a3e2a] text-[#00e599] text-xs font-semibold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-[#00e599]" />
                <span>{language === 'en' ? 'Awareness Campaigns' : 'అవగాహన ప్రచారాలు'}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                {language === 'en' ? (
                  <>
                    Small Actions.
                    <br />
                    <span className="text-[#00e599] bg-gradient-to-r from-[#00e599] via-emerald-300 to-green-400 bg-clip-text text-transparent">
                      Big Impact.
                    </span>
                  </>
                ) : (
                  <>
                    చిన్న చర్యలు.
                    <br />
                    <span className="text-[#00e599] bg-gradient-to-r from-[#00e599] via-emerald-300 to-green-400 bg-clip-text text-transparent">
                      గొప్ప ప్రభావం.
                    </span>
                  </>
                )}
              </h1>

              {/* Subtext */}
              <p className="text-[#8ba295] text-base sm:text-lg leading-relaxed max-w-lg">
                {language === 'en'
                  ? 'Join our awareness campaigns and be a part of the change. Together we can reduce air pollution and build a healthier, greener future.'
                  : 'మా అవగాహన ప్రచారాలలో చేరి మార్పులో భాగస్వాములు కండి. కలిసికట్టుగా వాయు కాలుష్యాన్ని తగ్గించి ఆరోగ్యకరమైన పచ్చని భవితవ్యాన్ని నిర్మిద్దాం.'}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToCampaigns}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00e599] text-[#051109] font-bold text-sm hover:bg-[#00ffaa] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  type="button"
                >
                  <span>{language === 'en' ? 'Join a Campaign' : 'కార్యక్రమంలో చేరండి'}</span>
                  <ArrowRight className="w-4 h-4 text-[#051109]" />
                </button>

                <button
                  onClick={onNavigateHome}
                  className="px-5 py-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  {language === 'en' ? '← Back to Home' : '← హోమ్‌కు వెళ్లండి'}
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual with Wooden Sign & Badge */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#1a3e2a] shadow-2xl bg-[#0b1f14] group">
                {/* Volunteers planting photo */}
                {renderImg(
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAG5-QaegGUzux3t3VUawroViVGhfcg2zo3HEedjzyVNqP7K1ib7Cyhe8WInt4eseyXGtRev6qnymPOBU3cBukUG5Qtw_T6lmip1G-jvYOyapd7aKB2bh7V3FT-vf1hVtwYWfnX8CWwZ6WRo-XfgmULoVez9FQwUrK6HPegLmcgGQJrI0XEZaqarn2yYdx29kafAzxFgsQqmAeTjwMJIbDR0VkembuWd4OpY9cH7ZKQHEG2DyBCtX9T',
                  'Volunteers planting saplings together',
                  'w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700'
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#051109]/80 via-transparent to-black/30 pointer-events-none" />

                {/* Wooden Signboard Graphic Element Top-Right */}
                <div className="absolute top-6 right-6 bg-[#f3ecd7] text-[#3d2b1f] border-4 border-[#b99b7b] rounded-lg p-3.5 shadow-2xl text-center transform rotate-2 max-w-[170px] backdrop-blur-sm pointer-events-none select-none">
                  <p className="font-extrabold text-xs sm:text-sm tracking-widest text-[#2f6f4e] uppercase leading-tight font-sans">
                    CLEAN AIR
                    <br />
                    GREEN FUTURE
                  </p>
                  <div className="mt-1 flex justify-center text-emerald-600">
                    <Sprout className="w-4 h-4 fill-current" />
                  </div>
                </div>

                {/* Handwriting Slogan Bottom-Right */}
                <div className="absolute bottom-6 right-8 text-right drop-shadow-md pointer-events-none select-none">
                  <span className="font-handwriting text-2xl sm:text-3xl text-[#00e599] tracking-wide block leading-none">
                    Clean Air
                    <br />
                    Healthy Future
                  </span>
                  <div className="flex justify-end pr-2 pt-1 text-[#00e599]">
                    <Leaf className="w-4 h-4 rotate-45 opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. UPCOMING CAMPAIGNS SECTION */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-[#1a3e2a]/40" id="campaigns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#00e599]/20 border border-[#00e599]/40 flex items-center justify-center text-[#00e599]">
                  <Megaphone className="w-4 h-4" />
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {language === 'en' ? (
                    <>
                      Upcoming <span className="text-[#00e599]">Campaigns</span>
                    </>
                  ) : (
                    <>
                      రాబోయే <span className="text-[#00e599]">కార్యక్రమాలు</span>
                    </>
                  )}
                </h2>
              </div>
              <p className="text-[#8ba295] text-sm sm:text-base">
                {language === 'en'
                  ? 'Be a part of our upcoming events and make a difference.'
                  : 'మా రాబోయే కార్యక్రమాలలో భాగమై మీ వంతు కృషి చేయండి.'}
              </p>
            </div>

            <button
              onClick={onOpenPledge}
              className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-full border border-[#00e599]/40 text-[#00e599] text-xs font-bold hover:bg-[#00e599] hover:text-[#051109] transition-all cursor-pointer"
            >
              <span>{language === 'en' ? 'Take Citizen Pledge' : 'ప్రతిజ్ఞ చేయండి'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaigns.map((camp) => (
              <article
                key={camp.id}
                className="bg-[#0b1f14] rounded-2xl border border-[#1a3e2a] overflow-hidden flex flex-col hover:border-[#00e599]/40 hover:bg-[#0f271a] transition-all duration-300 group"
              >
                <div className="relative h-44 overflow-hidden">
                  {renderImg(
                    camp.img,
                    camp.title,
                    'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f14] via-transparent to-transparent pointer-events-none" />

                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 bg-[#030b06]/90 border border-[#00e599]/50 rounded-xl px-2.5 py-1.5 text-center shadow-lg backdrop-blur-sm">
                    <span className="block text-base font-extrabold text-[#00e599] leading-none tabular-nums">
                      {camp.dateDay}
                    </span>
                    <span className="block text-[10px] font-semibold tracking-wider uppercase text-zinc-300">
                      {camp.dateMonth}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Tag */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#051109] border border-[#1a3e2a] text-[#00e599] text-[11px] font-semibold mb-3">
                      {camp.category}
                    </span>

                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#00e599] transition-colors">
                      {camp.title}
                    </h3>

                    {/* Details */}
                    <div className="space-y-1.5 text-xs text-[#8ba295] mb-3.5">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#00e599] shrink-0" />
                        <span className="truncate">{camp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#00e599] shrink-0" />
                        <span>{camp.time}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {camp.desc}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="pt-5">
                    <button
                      onClick={() =>
                        setSelectedCampaign({
                          title: camp.title,
                          date: `${camp.dateDay} ${camp.dateMonth} 2026`,
                          location: camp.location,
                        })
                      }
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00e599] text-[#051109] font-bold text-xs hover:bg-[#00ffaa] transition-colors shadow-sm cursor-pointer"
                    >
                      <span>{language === 'en' ? 'Register Now' : 'ఇప్పుడే నమోదు చేసుకోండి'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CALENDAR AND IMPACT SECTION */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-[#1a3e2a]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Calendar & Upcoming Dates (7 cols) */}
            <div className="lg:col-span-7">
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#00e599]/20 border border-[#00e599]/40 flex items-center justify-center text-[#00e599]">
                  <CalendarDays className="w-4 h-4" />
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  {language === 'en' ? (
                    <>
                      Campaign <span className="text-[#00e599]">Calendar</span>
                    </>
                  ) : (
                    <>
                      కార్యక్రమాల <span className="text-[#00e599]">క్యాలెండర్</span>
                    </>
                  )}
                </h2>
              </div>

              <p className="text-[#8ba295] text-sm mb-6">
                {language === 'en'
                  ? 'Check out our events and plan your participation.'
                  : 'మా కార్యక్రమాలను పరిశీలించి మీ ప్రణాళికను సిద్ధం చేసుకోండి.'}
              </p>

              {/* Calendar Container Card */}
              <div className="bg-[#0b1f14] rounded-2xl border border-[#1a3e2a] p-5 sm:p-6 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  {/* Left half: Date Matrix */}
                  <div className="sm:col-span-7">
                    {/* Month title bar */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setCalendarMonth('nov')}
                        className={`text-xs p-1 cursor-pointer transition-colors ${
                          calendarMonth === 'nov' ? 'text-gray-600' : 'text-[#8ba295] hover:text-[#00e599]'
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-bold text-white tracking-wide">
                        {calendarMonth === 'nov' ? 'November 2026' : 'December 2026'}
                      </span>
                      <button
                        onClick={() => setCalendarMonth('dec')}
                        className={`text-xs p-1 cursor-pointer transition-colors ${
                          calendarMonth === 'dec' ? 'text-gray-600' : 'text-[#8ba295] hover:text-[#00e599]'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Days grid header */}
                    <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-[#8ba295] mb-2">
                      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                    </div>

                    {/* Days grid content */}
                    {calendarMonth === 'nov' ? (
                      <div className="grid grid-cols-7 text-center text-xs gap-y-2 text-zinc-300 font-medium">
                        <span className="p-1.5 opacity-30">1</span>
                        <span className="p-1.5 opacity-30">2</span>
                        <span className="p-1.5 opacity-30">3</span>
                        <span className="p-1.5">4</span>
                        <span className="p-1.5">5</span>
                        <span className="p-1.5">6</span>
                        <span className="p-1.5">7</span>
                        <span className="p-1.5">8</span>
                        <span className="p-1.5">9</span>
                        <span className="p-1.5">10</span>
                        <span className="p-1.5">11</span>
                        <span className="p-1.5">12</span>
                        <span className="p-1.5">13</span>
                        <span className="p-1.5">14</span>
                        {/* Highlighted 15 Nov */}
                        <span className="w-7 h-7 mx-auto flex items-center justify-center rounded-full bg-[#00e599] text-[#051109] font-extrabold shadow-md cursor-pointer">
                          15
                        </span>
                        <span className="p-1.5">16</span>
                        <span className="p-1.5">17</span>
                        <span className="p-1.5">18</span>
                        <span className="p-1.5">19</span>
                        <span className="p-1.5">20</span>
                        <span className="p-1.5">21</span>
                        {/* Highlighted 22 Nov */}
                        <span className="w-7 h-7 mx-auto flex items-center justify-center rounded-full bg-[#00e599] text-[#051109] font-extrabold shadow-md cursor-pointer">
                          22
                        </span>
                        <span className="p-1.5">23</span>
                        <span className="p-1.5">24</span>
                        <span className="p-1.5">25</span>
                        <span className="p-1.5">26</span>
                        <span className="p-1.5">27</span>
                        <span className="p-1.5">28</span>
                        <span className="p-1.5">29</span>
                        <span className="p-1.5">30</span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-7 text-center text-xs gap-y-2 text-zinc-300 font-medium">
                        <span className="p-1.5 opacity-30">29</span>
                        <span className="p-1.5 opacity-30">30</span>
                        <span className="p-1.5">1</span>
                        <span className="p-1.5">2</span>
                        <span className="p-1.5">3</span>
                        <span className="p-1.5">4</span>
                        {/* Highlighted 05 Dec */}
                        <span className="w-7 h-7 mx-auto flex items-center justify-center rounded-full bg-[#00e599] text-[#051109] font-extrabold shadow-md cursor-pointer">
                          5
                        </span>
                        <span className="p-1.5">6</span>
                        <span className="p-1.5">7</span>
                        <span className="p-1.5">8</span>
                        <span className="p-1.5">9</span>
                        <span className="p-1.5">10</span>
                        <span className="p-1.5">11</span>
                        {/* Highlighted 12 Dec */}
                        <span className="w-7 h-7 mx-auto flex items-center justify-center rounded-full bg-[#00e599] text-[#051109] font-extrabold shadow-md cursor-pointer">
                          12
                        </span>
                        <span className="p-1.5">13</span>
                        <span className="p-1.5">14</span>
                        <span className="p-1.5">15</span>
                        <span className="p-1.5">16</span>
                        <span className="p-1.5">17</span>
                        <span className="p-1.5">18</span>
                        <span className="p-1.5">19</span>
                        <span className="p-1.5">20</span>
                        <span className="p-1.5">21</span>
                        <span className="p-1.5">22</span>
                        <span className="p-1.5">23</span>
                        <span className="p-1.5">24</span>
                        <span className="p-1.5">25</span>
                        <span className="p-1.5">26</span>
                        <span className="p-1.5">27</span>
                        <span className="p-1.5">28</span>
                        <span className="p-1.5">29</span>
                        <span className="p-1.5">30</span>
                        <span className="p-1.5">31</span>
                      </div>
                    )}
                  </div>

                  {/* Right half: Agenda listing */}
                  <div className="sm:col-span-5 border-t sm:border-t-0 sm:border-l border-[#1a3e2a]/60 sm:pl-5 flex flex-col justify-between">
                    <div className="space-y-3.5">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-xs text-[#00e599] font-bold px-2 py-0.5 rounded bg-[#00e599]/10 border border-[#00e599]/30 shrink-0">
                          15 Nov
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Green Campus Drive</p>
                          <p className="text-[11px] text-[#8ba295]">Tree Plantation</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-xs text-[#00e599] font-bold px-2 py-0.5 rounded bg-[#00e599]/10 border border-[#00e599]/30 shrink-0">
                          22 Nov
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Clean Air Rally</p>
                          <p className="text-[11px] text-[#8ba295]">City Center</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-xs text-[#00e599] font-bold px-2 py-0.5 rounded bg-[#00e599]/10 border border-[#00e599]/30 shrink-0">
                          05 Dec
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Poster Contest</p>
                          <p className="text-[11px] text-[#8ba295]">Seminar Hall</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-xs text-[#00e599] font-bold px-2 py-0.5 rounded bg-[#00e599]/10 border border-[#00e599]/30 shrink-0">
                          12 Dec
                        </span>
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Awareness Walk</p>
                          <p className="text-[11px] text-[#8ba295]">University Road</p>
                        </div>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="pt-4 mt-3 border-t border-[#1a3e2a]/40 flex items-center gap-3 text-[10px] text-[#8ba295]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#00e599] inline-block" /> Upcoming
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Ongoing
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-zinc-500 inline-block" /> Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Campaign Impact Metrics & Quote (5 cols) */}
            <div className="lg:col-span-5 bg-[#0b1f14] rounded-2xl border border-[#1a3e2a] p-6 shadow-xl relative">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-7 h-7 rounded-lg bg-[#00e599]/20 border border-[#00e599]/40 flex items-center justify-center text-[#00e599]">
                  <Leaf className="w-4 h-4" />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {language === 'en' ? 'Campaign Impact' : 'కార్యక్రమాల ప్రభావం'}
                </h3>
              </div>

              {/* 4 Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-[#1a3e2a]/60">
                {/* Metric 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#051109] border border-[#1a3e2a] flex items-center justify-center text-[#00e599] text-base shrink-0">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white leading-none tabular-nums">2,500+</div>
                    <div className="text-[11px] text-[#8ba295] font-medium mt-1">
                      {language === 'en' ? 'Trees Planted' : 'నాటిన మొక్కలు'}
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#051109] border border-[#1a3e2a] flex items-center justify-center text-[#00e599] text-base shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white leading-none tabular-nums">5,000+</div>
                    <div className="text-[11px] text-[#8ba295] font-medium mt-1">
                      {language === 'en' ? 'Students Participated' : 'పాల్గొన్న విద్యార్థులు'}
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#051109] border border-[#1a3e2a] flex items-center justify-center text-[#00e599] text-base shrink-0">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white leading-none tabular-nums">120+</div>
                    <div className="text-[11px] text-[#8ba295] font-medium mt-1">
                      {language === 'en' ? 'Awareness Events' : 'అవగాహన సదస్సులు'}
                    </div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#051109] border border-[#1a3e2a] flex items-center justify-center text-[#00e599] text-base shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white leading-none tabular-nums">15+</div>
                    <div className="text-[11px] text-[#8ba295] font-medium mt-1">
                      {language === 'en' ? 'Colleges Involved' : 'కళాశాలల భాగస్వామ్యం'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Element */}
              <div className="pt-6 relative">
                <div className="flex items-start gap-3">
                  <span className="text-3xl text-[#00e599] font-serif leading-none select-none">“</span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-200 italic leading-relaxed">
                      {language === 'en'
                        ? 'Clean air is not a privilege, it’s a right. Let’s protect it together.'
                        : 'స్వచ్ఛమైన గాలి ఒక ప్రత్యేక హక్కు కాదు, అది ప్రతి ఒక్కరి ప్రాథమిక హక్కు. కలిసికట్టుగా దీనిని కాపాడుకుందాం.'}
                    </p>
                    <p className="text-xs text-[#00e599] font-bold mt-2 tracking-wide">– AirCare Team</p>
                  </div>
                  <span className="text-[#00e599]/40 self-end">
                    <Leaf className="w-6 h-6" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. VOLUNTEER BANNER SECTION */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 bg-[#0b1f14]/40 border-b border-[#1a3e2a]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1f14] border border-[#1a3e2a] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Banner Image */}
              <div className="lg:col-span-3 rounded-2xl overflow-hidden h-44 sm:h-48 border border-[#1a3e2a]">
                {renderImg(
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3v-bTAAQHMBVUbaS3muLtPUguVgpK51b80sN-cYSbkNyR-E0CuHp_HvHGRjaN2THO28OMUh3o4N_cMP7QYOAOMPxQe6tze71z34bsjpVlWh9GyPcIYeFXrC0Af67LePyY3SyVnRUiGMMei-XpERyQ--3rqvS66m7yal5E9VtBTG4YJFudPoDFeZYsjxlZek_kCgPkw7w3L_L-eLR7bfOKQ-smwxayrjt0lH38aaHzZ-W7L4tPbd2V',
                  'Hands holding young plant seedling',
                  'w-full h-full object-cover'
                )}
              </div>

              {/* Middle Text & Register CTA */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#00e599]/20 border border-[#00e599]/40 flex items-center justify-center text-[#00e599]">
                    <Users className="w-4 h-4" />
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {language === 'en' ? 'Join Our Next Campaign' : 'మా తదుపరి కార్యక్రమంలో చేరండి'}
                  </h3>
                </div>

                <p className="text-[#8ba295] text-sm sm:text-base leading-relaxed">
                  {language === 'en'
                    ? 'Be a volunteer, spread awareness, and help create a cleaner, healthier environment for future generations.'
                    : 'వాలంటీర్‌గా చేరండి, అవగాహనను వ్యాప్తి చేయండి మరియు రేపటి తరాల కోసం స్వచ్ఛమైన వాతావరణాన్ని సృష్టించడంలో సహాయపడండి.'}
                </p>

                <div>
                  <button
                    onClick={() =>
                      setSelectedCampaign({
                        title: language === 'en' ? 'AirCare Volunteer Corps' : 'ఎయిర్‌కేర్ వాలంటీర్ బృందం',
                        date: 'Upcoming Season',
                        location: 'Pan-City Campus Network',
                      })
                    }
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00e599] text-[#051109] font-bold text-xs sm:text-sm hover:bg-[#00ffaa] transition-all transform hover:-translate-y-0.5 shadow-md shadow-emerald-500/20 cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Register as Volunteer' : 'వాలంటీర్‌గా నమోదు చేసుకోండి'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right side 3 Icon Columns */}
              <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#1a3e2a]/70 pt-6 lg:pt-0 lg:pl-6 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#051109] border border-[#1a3e2a] flex items-center justify-center text-[#00e599] mb-2 hover:border-[#00e599]/60 transition-colors">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-300">
                    {language === 'en' ? 'Volunteer' : 'వాలంటీర్'}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#051109] border border-[#1a3e2a] flex items-center justify-center text-[#00e599] mb-2 hover:border-[#00e599]/60 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-300">
                    {language === 'en' ? 'Share' : 'పంచుకోండి'}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#051109] border border-[#1a3e2a] flex items-center justify-center text-[#00e599] mb-2 hover:border-[#00e599]/60 transition-colors">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-300 leading-tight">
                    {language === 'en' ? 'Impact' : 'ప్రభావం'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. GALLERY SECTION */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 border-b border-[#1a3e2a]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-lg bg-[#00e599]/20 border border-[#00e599]/40 flex items-center justify-center text-[#00e599]">
                  <ImageIcon className="w-4 h-4" />
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {language === 'en' ? 'Gallery' : 'ఫోటో గ్యాలరీ'}
                </h2>
              </div>
              <p className="text-[#8ba295] text-sm sm:text-base">
                {language === 'en'
                  ? 'Moments from our campaigns and environmental drives.'
                  : 'మా ప్రచారాలు మరియు కార్యక్రమాల నుంచి కొన్ని విశేషాలు.'}
              </p>
            </div>

            <button
              onClick={() =>
                setActiveGalleryPhoto({
                  src: galleryPhotos[0].src,
                  caption: galleryPhotos[0].caption,
                })
              }
              className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2 rounded-full border border-[#00e599]/40 text-[#00e599] text-xs font-bold hover:bg-[#00e599] hover:text-[#051109] transition-all cursor-pointer"
            >
              <span>{language === 'en' ? 'View Photo Showcase' : 'ఫోటోలు చూడండి'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 5 Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryPhoto({ src: photo.src, caption: photo.caption })}
                className={`group relative rounded-2xl overflow-hidden border border-[#1a3e2a] h-44 md:h-48 bg-[#0b1f14] shadow-md cursor-pointer ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                {renderImg(
                  photo.src,
                  photo.caption,
                  'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                )}
                <div className="absolute inset-0 bg-[#051109]/20 group-hover:bg-transparent transition-colors pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-center pointer-events-none">
                  <span className="inline-block px-2 py-0.5 rounded bg-[#030b06]/85 text-[10px] text-[#00e599] font-bold">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery */}
      {activeGalleryPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveGalleryPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0b1f14] border border-[#1a3e2a] rounded-2xl overflow-hidden p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveGalleryPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#00e599] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeGalleryPhoto.src}
              alt={activeGalleryPhoto.caption}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl mb-3"
            />
            <p className="text-center font-bold text-sm text-[#00e599]">
              {activeGalleryPhoto.caption}
            </p>
          </div>
        </div>
      )}

      {/* Campaign Registration Modal */}
      <CampaignRegisterModal
        isOpen={!!selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        campaignTitle={selectedCampaign?.title || ''}
        campaignDate={selectedCampaign?.date || ''}
        campaignLocation={selectedCampaign?.location || ''}
        language={language}
      />
    </div>
  );
};
