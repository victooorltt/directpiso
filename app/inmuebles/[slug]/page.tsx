import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Calendar,
  AlertTriangle,
  ExternalLink,
  Phone,
  MessageSquare,
  Clock,
  ArrowRight,
  Warehouse,
} from 'lucide-react';
import { PROPERTIES, getPropertyBySlug, Property, AGENCY_INFO } from '@/lib/properties';
import ContactCTA from '@/components/ContactCTA';
import PropertyGallery from '@/components/PropertyGallery';

// Coordinates for OpenStreetMap embeds
interface LocationCoords {
  lat: number;
  lon: number;
  bbox: string;
  zoomName: string;
}

const COORDINATES: Record<string, LocationCoords> = {
  'chalet-ronderos-quiros': {
    lat: 43.1594,
    lon: -5.9733,
    bbox: '-6.0033%2C43.1394%2C-5.9433%2C43.1794',
    zoomName: 'Ronderos, Quirós (Valles del Trubia)',
  },
  'cuadra-ranon-proaza': {
    lat: 43.2508,
    lon: -6.0189,
    bbox: '-6.0489%2C43.2308%2C-5.9889%2C43.2708',
    zoomName: 'Rañón, Proaza (Senda del Oso)',
  },
  'casa-azorera-tineo': {
    lat: 43.3364,
    lon: -6.4117,
    bbox: '-6.4417%2C43.3164%2C-6.3817%2C43.3564',
    zoomName: 'La Azorera, Tineo (Occidente de Asturias)',
  },
  'local-san-melchor-oviedo': {
    lat: 43.354,
    lon: -5.845,
    bbox: '-5.8750%2C43.3340%2C-5.8150%2C43.3740',
    zoomName: 'San Melchor García Sampedro, San Lázaro, Oviedo',
  },
  'piso-alquiler-plaza-porlier-oviedo': {
    lat: 43.3622,
    lon: -5.8455,
    bbox: '-5.8755%2C43.3422%2C-5.8155%2C43.3822',
    zoomName: 'Plaza Porlier, Casco Antiguo de Oviedo',
  },
};

// 1. generateStaticParams returning all 5 verified slugs
export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const property = getPropertyBySlug(params.slug);
  if (!property) {
    return {
      title: 'Inmueble no encontrado | Directpiso',
      description: 'El inmueble solicitado no figura en el catálogo verificado de Directpiso.',
    };
  }

  const isAlquiler = property.operation === 'Alquiler';

  return {
    title: `${property.title} (${property.priceDisplay})`,
    description: `${property.headline}. ${property.location}. Superficie: ${property.builtArea} m². ${
      isAlquiler ? 'Alquiler' : 'Venta'
    } gestionada por Directpiso.`,
    openGraph: {
      title: `${property.title} | Directpiso Inmobiliaria`,
      description: `${property.headline} - ${property.priceDisplay}. Ubicado en ${property.location}.`,
      images: [
        {
          url: property.images[0],
          width: 1200,
          height: 800,
          alt: property.title,
        },
      ],
      locale: 'es_ES',
      type: 'article',
    },
  };
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const coords = COORDINATES[property.slug] || {
    lat: 43.3619,
    lon: -5.8494,
    bbox: '-5.8794%2C43.3419%2C-5.8194%2C43.3819',
    zoomName: property.location,
  };

  const isCuadra = property.slug === 'cuadra-ranon-proaza';
  const isPisoAlquiler = property.slug === 'piso-alquiler-plaza-porlier-oviedo';
  const isLocalOviedo = property.slug === 'local-san-melchor-oviedo';
  const isCasaTineo = property.slug === 'casa-azorera-tineo';
  const isChaletQuiros = property.slug === 'chalet-ronderos-quiros';

  // 2 related properties (excluding current)
  const relatedProperties = PROPERTIES.filter((p) => p.slug !== property.slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. ENCABEZADO PRINCIPAL DE LA PROPIEDAD */}
      <header className="border-b border-borderline bg-white py-8 lg:py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Title, location, operation badge */}
            <div className="space-y-3 max-w-3xl">
              <div>
                {/* Operación Badge */}
                <span
                  className={`text-xs font-bold px-3.5 py-1 rounded-full shadow-xs ${
                    property.operation === 'Alquiler'
                      ? 'bg-action text-white'
                      : 'bg-navy text-white'
                  }`}
                >
                  {property.operation}
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                {property.title}
              </h1>

              <p className="text-base sm:text-lg text-subtext font-medium leading-relaxed">
                {property.headline}
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-subtext pt-1">
                <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Price & Primary Call CTAs */}
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-borderline">
              <div className="text-left lg:text-right">
                <span className="text-xs font-semibold text-subtext block">
                  {property.operation === 'Alquiler' ? 'Renta mensual' : 'Precio de venta'}
                </span>
                <span className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
                  {property.priceDisplay}
                </span>
                {property.operation === 'Alquiler' && property.deposit && (
                  <span className="block text-xs font-medium text-action mt-0.5">
                    {property.deposit}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${AGENCY_INFO.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-action hover:bg-action-hover text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex-1 sm:flex-initial"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Llamar: {AGENCY_INFO.phone}</span>
                </a>

                <a
                  href="#solicitar-visita"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ivory hover:bg-accent-subtle text-navy border border-borderline text-sm font-semibold transition-all flex-1 sm:flex-initial"
                >
                  <Calendar className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Solicitar visita</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. ALERTAS ESPECÍFICAS OBLIGATORIAS SEGÚN PROPIEDAD */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        {/* Alerta Cuadra Rañón, Proaza */}
        {isCuadra && (
          <aside
            aria-label="Aviso legal sobre la cuadra de Rañón"
            className="rounded-2xl border-2 border-amber-300 bg-amber-50/90 p-5 sm:p-6 text-amber-950 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-amber-200/70 text-amber-900 rounded-xl shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6 text-amber-800" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h2 className="font-heading font-extrabold text-base sm:text-lg text-amber-950">
                  Aviso obligatorio de tipología y habitabilidad
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
                  <strong>Edificación rural / cuadra.</strong> Requiere rehabilitación integral.
                  No dispone de suministros de agua ni electricidad según el anuncio. Cualquier
                  cambio de uso debe verificar licencias urbanísticas y normativas municipales antes
                  de plantearse como vivienda.
                </p>
              </div>
            </div>
          </aside>
        )}

        {/* Alerta Piso Alquiler Plaza Porlier, Oviedo */}
        {isPisoAlquiler && (
          <aside
            aria-label="Aviso de disponibilidad para el piso de Plaza Porlier"
            className="rounded-2xl border-2 border-blue-300 bg-blue-50/90 p-5 sm:p-6 text-blue-950 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-blue-200/70 text-blue-900 rounded-xl shrink-0 mt-0.5">
                <Clock className="w-6 h-6 text-blue-800" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h2 className="font-heading font-extrabold text-base sm:text-lg text-blue-950">
                  Condiciones y calendario de disponibilidad
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-blue-900">
                  <strong>Disponibilidad anunciada:</strong> a partir de febrero de 2027 (reconfirmar).
                  Fianza: 1 mes. Anunciado como opción preferente de larga estancia o para profesionales
                  sanitarios MIR 2027–2028 por su ubicación privilegiada junto a servicios y casco histórico.
                </p>
              </div>
            </div>
          </aside>
        )}

        {/* Alerta Local Comercial San Melchor, Oviedo */}
        {isLocalOviedo && (
          <aside
            aria-label="Aviso de usos propuestos para el local comercial"
            className="rounded-2xl border border-slate-300 bg-slate-100 p-5 sm:p-6 text-slate-900 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-slate-200 text-slate-800 rounded-xl shrink-0 mt-0.5">
                <Warehouse className="w-6 h-6 text-slate-800" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h2 className="font-heading font-extrabold text-base sm:text-lg text-slate-950">
                  Compatibilidad de actividades y normativa
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                  <strong>Usos propuestos: taller o almacén.</strong> Sujetos a licencias municipales.
                  Cualquier actividad comercial, industrial o de almacenamiento debe comprobar
                  previamente los requisitos técnicos del Ayuntamiento de Oviedo y la comunidad de propietarios.
                </p>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* 3. GALERÍA DE FOTOS EN CARRUSEL */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 lg:py-8" aria-label="Galería fotográfica">
        <PropertyGallery images={property.images} title={property.title} />
      </section>

      {/* 5. CUERPO PRINCIPAL: DESCRIPCIÓN + CARACTERÍSTICAS TÉCNICAS */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Izquierda (8 cols): Descripción y Especificaciones */}
          <div className="lg:col-span-8 space-y-10">
            {/* 5.1 CARACTERÍSTICAS PRINCIPALES (TABLITA) */}
            <section aria-labelledby="specs-heading" className="space-y-4">
              <h2 id="specs-heading" className="font-heading font-extrabold text-xl sm:text-2xl text-navy">
                Características del inmueble
              </h2>
              <div className="border border-borderline rounded-2xl overflow-hidden bg-white shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-borderline">
                    <tr className="bg-ivory/50">
                      <th scope="row" className="py-3.5 px-4 sm:px-6 font-medium text-subtext w-2/5">
                        Tipo de vivienda
                      </th>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy w-3/5">
                        {property.type}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-3.5 px-4 sm:px-6 font-medium text-subtext w-2/5">
                        Superficie
                      </th>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy w-3/5">
                        {property.builtArea} m² construidos
                        {property.usableArea ? ` (${property.usableArea} m² útiles)` : ''}
                        {property.plotArea ? ` · Parcela de ${property.plotArea.toLocaleString('es-ES')} m²` : ''}
                      </td>
                    </tr>
                    <tr className="bg-ivory/50">
                      <th scope="row" className="py-3.5 px-4 sm:px-6 font-medium text-subtext w-2/5">
                        Habitaciones
                      </th>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy w-3/5">
                        {property.rooms !== undefined && property.rooms > 0
                          ? `${property.rooms} ${property.rooms === 1 ? 'habitación' : 'habitaciones'}`
                          : (property.typeCategory === 'local' || property.typeCategory === 'rustico' ? 'Espacio diáfano' : '—')}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-3.5 px-4 sm:px-6 font-medium text-subtext w-2/5">
                        Número de baños
                      </th>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy w-3/5">
                        {property.baths !== undefined && property.baths > 0
                          ? `${property.baths} ${property.baths === 1 ? 'baño' : 'baños'}`
                          : '—'}
                      </td>
                    </tr>
                    <tr className="bg-ivory/50">
                      <th scope="row" className="py-3.5 px-4 sm:px-6 font-medium text-subtext w-2/5">
                        Número de plantas / Piso
                      </th>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy w-3/5">
                        {property.floors
                          ? `${property.floors} ${property.floors === 1 ? 'planta' : 'plantas'}`
                          : (property.floor ?? 'Planta baja')}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-3.5 px-4 sm:px-6 font-medium text-subtext w-2/5">
                        Estado
                      </th>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-navy w-3/5">
                        {property.condition}
                      </td>
                    </tr>
                    {(property.garage || property.elevator || property.heating || property.storage) && (
                      <tr className="bg-ivory/50">
                        <th scope="row" className="py-3.5 px-4 sm:px-6 font-medium text-subtext w-2/5">
                          Equipamiento
                        </th>
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-navy w-3/5">
                          {[
                            property.garage ? 'Garaje' : null,
                            property.elevator ? 'Ascensor' : null,
                            property.storage ? 'Trastero' : null,
                            property.heating ? `Calefacción ${property.heating.toLowerCase()}` : null,
                          ]
                            .filter(Boolean)
                            .join(' · ')}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5.2 DESCRIPCIÓN COMPLETA */}
            <section className="space-y-4">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy">
                Descripción de la propiedad
              </h2>
              <div className="bg-ivory/60 border border-borderline rounded-2xl p-6 sm:p-8 space-y-4 text-navy/90 text-sm sm:text-base leading-relaxed">
                <p className="whitespace-pre-line">{property.description}</p>

                {property.specialNotice && (
                  <div className="mt-4 pt-4 border-t border-borderline/70 text-xs sm:text-sm text-subtext bg-white p-4 rounded-xl border">
                    <strong className="text-navy block mb-1">Nota adicional del anuncio:</strong>
                    {property.specialNotice}
                  </div>
                )}
              </div>
            </section>

            {/* 5.3 MAPA DE ZONA APROXIMADA */}
            <section className="space-y-4">
              <div className="border-b border-borderline pb-3">
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy">
                  Ubicación aproximada
                </h2>
                <p className="text-xs sm:text-sm text-subtext">
                  Entorno geográfico de la propiedad en {property.municipality} (Asturias).
                </p>
              </div>

              {/* Iframe OpenStreetMap */}
              <div className="relative rounded-2xl overflow-hidden border border-borderline shadow-sm bg-gray-100 h-80 sm:h-96">
                <iframe
                  title={`Mapa aproximado de ${property.title}`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${coords.bbox}&layer=mapnik&marker=${coords.lat}%2C${coords.lon}`}
                  className="w-full h-full border-0"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-subtext">
                <span>Zona: {coords.zoomName}</span>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${coords.lat}&mlon=${coords.lon}#map=15/${coords.lat}/${coords.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-action hover:text-action-hover font-semibold"
                >
                  <span>Ver mapa ampliado en OpenStreetMap</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </section>
          </div>

          {/* Columna Derecha (4 cols): Formulario de Visita y Fuentes Oficiales */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* 5.4 BLOQUE DE LLAMADA A LA ACCIÓN / SOLICITAR VISITA */}
            <div
              id="solicitar-visita"
              className="bg-white rounded-3xl border-2 border-navy/10 p-6 sm:p-7 shadow-lg space-y-5"
            >
              <div className="space-y-1.5 border-b border-borderline pb-4">
                <h3 className="font-heading font-extrabold text-xl text-navy">
                  Solicitar información o visita
                </h3>
                <p className="text-xs text-subtext">
                  Inmueble preseleccionado: <strong className="text-navy">{property.title}</strong>
                </p>
              </div>

              {/* Direct call banner */}
              <div className="p-3.5 rounded-xl bg-ivory border border-borderline flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-subtext font-medium block">
                    ¿Prefieres consultar por teléfono?
                  </span>
                  <a
                    href={`tel:${AGENCY_INFO.phoneClean}`}
                    className="font-heading font-extrabold text-base text-navy hover:text-action transition-colors"
                  >
                    {AGENCY_INFO.phone}
                  </a>
                </div>
                <a
                  href={`tel:${AGENCY_INFO.phoneClean}`}
                  className="p-2.5 rounded-xl bg-action text-white hover:bg-action-hover transition-colors shadow-sm"
                  aria-label="Llamar directamente al 984 08 12 08"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              {/* Formulario con el inmueble preseleccionado */}
              <form
                action="/contacto/"
                method="GET"
                className="space-y-3.5 text-xs sm:text-sm"
              >
                {/* Hidden input to pass selected property */}
                <input type="hidden" name="inmueble" value={property.slug} />

                <div>
                  <label htmlFor="form-property" className="block text-xs font-bold text-navy mb-1">
                    Inmueble de referencia
                  </label>
                  <input
                    id="form-property"
                    type="text"
                    readOnly
                    value={`${property.title} (${property.priceDisplay})`}
                    className="w-full bg-ivory border border-borderline rounded-xl px-3 py-2 text-xs font-semibold text-navy cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold text-navy mb-1">
                    Nombre completo <span className="text-action">*</span>
                  </label>
                  <input
                    id="form-name"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Tu nombre y apellidos"
                    className="w-full bg-white border border-borderline rounded-xl px-3.5 py-2 text-xs sm:text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-action focus:border-action transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold text-navy mb-1">
                    Teléfono de contacto <span className="text-action">*</span>
                  </label>
                  <input
                    id="form-phone"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="Ej. 600 000 000"
                    className="w-full bg-white border border-borderline rounded-xl px-3.5 py-2 text-xs sm:text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-action focus:border-action transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-bold text-navy mb-1">
                    Correo electrónico
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    placeholder="tunombre@ejemplo.es"
                    className="w-full bg-white border border-borderline rounded-xl px-3.5 py-2 text-xs sm:text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-action focus:border-action transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-date" className="block text-xs font-bold text-navy mb-1">
                    Fecha u horario preferente
                  </label>
                  <input
                    id="form-date"
                    name="horario"
                    type="text"
                    placeholder="Ej. Mañanas / Viernes por la tarde"
                    className="w-full bg-white border border-borderline rounded-xl px-3.5 py-2 text-xs sm:text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-action focus:border-action transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold text-navy mb-1">
                    Mensaje o dudas
                  </label>
                  <textarea
                    id="form-message"
                    name="mensaje"
                    rows={3}
                    placeholder="Indícanos cualquier detalle o duda que tengas sobre esta propiedad..."
                    className="w-full bg-white border border-borderline rounded-xl px-3.5 py-2 text-xs sm:text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-action focus:border-action transition-colors resize-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-action hover:bg-action-hover shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-action"
                  >
                    <MessageSquare className="w-4 h-4" aria-hidden="true" />
                    <span>Enviar solicitud de visita</span>
                  </button>
                </div>

                <p className="text-[11px] text-subtext text-center pt-1 leading-snug">
                  Atención presencial en {AGENCY_INFO.fullAddress}.
                </p>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* 6. OTROS INMUEBLES QUE TE PUEDEN INTERESAR */}
      <section
        className="border-t border-borderline bg-ivory/40 py-16 lg:py-20"
        aria-label="Inmuebles relacionados"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
                Otros inmuebles que te pueden interesar
              </h2>
            </div>
            <Link
              href="/inmuebles/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-action hover:text-action-hover"
            >
              <span>Ver todo el catálogo (5)</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProperties.map((related) => {
              const isRelatedCuadra = related.slug === 'cuadra-ranon-proaza';
              return (
                <article
                  key={related.id}
                  className="group bg-white rounded-2xl border border-borderline hover:border-navy/30 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={related.images[0]}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          related.operation === 'Alquiler'
                            ? 'bg-action text-white'
                            : 'bg-navy text-white'
                        }`}
                      >
                        {related.operation}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-navy">
                        {related.municipality}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div className="font-heading font-extrabold text-2xl drop-shadow-md">
                        {related.priceDisplay}
                      </div>
                      <span className="text-xs font-medium text-white/90 bg-black/40 px-2 py-0.5 rounded-lg border border-white/20">
                        {related.type}
                      </span>
                    </div>
                  </div>

                  {isRelatedCuadra && (
                    <div className="mx-4 mt-3 p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                      <span>Edificación rural / cuadra. No etiquetar como vivienda habitable.</span>
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-subtext">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span className="line-clamp-1">{related.location}</span>
                      </div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-navy group-hover:text-action transition-colors line-clamp-1">
                        <Link href={`/inmuebles/${related.slug}/`}>{related.title}</Link>
                      </h3>
                      <p className="text-xs text-subtext line-clamp-2">{related.headline}</p>
                    </div>

                    <div className="pt-3 border-t border-borderline flex items-center justify-between">
                      <span className="text-xs text-subtext">
                        {related.builtArea} m² {related.rooms ? `· ${related.rooms} habs` : ''}
                      </span>
                      <Link
                        href={`/inmuebles/${related.slug}/`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-action hover:text-action-hover"
                      >
                        <span>Ver detalles</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA FINAL */}
      <ContactCTA
        title="¿Quieres agendar una visita a este inmueble?"
        description="Llámanos al 984 08 12 08 o visítanos en Calle Rosal 6, Oviedo. Organizamos visitas adaptadas a tu horario y resolvemos cualquier duda urbanística o documental."
      />
    </div>
  );
}
