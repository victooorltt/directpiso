import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { tokens } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Servicios inmobiliarios en Asturias | Directpiso',
  description:
    'Comprar, vender y alquilar con confianza. En Directpiso encontrarás un punto de contacto para buscar propiedades o consultar la venta y el alquiler de tu inmueble en Asturias.',
};

export default function ServiciosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO GRADIENT */}
      <PageHero
        variant="gradient"
        imageSrc="/assets/editorial/hero-servicios-nuevo.webp"
        imageAlt="Servicios inmobiliarios profesionales de Directpiso en Oviedo"
        title="Servicios inmobiliarios en Asturias"
        subtitle={
          <>
            <span className="block font-semibold text-navy">
              Comprar, vender y alquilar con confianza
            </span>
            <span className="block mt-1 text-subtext">
              En Directpiso encontrarás un punto de contacto para buscar propiedades o consultar la venta y el alquiler de tu inmueble.
            </span>
          </>
        }
        primaryCta={{
          label: 'Contactar',
          href: '/contacto/',
        }}
      />

      {/* 2. SECCIÓN DETALLE DE SERVICIOS */}
      <section className={tokens.sectionSpacing} aria-label="Servicios inmobiliarios Directpiso">
        <div className={tokens.container}>
          <div className="divide-y divide-borderline/70">
            {/* Servicio 1: Compra de inmuebles (Texto izquierda, Foto derecha) */}
            <div className="py-14 sm:py-18 lg:py-20 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Columna Texto */}
                <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                    Compra de inmuebles
                  </h2>
                  <p className="text-base sm:text-lg text-subtext leading-relaxed">
                    Encuentra una propiedad que encaje contigo. Te acompañamos en la búsqueda y
                    adquisición de pisos, casas y fincas en Asturias, facilitando información clara
                    sobre cada inmueble antes de dar el paso.
                  </p>
                  <ul className="space-y-3.5 pt-1 text-sm sm:text-base text-subtext">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Fichas con datos verificados:</strong> Superficie, distribución, orientación, estado real y fotografías fieles a la propiedad.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Coordinación directa de visitas:</strong> Organizamos recorridos presenciales respetando tus horarios y tiempos de decisión.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Diversidad geográfica:</strong> Desde viviendas urbanas en el corazón de Oviedo hasta chalets y fincas tradicionales en Quirós, Proaza y Tineo.
                      </span>
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/inmuebles/?operacion=venta"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-action hover:bg-action-hover text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <span>Ver inmuebles en venta</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Columna Foto */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-borderline/80 group">
                    <Image
                      src="/assets/servicios/compra-inmuebles.webp"
                      alt="Compra de inmuebles y viviendas en Asturias con Directpiso"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Servicio 2: Venta de inmuebles (Foto izquierda, Texto derecha) */}
            <div className="py-14 sm:py-18 lg:py-20 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Columna Foto */}
                <div className="lg:col-span-6 order-1 lg:order-1">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-borderline/80 group">
                    <Image
                      src="/assets/servicios/venta-inmuebles.webp"
                      alt="Venta y comercialización de propiedades en Oviedo"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Columna Texto */}
                <div className="lg:col-span-6 space-y-5 order-2 lg:order-2">
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                    Venta de inmuebles
                  </h2>
                  <p className="text-base sm:text-lg text-subtext leading-relaxed">
                    Da visibilidad a tu propiedad. Si estás pensando en vender, explícanos qué
                    inmueble tienes y diseñaremos una comercialización rigurosa, profesional y
                    adecuada al mercado inmobiliario de Asturias.
                  </p>
                  <ul className="space-y-3.5 pt-1 text-sm sm:text-base text-subtext">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Estudio del inmueble:</strong> Analizamos sus características concretas, su estado actual y su situación en el mercado local asturiano.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Presentación editorial rigurosa:</strong> Fotografías auténticas y descripción clara de las estancias para destacar sus puntos fuertes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Atención y filtro de consultas:</strong> Gestionamos el contacto directo con interesados y coordinamos las visitas con seriedad.
                      </span>
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/vender/"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-action hover:bg-action-hover text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <span>Vender mi inmueble</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicio 3: Alquiler de inmuebles (Texto izquierda, Foto derecha) */}
            <div className="py-14 sm:py-18 lg:py-20 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Columna Texto */}
                <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                    Alquiler de inmuebles
                  </h2>
                  <p className="text-base sm:text-lg text-subtext leading-relaxed">
                    Opciones adaptadas a distintas necesidades. En nuestro catálogo puedes consultar
                    propiedades en alquiler y preguntar por sus condiciones, fechas y requisitos
                    con total transparencia.
                  </p>
                  <ul className="space-y-3.5 pt-1 text-sm sm:text-base text-subtext">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Condiciones claras:</strong> Información detallada de fianza, suministros incluidos o gastos de comunidad antes de concertar visitas.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Perfil de inquilinos y estancias:</strong> Opciones para estancias habituales y propiedades idóneas para profesionales sanitarios (MIR) o estudiantes en Oviedo.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Punto de contacto accesible:</strong> Comunicación telefónica y presencial en Oviedo para resolver cualquier duda sobre el inmueble.
                      </span>
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/inmuebles/?operacion=alquiler"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-action hover:bg-action-hover text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <span>Consultar opciones de alquiler</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Columna Foto */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-borderline/80 group">
                    <Image
                      src="/assets/servicios/alquiler-inmuebles.webp"
                      alt="Alquiler de pisos y viviendas en Oviedo"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Servicio 4: Información sobre tu propiedad (Foto izquierda, Texto derecha) */}
            <div className="py-14 sm:py-18 lg:py-20 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Columna Foto */}
                <div className="lg:col-span-6 order-1 lg:order-1">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-borderline/80 group">
                    <Image
                      src="/assets/servicios/asesoramiento-propiedad.webp"
                      alt="Asesoramiento e información sobre propiedades inmobiliarias"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Columna Texto */}
                <div className="lg:col-span-6 space-y-5 order-2 lg:order-2">
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                    Información y orientación sobre tu propiedad
                  </h2>
                  <p className="text-base sm:text-lg text-subtext leading-relaxed">
                    Cuéntanos qué deseas hacer. Si no sabes por dónde empezar, contacta con
                    Directpiso para explicar las características del inmueble y recibir información
                    clara sobre los siguientes pasos.
                  </p>
                  <ul className="space-y-3.5 pt-1 text-sm sm:text-base text-subtext">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Atención cercana y personalizada:</strong> Estudiamos tu caso concreto, ya sea un piso en Oviedo, un local o una propiedad rural en los concejos vecinos.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Claridad de requisitos:</strong> Te explicamos qué documentación se requiere para poner en el mercado una propiedad de forma correcta y segura.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                      <span>
                        <strong className="text-navy font-semibold">Sin falsas expectativas:</strong> Compartimos información realista sobre el estado del mercado para que tomes decisiones fundamentadas.
                      </span>
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/contacto/"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-action hover:bg-action-hover text-white font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <span>Hablar con Directpiso</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BLOQUE FINAL CONTACT CTA */}
      <ContactCTA />
    </div>
  );
}
