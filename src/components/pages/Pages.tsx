import React from 'react';
import { Link } from 'react-router-dom';
import { useHospital } from '../../context/HospitalContext';
import { hospitalImages } from '../../assets/images';
import {
  CreditCard,
  Stethoscope,
  CheckCircle2,
  ArrowLeft,
  ShieldAlert,
} from 'lucide-react';
import { AppointmentSection } from '../home/AppointmentSection';
import { ContactSection } from '../home/ContactSection';
import { TreatmentsSection } from '../home/TreatmentsSection';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, badge }) => {
  const { language } = useHospital();
  return (
    <div className="bg-[#F7FAFC] border-b border-[#DCE7F0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#0B5CAD] font-medium hover:underline mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'te' ? '← తిరిగి హోమ్ పేజీకి' : '← Back to Home'}</span>
        </Link>
        <div className="inline-block px-3 py-1 rounded-full bg-[#EAF5FC] text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-2">
          {badge}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#123B63] tracking-tight">
          {title}
        </h1>
        <p className="mt-2 text-base text-[#607080] max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export const AboutPage: React.FC = () => {
  const { hospitalData, setLightboxImage } = useHospital();

  return (
    <div className="bg-white">
      <PageHeader
        badge="About The Hospital"
        title="Sarojini Devi Skin Hospital"
        subtitle="Dedicated dermatology and skin disease care in Kakinada under Dr. Satyanarayana, MD (Dermatology)."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#DCE7F0] shadow-md bg-white">
              <div className="aspect-[4/3] relative cursor-pointer" onClick={() => setLightboxImage(hospitalImages.exterior)}>
                <img
                  src={hospitalImages.exterior.src}
                  alt={hospitalImages.exterior.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  Hospital Frontage & Entrance
                </span>
              </div>
              <div className="p-4 bg-white text-xs text-[#607080]">
                Sarojini Devi Skin Hospital, Bhanugudi Junction, Kakinada, Andhra Pradesh.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F7FAFC] border border-[#DCE7F0] space-y-3">
              <h3 className="font-bold text-sm text-[#123B63]">Hospital Key Facts</h3>
              <div className="text-xs space-y-2 text-[#18324A]">
                <div className="flex justify-between border-b border-[#DCE7F0] pb-1.5">
                  <span className="text-[#607080]">Consultant Doctor:</span>
                  <strong>{hospitalData.doctorName}</strong>
                </div>
                <div className="flex justify-between border-b border-[#DCE7F0] pb-1.5">
                  <span className="text-[#607080]">Qualification:</span>
                  <strong>{hospitalData.doctorQualification}</strong>
                </div>
                <div className="flex justify-between border-b border-[#DCE7F0] pb-1.5">
                  <span className="text-[#607080]">Primary Treatment:</span>
                  <strong>{hospitalData.primaryTreatment}</strong>
                </div>
                <div className="flex justify-between border-b border-[#DCE7F0] pb-1.5">
                  <span className="text-[#607080]">Location:</span>
                  <strong>{hospitalData.location.landmark}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#607080]">Payment Mode:</span>
                  <strong className="text-[#0B5CAD]">{hospitalData.payment.mode}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#18324A] text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-[#123B63]">
              Serving Patients in Kakinada with Clinical Dermatology Expertise
            </h2>
            <p>
              Sarojini Devi Skin Hospital provides dermatology-focused medical consultation and skin disease care in Kakinada. The hospital is led by Dr. Satyanarayana, MD (Dermatology), with a focus on professional evaluation and patient care.
            </p>
            <p className="text-[#607080]">
              Skin disorders can significantly impact comfort, confidence, and daily well-being. At our hospital, we believe in a methodical clinical approach: taking the time to observe lesion patterns, listening to patient symptoms, and designing medical interventions directed at genuine clinical recovery.
            </p>
            <p className="text-[#607080]">
              We avoid unsubstantiated commercial promises or aggressive cosmetic hard-selling. Every treatment recommendation is rooted in medical ethics and sound dermatological principles.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="bg-[#F7FAFC] hover:bg-slate-100 text-[#123B63] border border-[#DCE7F0] text-sm font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Contact & Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DoctorPage: React.FC = () => {
  const { hospitalData, setLightboxImage } = useHospital();

  return (
    <div className="bg-white">
      <PageHeader
        badge="Dermatologist Profile"
        title="Dr. Satyanarayana, MD (Dermatology)"
        subtitle="Consultant Dermatologist at Sarojini Devi Skin Hospital, Kakinada."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#DCE7F0] shadow-md bg-white">
              <div className="aspect-[4/3] relative cursor-pointer" onClick={() => setLightboxImage(hospitalImages.consultationRoom)}>
                <img
                  src={hospitalImages.consultationRoom.src}
                  alt={hospitalImages.consultationRoom.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  Doctor's Consultation Chamber
                </span>
              </div>
              <div className="p-4 bg-white text-xs text-[#607080]">
                Consultation Chamber of Dr. Satyanarayana, Sarojini Devi Skin Hospital.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#EAF5FC] border border-[#0B5CAD]/20 text-xs text-[#123B63] space-y-1">
              <strong>Clinical Practice Specialization:</strong>
              <p className="text-[#607080]">
                Dermatology & Skin Disease Treatment • MD (Dermatology)
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#18324A] text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-[#123B63]">
              About Dr. Satyanarayana
            </h2>
            <div className="p-5 rounded-2xl bg-[#F7FAFC] border border-[#DCE7F0] text-lg font-normal text-[#123B63] leading-relaxed">
              "{hospitalData.doctorBio}"
            </div>

            <div className="space-y-4 text-sm text-[#607080]">
              <h3 className="text-base font-bold text-[#18324A]">Clinical Principles</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5CAD] shrink-0 mt-0.5" />
                  <span>Comprehensive visual and physical assessment of dermatological presentations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5CAD] shrink-0 mt-0.5" />
                  <span>Clear communication regarding diagnosis, chronicity, and expected response timelines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5CAD] shrink-0 mt-0.5" />
                  <span>Evidence-based prescriptions avoiding irrational combination steroids.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs"
              >
                Schedule Consultation with Dr. Satyanarayana
              </Link>
              <Link
                to="/treatments"
                className="bg-[#F7FAFC] hover:bg-slate-100 text-[#123B63] border border-[#DCE7F0] text-sm font-semibold px-6 py-3 rounded-xl transition-all"
              >
                View Treatments Care
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TreatmentsPage: React.FC = () => {
  const { language, t } = useHospital();
  return (
    <div>
      <PageHeader
        badge={t.treatments.badge}
        title={language === 'te' ? 'చర్మవ్యాధుల సంరక్షణ & చికిత్స' : 'Skin Disease Care & Common Dermatology Concerns'}
        subtitle={
          language === 'te'
            ? 'డాక్టర్ సత్యనారాయణ, MD (డెర్మటాలజీ) గారి సమగ్ర క్లినికల్ డెర్మటాలజీ సంప్రదింపులు.'
            : 'Comprehensive clinical dermatology consultation with Dr. Satyanarayana, MD (Dermatology).'
        }
      />
      <TreatmentsSection />
      <AppointmentSection />
    </div>
  );
};

export const HospitalPage: React.FC = () => {
  const { setLightboxImage } = useHospital();

  return (
    <div className="bg-white">
      <PageHeader
        badge="Hospital Facilities"
        title="Our Clinical Environment"
        subtitle="Designed around patient comfort, hygiene, and accessible clinical consultations in Kakinada."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden border border-[#DCE7F0] bg-white shadow-2xs">
            <div className="aspect-[4/3] cursor-pointer" onClick={() => setLightboxImage(hospitalImages.exterior)}>
              <img src={hospitalImages.exterior.src} alt={hospitalImages.exterior.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-[#123B63]">Hospital Frontage</h3>
              <p className="text-xs text-[#607080] mt-1">Centrally situated at Bhanugudi Junction for easy community access.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#DCE7F0] bg-white shadow-2xs">
            <div className="aspect-[4/3] cursor-pointer" onClick={() => setLightboxImage(hospitalImages.consultationRoom)}>
              <img src={hospitalImages.consultationRoom.src} alt={hospitalImages.consultationRoom.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-[#123B63]">Consultation Room</h3>
              <p className="text-xs text-[#607080] mt-1">Private doctor chamber equipped for clinical dermatological evaluation.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#DCE7F0] bg-white shadow-2xs">
            <div className="aspect-[4/3] cursor-pointer" onClick={() => setLightboxImage(hospitalImages.waitingArea)}>
              <img src={hospitalImages.waitingArea.src} alt={hospitalImages.waitingArea.alt} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-base text-[#123B63]">Patient Waiting Area</h3>
              <p className="text-xs text-[#607080] mt-1">Hygienic, comfortable waiting space with reception counter.</p>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#F7FAFC] border border-[#DCE7F0] text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-[#123B63]">Plan Your Visit</h3>
          <p className="text-sm text-[#607080]">
            Our hospital welcomes walk-in and scheduled patients. Please check consultation timings and keep cash ready for reception billing.
          </p>
          <Link
            to="/appointment"
            className="inline-block bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PatientInfoPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Patient Information"
        title="Guide for Patients & Attendants"
        subtitle="Essential information on what to expect, payment modes, and consultation preparations."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-[#18324A]">
        <div className="p-6 rounded-2xl bg-white border border-[#DCE7F0] shadow-2xs space-y-4">
          <h2 className="text-xl font-bold text-[#123B63] flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#0B5CAD]" />
            <span>Consultation Fee & Payment Policy</span>
          </h2>
          <p className="text-sm text-[#607080] leading-relaxed">
            Sarojini Devi Skin Hospital operates on a transparent direct payment basis. All consultation charges and prescribed medical dispensary items are payable via <strong className="text-[#18324A]">Cash</strong> at the hospital reception desk. Please prepare the required currency notes before arriving.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#DCE7F0] shadow-2xs space-y-4">
          <h2 className="text-xl font-bold text-[#123B63] flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#0B5CAD]" />
            <span>What to Bring for Your Dermatology Consultation</span>
          </h2>
          <ul className="text-sm text-[#607080] space-y-2 list-disc list-inside">
            <li>Any existing medical prescription slips, discharge summaries, or blood test records.</li>
            <li>All current creams, lotions, or oral pills you are actively using on your skin.</li>
            <li>Government-issued identification or contact details for hospital registry.</li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#DCE7F0] shadow-2xs space-y-4">
          <h2 className="text-xl font-bold text-[#123B63] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-[#0B5CAD]" />
            <span>Warning Regarding Over-The-Counter Creams</span>
          </h2>
          <p className="text-sm text-[#607080] leading-relaxed">
            Please avoid self-prescribing combination steroid ointments from pharmacies prior to your appointment. These creams mask the actual diagnostic signs of fungal, bacterial, or inflammatory dermatoses, making accurate diagnosis more challenging.
          </p>
        </div>

        <div className="pt-4 text-center">
          <Link
            to="/appointment"
            className="inline-block bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all shadow-xs"
          >
            Request Appointment Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const { language, t } = useHospital();
  return (
    <div>
      <PageHeader
        badge={t.contact.badge}
        title={t.contact.title}
        subtitle={
          language === 'te'
            ? 'డాక్టర్ సత్యనారాయణ గారిని భానుగుడి జంక్షన్, కాకినాడ వద్ద సంప్రదించండి.'
            : 'Visit Dr. Satyanarayana at Bhanugudi Junction, Kakinada, Andhra Pradesh.'
        }
      />
      <ContactSection />
      <AppointmentSection />
    </div>
  );
};

export const AppointmentPage: React.FC = () => {
  const { language, t, hospitalData } = useHospital();
  return (
    <div>
      <PageHeader
        badge={t.appointment.badge}
        title={t.appointment.title}
        subtitle={
          language === 'te'
            ? `డాక్టర్ ${hospitalData.doctorName} గారిని సంప్రదించండి. చెల్లింపు విధానం: కౌంటర్ వద్ద నగదు (${t.topBar.paymentMode}).`
            : `Consult ${hospitalData.doctorName}, ${hospitalData.doctorQualification}. Payment Mode: Cash at hospital counter.`
        }
      />
      <AppointmentSection />
      <ContactSection />
    </div>
  );
};

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Legal & Privacy"
        title="Privacy Policy"
        subtitle="How Sarojini Devi Skin Hospital respects patient privacy and communication data."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-[#18324A] text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-[#123B63]">1. Information Collection</h2>
        <p className="text-[#607080]">
          When submitting an appointment request through our website, we collect minimal personal details including your name, phone number, and requested consultation date. We explicitly advise patients not to submit confidential medical records or photographs via the online form.
        </p>

        <h2 className="text-xl font-bold text-[#123B63]">2. Use of Information</h2>
        <p className="text-[#607080]">
          Collected contact details are utilized solely for scheduling, confirming consultation appointments, and communicating essential hospital logistics. We do not sell or share patient contact information with third-party advertisers.
        </p>

        <h2 className="text-xl font-bold text-[#123B63]">3. Medical Confidentiality</h2>
        <p className="text-[#607080]">
          All diagnostic consultations, prescriptions, and discussions held with Dr. Satyanarayana during in-person visits remain strictly confidential under standard healthcare medical ethics.
        </p>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        badge="Terms of Service"
        title="Terms & Medical Disclaimer"
        subtitle="Important information regarding the website and clinical consultation procedures."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-[#18324A] text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-[#123B63]">1. General Information Only</h2>
        <p className="text-[#607080]">
          Content provided on this website is for informational purposes only. It is not intended to be a substitute for professional medical advice, clinical diagnosis, or medical treatment from Dr. Satyanarayana, MD (Dermatology).
        </p>

        <h2 className="text-xl font-bold text-[#123B63]">2. Appointment Requests</h2>
        <p className="text-[#607080]">
          Online appointment submissions constitute a request for scheduling and are subject to confirmation by hospital reception based on doctor availability.
        </p>

        <h2 className="text-xl font-bold text-[#123B63]">3. Emergency Notice</h2>
        <p className="text-[#607080]">
          Sarojini Devi Skin Hospital provides outpatient dermatology consultations. In the event of acute emergencies or anaphylactic shocks, please report immediately to the nearest 24/7 multi-specialty emergency hospital.
        </p>
      </div>
    </div>
  );
};

export const NotFoundPage: React.FC = () => {
  const { language } = useHospital();
  return (
    <div className="bg-white min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md text-center">
        <span className="text-6xl font-extrabold text-[#0B5CAD]">404</span>
        <h1 className="text-2xl font-bold text-[#123B63] mt-4 mb-2">
          {language === 'te' ? 'పేజీ కనుగొనబడలేదు' : 'Page Not Found'}
        </h1>
        <p className="text-[#607080] text-sm mb-6">
          {language === 'te'
            ? 'మీరు వెతుకుతున్న పేజీ అందుబాటులో లేదు లేదా మార్చబడింది.'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0B5CAD] hover:bg-[#1677C8] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'te' ? 'తిరిగి హోమ్ పేజీకి' : 'Back to Home'}</span>
        </Link>
      </div>
    </div>
  );
};
