import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { hospitalImages } from '../../assets/images';
import {
  User,
  GraduationCap,
  Sparkles,
  MapPin,
  CreditCard,
  Star,
  CheckCircle2,
  Maximize2,
  Calendar,
  Building,
} from 'lucide-react';

export const AboutHospital: React.FC = () => {
  const { hospitalData, navigateTo, setLightboxImage, t, language } = useHospital();

  const infoCards = [
    {
      icon: User,
      label: language === 'te' ? 'కన్సల్టెంట్ డాక్టర్' : 'Consultant Doctor',
      value: hospitalData.doctorName,
      subtext: language === 'te' ? 'చర్మవ్యాధి నిపుణులు' : 'Practicing Dermatologist',
    },
    {
      icon: GraduationCap,
      label: language === 'te' ? 'విద్యార్హత' : 'Qualification',
      value: hospitalData.doctorQualification,
      subtext: 'Doctor of Medicine (Dermatology)',
    },
    {
      icon: Sparkles,
      label: language === 'te' ? 'ప్రత్యేక నైపుణ్యం' : 'Specialization',
      value: language === 'te' ? 'చర్మవ్యాధుల నిర్ధారణ & చికిత్స' : hospitalData.doctorSpecialization,
      subtext: language === 'te' ? 'క్లినికల్ డెర్మటాలజీ' : 'Skin disease evaluation & care',
    },
    {
      icon: MapPin,
      label: language === 'te' ? 'ఆసుపత్రి చిరునామా' : 'Location',
      value: language === 'te' ? 'భానుగుడి జంక్షన్' : hospitalData.location.landmark,
      subtext: language === 'te' ? 'కాకినాడ, ఆంధ్రప్రదేశ్' : `${hospitalData.location.city}, ${hospitalData.location.state}`,
    },
    {
      icon: CreditCard,
      label: language === 'te' ? 'చెల్లింపు విధానం' : 'Payment Mode',
      value: t.topBar.paymentMode,
      subtext: language === 'te' ? 'రిసెప్షన్ కౌంటర్ వద్ద' : 'Accepted at reception counter',
    },
    {
      icon: Star,
      label: language === 'te' ? 'పబ్లిక్ డైరెక్టరీ రేటింగ్' : 'External Directory Rating',
      value: `${hospitalData.externalRating.score} / 5.0`,
      subtext: language === 'te' ? `${hospitalData.externalRating.totalRatings} రోగుల రేటింగ్‌ల ఆధారంగా` : `Based on ${hospitalData.externalRating.totalRatings} public directory ratings`,
    },
  ];

  return (
    <section id="about-hospital" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#607080] leading-relaxed">
            {t.about.p1}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hospital Authentic Photograph (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#DCE7F0] shadow-md bg-[#F7FAFC] group relative">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={hospitalImages.exterior.src}
                  alt={hospitalImages.exterior.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <button
                  onClick={() => setLightboxImage(hospitalImages.exterior)}
                  className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#123B63] p-2 rounded-lg shadow-sm text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{language === 'te' ? 'పెద్దదిగా చూడండి' : 'Enlarge Photo'}</span>
                </button>
              </div>

              <div className="p-4 bg-white border-t border-[#DCE7F0]">
                <h3 className="font-bold text-sm text-[#123B63]">
                  {language === 'te' ? 'ఆసుపత్రి ముఖద్వారం & ప్రవేశ మార్గం' : 'Hospital Frontage & Clinical Entrance'}
                </h3>
                <p className="text-xs text-[#607080] mt-1 leading-normal">
                  {language === 'te' ? 'సరోజినీ దేవి స్కిన్ హాస్పిటల్, జెఎమ్స్ సిఎన్ఆర్ టవర్స్, భానుగుడి జంక్షన్, కాకినాడ.' : 'Authentic photograph of Sarojini Devi Skin Hospital, Bhanugudi Junction, Kakinada.'}
                </p>
              </div>
            </div>

            {/* Rating reference box clearly labeled */}
            <div className="p-4 rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] text-xs space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-[#18324A]">
                <div className="flex text-amber-500">
                  {'★'.repeat(4)}{'☆'}
                </div>
                <span>{hospitalData.externalRating.score} / 5</span>
                <span className="text-[#607080] font-normal">
                  ({hospitalData.externalRating.totalRatings} {language === 'te' ? 'పబ్లిక్ రేటింగ్‌లు' : 'public directory ratings'})
                </span>
              </div>
              <p className="text-[11px] text-[#607080] leading-relaxed">
                {language === 'te'
                  ? '* గమనిక: ఈ రేటింగ్ పబ్లిక్ డైరెక్టరీల సమాచారం ఆధారంగా అందించబడింది.'
                  : '* Note: This rating is aggregated from third-party public listings and search directories. It is provided for general reference and does not represent an independently verified clinical audit.'}
              </p>
            </div>
          </div>

          {/* Right Column: About Description & Info Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-[#18324A] text-base leading-relaxed space-y-4">
              <p>
                <strong>{hospitalData.hospitalName}</strong> {t.about.p1}
              </p>
              <p className="text-[#607080]">
                {t.about.p2}
              </p>
            </div>

            {/* Key Information Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {infoCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] hover:border-[#0B5CAD]/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#607080] font-semibold">
                      {card.label}
                    </div>
                    <div className="text-sm font-bold text-[#123B63] mt-0.5">
                      {card.value}
                    </div>
                    <div className="text-[11px] text-[#607080] mt-0.5">
                      {card.subtext}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateTo('book-appointment', 'appointment-section')}
                className="inline-flex items-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'te' ? 'డాక్టర్ సంప్రదింపు బుక్ చేయండి' : 'Schedule a Doctor Consultation'}</span>
              </button>

              <button
                onClick={() => navigateTo('hospital', 'hospital-environment')}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5FAFE] text-[#123B63] border border-[#DCE7F0] text-sm font-semibold px-5 py-3 rounded-xl transition-all"
              >
                <span>{language === 'te' ? 'ఆసుపత్రి విభాగాలను చూడండి' : 'View Hospital Environment'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
