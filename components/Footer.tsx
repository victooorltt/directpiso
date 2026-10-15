import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-navy-light/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Directpiso Inmobiliaria - Inicio"
            >
              <img
                src="/assets/logo-white.png"
                alt="Directpiso Inmobiliaria"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              Agencia inmobiliaria local en Oviedo. Especialistas en compraventa y alquiler de
              viviendas, fincas rústicas y locales comerciales en Oviedo y concejos asturianos,
              con asesoramiento directo, transparente y sin intermediaciones innecesarias.
            </p>

            {/* Verified Address & Contact */}
            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>Calle Rosal, 6, 33009 Oviedo (Asturias)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <a
                  href="tel:984081208"
                  className="font-semibold text-white hover:text-accent transition-colors tabular-nums"
                  aria-label="Llamar al 984 08 12 08"
                >
                  984 08 12 08
                </a>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-sm font-semibold text-white">
              Explorar
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/inmuebles/" className="hover:text-accent transition-colors">
                  Inmuebles
                </Link>
              </li>
              <li>
                <Link href="/servicios/" className="hover:text-accent transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/vender/" className="hover:text-accent transition-colors">
                  Vender inmueble
                </Link>
              </li>
              <li>
                <Link href="/contacto/" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías de inmuebles */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-sm font-semibold text-white">
              Inmuebles
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/inmuebles/" className="hover:text-accent transition-colors">
                  Catálogo en venta
                </Link>
              </li>
              <li>
                <Link href="/inmuebles/" className="hover:text-accent transition-colors">
                  Vivienda en alquiler
                </Link>
              </li>
              <li>
                <Link href="/inmuebles/" className="hover:text-accent transition-colors">
                  Fincas y casas rurales
                </Link>
              </li>
              <li>
                <Link href="/inmuebles/" className="hover:text-accent transition-colors">
                  Locales en Oviedo
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Verification */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-sm font-semibold text-white">
              Canal Oficial
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Sigue la actualidad inmobiliaria y las novedades de nuestro catálogo en Instagram.
            </p>
            <div>
              <a
                href="https://www.instagram.com/inmobiliariadirectpiso/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white bg-white/10 hover:bg-white/15 px-3.5 py-2 rounded-xl border border-white/10 transition-colors"
                aria-label="Perfil oficial de Instagram de Inmobiliaria Directpiso (abre en nueva ventana)"
              >
                <Instagram className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>@inmobiliariadirectpiso</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 ml-0.5" aria-hidden="true" />
              </a>
            </div>
            <p className="text-xs text-gray-400 pt-1">
              Atención en oficina de Oviedo previa cita o consulta telefónica directa.
            </p>
          </div>
        </div>

        {/* Legal & Attribution Bar */}
        <div className="pt-8 space-y-4 text-xs text-gray-400">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p>© 2026 Inmobiliaria Directpiso. Todos los derechos reservados.</p>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <Link href="/aviso-legal/" className="hover:text-white transition-colors">
                Aviso Legal
              </Link>
              <span className="text-gray-600">·</span>
              <Link href="/privacidad/" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <span className="text-gray-600">·</span>
              <Link href="/cookies/" className="hover:text-white transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-2 text-[11px] text-gray-400">
            <p>
              Panorámica de Oviedo: © David Pérez (DPC), Wikimedia Commons, CC BY 4.0
            </p>
            <p>
              Datos de catálogo consultados a 15/10/2026. Fotografías sujetas a confirmación de derechos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
