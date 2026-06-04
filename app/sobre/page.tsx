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
              Na Marinale, oferecemos serviços de mecânica automotiva com qualidade, transparência e compromisso. Trabalhamos com manutenção preventiva e corretiva, freios, suspensão, direção, motor, escapamentos, troca de óleo e muito mais. Nossa missão é garantir a segurança e a tranquilidade dos nossos clientes, sempre com atendimento honesto e soluções eficientes para cada veículo.
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
            <h2 className="text-2xl">Por que escolher a Marinale?</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Atendimento transparente',
                'Profissionais qualificados',
                'Peças de qualidade',
                'Serviço com garantia',
                'Agilidade na entrega',
                'Preço justo',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-corpo text-lg text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 shrink-0 text-marinale-verde"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
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
