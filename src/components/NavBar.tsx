import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, PORTAL_URL } from '../data/content';
import { useI18n, type Lang } from '../lib/i18n';

const LANGS: Lang[] = ['fr', 'en', 'it'];

const FLAGS: Record<Lang, string> = { fr: '🇫🇷', en: '🇬🇧', it: '🇮🇹' };

function LangMenu({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const buttonClass = mobile
    ? 'flex items-center gap-2 border border-white/25 text-white/85 hover:border-white/45 px-3 py-2 rounded-sm w-fit transition-colors'
    : 'flex items-center gap-2 border border-white/25 text-white/85 hover:border-white/45 px-2.5 xl:px-3 py-2 rounded-sm transition-colors';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Langue"
        aria-expanded={open}
        className={buttonClass}
      >
        <span className="text-base leading-none">{FLAGS[lang]}</span>
        <span className="text-[11px] font-bold tracking-wider uppercase">{lang}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className={`absolute ${mobile ? 'left-0' : 'right-0'} top-full mt-2 bg-navy border border-white/15 rounded-sm shadow-xl py-1 z-50`}>
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                lang === l ? 'bg-white/10 text-white' : 'text-white/75 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-base leading-none">{FLAGS[l]}</span>
              <span className="text-xs font-bold tracking-wider uppercase">{l}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4 xl:gap-8">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src="/logo-mark.png" alt="MIRGHANI" className="w-8 h-auto" />
          <span className="flex flex-col leading-tight text-left">
            <span className="font-display text-lg tracking-wide text-white">MIRGHANI</span>
            <span className="text-[10px] tracking-widest uppercase text-gold">{t('brand.subtitle')}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-medium tracking-wider uppercase whitespace-nowrap pb-1 border-b transition-colors ${
                pathname === item.path ? 'text-white border-gold' : 'text-white/65 border-transparent hover:text-white'
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LangMenu />
          <a
            href={PORTAL_URL}
            className="border border-gold text-gold hover:bg-gold hover:text-navy text-xs font-semibold tracking-wider uppercase px-3.5 xl:px-5 py-2.5 rounded-sm transition-colors"
          >
            {t('nav.clientArea')}
          </a>
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-navy text-xs font-semibold tracking-wider uppercase px-4 xl:px-5 py-2.5 rounded-sm transition-colors"
          >
            {t('nav.contactMe')}
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2 -mr-2" aria-label="Ouvrir le menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-navy border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-wider uppercase text-left ${pathname === item.path ? 'text-gold' : 'text-white/85'}`}
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="mt-1">
            <LangMenu mobile />
          </div>
          <a
            href={PORTAL_URL}
            className="border border-gold text-gold text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-sm mt-1 w-fit"
          >
            {t('nav.clientArea')}
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-gold text-navy text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-sm mt-1 w-fit"
          >
            {t('nav.contactMe')}
          </Link>
        </nav>
      )}
    </header>
  );
}
