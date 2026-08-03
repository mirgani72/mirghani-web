import { CONTACT } from '../data/content';
import { useI18n } from '../lib/i18n';

export default function MentionsLegales() {
  const { t } = useI18n();
  const IDENTITY: [string, string][] = [
    [t('mentions.statut'), t('mentions.statutV')],
    [t('mentions.siret'), '[SIRET à compléter]'],
    [t('mentions.tva'), t('mentions.tvaV')],
    [t('mentions.adresse'), '[adresse complète à compléter]'],
    [t('mentions.telephone'), CONTACT.phoneDisplay],
    [t('mentions.email'), CONTACT.email],
    [t('mentions.dirigeant'), 'Khalid MIRGHANI — Fondateur'],
    [t('mentions.marque'), t('mentions.marque')],
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 pt-14 pb-20">
      <h1 className="font-display text-4xl text-navy mb-8">{t('mentions.title')}</h1>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('mentions.s1t')}</h2>
        <p className="text-ink mb-4 whitespace-pre-line">
          {t('mentions.s1p')}
        </p>
        <div className="bg-white border border-navy/10 rounded-sm p-6">
          <table className="w-full">
            <tbody>
              {IDENTITY.map(([label, value]) => (
                <tr key={label} className="border-b border-navy/10 last:border-0">
                  <td className="py-3 pr-6 align-top font-semibold text-navy text-sm w-40">{label}</td>
                  <td className="py-3 text-ink text-sm">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-muted mt-3">
          {t('mentions.tvaNote')}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('mentions.s2t')}</h2>
        <p className="text-ink">{t('mentions.s2p')} — {CONTACT.email}</p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('mentions.s3t')}</h2>
        <p className="text-ink mb-2">{t('mentions.s3p')}</p>
        <div className="bg-white border border-navy/10 rounded-sm p-6 text-sm text-ink">
          <p className="font-semibold text-navy mb-1">Cloudflare, Inc.</p>
          <p>101 Townsend Street</p>
          <p>San Francisco, CA 94107</p>
          <p>{t('mentions.s3host')}</p>
          <p className="mt-2">Site : <a href="https://www.cloudflare.com" className="text-gold-dark hover:underline">www.cloudflare.com</a></p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-navy mb-4">{t('mentions.s4t')}</h2>
        <p className="text-ink mb-2">
          {t('mentions.s4p1')}
        </p>
        <p className="text-ink">
          {t('mentions.s4p2')}
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy mb-4">{t('mentions.s5t')}</h2>
        <p className="text-ink">
          {t('mentions.s5p')}
        </p>
      </section>
    </main>
  );
}
