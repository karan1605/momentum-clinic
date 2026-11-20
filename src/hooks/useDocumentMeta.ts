import { useEffect } from 'react';

interface DocumentMetaOptions {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function useDocumentMeta({ title, description, canonicalPath }: DocumentMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes('Momentum Clinic') ? title : `${title} | Momentum Clinic`;
    document.title = fullTitle;

    const setMetaTag = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const pathname = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = `${origin}${pathname}`;

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);
  }, [title, description, canonicalPath]);
}
