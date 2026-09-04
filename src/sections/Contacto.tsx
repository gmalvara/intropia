import { useState, type ChangeEvent, type FormEvent } from 'react';
import { contact, site } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { IconBadge } from '../components/IconBadge';
import { Icon, type IconName } from '../components/Icon';
import styles from './Contacto.module.css';

export function Contacto() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });

  const onChange = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde intropia.cl · ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Hola Gabriela,\n\n${form.message}\n\n—\n${form.name}\n${form.company}\n${form.email}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className={`section section--soft ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <SectionHeader eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />

          <ul className={styles.promises}>
            {contact.promises.map((p) => (
              <li key={p.label}>
                <IconBadge icon={p.icon as IconName} accent={p.accent} size="sm" />
                <span style={{ color: `var(--${p.accent})` }}>{p.label}</span>
              </li>
            ))}
          </ul>

        </div>

        <Reveal className={styles.formWrap} delay={120}>
          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.field}>
              <span>{contact.form.name}</span>
              <input type="text" name="name" required autoComplete="name" value={form.name} onChange={onChange('name')} />
            </label>
            <label className={styles.field}>
              <span>{contact.form.company}</span>
              <input
                type="text"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={onChange('company')}
              />
            </label>
            <label className={styles.field}>
              <span>{contact.form.email}</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={onChange('email')}
              />
            </label>
            <label className={styles.field}>
              <span>{contact.form.message}</span>
              <textarea name="message" rows={4} required value={form.message} onChange={onChange('message')} />
            </label>
            <button type="submit" className="btn btn--primary">
              {contact.form.submit}
              <Icon name="arrow-right" size={18} />
            </button>
            <p className={`small ${styles.hint}`}>{contact.form.hint}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
