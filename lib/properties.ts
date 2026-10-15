export interface Property {
  id: string;
  slug: string;
  title: string;
  headline: string;
  price: number;
  priceDisplay: string;
  operation: 'Venta' | 'Alquiler';
  type: 'Chalet independiente' | 'Edificación rural / cuadra' | 'Casa de pueblo' | 'Local comercial' | 'Piso';
  typeCategory: 'casa' | 'rustico' | 'local' | 'piso';
  location: string;
  municipality: 'Oviedo' | 'Quirós' | 'Proaza' | 'Tineo';
  builtArea: number; // m²
  usableArea?: number;
  plotArea?: number;
  rooms?: number; // undefined or 0 for commercial/cuadra
  baths?: number;
  floors?: number;
  floor?: string;
  condition: string;
  yearBuilt?: number;
  heating?: string;
  orientation?: string;
  energyConsumption?: string;
  energyEmissions?: string;
  energyCertificate?: string;
  garage?: boolean;
  garden?: boolean;
  elevator?: boolean;
  storage?: boolean;
  balcony?: boolean;
  furnished?: boolean;
  builtInWardrobes?: boolean;
  motorizedDoor?: boolean;
  suppliesNote?: string;
  specialNotice?: string;
  availabilityDate?: string;
  deposit?: string;
  description: string;
  images: string[];
  sources: { title: string; url: string }[];
  featured: boolean;
  verificationDate: string; // '15/10/2026'
  internalNotes?: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 'inmueble-quiros',
    slug: 'chalet-ronderos-quiros',
    title: 'Chalet en Ronderos, Quirós',
    headline: 'Una casa para disfrutar de la naturaleza asturiana',
    price: 179900,
    priceDisplay: '179.900 €',
    operation: 'Venta',
    type: 'Chalet independiente',
    typeCategory: 'casa',
    location: 'Ronderos, Quirós, Asturias',
    municipality: 'Quirós',
    builtArea: 73,
    usableArea: 70,
    plotArea: 1098,
    rooms: 3,
    baths: 2,
    floors: 2,
    garage: true,
    storage: true,
    garden: true,
    heating: 'Individual',
    condition: 'Segunda mano / Buen estado',
    yearBuilt: 2012,
    orientation: 'Este / Oeste',
    energyConsumption: '124 kWh/m²/año',
    energyEmissions: '32 kg CO₂/m²/año',
    description:
      'Vivienda de dos plantas en buen estado, ubicada en el concejo de Quirós, en un entorno rural próximo al Parque Natural de Las Ubiñas-La Mesa. La vivienda cuenta con tres dormitorios, uno de ellos en la planta baja, y dos baños repartidos entre ambas plantas. Salón-comedor y cocina integrados en un mismo ambiente, con cochera-trastero cerrado y una parcela de 1.098 m². La zona ofrece un entorno natural cercano a Bárzana, capital del concejo de Quirós.',
    images: [
      '/assets/inmuebles/chalet-ronderos-quiros/principal.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/2.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/3.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/4.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/5.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/6.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/7.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/8.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/9.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/10.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/11.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/12.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/13.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/14.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/15.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/16.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/17.webp',
      '/assets/inmuebles/chalet-ronderos-quiros/18.webp',
    ],
    sources: [
      { title: 'Ficha en Idealista', url: 'https://www.idealista.com/inmueble/112091415/' },
      { title: 'Ficha en Yaencontre', url: 'https://www.yaencontre.com/venta/casa/inmueble-69581-112091415' },
    ],
    featured: true,
    verificationDate: '15/10/2026',
    internalNotes: 'Fotos reales obtenidas del anuncio público de referencia. Reconfirmar disponibilidad antes de publicar.',
  },
  {
    id: 'inmueble-proaza',
    slug: 'cuadra-ranon-proaza',
    title: 'Cuadra rural en Rañón, Proaza',
    headline: 'Un proyecto de rehabilitación en plena naturaleza',
    price: 19000,
    priceDisplay: '19.000 €',
    operation: 'Venta',
    type: 'Edificación rural / cuadra',
    typeCategory: 'rustico',
    location: 'Rañón, Proaza, Asturias (a aprox. 2 km de Linares)',
    municipality: 'Proaza',
    builtArea: 46,
    usableArea: 39,
    plotArea: 8148,
    rooms: 0,
    baths: 0,
    condition: 'Necesita rehabilitación integral',
    energyCertificate: 'Exento según anuncio',
    suppliesNote: 'Sin agua ni electricidad según datos publicados',
    specialNotice: 'Edificación rural / cuadra. No etiquetada como vivienda habitable; cualquier cambio de uso requiere comprobación urbanística y autorizaciones pertinentes.',
    description:
      'Antigua construcción rural para reformar, acompañada de una parcela de gran superficie en el concejo de Proaza. Construcción tradicional rodeada de paisaje rural asturiano. La propiedad requiere reforma y el anuncio señala que actualmente no dispone de suministros. Cualquier proyecto de transformación o cambio de uso debe comprobar previamente su viabilidad urbanística y autorizaciones.',
    images: [
      '/assets/inmuebles/cuadra-ranon-proaza/principal.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/2.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/3.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/4.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/5.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/6.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/7.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/8.webp',
      '/assets/inmuebles/cuadra-ranon-proaza/9.webp',
    ],
    sources: [
      { title: 'Ficha en Yaencontre', url: 'https://www.yaencontre.com/venta/casa/inmueble-69581-112747281' },
    ],
    featured: false,
    verificationDate: '15/10/2026',
    internalNotes: 'Importante: no tratar como vivienda lista para habitar. Fotografías auténticas del estado rural actual.',
  },
  {
    id: 'inmueble-tineo',
    slug: 'casa-azorera-tineo',
    title: 'Casa tradicional en La Azorera, Tineo',
    headline: 'Una vivienda tradicional con posibilidades de rehabilitación',
    price: 50000,
    priceDisplay: '50.000 €',
    operation: 'Venta',
    type: 'Casa de pueblo',
    typeCategory: 'casa',
    location: 'La Azorera, Tineo, Asturias',
    municipality: 'Tineo',
    builtArea: 190,
    plotArea: 997,
    rooms: 4,
    baths: 1,
    yearBuilt: 1890,
    garden: true,
    storage: true,
    condition: 'Para reforma integral',
    orientation: 'Sur (según anuncio)',
    energyCertificate: 'Exento según anuncio',
    specialNotice: 'Incluye hórreo tradicional asturiano y parcela adicional de 317 m² con cuadra de 38 m² según el anuncio.',
    description:
      'Casa tradicional construida en 1890, con paredes de piedra y espacios que permiten plantear una rehabilitación. La oferta describe una parcela de 997 m², otra parcela adicional de 317 m² con cuadra y un hórreo. Se ofrece para reforma integral, en un entorno rural de Tineo con vistas a la montaña.',
    images: [
      '/assets/inmuebles/casa-azorera-tineo/principal.webp',
      '/assets/inmuebles/casa-azorera-tineo/2.webp',
      '/assets/inmuebles/casa-azorera-tineo/3.webp',
      '/assets/inmuebles/casa-azorera-tineo/4.webp',
      '/assets/inmuebles/casa-azorera-tineo/5.webp',
      '/assets/inmuebles/casa-azorera-tineo/6.webp',
      '/assets/inmuebles/casa-azorera-tineo/7.webp',
      '/assets/inmuebles/casa-azorera-tineo/8.webp',
      '/assets/inmuebles/casa-azorera-tineo/9.webp',
      '/assets/inmuebles/casa-azorera-tineo/10.webp',
      '/assets/inmuebles/casa-azorera-tineo/11.webp',
      '/assets/inmuebles/casa-azorera-tineo/12.webp',
      '/assets/inmuebles/casa-azorera-tineo/13.webp',
      '/assets/inmuebles/casa-azorera-tineo/14.webp',
    ],
    sources: [
      { title: 'Ficha en Yaencontre', url: 'https://www.yaencontre.com/venta/casa/inmueble-69581-112090748' },
    ],
    featured: true,
    verificationDate: '15/10/2026',
    internalNotes: 'Construcción histórica de piedra del siglo XIX. Fotos reales de la vivienda y finca.',
  },
  {
    id: 'inmueble-local-oviedo',
    slug: 'local-san-melchor-oviedo',
    title: 'Local comercial en San Melchor García Sampedro, Oviedo',
    headline: 'Un espacio con posibilidades para tu actividad',
    price: 54000,
    priceDisplay: '54.000 €',
    operation: 'Venta',
    type: 'Local comercial',
    typeCategory: 'local',
    location: 'Calle San Melchor García Sampedro, zona San Lázaro–Otero–Villafría, Oviedo',
    municipality: 'Oviedo',
    builtArea: 150,
    rooms: 0,
    baths: 1,
    floor: 'Planta baja',
    yearBuilt: 1982,
    motorizedDoor: true,
    condition: 'Buen estado según portal',
    energyConsumption: '382 kWh/m²/año',
    energyEmissions: '180 kg CO₂/m²/año',
    specialNotice: 'Usos propuestos en anuncio: taller o almacén. Sujetos a licencias municipales y comprobación legal previa de actividad.',
    description:
      'Local comercial próximo al centro de Oviedo y a la ronda sur, con puerta motorizada y una superficie anunciada de 150 m². El anuncio lo presenta como una opción para usos de taller o almacén. Verificar los usos legalmente permitidos antes de describir cualquier actividad concreta como autorizada.',
    images: [
      '/assets/inmuebles/local-san-melchor-oviedo/principal.webp',
      '/assets/inmuebles/local-san-melchor-oviedo/2.webp',
      '/assets/inmuebles/local-san-melchor-oviedo/3.webp',
      '/assets/inmuebles/local-san-melchor-oviedo/4.webp',
      '/assets/inmuebles/local-san-melchor-oviedo/5.webp',
      '/assets/inmuebles/local-san-melchor-oviedo/6.webp',
      '/assets/inmuebles/local-san-melchor-oviedo/7.webp',
      '/assets/inmuebles/local-san-melchor-oviedo/8.webp',
    ],
    sources: [
      { title: 'Ficha en Yaencontre', url: 'https://www.yaencontre.com/venta/local/inmueble-69581-112561444' },
    ],
    featured: false,
    verificationDate: '15/10/2026',
    internalNotes: 'Fotos reales de fachada e interior. 1 estancia diáfana en planta de calle.',
  },
  {
    id: 'inmueble-alquiler-oviedo',
    slug: 'piso-alquiler-plaza-porlier-oviedo',
    title: 'Piso de alquiler en Plaza Porlier, Oviedo',
    headline: 'Espacio y comodidad junto al casco histórico',
    price: 1250,
    priceDisplay: '1.250 €/mes',
    operation: 'Alquiler',
    type: 'Piso',
    typeCategory: 'piso',
    location: 'Plaza Porlier, Oviedo, Asturias',
    municipality: 'Oviedo',
    builtArea: 120,
    usableArea: 105,
    rooms: 4,
    baths: 2,
    floor: '4ª planta',
    elevator: true,
    balcony: true,
    furnished: true,
    builtInWardrobes: true,
    heating: 'Individual, gas natural',
    condition: 'Reformado, buen estado',
    orientation: 'Oeste',
    yearBuilt: 1930,
    deposit: '1 mes de fianza',
    availabilityDate: 'A partir de febrero de 2027 (reconfirmar)',
    energyConsumption: '125 kWh/m²/año',
    energyEmissions: '55 kg CO₂/m²/año',
    specialNotice: 'Anunciado como opción de larga estancia o para profesionales MIR 2027–2028. La ficha consultada indica disponibilidad a partir de febrero de 2027.',
    description:
      'Piso de alquiler de 120 m² construidos, 105 m² útiles, con cuatro habitaciones, dos baños, ascensor y balcón. Anunciado como opción de larga estancia o para profesionales MIR 2027–2028. Cuenta con mobiliario y calefacción de gas natural. La ficha consultada indica disponibilidad a partir de febrero de 2027; esta fecha debe verificarse antes de publicar o aceptar consultas.',
    images: [
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/principal.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/2.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/3.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/4.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/5.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/6.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/7.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/8.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/9.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/10.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/11.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/12.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/13.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/14.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/15.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/16.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/17.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/18.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/19.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/20.webp',
      '/assets/inmuebles/piso-alquiler-plaza-porlier-oviedo/21.webp',
    ],
    sources: [
      { title: 'Ficha en Yaencontre', url: 'https://www.yaencontre.com/alquiler/piso/inmueble-69581-102795334' },
    ],
    featured: true,
    verificationDate: '15/10/2026',
    internalNotes: 'Normalizado nombre de plaza a Porlier (en portal aparecía como Portlier). Disponibilidad anunciada para feb-2027.',
  },
];

export const AGENCY_INFO = {
  name: 'Agencia Inmobiliaria Directpiso',
  brandName: 'directpiso',
  address: 'Calle Rosal, 6',
  postalCode: '33009',
  city: 'Oviedo',
  province: 'Asturias',
  fullAddress: 'Calle Rosal, 6, 33009 Oviedo (Asturias)',
  phone: '984 08 12 08',
  phoneClean: '984081208',
  mobilePending: '665 52 72 48',
  instagramUrl: 'https://www.instagram.com/inmobiliariadirectpiso/',
  dataDate: '15/10/2026',
  notes: 'Datos recogidos de registros públicos y directorios comerciales. Teléfono móvil y correo pendientes de validación formal con la agencia.',
} as const;

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return PROPERTIES.filter((p) => p.featured);
}
