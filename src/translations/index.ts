export type Language = 'en' | 'te';

export interface TranslationDictionary {
  // Navigation
  nav: {
    home: string;
    about: string;
    doctor: string;
    treatments: string;
    hospital: string;
    patientInfo: string;
    contact: string;
    bookAppointment: string;
    hospitalEditor: string;
    callHospital: string;
    whatsappHospital: string;
  };
  // Top Announcement Bar
  topBar: {
    location: string;
    paymentBadge: string;
    paymentMode: string;
    bilingualNotice: string;
    switchPrompt: string;
  };
  // Hero Section
  hero: {
    verifiedBadge: string;
    tagline: string;
    doctorTitle: string;
    subtitle: string;
    bookBtn: string;
    whatsappBtn: string;
    contactBtn: string;
    badge1Title: string;
    badge1Sub: string;
    badge2Title: string;
    badge2Sub: string;
    badge3Title: string;
    badge3Sub: string;
  };
  // Trust Strip
  trustStrip: {
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    item4Title: string;
    item4Desc: string;
  };
  // About Hospital Section
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    viewGalleryBtn: string;
  };
  // Doctor Profile Section
  doctor: {
    badge: string;
    title: string;
    qualification: string;
    specialization: string;
    bioParagraph1: string;
    bioParagraph2: string;
    badgeExperience: string;
    badgeFocus: string;
    badgeDegree: string;
    consultationChamber: string;
    consultationDesc: string;
    highlightsTitle: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
    bookWithDoctorBtn: string;
  };
  // Treatments Section
  treatments: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allFilter: string;
    viewDetailBtn: string;
    consultationPrompt: string;
    disclaimer: string;
    concerns: Record<
      string,
      {
        title: string;
        category: string;
        description: string;
        clinicalNote: string;
      }
    >;
  };
  // Hospital Environment Section
  hospitalEnv: {
    badge: string;
    title: string;
    subtitle: string;
    photosBadge: string;
    exteriorTag: string;
    exteriorCaption: string;
    consultationTag: string;
    consultationCaption: string;
    waitingTag: string;
    waitingCaption: string;
    facility1: string;
    facility2: string;
    facility3: string;
    facility4: string;
  };
  // Patient Journey Section
  patientJourney: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  // Why Choose Us
  whyChoose: {
    badge: string;
    title: string;
    subtitle: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  // Appointment Section
  appointment: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    whatsappBannerTitle: string;
    whatsappBannerDesc: string;
    paymentNoticeTitle: string;
    paymentNoticeDesc: string;
    timingsNoticeTitle: string;
    privacyNoticeTitle: string;
    privacyNoticeDesc: string;
    formTitle: string;
    formDesc: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dateLabel: string;
    timeSlotLabel: string;
    timeSlotMorning: string;
    timeSlotEvening: string;
    reasonLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    whatsappCheckbox: string;
    whatsappCheckboxSub: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    ticketRef: string;
    ticketPatient: string;
    ticketSlot: string;
    ticketReason: string;
    ticketLocation: string;
    ticketPayment: string;
    sendWhatsappNowBtn: string;
    resetBtn: string;
  };
  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    hospitalName: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    landlineLabel: string;
    timingsLabel: string;
    timingsValue: string;
    paymentLabel: string;
    paymentValue: string;
    directionsBtn: string;
    whatsappBtn: string;
    bookBtn: string;
    mapsPlaceholder: string;
  };
  // Footer
  footer: {
    aboutText: string;
    quickLinks: string;
    patientGuide: string;
    consultationHours: string;
    disclaimer: string;
    copyright: string;
    privacyPolicy: string;
    termsConditions: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      doctor: 'Doctor',
      treatments: 'Treatments',
      hospital: 'Hospital',
      patientInfo: 'Patient Info',
      contact: 'Contact',
      bookAppointment: 'Book Appointment',
      hospitalEditor: 'Hospital Info Editor',
      callHospital: 'Call Hospital',
      whatsappHospital: 'WhatsApp',
    },
    topBar: {
      location: 'Bhanugudi Junction, Kakinada, AP',
      paymentBadge: 'Consultation Payment: ',
      paymentMode: 'Cash',
      bilingualNotice: 'Bilingual Architecture Enabled',
      switchPrompt: 'Switch Language',
    },
    hero: {
      verifiedBadge: 'Established 1987 • Bhanugudi Junction, Kakinada',
      tagline: 'Trusted Clinical Dermatology Care',
      doctorTitle: 'Dr. Satyanarayana, MD (Dermatology)',
      subtitle:
        'Evidence-based medical diagnosis and comprehensive treatment for skin diseases, chronic conditions, and dermatological care at Bhanugudi Junction, Kakinada.',
      bookBtn: 'Book an Appointment',
      whatsappBtn: 'WhatsApp Hospital',
      contactBtn: 'Contact Details',
      badge1Title: 'Since 1987',
      badge1Sub: '38+ Years of Service',
      badge2Title: 'Skin Specialist',
      badge2Sub: 'MD (Dermatology)',
      badge3Title: 'Direct Walk-in',
      badge3Sub: 'Tokens at Counter',
    },
    trustStrip: {
      item1Title: 'Dedicated Specialist Doctor',
      item1Desc: 'MD (Dermatology) qualified doctor focused entirely on clinical skin care.',
      item2Title: 'Centrally Located at Bhanugudi',
      item2Desc: 'Easily accessible clinical hospital at JM\'s CNR Towers, Bhanugudi Junction.',
      item3Title: 'Transparent Counter Payment',
      item3Desc: 'Clear, straightforward cash payment policy at the hospital counter.',
      item4Title: 'Patient-First Clinical Care',
      item4Desc: 'Individualized consultations without exaggerated or commercial promises.',
    },
    about: {
      badge: 'About Sarojini Devi Skin Hospital',
      title: 'Decades of Trusted Skin Care at Bhanugudi Junction',
      p1: 'Sarojini Devi Skin Hospital was founded in 1987 to provide reliable, professional, and accessible dermatological medical care for the people of Kakinada and East Godavari district.',
      p2: 'Led by Dr. Satyanarayana, MD (Dermatology), our hospital focuses strictly on evidence-based medical diagnosis and treatment of acute and chronic skin diseases, infections, and related conditions.',
      feature1Title: '38+ Years Medical Heritage',
      feature1Desc: 'Continuous clinical service since 1987 in Kakinada.',
      feature2Title: 'Dedicated Doctor Consultation',
      feature2Desc: 'Personal medical evaluations led directly by Dr. Satyanarayana.',
      feature3Title: 'Central Town Accessibility',
      feature3Desc: 'Prominent location at Bhanugudi Junction, close to transport hubs.',
      feature4Title: 'Clean Clinical Environment',
      feature4Desc: 'Well-maintained consultation chambers and comfortable waiting areas.',
      viewGalleryBtn: 'View Hospital Environment',
    },
    doctor: {
      badge: 'Consultant Dermatologist',
      title: 'Dr. Satyanarayana',
      qualification: 'MD (Dermatology)',
      specialization: 'Senior Consultant Dermatologist & Skin Disease Specialist',
      bioParagraph1:
        'Dr. Satyanarayana is a highly respected dermatologist in Kakinada with decades of clinical experience in evaluating and treating complex dermatological conditions. He completed his Post-Graduate MD in Dermatology, acquiring deep expertise in clinical diagnostics and medical skin therapies.',
      bioParagraph2:
        'His practice prioritizes thorough physical examination, empathetic patient communication, and evidence-based therapeutic regimens. Rather than unnecessary cosmetic procedures, his focus remains on genuine dermatological healing and long-term condition management.',
      badgeExperience: '38+ Years Clinical Practice',
      badgeFocus: 'Medical Dermatology Focus',
      badgeDegree: 'MD (Dermatology) Certified',
      consultationChamber: 'Doctor Consultation Chamber',
      consultationDesc: 'Modern, well-equipped consultation chamber ensuring patient privacy and detailed evaluations.',
      highlightsTitle: 'Key Clinical Approaches',
      highlight1: 'Accurate differential diagnosis of common and rare skin ailments.',
      highlight2: 'Conservative, safe medical prescriptions avoiding inappropriate steroid misuse.',
      highlight3: 'Clear guidance on patient skin hygiene, triggers, and preventative care.',
      bookWithDoctorBtn: 'Book Consultation with Dr. Satyanarayana',
    },
    treatments: {
      badge: 'Clinical Dermatology Services',
      title: 'Comprehensive Skin Disease Care',
      subtitle:
        'Dr. Satyanarayana provides diagnostic evaluation and personalized treatment protocols for a wide spectrum of skin, hair, and nail conditions.',
      searchPlaceholder: 'Search conditions (e.g. eczema, psoriasis, acne, allergy)...',
      allFilter: 'All Conditions',
      viewDetailBtn: 'View Clinical Details',
      consultationPrompt: 'Need consultation for a specific skin condition?',
      disclaimer: 'All diagnoses and prescriptions are provided during in-person clinical consultation.',
      concerns: {
        'skin-diseases': {
          title: 'Skin Diseases (General Dermatology)',
          category: 'Primary Clinical Focus',
          description:
            'Comprehensive diagnostic evaluation and clinical care for diverse acute and chronic dermatological conditions affecting the skin.',
          clinicalNote: 'In-person physical clinical examination by Dr. Satyanarayana for differential diagnosis and evidence-based prescription.',
        },
        eczema: {
          title: 'Eczema & Dermatitis',
          category: 'Inflammatory Conditions',
          description:
            'Medical assessment for itchy, inflamed, dry, or cracked skin, including contact dermatitis and atopic conditions.',
          clinicalNote: 'Identification of potential triggers, barrier restoration strategies, and prescribed dermatological therapy.',
        },
        psoriasis: {
          title: 'Psoriasis',
          category: 'Chronic Dermatoses',
          description:
            'Clinical management and monitoring for plaque psoriasis, scalp involvement, and related inflammatory skin scaling.',
          clinicalNote: 'Individualized management plan tailored to severity, location, and patient medical profile.',
        },
        'fungal-infections': {
          title: 'Fungal & Ringworm Infections',
          category: 'Infectious Skin Conditions',
          description:
            'Evaluation and targeted topical or systemic antifungal therapy for tinea (ringworm), candidiasis, and sweat-related fungal rashes.',
          clinicalNote: 'Proper diagnosis to avoid steroid-induced complications common with self-medication.',
        },
        acne: {
          title: 'Acne & Blemishes',
          category: 'Sebaceous Gland Disorders',
          description:
            'Clinical evaluation of teenage and adult acne, cystic breakouts, and post-acne inflammatory marks.',
          clinicalNote: 'Dermatologist-directed treatment regimen to control inflammation and minimize scarring risk.',
        },
        pigmentation: {
          title: 'Pigmentation & Melasma',
          category: 'Pigmentary Concerns',
          description:
            'Medical evaluation of dark patches, melasma, hyperpigmentation, and discoloration across different skin types.',
          clinicalNote: 'Safe clinical assessment focusing on underlying causes, photoprotection, and gentle medical care.',
        },
        'allergic-conditions': {
          title: 'Allergic Skin Reactions & Urticaria',
          category: 'Allergic Responses',
          description:
            'Assessment of hives, acute allergic flare-ups, seasonal rashes, and drug- or food-related skin manifestations.',
          clinicalNote: 'Systematic medical history evaluation and symptomatic relief under doctor guidance.',
        },
        'hair-scalp': {
          title: 'Hair & Scalp Conditions',
          category: 'Trichology & Scalp Health',
          description:
            'Medical assessment for severe dandruff, seborrheic dermatitis, patchy hair thinning, and scalp infections.',
          clinicalNote: 'Dermatological scalp examination to identify root causes and establish a targeted care plan.',
        },
        'pediatric-skin': {
          title: 'Pediatric Skin Conditions',
          category: 'Gentle Care for Children',
          description:
            'Gentle dermatological assessment for common rashes, cradle cap, viral exanthems, and sensitive skin issues in infants and children.',
          clinicalNote: 'Safe, age-appropriate dermatological care focusing on gentle child skin recovery.',
        },
      },
    },
    hospitalEnv: {
      badge: 'Hospital Environment',
      title: 'Our Clinic & Patient Facilities',
      subtitle:
        'A clean, organized healthcare setting located at Bhanugudi Junction, Kakinada, designed for patient comfort and professional care.',
      photosBadge: 'Authentic Hospital Photography',
      exteriorTag: 'Hospital Exterior & Entrance',
      exteriorCaption: 'Building facade at JM\'s CNR Towers, Bhanugudi Junction with verified Telugu signage.',
      consultationTag: 'Dr. Satyanarayana\'s Chamber',
      consultationCaption: 'Doctor\'s private examination desk with executive seating and clinical consultation space.',
      waitingTag: 'Patient Waiting Gallery',
      waitingCaption: 'Spacious seating area with reception counter and television for patient attendants.',
      facility1: 'Comfortable waiting seating for patients and families.',
      facility2: 'Private consultation room for confidential medical exams.',
      facility3: 'Easy elevator and stair access at JM\'s CNR Towers.',
      facility4: 'Cash payment counter with straightforward assistance.',
    },
    patientJourney: {
      badge: 'Patient Journey',
      title: 'What to Expect During Your Visit',
      subtitle: 'A straightforward, organized process from arrival to medical guidance.',
      step1Title: 'Book / Contact',
      step1Desc: 'Submit an appointment request online or reach out directly to plan your clinic visit.',
      step2Title: 'Visit the Hospital',
      step2Desc: 'Conveniently located at Bhanugudi Junction, Kakinada with accessible patient waiting facilities.',
      step3Title: 'Dermatology Consultation',
      step3Desc: 'Detailed one-on-one consultation with Dr. Satyanarayana, MD (Dermatology), for thorough examination.',
      step4Title: 'Personalized Medical Guidance',
      step4Desc: 'Receive a clear diagnosis, evidence-based prescription, and skin-care guidance without unrealistic claims.',
    },
    whyChoose: {
      badge: 'Why Sarojini Devi Skin Hospital',
      title: 'Why Patients Trust Dr. Satyanarayana',
      subtitle: 'A legacy of dedicated skin care rooted in medical integrity and patient respect.',
      reasons: [
        {
          title: 'Dedicated Dermatology Care',
          description: 'Focused exclusively on medical dermatology, skin disease evaluation, and clinical skin health.',
        },
        {
          title: 'Qualified Dermatologist',
          description: 'Consultation led directly by Dr. Satyanarayana with MD (Dermatology) qualification.',
        },
        {
          title: 'Patient-Focused Consultation',
          description: 'Empathetic, clear communication where your skin concerns are heard and examined properly.',
        },
        {
          title: 'Convenient Kakinada Location',
          description: 'Centrally positioned at Bhanugudi Junction, easily reachable across Kakinada and nearby towns.',
        },
        {
          title: 'Professional Clinical Environment',
          description: 'Clean consultation room, organized waiting space, and a respectful healthcare environment.',
        },
        {
          title: 'Transparent & Responsible',
          description: 'No exaggerated promises or fear-based marketing. Transparent cash payment at reception.',
        },
      ],
    },
    appointment: {
      badge: 'Book Consultation',
      title: 'Schedule Your Dermatology Visit',
      subtitle: 'Fast scheduling with instant WhatsApp automation',
      description: 'Schedule a consultation with Dr. Satyanarayana at Sarojini Devi Skin Hospital. We provide focused medical care for your dermatological conditions.',
      whatsappBannerTitle: 'Instant WhatsApp Dispatch to Hospital',
      whatsappBannerDesc: 'When you submit this form, your appointment details will be formatted and sent directly via WhatsApp to the hospital coordination desk (07947142420) for quick slot confirmation.',
      paymentNoticeTitle: 'Payment Information',
      paymentNoticeDesc: 'Hospital consultation fees and prescription services are collected via Cash directly at the hospital reception desk on the day of your visit.',
      timingsNoticeTitle: 'Hospital Timings',
      privacyNoticeTitle: 'Patient Privacy Safeguard',
      privacyNoticeDesc: 'Your personal information is used exclusively to facilitate your hospital appointment scheduling.',
      formTitle: 'Patient Appointment Request',
      formDesc: 'Fill out your details. They will automatically be sent to the hospital WhatsApp line for prompt scheduling.',
      fullNameLabel: 'Full Patient Name *',
      fullNamePlaceholder: 'e.g. Ramesh Kumar',
      phoneLabel: 'Patient Mobile Number (WhatsApp) *',
      phonePlaceholder: '10-digit mobile number',
      dateLabel: 'Preferred Consultation Date *',
      timeSlotLabel: 'Preferred Time Slot *',
      timeSlotMorning: 'Morning: 10:00 AM – 2:00 PM',
      timeSlotEvening: 'Evening: 5:00 PM – 8:00 PM',
      reasonLabel: 'Reason for Visit / Skin Condition *',
      notesLabel: 'Additional Notes / Symptoms (Optional)',
      notesPlaceholder: 'Briefly mention any symptoms or questions for Dr. Satyanarayana...',
      whatsappCheckbox: 'Send booking details to Hospital WhatsApp (07947142420) upon submission',
      whatsappCheckboxSub: 'Opens WhatsApp with formatted appointment summary so hospital desk can confirm your token.',
      submitBtn: 'Book & Send WhatsApp Request',
      submittingBtn: 'Generating WhatsApp Message...',
      successTitle: 'Consultation Request Ready',
      successDesc: 'Your booking has been prepared for Dr. Satyanarayana at Sarojini Devi Skin Hospital.',
      ticketRef: 'Reference ID',
      ticketPatient: 'Patient Name',
      ticketSlot: 'Date & Slot',
      ticketReason: 'Clinical Concern',
      ticketLocation: 'Location',
      ticketPayment: 'Payment Method',
      sendWhatsappNowBtn: 'Send Appointment via WhatsApp Now',
      resetBtn: 'Book Another Appointment',
    },
    contact: {
      badge: 'Location & Contact',
      title: 'Visit Sarojini Devi Skin Hospital',
      subtitle: 'Easily accessible clinic at Bhanugudi Junction, Kakinada.',
      hospitalName: 'Sarojini Devi Skin Hospital',
      addressLabel: 'Hospital Address',
      addressValue: 'JM\'s CNR Towers, Bhanugudi Junction, Kakinada, Andhra Pradesh, India',
      phoneLabel: 'Mobile & WhatsApp',
      landlineLabel: 'Hospital Desk / Landline',
      timingsLabel: 'Consultation Hours',
      timingsValue: 'Morning: 10:00 AM – 2:00 PM | Evening: 5:00 PM – 8:00 PM',
      paymentLabel: 'Accepted Payment Mode',
      paymentValue: 'Cash payment at reception desk',
      directionsBtn: 'Get Directions',
      whatsappBtn: 'WhatsApp Hospital',
      bookBtn: 'Book Appointment',
      mapsPlaceholder: 'Interactive Google Map centered at Bhanugudi Junction, Kakinada.',
    },
    footer: {
      aboutText:
        'Sarojini Devi Skin Hospital is a premier dermatology clinic in Kakinada, established in 1987. Led by Dr. Satyanarayana, MD (Dermatology), specializing in comprehensive skin disease evaluation and care.',
      quickLinks: 'Quick Links',
      patientGuide: 'Patient Guide',
      consultationHours: 'Consultation Timings',
      disclaimer:
        'Medical Disclaimer: Information on this website is intended for general informational purposes only and does not replace in-person professional medical examination. Consultation fees are payable in cash at the counter.',
      copyright: 'Sarojini Devi Skin Hospital. All Rights Reserved. Established 1987.',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms of Service',
    },
  },

  te: {
    nav: {
      home: 'హోమ్',
      about: 'ఆసుపత్రి గురించి',
      doctor: 'డాక్టర్ ప్రొఫైల్',
      treatments: 'చికిత్సలు',
      hospital: 'ఆసుపత్రి వాతావరణం',
      patientInfo: 'రోగుల సమాచారం',
      contact: 'సంప్రదించండి',
      bookAppointment: 'అపాయింట్‌మెంట్ బుకింగ్',
      hospitalEditor: 'ఆసుపత్రి వివరాల సవరణ',
      callHospital: 'ఫోన్ చేయండి',
      whatsappHospital: 'వాట్సాప్',
    },
    topBar: {
      location: 'భానుగుడి జంక్షన్, కాకినాడ, ఆంధ్రప్రదేశ్',
      paymentBadge: 'సంప్రదింపు చెల్లింపు: ',
      paymentMode: 'నగదు (Cash)',
      bilingualNotice: 'తెలుగు భాష సేవలు అందుబాటులో ఉన్నాయి',
      switchPrompt: 'భాష మార్చండి',
    },
    hero: {
      verifiedBadge: '1987 నుండి విశిష్ట సేవలు • భానుగుడి జంక్షన్, కాకినాడ',
      tagline: 'విశ్వసనీయ క్లినికల్ చర్మవ్యాధి సంరక్షణ',
      doctorTitle: 'డాక్టర్ సత్యనారాయణ, MD (డెర్మటాలజీ)',
      subtitle:
        'భానుగుడి జంక్షన్, కాకినాడ వద్ద 38+ సంవత్సరాలుగా సమగ్ర చర్మవ్యాధుల నిర్ధారణ, సోరియాసిస్, తామర, అలర్జీలు మరియు దీర్ఘకాలిక చర్మ సమస్యలకు నిపుణుల శాస్త్రీయ వైద్య చికిత్సలు.',
      bookBtn: 'అపాయింట్‌మెంట్ బుక్ చేసుకోండి',
      whatsappBtn: 'వాట్సాప్ ద్వారా సంప్రదించండి',
      contactBtn: 'సంప్రదింపు వివరాలు',
      badge1Title: 'స్థాపన: 1987',
      badge1Sub: '38+ ఏళ్ల నిరంతర సేవ',
      badge2Title: 'చర్మవ్యాధి నిపుణులు',
      badge2Sub: 'MD (డెర్మటాలజీ)',
      badge3Title: 'ప్రత్యక్ష టోకెన్లు',
      badge3Sub: 'కౌంటర్ వద్ద రిజిస్ట్రేషన్',
    },
    trustStrip: {
      item1Title: 'ప్రత్యేక చర్మవ్యాధి నిపుణులు',
      item1Desc: 'ఎండి (డెర్మటాలజీ) అర్హతతో కేవలం క్లినికల్ చర్మ సంరక్షణపై మాత్రమే దృష్టి.',
      item2Title: 'భానుగుడి సెంట్రల్ లొకేషన్',
      item2Desc: 'కాకినాడ నడిబొడ్డున జెఎమ్స్ సిఎన్ఆర్ టవర్స్, భానుగుడి జంక్షన్ వద్ద సులభ ప్రవేశం.',
      item3Title: 'పారదర్శక కౌంటర్ చెల్లింపు',
      item3Desc: 'ఆసుపత్రి రిసెప్షన్ కౌంటర్ వద్ద సరళమైన, స్పష్టమైన నగదు (Cash) చెల్లింపు విధానం.',
      item4Title: 'రోగి-కేంద్రీకృత వైద్యం',
      item4Desc: 'అవాస్తవిక ప్రచారాలు లేకుండా రోగి వ్యక్తిగత ఆరోగ్యానికి పూర్తి ప్రాధాన్యత.',
    },
    about: {
      badge: 'సరోజినీ దేవి స్కిన్ హాస్పిటల్ గురించి',
      title: 'కాకినాడ భానుగుడి వద్ద దశాబ్దాల నమ్మకమైన చర్మ వైద్యం',
      p1: 'సరోజినీ దేవి స్కిన్ హాస్పిటల్ 1987లో కాకినాడ మరియు తూర్పు గోదావరి జిల్లా ప్రజలకు అత్యుత్తమమైన, నమ్మదగిన చర్మవ్యాధి వైద్య సేవలను అందించే లక్ష్యంతో స్థాపించబడింది.',
      p2: 'డాక్టర్ సత్యనారాయణ, MD (డెర్మటాలజీ) గారి ఆధ్వర్యంలో, మా ఆసుపత్రి తీవ్రమైన మరియు దీర్ఘకాలిక చర్మ వ్యాధులు, ఫంగల్ ఇన్ఫెక్షన్లు, సోరియాసిస్ మరియు ఇతర చర్మ సమస్యలకు శాస్త్రీయమైన నిర్ధారణ మరియు చికిత్సలను అందిస్తుంది.',
      feature1Title: '38+ ఏళ్ల వైద్య వారసత్వం',
      feature1Desc: '1987 నుండి కాకినాడలో నిరంతర క్లినికల్ సేవలు.',
      feature2Title: 'డాక్టర్ గారి ప్రత్యక్ష సంప్రదింపులు',
      feature2Desc: 'డాక్టర్ సత్యనారాయణ గారిచే స్వయంగా రోగ పరీక్ష.',
      feature3Title: 'నగర కేంద్రంలో అనుకూలమైన స్థలం',
      feature3Desc: 'భానుగుడి జంక్షన్ వద్ద బస్సు, ఆటో సౌకర్యాలకు అతి సమీపంలో.',
      feature4Title: 'పరిశుభ్రమైన క్లినికల్ వాతావరణం',
      feature4Desc: 'నిశ్శబ్దమైన కన్సల్టేషన్ గది మరియు విశాలమైన వెయిటింగ్ ఏరియా.',
      viewGalleryBtn: 'ఆసుపత్రి ఛాయాచిత్రాలు చూడండి',
    },
    doctor: {
      badge: 'కన్సల్టెంట్ డెర్మటాలజిస్ట్',
      title: 'డాక్టర్ సత్యనారాయణ',
      qualification: 'MD (డెర్మటాలజీ)',
      specialization: 'సీనియర్ కన్సల్టెంట్ డెర్మటాలజిస్ట్ & చర్మవ్యాధి నిపుణులు',
      bioParagraph1:
        'డాక్టర్ సత్యనారాయణ గారు కాకినాడలో అత్యంత గౌరవనీయులైన సీనియర్ చర్మవ్యాధి నిపుణులు. వారు పోస్ట్ గ్రాడ్యుయేట్ MD (డెర్మటాలజీ) పూర్తి చేసి, దశాబ్దాల కాలంలో వేలాది మంది రోగులకు సంక్లిష్ట చర్మ వ్యాధులకు సమర్థవంతమైన చికిత్స అందించారు.',
      bioParagraph2:
        'వారి వైద్య విధానం రోగిని క్షుణ్ణంగా శారీరకంగా పరీక్షించడం, సమస్యను జాగ్రత్తగా వినడం మరియు అవసరమైన మందులను మాత్రమే సిఫార్సు చేయడంపై ఆధారపడి ఉంటుంది. అనవసరమైన ఖరీదైన చికిత్సలకు బదులుగా, వ్యాధిని మూలాల నుండి నయం చేయడం వారి ప్రాధాన్యత.',
      badgeExperience: '38+ ఏళ్ల వైద్య అనుభవం',
      badgeFocus: 'క్లినికల్ చర్మవ్యాధి నైపుణ్యం',
      badgeDegree: 'సర్టిఫైడ్ MD (డెర్మటాలజీ)',
      consultationChamber: 'డాక్టర్ కన్సల్టేషన్ ఛాంబర్',
      consultationDesc: 'రోగి గోప్యతను గౌరవిస్తూ, సంపూర్ణ పరీక్షకు అనువైన ఆధునిక కన్సల్టేషన్ గది.',
      highlightsTitle: 'ముఖ్యమైన వైద్య విధానాలు',
      highlight1: 'సాధారణ మరియు అరుదైన చర్మ సమస్యల యొక్క ఖచ్చితమైన నిర్ధారణ.',
      highlight2: 'స్టెరాయిడ్ల దుర్వినియోగాన్ని అరికడుతూ సురక్షితమైన మందుల సిఫార్సు.',
      highlight3: 'చర్మ పరిశుభ్రత, వ్యాధి ప్రేరకాలు మరియు ముందస్తు జాగ్రత్తలపై మార్గదర్శనం.',
      bookWithDoctorBtn: 'డాక్టర్ సత్యనారాయణ గారితో సంప్రదింపు బుక్ చేసుకోండి',
    },
    treatments: {
      badge: 'క్లినికల్ డెర్మటాలజీ సేవలు',
      title: 'సమగ్ర చర్మవ్యాధి చికిత్సలు',
      subtitle:
        'డాక్టర్ సత్యనారాయణ గారు చర్మం, జుట్టు మరియు గోళ్ల సంబంధిత అన్ని రకాల సమస్యలకు ప్రత్యేక రోగ నిర్ధారణ మరియు చికిత్సా ప్రణాళికలను అందిస్తారు.',
      searchPlaceholder: 'సమస్యను వెతకండి (ఉదా: తామర, సోరియాసిస్, మొటిమలు, అలర్జీ)...',
      allFilter: 'అన్ని సమస్యలు',
      viewDetailBtn: 'వైద్య వివరాలు చూడండి',
      consultationPrompt: 'మీ చర్మ సమస్యకు ప్రత్యేక వైద్య సలహా కావాలా?',
      disclaimer: 'అన్ని నిర్ధారణలు మరియు ప్రిస్క్రిప్షన్లు ఆసుపత్రిలో ప్రత్యక్ష వైద్య పరీక్ష అనంతరం మాత్రమే ఇవ్వబడతాయి.',
      concerns: {
        'skin-diseases': {
          title: 'సాధారణ చర్మ వ్యాధులు (జనరల్ డెర్మటాలజీ)',
          category: 'ప్రధాన క్లినికల్ సేవ',
          description:
            'చర్మంపై వచ్చే తీవ్రమైన మరియు దీర్ఘకాలిక సమస్యల సమగ్ర పరీక్ష మరియు నిపుణుల వైద్య చికిత్స.',
          clinicalNote: 'ఖచ్చితమైన రోగ నిర్ధారణ మరియు శాస్త్రీయ ఆధారిత మందుల కోసం డాక్టర్ సత్యనారాయణ గారిచే ప్రత్యక్ష పరీక్ష.',
        },
        eczema: {
          title: 'తామర మరియు చర్మపు మంట (ఎగ్జిమా & డెర్మటైటిస్)',
          category: 'ఇన్‌ఫ్లమేటరీ పరిస్థితులు',
          description:
            'దురద, ఎరుపుదనము, పొడిబారడం లేదా చర్మం పగలడం వంటి ఎగ్జిమా మరియు కాంటాక్ట్ డెర్మటైటిస్ సమస్యల చికిత్స.',
          clinicalNote: 'అలర్జీ కారకాలను గుర్తించడం, చర్మపు రక్షణ పునరుద్ధరణ మరియు మందుల నిర్వహణ.',
        },
        psoriasis: {
          title: 'సోరియాసిస్ (Psoriasis)',
          category: 'దీర్ఘకాలిక చర్మ వ్యాధులు',
          description:
            'ప్లాక్ సోరియాసిస్, స్కాల్ప్ సోరియాసిస్ మరియు చర్మం పొలుసులుగా ఊడిపోయే దీర్ఘకాలిక సమస్యల సమర్థవంతమైన నిర్వహణ.',
          clinicalNote: 'వ్యాధి తీవ్రత మరియు రోగి ఆరోగ్యాన్ని బట్టి వ్యక్తిగతీకరించిన దీర్ఘకాలిక చికిత్స ప్రణాళిక.',
        },
        'fungal-infections': {
          title: 'ఫంగల్ ఇన్ఫెక్షన్లు మరియు గజ్జి / తామర (టినియా)',
          category: 'ఇన్ఫెక్షన్ సంబంధిత సమస్యలు',
          description:
            'టినియా (రింగ్‌వార్మ్), చెమట వల్ల వచ్చే ఫంగల్ దద్దుర్లు మరియు ఈస్ట్ ఇన్ఫెక్షన్లకు లక్షిత యాంటీఫంగల్ చికిత్స.',
          clinicalNote: 'సొంత వైద్యం వల్ల వచ్చే స్టెరాయిడ్ సమస్యలను నివారిస్తూ సరైన వైద్యుల పర్యవేక్షణలో చికిత్స.',
        },
        acne: {
          title: 'మొటిమలు మరియు ముఖంపై మచ్చలు (Acne)',
          category: 'గ్రంథుల సంబంధిత సమస్యలు',
          description:
            'యువత మరియు పెద్దలలో వచ్చే తీవ్రమైన మొటిమలు, చీము గడ్డలు మరియు మొటిమల అనంతర మచ్చల చికిత్స.',
          clinicalNote: 'చర్మంపై శాశ్వత మచ్చలు పడకుండా వాపును నియంత్రించే ప్రత్యేక డెర్మటాలజీ విధానం.',
        },
        pigmentation: {
          title: 'నల్ల మచ్చలు మరియు మంగు (మెలాస్మా & పిగ్మెంటేషన్)',
          category: 'పిగ్మెంటేషన్ సమస్యలు',
          description:
            'ముఖంపై నల్లటి మచ్చలు, మంగు (మెలాస్మా), మరియు అసమాన చర్మ రంగుకు సురక్షితమైన వైద్య పరిష్కారాలు.',
          clinicalNote: 'అంతర్గత కారణాలను గుర్తిస్తూ, ఎండ నుండి రక్షణ మరియు సురక్షితమైన వైద్య సంరక్షణ.',
        },
        'allergic-conditions': {
          title: 'చర్మపు అలర్జీలు మరియు దద్దుర్లు (Urticaria)',
          category: 'అలర్జీ ప్రతిస్పందనలు',
          description:
            'హఠాత్తుగా వచ్చే దద్దుర్లు, దురదలు, ఆహార లేదా ఔషధ అలర్జీల తక్షణ ఉపశమనం మరియు మూలాల గుర్తింపు.',
          clinicalNote: 'రోగి ఆరోగ్య చరిత్ర ఆధారంగా క్రమబద్ధమైన పరీక్ష మరియు వేగవంతమైన ఉపశమనం.',
        },
        'hair-scalp': {
          title: 'జుట్టు మరియు తల చర్మ సమస్యలు (Scalp & Hair)',
          category: 'ట్రైకాలజీ మరియు స్కాల్ప్ ఆరోగ్యం',
          description:
            'తీవ్రమైన చుండ్రు, సెబోరిక్ డెర్మటైటిస్, జుట్టు రాలడం మరియు తలలో ఇన్ఫెక్షన్లకు వైద్య పరిష్కారాలు.',
          clinicalNote: 'మూల కారణాలను నిర్ధారించడానికి తల చర్మపు క్షుణ్ణమైన డెర్మటాలజీ పరీక్ష.',
        },
        'pediatric-skin': {
          title: 'పిల్లల చర్మ సమస్యలు (Pediatric Care)',
          category: 'పిల్లల సున్నిత సంరక్షణ',
          description:
            'శిశువులు మరియు పిల్లలలో వచ్చే డైపర్ రాషెస్, సున్నితమైన చర్మ సమస్యలు మరియు అలర్జీలకు మృదువైన సంరక్షణ.',
          clinicalNote: 'పిల్లల సున్నిత చర్మానికి తగిన సురక్షితమైన, వయోనుకూలమైన ఔషధాల సిఫార్సు.',
        },
      },
    },
    hospitalEnv: {
      badge: 'ఆసుపత్రి వాతావరణం',
      title: 'మా ఆసుపత్రి & రోగుల సౌకర్యాలు',
      subtitle:
        'కాకినాడ భానుగుడి జంక్షన్ వద్ద రోగుల సౌకర్యార్థం తీర్చిదిద్దిన పరిశుభ్రమైన, క్రమబద్ధమైన వైద్య ప్రాంగణం.',
      photosBadge: 'యదార్థ ఆసుపత్రి ఛాయాచిత్రాలు',
      exteriorTag: 'ఆసుపత్రి ముఖద్వారం & భవనం',
      exteriorCaption: 'భానుగుడి జంక్షన్ వద్ద జెఎమ్స్ సిఎన్ఆర్ టవర్స్‌లో తెలుగు సైన్‌బోర్డుతో కూడిన ఆసుపత్రి భవనం.',
      consultationTag: 'డాక్టర్ సత్యనారాయణ గారి ఛాంబర్',
      consultationCaption: 'డాక్టర్ గారి వ్యక్తిగత పరీక్షా డెస్క్, సౌకర్యవంతమైన కుర్చీలు మరియు క్లినికల్ స్పేస్.',
      waitingTag: 'రోగుల వెయిటింగ్ హాల్ & రిసెప్షన్',
      waitingCaption: 'రోగులు మరియు సహాయకుల కొరకు విశాలమైన సీటింగ్, టెలివిజన్ మరియు రిసెప్షన్ కౌంటర్.',
      facility1: 'రోగులు మరియు కుటుంబ సభ్యులకు సౌకర్యవంతమైన సీటింగ్ సౌకర్యం.',
      facility2: 'వ్యక్తిగత గోప్యతతో కూడిన ప్రైవేట్ కన్సల్టేషన్ గది.',
      facility3: 'భవనంలో లిఫ్ట్ మరియు మెట్ల సౌకర్యం.',
      facility4: 'రిసెప్షన్ వద్ద స్పష్టమైన నగదు చెల్లింపు కౌంటర్.',
    },
    patientJourney: {
      badge: 'రోగుల మార్గదర్శి',
      title: 'మీ ఆసుపత్రి సందర్శన ఎలా ఉంటుంది?',
      subtitle: 'ఆసుపత్రికి రాక నుండి వైద్య సలహా వరకు క్రమబద్ధమైన 4 దశలు.',
      step1Title: 'బుకింగ్ / సంప్రదింపు',
      step1Desc: 'ఆన్‌లైన్ ద్వారా లేదా ఫోన్ ద్వారా మీ సంప్రదింపు అపాయింట్‌మెంట్‌ను ప్లాన్ చేసుకోండి.',
      step2Title: 'ఆసుపత్రికి విచ్చేయండి',
      step2Desc: 'కాకినాడ భానుగుడి జంక్షన్ వద్ద సులభంగా చేరుకోగల ప్రదేశం మరియు ప్రశాంత వాతావరణం.',
      step3Title: 'డాక్టర్ గారి సంప్రదింపు',
      step3Desc: 'డాక్టర్ సత్యనారాయణ, MD (డెర్మటాలజీ) గారితో ముఖాముఖి ప్రత్యక్ష వైద్య పరీక్ష.',
      step4Title: 'వ్యక్తిగత వైద్య సలహా',
      step4Desc: 'స్పష్టమైన రోగ నిర్ధారణ, శాస్త్రీయ ఆధారిత ప్రిస్క్రిప్షన్ మరియు చర్మ సంరక్షణ సలహాలు పొందండి.',
    },
    whyChoose: {
      badge: 'ప్రత్యేకతలు',
      title: 'రోగులు డాక్టర్ సత్యనారాయణ గారిని ఎందుకు ఎంచుకుంటారు?',
      subtitle: 'వైద్య నిబద్ధత మరియు రోగుల గౌరవంపై ఆధారపడిన దశాబ్దాల విశ్వాసం.',
      reasons: [
        {
          title: 'ప్రత్యేక చర్మ వైద్య సంరక్షణ',
          description: 'కేవలం క్లినికల్ డెర్మటాలజీ మరియు చర్మ వ్యాధుల నిర్ధారణపై పూర్తి దృష్టి.',
        },
        {
          title: 'అర్హత కలిగిన నిపుణులు',
          description: 'MD (డెర్మటాలజీ) ఉత్తీర్ణులైన డాక్టర్ సత్యనారాయణ గారిచే స్వయంగా సంప్రదింపులు.',
        },
        {
          title: 'రోగి పట్ల శ్రద్ధతో కూడిన సంప్రదింపు',
          description: 'మీ సమస్యలను సావధానంగా విని, రోగ నిర్ధారణను వివరంగా వివరించే విధానం.',
        },
        {
          title: 'కాకినాడ నడిబొడ్డున ఉన్న ప్రదేశం',
          description: 'భానుగుడి జంక్షన్ వద్ద కాకినాడ మరియు చుట్టుపక్కల గ్రామాల వారికి అత్యంత సులభ ప్రవేశం.',
        },
        {
          title: 'పరిశుభ్రమైన క్లినికల్ వాతావరణం',
          description: 'పరిశుభ్రమైన కన్సల్టేషన్ గది, విశాలమైన నిరీక్షణ హాల్ మరియు గౌరవప్రదమైన వాతావరణం.',
        },
        {
          title: 'పారదర్శకమైన నైతిక వైద్యం',
          description: 'అనవసర ప్రచారాలు లేని సహేతుకమైన వైద్యం. రిసెప్షన్ వద్ద నేరుగా నగదు చెల్లింపు.',
        },
      ],
    },
    appointment: {
      badge: 'అపాయింట్‌మెంట్ బుకింగ్',
      title: 'మీ సంప్రదింపు సమయాన్ని ఎంచుకోండి',
      subtitle: 'తక్షణ వాట్సాప్ ఆటోమేషన్‌తో సులభమైన బుకింగ్',
      description: 'సరోజినీ దేవి స్కిన్ హాస్పిటల్‌లో డాక్టర్ సత్యనారాయణ గారితో సంప్రదింపును షెడ్యూల్ చేయండి. మీ చర్మ సమస్యలకు నిపుణుల వైద్య సేవలు అందిస్తాము.',
      whatsappBannerTitle: 'ఆసుపత్రి వాట్సాప్‌కు తక్షణ సందేశం',
      whatsappBannerDesc: 'మీరు ఈ ఫారమ్‌ను సమర్పించిన వెంటనే, మీ వివరాలు ఆసుపత్రి వాట్సాప్ నంబర్‌కు (07947142420) నేరుగా పంపబడతాయి.',
      paymentNoticeTitle: 'చెల్లింపు సమాచారం',
      paymentNoticeDesc: 'ఆసుపత్రి సంప్రదింపు మరియు మందుల సేవలకు ఫీజు నేరుగా ఆసుపత్రి రిసెప్షన్ కౌంటర్ వద్ద నగదు (Cash) రూపంలో చెల్లించాలి.',
      timingsNoticeTitle: 'ఆసుపత్రి వేళలు',
      privacyNoticeTitle: 'రోగుల గోప్యతా రక్షణ',
      privacyNoticeDesc: 'మీ వివరాలు కేవలం మీ అపాయింట్‌మెంట్ షెడ్యూల్ కొరకు మాత్రమే ఉపయోగించబడతాయి.',
      formTitle: 'రోగి అపాయింట్‌మెంట్ దరఖాస్తు',
      formDesc: 'మీ వివరాలను నమోదు చేయండి. అవి త్వరిత నిర్ధారణ కొరకు ఆసుపత్రి వాట్సాప్‌కు పంపబడతాయి.',
      fullNameLabel: 'రోగి పూర్తి పేరు *',
      fullNamePlaceholder: 'ఉదా: రమేష్ కుమార్',
      phoneLabel: 'మొబైల్ నంబర్ (వాట్సాప్) *',
      phonePlaceholder: '10 అంకెల మొబైల్ నంబర్',
      dateLabel: 'కావలసిన తేదీ *',
      timeSlotLabel: 'కావలసిన సమయం *',
      timeSlotMorning: 'ఉదయం: 10:00 AM – 2:00 PM',
      timeSlotEvening: 'సాయంత్రం: 5:00 PM – 8:00 PM',
      reasonLabel: 'చర్మ సమస్య / సంప్రదింపు కారణం *',
      notesLabel: 'ఇతర లక్షణాలు / వివరాలు (ఐచ్ఛికం)',
      notesPlaceholder: 'డాక్టర్ గారికి తెలియజేయాలనుకుంటున్న వివరాలు...',
      whatsappCheckbox: 'దరఖాస్తు వివరాలను ఆసుపత్రి వాట్సాప్ (07947142420) కు పంపండి',
      whatsappCheckboxSub: 'ఆసుపత్రి సిబ్బంది మీ టోకెన్ ధృవీకరించడానికి వాట్సాప్ సందేశం రూపొందించబడుతుంది.',
      submitBtn: 'బుక్ చేసి వాట్సాప్ ద్వారా పంపండి',
      submittingBtn: 'వాట్సాప్ సందేశం సిద్ధమవుతోంది...',
      successTitle: 'సంప్రదింపు దరఖాస్తు సిద్ధమైంది',
      successDesc: 'డాక్టర్ సత్యనారాయణ గారి వద్ద మీ సంప్రదింపు వివరాలు నమోదు చేయబడ్డాయి.',
      ticketRef: 'రిఫరెన్స్ సంఖ్య',
      ticketPatient: 'రోగి పేరు',
      ticketSlot: 'తేదీ & సమయం',
      ticketReason: 'చర్మ సమస్య',
      ticketLocation: 'ఆసుపత్రి చిరునామా',
      ticketPayment: 'చెల్లింపు విధానం',
      sendWhatsappNowBtn: 'ఇప్పుడే వాట్సాప్ ద్వారా పంపండి',
      resetBtn: 'మరొక అపాయింట్‌మెంట్ బుక్ చేయండి',
    },
    contact: {
      badge: 'చిరునామా & సంప్రదింపు',
      title: 'సరోజినీ దేవి స్కిన్ హాస్పిటల్‌ను సందర్శించండి',
      subtitle: 'కాకినాడ భానుగుడి జంక్షన్ వద్ద సులభంగా చేరుకోగల ప్రదేశం.',
      hospitalName: 'సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      addressLabel: 'ఆసుపత్రి చిరునామా',
      addressValue: 'జెఎమ్స్ సిఎన్ఆర్ టవర్స్, భానుగుడి జంక్షన్, కాకినాడ, ఆంధ్రప్రదేశ్, భారతదేశం',
      phoneLabel: 'మొబైల్ & వాట్సాప్',
      landlineLabel: 'ల్యాండ్‌లైన్ / డెస్క్',
      timingsLabel: 'సంప్రదింపు సమయాలు',
      timingsValue: 'ఉదయం: 10:00 AM – 2:00 PM | సాయంత్రం: 5:00 PM – 8:00 PM',
      paymentLabel: 'చెల్లింపు విధానం',
      paymentValue: 'రిసెప్షన్ కౌంటర్ వద్ద నగదు (Cash) చెల్లింపు',
      directionsBtn: 'రూట్ మ్యాప్ (Directions)',
      whatsappBtn: 'వాట్సాప్ చేయండి',
      bookBtn: 'అపాయింట్‌మెంట్ బుక్ చేయండి',
      mapsPlaceholder: 'భానుగుడి జంక్షన్, కాకినాడ గూగుల్ మ్యాప్.',
    },
    footer: {
      aboutText:
        'సరోజినీ దేవి స్కిన్ హాస్పిటల్ 1987 నుండి కాకినాడలో ప్రముఖ చర్మవ్యాధి క్లినిక్. డాక్టర్ సత్యనారాయణ, MD (డెర్మటాలజీ) గారి నేతృత్వంలో చర్మవ్యాధుల సమగ్ర రోగ నిర్ధారణ మరియు నిపుణుల వైద్య సేవలు అందిస్తుంది.',
      quickLinks: 'త్వరిత లింకులు',
      patientGuide: 'రోగుల సమాచారం',
      consultationHours: 'సంప్రదింపు సమయాలు',
      disclaimer:
        'వైద్య గమనిక: ఈ వెబ్‌సైట్‌లోని సమాచారం సాధారణ అవగాహన కొరకు మాత్రమే మరియు ఇది ప్రత్యక్ష వైద్య పరీక్షకు ప్రత్యామ్నాయం కాదు. సంప్రదింపు ఫీజు కౌంటర్ వద్ద నగదు రూపంలో చెల్లించవలసి ఉంటుంది.',
      copyright: 'సరోజినీ దేవి స్కిన్ హాస్పిటల్. సర్వ హక్కులు ప్రత్యేకించబడినవి. స్థాపన: 1987.',
      privacyPolicy: 'గోప్యతా విధానం (Privacy)',
      termsConditions: 'నిబంధనలు (Terms)',
    },
  },
};
