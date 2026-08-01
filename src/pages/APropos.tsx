import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Target } from 'lucide-react';
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
          className="block w-full h-[45vh] sm:h-[50vh] md:h-[55vh] object-cover"
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
          <Link to="/contact">
            <Button>{t('apropos.cta')}</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 pt-12 border-t border-navy/10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {VALUES.map(({ Icon, key }) => (
          <div key={key}>
            <span className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-gold mb-3">
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
