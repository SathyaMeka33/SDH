import React from 'react';
import { useHospital } from '../../context/HospitalContext';
import { ShieldAlert } from 'lucide-react';

export const MedicalDisclaimer: React.FC = () => {
  const { hospitalData, t, language } = useHospital();

  return (
    <section className="bg-white py-8 border-t border-[#DCE7F0]/80" aria-label="Medical Disclaimer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#F7FAFC] border border-[#DCE7F0] p-4 sm:p-5 flex items-start gap-3.5 text-xs text-[#607080]">
          <ShieldAlert className="w-5 h-5 text-[#0B5CAD] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-[#18324A] text-xs">
              {language === 'te' ? 'వైద్య సమాచార ప్రకటన & చట్టపరమైన గమనిక' : 'Healthcare Information & Legal Notice'}
            </h3>
            <p className="leading-relaxed">
              {t.footer.disclaimer}
            </p>
            <p className="text-[11px] text-[#607080]/80">
              {language === 'te'
                ? 'సరోజినీ దేవి స్కిన్ హాస్పిటల్ వృత్తిపరమైన వైద్య ప్రమాణాలకు కట్టుబడి ఉంది. ఈ వెబ్‌సైట్‌లోని సమాచారం డాక్టర్ సత్యనారాయణ గారి ప్రత్యక్ష పరీక్షకు ప్రత్యామ్నాయం కాదు.'
                : 'Sarojini Devi Skin Hospital adheres strictly to professional medical communication standards. No content on this website constitutes a medical guarantee or replaces an in-person diagnostic evaluation by Dr. Satyanarayana, MD (Dermatology).'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
