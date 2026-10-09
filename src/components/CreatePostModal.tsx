import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitPost: (post: {
    author: string;
    avatar: string;
    time: string;
    content: string;
    tags: string[];
    image?: string;
  }) => void;
  language: 'en' | 'te';
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  onSubmitPost,
  language,
}) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [selectedTag, setSelectedTag] = useState('#GoGreen');

  if (!isOpen) return null;

  const tags = ['#GoGreen', '#CleanAir', '#CleanCampus', '#GreenHabits', '#NoPlastic'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    onSubmitPost({
      author: author.trim(),
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      time: 'Just now',
      content: content.trim(),
      tags: [selectedTag, '#AirCare'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDm4xd-V8ioO3Zr6LHx_2yffc3vzRf4_r5zJ55AhemTCK-dcinAlyE_7dZuKzNC-evC_a5L49mYmxeeku4euxNMIlLtFYTvFNpv6bb7WMoL5zhhCuX1GnK7sQvLgEBiANiyYeLNY6YzIZCDUO1IaLhkJj2MSpuuiQZdlZm9Isf2qAolF9RtuWU7UA4RthuR2-5wEkXQC2C1Hk92OJK4K982mGP-sBD0bo1VESQS7bsP0rIYAD2teqiE',
    });

    setAuthor('');
    setContent('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#081612] border border-[#122c23] rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#030d0a] border border-[#122c23] text-[#00e599] text-xs font-semibold uppercase tracking-wider w-fit mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Share Eco Action' : 'మీ కృషిని పంచుకోండి'}</span>
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-2">
          {language === 'en' ? 'Post to Community' : 'సమాజంతో పంచుకోండి'}
        </h3>
        <p className="text-xs text-[#7e9a8f] mb-6">
          {language === 'en'
            ? 'Inspire fellow students by sharing your clean air initiative or tree planting action.'
            : 'మీ పర్యావరణ పరిరక్షణ చర్యలను తోటి విద్యార్థులతో పంచుకుని స్ఫూర్తిని నింపండి.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              {language === 'en' ? 'Your Name *' : 'మీ పేరు *'}
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder={language === 'en' ? 'e.g. Mani Thummala' : 'ఉదా: మణి తుమ్మల'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#030d0a] border border-[#122c23] focus:border-[#00e599] text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              {language === 'en' ? 'What green action did you take? *' : 'మీరు చేసిన పర్యావరణ చర్య ఏమిటి? *'}
            </label>
            <textarea
              required
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                language === 'en'
                  ? 'e.g. Planted 5 saplings in our college garden today! #CleanCampus'
                  : 'ఉదా: మా కళాశాలలో ఈరోజు 5 మొక్కలు నాటాము! #GoGreen'
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#030d0a] border border-[#122c23] focus:border-[#00e599] text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              {language === 'en' ? 'Choose Hashtag:' : 'హ్యాష్‌ట్యాగ్ ఎంచుకోండి:'}
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-[#00e599] text-[#030d0a] shadow-md shadow-emerald-500/20'
                      : 'bg-[#030d0a] border border-[#122c23] text-gray-300 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#00e599] hover:bg-[#34d399] text-[#030d0a] font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{language === 'en' ? 'Publish Update' : 'పోస్ట్ చేయండి'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
