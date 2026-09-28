import React from 'react';
import { Link } from 'react-router-dom';
import { useHospital } from '../../context/HospitalContext';
import { BrandLogo } from '../common/BrandLogo';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import {
  MapPin,
  CreditCard,
  User,
  ShieldCheck,
  Calendar,
  ChevronRight,
  ExternalLink,
  Settings,
  MessageCircle,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { hospitalData, setIsConfigModalOpen, t, language } = useHospital();

  return (
    <footer className="bg-[#123B63] text-white border-t border-[#0B5CAD]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/60">
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="bg-white/5 p-4 rounded-2xl border border-white/10 inline-block hover:bg-white/10 transition-colors">
              <BrandLogo size="md" />
            </Link>

            <p className="text-blue-100/90 text-sm leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <User className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{language === 'te' ? 'కన్సల్టెంట్ డాక్టర్' : 'Consultant Doctor'}</span>
                </div>
                <div className="font-semibold text-sm text-white mt-0.5">
                  {hospitalData.doctorName}
                </div>
                <div className="text-xs text-[#EAF5FC] font-medium">
                  {hospitalData.doctorQualification}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <CreditCard className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{language === 'te' ? 'చెల్లింపు విధానం' : 'Payment Mode'}</span>
                </div>
                <div className="font-semibold text-sm text-white mt-0.5">
                  {t.topBar.paymentMode}
                </div>
                <div className="text-[11px] text-blue-200/80">
                  {language === 'te' ? 'రిసెప్షన్ కౌంటర్ వద్ద' : 'Direct at reception counter'}
                </div>
              </div>
            </div>

            {/* Footer Language Switcher Option */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-blue-200 font-medium">
                {language === 'te' ? 'భాష మార్చుకోండి:' : 'Language:'}
              </span>
              <LanguageSwitcher variant="pill" className="bg-white/10 border-white/20 text-white" />
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/doctor"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{hospitalData.doctorName}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/treatments"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{t.nav.treatments}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/hospital"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{t.nav.hospital}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/patient-information"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{t.nav.patientInfo}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinical Care Focus (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              {language === 'te' ? 'చర్మ వైద్య విభాగాలు' : 'Dermatology Care'}
            </h3>
            <ul className="space-y-2.5 text-xs text-blue-100/90">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677C8]" />
                <Link to="/treatments" className="hover:text-white transition-colors">
                  {language === 'te' ? 'చర్మ వ్యాధులు' : 'Skin Diseases'}
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677C8]" />
                <Link to="/treatments" className="hover:text-white transition-colors">
                  {language === 'te' ? 'ఎగ్జిమా & చర్మపు మంట' : 'Eczema & Dermatitis'}
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677C8]" />
                <Link to="/treatments" className="hover:text-white transition-colors">
                  {language === 'te' ? 'సోరియాసిస్ సంరక్షణ' : 'Psoriasis Care'}
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677C8]" />
                <Link to="/treatments" className="hover:text-white transition-colors">
                  {language === 'te' ? 'ఫంగల్ ఇన్ఫెక్షన్లు & తామర' : 'Fungal & Ringworm'}
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677C8]" />
                <Link to="/treatments" className="hover:text-white transition-colors">
                  {language === 'te' ? 'మొటిమలు & మచ్చలు' : 'Acne & Blemishes'}
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1677C8]" />
                <Link to="/treatments" className="hover:text-white transition-colors">
                  {language === 'te' ? 'చర్మ అలర్జీలు' : 'Allergic Reactions'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              {language === 'te' ? 'ఆసుపత్రి చిరునామా' : 'Hospital Location'}
            </h3>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-blue-100">
                <MapPin className="w-4 h-4 text-[#1677C8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">
                    {language === 'te' ? 'సరోజినీ దేవి స్కిన్ హాస్పిటల్' : 'Sarojini Devi Skin Hospital'}
                  </strong>
                  <span>{language === 'te' ? 'భానుగుడి జంక్షన్' : hospitalData.location.landmark}</span>
                  <span className="block">{hospitalData.location.city}, {hospitalData.location.state}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=${hospitalData.contact.whatsappNumber || '917947142420'}&text=${encodeURIComponent(
                    language === 'te'
                      ? 'నమస్కారం డాక్టర్ సత్యనారాయణ గారు, సరోజినీ దేవి స్కిన్ హాస్పిటల్‌లో చర్మ సంప్రదింపు అపాయింట్‌మెంట్ కావాలి.'
                      : 'Hello Dr. Satyanarayana, I would like to book a dermatology consultation appointment at Sarojini Devi Skin Hospital.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t.nav.whatsappHospital}</span>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    hospitalData.location.mapsSearchQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white py-2 px-3 rounded-lg transition-colors border border-white/15"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#1677C8]" />
                  <span>{language === 'te' ? 'గూగుల్ మ్యాప్స్ దిశలు' : 'Get Directions on Google Maps'}</span>
                </a>

                <Link
                  to="/appointment"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#0B5CAD] hover:bg-[#1677C8] text-white py-2 px-3 rounded-lg transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.nav.bookAppointment}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Medical Disclaimer Banner */}
        <div className="py-6 border-b border-blue-900/60 text-xs text-blue-200/90 leading-relaxed flex items-start gap-3 bg-white/[0.03] p-4 rounded-xl mt-8">
          <ShieldCheck className="w-5 h-5 text-[#1677C8] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">
              {language === 'te' ? 'వైద్య గమనిక & డిస్‌క్లైమర్:' : 'Medical Notice & Disclaimer:'}
            </strong>
            {t.footer.disclaimer}
            <span className="block mt-1 text-blue-300/70">
              {language === 'te'
                ? '* అత్యవసర వైద్య పరిస్థితులు లేదా తీవ్రమైన అలర్జీ రియాక్షన్లు ఉన్న సందర్భంలో, దయచేసి వెంటనే సమీపంలోని 24 గంటల ఎమర్జెన్సీ ఆసుపత్రిని సంప్రదించండి.'
                : '* In case of severe medical emergencies or acute anaphylactic reactions, please visit the nearest 24-hour multi-specialty emergency hospital immediately.'}
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/80">
          <div className="text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {language === 'te' ? 'సరోజినీ దేవి స్కిన్ హాస్పిటల్, కాకినాడ. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.' : 'Sarojini Devi Skin Hospital, Kakinada. All rights reserved.'}
            </p>
            <p className="text-[11px] text-blue-300/60 mt-0.5">
              {language === 'te' ? `డాక్టర్: ${hospitalData.doctorName}, ${hospitalData.doctorQualification}. భానుగుడి జంక్షన్, కాకినాడ.` : `Doctor: ${hospitalData.doctorName}, ${hospitalData.doctorQualification}. Located at Bhanugudi Junction, Kakinada.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              {t.footer.privacyPolicy}
            </Link>
            <span className="text-blue-300/40">•</span>
            <Link
              to="/terms"
              className="hover:text-white transition-colors"
            >
              {t.footer.termsConditions}
            </Link>
            <span className="text-blue-300/40">•</span>
            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="text-[#1677C8] hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
              title="Hospital staff data customizer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{t.nav.hospitalEditor}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
