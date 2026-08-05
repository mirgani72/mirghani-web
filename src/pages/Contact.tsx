import { useState, FormEvent, ChangeEvent } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { CONTACT, CONTACT_API_URL, PHOTOS } from '../data/content';
import { useI18n } from '../lib/i18n';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const message = form.telephone
      ? `${form.message}\n\n${t('contact.phone')} : ${form.telephone}`
      : form.message;
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.prenom} ${form.nom}`.trim(),
          email: form.email,
          message,
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
      setForm({ nom: '', prenom: '', email: '', telephone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = 'border-b border-navy/15 pb-2 text-sm bg-transparent text-navy focus:outline-none focus:border-gold';

  return (
    <main>
      <section className="grid md:grid-cols-2">
        <div className="order-2 md:order-1 px-6 py-14 md:py-20 md:pl-12 lg:pl-20 md:pr-10 lg:pr-16">
          <h1 className="font-display text-3xl md:text-5xl text-navy mb-3">{t('contact.title')}</h1>
          <p className="text-ink-muted max-w-md text-sm md:text-base leading-relaxed mb-8">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-navy font-medium">
              <span className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gold shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              {CONTACT.phoneDisplay}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-navy font-medium">
              <span className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-gold shrink-0">
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

          {status === 'success' ? (
            <div className="bg-white p-8 rounded-sm shadow-lg flex flex-col items-start gap-3 max-w-lg">
              <CheckCircle2 className="w-8 h-8 text-gold" strokeWidth={1.5} />
              <p className="text-navy text-sm leading-relaxed">{t('contact.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-lg flex flex-col gap-5 max-w-lg">
              <p
                className={`text-xs rounded-sm px-4 py-3 border-l-2 ${
                  status === 'error'
                    ? 'text-red-700 bg-red-50 border-red-400'
                    : 'text-ink-muted bg-cream-alt border-gold'
                }`}
              >
                {status === 'error' ? t('contact.error') : t('contact.note')}
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
              <Button type="submit" className="w-fit" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </Button>
            </form>
          )}
        </div>

        <div className="order-1 md:order-2 relative h-[420px] md:h-auto">
          <img
            src={PHOTOS.facade}
            alt="Façade de résidence moderne"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>
    </main>
  );
}
