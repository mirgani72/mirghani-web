import { LayoutGrid, Users, Package, Share2, CheckCircle2, FileText } from 'lucide-react';
import { PHOTOS } from '../data/content';
import { useI18n } from '../lib/i18n';

const ITEMS = [
  { Icon: LayoutGrid, key: 'i1' },
  { Icon: Users, key: 'i2' },
  { Icon: Package, key: 'i3' },
  { Icon: Share2, key: 'i4' },
  { Icon: CheckCircle2, key: 'i5' },
  { Icon: FileText, key: 'i6' },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.pathway}
          alt="Allée verdoyante d'une résidence"
          className="block w-full aspect-[7/6] max-h-[340px] sm:aspect-[2/1] sm:max-h-[380px] md:aspect-[5/2] md:max-h-[440px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/75 via-navy/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-12 max-w-2xl">
          <h1 className="font-display text-3xl md:text-5xl text-cream mb-3">{t('services.title')}</h1>
          <p className="text-white/85 max-w-md text-sm md:text-base leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {ITEMS.map(({ Icon, key }) => (
          <div key={key} className="flex gap-4 py-6 border-t border-navy/10">
            <span className="w-11 h-11 shrink-0 rounded-full bg-white text-gold flex items-center justify-center">
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-semibold text-navy mb-1">{t(`services.${key}t`)}</h3>
              <p className="text-sm text-ink-muted">{t(`services.${key}x`)}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
