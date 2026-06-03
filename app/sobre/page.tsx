import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateMetadata as buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre a Mecânica Marinale em Florianópolis | Mecânica Marinale',
  description:
    'Conheça a Mecânica Marinale: mais de 35 anos atendendo motoristas em Florianópolis com honestidade, técnica e especialidade em escapamentos.',
  path: '/sobre',
});

export default function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Sobre', href: '/sobre' }]} />
      <section className="section">
        <div className="container mx-auto max-w-3xl">
          <span className="badge-amarelo">NOSSA HISTÓRIA</span>
          <h1 className="mt-4">Sobre a Mecânica Marinale</h1>
          <div className="mt-6 space-y-4 font-corpo text-lg text-gray-700">
            <p>
              Desde 1989, a Mecânica Marinale atende motoristas de Florianópolis com um compromisso que não muda: fazer o certo pelo cliente, sempre.
            </p>
            <p>
              Somos uma oficina multimarcas com foco em mecânica geral, escapamentos e catalisadores. Em mais de 35 anos de estrada, construímos nossa reputação no boca a boca — clientes que chegaram uma vez e nunca mais foram embora.
            </p>
          </div>

          {/* TODO: substituir por foto real da oficina — elevadores */}
          <div className="mt-8 relative h-[250px] md:h-[400px] w-full overflow-hidden rounded-xl">
            <Image
              src="/imagens/imagem-mecanico.jpg"
              alt="Oficina Mecânica Marinale"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl">Como trabalhamos</h2>
            <p className="mt-3 font-corpo text-lg text-gray-700">
              Sabemos que levar o carro à oficina gera desconfiança. Por isso criamos um processo transparente, do início ao fim:
            </p>
            <ol className="mt-6 space-y-4">
              {[
                'Escutamos o que você percebeu no carro',
                'Abrimos sua ficha e enviamos o carro para diagnóstico',
                'Enviamos fotos e vídeos do que encontramos',
                'Você recebe orçamento detalhado e só aprovando executamos',
                'Entregamos com garantia e pós-venda profissional',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 font-corpo text-gray-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marinale-amarelo font-titulo text-sm font-bold text-marinale-azul">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <CTAButton buttonLocation="sobre-cta" size="lg">
              Falar com a equipe
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
