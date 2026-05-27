import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicoPage from '@/components/ServicoPage';
import { generateMetadata as buildMetadata } from '@/lib/seo';
import { getServicoBySlug } from '@/lib/servicos';

const SLUG = 'revisao-preventiva';

export const metadata: Metadata = buildMetadata({
  title: 'Revisão Preventiva em Florianópolis | Mecânica Marinale',
  description:
    'Revisão preventiva completa em Florianópolis: checklist técnico, freios, suspensão e injeção. Evite gastos maiores. Agende pelo WhatsApp.',
  path: `/servicos/${SLUG}`,
});

export default function Page() {
  const servico = getServicoBySlug(SLUG);
  if (!servico) notFound();
  return <ServicoPage servico={servico} />;
}
