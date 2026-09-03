import { gallery } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { Shape, type ShapeKind } from '../components/Shape';
import { Icon } from '../components/Icon';
import type { Accent } from '../data/content';
import styles from './Galeria.module.css';

type Tile =
  | { type: 'phrase'; text: string; shape: ShapeKind; color: Accent; dark?: boolean }
  | { type: 'media'; label: string; kind: 'photo' | 'video' };

const TILES: Tile[] = [
  { type: 'media', label: 'Foto de taller', kind: 'photo' },
  { type: 'phrase', text: gallery.phrases[1], shape: 'circle', color: 'green', dark: true },
  { type: 'media', label: 'Video de actividad', kind: 'video' },
  { type: 'phrase', text: gallery.phrases[0], shape: 'triangle', color: 'yellow' },
  { type: 'media', label: 'Foto de taller', kind: 'photo' },
  { type: 'phrase', text: gallery.phrases[2], shape: 'semicircle', color: 'purple', dark: true },
  { type: 'phrase', text: gallery.phrases[3], shape: 'arch', color: 'pink' },
  { type: 'media', label: 'Foto de taller', kind: 'photo' },
];

export function Galeria() {
  return (
    <section id="galeria" className={`section section--ink ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} lead={gallery.lead} underline="pink" onInk />

        <ul className={styles.grid}>
          {TILES.map((t, i) => (
            <Reveal
              as="li"
              key={i}
              delay={(i % 4) * 70}
              className={[
                styles.tile,
                t.type === 'phrase' ? (t.dark ? styles.tileDark : styles.tileCream) : styles.tileMedia,
              ].join(' ')}
            >
              {t.type === 'phrase' ? (
                <>
                  <Shape kind={t.shape} color={t.color} size="46%" className={styles.tileShape} />
                  <span className={styles.phrase}>{t.text}</span>
                </>
              ) : (
                <div className={styles.placeholder}>
                  <Icon name={t.kind === 'video' ? 'play' : 'people'} size={28} />
                  <span>{t.label}</span>
                  <small>Material pendiente</small>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
