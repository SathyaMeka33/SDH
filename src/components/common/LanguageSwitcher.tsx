import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'pill' | 'compact' | 'drawer' | 'footer';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'compact',
  className = '',
}) => {
  const { language, setLanguage } = useHospital();

  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center bg-slate-100 p-0.5 rounded-lg border border-[#DCE7F0] ${className}`}
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
            language === 'en'
              ? 'bg-[#0B5CAD] text-white shadow-xs'
              : 'text-[#607080] hover:text-[#123B63]'
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguage('te')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
            language === 'te'
              ? 'bg-[#0B5CAD] text-white shadow-xs'
              : 'text-[#607080] hover:text-[#123B63]'
          }`}
        >
          తెలుగు
        </button>
      </div>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className={`p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between ${className}`}>
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-[#0B5CAD]" />
          <div>
            <div className="text-xs font-bold text-[#123B63]">భాషను ఎంచుకోండి / Language</div>
            <div className="text-[11px] text-[#607080]">
              {language === 'te' ? 'ప్రస్తుత భాష: తెలుగు' : 'Current: English'}
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white p-1 rounded-lg border border-[#DCE7F0] shadow-2xs">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 text-xs font-bold rounded ${
              language === 'en'
                ? 'bg-[#0B5CAD] text-white'
                : 'text-[#607080] hover:text-[#123B63]'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage('te')}
            className={`px-2.5 py-1 text-xs font-bold rounded ${
              language === 'te'
                ? 'bg-[#0B5CAD] text-white'
                : 'text-[#607080] hover:text-[#123B63]'
            }`}
          >
            తెలుగు
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Languages className="w-4 h-4 text-blue-300" />
        <span className="text-xs text-blue-200">Language / భాష:</span>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`text-xs px-2.5 py-1 rounded transition-colors ${
            language === 'en'
              ? 'bg-white/20 text-white font-bold'
              : 'text-blue-200 hover:text-white'
          }`}
        >
          English
        </button>
        <span className="text-blue-400/40">|</span>
        <button
          type="button"
          onClick={() => setLanguage('te')}
          className={`text-xs px-2.5 py-1 rounded transition-colors ${
            language === 'te'
              ? 'bg-white/20 text-white font-bold'
              : 'text-blue-200 hover:text-white'
          }`}
        >
          తెలుగు
        </button>
      </div>
    );
  }

  // Compact toggle for top bar / navbar
  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 hover:bg-white/20 transition-all text-white border border-white/15"
        title="Toggle English / తెలుగు"
      >
        <Languages className="w-3.5 h-3.5 text-blue-300 shrink-0" />
        <span className={language === 'en' ? 'font-bold text-white' : 'text-blue-200'}>
          EN
        </span>
        <span className="text-white/40">/</span>
        <span className={language === 'te' ? 'font-bold text-emerald-300' : 'text-blue-200'}>
          తెలుగు
        </span>
      </button>
    </div>
  );
};
