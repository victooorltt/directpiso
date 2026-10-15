import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Directpiso',
  description:
    'Política de protección de datos personales, fines del tratamiento y ejercicio de derechos ARCO/RGPD en Agencia Inmobiliaria Directpiso.',
};

export default function PrivacidadPage() {
  return (
    <div className="bg-white">
      {/* Header Institucional */}
      <section className="bg-ivory/60 border-b border-borderline py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-base sm:text-lg text-subtext max-w-2xl leading-relaxed">
            Conoce cómo tratamos tus datos personales, las finalidades de uso y los mecanismos para ejercer tus derechos de privacidad.
          </p>

          {/* Selector de páginas legales */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-borderline/60">
            <Link
              href="/aviso-legal/"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-navy bg-white hover:bg-ivory border border-borderline transition-colors"
            >
              Aviso Legal
            </Link>
            <Link
              href="/privacidad/"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-navy text-white shadow-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/cookies/"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-navy bg-white hover:bg-ivory border border-borderline transition-colors"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </section>

      {/* Contenido Legal */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* AVISO DESTACADO DE BORRADOR PROVISIONAL */}
          <div className="rounded-2xl bg-amber-50/90 border border-amber-200/90 p-5 sm:p-6 mb-12 text-amber-900 text-sm leading-relaxed flex items-start gap-4 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold text-amber-950 text-base">
                Aviso importante sobre el contenido legal
              </p>
              <p className="mt-1 text-amber-900">
                Borrador de estructura legal provisional. Pendiente de completar con la razón social, NIF/CIF y datos de inscripción registral definitivos de Agencia Inmobiliaria Directpiso.
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-10 text-navy leading-relaxed text-sm sm:text-base">
            {/* 1. Responsable */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                1. Responsable del tratamiento de datos personales
              </h2>
              <p className="text-subtext mb-4">
                El responsable del tratamiento de los datos recabados a través de este portal es:
              </p>
              <ul className="bg-ivory/50 rounded-2xl p-6 border border-borderline space-y-2 text-sm text-navy list-none pl-0">
                <li><strong className="text-navy">Identidad:</strong> {AGENCY_INFO.name} ({AGENCY_INFO.brandName})</li>
                <li><strong className="text-navy">Dirección de contacto:</strong> {AGENCY_INFO.fullAddress}</li>
                <li><strong className="text-navy">Teléfono directo:</strong> <a href={`tel:${AGENCY_INFO.phoneClean}`} className="text-action underline">{AGENCY_INFO.phone}</a></li>
                <li><strong className="text-navy">Datos societarios definitivos:</strong> En proceso de incorporación formal previa al despliegue comercial en producción.</li>
              </ul>
            </div>

            {/* 2. Fines del tratamiento */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                2. Finalidades del tratamiento
              </h2>
              <p className="text-subtext">
                Los datos personales facilitados por el usuario a través de los formularios o canales telefónicos serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-subtext text-sm sm:text-base">
                <li>
                  <strong className="text-navy">Atención de solicitudes y consultas:</strong> responder a dudas sobre inmuebles ofertados en compra o arrendamiento, coordinar visitas y proporcionar información complementaria de las fincas.
                </li>
                <li>
                  <strong className="text-navy">Estudio preliminar y captación para comercialización:</strong> registrar la descripción de inmuebles aportada por propietarios que desean comercializar pisos, casas, parcelas o locales en Asturias.
                </li>
                <li>
                  <strong className="text-navy">Gestión administrativa y precontractual:</strong> tramitar las gestiones oportunas en caso de formalización de un encargo de venta o alquiler.
                </li>
              </ul>
            </div>

            {/* 3. Base jurídica */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                3. Base jurídica del tratamiento
              </h2>
              <p className="text-subtext">
                La base legal para el tratamiento de los datos personales reside en:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-subtext text-sm sm:text-base">
                <li>
                  <strong className="text-navy">Consentimiento explícito del interesado:</strong> manifestado al marcar la casilla de aceptación en los formularios de consulta o comercialización previa al envío de la información.
                </li>
                <li>
                  <strong className="text-navy">Aplicación de medidas precontractuales:</strong> necesarias a solicitud del propio usuario para examinar las condiciones de una eventual operación inmobiliaria.
                </li>
                <li>
                  <strong className="text-navy">Cumplimiento de obligaciones legales:</strong> aplicables en materia tributaria, prevención de blanqueo de capitales y normativa del mercado inmobiliario cuando corresponda.
                </li>
              </ul>
            </div>

            {/* 4. Conservación */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                4. Plazos de conservación de los datos
              </h2>
              <p className="text-subtext">
                Los datos personales se conservarán durante el tiempo estrictamente necesario para atender la consulta planteada o mientras se mantenga la relación comercial iniciada. Una vez finalizada la gestión o en caso de revocación del consentimiento, los datos se mantendrán bloqueados durante los plazos legalmente exigibles para la prescripción de posibles responsabilidades administrativas o judiciales.
              </p>
            </div>

            {/* 5. Destinatarios y cesiones */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                5. Destinatarios y cesión de datos a terceros
              </h2>
              <p className="text-subtext">
                Directpiso no cederá datos personales a terceras entidades salvo por obligación legal expresa (Administración Tributaria, Fuerzas y Cuerpos de Seguridad, Juzgados y Tribunales) o cuando resulte estrictamente indispensable para la intermediación de una operación solicitada por el propio cliente (por ejemplo, notarías o entidades financieras previa autorización).
              </p>
            </div>

            {/* 6. Derechos del usuario ARCO/RGPD */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                6. Derechos del usuario (ARCO / RGPD)
              </h2>
              <p className="text-subtext">
                El usuario puede ejercitar en cualquier momento los siguientes derechos reconocidos por el Reglamento General de Protección de Datos (RGPD):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-ivory/50 rounded-xl p-4 border border-borderline">
                  <h4 className="font-bold text-navy text-sm">Derecho de Acceso</h4>
                  <p className="text-xs text-subtext mt-1">Conocer qué datos personales están siendo tratados por la agencia.</p>
                </div>
                <div className="bg-ivory/50 rounded-xl p-4 border border-borderline">
                  <h4 className="font-bold text-navy text-sm">Derecho de Rectificación</h4>
                  <p className="text-xs text-subtext mt-1">Solicitar la corrección de datos inexactos o incompletos.</p>
                </div>
                <div className="bg-ivory/50 rounded-xl p-4 border border-borderline">
                  <h4 className="font-bold text-navy text-sm">Derecho de Supresión</h4>
                  <p className="text-xs text-subtext mt-1">Pedir la eliminación de sus datos cuando ya no sean necesarios.</p>
                </div>
                <div className="bg-ivory/50 rounded-xl p-4 border border-borderline">
                  <h4 className="font-bold text-navy text-sm">Limitación y Oposición</h4>
                  <p className="text-xs text-subtext mt-1">Oponerse al tratamiento o solicitar la limitación temporal de su uso.</p>
                </div>
              </div>
              <p className="text-subtext mt-4">
                Para ejercer cualquiera de estos derechos, el titular puede dirigirse mediante comunicación escrita acompañada de copia de su documento de identidad a la oficina de Directpiso en <strong className="text-navy">{AGENCY_INFO.fullAddress}</strong> o consultar en el teléfono directo <strong className="text-navy">{AGENCY_INFO.phone}</strong>.
              </p>
              <p className="text-subtext mt-2 text-xs">
                Asimismo, le asiste el derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, www.aepd.es) si considera que sus derechos no han sido adecuadamente atendidos.
              </p>
            </div>

            {/* 7. Modo Demostración Actual */}
            <div className="rounded-2xl bg-ivory p-6 border border-borderline">
              <h2 className="font-heading text-lg font-bold text-navy mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-action" aria-hidden="true" />
                <span>7. Advertencia de entorno de demostración técnica</span>
              </h2>
              <p className="text-subtext text-sm">
                En esta fase de prototipado y validación técnica, los formularios del sitio web operan en modo de demostración. Los envíos no son almacenados en bases de datos comerciales externas ni transmitidos a terceros mientras se concluye la auditoría definitiva de protección de datos de Directpiso.
              </p>
            </div>
          </div>

          {/* Enlace al formulario de contacto */}
          <div className="mt-12 pt-8 border-t border-borderline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-navy text-sm sm:text-base">
                ¿Deseas más información sobre el tratamiento de tus datos?
              </h3>
              <p className="text-xs sm:text-sm text-subtext mt-0.5">
                Estamos a tu disposición en nuestra oficina de Calle Rosal 6 en Oviedo.
              </p>
            </div>
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-action hover:bg-action-hover transition-colors"
            >
              <span>Contactar con Directpiso</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
