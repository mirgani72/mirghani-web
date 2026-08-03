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
      <section className="grid md:grid-cols-2 md:min-h-[560px]">
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 py-14 md:py-20 md:pl-12 lg:pl-20 md:pr-10 lg:pr-16">
          <h1 className="font-display text-3xl md:text-5xl text-navy mb-4 leading-tight max-w-md">
            {t('accueil.heroTitle')}
          </h1>
          <p className="text-ink-muted max-w-md mb-7 text-sm md:text-base leading-relaxed">
            {t('accueil.heroText')}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/mon-approche">
              <Button>{t('accueil.ctaApproach')}</Button>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy hover:text-gold-dark pb-1 border-b border-gold transition-colors">
              {t('accueil.ctaContact')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 relative h-[420px] md:h-auto">
          <img
            src={PHOTOS.hillside}
            alt="Résidence surplombant les collines du Cannet"
            className="absolute inset-0 w-full h-full object-cover object-[50%_70%]"
          />
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
