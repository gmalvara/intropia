# Intropia · sitio web

Sitio informativo estático de **Intropia**, consultora de transformación organizacional
(gestión del cambio y talleres participativos con LEGO® Serious Play®). React + TypeScript + Vite,
sin backend.

## Comandos

```bash
npm install      # dependencias
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # build de producción en dist/
npm run preview  # sirve dist/ para revisar el build
npm run lint     # oxlint
```

## Estructura

```
design/
  DESIGN-SYSTEM.md          Sistema de diseño web derivado del manual de marca (fuente de verdad visual)
  brand-source/             Brandbook, identidad visual y presentación de servicios (PDF originales)
  assets/                   Recursos gráficos PNG originales entregados por la agencia
public/
  brand/                    Logos, formas, cajas y fondos optimizados para web
  fonts/                    Golos Text (autoalojada)
  casos/                    Fotos de casos (baja resolución, extraídas del PDF; reemplazar)
src/
  data/content.ts           Todo el contenido/copy del sitio en un solo lugar
  components/               Piezas reutilizables (formas, bucles, íconos, encabezados, reveal)
  sections/                 Una carpeta plana con cada sección de la página + su CSS module
  styles/                   tokens.css (variables de marca) y global.css (reset, tipografía, botones)
```

## Cómo editar contenido

Todo el texto vive en `src/data/content.ts`. Los títulos aceptan una o dos palabras en color de
acento mediante `{ text, accent }`. Los colores válidos son los 8 de la marca (ver
`design/DESIGN-SYSTEM.md` §3).

## Pendientes conocidos

- Fotos de casos y galería: reemplazar por material original de Gabriela (las actuales son
  recortes de baja resolución del PDF de servicios).
- Videos de talleres: la galería tiene tarjetas de marcador listas para recibirlos.
- Formulario de contacto: hoy abre el correo del visitante con el mensaje prellenado (`mailto:`).
  Si se quiere recibir los mensajes sin depender del correo del visitante, conectar un servicio
  tipo Formspree o similar.
- Dominio y hosting: el build es estático (`dist/`), se puede publicar en Vercel, Netlify,
  Cloudflare Pages o cualquier hosting de archivos.
