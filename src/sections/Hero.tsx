import { hero } from '../data/content';
import { RichTitle } from '../components/RichTitle';
import { ShapeCluster } from '../components/ShapeCluster';
import { Icon } from '../components/Icon';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow}`}>Consultora de transformación organizacional</span>
          <RichTitle parts={hero.title} as="h1" className={`h1 ${styles.title}`} />
          <p className={`body-l ${styles.lead}`}>{hero.lead}</p>
          <div className={styles.actions}>
            <a href={hero.primary.href} className="btn btn--primary">
              {hero.primary.label}
              <Icon name="arrow-right" size={18} />
            </a>
            <a href={hero.secondary.href} className="btn btn--secondary">
              {hero.secondary.label}
            </a>
          </div>
        </div>

        <div className={styles.art}>
          <ShapeCluster variant="hero" className={styles.cluster} />
        </div>
      </div>

      <a href="#conviccion" className={styles.scroll} aria-label="Bajar a la siguiente sección">
        <Icon name="arrow-down" size={20} />
      </a>
    </section>
  );
}
