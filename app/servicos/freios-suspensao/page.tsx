import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'freios-suspensao';

export const metadata: Metadata = buildMetadata({
  title: 'Freios e Suspensão em Florianópolis | Mecânica Marinale',
  description:
    'Reparo e troca de freios, amortecedores, molas e geometria de suspensão em Florianópolis. Segurança e conforto garantidos.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
