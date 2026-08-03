import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Target, Download } from 'lucide-react';
import Button from '../components/Button';
import { PHOTOS } from '../data/content';
import { useI18n } from '../lib/i18n';

const VALUES = [
  { Icon: Users, key: 'v1' },
  { Icon: ShieldCheck, key: 'v2' },
  { Icon: Target, key: 'v3' },
];

export default function APropos() {
  const { t } = useI18n();
  return (
    <main>
      <section className="grid md:grid-cols-2 md:min-h-[560px]">
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 py-14 md:py-20 md:pl-12 lg:pl-20 md:pr-10 lg:pr-16">
          <h1 className="font-display text-3xl md:text-5xl text-navy mb-3">{t('apropos.title')}</h1>
          <p className="text-ink-muted max-w-md mb-3 text-sm md:text-base leading-relaxed">
            {t('apropos.p1')}
          </p>
          <p className="text-ink-muted max-w-md mb-6 text-sm md:text-base leading-relaxed">
            {t('apropos.p2')}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/contact">
              <Button>{t('apropos.cta')}</Button>
            </Link>
            <a
              href="/documents/MIRGHANI-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy hover:text-gold-dark pb-1 border-b border-gold transition-colors"
            >
              {t('apropos.brochure')} <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 relative h-[420px] md:h-auto">
          <img
            src={PHOTOS.shutters}
            alt="Façade de résidence avec volets"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 pt-12 border-t border-navy/10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {VALUES.map(({ Icon, key }) => (
          <div key={key}>
            <span className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-gold mb-2 md:mb-3">
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </span>
            <h3 className="font-semibold text-navy mb-2">{t(`apropos.${key}t`)}</h3>
            <p className="text-sm text-ink-muted">{t(`apropos.${key}x`)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
