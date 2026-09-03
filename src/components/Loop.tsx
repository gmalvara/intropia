import type { CSSProperties } from 'react';

type Props = {
  /** Color del trazo: solo negro o crema (brandbook, formas lineales). */
  tone?: 'ink' | 'cream';
  className?: string;
  style?: CSSProperties;
  variant?: 'a' | 'b';
};

/**
 * Bucle lineal Intropia: trazo continuo grueso que dibuja lazos.
 * Representa recorridos, conexiones y procesos en desarrollo (gestión del cambio).
 * Se recorta por el borde del contenedor (usar overflow:hidden en el padre).
 */
export function Loop({ tone = 'ink', className, style, variant = 'a' }: Props) {
  const stroke = tone === 'ink' ? 'var(--ink)' : 'var(--cream)';
  const d =
    variant === 'a'
      ? 'M-20 240 C 40 300, 190 280, 190 190 C 190 110, 80 90, 80 150 C 80 230, 260 230, 250 130 C 240 40, 130 -10, 160 80'
      : 'M-10 60 C 60 -20, 170 20, 150 100 C 130 180, 20 170, 40 100 C 60 30, 210 30, 230 120 C 250 210, 120 260, 90 300';
  return (
    <svg
      viewBox="0 0 260 300"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
      preserveAspectRatio="xMidYMid slice"
    >
      <path d={d} fill="none" stroke={stroke} strokeWidth="26" strokeLinecap="round" />
    </svg>
  );
}
