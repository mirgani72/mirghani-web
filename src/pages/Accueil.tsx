import { Link } from 'react-router-dom';
import { User, Users, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { PHOTOS } from '../data/content';
import { useI18n } from '../lib/i18n';

const TRIO = [
  { Icon: User, tkey: 'trio1' },
  { Icon: Users, tkey: 'trio2' },
  { Icon: Users, tkey: 'trio3' },
];

const STRIP = [
  { img: PHOTOS.entrance, tkey: 'strip1' },
  { img: PHOTOS.staircase, tkey: 'strip2' },
  { img: PHOTOS.shutters, tkey: 'strip3' },
  { img: PHOTOS.lobby, tkey: 'strip4' },
  { img: PHOTOS.pathway, tkey: 'strip5' },
];

export default function Accueil() {
  const { t } = useI18n();
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.entrance}
          alt="Entrée soignée d'une résidence"
          className="block w-full aspect-[1/1] max-h-[380px] sm:aspect-[7/4] sm:max-h-[420px] md:aspect-[2/1] md:max-h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/75 via-navy/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-12 max-w-2xl">
          <h1 className="font-display text-3xl md:text-5xl text-cream mb-4 leading-tight">
            {t('accueil.heroTitle')}
          </h1>
          <p className="text-white/85 max-w-md mb-7 text-sm md:text-base leading-relaxed">
            {t('accueil.heroText')}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/mon-approche">
              <Button>{t('accueil.ctaApproach')}</Button>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cream hover:text-white pb-1 border-b border-gold transition-colors">
              {t('accueil.ctaContact')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {TRIO.map(({ Icon, tkey }) => (
          <div key={tkey}>
            <Icon className="w-8 h-8 text-gold mb-3" strokeWidth={1.5} />
            <h3 className="font-semibold text-navy mb-2">{t(`accueil.${tkey}Title`)}</h3>
            <p className="text-sm text-ink-muted max-w-xs">{t(`accueil.${tkey}Text`)}</p>
          </div>
        ))}
      </section>

      <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
        {STRIP.map(({ img, tkey }) => (
          <figure key={tkey} className="relative rounded-sm overflow-hidden">
            <img src={img} alt={t(`accueil.${tkey}`)} className="aspect-square object-cover rounded-sm w-full" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/55 to-transparent px-4 py-4">
              <figcaption className="text-cream text-sm font-medium leading-snug">{t(`accueil.${tkey}`)}</figcaption>
            </div>
          </figure>
        ))}
      </section>
    </main>
  );
}
