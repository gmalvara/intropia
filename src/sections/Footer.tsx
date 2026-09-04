import { nav, site } from '../data/content';
import { ShapeCluster } from '../components/ShapeCluster';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <img src="/brand/logo/caja-blanco.png" alt={site.name} width={372} height={436} className={styles.logo} />
          <p className={styles.tagline}>{site.tagline}</p>
          <p className={styles.claim}>{site.claim}</p>
        </div>

        <nav className={styles.nav} aria-label="Pie de página">
          <span className={styles.colTitle}>Navegación</span>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <span className={styles.colTitle}>Contacto</span>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li className={styles.partner}>
              En alianza con{' '}
              <a href={site.partner.url} target="_blank" rel="noreferrer">
                {site.partner.name}
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.art} aria-hidden="true">
          <ShapeCluster variant="footer" animate={false} />
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} {site.name}. Santiago, Chile.
        </span>
        <span>{site.url.replace('https://', '')}</span>
      </div>
    </footer>
  );
}
