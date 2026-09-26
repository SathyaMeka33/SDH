import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { hospitalImages } from '../../assets/images';
import {
  Stethoscope,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Calendar,
  Info,
  Maximize2,
  FileText,
  CheckCircle2,
  Settings,
} from 'lucide-react';

export const DoctorProfile: React.FC = () => {
  const { hospitalData, navigateTo, setLightboxImage, setIsConfigModalOpen, t, language } = useHospital();

  return (
    <section id="doctor-profile" className="py-16 md:py-24 bg-[#F7FAFC] border-t border-[#DCE7F0] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Consultation Room Photo as Supporting Visual (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#DCE7F0] bg-white group">
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img
                  src={hospitalImages.consultationRoom.src}
                  alt={hospitalImages.consultationRoom.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/70 via-transparent to-transparent" />

                <button
                  onClick={() => setLightboxImage(hospitalImages.consultationRoom)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#123B63] p-2 rounded-lg shadow-sm text-xs font-medium flex items-center gap-1.5 transition-colors"
                  title="Enlarge Consultation Chamber photo"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-blue-200">
                    {t.doctor.consultationChamber}
                  </div>
                  <div className="text-sm font-bold">
                    {language === 'te' ? 'డాక్టర్ సత్యనారాయణ గారి పరీక్షా గది' : "Dr. Satyanarayana's Examination Room"}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-[#DCE7F0] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#607080]">{language === 'te' ? 'సంప్రదింపు విధానం:' : 'Consultation Mode:'}</span>
                  <span className="font-semibold text-[#18324A]">{language === 'te' ? 'ప్రత్యక్ష క్లినికల్ పరీక్ష' : 'In-person Physical Examination'}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#607080]">{language === 'te' ? 'చెల్లింపు:' : 'Payment:'}</span>
                  <span className="font-semibold text-[#0B5CAD]">{t.topBar.paymentMode}</span>
                </div>
              </div>
            </div>

            {/* Note on Doctor Portrait / Verified Credentials */}
            <div className="mt-4 p-3.5 rounded-xl bg-white border border-[#DCE7F0] text-xs text-[#607080] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#0B5CAD] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span>
                  {language === 'te'
                    ? 'ఆసుపత్రి వివరాలను మరియు సమాచారాన్ని సవరించడానికి '
                    : 'Official doctor portrait and additional verified medical affiliations can be uploaded directly via the '}
                </span>
                <button
                  onClick={() => setIsConfigModalOpen(true)}
                  className="text-[#0B5CAD] font-medium hover:underline inline-flex items-center gap-0.5"
                >
                  <span>{t.nav.hospitalEditor}</span>
                  <Settings className="w-3 h-3" />
                </button>
                <span>{language === 'te' ? ' ఉపయోగించండి.' : ' once confirmed.'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Profile Details (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>{t.doctor.badge}</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
                {t.doctor.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg">
                <span className="font-semibold text-[#0B5CAD] flex items-center gap-1.5">
                  <GraduationCap className="w-5 h-5 text-[#0B5CAD]" />
                  <span>{hospitalData.doctorQualification}</span>
                </span>
                <span className="text-[#DCE7F0] hidden sm:inline">•</span>
                <span className="text-[#18324A] font-medium">
                  {t.doctor.specialization}
                </span>
              </div>
            </div>

            {/* Exact provided bio & medical responsibility */}
            <div className="bg-white p-6 rounded-2xl border border-[#DCE7F0] shadow-2xs space-y-4">
              <p className="text-base sm:text-lg text-[#18324A] leading-relaxed font-normal">
                {t.doctor.bioParagraph1}
              </p>

              <p className="text-sm text-[#607080] leading-relaxed">
                {t.doctor.bioParagraph2}
              </p>
            </div>

            {/* Clinical Ethics & Consultation Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-white border border-[#DCE7F0] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0B5CAD] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#123B63]">
                    {language === 'te' ? 'క్షుణ్ణమైన క్లినికల్ పరీక్ష' : 'In-Depth Clinical Exam'}
                  </h3>
                  <p className="text-xs text-[#607080] mt-0.5">
                    {t.doctor.highlight1}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#DCE7F0] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0B5CAD] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#123B63]">
                    {language === 'te' ? 'బాధ్యతాయుతమైన ప్రిస్క్రిప్షన్' : 'Responsible Prescriptions'}
                  </h3>
                  <p className="text-xs text-[#607080] mt-0.5">
                    {t.doctor.highlight2}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => navigateTo('book-appointment', 'appointment-section')}
                className="inline-flex items-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.doctor.bookWithDoctorBtn}</span>
              </button>

              <button
                onClick={() => navigateTo('treatments', 'treatments-section')}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5FAFE] text-[#123B63] border border-[#DCE7F0] text-sm font-semibold px-5 py-3 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-[#0B5CAD]" />
                <span>{language === 'te' ? 'చర్మ సమస్యల వివరాలు చూడండి' : 'View Dermatology Concerns Handled'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
