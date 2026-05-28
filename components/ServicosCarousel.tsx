'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Servico } from '@/lib/servicos';

const ITEMS_POR_SLIDE = 6;

type Props = { items: Servico[] };

export default function ServicosCarousel({ items }: Props) {
  const slidesArray: Servico[][] = [];
  for (let i = 0; i < items.length; i += ITEMS_POR_SLIDE) {
    slidesArray.push(items.slice(i, i + ITEMS_POR_SLIDE));
  }

  if (slidesArray.length <= 1) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ServicoCard key={item.slug} item={item} />
        ))}
      </div>
    );
  }

  return <InfiniteCarousel slidesArray={slidesArray} />;
}

type InfiniteCarouselProps = { slidesArray: Servico[][] };

function InfiniteCarousel({ slidesArray }: InfiniteCarouselProps) {
  // Clona último slide ao início e primeiro ao fim para loop infinito sem salto visível
  const slides = [
    slidesArray[slidesArray.length - 1],
    ...slidesArray,
    slidesArray[0],
  ];
  const total = slides.length;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (currentIndex === 0) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slidesArray.length);
      }, 300);
      return () => clearTimeout(t);
    }
    if (currentIndex === total - 1) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [currentIndex, total, slidesArray.length]);

  // Reativa transição após salto silencioso para o slide real
  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  const goNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (i: number) => {
    setIsTransitioning(true);
    setCurrentIndex(i + 1);
  };

  const activeDot = (currentIndex - 1 + slidesArray.length) % slidesArray.length;

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${currentIndex * (100 / total)}%)`,
            transition: isTransitioning ? 'transform 300ms ease-in-out' : 'none',
          }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} style={{ width: `${100 / total}%` }}>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {slide.map((item) => (
                  <ServicoCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          aria-label="Serviços anteriores"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-marinale-azul text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Slides de serviços">
          {slidesArray.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              role="tab"
              aria-selected={activeDot === i}
              aria-label={`Slide ${i + 1} de ${slidesArray.length}`}
              className={`h-3 rounded-full transition-all ${
                activeDot === i ? 'w-6 bg-marinale-azul' : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Próximos serviços"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-marinale-azul text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ServicoCard({ item }: { item: Servico }) {
  return (
    <Link
      href={`/servicos/${item.slug}`}
      className="group flex flex-col rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-xl font-bold leading-snug text-marinale-azul">
        {item.titulo}
      </h3>
      <p className="mt-3 flex-1 font-corpo text-base leading-relaxed text-marinale-cinza-medio">
        {item.resumo}
      </p>
      <span className="mt-5 font-titulo text-sm font-semibold uppercase text-marinale-azul group-hover:underline">
        Saiba mais →
      </span>
    </Link>
  );
}
