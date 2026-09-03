import type { Accent } from '../data/content';
import { Icon, type IconName } from './Icon';
import styles from './IconBadge.module.css';

type Props = {
  icon: IconName;
  accent: Accent;
  size?: 'sm' | 'md' | 'lg';
  /** 'tint' (por defecto) o 'white' cuando el badge va sobre una tarjeta ya teñida. */
  surface?: 'tint' | 'white';
};

/** Ícono lineal en color de acento dentro de un círculo del mismo tinte. */
export function IconBadge({ icon, accent, size = 'md', surface = 'tint' }: Props) {
  const px = size === 'sm' ? 20 : size === 'lg' ? 30 : 24;
  return (
    <span
      className={[styles.badge, styles[size]].join(' ')}
      style={{ background: surface === 'white' ? '#fff' : `var(--${accent}-tint)`, color: `var(--${accent})` }}
    >
      <Icon name={icon} size={px} />
    </span>
  );
}
