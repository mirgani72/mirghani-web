import { Eye, ClipboardCheck, ShieldCheck, FileText } from 'lucide-react';
import { PHOTOS } from '../data/content';
import { useI18n } from '../lib/i18n';

const STEPS = [
  { Icon: Eye, n: '01', key: 's1' },
  { Icon: ClipboardCheck, n: '02', key: 's2' },
  { Icon: ShieldCheck, n: '03', key: 's3' },
  { Icon: FileText, n: '04', key: 's4' },
];

export default function Approche() {
  const { t } = useI18n();
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.entrance}
          alt="Entrée d'immeuble"
          className="block w-full aspect-[7/6] max-h-[340px] sm:aspect-[2/1] sm:max-h-[380px] md:aspect-[5/2] md:max-h-[440px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/75 via-navy/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-12 max-w-2xl">
          <h1 className="font-display text-3xl md:text-5xl text-cream mb-3">{t('approche.title')}</h1>
          <p className="text-white/85 max-w-md text-sm md:text-base leading-relaxed">
            {t('approche.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {STEPS.map(({ Icon, n, key }) => (
          <div key={n}>
            <Icon className="w-12 h-12 text-navy mb-2 md:mb-4" strokeWidth={1.5} />
            <p className="font-display text-xl md:text-2xl text-gold mb-1 md:mb-2">{n}</p>
            <h3 className="text-lg font-semibold text-navy mb-2">{t(`approche.${key}t`)}</h3>
            <p className="text-sm text-ink-muted">{t(`approche.${key}x`)}</p>
          </div>
        ))}
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={PHOTOS.street}
            alt="Rue résidentielle avec verdure"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
          <div>
            <h2 className="font-display text-3xl text-navy mb-4">{t('approche.bandTitle')}</h2>
            <p className="text-ink max-w-md">
              {t('approche.bandText')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
