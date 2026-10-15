'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  MapPin,
  Phone,
  Smartphone,
  Instagram,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Building,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { AGENCY_INFO, PROPERTIES } from '@/lib/properties';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const inmuebleParam = searchParams.get('inmueble') || '';

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    motivo: 'Comprar',
    inmuebleInteres: '',
    mensaje: '',
    consentimiento: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Preseleccionar si viene por query param ?inmueble=...
  useEffect(() => {
    if (inmuebleParam) {
      // Buscar si coincide con el slug o id de alguna propiedad
      const matched = PROPERTIES.find(
        (p) => p.slug === inmuebleParam || p.id === inmuebleParam || p.title.toLowerCase().includes(inmuebleParam.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({
          ...prev,
          inmuebleInteres: matched.title,
          motivo: matched.operation === 'Alquiler' ? 'Alquilar' : 'Comprar',
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          inmuebleInteres: inmuebleParam,
        }));
      }
    }
  }, [inmuebleParam]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje || !formData.consentimiento) {
      return;
    }
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      motivo: 'Comprar',
      inmuebleInteres: '',
      mensaje: '',
      consentimiento: false,
    });
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-borderline shadow-xl p-6 sm:p-10">
      <div className="mb-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
          Envíanos tu consulta
        </h2>
        <p className="text-subtext text-sm sm:text-base mt-2">
          Indícanos si te interesa visitar un inmueble, vender tu propiedad o resolver cualquier duda inmobiliaria en Asturias.
        </p>
      </div>

      {isSubmitted && submittedData ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 text-navy space-y-4">
          <div className="flex items-center gap-3 text-emerald-800">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" aria-hidden="true" />
            <h3 className="font-heading text-xl font-bold">
              Mensaje enviado correctamente
            </h3>
          </div>
          <p className="text-sm text-subtext leading-relaxed">
            Hemos recibido tu consulta con los siguientes datos. Nos pondremos en contacto contigo a la mayor brevedad:
          </p>
          <div className="bg-white rounded-xl p-4 border border-emerald-100 text-sm space-y-2">
            <p><span className="font-semibold text-navy">Nombre:</span> {submittedData.nombre}</p>
            <p><span className="font-semibold text-navy">Correo:</span> {submittedData.email}</p>
            {submittedData.telefono && (
              <p><span className="font-semibold text-navy">Teléfono:</span> {submittedData.telefono}</p>
            )}
            <p><span className="font-semibold text-navy">Motivo:</span> {submittedData.motivo}</p>
            {submittedData.inmuebleInteres && (
              <p><span className="font-semibold text-navy">Inmueble de interés:</span> {submittedData.inmuebleInteres}</p>
            )}
            <p><span className="font-semibold text-navy">Mensaje:</span> {submittedData.mensaje}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-navy bg-white border border-borderline hover:bg-ivory transition-colors cursor-pointer"
            >
              Enviar otro mensaje
            </button>
            <a
              href={`tel:${AGENCY_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-action hover:bg-action-hover transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Contactar por teléfono: {AGENCY_INFO.phone}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nombre */}
            <div>
              <label htmlFor="contacto-nombre" className="block text-sm font-semibold text-navy mb-1.5">
                Nombre completo <span className="text-action" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="contacto-nombre"
                required
                placeholder="Ej. Roberto Menéndez"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Correo */}
            <div>
              <label htmlFor="contacto-email" className="block text-sm font-semibold text-navy mb-1.5">
                Correo electrónico <span className="text-action" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="contacto-email"
                required
                placeholder="nombre@ejemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Teléfono (opcional) */}
            <div>
              <label htmlFor="contacto-telefono" className="block text-sm font-semibold text-navy mb-1.5">
                Teléfono <span className="text-xs text-subtext font-normal">(opcional)</span>
              </label>
              <input
                type="tel"
                id="contacto-telefono"
                placeholder="Ej. 984 00 00 00"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Motivo */}
            <div>
              <label htmlFor="contacto-motivo" className="block text-sm font-semibold text-navy mb-1.5">
                Motivo de la consulta
              </label>
              <select
                id="contacto-motivo"
                value={formData.motivo}
                onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm"
              >
                <option value="Comprar">Comprar un inmueble</option>
                <option value="Alquilar">Alquilar un inmueble</option>
                <option value="Vender">Vender mi propiedad</option>
                <option value="Otra consulta">Otra consulta general</option>
              </select>
            </div>
          </div>

          {/* Inmueble de interés (opcional) */}
          <div>
            <label htmlFor="contacto-inmueble" className="block text-sm font-semibold text-navy mb-1.5">
              Inmueble de interés <span className="text-xs text-subtext font-normal">(opcional)</span>
            </label>
            <input
              type="text"
              id="contacto-inmueble"
              list="inmuebles-list"
              placeholder="Ej. Chalet en Ronderos, Quirós o referencia"
              value={formData.inmuebleInteres}
              onChange={(e) => setFormData({ ...formData, inmuebleInteres: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
            />
            <datalist id="inmuebles-list">
              {PROPERTIES.map((prop) => (
                <option key={prop.id} value={prop.title}>
                  {prop.priceDisplay} - {prop.location}
                </option>
              ))}
            </datalist>
            {formData.inmuebleInteres && (
              <p className="mt-1 text-xs text-action font-medium">
                Propiedad asociada: {formData.inmuebleInteres}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="contacto-mensaje" className="block text-sm font-semibold text-navy mb-1.5">
              Mensaje <span className="text-action" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contacto-mensaje"
              rows={4}
              required
              placeholder="Cuéntanos qué necesitas: concertar una visita, consultar información sobre una propiedad o solicitar asesoramiento..."
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400 resize-y"
            />
          </div>

          {/* Consentimiento RGPD */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                id="contacto-consentimiento"
                required
                checked={formData.consentimiento}
                onChange={(e) => setFormData({ ...formData, consentimiento: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-borderline text-action focus:ring-action"
              />
              <span className="text-xs text-subtext leading-relaxed">
                He leído y acepto la{' '}
                <Link
                  href="/privacidad/"
                  className="text-action underline hover:text-action-hover font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  política de privacidad
                </Link>{' '}
                de Directpiso para la tramitación de esta consulta. <span className="text-action" aria-hidden="true">*</span>
              </span>
            </label>
          </div>

          {/* Botón 'Enviar mensaje' */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-action hover:bg-action-hover rounded-xl shadow-md hover:shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Enviar mensaje</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactoPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO CENTRADO CON OVERLAY (SIN BENEFICIOS) */}
      <PageHero
        variant="centered"
        imageSrc="/assets/editorial/hero-contacto.webp"
        imageAlt="Oficina de Directpiso en Calle Rosal 6, Oviedo"
        title="Contacta con Directpiso"
        subtitle={
          <>
            <span className="block font-semibold text-navy">
              Estamos aquí para escuchar tu consulta
            </span>
            <span className="block mt-1 text-subtext">
              Tanto si quieres visitar un inmueble como si estás pensando en vender o alquilar una propiedad, puedes ponerte en contacto con nuestra oficina en Oviedo.
            </span>
          </>
        }
        primaryCta={{
          label: 'Escribir consulta',
          href: '#formulario-contacto',
        }}
        secondaryCta={{
          label: `Llamar: ${AGENCY_INFO.phone}`,
          href: `tel:${AGENCY_INFO.phoneClean}`,
        }}
      />

      {/* 2. Sección Principal: Información de Oficina & Formulario */}
      <section className="py-16 lg:py-24 bg-ivory/40 border-b border-borderline">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Columna Izquierda: Formulario de Contacto (con Suspense para useSearchParams) */}
            <div id="formulario-contacto" className="lg:col-span-7 scroll-mt-8">
              <Suspense
                fallback={
                  <div className="bg-white rounded-3xl border border-borderline p-12 text-center text-subtext">
                    <p>Cargando formulario de contacto...</p>
                  </div>
                }
              >
                <ContactFormInner />
              </Suspense>
            </div>

            {/* Columna Derecha: Información de Oficina y Datos */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-2">
                  Nuestra oficina en Oviedo. Hablemos de tu próxima operación.
                </h2>
                <p className="text-subtext text-sm sm:text-base leading-relaxed">
                  Te atendemos en el centro de Oviedo para cualquier gestión de compra, venta o alquiler inmobiliario en el Principado.
                </p>
              </div>

              {/* Ficha de datos institucionales verificados */}
              <div className="bg-white rounded-2xl p-6 border border-borderline shadow-sm space-y-5 text-sm text-navy">
                {/* Nombre de la entidad */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center text-action shrink-0 border border-accent/20">
                    <Building className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-base">
                      {AGENCY_INFO.name}
                    </h3>
                    <p className="text-subtext text-xs mt-0.5">
                      Intermediación y servicios inmobiliarios en Asturias
                    </p>
                  </div>
                </div>

                {/* Dirección postal */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-borderline/60">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-navy block">Dirección</span>
                    <span className="text-subtext block mt-0.5">
                      {AGENCY_INFO.fullAddress}
                    </span>
                    <span className="text-xs text-subtext/80 block mt-0.5">
                      (Zona Rosal - Parque San Francisco, centro de Oviedo)
                    </span>
                  </div>
                </div>

                {/* Teléfono verificado */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-borderline/60">
                  <Phone className="w-5 h-5 text-action shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-navy block">Teléfono directo verificado</span>
                    <a
                      href={`tel:${AGENCY_INFO.phoneClean}`}
                      className="text-action hover:text-action-hover font-bold text-base block mt-0.5 underline transition-colors"
                    >
                      {AGENCY_INFO.phone}
                    </a>
                    <span className="text-xs text-subtext block mt-0.5">
                      Atención telefónica directa
                    </span>
                  </div>
                </div>

                {/* Móvil con advertencia de confirmación */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-borderline/60">
                  <Smartphone className="w-5 h-5 text-subtext shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-navy block">Móvil corporativo</span>
                    <span className="text-navy font-medium block mt-0.5">
                      {AGENCY_INFO.mobilePending}
                    </span>
                    <span className="text-xs text-amber-800 bg-amber-50 rounded px-2 py-0.5 inline-block mt-1 border border-amber-200">
                      [Pendiente de confirmación formal - no habilitado para WhatsApp]
                    </span>
                  </div>
                </div>

                {/* Redes Sociales: Instagram */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-borderline/60">
                  <Instagram className="w-5 h-5 text-[#E1306C] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-navy block">Instagram oficial</span>
                    <a
                      href={AGENCY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-action hover:text-action-hover font-medium text-sm mt-0.5 transition-colors"
                    >
                      <span>@inmobiliariadirectpiso</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Correo pendiente de confirmación */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-borderline/60">
                  <Mail className="w-5 h-5 text-subtext shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-navy block">Correo electrónico</span>
                    <span className="text-xs text-subtext block mt-0.5">
                      El buzón histórico (correo@directpiso.es) se encuentra pendiente de confirmación formal. Para un contacto inmediato, utiliza el teléfono directo verificado o el formulario web.
                    </span>
                  </div>
                </div>

                {/* Nota de transparencia: Horario */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-borderline/60">
                  <Clock className="w-5 h-5 text-subtext shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-navy block">Horario de atención</span>
                    <p className="text-xs text-subtext mt-0.5 leading-relaxed">
                      <span className="font-medium text-navy">Nota de transparencia:</span> Horario pendiente de confirmación formal por discrepancias en directorios públicos. Recomendamos concertar cita o llamar al 984 08 12 08 antes de acudir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sección de Localización: Gran Mapa Interactivo */}
      <section className="py-16 lg:py-24 bg-white border-b border-borderline">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Dónde encontrarnos en Oviedo
              </h2>
              <p className="text-subtext text-sm sm:text-base mt-2 max-w-2xl">
                Nuestra oficina está situada en la Calle Rosal 6, en pleno centro de la capital asturiana, junto al Parque San Francisco y la Plaza de San Miguel.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calle+Rosal+6,+33009+Oviedo,+Asturias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-action hover:bg-action-hover transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Cómo llegar en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
              </a>
              <a
                href="https://www.openstreetmap.org/?mlat=43.3606&mlon=-5.8475#map=17/43.3606/-5.8475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-navy bg-ivory border border-borderline hover:bg-accent-subtle transition-colors"
              >
                <span>Ver en OpenStreetMap</span>
                <ExternalLink className="w-3.5 h-3.5 text-subtext" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Gran contenedor del mapa interactivo */}
          <div className="relative rounded-3xl overflow-hidden border border-borderline shadow-lg bg-gray-100">
            <iframe
              title="Mapa de localización interactivo de Agencia Inmobiliaria Directpiso en Calle Rosal 6, Oviedo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-5.8570%2C43.3565%2C-5.8380%2C43.3650&amp;layer=mapnik&amp;marker=43.3606%2C-5.8475"
              className="w-full h-[450px] sm:h-[540px] lg:h-[600px] border-0"
              loading="lazy"
            />
            <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-borderline text-xs text-subtext flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-medium text-navy text-sm">
                <MapPin className="w-4 h-4 text-action shrink-0" aria-hidden="true" />
                <span>Calle Rosal, 6 · 33009 Oviedo (Asturias)</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <span>Coordenadas: 43.3606° N, 5.8475° W</span>
                <span>© Colaboradores de OpenStreetMap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bloque final institucional */}
      <ContactCTA
        title="¿Prefieres hablar directamente con un profesional?"
        description="Llámanos al 984 08 12 08 o acércate a la Calle Rosal 6 en Oviedo. Te atenderemos con cercanía y sin compromisos."
        variant="navy"
      />
    </div>
  );
}
