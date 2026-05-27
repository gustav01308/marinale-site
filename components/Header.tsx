'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import CTAButton from './CTAButton';
import { BUSINESS_INFO } from '@/lib/seo';

// Header fixo: fundo branco permanente, sombra suave.
// Links em preto, linha azul animada no hover e linha permanente na página ativa.
// Telefone destacado em verde. Botão AGENDAR verde com border-radius 4px.
const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/escapamentos-catalisadores', label: 'Escapamentos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
    >
      <div className="container mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo — click sempre rola para o topo */}
        <Link
          href="/"
          aria-label="Início — Mecânica Marinale"
          onClick={scrollToTop}
          className="cursor-pointer"
        >
          <Image
            src="/imagens/Marinale-logo.png"
            alt="Mecânica Marinale"
            width={180}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const ativo = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={ativo ? 'page' : undefined}
                onClick={link.href === '/' ? scrollToTop : undefined}
                className="group relative font-titulo text-[15px] font-semibold uppercase tracking-[2px] text-[#1a1a1a]"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-marinale-azul transition-all duration-200 ${
                    ativo ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Telefone + botão AGENDAR (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            aria-label={`Ligar para ${BUSINESS_INFO.phoneDisplay}`}
            className="font-titulo text-sm font-bold tracking-wide text-[#25d366] hover:opacity-80"
          >
            {BUSINESS_INFO.phoneDisplay}
          </a>
          <CTAButton buttonLocation="header-desktop" size="sm">
            AGENDAR
          </CTAButton>
        </div>

        {/* Botão hambúrguer mobile */}
        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded p-1 text-marinale-azul hover:bg-gray-100 lg:hidden"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="border-t border-gray-100 bg-white lg:hidden" aria-label="Menu mobile">
          <ul className="container mx-auto flex flex-col gap-1 pb-4 pt-2">
            {navLinks.map((link) => {
              const ativo = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={ativo ? 'page' : undefined}
                    className={`block rounded px-2 py-2 font-titulo text-base font-semibold uppercase tracking-wide text-[#1a1a1a] hover:bg-gray-50 ${
                      ativo ? 'border-l-2 border-marinale-azul pl-3' : ''
                    }`}
                    onClick={() => {
                      setOpen(false);
                      if (link.href === '/') scrollToTop();
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-3">
              <CTAButton buttonLocation="header-mobile" fullWidth>
                AGENDAR NO WHATSAPP
              </CTAButton>
            </li>
            <li className="mt-2 text-center">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="font-titulo text-base font-bold text-[#25d366]"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
