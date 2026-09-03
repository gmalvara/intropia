import { valueAreas } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { IconBadge } from '../components/IconBadge';
import { Reveal } from '../components/Reveal';
import type { IconName } from '../components/Icon';
import styles from './Valor.module.css';

export function Valor() {
  return (
    <section id="valor" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.sticky}>
          <SectionHeader eyebrow={valueAreas.eyebrow} title={valueAreas.title} lead={valueAreas.lead} />
        </div>

        <ul className={styles.cards}>
          {valueAreas.areas.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={(i % 2) * 90}
              className={styles.card}
              style={{ background: `var(--${a.accent}-tint)` }}
            >
              <IconBadge icon={a.icon as IconName} accent={a.accent} size="md" surface="white" />
              <h3 className={styles.cardTitle} style={{ color: `var(--${a.accent})` }}>
                {a.title}
              </h3>
              <span className={styles.rule} style={{ background: `var(--${a.accent})` }} aria-hidden="true" />
              <ul className={styles.items}>
                {a.items.map((it) => (
                  <li key={it}>
                    <span className={styles.dot} style={{ background: `var(--${a.accent})` }} aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
