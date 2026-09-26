import React, { useState } from 'react';
import { useHospital } from '../../context/HospitalContext';
import {
  X,
  Save,
  RotateCcw,
  CheckCircle2,
  Settings,
  Phone,
  Clock,
  Mail,
  MapPin,
  CreditCard,
  Star,
  Info,
} from 'lucide-react';

export const ConfigModal: React.FC = () => {
  const {
    hospitalData,
    updateHospitalData,
    resetToDefaults,
    isConfigModalOpen,
    setIsConfigModalOpen,
  } = useHospital();

  const [phone, setPhone] = useState(hospitalData.contact.phone);
  const [isPhonePlaceholder, setIsPhonePlaceholder] = useState(hospitalData.contact.isPhonePlaceholder);
  const [timings, setTimings] = useState(hospitalData.contact.timings);
  const [isTimingsPlaceholder, setIsTimingsPlaceholder] = useState(hospitalData.contact.isTimingsPlaceholder);
  const [whatsappNumber, setWhatsappNumber] = useState(hospitalData.contact.whatsappNumber || '919703629727');
  const [email, setEmail] = useState(hospitalData.contact.email);
  const [isEmailPlaceholder, setIsEmailPlaceholder] = useState(hospitalData.contact.isEmailPlaceholder);
  const [ratingScore, setRatingScore] = useState(hospitalData.externalRating.score);
  const [ratingCount, setRatingCount] = useState(hospitalData.externalRating.totalRatings.toString());
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isConfigModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateHospitalData({
      contact: {
        ...hospitalData.contact,
        phone,
        isPhonePlaceholder,
        whatsappNumber,
        email,
        isEmailPlaceholder,
        timings,
        isTimingsPlaceholder,
      },
      externalRating: {
        ...hospitalData.externalRating,
        score: ratingScore,
        totalRatings: parseInt(ratingCount, 10) || 22,
      },
    });

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsConfigModalOpen(false);
    }, 900);
  };

  const handleReset = () => {
    if (window.confirm('Reset all configurable contact details back to default placeholders?')) {
      resetToDefaults();
      setIsConfigModalOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
      onClick={() => setIsConfigModalOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full border border-[#DCE7F0] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#F7FAFC] border-b border-[#DCE7F0] flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5FC] text-[#0B5CAD] flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 id="config-modal-title" className="text-lg font-bold text-[#123B63]">
                Hospital Information & Placeholders Configuration
              </h3>
              <p className="text-xs text-[#607080]">
                Update verified clinic phone numbers, consultation hours, and directory ratings.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsConfigModalOpen(false)}
            className="p-1.5 text-[#607080] hover:text-[#18324A] hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice */}
        <div className="p-4 bg-[#EAF5FC]/60 border-b border-[#0B5CAD]/15 text-xs text-[#18324A] flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#0B5CAD] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            As mandated by clinical accuracy guidelines, unverified numbers or timings are stored as placeholders. Hospital staff can input verified details here; they will instantly take effect across the entire website and save to your browser's local store.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-6 space-y-5 text-sm">
          {/* Phone */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#18324A] uppercase tracking-wider">
              Hospital Contact Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setIsPhonePlaceholder(e.target.value.includes('[') || e.target.value.includes('Add'));
              }}
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#DCE7F0] focus:border-[#0B5CAD] text-[#18324A] focus:outline-none"
              placeholder="+91 884 237xxxx or mobile"
            />
            <div className="flex items-center gap-2 pt-0.5">
              <input
                type="checkbox"
                id="isPhonePlaceholderCheck"
                checked={isPhonePlaceholder}
                onChange={(e) => setIsPhonePlaceholder(e.target.checked)}
                className="rounded text-[#0B5CAD] focus:ring-[#0B5CAD]"
              />
              <label htmlFor="isPhonePlaceholderCheck" className="text-xs text-[#607080]">
                Mark as unverified placeholder (shows badge to patients)
              </label>
            </div>
          </div>

          {/* WhatsApp Automation Target Number */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#18324A] uppercase tracking-wider">
              WhatsApp Automation Receiving Number (With Country Code)
            </label>
            <input
              type="text"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value.replace(/[^\d+]/g, ''))}
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#DCE7F0] focus:border-[#0B5CAD] text-[#18324A] focus:outline-none font-mono"
              placeholder="919703629727"
            />
            <p className="text-[11px] text-[#607080]">
              Patient appointment details will automatically be dispatched to this WhatsApp phone number (e.g. 919703629727).
            </p>
          </div>

          {/* Timings */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#18324A] uppercase tracking-wider">
              Consultation Timings / Working Hours
            </label>
            <input
              type="text"
              value={timings}
              onChange={(e) => {
                setTimings(e.target.value);
                setIsTimingsPlaceholder(e.target.value.includes('[') || e.target.value.includes('Add'));
              }}
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#DCE7F0] focus:border-[#0B5CAD] text-[#18324A] focus:outline-none"
              placeholder="e.g. Mon–Sat: 10:00 AM – 2:00 PM, 5:00 PM – 8:00 PM (Sunday Closed)"
            />
            <div className="flex items-center gap-2 pt-0.5">
              <input
                type="checkbox"
                id="isTimingsPlaceholderCheck"
                checked={isTimingsPlaceholder}
                onChange={(e) => setIsTimingsPlaceholder(e.target.checked)}
                className="rounded text-[#0B5CAD] focus:ring-[#0B5CAD]"
              />
              <label htmlFor="isTimingsPlaceholderCheck" className="text-xs text-[#607080]">
                Mark as unverified placeholder
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#18324A] uppercase tracking-wider">
              Hospital Contact Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailPlaceholder(e.target.value.includes('[') || e.target.value.includes('Add'));
              }}
              className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#DCE7F0] focus:border-[#0B5CAD] text-[#18324A] focus:outline-none"
              placeholder="contact@sarojinideviskin.in"
            />
          </div>

          {/* Rating */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#18324A] uppercase tracking-wider">
                External Listing Rating
              </label>
              <input
                type="text"
                value={ratingScore}
                onChange={(e) => setRatingScore(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#DCE7F0] focus:border-[#0B5CAD] text-[#18324A] focus:outline-none"
                placeholder="4.2"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#18324A] uppercase tracking-wider">
                Review Count (Public)
              </label>
              <input
                type="number"
                value={ratingCount}
                onChange={(e) => setRatingCount(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#DCE7F0] focus:border-[#0B5CAD] text-[#18324A] focus:outline-none"
                placeholder="22"
              />
            </div>
          </div>

          {/* Readonly verified items */}
          <div className="p-3.5 rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] text-xs space-y-1.5">
            <strong className="text-[#18324A] block">Verified Core Medical Identity (Locked by brief):</strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#607080]">
              <div>Hospital: <strong>{hospitalData.hospitalName}</strong></div>
              <div>Doctor: <strong>{hospitalData.doctorName}</strong></div>
              <div>Qualification: <strong>{hospitalData.doctorQualification}</strong></div>
              <div>Location: <strong>{hospitalData.location.landmark}, Kakinada</strong></div>
              <div>Primary Care: <strong>{hospitalData.primaryTreatment}</strong></div>
              <div>Payment: <strong>{hospitalData.payment.mode}</strong></div>
            </div>
          </div>

          {/* Footer buttons */}
          <div className="pt-4 border-t border-[#DCE7F0] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-medium px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsConfigModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-[#607080] hover:text-[#18324A] rounded-lg transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-2xs transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Saved Successfully</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Apply Updates</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
