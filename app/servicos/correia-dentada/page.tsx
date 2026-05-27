import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'correia-dentada';

export const metadata: Metadata = buildMetadata({
  title: 'Troca de Correia Dentada em Florianópolis | Mecânica Marinale',
  description:
    'Substituição preventiva da correia dentada, tensores e bomba d\'água em Florianópolis. Evite danos graves ao motor com a troca no prazo certo.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
