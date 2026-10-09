import React, { useState } from 'react';
import {
  Leaf,
  Camera,
  Lightbulb,
  Trophy,
  Users,
  Pen,
  Heart,
  MessageCircle,
  Share2,
  ChevronRight,
  User,
  CalendarCheck,
  Award,
  FileText,
  Globe2,
  ArrowRight,
  Sprout,
  X,
  CheckCircle2,
} from 'lucide-react';
import { CreatePostModal } from './CreatePostModal';

interface PostItem {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  hasLiked?: boolean;
  image?: string;
  isBadgeCard?: boolean;
}

interface StudentCommunityPageProps {
  language: 'en' | 'te';
  onNavigateHome: () => void;
  onOpenPledge: () => void;
}

export const StudentCommunityPage: React.FC<StudentCommunityPageProps> = ({
  language,
  onNavigateHome,
  onOpenPledge,
}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<{ src: string; title: string } | null>(null);
  const [copiedShareId, setCopiedShareId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'ideas' | 'challenges'>('all');

  // Interactive Feed state
  const [posts, setPosts] = useState<PostItem[]>([
    {
      id: 'post-1',
      author: 'Mani Thummala',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnq44xff4QXwqC1EdaDN97GYhaYgoL88TGd-kxNkl3ojddw2Mxt8s0r2RwH7Jy5feDtpdaQl8Xx3ZoFXV0egqS_S8HE70OHzlwDcP38exe_Vu8oMMqYspP7qHm4Z9_dogCvgXbiTKAy0fyxEFp6_2oQx3civCyjmUWX36NHjkOmNUhSkZx6nMEN_Pr65PO3yhshMtAygaUy4sf0fsrC4jRGtafeop2K7AMZlh4uqJGFdMKWk_eAHt',
      time: '2 hours ago',
      content:
        language === 'en'
          ? 'Our college planted 50 saplings today. Proud to be part of this green initiative! 🌱 #GoGreen #CleanCampus #TogetherWeCan'
          : 'ఈరోజు మా కళాశాలలో 50 మొక్కలు నాటాము. ఈ హరిత ఉద్యమంలో భాగమైనందుకు ఎంతో గర్వంగా ఉంది! 🌱 #GoGreen #CleanCampus',
      tags: ['#GoGreen', '#CleanCampus', '#TogetherWeCan'],
      likes: 24,
      comments: 5,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4xd-V8ioO3Zr6LHx_2yffc3vzRf4_r5zJ55AhemTCK-dcinAlyE_7dZuKzNC-evC_a5L49mYmxeeku4euxNMIlLtFYTvFNpv6bb7WMoL5zhhCuX1GnK7sQvLgEBiANiyYeLNY6YzIZCDUO1IaLhkJj2MSpuuiQZdlZm9Isf2qAolF9RtuWU7UA4RthuR2-5wEkXQC2C1Hk92OJK4K982mGP-sBD0bo1VESQS7bsP0rIYAD2teqiE',
    },
    {
      id: 'post-2',
      author: 'Priya S',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBmvUl2JCsTcGJLqIvM80V3RnMEtuWo7ofib3LWiJaFw_eb8TQ8RYvug0dHi60S7miX6sqwjxZkVQ71VdmGNyD44sLLNNXvBBifWB9IVV9pvE2n4zDhCRGUVnHv0qaRjqiUkJvl4njIpp9AFpUst4l3zysub_0jTNYM1OU2FhGyO7DXCFuNSdFbvheEn3dAjhfWnleV4EhvwVoIwjenu9ghBi7QUBt6k_HaFq0Zb1E6wD6JtF-qyhib',
      time: '5 hours ago',
      content:
        language === 'en'
          ? 'Used public transport today instead of my bike. Small step towards cleaner air! 🚌🌿 #GreenHabits #CleanAir'
          : 'బైక్ బదులుగా ఈరోజు బస్సులో ప్రయాణించాను. స్వచ్ఛమైన గాలి కోసం చిన్న అడుగు! 🚌🌿 #GreenHabits #CleanAir',
      tags: ['#GreenHabits', '#CleanAir'],
      likes: 18,
      comments: 3,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCdNOyQjXWFkizemlJ6dNdmkIIpnmAPtlc3qHvD7RSi1zoA12uZJs5emDSvNdIsijSGcocu6GQ8psFV7KmrLS8-Lz1AiD44LIP8ns8ujiW9lMTIus7-m4-2HEQHsbSpy3S4J61ezSQUbmOf6SPYwUrCuWYOP6yjYucRsO9psLi5RxNvHw6Ubbf8MFeQzqOw1YUeRemRazYfI4dmqTKCC_JxAjO7KrTSvUQDzroBYZ6KP2MbEG_rw-kl',
    },
    {
      id: 'post-3',
      author: 'Rohit Kumar',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDNrk4ImbDbB1dloxCnqCK-8DmvP0Xg4-12c-66y5ucjTp6JE6mVTM7onGN8mAg5qSuFrgtdSNdR6CqpWSEUIDrZFpMdRVye8s7GClCuQUQVfNls7rBLQ0l0TeEbsW6WXsOyoS9Rry4hDKZlKvJZc__nF25uCEWt9d1x-pMzMkbOJioKBSvoFGtMaZ8HDr6tD0h4DjwVHD8z-BOIdUO9fDsAFJeF4ZN33usd93fTdcwV1daJdJiVvjD',
      time: '1 day ago',
      content:
        language === 'en'
          ? 'Completed the Air Pollution Quiz and scored 9/10! Really informative. Keep learning everyone! 🏆 #AirCare #Quiz'
          : 'వాయు కాలుష్య క్విజ్‌లో 9/10 మార్కులు సాధించాను! ప్రతి ఒక్కరూ ఇందులో పాల్గొనండి! 🏆 #AirCare #Quiz',
      tags: ['#AirCare', '#Quiz'],
      likes: 32,
      comments: 7,
      isBadgeCard: true,
    },
    {
      id: 'post-4',
      author: 'Sneha Reddy',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWyJ4-vgIE3fGPoJ-QSkQkacWTQeqe9tih2IkgYIZyPzrnsvflrpaZWDmYkQM1QZ-Bgg6Rj4opM-iydbjqlorRnLGY9deB9eVOZkrpZwMI4Aok5ejHXV0J4c8wVG4Q3rvjcGQP4oie9WduEZ8Rg4UlVQ5vzrIcNxn_5mzPRZFlvveNWz3ffkOcW79AmOcmnrXrZ64NliznmrTX0wqIoYH4gzlL3fSP4I4Q2ENxbjFaDZ5OWvXfnWk1',
      time: '1 day ago',
      content:
        language === 'en'
          ? "Today's challenge: Avoid single-use plastic. Refused plastic bag and used my cloth bag. 💚 #GreenChallenge #NoPlastic"
          : 'ఈరోజు సవాలు: ప్లాస్టిక్ సంచుల బదులు గుడ్డ సంచిని ఉపయోగించాను. 💚 #GreenChallenge #NoPlastic',
      tags: ['#GreenChallenge', '#NoPlastic'],
      likes: 28,
      comments: 4,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBsrlrXvZer2sSq85J3ANrJ22gIX3t44e15Nn6sBjHdfW-dzZFJWDrvXa_0J2CkIRawhdeOl9o2Vh9ZxYVm0cb43wq__MRPZzeRBKDm7EcZbf9y-t_WvuO5VU4n-x0WQJLIzU0d3V4fKmyWJ9FO5Elay6Yc0bSPXvTrYL2K0qkF1gEOWFn3FL6B-6WkJudWZkbg5EFkQM30joTRMLvLitI8E9WhzPyNelf7a_shrfY_3d2wFHE6FcP3',
    },
  ]);

  const handleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const hasLiked = !p.hasLiked;
          return {
            ...p,
            hasLiked,
            likes: hasLiked ? p.likes + 1 : p.likes - 1,
          };
        }
        return p;
      })
    );
  };

  const handleShare = (id: string) => {
    setCopiedShareId(id);
    navigator.clipboard.writeText(`Check out this student action on AirCare Community: https://aircare.initiative/#${id}`);
    setTimeout(() => setCopiedShareId(null), 2000);
  };

  const handleNewPost = (newPostData: {
    author: string;
    avatar: string;
    time: string;
    content: string;
    tags: string[];
    image?: string;
  }) => {
    const newPost: PostItem = {
      id: `post-${Date.now()}`,
      author: newPostData.author,
      avatar: newPostData.avatar,
      time: newPostData.time,
      content: newPostData.content,
      tags: newPostData.tags,
      likes: 1,
      comments: 0,
      image: newPostData.image,
    };
    setPosts([newPost, ...posts]);
  };

  const galleryItems = [
    {
      title: language === 'en' ? 'Clean Air Campaign' : 'స్వచ్ఛ గాలి ర్యాలీ',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWGYVY2jKU5wj8SeLPPTOG5cmjDuIfQ4LrjA_DBVclWIWP2ARqKUdM3duTwl5NugkGgGtQVavPaRs3W3PXVvl5m4Qlw31azcReSyTURURHTqIEZh4WOTndrF-6QQjgVh4mqgRcKH_5tbJq-psY0ppTR051KOvL1CVV_8nXAZ5cVC3isuj6GYvmkuRwF60fSCKACYZqLJJ61Z4xS3Pp79NNn3ueb5VqgSiaLvDBPNZUp8osg0RhC3Ai',
    },
    {
      title: language === 'en' ? 'Tree Planting Drive' : 'మొక్కలు నాటే కార్యక్రమం',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACZSBfXBAsAHtmC8fy6bxvk4Y1rHs1HuAGq-HTCQpkoRnr1KWyUWYxffvTHFxYJayhH5soYsfrrYtrKbuWmDnW7d-kkxG1mFWb2N0_-PVwvzhYtuQq2_APN0N3c9vT6itdodmuajy0ailif3t9PyJOK5y9nrvBgZ-lFcOdCp4cFCPz0h8jyLaFkfMWsiR1leLdIiMye-fP56GZORhV_y_Ed6NW3fFWXwVtuc4e5MstsAU_5DOpWEcR',
    },
    {
      title: language === 'en' ? 'Campus Clean-up' : 'ప్రాంగణ స్వచ్ఛత',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQohEYMgCRfCEyVZz8cSEmFO92VYYiqFRhNwrKgwaN_UNiUKhWqXZo-34TH8PmgEooJ5PJ_wwMXP1TPobHNz9KADCRGZvCp5zEiXFZuG8KLjh4NPtlunUuf22UDFFqo_HjHEh8z-P5DLgSwy7nE00XqDilvZEqodj839fF96_kmVDahoR-2pE7ZYvaNS9Y_liGIM2k5iBkbiHvG05nD2pGrHkEmHz8aS9YuxUSbyJBmUcprW2NoA3L',
    },
    {
      title: language === 'en' ? 'Eco Awareness Rally' : 'పర్యావరణ అవగాహన',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFJ6W33pJp0m0nA71mhCmu53u5Fhz3MKDlJi86lODIL1-4M07pAt05_L6gvBmF_GQ241JcCSd7Ie2CvQSgVSUyV5-UVoy4-5_nLAR-hM1GpuF8kSX4tP5EjTfznGIh-8lPZWY64zaLVvMr-dtb-3rFZq6eS7ylH_g5lpqbttm_ygs3ZJ_ahnLHyZkCvEvzy89aqwLImdT3olajK5eTc-pU4TxJS-FIio5cVMVRvAe7tFzGCBsXZo1z',
    },
    {
      title: language === 'en' ? 'Green Campus Initiative' : 'హరిత క్యాంపస్ ప్రణాళిక',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5F7vBqi0RgdctO-smVFFRwnWfE5wv0uYf7bFZOijhnxaR_10RtkrGV8VCQxhCmUf-QznREQiRLJ1pRwg7UFrgcEmzPZGfx3-SqQAQQMrmoLrojnOiklr2ABXL7XbYd9GpMvWwr_Z36UPdx5zseKTChB77NUWbW_u8NDnxJdvf_C7u-x9wez3MLaVHOnLvNS56-gxaJXcN61WMrNcyngDEoqZgHr9r_n983xYOK8Wsd2o_KlX8kmKg',
    },
  ];

  return (
    <div className="bg-[#030d0a] text-slate-100 font-sans antialiased selection:bg-[#00e599] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        {/* ======================================================== */}
        {/* 1. HERO SECTION */}
        {/* ======================================================== */}
        <section className="relative rounded-3xl overflow-hidden min-h-[460px] flex items-center border border-[#143226]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-WCbtCoRqYXBQ0O7tAU8BuioDdyAvaHR8n0V7x9rxWyIbbLmcNRwKoIIYDudwNhtpsFGSgD6yLS6UNDZuF2x4qo8CYdQZ2xP_Ow3miP_dn-arX8qkSBLVprKRBsQRZwokuQWxDm28maXT9XgqaX0SrUvSYLJT3tqBrIkQhegYbl65SZTJwfpT8gR9rDVchJjnSBONAsX-BfcvnCqgbIB0Cv3wpOAOsr_InoUa_36je6fO_K6vMtrU"
              alt="Students with backpacks standing together overlooking the city at sunrise"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030d0a] via-[#030d0a]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full py-12 px-6 sm:px-12 lg:px-16 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                <Leaf className="w-3.5 h-3.5 text-[#00e599]" />
                <span>{language === 'en' ? 'STUDENT COMMUNITY' : 'విద్యార్థి సమాజం'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {language === 'en' ? (
                  <>
                    Together for a
                    <br />
                    <span className="text-[#00e599] glow-green">Cleaner Tomorrow</span>
                  </>
                ) : (
                  <>
                    కలిసికట్టుగా
                    <br />
                    <span className="text-[#00e599] glow-green">స్వచ్ఛమైన రేపటి కోసం</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                {language === 'en'
                  ? 'Join a community of passionate students working towards a cleaner, greener and healthier planet.'
                  : 'స్వచ్ఛమైన, పచ్చని మరియు ఆరోగ్యకరమైన భూమి కోసం పనిచేస్తున్న ఆదర్శ విద్యార్థుల సమాజంలో చేరండి.'}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenPledge}
                  className="inline-flex items-center gap-3 bg-[#00e599] hover:bg-[#00c985] text-[#03150e] font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all text-sm group cursor-pointer"
                >
                  <span>{language === 'en' ? 'Join the Community' : 'సమాజంలో చేరండి'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onNavigateHome}
                  className="px-5 py-3 rounded-full border border-[#16382c] hover:border-emerald-500/60 bg-[#091b15] text-slate-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  {language === 'en' ? '← Back to Home' : '← హోమ్‌కు వెళ్లండి'}
                </button>
              </div>
            </div>

            {/* Handwritten Playful Tagline */}
            <div className="lg:col-span-5 hidden lg:flex justify-end items-center pr-8 pointer-events-none select-none">
              <div className="rotate-[-6deg] text-center transform">
                <div className="font-handwriting text-4xl sm:text-5xl text-[#00e599] leading-none tracking-wide drop-shadow-[0_2px_12px_rgba(0,229,153,0.4)] font-bold">
                  Small
                  <br />
                  Actions
                  <br />
                  <span className="text-white">Big Impact</span>
                </div>
                <div className="flex justify-center mt-2 text-[#00e599]">
                  <Sprout className="w-8 h-8 transform -rotate-12 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. QUICK ACTIONS STRIP */}
        {/* ======================================================== */}
        <section className="bg-[#061510] border border-[#112d22] rounded-2xl p-3 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#153429]">
            {/* Action Item 1: Share Activities */}
            <div
              onClick={() => setIsCreateModalOpen(true)}
              className="p-4 sm:p-5 flex items-center gap-4 group cursor-pointer hover:bg-emerald-950/20 rounded-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-[#00e599] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00e599] transition-colors">
                  {language === 'en' ? 'Share Activities' : 'కార్యక్రమాలను పంచుకోండి'}
                </h4>
                <p className="text-xs text-[#7e9a8f] mt-0.5">
                  {language === 'en' ? 'Post your eco actions' : 'మీ హరిత చర్యలను పోస్ట్ చేయండి'}
                </p>
              </div>
            </div>

            {/* Action Item 2: Submit Ideas */}
            <div
              onClick={() => setIsCreateModalOpen(true)}
              className="p-4 sm:p-5 flex items-center gap-4 group cursor-pointer hover:bg-emerald-950/20 rounded-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-[#00e599] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00e599] transition-colors">
                  {language === 'en' ? 'Submit Ideas' : 'ఆలోచనలను అందించండి'}
                </h4>
                <p className="text-xs text-[#7e9a8f] mt-0.5">
                  {language === 'en' ? 'Suggest new solutions' : 'కొత్త పరిష్కారాలు సూచించండి'}
                </p>
              </div>
            </div>

            {/* Action Item 3: Take Challenges */}
            <div
              onClick={onOpenPledge}
              className="p-4 sm:p-5 flex items-center gap-4 group cursor-pointer hover:bg-emerald-950/20 rounded-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-[#00e599] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00e599] transition-colors">
                  {language === 'en' ? 'Take Challenges' : 'సవాళ్లను స్వీకరించండి'}
                </h4>
                <p className="text-xs text-[#7e9a8f] mt-0.5">
                  {language === 'en' ? 'Earn green points' : 'పాయింట్లు పొందండి'}
                </p>
              </div>
            </div>

            {/* Action Item 4: Connect */}
            <div
              onClick={onOpenPledge}
              className="p-4 sm:p-5 flex items-center gap-4 group cursor-pointer hover:bg-emerald-950/20 rounded-xl transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-[#00e599] flex-shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00e599] transition-colors">
                  {language === 'en' ? 'Connect' : 'కలవండి'}
                </h4>
                <p className="text-xs text-[#7e9a8f] mt-0.5">
                  {language === 'en' ? 'Build a greener network' : 'హరిత నెట్‌వర్క్ నిర్మించండి'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. MAIN CONTENT: COMMUNITY FEED & SIDEBAR WIDGETS */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Community Feed (Span 8) */}
          <section className="lg:col-span-8 space-y-6">
            {/* Feed Top Heading & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <div>
                <h2 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
                  <Leaf className="w-5 h-5 text-[#00e599]" />
                  <span>
                    Community <span className="text-[#00e599]">{language === 'en' ? 'Feed' : 'ఫీడ్'}</span>
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#7e9a8f] mt-1">
                  {language === 'en'
                    ? 'See what your fellow students are doing and get inspired!'
                    : 'తోటి విద్యార్థులు ఏమి చేస్తున్నారో చూసి స్ఫూర్తి పొందండి!'}
                </p>
              </div>

              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-emerald-950/40 text-[#00e599] border border-[#00e599]/40 hover:border-[#00e599] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
              >
                <Pen className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Post an Update' : 'అప్‌డేట్ పోస్ట్ చేయండి'}</span>
              </button>
            </div>

            {/* Feed Posts Container */}
            <div className="space-y-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-[#061510] border border-[#112d22] rounded-2xl p-5 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 space-y-3">
                      {/* Author header */}
                      <div className="flex items-center gap-3">
                        <img
                          src={post.avatar}
                          alt={`${post.author} avatar`}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/30"
                        />
                        <div>
                          <h3 className="text-sm font-bold text-white">{post.author}</h3>
                          <p className="text-[11px] text-[#7e9a8f]">{post.time}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {post.content}
                      </p>

                      {/* Interactive Actions */}
                      <div className="flex items-center gap-6 pt-2 text-xs text-[#7e9a8f]">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                            post.hasLiked ? 'text-red-400 font-bold' : 'hover:text-[#00e599]'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${post.hasLiked ? 'fill-current' : ''}`} />
                          <span className="tabular-nums">{post.likes}</span>
                        </button>

                        <button className="flex items-center gap-1.5 hover:text-[#00e599] transition-colors cursor-pointer">
                          <MessageCircle className="w-4 h-4" />
                          <span className="tabular-nums">{post.comments}</span>
                        </button>

                        <button
                          onClick={() => handleShare(post.id)}
                          className="flex items-center gap-1.5 hover:text-[#00e599] transition-colors cursor-pointer"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>{copiedShareId === post.id ? 'Copied!' : 'Share'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Attachment / Graphic */}
                    {post.image && (
                      <div className="md:w-56 h-36 rounded-xl overflow-hidden flex-shrink-0 border border-[#143427]">
                        <img
                          src={post.image}
                          alt="Post photo"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {post.isBadgeCard && (
                      <div className="md:w-56 h-36 rounded-xl bg-gradient-to-br from-[#0c2e22] to-[#041610] border border-emerald-500/30 flex flex-col items-center justify-center text-center p-3 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-[#00e599]/40 flex items-center justify-center text-yellow-400 text-xl mb-2">
                          <Trophy className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-extrabold text-white tracking-wide">
                          {language === 'en' ? 'Quiz Completed!' : 'క్విజ్ పూర్తయింది!'}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RIGHT COLUMN: Sidebar Widgets (Span 4) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Widget 1: Our Community Stats */}
            <div className="bg-[#061510] border border-[#112d22] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Leaf className="w-4 h-4 text-[#00e599]" />
                <h3 className="text-base font-bold text-white">
                  {language === 'en' ? 'Our Community Stats' : 'సమాజం గణాంకాలు'}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {/* Stat 1 */}
                <div className="bg-[#030d0a] border border-[#122e23] rounded-xl p-4 text-center group hover:border-[#00e599]/40 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-[#00e599] mb-2 group-hover:scale-110 transition-transform">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-extrabold text-white tabular-nums">2,580+</div>
                  <div className="text-[11px] text-[#7e9a8f] mt-0.5 font-medium">
                    {language === 'en' ? 'Active Students' : 'విద్యార్థులు'}
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-[#030d0a] border border-[#122e23] rounded-xl p-4 text-center group hover:border-[#00e599]/40 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-[#00e599] mb-2 group-hover:scale-110 transition-transform">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-extrabold text-white tabular-nums">320+</div>
                  <div className="text-[11px] text-[#7e9a8f] mt-0.5 font-medium">
                    {language === 'en' ? 'Activities Done' : 'కార్యక్రమాలు'}
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-[#030d0a] border border-[#122e23] rounded-xl p-4 text-center group hover:border-[#00e599]/40 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-[#00e599] mb-2 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-extrabold text-white tabular-nums">150+</div>
                  <div className="text-[11px] text-[#7e9a8f] mt-0.5 font-medium">
                    {language === 'en' ? 'Ideas Shared' : 'ఆలోచనలు'}
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="bg-[#030d0a] border border-[#122e23] rounded-xl p-4 text-center group hover:border-[#00e599]/40 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-[#00e599] mb-2 group-hover:scale-110 transition-transform">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-extrabold text-white tabular-nums">90+</div>
                  <div className="text-[11px] text-[#7e9a8f] mt-0.5 font-medium">
                    {language === 'en' ? 'Challenges Done' : 'సవాళ్లు'}
                  </div>
                </div>
              </div>
            </div>

            {/* Widget 2: Take the Clean Air Pledge */}
            <div className="bg-[#061510] border border-[#112d22] rounded-2xl p-6 relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#00e599]" />
                  <h3 className="text-base font-bold text-white">
                    {language === 'en' ? 'Take the Clean Air Pledge' : 'స్వచ్ఛమైన గాలి ప్రతిజ్ఞ'}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'en'
                    ? 'I pledge to make eco-friendly choices, reduce pollution and help build a cleaner, healthier planet.'
                    : 'పర్యావరణ హితమైన నిర్ణయాలు తీసుకుని, కాలుష్యాన్ని తగ్గించి స్వచ్ఛమైన భూమిని నిర్మించడానికి నేను ప్రతిజ్ఞ చేస్తున్నాను.'}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenPledge}
                    className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c985] text-[#03150e] text-xs font-bold px-5 py-2.5 rounded-full transition-all group cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Take Pledge' : 'ప్రతిజ్ఞ చేయండి'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Earth Outline Graphic */}
              <div className="absolute -right-4 -bottom-4 text-emerald-500/15 pointer-events-none select-none">
                <Globe2 className="w-32 h-32" />
              </div>
            </div>

            {/* Widget 3: Quick Links */}
            <div className="bg-[#061510] border border-[#112d22] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-4 h-4 text-[#00e599]" />
                <h3 className="text-base font-bold text-white">
                  {language === 'en' ? 'Quick Links' : 'ముఖ్య లింకులు'}
                </h3>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-emerald-950/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-[#00e599] group-hover:scale-110 transition-transform" />
                    <span>{language === 'en' ? 'My Profile' : 'నా ప్రొఫైల్'}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#7e9a8f] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-emerald-950/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <CalendarCheck className="w-4 h-4 text-[#00e599] group-hover:scale-110 transition-transform" />
                    <span>{language === 'en' ? 'My Activities' : 'నా కార్యక్రమాలు'}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#7e9a8f] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenPledge}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-emerald-950/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-[#00e599] group-hover:scale-110 transition-transform" />
                    <span>{language === 'en' ? 'My Points & Badges' : 'పాయింట్లు & బ్యాడ్జీలు'}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#7e9a8f] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-emerald-950/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#00e599] group-hover:scale-110 transition-transform" />
                    <span>{language === 'en' ? 'Community Guidelines' : 'సమాజ మార్గదర్శకాలు'}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#7e9a8f] group-hover:translate-x-1 transition-transform" />
                </button>
              </nav>
            </div>

            {/* Widget 4: Be a Changemaker */}
            <div className="bg-[#061510] border border-[#112d22] rounded-2xl p-6 relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#00e599]" />
                  <h3 className="text-base font-bold text-white">
                    {language === 'en' ? 'Be a Changemaker' : 'నాయకులుగా మారండి'}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'en'
                    ? 'Your actions inspire others. Together we can create a healthier and greener future.'
                    : 'మీ కృషి ఇతరులకు స్ఫూర్తినిస్తుంది. కలిసికట్టుగా మనం ఆరోగ్యకరమైన సమాజాన్ని నిర్మించగలం.'}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenPledge}
                    className="inline-flex items-center gap-2 bg-[#00e599] hover:bg-[#00c985] text-[#03150e] text-xs font-bold px-5 py-2.5 rounded-full transition-all group cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Join Now' : 'చేరండి'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Leaf Icon */}
              <div className="absolute -right-2 -bottom-2 text-emerald-500/15 pointer-events-none select-none">
                <Leaf className="w-28 h-28 rotate-12" />
              </div>
            </div>
          </aside>
        </div>

        {/* ======================================================== */}
        {/* 4. COMMUNITY GALLERY */}
        {/* ======================================================== */}
        <section className="space-y-5 pt-4">
          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
                <Camera className="w-5 h-5 text-[#00e599]" />
                <span>{language === 'en' ? 'Community Gallery' : 'కమ్యూనిటీ గ్యాలరీ'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#7e9a8f] mt-1">
                {language === 'en'
                  ? 'Moments, memories and meaningful actions.'
                  : 'జ్ఞాపకాలు, అనుభవాలు మరియు అర్థవంతమైన పర్యావరణ చర్యలు.'}
              </p>
            </div>

            <button
              onClick={() => setActivePhoto(galleryItems[0])}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-emerald-950/40 text-[#00e599] border border-[#00e599]/40 hover:border-[#00e599] px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>{language === 'en' ? 'View All Photos' : 'అన్ని ఫోటోలు చూడండి'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 5-Column Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(item)}
                className={`group relative rounded-2xl overflow-hidden aspect-[4/5] bg-emerald-950/20 border border-[#112d22] cursor-pointer ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#081612] border border-[#122c23] rounded-2xl overflow-hidden p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#00e599] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl mb-3"
            />
            <p className="text-center font-bold text-sm text-[#00e599]">{activePhoto.title}</p>
          </div>
        </div>
      )}

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmitPost={handleNewPost}
        language={language}
      />
    </div>
  );
};
