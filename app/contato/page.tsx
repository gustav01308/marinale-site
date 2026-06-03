import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';
import { generateMetadata as buildMetadata, BUSINESS_INFO } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contato | Mecânica Marinale em Florianópolis',
  description:
    'Fale com a Mecânica Marinale em Florianópolis. WhatsApp, telefone, endereço e horário de atendimento. Diagnóstico rápido.',
  path: '/contato',
});

export default function ContatoPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Início', href: '/' }, { label: 'Contato', href: '/contato' }]}
      />
      <section className="section">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2">
          <div>
            <span className="badge-amarelo">Fale conosco</span>
            <h1 className="mt-4">Entre em contato</h1>
            <dl className="mt-8 space-y-5 font-corpo">
              <Info label="WhatsApp / Telefone">
                <a
                  className="font-semibold text-marinale-azul hover:text-marinale-verde"
                  href={`tel:${BUSINESS_INFO.phone}`}
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </Info>
              <Info label="E-mail">
                <a
                  className="font-semibold text-marinale-azul hover:text-marinale-verde"
                  href={`mailto:${BUSINESS_INFO.email}`}
                >
                  {BUSINESS_INFO.email}
                </a>
              </Info>
              <Info label="Endereço">
                {BUSINESS_INFO.street}, {BUSINESS_INFO.neighborhood}
                <br />
                {BUSINESS_INFO.city}/{BUSINESS_INFO.state} — CEP {BUSINESS_INFO.zip}
              </Info>
              <Info label="Horário de atendimento">
                Segunda a sexta: 8h às 12h e 13h30 às 18h
              </Info>
            </dl>

            <div className="mt-8">
              <CTAButton buttonLocation="contato-cta" size="lg">
                Iniciar conversa no WhatsApp
              </CTAButton>
            </div>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-xl shadow-md" style={{ minHeight: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.9!2d-48.5495!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273900000000%3A0x0!2sR.+Lauro+Linhares%2C+1693+-+Trindade%2C+Florian%C3%B3polis+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] rounded-2xl"
              title="Mapa da Mecânica Marinale"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-titulo text-sm font-bold uppercase tracking-widest text-marinale-azul">
        {label}
      </dt>
      <dd className="mt-1 text-gray-700">{children}</dd>
    </div>
  );
}
