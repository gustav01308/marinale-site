import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container mx-auto max-w-2xl text-center">
        <span className="badge-amarelo">Erro 404</span>
        <h1 className="mt-4">Página não encontrada</h1>
        <p className="mt-4 font-corpo text-lg text-gray-700">
          A página que você procura não existe ou foi movida. Volte ao início ou
          fale com a equipe.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-marinale-azul px-6 py-3 font-titulo text-base font-bold uppercase tracking-wide text-marinale-azul transition-colors hover:bg-marinale-azul hover:text-white"
          >
            Voltar ao início
          </Link>
          <CTAButton buttonLocation="404">Falar no WhatsApp</CTAButton>
        </div>
      </div>
    </section>
  );
}
