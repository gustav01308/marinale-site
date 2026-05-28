'use client';

import { useState, useEffect } from 'react';

type Avaliacao = { nome: string; texto: string };

const avaliacoes: Avaliacao[] = [
  { nome: 'Matheus Medeiros',           texto: 'Melhor oficina geral da região, trabalho honesto, muito bom!!' },
  { nome: 'Igor Hess',                  texto: 'Com certeza a melhor oficina de Florianópolis, ótimo serviço e atendimento.' },
  { nome: 'Geancarlo Camargo',          texto: 'Serviço de primeira no bairro Trindade, recomendo a oficina. Preço justo e ótimo atendimento.' },
  { nome: 'Marcos Silveira',            texto: 'Precisei trocar o escapamento, foi rápido, serviço bem feito e por um preço justo. Recomendo.' },
  { nome: 'Eduardo Dias Fernandes',     texto: 'Atenciosos e bom preço.' },
  { nome: 'Marco Dominici',             texto: 'Melhor oficina de Floripa.' },
  { nome: 'Luciana',                    texto: 'Revisão do carro. Ótimo atendimento. Obrigada.' },
  { nome: 'Wilmar Júnior',              texto: 'Excelente atendimento. Profissionais totalmente transparentes e comprometidos com os clientes.' },
  { nome: 'Antônio Carlos Coutinho Dias', texto: 'Bom atendimento.' },
  { nome: 'Sullyvan Vieira',            texto: 'Já faço manutenção a mais de 20 anos com eles. Honestidade e conhecimento é meu parecer!' },
  { nome: 'Gean Grendene',              texto: 'Ótimas pessoas, super informativas e muito prestativas.... Vale a pena conhecer.' },
  { nome: "Natan Vitório Sant'Anna",    texto: 'Preço baixo e ótimo atendimento! O pós venda é excelente. Já é o terceiro serviço que faço com eles. Transparência no atendimento. Um dia eu precisei de ajuda com o meu carro quebrado na estrada e eles foram até o local com muita rapidez! Sempre que penso em bom atendimento eu penso no Marinale. Recomendo.' },
  { nome: 'Fernando Bensberg',          texto: 'Faço as revisões do meu carro a 3 anos no Marinale, atendimento bom e preço justo.' },
  { nome: 'Alves Franciel',             texto: 'Recomendo. Ótimo atendimento, preço justo.' },
  { nome: 'Karin Bender',               texto: 'Atendimento excelente e preço justo. Recomendo!' },
  { nome: 'Antonio Carlos Siquerolli',  texto: 'Atendimento excelente e honesto.' },
  { nome: 'Miguel Arcângelo Broering',  texto: 'Qualidade no atendimento, serviço de primeira e competência no trabalho.' },
  { nome: 'Pedro Bertolino Jr.',        texto: 'Serviço bom, bem explicado, preço justo. Sem surpresas.' },
  { nome: 'Neyde Rodrigues Pereira',    texto: 'Sempre atendida com presteza, sempre atenciosos, ótimo trabalho.' },
  { nome: 'Emilio2580',                 texto: 'Boa atenção, expertos em mecânica de todas as marcas. Nota 10.' },
];

const ITEMS_POR_PAGINA = 4;

export default function AvaliacoesCarousel() {
  const slidesArray: Avaliacao[][] = [];
  for (let i = 0; i < avaliacoes.length; i += ITEMS_POR_PAGINA) {
    slidesArray.push(avaliacoes.slice(i, i + ITEMS_POR_PAGINA));
  }

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
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {slide.map((av, i) => (
                  <ReviewCard key={`${idx}-${i}`} nome={av.nome} texto={av.texto} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          aria-label="Avaliações anteriores"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-marinale-azul text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Páginas de avaliações">
          {slidesArray.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              role="tab"
              aria-selected={activeDot === i}
              aria-label={`Página ${i + 1} de ${slidesArray.length}`}
              className={`h-3 rounded-full transition-all ${
                activeDot === i ? 'w-6 bg-marinale-azul' : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Próximas avaliações"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-marinale-azul text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://g.page/r/CZ5As0X6Ykn-EBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-[#f5a623] px-8 py-4 font-titulo text-base font-bold uppercase tracking-wide text-[#1a1f5e] shadow-md transition-colors hover:bg-yellow-400"
        >
          ⭐ DEIXE SUA AVALIAÇÃO NO GOOGLE
        </a>
      </div>
    </div>
  );
}

function ReviewCard({ nome, texto }: { nome: string; texto: string }) {
  return (
    <article
      className="flex flex-col rounded-xl bg-white p-6 shadow-sm"
      style={{ height: '200px', border: '1px solid #e8e8e8' }}
    >
      <div className="flex items-start justify-between gap-2">
        <p
          className="font-titulo font-bold uppercase tracking-wide text-[#1a1f5e]"
          style={{ fontSize: '13px' }}
        >
          {nome}
        </p>
        <GoogleGIcon />
      </div>

      <div className="mt-2 flex gap-0.5" aria-label="5 estrelas">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-[#f5a623]" />
        ))}
      </div>

      <p
        className="mt-3 font-corpo leading-relaxed text-[#4a4a4a]"
        style={{
          fontSize: '14px',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        &ldquo;{texto}&rdquo;
      </p>
    </article>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GoogleGIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-label="Google" role="img">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
