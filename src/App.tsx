/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { HospitalProvider, useHospital } from './context/HospitalContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { TrustStrip } from './components/home/TrustStrip';
import { AboutHospital } from './components/home/AboutHospital';
import { DoctorProfile } from './components/home/DoctorProfile';
import { TreatmentsSection } from './components/home/TreatmentsSection';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { HospitalEnvironment } from './components/home/HospitalEnvironment';
import { PatientJourney } from './components/home/PatientJourney';
import { AppointmentSection } from './components/home/AppointmentSection';
import { ContactSection } from './components/home/ContactSection';
import { MedicalDisclaimer } from './components/home/MedicalDisclaimer';
import { ConcernDetailModal } from './components/modals/ConcernDetailModal';
import { LightboxModal } from './components/modals/LightboxModal';
import { ConfigModal } from './components/modals/ConfigModal';
import {
  AboutPage,
  DoctorPage,
  TreatmentsPage,
  HospitalPage,
  PatientInfoPage,
  ContactPage,
  AppointmentPage,
  PrivacyPolicyPage,
  TermsPage,
  NotFoundPage,
} from './components/pages/Pages';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. About Hospital */}
      <AboutHospital />

      {/* 4. Doctor Profile */}
      <DoctorProfile />

      {/* 5. Skin Disease / Treatments Section */}
      <TreatmentsSection />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Hospital Environment (Real Photographs) */}
      <HospitalEnvironment />

      {/* 8. Patient Journey */}
      <PatientJourney />

      {/* 9. Appointment Section */}
      <AppointmentSection />

      {/* 10. Contact & Location Section */}
      <ContactSection />

      {/* 11. Medical Disclaimer */}
      <MedicalDisclaimer />
    </main>
  );
};

const MainLayout: React.FC = () => {
  const { hospitalData, navigateTo, language } = useHospital();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#18324A] font-sans selection:bg-[#EAF5FC] selection:text-[#0B5CAD]">
      <Header />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/patient-information" element={<PatientInfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Backward compatibility redirects */}
          <Route path="/patient-info" element={<Navigate to="/patient-information" replace />} />
          <Route path="/book-appointment" element={<Navigate to="/appointment" replace />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />

      {/* Global Interactive Modals */}
      <ConcernDetailModal />
      <LightboxModal />
      <ConfigModal />

      {/* Desktop Floating WhatsApp Quick Consultation Button */}
      <a
        href={`https://api.whatsapp.com/send?phone=${hospitalData.contact.whatsappNumber || '919703629727'}&text=${encodeURIComponent(
          language === 'te'
            ? 'నమస్కారం డాక్టర్ సత్యనారాయణ గారు, సరోజినీ దేవి స్కిన్ హాస్పిటల్‌లో చర్మ సంప్రదింపు అపాయింట్‌మెంట్ కావాలి.'
            : 'Hello Dr. Satyanarayana / Sarojini Devi Skin Hospital, I would like to book a dermatology consultation appointment.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group"
        aria-label="Chat on WhatsApp with Sarojini Devi Skin Hospital"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div className="text-left leading-tight pr-1">
          <span className="block text-[10px] text-emerald-200 uppercase font-bold tracking-wider">
            {language === 'te' ? 'హాస్పిటల్ వాట్సాప్' : 'Hospital WhatsApp'}
          </span>
          <span className="text-xs font-bold">
            {language === 'te' ? 'వాట్సాప్‌లో సంప్రదించండి' : 'Book via WhatsApp'}
          </span>
        </div>
      </a>

      {/* Mobile Sticky Quick-Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#DCE7F0] p-2.5 shadow-lg flex items-center gap-2">
        <a
          href={`https://api.whatsapp.com/send?phone=${hospitalData.contact.whatsappNumber || '919703629727'}&text=${encodeURIComponent(
            language === 'te'
              ? 'నమస్కారం డాక్టర్ సత్యనారాయణ గారు, సరోజినీ దేవి స్కిన్ హాస్పిటల్‌లో చర్మ సంప్రదింపు అపాయింట్‌మెంట్ తీసుకోవాలనుకుంటున్నాను.'
              : 'Hello Dr. Satyanarayana, I would like to schedule a skin consultation at Sarojini Devi Skin Hospital, Bhanugudi Junction.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-emerald-600 text-white text-xs font-bold active:bg-emerald-700"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>{language === 'te' ? 'వాట్సాప్' : 'WhatsApp'}</span>
        </a>

        <a
          href={hospitalData.contact.isPhonePlaceholder ? '#contact-section' : `tel:${hospitalData.contact.phone}`}
          onClick={(e) => {
            if (hospitalData.contact.isPhonePlaceholder) {
              e.preventDefault();
              navigateTo('/contact', 'contact-section');
            }
          }}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] text-xs font-bold text-[#123B63] active:bg-slate-100"
        >
          <Phone className="w-4 h-4 text-[#0B5CAD]" />
          <span>{language === 'te' ? 'కాల్' : 'Call'}</span>
        </a>

        <Link
          to="/appointment"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#0B5CAD] text-white text-xs font-bold shadow-sm active:bg-[#1677C8]"
        >
          <Calendar className="w-4 h-4" />
          <span>{language === 'te' ? 'బుకింగ్' : 'Book Visit'}</span>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HospitalProvider>
      <MainLayout />
    </HospitalProvider>
  );
}
