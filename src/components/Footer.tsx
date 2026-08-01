import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT, PORTAL_URL } from '../data/content';
import { useI18n } from '../lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy text-white/85">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/logo-mark.png" alt="MIRGHANI" className="w-7 h-auto" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base tracking-wide text-white">MIRGHANI</span>
            <span className="text-[10px] tracking-widest uppercase text-gold">{t('brand.subtitle')}</span>
          </span>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-white/85">
            <Phone className="w-4 h-4 text-gold" /> {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/85">
            <Mail className="w-4 h-4 text-gold" /> {CONTACT.email}
          </a>
          <span className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gold shrink-0" /> {CONTACT.address}
          </span>
        </div>

        <div>
          <p className="text-sm text-white/65 max-w-xs mb-4">
            {t('footer.tagline')}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© MIRGHANI – {t('brand.subtitle')}</p>
        <div className="flex gap-6">
          <a href={PORTAL_URL} className="hover:text-amber-600">{t('footer.clientArea')}</a>
          <Link to="/mentions-legales" className="hover:text-amber-600">{t('footer.legal')}</Link>
          <Link to="/confidentialite" className="hover:text-amber-600">{t('footer.privacy')}</Link>
        </div>
      </div>
    </footer>
  );
}
