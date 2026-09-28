import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { hospitalImages } from '../../assets/images';
import {
  Calendar,
  MapPin,
  ShieldCheck,
  Stethoscope,
  CreditCard,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { hospitalData, navigateTo, setLightboxImage, t, language } = useHospital();

  return (
    <section id="top" className="relative bg-white pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden">
      {/* Subtle background ambient tint */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-b from-[#EAF5FC]/50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clinical Presentation & Core CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Specialty Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF5FC] border border-[#0B5CAD]/20 text-[#0B5CAD] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0B5CAD] animate-pulse" />
              <span>{t.hero.verifiedBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#123B63] leading-[1.18] tracking-tight">
              {language === 'te' ? (
                <>
                  కాకినాడలో విశ్వసనీయ <span className="text-[#0B5CAD]">చర్మవ్యాధి వైద్యం</span>
                </>
              ) : (
                <>
                  Trusted Dermatology Care in <span className="text-[#0B5CAD]">Kakinada</span>
                </>
              )}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#607080] leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* Doctor & Location Snapshot Card */}
            <div className="p-4 rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] flex flex-wrap items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#607080] font-medium">
                    {language === 'te' ? 'కన్సల్టెంట్ డెర్మటాలజిస్ట్' : 'Consultant Dermatologist'}
                  </div>
                  <div className="text-sm font-bold text-[#123B63]">{hospitalData.doctorName}</div>
                  <div className="text-xs text-[#0B5CAD] font-semibold">{hospitalData.doctorQualification}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l sm:border-[#DCE7F0] sm:pl-4 pl-0">
                <div className="w-10 h-10 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#607080] font-medium">
                    {language === 'te' ? 'ఆసుపత్రి చిరునామా' : 'Clinic Location'}
                  </div>
                  <div className="text-sm font-bold text-[#123B63]">
                    {language === 'te' ? 'భానుగుడి జంక్షన్' : 'Bhanugudi Junction'}
                  </div>
                  <div className="text-xs text-[#607080]">
                    {language === 'te' ? 'కాకినాడ, ఆంధ్రప్రదేశ్' : 'Kakinada, Andhra Pradesh'}
                  </div>
                </div>
              </div>
            </div>

            {/* Primary & Secondary CTAs with WhatsApp Automation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => navigateTo('book-appointment', 'appointment-section')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-base font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5CAD]"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.bookBtn}</span>
              </button>

              <a
                href={`https://api.whatsapp.com/send?phone=${hospitalData.contact.whatsappNumber || '917947142420'}&text=${encodeURIComponent(
                  language === 'te'
                    ? 'నమస్కారం డాక్టర్ సత్యనారాయణ గారు, సరోజినీ దేవి స్కిన్ హాస్పిటల్‌లో చర్మ సంప్రదింపు అపాయింట్‌మెంట్ తీసుకోవాలనుకుంటున్నాను.'
                    : 'Hello Dr. Satyanarayana, I would like to schedule a dermatology consultation at Sarojini Devi Skin Hospital.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-5 py-3.5 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.hero.whatsappBtn}</span>
              </a>

              <button
                onClick={() => navigateTo('contact', 'contact-section')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5FAFE] text-[#123B63] hover:text-[#0B5CAD] border border-[#DCE7F0] hover:border-[#0B5CAD]/40 text-base font-semibold px-5 py-3.5 rounded-xl transition-all"
              >
                <span>{t.hero.contactBtn}</span>
                <ChevronRight className="w-4 h-4 text-[#0B5CAD]" />
              </button>
            </div>

            {/* Trust and Clinical Ethics Indicators */}
            <div className="pt-3 border-t border-[#DCE7F0]/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#607080]">
              <span className="flex items-center gap-1.5 font-medium text-[#18324A]">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAD] shrink-0" />
                <span>{language === 'te' ? 'నిష్ణాతులైన డెర్మటాలజిస్ట్ (MD)' : 'Qualified Dermatologist (MD)'}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#18324A]">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAD] shrink-0" />
                <span>{language === 'te' ? 'ప్రధాన వైద్యం: చర్మవ్యాధులు' : 'Primary Treatment: Skin Diseases'}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-[#18324A]">
                <CreditCard className="w-4 h-4 text-[#0B5CAD] shrink-0" />
                <span>{t.topBar.paymentBadge}<strong>{t.topBar.paymentMode}</strong></span>
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Hospital Exterior Photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DCE7F0] bg-white group">
              {/* Actual Hospital Exterior Photograph */}
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src={hospitalImages.exterior.src}
                  alt={hospitalImages.exterior.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Subtle vignette gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/80 via-transparent to-black/10" />

                {/* Lightbox Trigger Button */}
                <button
                  onClick={() => setLightboxImage(hospitalImages.exterior)}
                  className="absolute top-3.5 right-3.5 bg-white/90 hover:bg-white text-[#123B63] p-2 rounded-lg shadow-sm backdrop-blur-xs transition-colors"
                  aria-label="View hospital exterior photo in full resolution"
                  title="View full image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Floating Hospital Tag Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#0B5CAD] text-[11px] font-semibold tracking-wide uppercase mb-1">
                    {language === 'te' ? 'యదార్థ ఆసుపత్రి భవనం' : 'Authentic Hospital Facility'}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold drop-shadow-sm leading-snug">
                    {language === 'te' ? 'సరోజినీ దేవి స్కిన్ హాస్పిటల్' : hospitalData.hospitalName}
                  </h2>
                  <p className="text-xs text-blue-100 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-300" />
                    <span>{language === 'te' ? 'భానుగుడి జంక్షన్, కాకినాడ' : 'Bhanugudi Junction, Kakinada'}</span>
                  </p>
                </div>
              </div>

              {/* Informational Sub-card attached to image */}
              <div className="p-4 bg-white flex items-center justify-between text-xs border-t border-[#DCE7F0]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[#18324A] font-medium">
                    {language === 'te' ? 'ప్రత్యక్ష కన్సల్టేషన్ అందుబాటులో ఉంది' : 'In-Person Consultation Available'}
                  </span>
                </div>
                <div className="text-[#607080]">
                  {t.topBar.paymentBadge}<strong className="text-[#123B63] font-semibold">{t.topBar.paymentMode}</strong>
                </div>
              </div>
            </div>

            {/* Decorative back subtle accent card */}
            <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl bg-[#EAF5FC] border border-[#0B5CAD]/20" />
          </div>
        </div>
      </div>
    </section>
  );
};
