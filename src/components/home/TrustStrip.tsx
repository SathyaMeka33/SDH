import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { Stethoscope, GraduationCap, HeartHandshake, MapPin, CreditCard } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { language, t } = useHospital();

  const trustItems = [
    {
      icon: Stethoscope,
      title: language === 'te' ? 'ప్రత్యేక చర్మ వైద్యం' : 'Dermatology Care',
      subtitle: language === 'te' ? 'స్కిన్ క్లినిక్' : 'Dedicated skin clinic',
    },
    {
      icon: GraduationCap,
      title: 'MD (Dermatology)',
      subtitle: language === 'te' ? 'నిష్ణాతులైన నిపుణులు' : 'Qualified specialist doctor',
    },
    {
      icon: HeartHandshake,
      title: language === 'te' ? 'రోగి-కేంద్రీకృతం' : 'Patient-Focused',
      subtitle: language === 'te' ? 'శ్రద్ధతో కూడిన సంప్రదింపు' : 'Attentive clinical diagnosis',
    },
    {
      icon: MapPin,
      title: language === 'te' ? 'భానుగుడి జంక్షన్' : 'Bhanugudi Junction',
      subtitle: language === 'te' ? 'కాకినాడ కేంద్రంలో' : 'Centrally located in Kakinada',
    },
    {
      icon: CreditCard,
      title: language === 'te' ? 'నగదు చెల్లింపు' : 'Cash Payment',
      subtitle: language === 'te' ? 'కౌంటర్ వద్ద పారదర్శకంగా' : 'Transparent counter billing',
    },
  ];

  return (
    <section className="w-full bg-[#F7FAFC] border-y border-[#DCE7F0] py-6" aria-label="Trust and Clinical Verification Information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#DCE7F0] shadow-2xs hover:border-[#0B5CAD]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#123B63] truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#607080] truncate font-medium">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
