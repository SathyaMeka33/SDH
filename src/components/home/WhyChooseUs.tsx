import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { whyChooseReasons } from '../../config/hospitalData';
import {
  Award,
  GraduationCap,
  HeartPulse,
  Navigation,
  Building2,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Award,
  GraduationCap,
  HeartPulse,
  Navigation,
  Building2,
  ShieldCheck,
};

export const WhyChooseUs: React.FC = () => {
  const { hospitalData, t, language } = useHospital();

  const reasons = t.whyChoose.reasons;

  return (
    <section className="py-16 md:py-24 bg-[#F7FAFC] border-t border-[#DCE7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.whyChoose.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
            {t.whyChoose.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#607080] leading-relaxed">
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const originalReason = whyChooseReasons[index];
            const iconName = originalReason ? originalReason.iconName : 'Award';
            const Icon = iconMap[iconName] || CheckCircle2;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-[#DCE7F0] shadow-2xs hover:shadow-sm hover:border-[#0B5CAD]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#123B63]">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#607080] mt-2 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#DCE7F0]/60 flex items-center gap-1.5 text-xs text-[#0B5CAD] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5CAD]" />
                  <span>{language === 'te' ? 'ప్రామాణిక వైద్య ప్రమాణాలు' : 'Verified clinical standard'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
