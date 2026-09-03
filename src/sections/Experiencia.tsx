import { experience } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import styles from './Experiencia.module.css';

export function Experiencia() {
  return (
    <section id="experiencia" className={`section section--soft ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={experience.eyebrow} title={experience.title} lead={experience.lead} />
      </div>

      <div className={styles.scroller}>
        <ul className={styles.track}>
          {experience.cases.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 80} className={styles.card}>
              <figure className={styles.figure}>
                <img src={c.image} alt={`${c.title}: ${c.context}`} loading="lazy" width={258} height={152} />
              </figure>
              <div className={styles.body}>
                <span
                  className={styles.context}
                  style={{ background: `var(--${c.accent}-tint)`, color: `var(--${c.accent})` }}
                >
                  {c.context}
                </span>
                <h3 className={styles.title} style={{ color: `var(--${c.accent})` }}>
                  {c.title}
                </h3>
                <dl className={styles.blocks}>
                  <div>
                    <dt>Desafío</dt>
                    <dd>{c.challenge}</dd>
                  </div>
                  <div style={{ borderColor: `var(--${c.accent})` }}>
                    <dt>Cómo acompañamos</dt>
                    <dd>{c.how}</dd>
                  </div>
                  <div style={{ borderColor: `var(--${c.accent})` }}>
                    <dt>Resultado</dt>
                    <dd>{c.result}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
