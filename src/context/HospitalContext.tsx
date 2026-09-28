import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HospitalConfig, defaultHospitalData, CommonConcern } from '../config/hospitalData';
import { Language, TranslationDictionary, translations } from '../translations';

export const ROUTE_PATH_MAP: Record<string, string> = {
  home: '/',
  '/': '/',
  about: '/about',
  '/about': '/about',
  doctor: '/doctor',
  '/doctor': '/doctor',
  treatments: '/treatments',
  '/treatments': '/treatments',
  hospital: '/hospital',
  '/hospital': '/hospital',
  'patient-info': '/patient-information',
  'patient-information': '/patient-information',
  '/patient-info': '/patient-information',
  '/patient-information': '/patient-information',
  contact: '/contact',
  '/contact': '/contact',
  'book-appointment': '/appointment',
  appointment: '/appointment',
  '/book-appointment': '/appointment',
  '/appointment': '/appointment',
  privacy: '/privacy-policy',
  'privacy-policy': '/privacy-policy',
  '/privacy': '/privacy-policy',
  '/privacy-policy': '/privacy-policy',
  terms: '/terms',
  '/terms': '/terms',
};

export const getActiveViewFromPath = (pathname: string): string => {
  switch (pathname) {
    case '/about':
      return 'about';
    case '/doctor':
      return 'doctor';
    case '/treatments':
      return 'treatments';
    case '/hospital':
      return 'hospital';
    case '/patient-information':
    case '/patient-info':
      return 'patient-info';
    case '/contact':
      return 'contact';
    case '/appointment':
    case '/book-appointment':
      return 'book-appointment';
    case '/privacy-policy':
    case '/privacy':
      return 'privacy';
    case '/terms':
      return 'terms';
    case '/':
    default:
      return 'home';
  }
};

interface HospitalContextType {
  hospitalData: HospitalConfig;
  updateHospitalData: (newData: Partial<HospitalConfig>) => void;
  resetToDefaults: () => void;
  activeView: string;
  setActiveView: (view: string) => void;
  selectedConcern: CommonConcern | null;
  setSelectedConcern: (concern: CommonConcern | null) => void;
  lightboxImage: { src: string; title: string; alt: string; caption?: string } | null;
  setLightboxImage: (img: { src: string; title: string; alt: string; caption?: string } | null) => void;
  isConfigModalOpen: boolean;
  setIsConfigModalOpen: (open: boolean) => void;
  navigateTo: (view: string, hash?: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

const STORAGE_KEY = 'sarojini_devi_hospital_config_v3';
const LANG_STORAGE_KEY = 'sarojini_devi_lang_v1';

export const HospitalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [hospitalData, setHospitalData] = useState<HospitalConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultHospitalData, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return defaultHospitalData;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'te') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const t = translations[language];

  // Active view matches current route pathname
  const activeView = getActiveViewFromPath(location.pathname);
  const setActiveView = (view: string) => {
    const targetPath = ROUTE_PATH_MAP[view] || (view.startsWith('/') ? view : `/${view}`);
    navigate(targetPath);
  };

  const [selectedConcern, setSelectedConcern] = useState<CommonConcern | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    alt: string;
    caption?: string;
  } | null>(null);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Sync to localStorage
  const updateHospitalData = (newData: Partial<HospitalConfig>) => {
    setHospitalData((prev) => {
      const updated = { ...prev, ...newData };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save to localStorage:', err);
      }
      return updated;
    });
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHospitalData(defaultHospitalData);
  };

  const navigateTo = (view: string, hash?: string) => {
    const targetPath = ROUTE_PATH_MAP[view] || (view.startsWith('/') ? view : `/${view}`);
    const cleanHash = hash ? hash.replace('#', '') : undefined;

    if (location.pathname === targetPath) {
      if (cleanHash && cleanHash !== 'top') {
        const element = document.getElementById(cleanHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const fullTarget = cleanHash && cleanHash !== 'top' ? `${targetPath}#${cleanHash}` : targetPath;
      navigate(fullTarget);
    }
  };

  // Scroll to hash element or top on route navigation
  useEffect(() => {
    if (location.hash && location.hash !== '#top') {
      const hashId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Dynamic document title & canonical link per route and language
  useEffect(() => {
    const titlesEn: Record<string, string> = {
      '/': 'Dr. Satyanarayana | Sarojini Devi Skin Hospital, Kakinada',
      '/about': 'About Hospital | Sarojini Devi Skin Hospital, Kakinada',
      '/doctor': 'Dr. Satyanarayana, MD (Dermatology) | Sarojini Devi Skin Hospital',
      '/treatments': 'Dermatology Treatments & Skin Care | Sarojini Devi Skin Hospital',
      '/hospital': 'Hospital Facilities & Infrastructure | Sarojini Devi Skin Hospital',
      '/patient-information': 'Patient Information & Consultation Guide | Sarojini Devi Skin Hospital',
      '/contact': 'Contact & Clinic Location | Sarojini Devi Skin Hospital, Kakinada',
      '/appointment': 'Book Dermatology Consultation | Sarojini Devi Skin Hospital, Kakinada',
      '/privacy-policy': 'Privacy Policy | Sarojini Devi Skin Hospital',
      '/terms': 'Terms & Conditions | Sarojini Devi Skin Hospital',
    };

    const titlesTe: Record<string, string> = {
      '/': 'డాక్టర్ సత్యనారాయణ | సరోజినీ దేవి స్కిన్ హాస్పిటల్, కాకినాడ',
      '/about': 'ఆసుపత్రి పరిచయం | సరోజినీ దేవి స్కిన్ హాస్పిటల్, కాకినాడ',
      '/doctor': 'డాక్టర్ సత్యనారాయణ, MD (డెర్మటాలజీ) | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      '/treatments': 'చర్మ చికిత్సలు & సంరక్షణ | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      '/hospital': 'ఆసుపత్రి సౌకర్యాలు | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      '/patient-information': 'రోగులకు మార్గదర్శకాలు | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      '/contact': 'చిరునామా & సంప్రదింపులు | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      '/appointment': 'అపాయింట్‌మెంట్ బుకింగ్ | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      '/privacy-policy': 'ప్రైవసీ పాలసీ | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
      '/terms': 'నిబంధనలు & షరతులు | సరోజినీ దేవి స్కిన్ హాస్పిటల్',
    };

    const titles = language === 'te' ? titlesTe : titlesEn;
    const currentTitle = titles[location.pathname] || 'Dr. Satyanarayana | Sarojini Devi Skin Hospital, Kakinada';
    document.title = currentTitle;

    const canonicalEl = document.querySelector("link[rel='canonical']");
    if (canonicalEl) {
      const pathSuffix = location.pathname === '/' ? '' : location.pathname;
      canonicalEl.setAttribute('href', `https://sdh-tau.vercel.app${pathSuffix}`);
    }
  }, [location.pathname, language]);

  return (
    <HospitalContext.Provider
      value={{
        hospitalData,
        updateHospitalData,
        resetToDefaults,
        activeView,
        setActiveView,
        selectedConcern,
        setSelectedConcern,
        lightboxImage,
        setLightboxImage,
        isConfigModalOpen,
        setIsConfigModalOpen,
        navigateTo,
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => {
  const context = useContext(HospitalContext);
  if (!context) {
    throw new Error('useHospital must be used within a HospitalProvider');
  }
  return context;
};
