import { LayoutGrid, Users, Package, Share2, CheckCircle2, FileText, Download } from 'lucide-react';
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
      <section className="grid md:grid-cols-2 md:min-h-[560px]">
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 py-14 md:py-20 md:pl-12 lg:pl-20 md:pr-10 lg:pr-16">
          <h1 className="font-display text-3xl md:text-5xl text-navy mb-3">{t('services.title')}</h1>
          <p className="text-ink-muted max-w-md text-sm md:text-base leading-relaxed mb-6">
            {t('services.subtitle')}
          </p>
          <a
            href="/documents/MIRGHANI-Presentation.pdf"
            download
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy hover:text-gold-dark pb-1 border-b border-gold transition-colors w-fit"
          >
            {t('services.presentation')} <Download className="w-4 h-4" />
          </a>
        </div>
        <div className="order-1 md:order-2 relative h-[420px] md:h-auto">
          <img
            src={PHOTOS.pathway}
            alt="Allée verdoyante d'une résidence"
            className="absolute inset-0 w-full h-full object-cover"
          />
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
