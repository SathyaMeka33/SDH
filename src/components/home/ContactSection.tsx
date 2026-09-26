import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CreditCard,
  User,
  GraduationCap,
  ExternalLink,
  Navigation,
  Calendar,
  Settings,
  AlertCircle,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { hospitalData, navigateTo, setIsConfigModalOpen, t, language } = useHospital();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    hospitalData.location.mapsSearchQuery
  )}`;

  return (
    <section id="contact-section" className="py-16 md:py-24 bg-[#F7FAFC] border-t border-[#DCE7F0] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
            {t.contact.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#607080] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hospital Verified Contact Information (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Main Info Card */}
            <div className="rounded-2xl border border-[#DCE7F0] bg-white p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="border-b border-[#DCE7F0] pb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#123B63]">
                  {language === 'te' ? 'సరోజినీ దేవి స్కిన్ హాస్పిటల్' : hospitalData.hospitalName}
                </h3>
                <div className="text-sm font-semibold text-[#0B5CAD] mt-1">
                  {hospitalData.doctorName}, {hospitalData.doctorQualification}
                </div>
                <div className="text-xs text-[#607080]">
                  {language === 'te' ? 'చర్మవ్యాధి నిపుణులు (క్లినికల్ డెర్మటాలజీ)' : 'Specialist in Skin Diseases & Clinical Dermatology'}
                </div>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#607080]">
                      {t.contact.addressLabel}
                    </span>
                    <strong className="block text-[#18324A] font-semibold mt-0.5">
                      {language === 'te' ? 'జెఎమ్స్ సిఎన్ఆర్ టవర్స్, భానుగుడి జంక్షన్' : hospitalData.location.landmark}
                    </strong>
                    <span className="text-[#607080] text-xs">
                      {language === 'te' ? 'కాకినాడ, ఆంధ్రప్రదేశ్, భారతదేశం' : `${hospitalData.location.city}, ${hospitalData.location.state}, ${hospitalData.location.country}`}
                    </span>
                  </div>
                </div>

                {/* Payment Mode */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0 mt-0.5">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#607080]">
                      {t.contact.paymentLabel}
                    </span>
                    <strong className="block text-[#18324A] font-semibold mt-0.5">
                      {t.topBar.paymentMode}
                    </strong>
                    <span className="text-[#607080] text-xs">
                      {t.appointment.paymentNoticeDesc}
                    </span>
                  </div>
                </div>

                {/* Consultation Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[#607080]">
                        {t.contact.timingsLabel}
                      </span>
                      {hospitalData.contact.isTimingsPlaceholder && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">
                          Configurable Placeholder
                        </span>
                      )}
                    </div>
                    <p className="text-[#18324A] font-medium text-xs mt-0.5">
                      {t.contact.timingsValue || hospitalData.contact.timings}
                    </p>
                  </div>
                </div>

                {/* Phone & Landline */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[#607080]">
                        {t.contact.phoneLabel}
                      </span>
                      {hospitalData.contact.isPhonePlaceholder && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">
                          Editable Placeholder
                        </span>
                      )}
                    </div>
                    {hospitalData.contact.isPhonePlaceholder ? (
                      <span className="text-[#607080] font-mono text-xs block mt-0.5">
                        {hospitalData.contact.phone}
                      </span>
                    ) : (
                      <div className="mt-0.5 space-y-0.5">
                        <a
                          href={`tel:${hospitalData.contact.phone}`}
                          className="text-[#0B5CAD] font-bold text-sm hover:underline block"
                        >
                          {hospitalData.contact.phone} {language === 'te' ? '(మొబైల్ / వాట్సాప్)' : '(Mobile / WhatsApp)'}
                        </a>
                        {hospitalData.contact.landline && (
                          <div className="text-xs text-[#18324A] font-medium">
                            {t.contact.landlineLabel}: <a href="tel:08842378585" className="hover:underline text-[#0B5CAD]">{hospitalData.contact.landline}</a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[#607080]">
                        {language === 'te' ? 'ఈమెయిల్ సంప్రదింపు' : 'Email Contact'}
                      </span>
                      {hospitalData.contact.isEmailPlaceholder && (
                        <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">
                          Placeholder
                        </span>
                      )}
                    </div>
                    <span className="text-[#607080] text-xs font-mono block mt-0.5">
                      {hospitalData.contact.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t border-[#DCE7F0] flex flex-wrap gap-2.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=${hospitalData.contact.whatsappNumber || '919703629727'}&text=${encodeURIComponent(
                    language === 'te'
                      ? 'నమస్కారం డాక్టర్ సత్యనారాయణ గారు / సరోజినీ దేవి స్కిన్ హాస్పిటల్, చర్మ సంప్రదింపు అపాయింట్‌మెంట్ గురించి తెలుసుకోవాలనుకుంటున్నాను.'
                      : 'Hello Dr. Satyanarayana / Sarojini Devi Skin Hospital, I would like to inquire about skin consultation.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-lg shadow-2xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.contact.whatsappBtn}</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-xs font-semibold px-3.5 py-2.5 rounded-lg shadow-2xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.contact.directionsBtn}</span>
                </a>

                <button
                  onClick={() => navigateTo('book-appointment', 'appointment-section')}
                  className="inline-flex items-center gap-1.5 bg-[#EAF5FC] hover:bg-blue-100 text-[#0B5CAD] text-xs font-semibold px-3.5 py-2.5 rounded-lg border border-[#0B5CAD]/20 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.contact.bookBtn}</span>
                </button>

                <button
                  onClick={() => setIsConfigModalOpen(true)}
                  className="inline-flex items-center gap-1 text-xs text-[#607080] hover:text-[#0B5CAD] font-medium px-2.5 py-2 rounded-lg border border-[#DCE7F0] transition-colors ml-auto"
                  title="Edit phone number, timings, or email"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>{language === 'te' ? 'సవరించు' : 'Edit'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Bhanugudi Junction Kakinada Embed & Route Guide (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-[#DCE7F0] bg-white overflow-hidden shadow-2xs">
              {/* Map Header */}
              <div className="p-4 bg-white border-b border-[#DCE7F0] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#123B63]">
                    {language === 'te' ? 'లొకేషన్ మ్యాప్: భానుగుడి జంక్షన్' : 'Location Map: Bhanugudi Junction'}
                  </h4>
                  <p className="text-xs text-[#607080]">
                    {language === 'te' ? 'కాకినాడ, ఆంధ్రప్రదేశ్, భారతదేశం' : 'Kakinada, Andhra Pradesh, India'}
                  </p>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0B5CAD] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>{language === 'te' ? 'గూగుల్ మ్యాప్స్‌లో తెరవండి' : 'Open Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Maps Frame */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 relative">
                <iframe
                  title="Sarojini Devi Skin Hospital Location - Bhanugudi Junction Kakinada"
                  src="https://maps.google.com/maps?q=Bhanugudi+Junction+Kakinada+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Local Accessibility Guidance */}
              <div className="p-4 bg-[#F7FAFC] border-t border-[#DCE7F0] text-xs text-[#607080] space-y-2">
                <div className="font-semibold text-[#18324A] flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#0B5CAD]" />
                  <span>{language === 'te' ? 'రవాణా సౌకర్యాలు & మార్గదర్శకత్వం' : 'Local Transit & Landmark Directions'}</span>
                </div>
                <p className="leading-relaxed">
                  {language === 'te'
                    ? 'భానుగుడి జంక్షన్ కాకినాడ నగరంలో ప్రధాన కూడలి. మెయిన్ రోడ్డు, సినిమా రోడ్డు మరియు కాకినాడ టౌన్ రైల్వే స్టేషన్ నుండి ఆటో రిక్షాలు మరియు బస్సుల సౌకర్యం సులభంగా అందుబాటులో ఉంటుంది.'
                    : 'Bhanugudi Junction is one of Kakinada\'s prominent central crossroads, well-served by auto-rickshaws, city buses, and local transport connecting Main Road, Cinema Road, and Kakinada Town Railway Station.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
