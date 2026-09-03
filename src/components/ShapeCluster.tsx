import styles from './ShapeCluster.module.css';

type Variant = 'hero' | 'compact' | 'tower';

/**
 * Composiciones de formas que se sostienen unas a otras y arman algo más grande.
 * Reglas: apilado con lógica física, separación mínima, nunca se tocan, sin repetir color.
 * Las piezas entran una a una "construyéndose" (animación sutil, respeta reduced-motion).
 *
 * Coordenadas en un lienzo 100x100 (unidades = % del contenedor).
 */
const R = 2.2; // radio de esquina (~2 % del lado)
const GAP = 2.4; // separación entre piezas

type Piece = {
  kind: 'semicircle' | 'circle' | 'triangle' | 'square' | 'arch';
  color: string;
  x: number;
  y: number;
  w: number;
  h?: number;
  delay: number;
  rotate?: number;
};

function piecePath(p: Piece): string {
  const { x, y, w } = p;
  const h = p.h ?? w;
  switch (p.kind) {
    case 'circle': {
      const cx = x + w / 2;
      const cy = y + h / 2;
      const r = w / 2;
      return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 -${2 * r} 0z`;
    }
    case 'square':
      return `M${x + R} ${y}h${w - 2 * R}a${R} ${R} 0 0 1 ${R} ${R}v${h - 2 * R}a${R} ${R} 0 0 1 -${R} ${R}h-${w - 2 * R}a${R} ${R} 0 0 1 -${R} -${R}v-${h - 2 * R}a${R} ${R} 0 0 1 ${R} -${R}z`;
    case 'triangle':
      // ángulo recto abajo-derecha
      return `M${x + R} ${y + h} L${x + w - R} ${y + h} a${R} ${R} 0 0 0 ${R} -${R} L${x + w} ${y + R * 1.6} Q${x + w} ${y} ${x + w - R * 1.4} ${y + R} L${x + R * 1.2} ${y + h - R * 1.2} Q${x} ${y + h} ${x + R} ${y + h}z`;
    case 'semicircle': {
      // cuenco: recto arriba, curva abajo
      const r = w / 2;
      return `M${x + R} ${y}h${w - 2 * R}a${R} ${R} 0 0 1 ${R} ${R}a${r} ${r} 0 0 1 -${w} 0a${R} ${R} 0 0 1 ${R} -${R}z`;
    }
    case 'arch':
    default: {
      const r = w / 2;
      return `M${x} ${y + h}V${y + r}a${r} ${r} 0 0 1 ${w} 0V${y + h - R}a${R} ${R} 0 0 1 -${R} ${R}H${x + R}a${R} ${R} 0 0 1 -${R} -${R}z`;
    }
  }
}

/* Composición oficial "Conjunto 01" (brandbook, Formas 01) reinterpretada:
   fila base: círculo azul · cuadrado naranja · arco morado
   encima:    cuenco rosa (apoyado sobre círculo/cuadrado) · triángulo verde (sobre el cuadrado) · círculo amarillo (sobre el arco)  */
const HERO: Piece[] = [
  { kind: 'circle', color: 'var(--blue)', x: 0, y: 55, w: 32, delay: 0 },
  { kind: 'square', color: 'var(--orange)', x: 32 + GAP, y: 60, w: 27, h: 27, delay: 90 },
  { kind: 'arch', color: 'var(--purple)', x: 59 + 2 * GAP, y: 45, w: 28, h: 42, delay: 180 },
  { kind: 'triangle', color: 'var(--green)', x: 32 + GAP, y: 60 - GAP - 27, w: 27, h: 27, delay: 300 },
  { kind: 'semicircle', color: 'var(--pink)', x: 0, y: 33.5, w: 40, delay: 420, rotate: -14 },
  { kind: 'circle', color: 'var(--yellow)', x: 59 + 2 * GAP, y: 45 - GAP - 28, w: 28, delay: 540 },
];

/* Composición "Conjunto 03" (torre): */
const TOWER: Piece[] = [
  { kind: 'circle', color: 'var(--green)', x: 0, y: 66, w: 30, delay: 0 },
  { kind: 'triangle', color: 'var(--purple)', x: 30 + GAP, y: 66, w: 30, h: 30, delay: 100 },
  { kind: 'arch', color: 'var(--blue)', x: 60 + 2 * GAP, y: 54, w: 30, h: 42, delay: 200 },
  { kind: 'semicircle', color: 'var(--pink)', x: 12, y: 40, w: 40, delay: 320, rotate: 14 },
  { kind: 'square', color: 'var(--yellow)', x: 60 + 2 * GAP, y: 54 - GAP - 28, w: 28, h: 28, delay: 440 },
  { kind: 'circle', color: 'var(--orange)', x: 22, y: 4, w: 32, delay: 560 },
];

/* Composición compacta (Conjunto 02, horizontal): */
const COMPACT: Piece[] = [
  // base: arco verde · cuadrado azul · triángulo rosa · círculo naranja
  { kind: 'arch', color: 'var(--green)', x: 0, y: 40, w: 22, h: 30, delay: 0 },
  { kind: 'square', color: 'var(--blue)', x: 22 + GAP, y: 46, w: 24, h: 24, delay: 90 },
  { kind: 'triangle', color: 'var(--pink)', x: 46 + 2 * GAP, y: 46, w: 24, h: 24, delay: 180 },
  { kind: 'circle', color: 'var(--orange)', x: 72 + 3 * GAP, y: 48, w: 22, delay: 270 },
  // encima: círculo morado descansa sobre el arco; cuenco amarillo se apoya inclinado en el triángulo
  { kind: 'circle', color: 'var(--purple)', x: 1, y: 40 - GAP - 20, w: 20, delay: 380 },
  { kind: 'semicircle', color: 'var(--yellow)', x: 60, y: 28, w: 30, delay: 480, rotate: -30 },
];

const VARIANTS: Record<Variant, Piece[]> = { hero: HERO, tower: TOWER, compact: COMPACT };

type Props = {
  variant?: Variant;
  className?: string;
  animate?: boolean;
};

export function ShapeCluster({ variant = 'hero', className, animate = true }: Props) {
  const pieces = VARIANTS[variant];
  return (
    <svg
      viewBox="0 0 100 100"
      className={[styles.cluster, animate ? styles.animate : '', className ?? ''].join(' ')}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMax meet"
    >
      {pieces.map((p, i) => {
        const cx = p.x + p.w / 2;
        const cy = p.y + (p.h ?? p.w) / 2;
        return (
          <path
            key={i}
            d={piecePath(p)}
            fill={p.color}
            className={styles.piece}
            style={{
              animationDelay: `${p.delay}ms`,
              transformOrigin: `${cx}px ${cy}px`,
              transform: p.rotate ? `rotate(${p.rotate}deg)` : undefined,
            }}
          />
        );
      })}
    </svg>
  );
}
