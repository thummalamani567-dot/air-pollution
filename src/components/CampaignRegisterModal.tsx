import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle2, Ticket, Sparkles } from 'lucide-react';

interface CampaignRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaignTitle: string;
  campaignDate: string;
  campaignLocation: string;
  language: 'en' | 'te';
}

export const CampaignRegisterModal: React.FC<CampaignRegisterModalProps> = ({
  isOpen,
  onClose,
  campaignTitle,
  campaignDate,
  campaignLocation,
  language,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCollege('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-lg bg-[#0b1f14] border border-[#1a3e2a] rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#051109] border border-[#1a3e2a] text-[#00e599] text-xs font-semibold uppercase tracking-wider w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Campaign Registration' : 'కార్యక్రమ నమోదు'}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-1">
              {campaignTitle || (language === 'en' ? 'Green Campus Drive' : 'గ్రీన్ క్యాంపస్ డ్రైవ్')}
            </h3>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-300 mt-2 mb-6">
              <span className="flex items-center gap-1.5 text-[#00e599]">
                <Calendar className="w-3.5 h-3.5" />
                {campaignDate || '15 Nov 2026'}
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#00e599]" />
                {campaignLocation || 'Hyderabad'}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  {language === 'en' ? 'Full Name *' : 'పూర్తి పేరు *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'en' ? 'e.g. Priya Reddy' : 'ఉదా: ప్రియా రెడ్డి'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#051109] border border-[#1a3e2a] focus:border-[#00e599] text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {language === 'en' ? 'Email Address *' : 'ఈమెయిల్ *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#051109] border border-[#1a3e2a] focus:border-[#00e599] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {language === 'en' ? 'Phone / WhatsApp' : 'ఫోన్ నంబర్'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#051109] border border-[#1a3e2a] focus:border-[#00e599] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  {language === 'en' ? 'School / College / Organization' : 'కళాశాల / సంస్థ'}
                </label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder={language === 'en' ? 'e.g. Osmania University' : 'ఉదా: ఉస్మానియా విశ్వవిద్యాలయం'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#051109] border border-[#1a3e2a] focus:border-[#00e599] text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#00e599] hover:bg-[#00ffaa] text-[#051109] font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>
                    {language === 'en' ? 'Confirm Registration & Get Pass' : 'నమోదు పూర్తి చేసి పాస్ పొందండి'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-2 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-[#00e599] flex items-center justify-center text-[#00e599] mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-1">
              {language === 'en' ? 'Registration Confirmed!' : 'నమోదు పూర్తయింది!'}
            </h3>
            <p className="text-xs text-[#00e599] font-semibold mb-6">
              {language === 'en'
                ? 'Your volunteer pass has been generated'
                : 'మీ వాలంటీర్ పాస్ సిద్ధంగా ఉంది'}
            </p>

            <div className="bg-gradient-to-b from-[#0f271a] to-[#051109] border-2 border-[#1a3e2a] rounded-2xl p-6 text-left shadow-xl mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#1a3e2a] pb-3 mb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#00e599] tracking-wider block">
                    AirCare Event Pass
                  </span>
                  <span className="text-base font-bold text-white">{campaignTitle}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00e599]/15 border border-[#00e599]/40 flex items-center justify-center text-[#00e599]">
                  <Ticket className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-gray-300">
                <div><strong className="text-white">Attendee:</strong> {name}</div>
                {college && <div><strong className="text-white">Institute:</strong> {college}</div>}
                <div><strong className="text-white">Date:</strong> {campaignDate}</div>
                <div><strong className="text-white">Venue:</strong> {campaignLocation}</div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 mt-4 pt-3 border-t border-[#1a3e2a]">
                <span>Pass ID: AC-EVT-{Math.floor(1000 + Math.random() * 9000)}</span>
                <span className="text-[#00e599] font-bold">Entry Confirmed ✓</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#00e599] hover:bg-[#00ffaa] text-[#051109] font-bold text-xs transition-all cursor-pointer shadow-md"
            >
              {language === 'en' ? 'Done' : 'పూర్తయింది'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
