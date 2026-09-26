import React, { createContext, useContext, useState, useEffect } from 'react';
import { HospitalConfig, defaultHospitalData, CommonConcern } from '../config/hospitalData';
import { Language, TranslationDictionary, translations } from '../translations';

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

const STORAGE_KEY = 'sarojini_devi_hospital_config_v2';
const LANG_STORAGE_KEY = 'sarojini_devi_lang_v1';

export const HospitalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  const [activeView, setActiveView] = useState<string>('home');
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
    setActiveView(view);
    if (view === 'home' && hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Sync hash routing if user pastes or changes url
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['about', 'doctor', 'treatments', 'hospital', 'patient-info', 'contact', 'book-appointment', 'privacy', 'terms'].includes(hash)) {
        setActiveView(hash);
      } else if (!hash) {
        setActiveView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
