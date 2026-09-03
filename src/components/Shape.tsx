import type { CSSProperties } from 'react';
import type { Accent } from '../data/content';
import { ACCENT_VARS as COLORS } from './accent';

export type ShapeKind = 'semicircle' | 'circle' | 'triangle' | 'square' | 'arch';

type Props = {
  kind: ShapeKind;
  color: Accent | 'ink' | 'cream';
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  /** Rotación en grados. Solo para el semicírculo (cuenco) cuando la composición lo pide. */
  rotate?: number;
};

/**
 * Formas geométricas oficiales de Intropia (brandbook §Formas).
 * Radio de esquina ~2 % del lado; sin bordes, sin sombras.
 * Todas viven en un viewBox 100x100 para poder apilarlas con lógica física.
 */
export function Shape({ kind, color, size = 64, className, style, rotate }: Props) {
  const fill = color === 'ink' ? 'var(--ink)' : color === 'cream' ? 'var(--cream)' : COLORS[color];
  const r = 3;
  let path: string;
  switch (kind) {
    case 'circle':
      path = 'M50 0a50 50 0 1 1 0 100a50 50 0 1 1 0-100z';
      break;
    case 'square':
      path = `M${r} 0h${100 - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${100 - 2 * r}a${r} ${r} 0 0 1 -${r} ${r}h-${100 - 2 * r}a${r} ${r} 0 0 1 -${r} -${r}v-${100 - 2 * r}a${r} ${r} 0 0 1 ${r} -${r}z`;
      break;
    case 'triangle':
      // Triángulo rectángulo con el ángulo recto abajo a la derecha (como en el brandbook)
      path = `M${r * 1.4} ${100 - r} L${100 - r * 1.4} ${r * 1.2} Q100 0 100 ${r * 1.6} L100 ${100 - r} Q100 100 ${100 - r} 100 L${r} 100 Q0 100 ${r * 1.4} ${100 - r}z`;
      break;
    case 'semicircle':
      // Cuenco: lado recto arriba, curva abajo
      path = `M${r} 20h${100 - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v0a50 50 0 0 1 -100 0v0a${r} ${r} 0 0 1 ${r} -${r}z`;
      break;
    case 'arch':
    default:
      path = `M0 100V50a50 50 0 0 1 100 0v${50 - r}a${r} ${r} 0 0 1 -${r} ${r}H${r}a${r} ${r} 0 0 1 -${r} -${r}z`;
      break;
  }
  const dim = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg
      viewBox="0 0 100 100"
      width={dim}
      height={dim}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ ...style, transform: rotate ? `rotate(${rotate}deg)` : style?.transform }}
    >
      <path d={path} fill={fill} />
    </svg>
  );
}
