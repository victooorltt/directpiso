import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Cookie, ShieldCheck, ArrowRight, Settings } from 'lucide-react';
import { AGENCY_INFO } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Política de Cookies | Directpiso',
  description:
    'Información sobre el uso de cookies técnicas y analíticas en la web de Agencia Inmobiliaria Directpiso.',
};

export default function CookiesPage() {
  return (
    <div className="bg-white">
      {/* Header Institucional */}
      <section className="bg-ivory/60 border-b border-borderline py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Política de Cookies
          </h1>
          <p className="mt-3 text-base sm:text-lg text-subtext max-w-2xl leading-relaxed">
            Te explicamos qué son las cookies, cuáles se emplean en este sitio web y cómo puedes gestionarlas o desactivarlas en cualquier momento.
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
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-navy bg-white hover:bg-ivory border border-borderline transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/cookies/"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-navy text-white shadow-sm"
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
            {/* 1. ¿Qué son las cookies? */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                1. ¿Qué son las cookies y para qué se utilizan?
              </h2>
              <p className="text-subtext">
                Una cookie es un pequeño archivo de texto que un sitio web descarga y almacena en el navegador o dispositivo del usuario (ordenador, smartphone o tablet) cuando este visita sus páginas. Las cookies permiten almacenar y recuperar información técnica sobre los hábitos de navegación, la sesión del usuario o sus preferencias de visualización, facilitando una experiencia de uso fluida y segura.
              </p>
            </div>

            {/* 2. Clasificación de cookies utilizadas */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                2. Clasificación de cookies en este sitio web
              </h2>
              <p className="text-subtext mb-4">
                El portal de Directpiso implementa una arquitectura respetuosa con la privacidad del visitante, limitando al máximo el uso de identificadores. En concreto, se clasifican en:
              </p>
              <div className="space-y-4">
                <div className="bg-ivory/50 rounded-2xl p-5 border border-borderline">
                  <h3 className="font-bold text-navy text-base flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-action" aria-hidden="true" />
                    <span>Cookies técnicas y estrictamente necesarias</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-subtext mt-2 leading-relaxed">
                    Son aquellas imprescindibles para la navegación básica y el funcionamiento operativo del portal. Permiten controlar el tráfico y la comunicación de datos, recordar opciones de navegación e interactuar con los formularios del sitio. Al ser indispensables, no requieren consentimiento previo para su ejecución conforme a la LSSI-CE.
                  </p>
                </div>

                <div className="bg-ivory/50 rounded-2xl p-5 border border-borderline">
                  <h3 className="font-bold text-navy text-base flex items-center gap-2">
                    <Cookie className="w-5 h-5 text-action" aria-hidden="true" />
                    <span>Cookies analíticas o de medición agregada</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-subtext mt-2 leading-relaxed">
                    Permiten cuantificar el número de usuarios y realizar mediciones estadísticas puramente anónimas y agregadas sobre el uso del catálogo (por ejemplo, inmuebles más consultados). Esta información sirve exclusivamente para optimizar la ergonomía y velocidad del sitio web.
                  </p>
                </div>
              </div>
              <p className="text-subtext mt-4 text-xs sm:text-sm">
                <strong className="text-navy">Nota de transparencia:</strong> Este sitio web <strong className="text-navy">no utiliza cookies de publicidad comportamental</strong>, no comercializa perfiles de navegación con redes de anuncios y no comparte identificadores personales con terceros.
              </p>
            </div>

            {/* 3. Tabla de cookies */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                3. Relación de cookies utilizadas
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-borderline shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm text-navy">
                  <thead className="bg-ivory text-navy font-bold border-b border-borderline">
                    <tr>
                      <th scope="col" className="p-3 sm:p-4">Cookie</th>
                      <th scope="col" className="p-3 sm:p-4">Proveedor</th>
                      <th scope="col" className="p-3 sm:p-4">Tipo</th>
                      <th scope="col" className="p-3 sm:p-4">Finalidad</th>
                      <th scope="col" className="p-3 sm:p-4">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-borderline bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-mono font-semibold text-xs text-navy">__next_session</td>
                      <td className="p-3 sm:p-4 text-subtext">Directpiso (propia)</td>
                      <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-medium">Técnica</span></td>
                      <td className="p-3 sm:p-4 text-subtext">Mantenimiento de sesión técnica y renderizado en servidor Next.js.</td>
                      <td className="p-3 sm:p-4 text-subtext">Sesión</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-mono font-semibold text-xs text-navy">cookie_consent</td>
                      <td className="p-3 sm:p-4 text-subtext">Directpiso (propia)</td>
                      <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-medium">Técnica</span></td>
                      <td className="p-3 sm:p-4 text-subtext">Recuerda las preferencias de consentimiento del usuario sobre cookies.</td>
                      <td className="p-3 sm:p-4 text-subtext">1 año</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-mono font-semibold text-xs text-navy">_dp_stats</td>
                      <td className="p-3 sm:p-4 text-subtext">Directpiso (propia)</td>
                      <td className="p-3 sm:p-4"><span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 text-xs font-medium">Analítica</span></td>
                      <td className="p-3 sm:p-4 text-subtext">Medición cuantitativa agregada de visitas sin perfilado personal.</td>
                      <td className="p-3 sm:p-4 text-subtext">30 días</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Cómo gestionar cookies en el navegador */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                4. Cómo gestionar, revocar o desactivar cookies en el navegador
              </h2>
              <p className="text-subtext mb-4">
                El usuario puede en cualquier momento permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de Internet. A continuación se ofrecen los enlaces oficiales de soporte de los navegadores más utilizados:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-borderline hover:border-action/40 bg-ivory/30 hover:bg-white transition-all flex items-center justify-between group"
                >
                  <span className="font-semibold text-navy text-sm">Google Chrome</span>
                  <ArrowRight className="w-4 h-4 text-subtext group-hover:text-action transition-colors" />
                </a>

                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-borderline hover:border-action/40 bg-ivory/30 hover:bg-white transition-all flex items-center justify-between group"
                >
                  <span className="font-semibold text-navy text-sm">Mozilla Firefox</span>
                  <ArrowRight className="w-4 h-4 text-subtext group-hover:text-action transition-colors" />
                </a>

                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-borderline hover:border-action/40 bg-ivory/30 hover:bg-white transition-all flex items-center justify-between group"
                >
                  <span className="font-semibold text-navy text-sm">Apple Safari</span>
                  <ArrowRight className="w-4 h-4 text-subtext group-hover:text-action transition-colors" />
                </a>

                <a
                  href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-borderline hover:border-action/40 bg-ivory/30 hover:bg-white transition-all flex items-center justify-between group"
                >
                  <span className="font-semibold text-navy text-sm">Microsoft Edge</span>
                  <ArrowRight className="w-4 h-4 text-subtext group-hover:text-action transition-colors" />
                </a>
              </div>
              <p className="text-subtext mt-4 text-xs">
                Ten en cuenta que si deshabilitas completamente las cookies técnicas, algunas funcionalidades de sesión o navegación del portal podrían verse afectadas.
              </p>
            </div>

            {/* 5. Actualizaciones */}
            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-4">
                5. Actualización y vigencia
              </h2>
              <p className="text-subtext">
                Directpiso puede modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias o con el fin de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD). Se aconseja a los usuarios visitarla periódicamente.
              </p>
            </div>
          </div>

          {/* Enlace al formulario de contacto */}
          <div className="mt-12 pt-8 border-t border-borderline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-navy text-sm sm:text-base">
                ¿Tienes consultas sobre nuestra política de cookies?
              </h3>
              <p className="text-xs sm:text-sm text-subtext mt-0.5">
                Contacta directamente con la oficina de Directpiso en Calle Rosal 6, Oviedo.
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
