import { conviction } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import { Shape } from '../components/Shape';
import styles from './Conviccion.module.css';

export function Conviccion() {
  return (
    <section id="conviccion" className={`section section--soft ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={conviction.eyebrow} title={conviction.title} lead={conviction.lead} underline="yellow" />

        <ul className={styles.pillars}>
          {conviction.pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90} className={styles.pillar}>
              <Shape
                kind={i === 0 ? 'circle' : i === 1 ? 'square' : 'triangle'}
                color={p.accent}
                size={18}
                className={styles.bullet}
              />
              <h3 className={`h3 ${styles.pillarTitle}`} style={{ color: `var(--${p.accent})` }}>
                {p.title}
              </h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.closing}>
          <p className="h3">
            ¿Cómo <span className="accent-blue">acompañamos</span> a las organizaciones a{' '}
            <span className="accent-green">prepararse</span> para este desafío?
          </p>
          <a href="#enfoque" className={styles.arrow} aria-label="Ver cómo trabajamos">
            <Icon name="arrow-down" size={22} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
