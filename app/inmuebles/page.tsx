'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  Search,
  RotateCcw,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Clock,
} from 'lucide-react';
import { PROPERTIES } from '@/lib/properties';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';

// Filter state interface
interface FilterState {
  operation: string; // 'todos' | 'Venta' | 'Alquiler'
  municipality: string; // 'todos' | 'Oviedo' | 'Quirós' | 'Proaza' | 'Tineo'
  typeCategory: string; // 'todos' | 'casa' | 'rustico' | 'local' | 'piso'
  minPrice: string;
  maxPrice: string;
  minArea: string;
  minRooms: string;
  garage: boolean;
  garden: boolean;
  elevator: boolean;
  sortBy: 'relevancia' | 'precio-asc' | 'precio-desc' | 'area-desc';
}

const DEFAULT_FILTERS: FilterState = {
  operation: 'todos',
  municipality: 'todos',
  typeCategory: 'todos',
  minPrice: '',
  maxPrice: '',
  minArea: '',
  minRooms: '',
  garage: false,
  garden: false,
  elevator: false,
  sortBy: 'relevancia',
};

function CatalogInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize filters from searchParams or defaults
  const [filters, setFilters] = useState<FilterState>(() => {
    const opParam = searchParams.get('operacion')?.toLowerCase();
    const munParam = searchParams.get('municipio')?.toLowerCase();
    const tipoParam = searchParams.get('tipo')?.toLowerCase();
    const minPParam = searchParams.get('precioMin') || '';
    const maxPParam = searchParams.get('precioMax') || '';
    const minAParam = searchParams.get('minArea') || '';
    const minRParam = searchParams.get('minRooms') || '';
    const garParam = searchParams.get('garaje') === 'true';
    const jardParam = searchParams.get('jardin') === 'true';
    const ascParam = searchParams.get('ascensor') === 'true';
    const sortParam = (searchParams.get('orden') as FilterState['sortBy']) || 'relevancia';

    let operation = 'todos';
    if (opParam === 'venta') operation = 'Venta';
    if (opParam === 'alquiler') operation = 'Alquiler';

    let municipality = 'todos';
    if (munParam === 'oviedo') municipality = 'Oviedo';
    else if (munParam === 'quiros' || munParam === 'quirós') municipality = 'Quirós';
    else if (munParam === 'proaza') municipality = 'Proaza';
    else if (munParam === 'tineo') municipality = 'Tineo';

    let typeCategory = 'todos';
    if (['casa', 'rustico', 'local', 'piso'].includes(tipoParam || '')) {
      typeCategory = tipoParam || 'todos';
    }

    return {
      operation,
      municipality,
      typeCategory,
      minPrice: minPParam,
      maxPrice: maxPParam,
      minArea: minAParam,
      minRooms: minRParam,
      garage: garParam,
      garden: jardParam,
      elevator: ascParam,
      sortBy: ['relevancia', 'precio-asc', 'precio-desc', 'area-desc'].includes(sortParam)
        ? sortParam
        : 'relevancia',
    };
  });

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Sync state to URL query string whenever filters change
  const updateQueryParams = (newFilters: FilterState) => {
    const params = new URLSearchParams();
    if (newFilters.operation !== 'todos') {
      params.set('operacion', newFilters.operation.toLowerCase());
    }
    if (newFilters.municipality !== 'todos') {
      params.set('municipio', newFilters.municipality.toLowerCase());
    }
    if (newFilters.typeCategory !== 'todos') {
      params.set('tipo', newFilters.typeCategory);
    }
    if (newFilters.minPrice) params.set('precioMin', newFilters.minPrice);
    if (newFilters.maxPrice) params.set('precioMax', newFilters.maxPrice);
    if (newFilters.minArea) params.set('minArea', newFilters.minArea);
    if (newFilters.minRooms) params.set('minRooms', newFilters.minRooms);
    if (newFilters.garage) params.set('garaje', 'true');
    if (newFilters.garden) params.set('jardin', 'true');
    if (newFilters.elevator) params.set('ascensor', 'true');
    if (newFilters.sortBy !== 'relevancia') params.set('orden', newFilters.sortBy);

    const qs = params.toString();
    const targetUrl = qs ? `${pathname}?${qs}` : pathname;
    router.replace(targetUrl, { scroll: false });
  };

  const handleFilterChange = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => {
      const next = { ...prev, [key]: value };
      updateQueryParams(next);
      return next;
    });
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    router.replace(pathname, { scroll: false });
  };

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.operation !== 'todos') count++;
    if (filters.municipality !== 'todos') count++;
    if (filters.typeCategory !== 'todos') count++;
    if (filters.minPrice) count++;
    if (filters.maxPrice) count++;
    if (filters.minArea) count++;
    if (filters.minRooms) count++;
    if (filters.garage) count++;
    if (filters.garden) count++;
    if (filters.elevator) count++;
    return count;
  }, [filters]);

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Operation filter
      if (filters.operation !== 'todos' && property.operation !== filters.operation) {
        return false;
      }

      // Municipality filter
      if (filters.municipality !== 'todos' && property.municipality !== filters.municipality) {
        return false;
      }

      // Type category filter
      if (filters.typeCategory !== 'todos' && property.typeCategory !== filters.typeCategory) {
        return false;
      }

      // Price filter
      const minP = filters.minPrice ? parseFloat(filters.minPrice) : null;
      const maxP = filters.maxPrice ? parseFloat(filters.maxPrice) : null;
      if (minP !== null && !isNaN(minP) && property.price < minP) {
        return false;
      }
      if (maxP !== null && !isNaN(maxP) && property.price > maxP) {
        return false;
      }

      // Min Area filter
      const minA = filters.minArea ? parseFloat(filters.minArea) : null;
      if (minA !== null && !isNaN(minA) && property.builtArea < minA) {
        return false;
      }

      // Min Rooms filter
      const minR = filters.minRooms ? parseInt(filters.minRooms, 10) : null;
      if (minR !== null && !isNaN(minR)) {
        const propRooms = property.rooms ?? 0;
        if (propRooms < minR) {
          return false;
        }
      }

      // Extras
      if (filters.garage && !property.garage) return false;
      if (filters.garden && !property.garden) return false;
      if (filters.elevator && !property.elevator) return false;

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'precio-asc') {
        return a.price - b.price;
      }
      if (filters.sortBy === 'precio-desc') {
        return b.price - a.price;
      }
      if (filters.sortBy === 'area-desc') {
        return b.builtArea - a.builtArea;
      }
      // Relevancia: featured first, then original order
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filters]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO GRADIENT */}
      <PageHero
        variant="gradient"
        imageSrc="/assets/editorial/hero-inmuebles.webp"
        imageAlt="Salón luminoso de vivienda en Asturias con vistas a la montaña - Directpiso"
        imagePosition="object-center lg:object-[center_right]"
        title="Inmuebles en venta y alquiler en Asturias"
        subtitle="Viviendas seleccionadas en venta y alquiler con asesoramiento experto en Oviedo y toda Asturias."
        subtitleClassName="mt-5 text-xl sm:text-2xl text-navy font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
        overlay={
          <>
            {/* Degradado lateral suave para proteger el texto sin blanquear la fotografía */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:from-0% lg:via-white/80 lg:via-28% lg:via-white/30 lg:via-48% lg:to-transparent lg:to-68%"
              aria-hidden="true"
            />
            {/* Suave resplandor orgánico difuminado detrás del bloque de texto para máxima legibilidad sin líneas de caja */}
            <div
              className="hidden lg:block absolute -left-12 top-[12%] w-[48%] h-[76%] -z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.75)_0%,_rgba(255,255,255,0.25)_55%,_transparent_100%)] blur-2xl pointer-events-none"
              aria-hidden="true"
            />
          </>
        }
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 lg:py-14">
        {/* FILTRO DE INMUEBLES - ESTILO BOSTAK INMOBILIARIA */}
        <div className="rounded-2xl border border-borderline bg-white p-6 shadow-sm mb-10">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Fila principal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              {/* Operación */}
              <div>
                <label
                  htmlFor="filter-operacion"
                  className="block text-xs font-semibold text-navy mb-1.5"
                >
                  Operación
                </label>
                <div className="relative">
                  <select
                    id="filter-operacion"
                    value={filters.operation}
                    onChange={(e) =>
                      handleFilterChange('operation', e.target.value as FilterState['operation'])
                    }
                    className="w-full h-11 rounded-xl border border-borderline bg-white px-3 text-sm text-navy focus:border-action focus:outline-none focus:ring-1 focus:ring-action cursor-pointer appearance-none pr-9"
                  >
                    <option value="todos">Todas las operaciones</option>
                    <option value="Venta">Venta</option>
                    <option value="Alquiler">Alquiler</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-subtext absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Ubicación / Municipio */}
              <div>
                <label
                  htmlFor="filter-municipio"
                  className="block text-xs font-semibold text-navy mb-1.5"
                >
                  Ubicación
                </label>
                <div className="relative">
                  <select
                    id="filter-municipio"
                    value={filters.municipality}
                    onChange={(e) => handleFilterChange('municipality', e.target.value)}
                    className="w-full h-11 rounded-xl border border-borderline bg-white px-3 text-sm text-navy focus:border-action focus:outline-none focus:ring-1 focus:ring-action cursor-pointer appearance-none pr-9"
                  >
                    <option value="todos">Todas las zonas</option>
                    <option value="Oviedo">Oviedo</option>
                    <option value="Quirós">Quirós</option>
                    <option value="Proaza">Proaza</option>
                    <option value="Tineo">Tineo</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-subtext absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Tipo de inmueble */}
              <div>
                <label
                  htmlFor="filter-tipo"
                  className="block text-xs font-semibold text-navy mb-1.5"
                >
                  Tipo de inmueble
                </label>
                <div className="relative">
                  <select
                    id="filter-tipo"
                    value={filters.typeCategory}
                    onChange={(e) => handleFilterChange('typeCategory', e.target.value)}
                    className="w-full h-11 rounded-xl border border-borderline bg-white px-3 text-sm text-navy focus:border-action focus:outline-none focus:ring-1 focus:ring-action cursor-pointer appearance-none pr-9"
                  >
                    <option value="todos">Todos los tipos</option>
                    <option value="piso">Piso</option>
                    <option value="casa">Casa / Chalet</option>
                    <option value="rustico">Edificación rural / Cuadra</option>
                    <option value="local">Local comercial</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-subtext absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Precio máx. */}
              <div>
                <label
                  htmlFor="filter-precio-max"
                  className="block text-xs font-semibold text-navy mb-1.5"
                >
                  Precio máx.
                </label>
                <div className="relative">
                  <select
                    id="filter-precio-max"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="w-full h-11 rounded-xl border border-borderline bg-white px-3 text-sm text-navy focus:border-action focus:outline-none focus:ring-1 focus:ring-action cursor-pointer appearance-none pr-9"
                  >
                    <option value="">Sin límite de precio</option>
                    <option value="50000">Hasta 50.000 €</option>
                    <option value="100000">Hasta 100.000 €</option>
                    <option value="200000">Hasta 200.000 €</option>
                    <option value="300000">Hasta 300.000 €</option>
                    <option value="500000">Hasta 500.000 €</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-subtext absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Fila secundaria: toggle más filtros y restablecer */}
            <div className="mt-4 pt-4 border-t border-borderline flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-subtext hover:text-navy transition-colors cursor-pointer"
              >
                <span>{showMoreFilters ? 'Menos filtros' : 'Más filtros'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showMoreFilters ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div className="flex items-center gap-3">
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-action hover:text-action-hover transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Restablecer filtros ({activeFiltersCount})</span>
                  </button>
                )}
              </div>
            </div>

            {/* Panel desplegable de más filtros */}
            {showMoreFilters && (
              <div className="mt-4 pt-4 border-t border-borderline grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Habitaciones mínimas */}
                <div>
                  <label htmlFor="filter-habitaciones" className="block text-xs font-semibold text-navy mb-1.5">
                    Habitaciones mín.
                  </label>
                  <div className="relative">
                    <select
                      id="filter-habitaciones"
                      value={filters.minRooms}
                      onChange={(e) => handleFilterChange('minRooms', e.target.value)}
                      className="w-full h-11 rounded-xl border border-borderline bg-white px-3 text-sm text-navy focus:border-action focus:outline-none focus:ring-1 focus:ring-action cursor-pointer appearance-none pr-9"
                    >
                      <option value="">Cualquiera</option>
                      <option value="1">1 o más</option>
                      <option value="2">2 o más</option>
                      <option value="3">3 o más</option>
                      <option value="4">4 o más</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-subtext absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Superficie mínima */}
                <div>
                  <label htmlFor="filter-superficie" className="block text-xs font-semibold text-navy mb-1.5">
                    Superficie mín.
                  </label>
                  <div className="relative">
                    <select
                      id="filter-superficie"
                      value={filters.minArea}
                      onChange={(e) => handleFilterChange('minArea', e.target.value)}
                      className="w-full h-11 rounded-xl border border-borderline bg-white px-3 text-sm text-navy focus:border-action focus:outline-none focus:ring-1 focus:ring-action cursor-pointer appearance-none pr-9"
                    >
                      <option value="">Cualquier superficie</option>
                      <option value="40">Desde 40 m²</option>
                      <option value="70">Desde 70 m²</option>
                      <option value="100">Desde 100 m²</option>
                      <option value="150">Desde 150 m²</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-subtext absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Ordenación */}
                <div>
                  <label htmlFor="filter-orden" className="block text-xs font-semibold text-navy mb-1.5">
                    Ordenar por
                  </label>
                  <div className="relative">
                    <select
                      id="filter-orden"
                      value={filters.sortBy}
                      onChange={(e) =>
                        handleFilterChange('sortBy', e.target.value as FilterState['sortBy'])
                      }
                      className="w-full h-11 rounded-xl border border-borderline bg-white px-3 text-sm text-navy focus:border-action focus:outline-none focus:ring-1 focus:ring-action cursor-pointer appearance-none pr-9"
                    >
                      <option value="relevancia">Relevancia</option>
                      <option value="precio-asc">Precio: menor a mayor</option>
                      <option value="precio-desc">Precio: mayor a menor</option>
                      <option value="area-desc">Superficie: mayor a menor</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-subtext absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* 4. RESULTADOS & HEADER DE LISTADO */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-heading font-extrabold text-xl text-navy">
              Resultados disponibles
            </h3>
          </div>

          <p className="text-xs text-subtext">
            Mostrando {filteredProperties.length} de {PROPERTIES.length} propiedades
          </p>
        </div>

        {/* 5. GRID DE RESULTADOS */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => {
              const isCuadra = property.slug === 'cuadra-ranon-proaza';
              const isAlquiler = property.operation === 'Alquiler';
              const isLocal = property.typeCategory === 'local';

              return (
                <article
                  key={property.id}
                  className="group bg-white rounded-2xl border border-borderline hover:border-navy/30 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col"
                >
                  {/* Card Image Container */}
                  <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Gradient Overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Badges: Operación & Tipo */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full shadow-md ${
                          isAlquiler
                            ? 'bg-action text-white'
                            : 'bg-navy text-white border border-white/20'
                        }`}
                      >
                        {property.operation}
                      </span>

                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-navy shadow-sm border border-borderline/50">
                        {property.municipality}
                      </span>
                    </div>

                    {/* Bottom overlay inside image: Price */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white pointer-events-none">
                      <div>
                        <div className="font-heading font-extrabold text-2xl drop-shadow-md text-white">
                          {property.priceDisplay}
                        </div>
                        {isAlquiler && (
                          <span className="text-[11px] text-gray-200 font-medium">
                            Fianza: {property.deposit ?? '1 mes'}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-white/20">
                        {property.type}
                      </span>
                    </div>
                  </div>

                  {/* ALERTA VISUAL OBLIGATORIA PARA LA CUADRA */}
                  {isCuadra && (
                    <div className="mx-4 mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium flex items-start gap-2 shadow-xs">
                      <AlertTriangle
                        className="w-4 h-4 text-amber-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="leading-snug">
                        <strong className="font-bold text-amber-950 block mb-0.5">
                          Edificación rural / cuadra
                        </strong>
                        No etiquetar como vivienda lista para habitar.
                      </div>
                    </div>
                  )}

                  {/* ALERTA VISUAL DISPONIBILIDAD PARA PISO EN ALQUILER */}
                  {property.slug === 'piso-alquiler-plaza-porlier-oviedo' && (
                    <div className="mx-4 mt-4 p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                      <span className="truncate">
                        Disponibilidad: {property.availabilityDate}
                      </span>
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-subtext">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span className="line-clamp-1">{property.location}</span>
                      </div>

                      {/* Title */}
                      <h4 className="font-heading font-extrabold text-base sm:text-lg text-navy group-hover:text-action transition-colors line-clamp-2 leading-snug">
                        <Link href={`/inmuebles/${property.slug}/`}>
                          {property.title}
                        </Link>
                      </h4>

                      {/* Headline / short excerpt */}
                      <p className="text-xs text-subtext line-clamp-2 leading-relaxed">
                        {property.headline}
                      </p>
                    </div>

                    {/* Ficha técnica rápida */}
                    <div className="pt-3 border-t border-borderline">
                      <div className="grid grid-cols-3 gap-2 py-2 bg-ivory/60 rounded-xl px-3 text-center">
                        {/* Superficie */}
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-[11px] text-subtext font-medium flex items-center gap-1">
                            <Maximize2 className="w-3 h-3 text-subtext" aria-hidden="true" />
                            Sup.
                          </span>
                          <span className="font-heading text-xs font-bold text-navy mt-0.5">
                            {property.builtArea} m²
                          </span>
                        </div>

                        {/* Habitaciones / Diáfano */}
                        <div className="flex flex-col items-center justify-center border-x border-borderline">
                          <span className="text-[11px] text-subtext font-medium flex items-center gap-1">
                            <Bed className="w-3 h-3 text-subtext" aria-hidden="true" />
                            Habs.
                          </span>
                          <span className="font-heading text-xs font-bold text-navy mt-0.5 truncate max-w-full px-1">
                            {isCuadra
                              ? 'Diáfano'
                              : isLocal
                              ? '1 estancia'
                              : `${property.rooms ?? 0} habs`}
                          </span>
                        </div>

                        {/* Baños */}
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-[11px] text-subtext font-medium flex items-center gap-1">
                            <Bath className="w-3 h-3 text-subtext" aria-hidden="true" />
                            Baños
                          </span>
                          <span className="font-heading text-xs font-bold text-navy mt-0.5">
                            {property.baths ?? 0}
                          </span>
                        </div>
                      </div>

                      {/* Extras Pills */}
                      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px]">
                        {property.plotArea && (
                          <span className="bg-white border border-borderline text-subtext px-2 py-0.5 rounded-md font-medium">
                            Parcela {property.plotArea.toLocaleString('es-ES')} m²
                          </span>
                        )}
                        {property.garage && (
                          <span className="bg-white border border-borderline text-subtext px-2 py-0.5 rounded-md font-medium">
                            Garaje
                          </span>
                        )}
                        {property.elevator && (
                          <span className="bg-white border border-borderline text-subtext px-2 py-0.5 rounded-md font-medium">
                            Ascensor
                          </span>
                        )}
                        {property.motorizedDoor && (
                          <span className="bg-white border border-borderline text-subtext px-2 py-0.5 rounded-md font-medium">
                            Puerta motorizada
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Button Link */}
                    <div className="pt-2">
                      <Link
                        href={`/inmuebles/${property.slug}/`}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-navy group-hover:text-white bg-ivory group-hover:bg-action border border-borderline group-hover:border-action transition-all duration-150"
                      >
                        <span>Ver más</span>
                        <ArrowRight
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl border border-borderline bg-ivory/50 p-12 text-center max-w-xl mx-auto my-8">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-borderline flex items-center justify-center text-subtext mb-4 shadow-sm">
              <Search className="w-7 h-7 text-subtext" aria-hidden="true" />
            </div>
            <h4 className="font-heading font-extrabold text-xl text-navy mb-2">
              No se encontraron inmuebles con estos filtros
            </h4>
            <p className="text-sm text-subtext mb-6 leading-relaxed">
              Actualmente el catálogo dispone de 5 propiedades. Prueba a relajar los
              criterios de precio, municipio o superficie para ver las opciones disponibles.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-action hover:bg-action-hover text-white text-sm font-semibold shadow-md transition-all"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Restablecer todos los filtros</span>
            </button>
          </div>
        )}
      </div>

      {/* 6. CALL TO ACTION FINAL */}
      <ContactCTA
        title="¿Buscas una propiedad específica en Asturias?"
        description="Si no encuentras lo que buscas en el catálogo público, ponte en contacto con Directpiso. Buscamos y gestionamos activamente inmuebles en Oviedo y concejos limítrofes."
      />
    </div>
  );
}

// Fallback skeleton while Suspense resolves query params
function CatalogSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 bg-ivory text-center">
        <div className="mx-auto max-w-md space-y-3">
          <div className="h-8 bg-gray-200 rounded-xl animate-pulse mx-auto w-3/4" />
          <div className="h-4 bg-gray-200 rounded-lg animate-pulse mx-auto w-1/2" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="h-40 bg-gray-100 rounded-3xl animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-96 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InmueblesPage() {
  return (
    <Suspense fallback={<CatalogSkeleton />}>
      <CatalogInner />
    </Suspense>
  );
}
