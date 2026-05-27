import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'troca-de-filtros';

export const metadata: Metadata = buildMetadata({
  title: 'Troca de Filtros Automotivos em Florianópolis | Mecânica Marinale',
  description:
    'Troca de filtros de ar, combustível, óleo e cabine em Florianópolis. Inclui higienização do ar condicionado com produto bactericida. Mais desempenho e proteção.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
