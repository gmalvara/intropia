import { useEffect, useState } from 'react';
import { nav, site } from '../data/content';
import { Icon } from '../components/Icon';
import styles from './Navbar.module.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label={`${site.name}, ir al inicio`}>
          <img src="/brand/logo/horizontal-color.png" alt="" width={1007} height={149} />
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className={`btn btn--primary ${styles.cta}`}>
          Conversemos
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      <div id="menu-movil" className={[styles.mobile, open ? styles.mobileOpen : ''].join(' ')} hidden={!open}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn btn--primary" onClick={() => setOpen(false)}>
          Conversemos
        </a>
      </div>
    </header>
  );
}
