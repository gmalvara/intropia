import type { Accent } from '../data/content';
import { RichTitle, type TitlePart } from './RichTitle';
import { Underline } from './Underline';
import { Reveal } from './Reveal';
import styles from './SectionHeader.module.css';

type Props = {
  eyebrow?: string;
  title: TitlePart[];
  lead?: string;
  underline?: Accent | false;
  align?: 'left' | 'center';
  size?: 'h2' | 'h1';
  id?: string;
  onInk?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  underline = 'orange',
  align = 'left',
  size = 'h2',
  id,
  onInk = false,
}: Props) {
  return (
    <Reveal className={[styles.header, align === 'center' ? styles.center : '', onInk ? styles.onInk : ''].join(' ')}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <RichTitle parts={title} as={size === 'h1' ? 'h1' : 'h2'} className={size === 'h1' ? 'h1' : 'h2'} id={id} />
      {underline && <Underline color={underline} className={styles.underline} />}
      {lead && <p className={`body-l ${styles.lead}`}>{lead}</p>}
    </Reveal>
  );
}
