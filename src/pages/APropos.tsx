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
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.shutters}
          alt="Façade de résidence avec volets"
          className="block w-full aspect-[1/1] max-h-[380px] sm:aspect-[7/4] sm:max-h-[420px] md:aspect-[5/2] md:max-h-[460px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/75 via-navy/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-12 max-w-2xl">
          <h1 className="font-display text-3xl md:text-5xl text-cream mb-3">{t('apropos.title')}</h1>
          <p className="text-white/85 max-w-md mb-3 text-sm md:text-base leading-relaxed">
            {t('apropos.p1')}
          </p>
          <p className="text-white/85 max-w-md mb-6 text-sm md:text-base leading-relaxed">
            {t('apropos.p2')}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/contact">
              <Button>{t('apropos.cta')}</Button>
            </Link>
            <a
              href="/documents/MIRGHANI-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cream hover:text-white pb-1 border-b border-gold transition-colors"
            >
              {t('apropos.brochure')} <Download className="w-4 h-4" />
            </a>
          </div>
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
