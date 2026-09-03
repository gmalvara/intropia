import { changeManagement } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { IconBadge } from '../components/IconBadge';
import { Reveal } from '../components/Reveal';
import { Icon, type IconName } from '../components/Icon';
import styles from './GestionCambio.module.css';

export function GestionCambio() {
  return (
    <section id="enfoque-cambio" className={`section section--soft ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={changeManagement.eyebrow} title={changeManagement.title} />

        <div className={styles.phasesWrap}>
          <span className={`eyebrow ${styles.subLabel}`}>{changeManagement.phasesLabel}</span>
          <ol className={styles.phases}>
            {changeManagement.phases.map((ph, i) => (
              <Reveal as="li" key={ph.title} delay={i * 90} className={styles.phase}>
                <IconBadge icon={ph.icon as IconName} accent={ph.accent} size="md" />
                <span className={styles.num} style={{ background: `var(--${ph.accent})` }}>
                  {i + 1}
                </span>
                <h3 className={styles.phaseTitle} style={{ color: `var(--${ph.accent})` }}>
                  {ph.title}
                </h3>
                <span className={styles.rule} style={{ background: `var(--${ph.accent})` }} aria-hidden="true" />
                <ul className={`small ${styles.items}`}>
                  {ph.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                {i < changeManagement.phases.length - 1 && (
                  <span className={styles.arrow} aria-hidden="true">
                    <Icon name="arrow-right" size={16} />
                  </span>
                )}
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className={styles.tools}>
          <span className={`eyebrow ${styles.subLabel}`}>{changeManagement.toolsLabel}</span>
          <ul className={styles.toolList}>
            {changeManagement.tools.map((t) => (
              <li key={t.label} className={styles.tool}>
                <IconBadge icon={t.icon as IconName} accent={t.accent} size="sm" />
                <span>{t.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
