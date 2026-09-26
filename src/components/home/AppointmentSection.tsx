import React, { useState } from 'react';
import { useHospital } from '../../context/HospitalContext';
import { getWhatsAppAppointmentUrl } from '../../utils/whatsapp';
import {
  Calendar,
  Phone,
  Clock,
  User,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  ShieldCheck,
  Printer,
  RotateCcw,
  Sparkles,
  MessageCircle,
  Send,
  ExternalLink,
} from 'lucide-react';

interface AppointmentFormData {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reasonForVisit: string;
  message: string;
  botHoneypot: string; // Anti-spam honeypot
  autoOpenWhatsApp: boolean;
}

export const AppointmentSection: React.FC = () => {
  const { hospitalData, t, language } = useHospital();

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    reasonForVisit: 'Skin Disease / Rash',
    message: '',
    botHoneypot: '',
    autoOpenWhatsApp: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    referenceId: string;
    patientName: string;
    date: string;
    time: string;
    phone: string;
    reason: string;
    notes?: string;
    timestamp: string;
    whatsAppUrl: string;
  } | null>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter patient full name';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name should be at least 2 characters';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Please provide contact phone number';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred consultation date';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.preferredDate = 'Date cannot be in the past';
      }
    }

    if (!formData.reasonForVisit) {
      errs.reasonForVisit = 'Please select a reason for consultation';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap
    if (formData.botHoneypot) {
      console.warn('Bot submission blocked');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Generate appointment reference and WhatsApp automation payload
    const refCode = `SDS-${Math.floor(100000 + Math.random() * 900000)}`;
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const payload = {
      referenceId: refCode,
      patientName: formData.fullName,
      phone: formData.phone,
      date: formData.preferredDate,
      timeSlot: formData.preferredTime,
      reason: formData.reasonForVisit,
      notes: formData.message,
      timestamp: nowTime,
    };

    const targetWhatsAppUrl = getWhatsAppAppointmentUrl(payload, hospitalData, language);

    setTimeout(() => {
      setSubmittedBooking({
        referenceId: refCode,
        patientName: formData.fullName,
        date: formData.preferredDate,
        time: formData.preferredTime,
        phone: formData.phone,
        reason: formData.reasonForVisit,
        notes: formData.message,
        timestamp: nowTime,
        whatsAppUrl: targetWhatsAppUrl,
      });

      setIsSubmitting(false);

      // Automatically dispatch WhatsApp message to hospital if requested
      if (formData.autoOpenWhatsApp) {
        window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      reasonForVisit: 'Skin Disease / Rash',
      message: '',
      botHoneypot: '',
      autoOpenWhatsApp: true,
    });
    setErrors({});
  };

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  return (
    <section id="appointment-section" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.appointment.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
              {t.appointment.title}
            </h2>

            <p className="text-base sm:text-lg text-[#607080] leading-relaxed">
              {t.appointment.description}
            </p>

            {/* WhatsApp Integration Feature Callout */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{t.appointment.whatsappBannerTitle}</span>
              </div>
              <p className="text-xs text-emerald-900/80 leading-relaxed">
                {t.appointment.whatsappBannerDesc}
              </p>
            </div>

            {/* Cash Payment Notice Card */}
            <div className="p-4 rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#123B63]">
                <CreditCard className="w-4 h-4 text-[#0B5CAD]" />
                <span>{t.appointment.paymentNoticeTitle}</span>
              </div>
              <p className="text-xs text-[#607080] leading-relaxed">
                {t.appointment.paymentNoticeDesc}
              </p>
            </div>

            {/* Hospital Contact Info Box */}
            <div className="p-4 rounded-xl bg-[#EAF5FC]/50 border border-[#0B5CAD]/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B5CAD]">
                <Clock className="w-4 h-4" />
                <span>{t.appointment.timingsNoticeTitle}</span>
              </div>
              <p className="text-xs text-[#18324A]">
                {hospitalData.contact.timings}
              </p>
              <div className="text-[11px] text-[#607080] pt-1 border-t border-[#0B5CAD]/15">
                {language === 'te' ? 'చిరునామా: భానుగుడి జంక్షన్, కాకినాడ, ఆంధ్రప్రదేశ్' : 'Location: Bhanugudi Junction, Kakinada, Andhra Pradesh'}
              </div>
            </div>

            {/* Privacy Safeguard Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#607080] space-y-1">
              <div className="font-semibold text-[#18324A] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.appointment.privacyNoticeTitle}</span>
              </div>
              <p className="leading-relaxed">
                {t.appointment.privacyNoticeDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Appointment Form / Confirmation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#DCE7F0] bg-white p-6 sm:p-8 shadow-sm">
              {submittedBooking ? (
                /* Success State with WhatsApp Action */
                <div className="text-center space-y-6 py-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#123B63]">
                      {t.appointment.successTitle}
                    </h3>
                    <p className="text-sm text-[#607080] max-w-md mx-auto">
                      {t.appointment.successDesc}
                    </p>
                  </div>

                  {/* WhatsApp Direct Action Banner */}
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-left max-w-md mx-auto space-y-3">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>{t.appointment.whatsappBannerTitle}</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      {language === 'te'
                        ? `మీ అపాయింట్‌మెంట్ వివరాలు సరోజినీ దేవి స్కిన్ హాస్పిటల్ వాట్సాప్ (${hospitalData.contact.phone}) కు పంపడానికి సిద్ధంగా ఉన్నాయి. వాట్సాప్ తెరవకపోతే క్రింది బటన్ నొక్కండి.`
                        : `Your appointment details have been compiled to send directly to Sarojini Devi Skin Hospital WhatsApp: ${hospitalData.contact.phone}. If WhatsApp did not open automatically, tap the button below.`}
                    </p>
                    <a
                      href={submittedBooking.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm text-sm transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.appointment.sendWhatsappNowBtn}</span>
                    </a>
                  </div>

                  {/* Summary Ticket */}
                  <div className="bg-[#F7FAFC] border border-[#DCE7F0] rounded-xl p-5 text-left text-xs space-y-3 max-w-md mx-auto">
                    <div className="flex justify-between items-center border-b border-[#DCE7F0] pb-2.5">
                      <span className="text-[#607080]">{t.appointment.ticketRef}:</span>
                      <strong className="font-mono text-sm text-[#0B5CAD] font-bold">
                        {submittedBooking.referenceId}
                      </strong>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#607080]">{t.appointment.ticketPatient}:</span>
                      <span className="font-semibold text-[#18324A]">{submittedBooking.patientName}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#607080]">{t.appointment.phoneLabel}:</span>
                      <span className="font-medium text-[#18324A]">{submittedBooking.phone}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#607080]">{t.appointment.dateLabel}:</span>
                      <span className="font-medium text-[#18324A]">{submittedBooking.date}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#607080]">{t.appointment.timeSlotLabel}:</span>
                      <span className="font-medium text-[#18324A]">{submittedBooking.time}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[#607080]">{t.appointment.reasonLabel}:</span>
                      <span className="font-medium text-[#0B5CAD]">{submittedBooking.reason}</span>
                    </div>

                    <div className="border-t border-[#DCE7F0] pt-2 flex justify-between items-center text-[11px] text-[#607080]">
                      <span>{t.appointment.ticketLocation}:</span>
                      <span className="font-medium text-[#18324A]">
                        {language === 'te' ? 'భానుగుడి జంక్షన్, కాకినాడ' : 'Bhanugudi Junction, Kakinada'}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left max-w-md mx-auto space-y-1">
                    <strong>
                      {language === 'te' ? 'సంప్రదింపు రోజున గుర్తుంచుకోవలసిన విషయాలు:' : 'Important Patient Checklist for Consultation Day:'}
                    </strong>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                      <li>{language === 'te' ? 'గతంలో వాడిన చర్మ మందుల ప్రిస్క్రిప్షన్లు వెంట తీసుకురండి.' : 'Please bring previous skin prescription slips & current creams.'}</li>
                      <li>{language === 'te' ? 'ఫీజు రిసెప్షన్ వద్ద నగదు (Cash) రూపంలో మాత్రమే చెల్లించాలి.' : 'Consultation and medicine charges are payable via Cash at the hospital counter.'}</li>
                      <li>{language === 'te' ? 'ప్రారంభ ఎంట్రీ కొరకు 10 నిమిషాల ముందుగా విచ్చేయండి.' : 'Arrive 10 minutes prior to complete initial reception entry.'}</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 bg-[#F7FAFC] hover:bg-slate-100 text-[#123B63] border border-[#DCE7F0] text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>{language === 'te' ? 'స్లిప్ ప్రింట్ చేయండి' : 'Print Confirmation Slip'}</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-2xs transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.appointment.resetBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Appointment Request Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#DCE7F0] pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[#123B63]">
                        {t.appointment.formTitle}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>{language === 'te' ? 'వాట్సాప్ సదుపాయం' : 'WhatsApp Enabled'}</span>
                      </span>
                    </div>
                    <p className="text-xs text-[#607080] mt-1">
                      {t.appointment.formDesc}
                    </p>
                  </div>

                  {/* Honeypot hidden input for spam protection */}
                  <input
                    type="text"
                    name="website_url_check"
                    value={formData.botHoneypot}
                    onChange={(e) => setFormData({ ...formData, botHoneypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="patient-full-name"
                      className="block text-xs font-semibold text-[#18324A] mb-1.5"
                    >
                      {t.appointment.fullNameLabel}
                    </label>
                    <div className="relative">
                      <input
                        id="patient-full-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder={t.appointment.fullNamePlaceholder}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                          errors.fullName
                            ? 'border-rose-300 focus:border-rose-500 bg-rose-50/20'
                            : 'border-[#DCE7F0] focus:border-[#0B5CAD] bg-white'
                        } text-[#18324A] placeholder:text-[#607080]/50 transition-colors focus:outline-none`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="patient-phone"
                      className="block text-xs font-semibold text-[#18324A] mb-1.5"
                    >
                      {t.appointment.phoneLabel}
                    </label>
                    <div className="relative">
                      <input
                        id="patient-phone"
                        type="tel"
                        inputMode="numeric"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder={t.appointment.phonePlaceholder}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                          errors.phone
                            ? 'border-rose-300 focus:border-rose-500 bg-rose-50/20'
                            : 'border-[#DCE7F0] focus:border-[#0B5CAD] bg-white'
                        } text-[#18324A] placeholder:text-[#607080]/50 transition-colors focus:outline-none`}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-[#607080]">
                        {language === 'te'
                          ? 'మీ అపాయింట్‌మెంట్ సమయాన్ని నిర్ధారించడానికి మేము ఈ నంబర్‌ను ఉపయోగిస్తాము.'
                          : 'We will use this number to confirm your consultation schedule.'}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="appointment-date"
                        className="block text-xs font-semibold text-[#18324A] mb-1.5"
                      >
                        {t.appointment.dateLabel}
                      </label>
                      <input
                        id="appointment-date"
                        type="date"
                        min={minDateString}
                        required
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                          errors.preferredDate
                            ? 'border-rose-300 focus:border-rose-500 bg-rose-50/20'
                            : 'border-[#DCE7F0] focus:border-[#0B5CAD] bg-white'
                        } text-[#18324A] transition-colors focus:outline-none`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appointment-slot"
                        className="block text-xs font-semibold text-[#18324A] mb-1.5"
                      >
                        {t.appointment.timeSlotLabel}
                      </label>
                      <select
                        id="appointment-slot"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE7F0] focus:border-[#0B5CAD] bg-white text-[#18324A] transition-colors focus:outline-none"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">
                          {language === 'te' ? 'ఉదయం (10:00 AM – 1:00 PM)' : 'Morning (10:00 AM – 1:00 PM)'}
                        </option>
                        <option value="Afternoon (1:00 PM - 3:00 PM)">
                          {language === 'te' ? 'మధ్యాహ్నం (1:00 PM – 3:00 PM)' : 'Afternoon (1:00 PM – 3:00 PM)'}
                        </option>
                        <option value="Evening (5:00 PM - 8:00 PM)">
                          {language === 'te' ? 'సాయంత్రం (5:00 PM – 8:00 PM)' : 'Evening (5:00 PM – 8:00 PM)'}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div>
                    <label
                      htmlFor="visit-reason"
                      className="block text-xs font-semibold text-[#18324A] mb-1.5"
                    >
                      {t.appointment.reasonLabel}
                    </label>
                    <select
                      id="visit-reason"
                      value={formData.reasonForVisit}
                      onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE7F0] focus:border-[#0B5CAD] bg-white text-[#18324A] transition-colors focus:outline-none"
                    >
                      <option value="Skin Disease / Rash">
                        {language === 'te' ? 'సాధారణ చర్మ వ్యాధి / తామర' : 'Skin Disease / Persistent Rash'}
                      </option>
                      <option value="Itching & Allergy">
                        {language === 'te' ? 'తీవ్రమైన దురద / చర్మ అలర్జీ' : 'Severe Itching / Allergic Skin Reaction'}
                      </option>
                      <option value="Fungal Infection">
                        {language === 'te' ? 'ఫంగల్ ఇన్ఫెక్షన్ / గజ్జి (టినియా)' : 'Fungal Infection / Ringworm (Tinea)'}
                      </option>
                      <option value="Eczema or Dermatitis">
                        {language === 'te' ? 'ఎగ్జిమా / చర్మపు మంట' : 'Eczema / Dermatitis'}
                      </option>
                      <option value="Psoriasis Care">
                        {language === 'te' ? 'సోరియాసిస్ పరీక్ష & చికిత్స' : 'Psoriasis Evaluation & Follow-up'}
                      </option>
                      <option value="Acne & Breakouts">
                        {language === 'te' ? 'మొటిమలు / ముఖంపై మచ్చలు' : 'Acne / Facial Breakouts'}
                      </option>
                      <option value="Pigmentation / Melasma">
                        {language === 'te' ? 'నల్ల మచ్చలు / మంగు (మెలాస్మా)' : 'Pigmentation / Dark Patches'}
                      </option>
                      <option value="Scalp & Hair Concern">
                        {language === 'te' ? 'తల చర్మం / చుండ్రు / జుట్టు సమస్య' : 'Scalp Itch / Dandruff / Hair Issue'}
                      </option>
                      <option value="Pediatric Skin Issue">
                        {language === 'te' ? 'పిల్లల చర్మ సమస్య' : 'Child / Pediatric Skin Issue'}
                      </option>
                      <option value="General Dermatology Consultation">
                        {language === 'te' ? 'జనరల్ డెర్మటాలజీ సంప్రదింపు' : 'General Dermatology Consultation'}
                      </option>
                      <option value="Other">
                        {language === 'te' ? 'ఇతర చర్మ సమస్య' : 'Other Skin Concern'}
                      </option>
                    </select>
                  </div>

                  {/* Brief Notes */}
                  <div>
                    <label
                      htmlFor="patient-notes"
                      className="block text-xs font-semibold text-[#18324A] mb-1.5"
                    >
                      {t.appointment.notesLabel}
                    </label>
                    <textarea
                      id="patient-notes"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.appointment.notesPlaceholder}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#DCE7F0] focus:border-[#0B5CAD] bg-white text-[#18324A] placeholder:text-[#607080]/50 transition-colors focus:outline-none resize-none"
                    />
                  </div>

                  {/* WhatsApp Send Option Checkbox */}
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="autoOpenWhatsApp"
                      checked={formData.autoOpenWhatsApp}
                      onChange={(e) => setFormData({ ...formData, autoOpenWhatsApp: e.target.checked })}
                      className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="autoOpenWhatsApp" className="text-xs text-emerald-950 font-medium cursor-pointer">
                      <span>{t.appointment.whatsappCheckbox}</span>
                      <span className="block text-[11px] text-emerald-700 font-normal mt-0.5">
                        {t.appointment.whatsappCheckboxSub}
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-base font-semibold py-3.5 px-6 rounded-xl shadow-sm hover:shadow transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t.appointment.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5 text-emerald-300" />
                          <span>{t.appointment.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#607080] text-center">
                    {language === 'te'
                      ? 'క్లినిక్ నిర్ధారణ అనంతరం అపాయింట్‌మెంట్ ఖరారవుతుంది. కౌంటర్ వద్ద నగదు (Cash) చెల్లించాలి.'
                      : 'Appointments are finalized upon clinic confirmation. Cash payment collected at hospital counter.'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

