import { CONTACT } from '../data/content';
import { useI18n } from '../lib/i18n';

export default function Confidentialite() {
  const { t } = useI18n();
  return (
    <main className="max-w-4xl mx-auto px-6 pt-14 pb-20">
      <h1 className="font-display text-4xl text-navy mb-8">{t('confid.title')}</h1>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('confid.s1t')}</h2>
        <p className="text-ink">
          {t('confid.s1p')} — {CONTACT.email}.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('confid.s2t')}</h2>
        <p className="text-ink mb-3">
          {t('confid.s2p1')}
        </p>
        <p className="text-ink">
          {t('confid.s2p2')}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('confid.s3t')}</h2>
        <p className="text-ink">
          {t('confid.s3p')}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('confid.s4t')}</h2>
        <p className="text-ink mb-3">
          {t('confid.s4p1')}
        </p>
        <p className="text-ink">
          {t('confid.s4p2')} ({CONTACT.email})
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy mb-4">{t('confid.s5t')}</h2>
        <p className="text-ink">
          {t('confid.s5p')}
        </p>
      </section>
    </main>
  );
}
