import React from 'react';
import { X, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURE_DETAILS } from '../data/airData';

interface DetailModalProps {
  featureId: string | null;
  onClose: () => void;
  language: 'en' | 'te';
  onOpenPledge: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  featureId,
  onClose,
  language,
  onOpenPledge,
}) => {
  if (!featureId) return null;

  const detail = FEATURE_DETAILS[featureId];
  if (!detail) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#07160F] border border-[#1E583D] rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
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

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4ADE80] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AirCare In-Depth Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
            {language === 'en' ? detail.title : detail.titleTelugu}
          </h2>
          <p className="text-sm text-emerald-400/90 font-medium">
            {language === 'en' ? detail.subtitle : detail.subtitleTelugu}
          </p>
        </div>

        {/* Overview paragraph */}
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {language === 'en' ? detail.description : detail.descriptionTelugu}
        </p>

        {/* 3 Metric Stats Strip */}
        <div className="grid grid-cols-3 gap-3 bg-[#030B07] border border-[#153E2B] rounded-2xl p-4 mb-6">
          {detail.stats.map((s, idx) => (
            <div key={idx} className="text-center">
              <span className="block text-lg sm:text-xl font-extrabold text-white tabular-nums">
                {s.value}
              </span>
              <span className="text-[11px] text-gray-400 font-medium">
                {language === 'en' ? s.label : s.labelTelugu}
              </span>
            </div>
          ))}
        </div>

        {/* Key Mechanisms / Focal points */}
        <div className="mb-6 space-y-3">
          <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            {language === 'en' ? 'Core Mechanisms & Observations' : 'ముఖ్య పరిశీలనలు'}
          </h3>
          <div className="space-y-2.5">
            {detail.keyPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#030B07]/60 border border-[#153E2B]/60 rounded-xl p-3.5 text-xs"
              >
                <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                  {language === 'en' ? item.title : item.titleTelugu}
                </div>
                <div className="text-gray-300 leading-relaxed pl-3.5">
                  {language === 'en' ? item.desc : item.descTelugu}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Student & Citizen Tips */}
        <div className="mb-8 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
          <h3 className="text-xs font-bold text-[#4ADE80] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            {language === 'en' ? 'What You Can Do Today' : 'మీరు చేయగలిగిన పనులు'}
          </h3>
          <ul className="space-y-2 text-xs text-gray-200">
            {(language === 'en' ? detail.actionTips : detail.actionTipsTelugu).map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#153E2B]/60">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gray-700 text-xs font-semibold text-gray-300 hover:text-white hover:border-gray-500 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Back to Overview' : 'వెనుకకు'}
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPledge();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#4ADE80] hover:bg-emerald-400 text-[#030B07] text-xs font-bold transition-all shadow-md shadow-emerald-500/25 cursor-pointer"
          >
            <span>{language === 'en' ? 'Take Action Now' : 'ఇప్పుడే చర్య తీసుకోండి'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
