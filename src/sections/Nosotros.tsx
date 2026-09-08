import { about, site } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { ShapeCluster } from '../components/ShapeCluster';
import { Shape } from '../components/Shape';
import styles from './Nosotros.module.css';

export function Nosotros() {
  return (
    <section id="nosotros" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={about.eyebrow} title={about.title} underline="orange" />

        <div className={styles.grid}>
          <Reveal className={styles.text}>
            <p className="body-l">{about.text}</p>
          </Reveal>

          <ul className={styles.pillars}>
            {about.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className={styles.pillar}>
                <Shape kind={i === 0 ? 'square' : i === 1 ? 'arch' : 'circle'} color={p.accent} size={22} />
                <div>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className="small">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className={styles.founder}>
          <img
            src="/brand/gabriela-alvarado-v3.png"
            alt="Gabriela Alvarado"
            className={styles.avatar}
            width={1200}
            height={1200}
          />
          <div className={styles.founderBody}>
            <span className="eyebrow">Quién está detrás</span>
            <h3 className={styles.founderName}>{about.founder.name}</h3>
            <p className={styles.founderRole}>{about.founder.role}</p>
            <p className={styles.founderText}>{about.founder.text}</p>
            <p className={`small ${styles.partner}`}>
              {about.founder.partnerNote}{' '}
              <a href={site.partner.url} target="_blank" rel="noreferrer">
                {site.partner.name} ↗
              </a>
            </p>
          </div>
          <div className={styles.founderArt}>
            <ShapeCluster variant="tower" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
