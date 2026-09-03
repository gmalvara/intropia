import type { Accent } from '../data/content';

export const ACCENT_VARS: Record<Accent, string> = {
  blue: 'var(--blue)',
  green: 'var(--green)',
  pink: 'var(--pink)',
  purple: 'var(--purple)',
  orange: 'var(--orange)',
  yellow: 'var(--yellow)',
};

export const accentVar = (a: Accent) => ACCENT_VARS[a];
