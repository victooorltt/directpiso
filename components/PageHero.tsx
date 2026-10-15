import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Home, HeartHandshake, Building2 } from 'lucide-react';

export interface HeroCta {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroBenefit {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  label: string;
}

export interface PageHeroProps {
  variant?: 'centered' | 'gradient' | 'overlay' | 'centered-dark' | 'split-light';
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  imageSrc?: string;
  bgImage?: string; // alias for imageSrc
  imageAlt?: string;
  imagePosition?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  benefits?: HeroBenefit[];
  showBenefits?: boolean;
  children?: React.ReactNode;
  className?: string;
  overlay?: React.ReactNode;
  // Deprecated props accepted to prevent breaking if passed, but intentionally not rendered (NO eyebrows)
  eyebrow?: string;
  badge?: string;
  imageCaption?: string;
}

const DEFAULT_BENEFITS: HeroBenefit[] = [
  { icon: MapPin, label: 'Oviedo' },
  { icon: Home, label: 'Venta & Alquiler' },
  { icon: HeartHandshake, label: 'Asesoramiento' },
  { icon: Building2, label: 'Gestión Cercana' },
];

export default function PageHero({
  variant = 'centered',
  title,
  subtitle,
  subtitleClassName,
  imageSrc,
  bgImage,
  imageAlt = 'Directpiso Inmobiliaria en Oviedo y Asturias',
  imagePosition,
  primaryCta,
  secondaryCta,
  benefits,
  showBenefits = false,
  children,
  className = '',
  overlay,
}: PageHeroProps) {
  const effectiveImage = imageSrc || bgImage || '/assets/editorial/hero-inicio.webp';
  const effectiveBenefits = benefits || (showBenefits ? DEFAULT_BENEFITS : null);
  const isGradient = variant === 'gradient' || variant === 'split-light';

  if (isGradient) {
    return (
      <section
        className={`relative w-full overflow-hidden bg-white min-h-[540px] lg:h-[calc(100vh-5rem)] lg:min-h-[640px] flex items-center border-b border-borderline ${className}`}
      >
        {/* Full-bleed background image with right-alignment on desktop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <img
            src={effectiveImage}
            alt={imageAlt}
            className={`h-full w-full object-cover ${
              imagePosition || 'object-center lg:object-[right_center]'
            }`}
            fetchPriority="high"
            loading="eager"
          />
          {/* Overlay: natural balanced fade protecting subtitle text without blocking the photo */}
          {overlay ? (
            overlay
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:from-10% lg:via-white/80 lg:via-38% lg:to-transparent lg:to-75%"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Content: centered on mobile, left-aligned on desktop */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-20 w-full">
          <div className="max-w-xl lg:max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy leading-[1.12]">
              {title}
            </h1>

            {subtitle && (
              <div
                className={
                  subtitleClassName ||
                  'mt-5 text-lg sm:text-xl text-subtext leading-relaxed font-normal max-w-xl mx-auto lg:mx-0'
                }
              >
                {subtitle}
              </div>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 bg-action hover:bg-action-hover text-white font-semibold px-8 py-3.5 text-base rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                  >
                    <span>{primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white border border-borderline hover:border-navy/30 text-navy font-semibold px-8 py-3.5 text-base rounded-xl shadow-xs transition-colors w-full sm:w-auto"
                  >
                    <span>{secondaryCta.label}</span>
                  </Link>
                )}
              </div>
            )}

            {effectiveBenefits && effectiveBenefits.length > 0 && (
              <div className="mt-8 sm:mt-10 pt-6 border-t border-navy/15 max-w-2xl mx-auto lg:mx-0">
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-nowrap sm:items-center sm:justify-start sm:gap-8 lg:gap-10 text-xs sm:text-sm font-semibold text-navy">
                  {effectiveBenefits.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-center sm:justify-start gap-2 whitespace-nowrap bg-white/50 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none py-1.5 px-3 sm:p-0 rounded-lg sm:rounded-none border border-white/60 sm:border-0 shadow-xs sm:shadow-none"
                      >
                        <Icon className="w-4 h-4 text-action shrink-0" aria-hidden="true" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  // variant === 'centered' | 'overlay' | 'centered-dark'
  return (
    <section
      className={`relative w-full overflow-hidden bg-white min-h-[560px] lg:h-[calc(100vh-5rem)] lg:min-h-[640px] flex items-center justify-center border-b border-borderline ${className}`}
    >
      {/* Full-width background photo across the entire hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src={effectiveImage}
          alt={imageAlt}
          className={`h-full w-full object-cover ${imagePosition || 'object-center'}`}
          fetchPriority="high"
          loading="eager"
        />
        {/* Subtle natural overlay preserving photo depth and vibrancy without whitewashing */}
        {overlay ? (
          overlay
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/25" />
        )}
      </div>

      {/* Centered content directly over image - No artificial eyebrows or badges */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 lg:py-16 text-center w-full">
        <div className="relative max-w-3xl mx-auto">
          {/* Protección 100% difuminada y orgánica con centro blanco nítido y sin líneas de caja */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-4xl h-[165%] -z-10 bg-[radial-gradient(ellipse_closest-side_at_center,_rgba(255,255,255,0.93)_0%,_rgba(255,255,255,0.88)_38%,_rgba(255,255,255,0.50)_65%,_rgba(255,255,255,0.12)_85%,_transparent_100%)] blur-lg pointer-events-none"
            aria-hidden="true"
          />

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy leading-[1.12] text-balance">
            {title}
          </h1>

          {subtitle && (
            <div className="mt-5 text-base sm:text-lg lg:text-xl text-navy/90 leading-relaxed font-medium max-w-xl mx-auto text-balance [&_.text-subtext]:text-navy/85">
              {subtitle}
            </div>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 bg-action hover:bg-action-hover text-white font-semibold px-8 py-3.5 text-base rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white border border-borderline hover:border-navy/30 text-navy font-semibold px-8 py-3.5 text-base rounded-xl shadow-xs transition-colors w-full sm:w-auto"
                >
                  <span>{secondaryCta.label}</span>
                </Link>
              )}
            </div>
          )}

          {/* Fila de beneficios centrada: 2 y 2 en mobile, 1 línea en desktop */}
          {effectiveBenefits && effectiveBenefits.length > 0 && (
            <div className="mt-8 sm:mt-10 pt-6 border-t border-navy/15 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-nowrap sm:items-center sm:justify-center sm:gap-8 lg:gap-10 text-xs sm:text-sm font-semibold text-navy">
                {effectiveBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-2 whitespace-nowrap bg-white/50 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none py-1.5 px-3 sm:p-0 rounded-lg sm:rounded-none border border-white/60 sm:border-0 shadow-xs sm:shadow-none"
                    >
                      <Icon className="w-4 h-4 text-action shrink-0" aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
