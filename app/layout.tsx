import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Directpiso | Agencia Inmobiliaria en Oviedo, Asturias',
    template: '%s | Directpiso',
  },
  description:
    'Venta y alquiler de propiedades en Oviedo y Asturias. Asesoramiento inmobiliario cercano, honesto y transparente. Calle Rosal, 6, Oviedo. Teléfono: 984 08 12 08.',
  keywords: [
    'Directpiso',
    'inmobiliaria Oviedo',
    'comprar piso Oviedo',
    'vender piso Oviedo',
    'alquiler Oviedo',
    'inmobiliaria Asturias',
    'chalets Asturias',
    'casas rurales Asturias',
  ],
  authors: [{ name: 'Directpiso' }],
  metadataBase: new URL('https://directpiso.es'),
  openGraph: {
    title: 'Directpiso | Agencia Inmobiliaria en Oviedo, Asturias',
    description:
      'Compraventa y alquiler de inmuebles en Oviedo y concejos asturianos. Calle Rosal, 6, 33009 Oviedo. Teléfono: 984 08 12 08.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Directpiso',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white text-navy font-sans antialiased flex flex-col selection:bg-accent-subtle selection:text-action">
        <Navbar />
        <main className="flex-1 min-h-[calc(100vh-80px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
