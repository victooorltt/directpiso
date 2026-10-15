import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Search,
  MapPin,
  Maximize2,
  BedDouble,
  Bath,
  Home,
  Key,
  FileText,
  ChevronDown,
  Building,
  MessageSquare,
  Compass,
  Users,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { tokens } from '@/lib/tokens';
import { PROPERTIES, getFeaturedProperties } from '@/lib/properties';

const PROCESS_STEPS = [
  {
    title: 'Contacto y análisis inicial',
    description:
      'Nos reunimos contigo en nuestra oficina de Oviedo o hablamos por teléfono para conocer exactamente tus objetivos, plazos y requerimientos.',
    icon: MessageSquare,
  },
  {
    title: 'Valoración y estrategia clara',
    description:
      'Estudiamos el mercado real de Oviedo y concejos asturianos para fijar precios competitivos, preparar la difusión y filtrar interesados solventes.',
    icon: Compass,
  },
  {
    title: 'Visitas y gestión transparente',
    description:
      'Organizamos y acompañamos personalmente cada visita, informándote de cada avance y resolviendo aspectos técnicos y documentales sin rodeos.',
    icon: Users,
  },
  {
    title: 'Cierre formal y notaría',
    description:
      'Supervisamos la redacción de contratos, coordinamos con la notaría y te acompañamos hasta la firma definitiva con total tranquilidad.',
    icon: CheckCircle2,
  },
];

export const metadata: Metadata = {
  title: 'Tu inmobiliaria en Oviedo y Asturias | Directpiso',
  description:
    'En Directpiso te ayudamos a comprar, vender o alquilar inmuebles en Asturias con una atención cercana y un proceso claro. Calle Rosal, 6, Oviedo.',
};

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO CENTRADO */}
      <PageHero
        variant="centered"
        imageSrc="/assets/editorial/hero-inicio.webp"
        imageAlt="Directpiso Inmobiliaria en Oviedo y Asturias"
        title="Tu inmobiliaria en Oviedo y Asturias"
        subtitle="Encuentra el lugar que estás buscando. En Directpiso te ayudamos a comprar, vender o alquilar inmuebles en Asturias con una atención cercana y un proceso claro."
        primaryCta={{
          label: 'Ver inmuebles',
          href: '/inmuebles/',
        }}
        secondaryCta={{
          label: 'Quiero vender',
          href: '/vender/',
        }}
        showBenefits
      />

      {/* Buscador integrado amplio y prominente justo debajo del hero */}
      <section className="relative z-20 -mt-8 sm:-mt-10 lg:-mt-12 max-w-6xl w-full mx-auto px-3 sm:px-6 mb-10 lg:mb-14">
        <form
          action="/inmuebles/"
          method="GET"
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow border border-borderline"
          role="search"
          aria-label="Buscar inmuebles en Asturias"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-end">
            <div>
              <label
                htmlFor="hero-operacion"
                className="block text-xs sm:text-sm font-bold text-navy mb-1.5"
              >
                Operación
              </label>
              <div className="relative">
                <select
                  id="hero-operacion"
                  name="operacion"
                  defaultValue=""
                  className="w-full bg-ivory text-navy border border-borderline rounded-xl px-4 py-3.5 text-sm sm:text-base font-medium focus:ring-2 focus:ring-action focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Todas</option>
                  <option value="Comprar">Comprar</option>
                  <option value="Alquilar">Alquilar</option>
                </select>
                <ChevronDown
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="hero-municipio"
                className="block text-xs sm:text-sm font-bold text-navy mb-1.5"
              >
                Municipio
              </label>
              <div className="relative">
                <select
                  id="hero-municipio"
                  name="municipio"
                  defaultValue=""
                  className="w-full bg-ivory text-navy border border-borderline rounded-xl px-4 py-3.5 text-sm sm:text-base font-medium focus:ring-2 focus:ring-action focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Todos los concejos</option>
                  <option value="Oviedo">Oviedo</option>
                  <option value="Quirós">Quirós</option>
                  <option value="Proaza">Proaza</option>
                  <option value="Tineo">Tineo</option>
                </select>
                <ChevronDown
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="hero-tipo"
                className="block text-xs sm:text-sm font-bold text-navy mb-1.5"
              >
                Tipo de inmueble
              </label>
              <div className="relative">
                <select
                  id="hero-tipo"
                  name="tipo"
                  defaultValue=""
                  className="w-full bg-ivory text-navy border border-borderline rounded-xl px-4 py-3.5 text-sm sm:text-base font-medium focus:ring-2 focus:ring-action focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Todos los tipos</option>
                  <option value="Casa/Chalet">Casa / Chalet</option>
                  <option value="Cuadra rural">Cuadra rural</option>
                  <option value="Local comercial">Local comercial</option>
                  <option value="Piso">Piso</option>
                </select>
                <ChevronDown
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-action hover:bg-action-hover text-white text-sm sm:text-base font-bold rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-action cursor-pointer"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span>Buscar inmuebles</span>
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* 2. SECCIÓN INMUEBLES DESTACADOS */}
      <section className={tokens.sectionSpacing} aria-labelledby="inmuebles-destacados-heading">
        <div className={tokens.container}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <h2
                id="inmuebles-destacados-heading"
                className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight"
              >
                Inmuebles destacados
              </h2>
              <p className="text-base sm:text-lg text-subtext leading-relaxed">
                Una selección de propiedades. Descubre oportunidades en entornos urbanos y rurales,
                desde una casa en Quirós hasta un piso en alquiler en el centro de Oviedo.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/inmuebles/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-borderline bg-white hover:bg-ivory text-navy font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Ver todos los inmuebles</span>
                <ArrowRight className="w-4 h-4 text-action" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Cards de los 3 inmuebles destacados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => {
              const isAlquiler = property.operation === 'Alquiler';

              return (
                <article
                  key={property.id}
                  className="group bg-white rounded-2xl border border-borderline shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                >
                  {/* Imagen del inmueble con ratio 4/3 */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm ${
                          isAlquiler
                            ? 'bg-action text-white'
                            : 'bg-navy text-white'
                        }`}
                      >
                        {property.operation}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/90 text-navy backdrop-blur-sm border border-borderline shadow-sm">
                        {property.type}
                      </span>
                    </div>
                  </div>

                  {/* Contenido de la card */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Precio destacado */}
                      <div className="text-2xl font-extrabold font-heading text-navy">
                        {property.priceDisplay}
                      </div>

                      {/* Título de la propiedad */}
                      <h3 className="mt-2 text-lg font-bold font-heading text-navy group-hover:text-action transition-colors line-clamp-2">
                        <Link href={`/inmuebles/${property.slug}/`} className="focus:outline-none">
                          {property.title}
                        </Link>
                      </h3>

                      {/* Ubicación */}
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-subtext">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span className="truncate">{property.location}</span>
                      </div>
                    </div>

                    {/* Especificaciones clave */}
                    <div className="mt-6 pt-4 border-t border-borderline flex items-center justify-between text-xs text-subtext">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Maximize2 className="w-3.5 h-3.5 text-subtext" aria-hidden="true" />
                        <span>{property.builtArea} m² constr.</span>
                      </div>

                      {property.rooms !== undefined && property.rooms > 0 && (
                        <div className="flex items-center gap-1.5 font-medium">
                          <BedDouble className="w-3.5 h-3.5 text-subtext" aria-hidden="true" />
                          <span>{property.rooms} {property.rooms === 1 ? 'hab.' : 'habs.'}</span>
                        </div>
                      )}

                      {property.baths !== undefined && property.baths > 0 && (
                        <div className="flex items-center gap-1.5 font-medium">
                          <Bath className="w-3.5 h-3.5 text-subtext" aria-hidden="true" />
                          <span>{property.baths} {property.baths === 1 ? 'baño' : 'baños'}</span>
                        </div>
                      )}
                    </div>

                    {/* Enlace a la ficha */}
                    <div className="mt-4 pt-3">
                      <Link
                        href={`/inmuebles/${property.slug}/`}
                        className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-navy bg-ivory hover:bg-accent-subtle hover:text-action border border-borderline transition-colors"
                      >
                        <span>Ver detalles</span>
                        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Enlace móvil adicional */}
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/inmuebles/"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-action text-white font-semibold text-sm shadow-md"
            >
              <span>Ver todos los inmuebles</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN SERVICIOS INMOBILIARIOS */}
      <section
        className={`bg-ivory border-y border-borderline ${tokens.sectionSpacing}`}
        aria-labelledby="servicios-inicio-heading"
      >
        <div className={tokens.container}>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2
              id="servicios-inicio-heading"
              className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight"
            >
              Servicios inmobiliarios
            </h2>
            <p className="text-base sm:text-lg text-subtext leading-relaxed">
              Te acompañamos en cada paso. Ya sea para encontrar una nueva vivienda, comercializar
              una propiedad o buscar un alquiler, Directpiso ofrece servicios de intermediación
              inmobiliaria en Asturias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1: Compra */}
            <div className="bg-white rounded-2xl p-8 border border-borderline shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action mb-6">
                  <Home className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Compra de inmuebles
                </h3>
                <p className="text-subtext text-sm sm:text-base leading-relaxed">
                  Explora oportunidades y recibe ayuda durante la búsqueda de una propiedad.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-borderline">
                <Link
                  href="/inmuebles/?operacion=Comprar"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-action hover:text-action-hover transition-colors"
                >
                  <span>Explorar compra</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Servicio 2: Venta */}
            <div className="bg-white rounded-2xl p-8 border border-borderline shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action mb-6">
                  <Key className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Venta de inmuebles
                </h3>
                <p className="text-subtext text-sm sm:text-base leading-relaxed">
                  Contacta con Directpiso para hablar de la comercialización de tu vivienda o local.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-borderline">
                <Link
                  href="/vender/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-action hover:text-action-hover transition-colors"
                >
                  <span>Vender propiedad</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Servicio 3: Alquiler */}
            <div className="bg-white rounded-2xl p-8 border border-borderline shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action mb-6">
                  <FileText className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Alquiler de inmuebles
                </h3>
                <p className="text-subtext text-sm sm:text-base leading-relaxed">
                  Encuentra opciones de alquiler y consulta directamente condiciones y disponibilidad.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-borderline">
                <Link
                  href="/inmuebles/?operacion=Alquiler"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-action hover:text-action-hover transition-colors"
                >
                  <span>Ver alquileres</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Enlace general a la página de servicios */}
          <div className="mt-12 text-center">
            <Link
              href="/servicios/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-ivory border border-borderline text-navy font-semibold text-sm transition-colors shadow-sm"
            >
              <span>Conoce en detalle todos nuestros servicios</span>
              <ArrowRight className="w-4 h-4 text-action" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN CAPTACIÓN (¿Quieres vender una propiedad?) */}
      <section className={tokens.sectionSpacing} aria-labelledby="captacion-heading">
        <div className={tokens.container}>
          <div className="bg-navy rounded-3xl overflow-hidden border border-navy-light/50 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Copy a la izquierda */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 text-white">
                <h2
                  id="captacion-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white"
                >
                  Demos el primer paso
                </h2>

                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                  Cuéntanos dónde está tu inmueble y qué necesitas. Directpiso podrá ponerse en
                  contacto contigo para estudiar tu caso.
                </p>

                <div className="pt-2">
                  <Link
                    href="/vender/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-action hover:bg-action-hover shadow-md hover:shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                  >
                    <span>Solicitar información</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Foto editorial conceptual a la derecha */}
              <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full">
                <Image
                  src="/assets/editorial/vender-ambiente-conceptual.webp"
                  alt="Asesoramiento inmobiliario para comercializar tu propiedad en Directpiso"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN PROCESO PASO A PASO */}
      <section
        className={`bg-ivory border-t border-borderline ${tokens.sectionSpacing}`}
        aria-labelledby="proceso-heading"
      >
        <div className={tokens.container}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl space-y-3">
              <h2
                id="proceso-heading"
                className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight"
              >
                Cómo trabajamos en Directpiso
              </h2>
              <p className="text-base sm:text-lg text-subtext leading-relaxed">
                Un proceso transparente y cercano, paso a paso. Te acompañamos en cada etapa de la compra, venta o alquiler de tu inmueble en Asturias con información contrastada y sin sorpresas.
              </p>
            </div>

            <div>
              <Link
                href="/contacto/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-borderline bg-white hover:bg-ivory text-navy font-semibold text-sm transition-colors shadow-xs"
              >
                <span>Consultar con un asesor</span>
                <ArrowRight className="w-4 h-4 text-action" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Grid de 4 Pasos del Proceso */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl p-7 border border-borderline shadow-xs hover:shadow-md hover:border-action/30 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action border border-accent/20 mb-6">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-bold text-navy mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-subtext leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tarjeta de asesoramiento directo */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-borderline flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-navy">
                ¿Prefieres que analicemos tu caso personalmente?
              </h3>
              <p className="text-xs sm:text-sm text-subtext">
                Visítanos en nuestra oficina de Calle Rosal 6 en Oviedo o llámanos directamente al 984 08 12 08.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/contacto/"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-action hover:bg-action-hover text-white text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Contactar ahora</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOQUE FINAL CONTACT CTA */}
      <ContactCTA />
    </div>
  );
}
