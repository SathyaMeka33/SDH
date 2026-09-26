import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { patientJourneySteps } from '../../config/hospitalData';
import {
  CalendarClock,
  MapPin,
  Stethoscope,
  FileCheck2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  CalendarClock,
  MapPin,
  Stethoscope,
  FileCheck2,
};

export const PatientJourney: React.FC = () => {
  const { navigateTo, t, language } = useHospital();

  const translatedSteps = [
    {
      step: '01',
      title: t.patientJourney.step1Title,
      description: t.patientJourney.step1Desc,
      iconName: 'CalendarClock',
    },
    {
      step: '02',
      title: t.patientJourney.step2Title,
      description: t.patientJourney.step2Desc,
      iconName: 'MapPin',
    },
    {
      step: '03',
      title: t.patientJourney.step3Title,
      description: t.patientJourney.step3Desc,
      iconName: 'Stethoscope',
    },
    {
      step: '04',
      title: t.patientJourney.step4Title,
      description: t.patientJourney.step4Desc,
      iconName: 'FileCheck2',
    },
  ];

  return (
    <section id="patient-journey" className="py-16 md:py-24 bg-[#F7FAFC] border-t border-[#DCE7F0] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.patientJourney.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
            {t.patientJourney.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#607080] leading-relaxed">
            {t.patientJourney.subtitle}
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {translatedSteps.map((step, index) => {
            const Icon = iconMap[step.iconName] || Stethoscope;
            return (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-white border border-[#DCE7F0] shadow-2xs hover:border-[#0B5CAD]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#0B5CAD]/30">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#123B63]">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#607080] mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#DCE7F0]/60 flex items-center justify-between text-xs text-[#0B5CAD] font-medium">
                  <span>{language === 'te' ? `దశ ${step.step} / 04` : `Step ${step.step} of 04`}</span>
                  {index < translatedSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#607080]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpful Patient Note */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-white border border-[#DCE7F0] text-center text-xs text-[#607080]">
          <p>
            <strong className="text-[#18324A]">{language === 'te' ? 'రోగులకు ఉపయోగకరమైన సూచన:' : 'Helpful Tip for Patients:'}</strong>{' '}
            {language === 'te'
              ? 'గతంలో వాడిన చర్మ సంబంధిత మందులు, ఆయింట్‌మెంట్లు లేదా అలర్జీ రికార్డులను వెంట తీసుకురావడం ద్వారా డాక్టర్ గారికి రోగ నిర్ధారణలో మరింత సహాయపడుతుంది.'
              : 'Please bring any prior skin prescriptions, ointments, or allergy records along with you to assist Dr. Satyanarayana during clinical evaluation.'}
          </p>
        </div>
      </div>
    </section>
  );
};
