import { approach } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { IconBadge } from '../components/IconBadge';
import { Reveal } from '../components/Reveal';
import { RichTitle } from '../components/RichTitle';
import type { IconName } from '../components/Icon';
import styles from './Enfoque.module.css';

export function Enfoque() {
  return (
    <section id="enfoque" className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeader eyebrow={approach.eyebrow} title={approach.title} lead={approach.lead} />
        </div>

        <ol className={styles.steps}>
          {approach.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className={styles.step}>
              <IconBadge icon={s.icon as IconName} accent={s.accent} size="lg" />
              <span className={styles.dot} style={{ background: `var(--${s.accent})` }} aria-hidden="true" />
              <h3 className={styles.stepTitle} style={{ color: `var(--${s.accent})` }}>
                {s.title}
              </h3>
              <p className="small">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="container">
        <Reveal className={styles.closing}>
          <RichTitle parts={approach.closing} as="p" className="h3" />
        </Reveal>
      </div>
    </section>
  );
}
