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
      <section className="grid md:grid-cols-2 md:min-h-[560px]">
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 py-14 md:py-20 md:pl-12 lg:pl-20 md:pr-10 lg:pr-16">
          <h1 className="font-display text-3xl md:text-5xl text-navy mb-3">{t('approche.title')}</h1>
          <p className="text-ink-muted max-w-md text-sm md:text-base leading-relaxed">
            {t('approche.subtitle')}
          </p>
        </div>
        <div className="order-1 md:order-2 relative h-[420px] md:h-auto">
          <img
            src={PHOTOS.entrance}
            alt="Entrée d'immeuble"
            className="absolute inset-0 w-full h-full object-cover"
          />
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

      <section className="bg-white grid md:grid-cols-2 md:min-h-[480px]">
        <div className="relative h-[360px] md:h-auto">
          <img
            src={PHOTOS.street}
            alt="Rue résidentielle avec verdure"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 md:py-20 md:pl-12 lg:pl-16 md:pr-10 lg:pr-20">
          <h2 className="font-display text-3xl text-navy mb-4">{t('approche.bandTitle')}</h2>
          <p className="text-ink max-w-md">
            {t('approche.bandText')}
          </p>
        </div>
      </section>
    </main>
  );
}
