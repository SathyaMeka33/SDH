import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { commonDermatologyConcerns, CommonConcern } from '../../config/hospitalData';
import {
  ShieldAlert,
  Flame,
  Layers,
  Activity,
  Sparkles,
  SunMedium,
  HeartHandshake,
  UserCheck,
  Baby,
  AlertCircle,
  Calendar,
  ChevronRight,
  Info,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldAlert,
  Flame,
  Layers,
  Activity,
  Sparkles,
  SunMedium,
  HeartHandshake,
  UserCheck,
  Baby,
};

export const TreatmentsSection: React.FC = () => {
  const { hospitalData, navigateTo, setSelectedConcern, t, language } = useHospital();

  return (
    <section id="treatments-section" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>{t.treatments.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
            {language === 'te' ? 'ప్రధాన వైద్య చికిత్స: ' : 'Primary Treatment: '}
            <span className="text-[#0B5CAD]">
              {language === 'te' ? 'చర్మవ్యాధులు (Skin Diseases)' : hospitalData.primaryTreatment}
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#607080] leading-relaxed">
            {t.treatments.subtitle}
          </p>
        </div>

        {/* Primary Treatment Hero Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#EAF5FC] to-[#F5FAFE] border border-[#0B5CAD]/25 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block px-3 py-1 rounded-md bg-[#0B5CAD] text-white text-xs font-bold uppercase tracking-wider">
              {language === 'te' ? 'ఆసుపత్రి ప్రధాన వైద్య విభాగం' : 'Primary Hospital Treatment Specialization'}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#123B63]">
              {language === 'te' ? 'చర్మవ్యాధుల నిర్ధారణ & నిపుణుల సంరక్షణ' : 'Skin Diseases & Dermatological Care'}
            </h3>

            <p className="text-base text-[#18324A] leading-relaxed">
              {language === 'te'
                ? 'డాక్టర్ సత్యనారాయణ గారు అన్ని రకాల చర్మ వ్యాధులకు సమగ్ర సంప్రదింపులను అందిస్తారు. మార్కెట్లో దొరికే స్టెరాయిడ్ క్రీములతో సమస్యను తాత్కాలికంగా దాచడం కాకుండా, వ్యాధి యొక్క అసలు కారణాన్ని గుర్తించి శాస్త్రీయ చికిత్సను అందిస్తారు.'
                : 'Dr. Satyanarayana provides consultation for a wide spectrum of skin diseases. Rather than masking symptoms with indiscriminate over-the-counter creams, treatment begins with an accurate physical examination of lesions, identifying infection vs. allergy vs. autoimmune triggers.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateTo('book-appointment', 'appointment-section')}
                className="inline-flex items-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'te' ? 'చర్మ సంప్రదింపు బుక్ చేసుకోండి' : 'Book Skin Disease Consultation'}</span>
              </button>

              <span className="text-xs text-[#607080] font-medium">
                {t.topBar.paymentBadge}<strong className="text-[#123B63]">{t.topBar.paymentMode}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer & Subheading for Common Concerns */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DCE7F0] pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#123B63]">
                {language === 'te' ? 'సాధారణంగా వచ్చే చర్మ సమస్యలు' : 'Common Dermatology Concerns'}
              </h3>
              <p className="text-sm text-[#607080] mt-1 max-w-2xl">
                {language === 'te'
                  ? 'రోగులలో తరచుగా కనిపించే కొన్ని ప్రధాన చర్మ సమస్యల వివరాలు క్రింద ఇవ్వబడ్డాయి. సరైన రోగ నిర్ధారణ కొరకు డాక్టర్ గారిని స్వయంగా సంప్రదించండి.'
                  : 'The conditions outlined below reflect frequent clinical presentations seen by dermatologists. Patients are strongly advised to seek an in-person doctor consultation for appropriate medical diagnosis.'}
              </p>
            </div>

            {/* Medical safety notice */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs shrink-0 max-w-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {language === 'te'
                  ? 'సొంత వైద్యంతో స్టెరాయిడ్ క్రీములను వాడవద్దు. నిపుణులైన చర్మ వైద్యులను సంప్రదించండి.'
                  : 'Do not self-medicate with over-the-counter steroid creams. Consult a dermatologist.'}
              </span>
            </div>
          </div>
        </div>

        {/* Concerns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonDermatologyConcerns.map((concern) => {
            const Icon = iconMap[concern.iconName] || ShieldAlert;
            const localized = t.treatments.concerns[concern.id];
            const title = localized?.title || concern.title;
            const category = localized?.category || concern.category;
            const description = localized?.description || concern.description;
            const clinicalNote = localized?.clinicalNote || concern.clinicalNote;

            const localizedConcern: CommonConcern = {
              ...concern,
              title,
              category,
              description,
              clinicalNote,
            };

            return (
              <div
                key={concern.id}
                onClick={() => setSelectedConcern(localizedConcern)}
                className="group p-6 rounded-2xl bg-[#F7FAFC] border border-[#DCE7F0] hover:border-[#0B5CAD]/50 hover:bg-white hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7F0] text-[#0B5CAD] flex items-center justify-center group-hover:bg-[#EAF5FC] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0B5CAD] bg-[#EAF5FC] px-2.5 py-1 rounded-full">
                      {category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#123B63] group-hover:text-[#0B5CAD] transition-colors">
                    {title}
                  </h4>

                  <p className="text-sm text-[#607080] mt-2 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE7F0] flex items-center justify-between text-xs font-semibold text-[#0B5CAD]">
                  <span>{language === 'te' ? 'వైద్య వివరాలు చూడండి' : 'Clinical Evaluation Guide'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Medical Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] flex items-start gap-3 text-xs text-[#607080] leading-relaxed">
          <Info className="w-4 h-4 text-[#0B5CAD] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#18324A] font-semibold">
              {language === 'te' ? 'నైతిక వైద్య విధాన గమనిక: ' : 'Medical Transparency Note: '}
            </strong>
            {language === 'te'
              ? 'సరోజినీ దేవి స్కిన్ హాస్పిటల్ ఎటువంటి అతిశయోక్తి ప్రకటనలు లేదా అవాస్తవ హామీలను ప్రోత్సహించదు. ప్రతి రోగి శరీరం మరియు వైద్య ప్రతిస్పందన భిన్నంగా ఉంటుంది. డాక్టర్ సత్యనారాయణ గారు సరైన రోగ నిర్ధారణ అనంతరం మాత్రమే శాస్త్రీయ చికిత్సను అందిస్తారు.'
              : 'Sarojini Devi Skin Hospital does not make unsubstantiated claims or promise \'instant\' or \'guaranteed\' cures. Every patient\'s biology and response to treatment is unique. Dr. Satyanarayana prescribes treatment based on verified clinical protocols following proper diagnostic review.'}
          </div>
        </div>
      </div>
    </section>
  );
};
