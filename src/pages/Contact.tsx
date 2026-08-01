import { useState, FormEvent, ChangeEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { CONTACT, PHOTOS } from '../data/content';
import { useI18n } from '../lib/i18n';

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = 'Nouveau message — site MIRGHANI';
    const body = [
      `${t('contact.lastName')} : ${form.nom}`,
      `${t('contact.firstName')} : ${form.prenom}`,
      `Email : ${form.email}`,
      `${t('contact.phone')} : ${form.telephone}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass = 'border-b border-navy/15 pb-2 text-sm bg-transparent text-navy focus:outline-none focus:border-gold';

  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={PHOTOS.entrance}
          alt="Entrée d'immeuble"
          className="block w-full h-[45vh] sm:h-[50vh] md:h-[55vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy/75 via-navy/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-12 max-w-2xl">
          <h1 className="font-display text-3xl md:text-5xl text-cream mb-3">{t('contact.title')}</h1>
          <p className="text-white/85 max-w-md text-sm md:text-base leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex flex-col gap-4">
            <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-navy font-medium">
              <span className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gold">
                <Phone className="w-4 h-4" />
              </span>
              {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-navy font-medium">
              <span className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gold">
                <Mail className="w-4 h-4" />
              </span>
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-3 text-navy font-medium">
              <span className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-4 h-4" />
              </span>
              {CONTACT.address}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-lg flex flex-col gap-5">
          <p className="text-xs text-ink-muted bg-cream-alt border-l-2 border-gold rounded-sm px-4 py-3">
            {t('contact.note')}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-xs tracking-wider uppercase text-ink-muted">
              {t('contact.lastName')}
              <input name="nom" value={form.nom} onChange={handleChange} required className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 text-xs tracking-wider uppercase text-ink-muted">
              {t('contact.firstName')}
              <input name="prenom" value={form.prenom} onChange={handleChange} required className={fieldClass} />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-xs tracking-wider uppercase text-ink-muted">
            {t('contact.email')}
            <input type="email" name="email" value={form.email} onChange={handleChange} required className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2 text-xs tracking-wider uppercase text-ink-muted">
            {t('contact.phone')}
            <input name="telephone" value={form.telephone} onChange={handleChange} className={fieldClass} />
          </label>
          <label className="flex flex-col gap-2 text-xs tracking-wider uppercase text-ink-muted">
            {t('contact.message')}
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className={`${fieldClass} resize-y`} />
          </label>
          <Button type="submit" className="w-fit">{t('contact.send')}</Button>
        </form>
      </section>

      <section className="relative">
        <img src={PHOTOS.entrance} alt="Entrée d'immeuble avec porte et numéro" className="w-full h-72 object-cover" />
        <span className="absolute -top-4 left-11 bg-navy text-cream font-display w-10 h-10 rounded-sm flex items-center justify-center shadow-lg">
          3
        </span>
      </section>
    </main>
  );
}
