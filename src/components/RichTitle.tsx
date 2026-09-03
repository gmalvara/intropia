import type { ElementType } from 'react';
import type { Accent } from '../data/content';

export type TitlePart = { text: string; accent?: Accent };

type Props = {
  parts: TitlePart[];
  as?: ElementType;
  className?: string;
  id?: string;
};

/** Título con una o dos palabras en color de acento (máximo dos colores por título). */
export function RichTitle({ parts, as: Tag = 'h2', className, id }: Props) {
  return (
    <Tag className={className} id={id}>
      {parts.map((p, i) =>
        p.accent ? (
          <span key={i} className={`accent-${p.accent}`}>
            {p.text}
          </span>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </Tag>
  );
}
