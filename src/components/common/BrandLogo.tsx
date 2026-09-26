import React from 'react';
import { useHospital } from '../../context/HospitalContext';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const { language } = useHospital();

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm font-bold tracking-tight',
    md: 'text-base sm:text-lg font-bold tracking-tight',
    lg: 'text-xl sm:text-2xl font-bold tracking-tight',
  };

  const subtitleSizes = {
    sm: 'text-[11px]',
    md: 'text-xs',
    lg: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dermatology Medical Lockup Icon */}
      <div
        className={`${iconSizes[size]} shrink-0 rounded-xl bg-[#0B5CAD] text-white flex items-center justify-center shadow-sm ring-2 ring-[#0B5CAD]/20 relative overflow-hidden`}
        aria-hidden="true"
      >
        {/* Subtle skin layer / droplet motif */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
        >
          <path
            d="M16 5C11.5 10 9 13.5 9 17.5C9 21.642 12.134 25 16 25C19.866 25 23 21.642 23 17.5C23 13.5 20.5 10 16 5Z"
            fill="currentColor"
            fillOpacity="0.25"
          />
          <path
            d="M16 9C12.8 13.2 11 15.8 11 18.5C11 21.261 13.239 23.5 16 23.5C18.761 23.5 21 21.261 21 18.5C21 15.8 19.2 13.2 16 9Z"
            fill="currentColor"
          />
          <path
            d="M14 18.5H18M16 16.5V20.5"
            stroke="#0B5CAD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span className={`text-[#123B63] ${titleSizes[size]} font-semibold`}>
          {language === 'te' ? (
            <>
              సరోజినీ దేవి <span className="text-[#0B5CAD] font-bold">స్కిన్ హాస్పిటల్</span>
            </>
          ) : (
            <>
              SAROJINI DEVI <span className="text-[#0B5CAD] font-bold">SKIN HOSPITAL</span>
            </>
          )}
        </span>
        {showTagline && (
          <span className={`text-[#607080] ${subtitleSizes[size]} font-medium flex items-center gap-1.5`}>
            <span>{language === 'te' ? 'డాక్టర్ సత్యనారాయణ' : 'Dr. Satyanarayana'}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#0B5CAD]/60"></span>
            <span className="text-[#0B5CAD] font-semibold">{language === 'te' ? 'MD (డెర్మటాలజీ)' : 'MD (Dermatology)'}</span>
          </span>
        )}
      </div>
    </div>
  );
};
