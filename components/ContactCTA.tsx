import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, MapPin, MessageSquare } from 'lucide-react';

export interface ContactCTAProps {
  title?: string;
  description?: string;
  variant?: 'navy' | 'ivory';
  className?: string;
}

export default function ContactCTA({
  title = 'Hablemos de tu próxima operación',
  description = '¿Buscas un inmueble o quieres vender el tuyo? Ponte en contacto con Directpiso y cuéntanos qué tienes en mente.',
  variant = 'navy',
  className = '',
}: ContactCTAProps) {
  const isNavy = variant === 'navy';

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 transition-all duration-200 ${
            isNavy
              ? 'bg-navy text-white shadow-2xl border border-navy-light/50'
              : 'bg-ivory text-navy border border-borderline shadow-lg'
          }`}
        >
          {/* Subtle background decoration */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-action/10 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Copy - CERO eyebrows or badges */}
            <div className="lg:col-span-7 space-y-4">
              <h2
                className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
                  isNavy ? 'text-white' : 'text-navy'
                }`}
              >
                {title}
              </h2>

              <p
                className={`text-base sm:text-lg leading-relaxed max-w-xl ${
                  isNavy ? 'text-gray-200' : 'text-subtext'
                }`}
              >
                {description}
              </p>

              {/* Office info */}
              <div
                className={`pt-2 flex items-center gap-2 text-xs sm:text-sm ${
                  isNavy ? 'text-gray-300' : 'text-subtext'
                }`}
              >
                <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span>Calle Rosal, 6, 33009 Oviedo (Asturias)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 sm:items-stretch lg:items-end justify-center">
              <Link
                href="/contacto/"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-white bg-action hover:bg-action-hover shadow-md hover:shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action w-full sm:w-auto lg:w-full max-w-xs"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>Ponte en contacto</span>
                <ArrowRight className="w-4 h-4 ml-auto" aria-hidden="true" />
              </Link>

              <a
                href="tel:984081208"
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold transition-all duration-150 w-full sm:w-auto lg:w-full max-w-xs border ${
                  isNavy
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-sm'
                    : 'bg-white hover:bg-ivory text-navy border-borderline shadow-sm'
                }`}
                aria-label="Llamar directamente al 984 08 12 08"
              >
                <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="tabular-nums">Llamar: 984 08 12 08</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
