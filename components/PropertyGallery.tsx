'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

export interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const total = images.length;

  useEffect(() => {
    thumbnailRefs.current[selectedIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [selectedIndex]);
  if (total === 0) return null;

  const currentImage = images[selectedIndex] || images[0];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Visualizador principal grande */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-navy/5 border border-borderline group shadow-sm">
        <img
          src={currentImage}
          alt={`${title} - Fotografía ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-300 select-none cursor-pointer group-hover:scale-[1.01]"
          onClick={() => setIsFullscreen(true)}
        />

        {/* Contador de fotos */}
        <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-sm border border-white/20">
          Foto {selectedIndex + 1} de {total}
        </div>

        {/* Botón pantalla completa */}
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          className="absolute bottom-4 right-4 bg-navy/80 hover:bg-navy backdrop-blur-md text-white p-2.5 rounded-xl shadow-sm transition-colors border border-white/20 cursor-pointer"
          aria-label="Ver a pantalla completa"
          title="Ver a pantalla completa"
        >
          <Expand className="w-4 h-4" />
        </button>

        {/* Flechas de navegación principal */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 hover:bg-white text-navy shadow-lg flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 cursor-pointer border border-borderline"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 hover:bg-white text-navy shadow-lg flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 cursor-pointer border border-borderline"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Fila de miniaturas */}
      {total > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((img, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <button
                key={`${img}-${idx}`}
                ref={(el) => {
                  thumbnailRefs.current[idx] = el;
                }}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`relative shrink-0 w-24 sm:w-28 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-action ring-2 ring-action/30 scale-[1.02] opacity-100 shadow-sm'
                    : 'border-borderline opacity-65 hover:opacity-100 hover:border-navy/40'
                }`}
                aria-label={`Ver foto ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Modal a pantalla completa */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Cerrar vista completa"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt={`${title} - Foto ${selectedIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl select-none shadow-2xl"
            />

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full border border-white/20">
              {selectedIndex + 1} / {total}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyGallery;
