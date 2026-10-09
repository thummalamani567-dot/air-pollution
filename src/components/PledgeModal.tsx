import React, { useState } from 'react';
import { X, Check, Award, Sparkles, Share2, HeartHandshake } from 'lucide-react';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'te';
}

export const PledgeModal: React.FC<PledgeModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [institution, setInstitution] = useState('');
  const [pledges, setPledges] = useState<string[]>([
    'transit',
    'trees',
    'noburn',
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pledgeOptions = [
    {
      id: 'transit',
      label:
        language === 'en'
          ? 'Use public transit, bicycle or walk for trips under 3km.'
          : '3 కిమీ లోపు ప్రయాణాలకు ప్రజా రవాణా లేదా సైకిల్ మాత్రమే ఉపయోగిస్తాను.',
    },
    {
      id: 'trees',
      label:
        language === 'en'
          ? 'Plant and nurture at least 2 native tree saplings this season.'
          : 'ఈ సీజన్‌లో కనీసం 2 దేశీయ చెట్ల మొక్కలను నాటి సంరక్షిస్తాను.',
    },
    {
      id: 'noburn',
      label:
        language === 'en'
          ? 'Never burn dry leaves, plastic, or household garbage.'
          : 'ఎండిన ఆకులు, ప్లాస్టిక్ లేదా వ్యర్థాలను ఎప్పటికీ బహిరంగంగా కాల్చను.',
    },
    {
      id: 'monitor',
      label:
        language === 'en'
          ? 'Check daily local AQI and alert friends and family during high pollution.'
          : 'రోజూ స్థానిక గాలి నాణ్యతను తనిఖీ చేసి, కాలుష్యం ఉన్నప్పుడు కుటుంబ సభ్యులను హెచ్చరిస్తాను.',
    },
  ];

  const handleTogglePledge = (id: string) => {
    if (pledges.includes(id)) {
      if (pledges.length > 1) {
        setPledges(pledges.filter((p) => p !== id));
      }
    } else {
      setPledges([...pledges, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `I just took the Clean Air Pledge with AirCare! Join me in taking action for clean skies: https://aircare.initiative`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#07160F] border border-[#1E583D] rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#4ADE80]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">
                  {language === 'en' ? 'Take the Clean Air Pledge' : 'స్వచ్ఛమైన గాలి ప్రతిజ్ఞ'}
                </h3>
                <span className="text-xs text-gray-400">
                  {language === 'en'
                    ? 'Join 12,400+ changemakers for clean skies'
                    : '12,400+ యువతతో కలిసి ప్రతిజ్ఞ చేయండి'}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 mt-2 mb-6 leading-relaxed">
              {language === 'en'
                ? 'Every positive action cleans the air we breathe. Choose your commitments below and receive your official digital certificate.'
                : 'మన ప్రతి చిన్న ప్రయత్నం స్వచ్ఛమైన గాలికి తోడ్పడుతుంది. మీ నిబద్ధతలను ఎంచుకుని అధికారిక డిజిటల్ సర్టిఫికెట్ పొందండి.'}
            </p>

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
                  placeholder={language === 'en' ? 'e.g. Rahul Sharma' : 'ఉదా: రాహుల్ శర్మ'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#030B07] border border-[#153E2B] focus:border-[#4ADE80] text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {language === 'en' ? 'City / Town' : 'నగరం / గ్రామం'}
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={language === 'en' ? 'e.g. Hyderabad' : 'ఉదా: హైదరాబాద్'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030B07] border border-[#153E2B] focus:border-[#4ADE80] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    {language === 'en' ? 'School / College (Optional)' : 'పాఠశాల / కళాశాల'}
                  </label>
                  <input
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder={language === 'en' ? 'e.g. Green Valley High' : 'ఉదా: మోడల్ హైస్కూల్'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#030B07] border border-[#153E2B] focus:border-[#4ADE80] text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Commitments checklist */}
              <div className="pt-2">
                <span className="block text-xs font-semibold text-gray-300 mb-2">
                  {language === 'en' ? 'Select Commitments:' : 'మీ నిబద్ధతలను ఎంచుకోండి:'}
                </span>
                <div className="space-y-2">
                  {pledgeOptions.map((opt) => {
                    const isChecked = pledges.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleTogglePledge(opt.id)}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-950/30 border-emerald-500/50 text-white'
                            : 'bg-[#030B07]/50 border-gray-800 text-gray-400 hover:border-gray-700'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                            isChecked
                              ? 'bg-[#4ADE80] border-[#4ADE80] text-[#030B07]'
                              : 'border-gray-600 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs leading-relaxed">{opt.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#4ADE80] hover:bg-emerald-400 text-[#030B07] font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#030B07]" />
                  <span>
                    {language === 'en'
                      ? 'Confirm Pledge & Generate Certificate'
                      : 'ప్రతిజ్ఞ ధృవీకరించండి & సర్టిఫికెట్ పొందండి'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Certificate Generation Success View */
          <div className="text-center py-2 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-[#4ADE80] flex items-center justify-center text-[#4ADE80] mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-1">
              {language === 'en' ? 'Pledge Confirmed!' : 'ప్రతిజ్ఞ విజయవంతమైంది!'}
            </h3>
            <p className="text-xs text-emerald-400 font-semibold mb-6">
              {language === 'en'
                ? 'Welcome to the AirCare Changemaker Network'
                : 'ఎయిర్‌కేర్ మార్పు నాయకుల బృందానికి స్వాగతం'}
            </p>

            {/* Styled Digital Certificate Card */}
            <div className="bg-gradient-to-b from-[#0A2619] to-[#04120A] border-2 border-emerald-500/40 rounded-2xl p-6 text-center shadow-xl mb-6 relative overflow-hidden">
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-1">
                AirCare Certificate of Commitment
              </div>
              <div className="text-xl sm:text-2xl font-serif italic text-white my-2 font-bold">
                {name}
              </div>
              {city && (
                <div className="text-xs text-gray-300 mb-2">
                  {city} {institution ? `• ${institution}` : ''}
                </div>
              )}
              <div className="text-[11px] text-gray-300 max-w-sm mx-auto leading-relaxed border-t border-emerald-500/20 pt-3 mt-2">
                &ldquo;Has officially committed to reducing emissions, planting native trees, and advocating for clean, breathable air for all future generations.&rdquo;
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 mt-4 pt-3 border-t border-emerald-500/10">
                <span>Verified ID: AC-{Math.floor(100000 + Math.random() * 900000)}</span>
                <span>Date: {new Date().toLocaleDateString()}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-bold text-white transition-all cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>{copied ? 'Link Copied!' : 'Share Commitment'}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#4ADE80] hover:bg-emerald-400 text-[#030B07] text-xs font-bold transition-all cursor-pointer"
              >
                {language === 'en' ? 'Done' : 'పూర్తయింది'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
