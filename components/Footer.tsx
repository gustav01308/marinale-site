import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/seo';

// Footer cinza escuro (#2d2d2d) — 3 colunas, sem mapa, hover com linha branca animada.
export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="container mx-auto grid gap-10 py-14 md:grid-cols-3">

        {/* Coluna 1: Logo centralizada + descrição + redes sociais */}
        <div>
          <Link href="/" aria-label="Início — Mecânica Marinale">
            <Image
              src="/imagens/Marinale-logo.png"
              alt="Mecânica Marinale"
              width={200}
              height={64}
              className="mx-auto block h-16 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 font-corpo text-sm leading-relaxed text-white/70">
            Mais de 35 anos cuidando do seu carro em Florianópolis com honestidade,
            experiência e atendimento personalizado.
          </p>
          {/* Redes sociais */}
          <div className="mt-5 flex gap-3" aria-label="Redes sociais">
            <SocialLink href="https://www.instagram.com/" label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.51.012-4.74.068-1.012.046-1.561.215-1.926.358-.483.187-.828.41-1.19.772-.362.362-.585.707-.772 1.19-.143.365-.312.914-.358 1.926-.056 1.23-.068 1.59-.068 4.74s.012 3.51.068 4.74c.046 1.012.215 1.561.358 1.926.187.483.41.828.772 1.19.362.362.707.585 1.19.772.365.143.914.312 1.926.358 1.23.056 1.59.068 4.74.068s3.51-.012 4.74-.068c1.012-.046 1.561-.215 1.926-.358.483-.187.828-.41 1.19-.772.362-.362.585-.707.772-1.19.143-.365.312-.914.358-1.926.056-1.23.068-1.59.068-4.74s-.012-3.51-.068-4.74c-.046-1.012-.215-1.561-.358-1.926-.187-.483-.41-.828-.772-1.19-.362-.362-.707-.585-1.19-.772-.365-.143-.914-.312-1.926-.358C15.51 4.012 15.15 4 12 4zm0 3.05a4.95 4.95 0 110 9.9 4.95 4.95 0 010-9.9zm0 1.8a3.15 3.15 0 100 6.3 3.15 3.15 0 000-6.3zm5.4-2.025a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://www.facebook.com/" label="Facebook">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </SocialLink>
            {/* WhatsApp */}
            <a
              href="https://wa.me/554832341583"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#25d366] hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Links rápidos com hover underline animado */}
        <div>
          <h4 className="font-titulo text-lg font-semibold uppercase text-white">Links Rápidos</h4>
          <ul className="mt-4 space-y-2 font-corpo text-sm">
            {[
              { href: '/sobre', label: 'Sobre nós' },
              { href: '/servicos', label: 'Serviços' },
              { href: '/escapamentos-catalisadores', label: 'Escapamentos e Catalisadores' },
              { href: '/blog', label: 'Blog' },
              { href: '/contato', label: 'Contato e Localização' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group relative inline-block text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Contato + horário */}
        <div>
          <h4 className="font-titulo text-lg font-semibold uppercase text-white">Onde estamos</h4>
          <ul className="mt-4 space-y-3 font-corpo text-sm text-white/70">
            <li>
              {BUSINESS_INFO.street}<br />
              {BUSINESS_INFO.neighborhood} — {BUSINESS_INFO.city}/{BUSINESS_INFO.state}<br />
              CEP {BUSINESS_INFO.zip}
            </li>
            <li>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-marinale-amarelo">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-marinale-amarelo">
                {BUSINESS_INFO.email}
              </a>
            </li>
            <li>Seg a Sex: 8h às 12h e 13h30 às 18h</li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 py-4 font-corpo text-xs text-white/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Mecânica Marinale. Todos os direitos reservados.</p>
          <p>Florianópolis — SC</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-marinale-amarelo hover:text-marinale-azul"
    >
      {children}
    </a>
  );
}
