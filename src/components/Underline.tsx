import type { Accent } from '../data/content';
import { accentVar } from './accent';

type Props = {
  color?: Accent;
  width?: number;
  className?: string;
};

/** Subrayado orgánico a mano (presentación de servicios). Naranja o amarillo por defecto. */
export function Underline({ color = 'orange', width = 180, className }: Props) {
  return (
    <svg
      viewBox="0 0 180 12"
      width={width}
      height={(width / 180) * 12}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ display: 'block' }}
    >
      <path
        d="M2 8.5 C 40 2, 90 1.5, 178 6"
        fill="none"
        stroke={accentVar(color)}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
