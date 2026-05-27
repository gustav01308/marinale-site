// Integração centralizada com Google Analytics 4 via gtag/dataLayer.
// Todos os trackings de WhatsApp passam por trackWhatsAppClick para padronizar evento e UTM.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
export const GTM_ID = 'GTM-XXXXXXX';

// Número e link base do WhatsApp da oficina — todos os CTAs apontam aqui.
export const WHATSAPP_NUMBER = '554832341583';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Monta a URL final do WhatsApp com UTM identificando a origem do clique.
export function buildWhatsAppUrl(buttonLocation: string): string {
  const params = new URLSearchParams({
    utm_source: 'site',
    utm_medium: 'whatsapp',
    utm_campaign: 'cta',
    utm_content: buttonLocation,
  });
  return `${WHATSAPP_BASE_URL}?${params.toString()}`;
}

// Empurra o evento para o dataLayer (GTM) e dispara via gtag (GA4 direto, se carregado).
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

// Dispara o evento padrão whatsapp_click com a página atual e a origem do botão.
export function trackWhatsAppClick(buttonLocation: string): void {
  if (typeof window === 'undefined') return;
  trackEvent('whatsapp_click', {
    page: window.location.pathname,
    button_location: buttonLocation,
  });
}

// Page view manual — útil para roteamento SPA do App Router.
export function trackPageView(url?: string): void {
  if (typeof window === 'undefined') return;
  const page_path = url ?? window.location.pathname;
  trackEvent('page_view', {
    page_path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
