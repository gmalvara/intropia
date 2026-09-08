import { services } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { Icon } from '../components/Icon';
import styles from './Servicios.module.css';

const TRAIN_THE_TRAINERS = [
  'Oratoria y comunicación para facilitar',
  'Principios de educación de adultos',
  'Diseño de experiencias de aprendizaje participativas',
  'Facilitación y manejo de grupos',
];

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
              {/* Franja de avance: acompaña el contenido sin quitarle protagonismo. */}
              <div className={styles.deco} aria-hidden="true">
                <div className={[styles.banner, line.kind === 'acompanamiento' ? styles.bannerBlue : styles.bannerInk].join(' ')}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.label}>{line.label}</span>
                <h3 className={`h3 ${styles.cardTitle}`}>{line.title}</h3>
                <p className={styles.cardText}>{line.text}</p>
                {line.kind === 'talleres' && (
                  <div className={styles.trainTheTrainers}>
                    <h4>Train the Trainers</h4>
                    <p>Formamos facilitadores internos para multiplicar capacidades dentro de la organización.</p>
                    <ul>
                      {TRAIN_THE_TRAINERS.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
