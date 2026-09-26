import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { hospitalImages } from '../../assets/images';
import {
  Building2,
  Maximize2,
  Sparkles,
  Users,
  Stethoscope,
  DoorOpen,
  Info,
} from 'lucide-react';

export const HospitalEnvironment: React.FC = () => {
  const { setLightboxImage, navigateTo, t, language } = useHospital();

  const galleryItems = [
    {
      image: hospitalImages.consultationRoom,
      badge: t.hospitalEnv.consultationTag,
      icon: Stethoscope,
      title: language === 'te' ? 'ప్రత్యేక సంప్రదింపు ఛాంబర్' : 'Organized Consultation Space',
      description: t.hospitalEnv.consultationCaption,
    },
    {
      image: hospitalImages.waitingArea,
      badge: t.hospitalEnv.waitingTag,
      icon: Users,
      title: language === 'te' ? 'సౌకర్యవంతమైన వెయిటింగ్ హాల్' : 'Comfortable Patient Waiting Area',
      description: t.hospitalEnv.waitingCaption,
    },
    {
      image: hospitalImages.exterior,
      badge: t.hospitalEnv.exteriorTag,
      icon: DoorOpen,
      title: language === 'te' ? 'ఆసుపత్రి ముఖద్వారం' : 'Accessible Clinical Facility',
      description: t.hospitalEnv.exteriorCaption,
    },
  ];

  return (
    <section id="hospital-environment" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.hospitalEnv.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
            {t.hospitalEnv.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#607080] leading-relaxed">
            {t.hospitalEnv.subtitle}
          </p>
        </div>

        {/* Real Photographs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-[#DCE7F0] bg-white shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo container with zoom trigger */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 cursor-pointer">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onClick={() => setLightboxImage(item.image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-[#123B63]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {item.badge}
                    </div>

                    {/* Fullscreen Button */}
                    <button
                      onClick={() => setLightboxImage(item.image)}
                      className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#123B63] p-2 rounded-lg shadow-sm text-xs font-medium flex items-center gap-1.5 transition-colors"
                      title={`View ${item.image.title} in full resolution`}
                      aria-label={`View ${item.image.title} in full resolution`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold">{language === 'te' ? 'చూడండి' : 'View'}</span>
                    </button>
                  </div>

                  {/* Caption & Environment Description */}
                  <div className="p-6 space-y-2">
                    <div className="flex items-center gap-2 text-[#0B5CAD] text-xs font-semibold">
                      <Icon className="w-4 h-4" />
                      <span>{item.image.tag}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#123B63]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#607080] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#DCE7F0] flex items-center justify-between text-xs text-[#607080]">
                    <span>{language === 'te' ? 'క్లినికల్ విభాగం' : 'Clinical Facility'}</span>
                    <span className="font-medium text-[#0B5CAD]">{language === 'te' ? 'భానుగుడి జంక్షన్' : 'Bhanugudi Junction'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Environmental Standards Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F7FAFC] border border-[#DCE7F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#123B63]">
                {language === 'te' ? 'పరిశుభ్రమైన, ప్రశాంతమైన వాతావరణం' : 'Clean, Calm & Professional Atmosphere'}
              </h4>
              <p className="text-xs sm:text-sm text-[#607080] mt-0.5 max-w-2xl">
                {language === 'te'
                  ? 'రోగుల సౌకర్యం, వ్యక్తిగత గోప్యత మరియు క్రమబద్ధమైన క్లినికల్ సంప్రదింపుల కోసం క్రమం తప్పకుండా శుభ్రత పాటించబడుతుంది.'
                  : 'We prioritize systematic daily sanitation, organized consultation scheduling, and a peaceful environment so that every patient consultation remains comfortable and private.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigateTo('book-appointment', 'appointment-section')}
            className="shrink-0 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-2xs transition-colors"
          >
            {language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Visit Our Clinic'}
          </button>
        </div>
      </div>
    </section>
  );
};
