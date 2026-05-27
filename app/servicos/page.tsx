import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { servicos } from '@/lib/servicos';

export const metadata: Metadata = buildMetadata({
  title: 'Serviços de Mecânica em Florianópolis | Mecânica Marinale',
  description:
    'Mecânica geral, revisão preventiva, freios, suspensão, motor, injeção eletrônica, escapamentos e mais em Florianópolis. Conheça os serviços da Marinale.',
  path: '/servicos',
});

export default function ServicosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Serviços', href: '/servicos' }]} />
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="badge-amarelo">O que fazemos</span>
            <h1 className="mt-4">Nossos serviços</h1>
            <p className="mt-4 font-corpo text-lg text-gray-700">
              Tudo o que o seu carro precisa em um só lugar — com a experiência
              de quem cuida de veículos em Florianópolis há mais de 35 anos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <article key={s.slug} className="flex flex-col rounded-xl bg-marinale-cinza p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-marinale-amarelo text-2xl">
                  {s.icone}
                </div>
                <h2 className="mt-4 text-xl">{s.titulo}</h2>
                <p className="mt-2 flex-1 font-corpo text-sm text-gray-600">{s.resumo}</p>
                <Link
                  href={`/servicos/${s.slug}`}
                  className="mt-4 font-titulo text-sm font-semibold uppercase text-marinale-azul hover:underline"
                >
                  Ver detalhes →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-marinale-azul p-8 text-center text-white md:p-12">
            <h2 className="text-white">Não encontrou o que procura?</h2>
            <p className="mt-3 font-corpo text-lg text-white/80">
              Fale com nossa equipe — atendemos uma gama maior que essa lista mostra.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton buttonLocation="servicos-cta-final" size="lg">
                Falar no WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
