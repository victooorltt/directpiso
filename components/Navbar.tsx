'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowRight, Building2 } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Inmuebles', href: '/inmuebles/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Vender', href: '/vender/' },
  { label: 'Contacto', href: '/contacto/' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href) || pathname === href.replace(/\/$/, '');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-borderline bg-white/95 backdrop-blur-md transition-shadow duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo oficial */}
          <Link
            href="/"
            className="flex items-center focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            aria-label="Directpiso Inmobiliaria - Inicio"
          >
            <img
              src="/assets/logo.png"
              alt="Directpiso Inmobiliaria"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    active
                      ? 'text-action font-semibold bg-accent-subtle/80'
                      : 'text-navy/85 hover:text-action hover:bg-ivory'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Direct Phone & CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:984081208"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-action transition-colors px-3 py-2 rounded-xl hover:bg-ivory"
              aria-label="Llamar directamente a Directpiso al 984 08 12 08"
            >
              <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="tabular-nums">984 08 12 08</span>
            </a>

            <Link
              href="/vender/"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-action hover:bg-action-hover rounded-xl shadow-sm hover:shadow transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
            >
              Vender mi inmueble
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:984081208"
              className="p-2 text-navy hover:text-action hover:bg-ivory rounded-lg transition-colors"
              aria-label="Llamar al 984 08 12 08"
            >
              <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-navy hover:text-action hover:bg-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-action transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-borderline bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-accent-subtle text-action font-semibold'
                      : 'text-navy hover:bg-ivory hover:text-action'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-borderline space-y-3">
            <a
              href="tel:984081208"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl border border-borderline bg-ivory text-navy font-semibold text-sm hover:bg-accent-subtle transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>Llamar al 984 08 12 08</span>
            </a>

            <Link
              href="/vender/"
              className="flex items-center justify-center w-full py-3 px-4 rounded-xl bg-action text-white font-semibold text-sm hover:bg-action-hover shadow-sm transition-colors text-center"
            >
              Vender mi inmueble
            </Link>

            <p className="text-center text-xs text-subtext pt-2">
              Calle Rosal, 6 · 33009 Oviedo (Asturias)
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
