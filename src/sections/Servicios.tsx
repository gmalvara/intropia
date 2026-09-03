import { services } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { Loop } from '../components/Loop';
import { Shape } from '../components/Shape';
import { Icon } from '../components/Icon';
import styles from './Servicios.module.css';

export function Servicios() {
  return (
    <section id="servicios" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={services.eyebrow} title={services.title} lead={services.lead} />

        <div className={styles.cards}>
          {services.lines.map((line, i) => (
            <Reveal
              as="article"
              key={line.id}
              id={line.id}
              delay={i * 120}
              className={[styles.card, line.kind === 'acompanamiento' ? styles.cardBlue : styles.cardInk].join(' ')}
            >
              {/* Zona decorativa superior. Gestión del Cambio = bucle (procesos de acompañamiento);
                  Talleres = formas geométricas que se sostienen entre sí (comunicación general y talleres). */}
              <div className={styles.deco} aria-hidden="true">
                {line.kind === 'acompanamiento' ? (
                  <Loop tone="cream" className={styles.loop} />
                ) : (
                  <div className={styles.stack}>
                    <Shape kind="triangle" color="green" size={104} className={styles.stackTriangle} />
                    <Shape kind="semicircle" color="pink" size={150} className={styles.stackBowl} />
                    <Shape kind="circle" color="yellow" size={64} className={styles.stackCircle} />
                  </div>
                )}
              </div>

              <div className={styles.cardBody}>
                <span className={styles.label}>{line.label}</span>
                <h3 className={`h3 ${styles.cardTitle}`}>{line.title}</h3>
                <p className={styles.cardText}>{line.text}</p>
                <ul className={styles.bullets}>
                  {line.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a href={line.cta.href} className={styles.link}>
                  {line.cta.label}
                  <Icon name="arrow-right" size={18} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
