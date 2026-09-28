import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHospital } from '../../context/HospitalContext';
import { BrandLogo } from '../common/BrandLogo';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import {
  MapPin,
  Calendar,
  Menu,
  X,
  CreditCard,
  Settings,
  Languages,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { hospitalData, setIsConfigModalOpen, t, language, setLanguage } = useHospital();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.doctor, path: '/doctor' },
    { label: t.nav.treatments, path: '/treatments' },
    { label: t.nav.hospital, path: '/hospital' },
    { label: t.nav.patientInfo, path: '/patient-information' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-200">
      {/* Top Clinical Announcement Bar */}
      <div className="hidden md:block bg-[#123B63] text-white text-xs py-2 px-4 sm:px-6 border-b border-[#0B5CAD]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Location & Payment Credentials */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5 text-blue-100 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#1677C8] shrink-0" />
              <span>{t.topBar.location}</span>
            </span>
            <span className="hidden sm:inline-block text-blue-300/40">|</span>
            <span className="flex items-center gap-1.5 text-blue-100">
              <CreditCard className="w-3.5 h-3.5 text-[#1677C8] shrink-0" />
              <span>
                {t.topBar.paymentBadge}
                <strong className="text-white font-semibold">{t.topBar.paymentMode}</strong>
              </span>
            </span>
          </div>

          {/* Quick Actions / Language / Admin Preview */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher variant="compact" />

            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="flex items-center gap-1 text-[11px] text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 transition-all px-2 py-0.5 rounded-full"
              title="Configure clinic contact details and placeholders"
            >
              <Settings className="w-3 h-3 text-[#1677C8]" />
              <span className="hidden md:inline">{t.nav.hospitalEditor}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-shadow duration-200 ${
          isScrolled ? 'shadow-md border-b border-[#DCE7F0]' : 'border-b border-[#DCE7F0]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo Lockup */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5CAD] rounded-lg p-1 -ml-1 transition-transform hover:scale-[1.01]"
            aria-label="Sarojini Devi Skin Hospital Home"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-[#0B5CAD] font-semibold bg-[#EAF5FC]'
                      : 'text-[#18324A] hover:text-[#0B5CAD] hover:bg-[#F5FAFE]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0B5CAD] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Header Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LanguageSwitcher variant="pill" />

            {/* Direct WhatsApp Consultation Button */}
            <a
              href={`https://api.whatsapp.com/send?phone=${hospitalData.contact.whatsappNumber || '919703629727'}&text=${encodeURIComponent(
                language === 'te'
                  ? 'నమస్కారం డాక్టర్ సత్యనారాయణ గారు, సరోజినీ దేవి స్కిన్ హాస్పిటల్‌లో చర్మ సంప్రదింపు అపాయింట్‌మెంట్ కావాలి.'
                  : 'Hello Dr. Satyanarayana, I would like to book a skin consultation at Sarojini Devi Skin Hospital.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2.5 rounded-lg transition-colors"
              title="Chat with Hospital on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>{t.nav.whatsappHospital}</span>
            </a>

            {/* Primary Appointment Button */}
            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-4.5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B5CAD]"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookAppointment}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
              className="px-2.5 py-1.5 rounded-lg border border-[#0B5CAD]/30 bg-[#EAF5FC] text-[#0B5CAD] text-xs font-bold flex items-center gap-1 active:scale-95"
              aria-label="Toggle Language"
            >
              <Languages className="w-3.5 h-3.5 text-[#0B5CAD]" />
              <span>{language === 'en' ? 'తెలుగు' : 'EN'}</span>
            </button>

            <Link
              to="/appointment"
              onClick={() => setIsMobileMenuOpen(false)}
              className="sm:hidden inline-flex items-center gap-1.5 bg-[#0B5CAD] text-white text-xs font-semibold px-2.5 py-2 rounded-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'te' ? 'బుకింగ్' : 'Book'}</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-[#18324A] hover:text-[#0B5CAD] hover:bg-[#F5FAFE] rounded-lg border border-[#DCE7F0] transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 md:top-[116px] z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-white border-b border-[#DCE7F0] shadow-xl p-6 max-h-[85vh] overflow-y-auto">
            {/* Language Switcher in Drawer */}
            <div className="mb-4">
              <LanguageSwitcher variant="drawer" />
            </div>

            {/* Doctor info banner on mobile */}
            <div className="p-3.5 rounded-xl bg-[#EAF5FC] border border-[#0B5CAD]/20 mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#607080]">
                  {language === 'te' ? 'కన్సల్టెంట్ డెర్మటాలజిస్ట్' : 'Consultant Dermatologist'}
                </div>
                <div className="text-sm font-bold text-[#123B63]">{hospitalData.doctorName}</div>
                <div className="text-xs font-semibold text-[#0B5CAD]">{hospitalData.doctorQualification}</div>
              </div>
              <div className="text-right text-xs">
                <span className="inline-block px-2 py-0.5 rounded bg-white text-[#123B63] font-medium border border-[#DCE7F0]">
                  {t.topBar.paymentMode}
                </span>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EAF5FC] text-[#0B5CAD] font-semibold'
                        : 'text-[#18324A] hover:bg-[#F7FAFC]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#607080]" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="mt-6 pt-4 border-t border-[#DCE7F0] space-y-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${hospitalData.contact.whatsappNumber || '919703629727'}&text=${encodeURIComponent(
                  language === 'te'
                    ? 'నమస్కారం డాక్టర్ సత్యనారాయణ గారు, సరోజినీ దేవి స్కిన్ హాస్పిటల్‌లో చర్మ సంప్రదింపు అపాయింట్‌మెంట్ కావాలి.'
                    : 'Hello Dr. Satyanarayana, I would like to book a dermatology consultation appointment at Sarojini Devi Skin Hospital.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-4 rounded-xl shadow-sm text-sm"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>{language === 'te' ? 'వాట్సాప్ ద్వారా సంప్రదించండి' : 'Chat & Book via WhatsApp'}</span>
              </a>

              <Link
                to="/appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white font-semibold py-3.5 px-4 rounded-xl shadow-sm text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookAppointment}</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#F7FAFC] border border-[#DCE7F0] text-[#123B63] font-semibold py-3 px-4 rounded-xl text-sm hover:border-[#0B5CAD]"
              >
                <MapPin className="w-4 h-4 text-[#0B5CAD]" />
                <span>{language === 'te' ? 'ఆసుపత్రి చిరునామా & మార్గం' : 'Hospital Location & Directions'}</span>
              </Link>

              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsConfigModalOpen(true);
                  }}
                  className="text-xs text-[#0B5CAD] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>{t.nav.hospitalEditor}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
