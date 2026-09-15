import { useEffect, useRef, useState } from 'react';
import { gallery } from '../data/content';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { Shape, type ShapeKind } from '../components/Shape';
import { Icon } from '../components/Icon';
import type { Accent } from '../data/content';
import styles from './Galeria.module.css';

type Tile =
  | { type: 'phrase'; text: string; shape: ShapeKind; color: Accent; dark?: boolean }
  | { type: 'media'; label: string; kind: 'photo' | 'video'; src?: string; position?: string };

const TILES: Tile[] = [
  { type: 'media', label: 'Foto de taller', kind: 'photo', src: '/casos/galeria-cambio-queda.jpg' },
  { type: 'phrase', text: gallery.phrases[1], shape: 'circle', color: 'green' },
  { type: 'media', label: 'Video de actividad', kind: 'video', src: '/casos/actividad-taller.mp4' },
  { type: 'phrase', text: gallery.phrases[0], shape: 'triangle', color: 'yellow' },
  { type: 'phrase', text: gallery.phrases[2], shape: 'semicircle', color: 'purple' },
  { type: 'media', label: 'Foto de taller', kind: 'photo', src: '/casos/galeria-consalud.jpg', position: '55% center' },
  { type: 'phrase', text: gallery.phrases[3], shape: 'arch', color: 'pink' },
  { type: 'media', label: 'Foto de taller', kind: 'photo', src: '/casos/galeria-cierre.jpg' },
];

export function Galeria() {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoOpen || !videoRef.current) return;
    videoRef.current.volume = 0.5;
    void videoRef.current.play().catch(() => undefined);
  }, [videoOpen]);

  const closeVideo = () => {
    videoRef.current?.pause();
    setVideoOpen(false);
  };

  return (
    <section id="galeria" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} lead={gallery.lead} underline="pink" />

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
              ) : t.src && t.kind === 'video' ? (
                <button type="button" className={styles.videoPreview} onClick={() => setVideoOpen(true)} aria-label="Ver video de actividad">
                  <img src="/casos/galeria-davita.jpg" alt="" className={styles.photo} loading="lazy" />
                  <span className={styles.playButton} aria-hidden="true">
                    <Icon name="play" size={28} />
                  </span>
                  <span className={styles.videoLabel}>Ver video de actividad</span>
                </button>
              ) : t.src ? (
                <img src={t.src} alt={t.label} className={styles.photo} style={{ objectPosition: t.position }} loading="lazy" />
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

      {videoOpen && (
        <div className={styles.videoDialog} role="dialog" aria-modal="true" aria-label="Video de actividad" onClick={closeVideo}>
          <div className={styles.videoDialogContent} onClick={(event) => event.stopPropagation()}>
            <button type="button" className={styles.closeVideo} onClick={closeVideo} aria-label="Cerrar video">
              ×
            </button>
            <video ref={videoRef} className={styles.video} controls playsInline>
              <source src="/casos/actividad-taller.mp4" type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
