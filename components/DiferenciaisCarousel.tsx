'use client';

import { useEffect, useRef } from 'react';

const diferenciais = [
  { icon: '🏆', texto: '36 Anos de Experiência' },
  { icon: '🔍', texto: 'Diagnóstico Rápido' },
  { icon: '✅', texto: 'Peças com Garantia' },
  { icon: '🤝', texto: 'Atendimento Honesto' },
  { icon: '🚗', texto: 'Multimarcas Nacionais' },
  { icon: '💬', texto: 'Orçamento Sem Compromisso' },
];

// Carrossel infinito com drag-to-scroll e auto-scroll via RAF.
// Sem setas de navegação — apenas arrastar com mouse ou auto-scroll.
export default function DiferenciaisCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const pausedByHover = useRef(false);
  const pausedByDrag = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tick = () => {
      if (!pausedByHover.current && !pausedByDrag.current && container) {
        container.scrollLeft += 0.75;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    pausedByDrag.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  };

  const onMouseLeave = () => {
    isDown.current = false;
    pausedByDrag.current = false;
    pausedByHover.current = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  const onMouseUp = () => {
    isDown.current = false;
    pausedByDrag.current = false;
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (containerRef.current) containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const itens = [...diferenciais, ...diferenciais];

  return (
    <div
      ref={containerRef}
      className="hide-scrollbar flex gap-10 overflow-x-scroll px-6 py-1 select-none"
      style={{ cursor: 'grab' }}
      onMouseEnter={() => { pausedByHover.current = true; }}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {itens.map((item, idx) => (
        <div key={idx} className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-marinale-amarelo text-xl">
            {item.icon}
          </span>
          <span className="whitespace-nowrap font-titulo text-base font-semibold uppercase tracking-wide text-marinale-azul">
            {item.texto}
          </span>
        </div>
      ))}
    </div>
  );
}
