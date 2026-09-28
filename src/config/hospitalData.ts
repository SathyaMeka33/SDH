export interface HospitalConfig {
  hospitalName: string;
  tagline: string;
  doctorName: string;
  doctorQualification: string;
  doctorSpecialization: string;
  doctorBio: string;
  primaryTreatment: string;
  location: {
    landmark: string;
    area: string;
    city: string;
    state: string;
    country: string;
    fullAddress: string;
    mapsSearchQuery: string;
    mapsEmbedUrl: string;
  };
  contact: {
    phone: string;
    isPhonePlaceholder: boolean;
    landline?: string;
    whatsappNumber: string;
    email: string;
    isEmailPlaceholder: boolean;
    timings: string;
    isTimingsPlaceholder: boolean;
    emergencyNote: string;
  };
  payment: {
    mode: string;
    description: string;
  };
  externalRating: {
    score: string;
    totalRatings: number;
    source: string;
    disclaimer: string;
  };
  disclaimer: string;
}

export const defaultHospitalData: HospitalConfig = {
  hospitalName: "Sarojini Devi Skin Hospital",
  tagline: "Professional Dermatology & Skin Disease Care",
  doctorName: "Dr. Satyanarayana",
  doctorQualification: "MD (Dermatology)",
  doctorSpecialization: "Dermatology / Skin Care",
  doctorBio:
    "Dr. Satyanarayana is a dermatologist providing consultation and care for patients with skin-related conditions at Sarojini Devi Skin Hospital in Kakinada.",
  primaryTreatment: "Skin Diseases",
  location: {
    landmark: "Bhanugudi Junction",
    area: "Bhanugudi",
    city: "Kakinada",
    state: "Andhra Pradesh",
    country: "India",
    fullAddress: "Bhanugudi Junction, Kakinada, Andhra Pradesh, India",
    mapsSearchQuery: "Sarojini Devi Skin Hospital, Bhanugudi Junction, Kakinada, Andhra Pradesh",
    mapsEmbedUrl: "https://www.google.com/maps?q=Bhanugudi+Junction+Kakinada+Andhra+Pradesh&output=embed",
  },
  contact: {
    phone: "07947142420",
    isPhonePlaceholder: false,
    landline: "0884-2378585 / 2341383 (Desk: 92466 68585)",
    whatsappNumber: "917947142420",
    email: "contact@sarojinideviskin.in",
    isEmailPlaceholder: false,
    timings: "Morning: 10:00 AM – 2:00 PM | Evening: 5:00 PM – 8:00 PM",
    isTimingsPlaceholder: false,
    emergencyNote: "Please visit the hospital in person during consultation hours. Cash payment accepted at counter.",
  },
  payment: {
    mode: "Cash",
    description: "Consultation fees and prescription services are payable via Cash at the hospital reception desk.",
  },
  externalRating: {
    score: "4.2",
    totalRatings: 22,
    source: "External Public Directory Listing",
    disclaimer: "Aggregated from external public directory listings. Provided for general reference.",
  },
  disclaimer:
    "The information provided on this website is intended for general informational purposes only. It should not be considered a substitute for professional medical advice, diagnosis, or treatment. Please consult a qualified healthcare professional for individual medical concerns.",
};

export interface CommonConcern {
  id: string;
  title: string;
  category: string;
  description: string;
  clinicalNote: string;
  iconName: string;
}

export const commonDermatologyConcerns: CommonConcern[] = [
  {
    id: "skin-diseases",
    title: "Skin Diseases (General Dermatology)",
    category: "Primary Clinical Focus",
    description:
      "Comprehensive diagnostic evaluation and clinical care for diverse acute and chronic dermatological conditions affecting the skin.",
    clinicalNote: "In-person physical clinical examination by Dr. Satyanarayana for differential diagnosis and evidence-based prescription.",
    iconName: "ShieldAlert",
  },
  {
    id: "eczema",
    title: "Eczema & Dermatitis",
    category: "Inflammatory Conditions",
    description:
      "Medical assessment for itchy, inflamed, dry, or cracked skin, including contact dermatitis and atopic conditions.",
    clinicalNote: "Identification of potential triggers, barrier restoration strategies, and prescribed dermatological therapy.",
    iconName: "Flame",
  },
  {
    id: "psoriasis",
    title: "Psoriasis",
    category: "Chronic Dermatoses",
    description:
      "Clinical management and monitoring for plaque psoriasis, scalp involvement, and related inflammatory skin scaling.",
    clinicalNote: "Individualized management plan tailored to severity, location, and patient medical profile.",
    iconName: "Layers",
  },
  {
    id: "fungal-infections",
    title: "Fungal & Ringworm Infections",
    category: "Infectious Skin Conditions",
    description:
      "Evaluation and targeted topical or systemic antifungal therapy for tinea (ringworm), candidiasis, and sweat-related fungal rashes.",
    clinicalNote: "Proper diagnosis to avoid steroid-induced complications common with self-medication.",
    iconName: "Activity",
  },
  {
    id: "acne",
    title: "Acne & Blemishes",
    category: "Sebaceous Gland Disorders",
    description:
      "Clinical evaluation of teenage and adult acne, cystic breakouts, and post-acne inflammatory marks.",
    clinicalNote: "Dermatologist-directed treatment regimen to control inflammation and minimize scarring risk.",
    iconName: "Sparkles",
  },
  {
    id: "pigmentation",
    title: "Pigmentation & Melasma",
    category: "Pigmentary Concerns",
    description:
      "Medical evaluation of dark patches, melasma, hyperpigmentation, and discoloration across different skin types.",
    clinicalNote: "Safe clinical assessment focusing on underlying causes, photoprotection, and gentle medical care.",
    iconName: "SunMedium",
  },
  {
    id: "allergic-conditions",
    title: "Allergic Skin Reactions & Urticaria",
    category: "Allergic Responses",
    description:
      "Assessment of hives, acute allergic flare-ups, seasonal rashes, and drug- or food-related skin manifestations.",
    clinicalNote: "Systematic medical history evaluation and symptomatic relief under doctor guidance.",
    iconName: "HeartHandshake",
  },
  {
    id: "hair-scalp",
    title: "Hair & Scalp Conditions",
    category: "Trichology & Scalp Health",
    description:
      "Medical assessment for severe dandruff, seborrheic dermatitis, patchy hair thinning, and scalp infections.",
    clinicalNote: "Dermatological scalp examination to identify root causes and establish a targeted care plan.",
    iconName: "UserCheck",
  },
  {
    id: "pediatric-skin",
    title: "Pediatric Skin Conditions",
    category: "Gentle Care for Children",
    description:
      "Gentle dermatological assessment for common rashes, cradle cap, viral exanthems, and sensitive skin issues in infants and children.",
    clinicalNote: "Safe, age-appropriate dermatological care focusing on gentle child skin recovery.",
    iconName: "Baby",
  },
];

export const patientJourneySteps = [
  {
    step: "01",
    title: "Book / Contact",
    description: "Submit an appointment request online or reach out directly to plan your clinic visit.",
    iconName: "CalendarClock",
  },
  {
    step: "02",
    title: "Visit the Hospital",
    description: "Conveniently located at Bhanugudi Junction, Kakinada with accessible patient waiting facilities.",
    iconName: "MapPin",
  },
  {
    step: "03",
    title: "Dermatology Consultation",
    description: "Detailed one-on-one consultation with Dr. Satyanarayana, MD (Dermatology), for thorough examination.",
    iconName: "Stethoscope",
  },
  {
    step: "04",
    title: "Personalized Medical Guidance",
    description: "Receive a clear diagnosis, evidence-based prescription, and skin-care guidance without unrealistic claims.",
    iconName: "FileCheck2",
  },
];

export const whyChooseReasons = [
  {
    title: "Dedicated Dermatology Care",
    description: "Focused exclusively on medical dermatology, skin disease evaluation, and clinical skin health.",
    iconName: "Award",
  },
  {
    title: "Qualified Dermatologist",
    description: "Consultation led directly by Dr. Satyanarayana with MD (Dermatology) qualification.",
    iconName: "GraduationCap",
  },
  {
    title: "Patient-Focused Consultation",
    description: "Empathetic, clear communication where your skin concerns are heard and examined properly.",
    iconName: "HeartPulse",
  },
  {
    title: "Convenient Kakinada Location",
    description: "Centrally positioned at Bhanugudi Junction, easily reachable by road across Kakinada and nearby towns.",
    iconName: "Navigation",
  },
  {
    title: "Professional Clinical Environment",
    description: "Clean consultation room, organized waiting space, and a respectful healthcare environment.",
    iconName: "Building2",
  },
  {
    title: "Transparent & Responsible",
    description: "No exaggerated promises or fear-based marketing. Transparent cash payment at reception.",
    iconName: "ShieldCheck",
  },
];
