import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'escapamentos';

export const metadata: Metadata = buildMetadata({
  title: 'Escapamentos em Florianópolis | Mecânica Marinale',
  description:
    'Solda, reparo e troca de escapamentos em Florianópolis. Mais de 35 anos de especialidade, peças nacionais e importadas. Agende pelo WhatsApp.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
