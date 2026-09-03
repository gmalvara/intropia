import { methodologies } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { IconBadge } from '../components/IconBadge';
import { Reveal } from '../components/Reveal';
import { RichTitle } from '../components/RichTitle';
import { Loop } from '../components/Loop';
import { Icon, type IconName } from '../components/Icon';
import type { Accent } from '../data/content';
import styles from './Metodologias.module.css';

/* tone = color del bucle (solo negro o crema); text = color del texto según contraste (§9). */
const CHIPS: { label: string; accent: Accent; tone: 'ink' | 'cream'; text: 'ink' | 'cream' }[] = [
  { label: 'Gestión del Cambio', accent: 'blue', tone: 'cream', text: 'cream' },
  { label: 'LEGO® Serious Play®', accent: 'pink', tone: 'ink', text: 'ink' },
  { label: 'Facilitación', accent: 'green', tone: 'ink', text: 'ink' },
  { label: 'Liberating Structures', accent: 'orange', tone: 'cream', text: 'ink' },
  { label: 'World Café', accent: 'purple', tone: 'ink', text: 'cream' },
  { label: 'Design Thinking', accent: 'yellow', tone: 'cream', text: 'ink' },
];

export function Metodologias() {
  const { lsp } = methodologies;
  return (
    <section id="metodologias" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={methodologies.eyebrow} title={methodologies.title} lead={methodologies.lead} />

        {/* Chips de metodologías: cajas de color con bucle (registro "procesos de acompañamiento") */}
        <ul className={styles.chips}>
          {CHIPS.map((c, i) => (
            <Reveal
              as="li"
              key={c.label}
              delay={i * 60}
              className={[styles.chip, c.text === 'cream' ? styles.chipOnDark : ''].join(' ')}
              style={{ background: `var(--${c.accent})` }}
            >
              <Loop tone={c.tone} className={styles.chipLoop} variant={i % 2 ? 'b' : 'a'} />
              <span>{c.label}</span>
            </Reveal>
          ))}
        </ul>

        {/* LEGO Serious Play */}
        <div className={styles.lsp}>
          <Reveal className={styles.lspHead}>
            <span className="eyebrow">{lsp.label}</span>
            <RichTitle parts={lsp.title} as="h3" className={`h2 ${styles.lspTitle}`} />
            <p className={`body-l ${styles.lspText}`}>{lsp.text}</p>
          </Reveal>

          <div className={styles.processWrap}>
            <span className={`eyebrow ${styles.processLabel}`}>{lsp.processLabel}</span>
            <ol className={styles.process}>
              {lsp.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 90} className={styles.step}>
                  <IconBadge icon={s.icon as IconName} accent={s.accent} size="md" />
                  <span className={styles.num} style={{ background: `var(--${s.accent})` }}>
                    {i + 1}
                  </span>
                  <h4 className={styles.stepTitle} style={{ color: `var(--${s.accent})` }}>
                    {s.title}
                  </h4>
                  <span className={styles.rule} style={{ background: `var(--${s.accent})` }} aria-hidden="true" />
                  <p className="small">{s.text}</p>
                  {i < lsp.steps.length - 1 && (
                    <span className={styles.arrow} aria-hidden="true">
                      <Icon name="arrow-right" size={16} />
                    </span>
                  )}
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className={styles.apps}>
            <span className={styles.appsLabel}>{lsp.applicationsLabel}</span>
            <ul>
              {lsp.applications.map((a) => (
                <li key={a.label}>
                  <span className={styles.appDot} style={{ background: `var(--${a.accent})` }} aria-hidden="true" />
                  {a.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Otras metodologías */}
        <div className={styles.others}>
          <Reveal className={styles.othersHead}>
            <h3 className={`h3 ${styles.othersTitle}`}>{methodologies.othersTitle}</h3>
            <p className={styles.othersLead}>{methodologies.othersLead}</p>
          </Reveal>
          <ul className={styles.otherGrid}>
            {methodologies.others.map((m, i) => (
              <Reveal as="li" key={m.title} delay={(i % 2) * 90} className={styles.other}>
                <IconBadge icon={m.icon as IconName} accent={m.accent} size="lg" />
                <div>
                  <h4 className={styles.otherTitle} style={{ color: `var(--${m.accent})` }}>
                    {m.title}
                  </h4>
                  <span className={styles.rule} style={{ background: `var(--${m.accent})` }} aria-hidden="true" />
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
