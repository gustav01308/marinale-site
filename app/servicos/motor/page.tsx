import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'motor';

export const metadata: Metadata = buildMetadata({
  title: 'Reparo de Motor em Florianópolis | Mecânica Marinale',
  description:
    'Retífica de motor, troca de correia dentada, reparo de juntas e mais em Florianópolis. Equipe especializada e garantia de serviço.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
