import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, ArrowRight, Building, Phone, MapPin } from 'lucide-react';
import { AGENCY_INFO } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Aviso Legal | Directpiso',
  description:
    'Aviso legal, condiciones de uso y datos identificativos de Agencia Inmobiliaria Directpiso en Oviedo (Asturias).',
};

export default function AvisoLegalPage() {
  return (
    <div className="bg-white">
      {/* Header Institucional */}
      <section className="bg-ivory/60 border-b border-borderline py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Aviso Legal
          </h1>
          <p className="mt-3 text-base sm:text-lg text-subtext max-w-2xl leading-relaxed">
            Información general, titularidad del sitio web y condiciones de acceso y navegación en Directpiso.
          </p>

          {/* Selector de páginas legales */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-borderline/60">
            <Link
              href="/aviso-legal/"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-navy text-white shadow-sm"
            >
              Aviso Legal
            </Link>
            <Link
              href="/privacidad/"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-navy bg-white hover:bg-ivory border border-borderline transition-colors"
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
                1. Identificación del responsable del sitio web
              </h2>
              <p className="text-subtext mb-4">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos y de contacto asociados al presente portal:
              </p>
              <ul className="bg-ivory/50 rounded-2xl p-6 border border-borderline space-y-2 text-sm text-navy list-none pl-0">
                <li><strong className="text-navy">Nombre comercial:</strong> {AGENCY_INFO.name} ({AGENCY_INFO.brandName})</li>
                <li><strong className="text-navy">Domicilio profesional:</strong> {AGENCY_INFO.fullAddress}</li>
                <li><strong className="text-navy">Teléfono directo:</strong> <a href={`tel:${AGENCY_INFO.phoneClean}`} className="text-action underline">{AGENCY_INFO.phone}</a></li>
                <li><strong className="text-navy">Razón social y NIF/CIF:</strong> Pendientes de formalización registral definitiva en el marco de la presente maqueta institucional.</li>
                <li><strong className="text-navy">Datos registrales:</strong> En trámite de incorporación por la administración de Directpiso.</li>
              </ul>
            </div>

            {/* 2. Objeto */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                2. Objeto y ámbito de aplicación
              </h2>
              <p className="text-subtext">
                El presente sitio web tiene por objeto ofrecer un catálogo informativo de inmuebles en régimen de venta o alquiler gestionados o publicitados en Oviedo y concejos del Principado de Asturias, así como facilitar canales de contacto para personas interesadas en comprar, vender o arrendar propiedades.
              </p>
              <p className="text-subtext mt-3">
                El acceso y navegación por este portal atribuye la condición de usuario e implica la aceptación plena de las disposiciones contenidas en este Aviso Legal.
              </p>
            </div>

            {/* 3. Condiciones de uso */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                3. Condiciones de acceso y utilización del portal
              </h2>
              <p className="text-subtext">
                El usuario se compromete a hacer un uso adecuado de los contenidos y formularios del sitio web, absteniéndose de realizar actividades ilícitas, contrarias a la buena fe o al orden público, o que puedan ocasionar daños a los sistemas físicos y lógicos de Directpiso o de terceros.
              </p>
              <p className="text-subtext mt-3">
                Los formularios de captación o consulta disponibles en este entorno se presentan con fines demostrativos de revisión, requiriéndose la veracidad de los datos que voluntariamente decida consignar el usuario.
              </p>
            </div>

            {/* 4. Propiedad intelectual */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                4. Propiedad intelectual e industrial
              </h2>
              <p className="text-subtext">
                Todos los elementos del portal, incluyendo diseño gráfico, logotipos, textos, combinaciones cromáticas, estructura y código fuente son titularidad de Directpiso o se encuentran debidamente licenciados para su inclusión editorial.
              </p>
              <p className="text-subtext mt-3">
                Las fotografías y descripciones de las propiedades reales provienen de las fichas de comercialización públicas de la agencia y están destinadas exclusivamente a ilustrar la oferta inmobiliaria. Queda prohibida la reproducción, distribución o comunicación pública de dichos materiales sin la previa autorización escrita del titular.
              </p>
            </div>

            {/* 5. Exención de responsabilidad sobre inmuebles */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                5. Exención de responsabilidad e información sobre inmuebles
              </h2>
              <p className="text-subtext">
                Los datos descriptivos, superficies (m² construidos o útiles), precios de venta o alquiler, consumos energéticos y estados de conservación reflejados en este catálogo se presentan con carácter meramente orientativo y proceden de fuentes comerciales contrastadas. Dichos datos no constituyen oferta vinculante ni contrato formal hasta su ratificación jurídica y documental entre las partes intervinientes.
              </p>
              <p className="text-subtext mt-3">
                Se recomienda encarecidamente verificar documentalmente en el Registro de la Propiedad, Catastro y mediante visita física todas las características esenciales antes de formalizar cualquier señal, contrato de arras o transacción.
              </p>
            </div>

            {/* 6. Legislación aplicable y jurisdicción */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                6. Legislación aplicable y fuero judicial
              </h2>
              <p className="text-subtext">
                Las relaciones entre Directpiso y los usuarios de este sitio web se regirán por la normativa española vigente. Para la resolución de cualquier litigio derivado de la interpretación o ejecución de las presentes condiciones, ambas partes se someten expresamente a los Juzgados y Tribunales de la ciudad de Oviedo (Asturias), con renuncia a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>
          </div>

          {/* Enlace al formulario de contacto */}
          <div className="mt-12 pt-8 border-t border-borderline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-navy text-sm sm:text-base">
                ¿Tienes dudas sobre las condiciones legales?
              </h3>
              <p className="text-xs sm:text-sm text-subtext mt-0.5">
                Contacta directamente con la oficina de Directpiso en Oviedo.
              </p>
            </div>
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-action hover:bg-action-hover transition-colors"
            >
              <span>Ir a contacto</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
