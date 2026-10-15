'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Home,
  Mountain,
  Store,
  CheckCircle2,
  ArrowRight,
  Phone,
  Send,
  Info,
  ShieldCheck,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import { tokens } from '@/lib/tokens';
import { AGENCY_INFO } from '@/lib/properties';

export default function VenderPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    municipio: '',
    tipoInmueble: 'Piso',
    operacion: 'Venta',
    superficie: '',
    habitaciones: '',
    estadoInmueble: '',
    mensaje: '',
    consentimiento: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.municipio || !formData.consentimiento) {
      return;
    }
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      municipio: '',
      tipoInmueble: 'Piso',
      operacion: 'Venta',
      superficie: '',
      habitaciones: '',
      estadoInmueble: '',
      mensaje: '',
      consentimiento: false,
    });
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO GRADIENT */}
      <PageHero
        variant="gradient"
        imageSrc="/assets/editorial/vender-ambiente-conceptual.webp"
        imageAlt="Venta de inmueble en Asturias con Directpiso"
        title="¿Quieres vender tu inmueble en Asturias?"
        subtitle={
          <>
            <span className="block font-semibold text-navy">
              Cuéntanos qué propiedad tienes
            </span>
            <span className="block mt-1 text-subtext">
              En Directpiso puedes consultar cómo empezar a comercializar tu piso, casa, finca o local en Asturias. Déjanos tus datos y contactaremos contigo.
            </span>
          </>
        }
        primaryCta={{
          label: 'Solicitar información',
          href: '#formulario-venta',
        }}
        secondaryCta={{
          label: `Llamar: ${AGENCY_INFO.phone}`,
          href: `tel:${AGENCY_INFO.phoneClean}`,
        }}
      />

      {/* 2. Sección 'Tu propiedad, un nuevo proyecto' */}
      <section className="py-16 lg:py-24 bg-ivory/60 border-b border-borderline">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy mb-4">
              Da el primer paso
            </h2>
            <p className="text-base sm:text-lg text-subtext leading-relaxed">
              Vender un inmueble comienza por conocer sus características y entender qué necesitas. Envíanos una primera descripción para que Directpiso pueda contactar contigo.
            </p>
          </div>

          {/* 4 tarjetas con iconos elegantes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tarjeta 1 */}
            <div className="bg-white rounded-2xl p-6 border border-borderline shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action mb-5 border border-accent/20">
                <Building2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                Pisos y apartamentos
              </h3>
              <p className="text-sm text-subtext leading-relaxed">
                Viviendas en Oviedo y concejos próximos. Analizamos la ubicación, distribución y situación de la comunidad para su puesta en el mercado.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white rounded-2xl p-6 border border-borderline shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action mb-5 border border-accent/20">
                <Home className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                Casas y chalets
              </h3>
              <p className="text-sm text-subtext leading-relaxed">
                Viviendas unifamiliares, casas de pueblo y chalets independientes en entornos residenciales o rurales del Principado.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white rounded-2xl p-6 border border-borderline shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action mb-5 border border-accent/20">
                <Mountain className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                Fincas y construcciones rurales
              </h3>
              <p className="text-sm text-subtext leading-relaxed">
                Parcelas, cuadras tradicionales o edificaciones con potencial de rehabilitación en zonas naturales y concejos asturianos.
              </p>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white rounded-2xl p-6 border border-borderline shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center text-action mb-5 border border-accent/20">
                <Store className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy mb-2">
                Locales comerciales
              </h3>
              <p className="text-sm text-subtext leading-relaxed">
                Espacios a pie de calle, talleres y almacenes orientados a emprendedores, nuevos negocios o inversores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Formulario de Captación / Venta completo */}
      <section id="formulario-venta" className="py-16 lg:py-24 scroll-mt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-borderline shadow-xl p-6 sm:p-10 lg:p-12">
            <div className="mb-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Cuéntanos los datos de tu inmueble
              </h2>
              <p className="text-subtext text-base mt-2">
                Completa el siguiente formulario para que podamos orientarte sobre la comercialización de tu propiedad en Asturias.
              </p>
            </div>

            {isSubmitted && submittedData ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 text-navy space-y-4">
                <div className="flex items-center gap-3 text-emerald-800">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-bold">
                    Consulta enviada con éxito
                  </h3>
                </div>
                <p className="text-sm text-subtext leading-relaxed">
                  Hemos recibido tu consulta con los siguientes datos. Nos pondremos en contacto contigo lo antes posible:
                </p>
                <div className="bg-white rounded-xl p-4 border border-emerald-100 text-sm space-y-2">
                  <p><span className="font-semibold text-navy">Titular / Contacto:</span> {submittedData.nombre}</p>
                  <p><span className="font-semibold text-navy">Teléfono:</span> {submittedData.telefono}</p>
                  <p><span className="font-semibold text-navy">Correo:</span> {submittedData.email}</p>
                  <p><span className="font-semibold text-navy">Ubicación:</span> {submittedData.municipio}</p>
                  <p><span className="font-semibold text-navy">Tipo de inmueble:</span> {submittedData.tipoInmueble}</p>
                  <p><span className="font-semibold text-navy">Operación:</span> {submittedData.operacion}</p>
                  {submittedData.superficie && (
                    <p><span className="font-semibold text-navy">Superficie aprox.:</span> {submittedData.superficie} m²</p>
                  )}
                  {submittedData.habitaciones && (
                    <p><span className="font-semibold text-navy">Habitaciones:</span> {submittedData.habitaciones}</p>
                  )}
                  {submittedData.estadoInmueble && (
                    <p><span className="font-semibold text-navy">Estado:</span> {submittedData.estadoInmueble}</p>
                  )}
                  {submittedData.mensaje && (
                    <p><span className="font-semibold text-navy">Descripción:</span> {submittedData.mensaje}</p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-navy bg-white border border-borderline hover:bg-ivory transition-colors"
                  >
                    Probar otro envío
                  </button>
                  <a
                    href={`tel:${AGENCY_INFO.phoneClean}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-action hover:bg-action-hover transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Llamada directa: {AGENCY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-navy mb-2">
                      Nombre completo <span className="text-action" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      placeholder="Ej. Carmen Álvarez"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-navy mb-2">
                      Teléfono de contacto <span className="text-action" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      required
                      placeholder="Ej. 600 000 000"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Correo */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Correo electrónico <span className="text-action" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
                    />
                  </div>

                  {/* Municipio / Localidad */}
                  <div>
                    <label htmlFor="municipio" className="block text-sm font-semibold text-navy mb-2">
                      Municipio o localidad del inmueble <span className="text-action" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="municipio"
                      required
                      placeholder="Ej. Oviedo, Quirós, Proaza, Tineo..."
                      value={formData.municipio}
                      onChange={(e) => setFormData({ ...formData, municipio: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Tipo de Inmueble */}
                  <div>
                    <label htmlFor="tipoInmueble" className="block text-sm font-semibold text-navy mb-2">
                      Tipo de inmueble
                    </label>
                    <select
                      id="tipoInmueble"
                      value={formData.tipoInmueble}
                      onChange={(e) => setFormData({ ...formData, tipoInmueble: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm"
                    >
                      <option value="Piso">Piso / Apartamento</option>
                      <option value="Casa/Chalet">Casa / Chalet</option>
                      <option value="Finca/Rústico">Finca / Rústico / Cuadra</option>
                      <option value="Local">Local comercial</option>
                      <option value="Otro">Otro tipo</option>
                    </select>
                  </div>

                  {/* Operación */}
                  <div>
                    <label htmlFor="operacion" className="block text-sm font-semibold text-navy mb-2">
                      Operación
                    </label>
                    <select
                      id="operacion"
                      value={formData.operacion}
                      onChange={(e) => setFormData({ ...formData, operacion: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm"
                    >
                      <option value="Venta">Venta (Comercialización)</option>
                    </select>
                  </div>

                  {/* Superficie aproximada */}
                  <div>
                    <label htmlFor="superficie" className="block text-sm font-semibold text-navy mb-2">
                      Superficie aprox. (m²) <span className="text-xs text-subtext font-normal">(opcional)</span>
                    </label>
                    <input
                      type="number"
                      id="superficie"
                      min="1"
                      placeholder="Ej. 95"
                      value={formData.superficie}
                      onChange={(e) => setFormData({ ...formData, superficie: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Habitaciones (opcional, no obligatorio para fincas ni locales) */}
                  <div>
                    <label htmlFor="habitaciones" className="block text-sm font-semibold text-navy mb-2">
                      Nº de habitaciones <span className="text-xs text-subtext font-normal">(opcional para fincas/locales)</span>
                    </label>
                    <input
                      type="number"
                      id="habitaciones"
                      min="0"
                      placeholder="Ej. 3"
                      value={formData.habitaciones}
                      onChange={(e) => setFormData({ ...formData, habitaciones: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400"
                    />
                  </div>

                  {/* Estado del inmueble */}
                  <div>
                    <label htmlFor="estadoInmueble" className="block text-sm font-semibold text-navy mb-2">
                      Estado del inmueble <span className="text-xs text-subtext font-normal">(opcional)</span>
                    </label>
                    <select
                      id="estadoInmueble"
                      value={formData.estadoInmueble}
                      onChange={(e) => setFormData({ ...formData, estadoInmueble: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Buen estado / Listo para entrar">Buen estado / Listo para entrar</option>
                      <option value="A reformar parcialmente">A reformar parcialmente</option>
                      <option value="Para rehabilitación integral">Para rehabilitación integral</option>
                      <option value="Obra nueva / Reformado reciente">Obra nueva / Reformado reciente</option>
                      <option value="Finca sin edificar">Finca sin edificar / Terreno</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje / descripción */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-navy mb-2">
                    Descripción o notas adicionales <span className="text-xs text-subtext font-normal">(opcional)</span>
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Detalles sobre la finca, orientación, ascensor, garaje o cualquier circunstancia relevante..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-borderline bg-white text-navy focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent text-sm placeholder:text-gray-400 resize-y"
                  />
                </div>

                {/* Checkbox de consentimiento */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      id="consentimiento"
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
                      </Link>
                      . Entiendo que este formulario se presenta en modo demostración para validación previa de canales y tratamiento de datos por parte de Directpiso. <span className="text-action" aria-hidden="true">*</span>
                    </span>
                  </label>
                </div>

                {/* Botón 'Enviar consulta' */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-action hover:bg-action-hover rounded-xl shadow-md hover:shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Enviar consulta</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>



      {/* 5. Bloque final ContactCTA */}
      <ContactCTA
        title="¿Deseas una consulta personalizada sobre tu propiedad?"
        description="Pásate por nuestra oficina en la Calle Rosal 6 de Oviedo o llámanos para comentar el estado y expectativas de tu inmueble."
        variant="navy"
      />
    </div>
  );
}
