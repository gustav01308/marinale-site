'use client';

import Image from 'next/image';
import { useRef } from 'react';

// Faixa contínua de logos de marcas — sem cards/bordas/fundo individual.
// Animação CSS pura (brands-track) com drag-to-scroll e pausa no hover/drag.
const marcas = [
  { nome: 'Chevrolet',   arquivo: 'chevrolet',  ext: 'jpg' },
  { nome: 'Citroën',     arquivo: 'citroen',    ext: 'jpg' },
  { nome: 'Fiat',        arquivo: 'fiat',       ext: 'jpg' },
  { nome: 'Ford',        arquivo: 'ford',       ext: 'jpg' },
  { nome: 'Honda',       arquivo: 'honda',      ext: 'png' },
  { nome: 'Hyundai',     arquivo: 'Hyundai',    ext: 'png' },
  { nome: 'JAC Motors',  arquivo: 'Jac-motors', ext: 'png' },
  { nome: 'Kia',         arquivo: 'kia',        ext: 'jpg' },
  { nome: 'Mitsubishi',  arquivo: 'mitsubishi', ext: 'jpg' },
  { nome: 'Nissan',      arquivo: 'nissain',    ext: 'png' },
  { nome: 'Peugeot',     arquivo: 'peugeot',    ext: 'jpg' },
  { nome: 'Renault',     arquivo: 'renault',    ext: 'jpg' },
  { nome: 'Toyota',      arquivo: 'toyota',     ext: 'jpg' },
  { nome: 'Volkswagen',  arquivo: 'volkswagen', ext: 'png' },
];

export default function MarcasCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft || 0);
    scrollLeft.current = trackRef.current?.scrollLeft || 0;
    if (trackRef.current) trackRef.current.classList.add('dragging');
  };

  const onMouseLeave = () => {
    isDown.current = false;
    if (trackRef.current) trackRef.current.classList.remove('dragging');
  };

  const onMouseUp = () => {
    isDown.current = false;
    if (trackRef.current) trackRef.current.classList.remove('dragging');
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Duplica para loop infinito
  const itens = [...marcas, ...marcas];

  return (
    <div
      className="overflow-hidden"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div
        ref={trackRef}
        className="brands-track"
        style={{ gap: '64px' }}
        aria-hidden="true"
      >
        {itens.map((marca, idx) => (
          <div key={idx} className="shrink-0">
            <Image
              src={`/imagens/${marca.arquivo}.${marca.ext}`}
              alt={marca.nome}
              width={120}
              height={50}
              className="h-[50px] w-auto object-contain transition-all duration-200"
              style={{ filter: 'grayscale(10%) opacity(0.85)' }}
              loading="lazy"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%) opacity(1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(10%) opacity(0.85)';
              }}
            />
          </div>
        ))}
      </div>

      <p className="sr-only">
        Marcas atendidas: {marcas.map((m) => m.nome).join(', ')}.
      </p>
    </div>
  );
}
