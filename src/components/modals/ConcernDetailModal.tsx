import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { X, Calendar, AlertTriangle, Stethoscope, CheckCircle2, Shield } from 'lucide-react';

export const ConcernDetailModal: React.FC = () => {
  const { selectedConcern, setSelectedConcern, navigateTo, language, t } = useHospital();

  if (!selectedConcern) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
      onClick={() => setSelectedConcern(null)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-concern-title"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full border border-[#DCE7F0] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#F7FAFC] border-b border-[#DCE7F0] flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#0B5CAD] bg-[#EAF5FC] px-2.5 py-0.5 rounded-full inline-block mb-1.5">
              {selectedConcern.category}
            </span>
            <h3 id="modal-concern-title" className="text-xl font-bold text-[#123B63]">
              {selectedConcern.title}
            </h3>
          </div>

          <button
            onClick={() => setSelectedConcern(null)}
            className="p-1.5 text-[#607080] hover:text-[#18324A] hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5 text-sm text-[#18324A]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#607080] mb-1">
              {language === 'te' ? 'వైద్య అవలోకనం' : 'Clinical Overview'}
            </h4>
            <p className="text-[#18324A] leading-relaxed">
              {selectedConcern.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#EAF5FC]/60 border border-[#0B5CAD]/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0B5CAD] uppercase tracking-wider">
              <Stethoscope className="w-4 h-4" />
              <span>{language === 'te' ? 'డెర్మటాలజీ రోగ నిర్ధారణ మార్గదర్శకాలు' : 'Dermatological Evaluation Protocol'}</span>
            </div>
            <p className="text-xs text-[#18324A] leading-relaxed">
              {selectedConcern.clinicalNote}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{language === 'te' ? 'రోగులకు హెచ్చరిక: సొంత వైద్యం చేసుకోకండి' : 'Patient Guidance Warning: Avoid Self-Medication'}</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              {language === 'te'
                ? 'మార్కెట్లో దొరికే స్టెరాయిడ్ క్రీములను నిపుణుల సలహా లేకుండా వాడటం వల్ల చర్మం పలుచబడి సమస్య మరింత జటిలమవుతుంది (Tinea Incognito). మందులు వాడే ముందు డాక్టర్ సత్యనారాయణ గారి వద్ద సరైన రోగ నిర్ధారణ పొందండి.'
                : 'Many common over-the-counter creams combine steroids, antifungals, and antibacterials. Using topical steroids inappropriately on fungal or viral infections often alters the disease presentation (Tinea Incognito) and worsens skin thinning. Always receive an accurate diagnosis from Dr. Satyanarayana before applying medicated creams.'}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#F7FAFC] border-t border-[#DCE7F0] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[#607080]">
            {t.topBar.paymentBadge} <strong className="text-[#18324A]">{t.topBar.paymentMode}</strong>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedConcern(null)}
              className="px-4 py-2 text-xs font-medium text-[#607080] hover:text-[#18324A] rounded-lg transition-colors"
            >
              {language === 'te' ? 'మూసివేయి' : 'Close'}
            </button>

            <button
              onClick={() => {
                setSelectedConcern(null);
                navigateTo('book-appointment', 'appointment-section');
              }}
              className="inline-flex items-center gap-1.5 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-2xs transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'te' ? 'సంప్రదింపు బుక్ చేయండి' : 'Schedule Consultation'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
