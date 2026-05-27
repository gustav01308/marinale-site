'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Servico } from '@/lib/servicos';

// Carrossel paginado de serviços — 6 cards por slide (2 linhas × 3 colunas no desktop).
// Cards limpos: sem ícone, nome em text-xl bold, descrição em text-base.
const ITEMS_POR_SLIDE = 6;

type Props = { items: Servico[] };

export default function ServicosCarousel({ items }: Props) {
  const [slide, setSlide] = useState(0);
  const totalSlides = Math.ceil(items.length / ITEMS_POR_SLIDE);
  const visiveis = items.slice(slide * ITEMS_POR_SLIDE, (slide + 1) * ITEMS_POR_SLIDE);

  const anterior = () => setSlide((s) => Math.max(0, s - 1));
  const proximo = () => setSlide((s) => Math.min(totalSlides - 1, s + 1));

  return (
    <div>
      {/* Grade de cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((item) => (
          <ServicoCard key={item.slug} item={item} />
        ))}
      </div>

      {/* Navegação: setas + dots */}
      {totalSlides > 1 && (
        <div className="mt-10 flex items-center justify-center gap-4">
          {/* Seta anterior */}
          <button
            onClick={anterior}
            disabled={slide === 0}
            aria-label="Serviços anteriores"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-marinale-azul text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2" role="tablist" aria-label="Slides de serviços">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                role="tab"
                aria-selected={slide === i}
                aria-label={`Slide ${i + 1} de ${totalSlides}`}
                className={`h-3 rounded-full transition-all ${
                  slide === i ? 'w-6 bg-marinale-azul' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Seta próximo */}
          <button
            onClick={proximo}
            disabled={slide === totalSlides - 1}
            aria-label="Próximos serviços"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-marinale-azul text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

// Card de serviço limpo: sem ícone, nome e descrição maiores
function ServicoCard({ item }: { item: Servico }) {
  return (
    <Link
      href={`/servicos/${item.slug}`}
      className="group flex flex-col rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Nome do serviço */}
      <h3 className="text-xl font-bold leading-snug text-marinale-azul">
        {item.titulo}
      </h3>

      {/* Descrição */}
      <p className="mt-3 flex-1 font-corpo text-base leading-relaxed text-marinale-cinza-medio">
        {item.resumo}
      </p>

      {/* Link "Saiba mais" */}
      <span className="mt-5 font-titulo text-sm font-semibold uppercase text-marinale-azul group-hover:underline">
        Saiba mais →
      </span>
    </Link>
  );
}
