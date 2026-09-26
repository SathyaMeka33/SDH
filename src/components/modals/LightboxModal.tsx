import React, { useEffect } from 'react';
import { useHospital } from '../../context/HospitalContext';
import { X, MapPin } from 'lucide-react';

export const LightboxModal: React.FC = () => {
  const { lightboxImage, setLightboxImage } = useHospital();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxImage, setLightboxImage]);

  if (!lightboxImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in"
      onClick={() => setLightboxImage(null)}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {/* Close button */}
      <button
        onClick={() => setLightboxImage(null)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2.5 rounded-full transition-colors z-10"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
        />

        {/* Caption */}
        <div className="mt-3 text-center text-white max-w-2xl px-4">
          <h3 className="text-base font-bold text-white drop-shadow-xs">
            {lightboxImage.title}
          </h3>
          {lightboxImage.caption && (
            <p className="text-xs text-blue-200 mt-1">
              {lightboxImage.caption}
            </p>
          )}
          <div className="text-[11px] text-blue-300/70 mt-1 flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>Sarojini Devi Skin Hospital • Bhanugudi Junction, Kakinada</span>
          </div>
        </div>
      </div>
    </div>
  );
};
