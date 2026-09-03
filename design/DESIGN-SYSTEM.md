# Intropia · Sistema de diseño web

Documento de referencia para construir el sitio web de Intropia siguiendo al pie de la letra el
manual de marca creado por (al).Contrario (julio 2026). Toda decisión visual del frontend debe
poder justificarse con una regla de este documento. Si algo no está aquí, se resuelve mirando
las fuentes originales en `design/brand-source/` y luego se documenta aquí.

Fuentes:

- `design/brand-source/Intropia - Brandbook.pdf` (propósito, pilares, tono, logotipo, color, tipografía, formas, fondos).
- `design/brand-source/Intropia - Identidad visual 04.pdf` (aplicaciones, versiones de logotipo, mockups web/móvil).
- `design/brand-source/Presentación servicios Intropia_2026.pdf` (contenido de servicios y ejemplos de composición).
- `design/assets/Intropia-RecursoGraficos/` (PNG originales). Versiones optimizadas para web en `public/brand/`.

---

## 1. Esencia de marca

**Qué es Intropia.** Consultora de transformación organizacional que usa metodologías lúdicas para
hacer visible lo intangible en momentos de cambio, trabajando con procesos maduros que logran
resultados reales.

**Propósito.** "Acompañamos a las organizaciones para que las personas crezcan con el cambio y las
transformaciones perduren."

**Golden Circle.**

| | |
|---|---|
| WHAT | Consultora de transformación organizacional que trabaja con equipos en momentos críticos a través de metodologías lúdicas. |
| HOW | Convertimos lo intangible en algo visible, manipulable y compartido, para que los equipos pasen de reflexionar a construir juntos el futuro que imaginan. |
| WHY | Existimos para acompañar a las organizaciones en sus procesos de cambio de manera clara y ordenada, con personas que crecen con el cambio y transformaciones que perduran. |

**Pilares de marca** (deben sostener todos los mensajes del sitio):

1. **Construir para transformar.** El método distingue a Intropia: convierte conversaciones difíciles en algo que se puede tocar, mover y discutir en grupo.
2. **Construimos la capacidad de cambio.** Acompañar el tiempo suficiente para que la transformación se sostenga. Instalamos capacidades para que el cambio perdure.
3. **Construimos con las personas.** No imponemos soluciones; escuchamos antes de proponer y co-construimos.

**Arquetipos.** Sabio (credibilidad, conocimiento profundo en gestión del cambio), Creador
(cocreación, soluciones a medida), Mago (transformación tangible con resultados visibles). Toda
sección debe reflejar los tres momentos: entender el contexto, construir en conjunto, mostrar el
resultado.

**Taglines oficiales** (usar textualmente):

- "Construir para transformar & cohesionar."
- "Transformamos desafíos en capacidades."
- Frases cortas de aplicaciones: "Expansión ordenada." · "Pensamos con las manos." · "Cambio que se queda." · "Prueba otra vez." · "Es mejor con todos." · "Diseña la respuesta." · "Suelta y acepta."

---

## 2. Tono de voz

Intropia habla como alguien que entiende el problema antes de opinar sobre la solución.

- Cercano y concreto. Frases cortas. Verbos de acción: construir, transformar, conectar, alinear, acompañar.
- Explica el método con precisión, sin épica ni dramatismo.
- Registro "corporativo formal" solo si el cliente lo pide. En la web: cercano.
- Tuteo ("tu organización", "conversemos").

| Correcto | Evitar |
|---|---|
| "Construimos con ustedes un plan concreto para instalar confianza entre las áreas que hoy no se hablan." | "Implementamos una estrategia integral orientada a fortalecer la confianza y la cohesión interna de la organización." |

**Keywords** que deben aparecer con consistencia:

- Método: Construir · Juego serio · Diálogo · Transformar · Criterio
- Continuidad: Acompañar · Progreso · Confianza · Capacidad
- Cercanía: Cercanía · Participación · Cohesión · Escucha · Cocreación

---

## 3. Paleta de color

Base neutra + colores de alta intensidad. Los neutros construyen piezas sobrias y profesionales;
los complementarios destacan contenidos, organizan información o generan contraste.

| Token | Nombre | HEX | RGB | Uso |
|---|---|---|---|---|
| `--ink` | Negro Intropia | `#1A1A1A` | 26/26/26 | Texto principal, fondos oscuros, trazos lineales sobre color. |
| `--cream` | Crema | `#F6E4D4` | 246/228/212 | Fondo base de la marca. Fondo de página. |
| `--pink` | Rosa | `#FF56C7` | 255/86/199 | Acento. |
| `--purple` | Morado | `#9E5BF6` | 158/91/246 | Acento. |
| `--orange` | Naranja | `#FF7D1D` | 255/125/29 | Acento. Subrayados a mano. |
| `--yellow` | Amarillo | `#FFB51A` | 255/181/26 | Acento. |
| `--green` | Verde | `#00A93E` | 0/169/62 | Acento. |
| `--blue` | Azul | `#0069E6` | 0/105/230 | Acento principal para etiquetas, links y CTA. |

> Nota: el brandbook imprime el negro como `#A1A1A1`, pero su RGB (26/26/26) y CMYK (76/67/61/83)
> corresponden a `#1A1A1A`. Es un error tipográfico del manual; se usa `#1A1A1A`.

### Derivados permitidos para web

Solo para fondos de tarjetas e íconos, nunca como color de texto. Se obtienen mezclando el acento
con el crema claro (~14 %). La propuesta de servicios ya los usa así.

| Token | Derivación | Aprox. |
|---|---|---|
| `--pink-tint` | pink 14 % sobre cream-soft | `#FCDDE6` |
| `--purple-tint` | purple 14 % sobre cream-soft | `#EEDEEC` |
| `--orange-tint` | orange 14 % sobre cream-soft | `#FCE2CE` |
| `--yellow-tint` | yellow 14 % sobre cream-soft | `#FCEACE` |
| `--green-tint` | green 14 % sobre cream-soft | `#D8E9D3` |
| `--blue-tint` | blue 14 % sobre cream-soft | `#D8E0EA` |
| `--cream-soft` | crema clarificada para superficies | `#FBF3EB` |
| `--ink-soft` | texto secundario | `rgba(26,26,26,.72)` |
| `--line` | líneas finas | `rgba(26,26,26,.14)` |

Regla: la página vive sobre crema (`--cream` o `--cream-soft`). Los bloques de alto contraste
usan `--ink` con texto crema. Los bloques de color pleno (rosa, azul, verde, etc.) llevan texto
`--ink` o `--cream` según contraste (ver §9).

### Combinaciones logotipo / fondo validadas

- Sobre blanco o crema: logotipo negro o a color.
- Sobre negro: logotipo blanco/crema o a color con letras claras.
- Sobre amarillo: logotipo negro con R blanca.
- Sobre verde: logotipo blanco/crema con R negra.
- Sobre rosa: logotipo crema con R verde. Sobre azul: crema con R naranja. Sobre amarillo: negro con R morada.

---

## 4. Tipografía

Familia única: **Golos Text** (Google Fonts, variable 400–900). Se autoaloja en `public/fonts/`.
Fallback: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

| Nivel | Peso | Tamaño desktop | Tamaño móvil | Line-height | Tracking |
|---|---|---|---|---|---|
| Display / H1 | 700 (bold) | 64–72 px (`clamp(2.5rem, 5.5vw, 4.5rem)`) | 40 px | 1.02 | -0.03em |
| H2 | 600 (semi-bold) | 44–52 px | 32 px | 1.08 | -0.025em |
| H3 | 400 (regular) | 28 px | 22 px | 1.2 | -0.015em |
| Eyebrow / etiqueta | 600 | 14 px | 13 px | 1.2 | +0.02em |
| Body L | 400 | 20 px | 18 px | 1.55 | 0 |
| Body | 400 | 17 px | 16 px | 1.6 | 0 |
| Small | 400 | 14 px | 14 px | 1.5 | 0 |

Reglas:

- H1 siempre bold; H2 siempre semi-bold; H3 siempre regular. No inventar pesos intermedios en títulos.
- Negritas dentro de párrafos: 600.
- Los títulos pueden llevar **una o dos palabras en color de acento** (azul, verde, rosa, naranja). Máximo dos colores por título. La palabra coloreada es la que aporta el concepto clave (ej. "desafíos", "oportunidades", "todos participan").
- Bajo los H2 de sección puede ir un **subrayado orgánico** (trazo curvo a mano, naranja o amarillo, 2–3 px, 120–200 px de ancho). Se implementa como SVG inline.
- El **eyebrow** de sección va en azul, con una línea corta azul de 32 px debajo.
- No se usan serifas. La presentación de servicios usa una serifa en algunos títulos, pero el brandbook establece Golos Text; la web sigue el brandbook.

---

## 5. Logotipo

Construcción tipográfica; la "R" con el gesto curvo es la marca registrada del sistema.

Versiones (archivos web en `public/brand/logo/`):

| Archivo | Uso |
|---|---|
| `horizontal-negro.png` | Navbar sobre crema/blanco. Footer sobre crema. |
| `horizontal-blanco.png` | Sobre fondos negros o de color oscuro. |
| `horizontal-color.png` | Solo en piezas destacadas (hero, footer oscuro). No en navbar pequeño. |
| `horizontal-r-azul.png` / `horizontal-r-rosa.png` | Variantes con R de acento, para destacar. |
| `caja-color.png` | Logotipo apilado en 3 líneas (IN / TRO / PIA) a color. Versión hero, favicon grande, esquinas de sección. |
| `caja-negro.png` / `caja-blanco.png` | Apilado monocromo. |

Reglas:

- **Margen de seguridad**: alrededor del logotipo se reserva un área libre igual a la altura de la letra "R" del propio logotipo. Nada (texto, formas, fotos) invade ese margen.
- Tamaño mínimo: horizontal 110 px de ancho en pantalla; apilado 56 px de alto.
- Nunca deformar, rotar, agregar sombra o cambiar los colores de las letras.
- Sobre fotografía solo la versión monocroma (negro o blanco) con contraste suficiente.
- Favicon: versión apilada a color sobre crema.
- El apilado a color en esquina superior derecha es el patrón de las piezas de la marca (todas las láminas lo llevan). En web se usa el horizontal en la navbar y el apilado como firma en el footer o el hero.

---

## 6. Sistema de formas

Cinco piezas geométricas × seis colores. Son "piezas físicas que conviven en un mismo espacio" y
remiten al juego serio (LEGO, bloques). Archivos en `public/brand/formas/` con nombre
`{forma}-{color}.png`.

| Forma | Archivo | Lectura |
|---|---|---|
| Semicírculo (cuenco) | `semicirculo-*` | Contención, escucha. |
| Círculo | `circulo-*` | Persona, punto de partida. |
| Triángulo rectángulo | `triangulo-*` | Dirección, avance. |
| Cuadrado | `cuadrado-*` | Estructura, base. |
| Arco (túnel) | `arco-*` | Persona/puerta, acompañamiento. |

Colores: rosa, azul, verde, morado, amarillo, naranja.

Conjuntos ya compuestos (usar tal cual, son la composición oficial): `conjunto-01.png`,
`conjunto-02.png`, `conjunto-03.png`.

**Principio central (indicación directa de Gabriela, dueña de Intropia):** las figuras deben
**complementarse y sostenerse entre sí**. Se tienen que ver como piezas que se apoyan una en la
otra y que, juntas, **arman algo más grande** que cada pieza por separado. Es la metáfora de la
marca: personas y equipos distintos que, bien dispuestos, construyen una organización. Toda
composición de formas del sitio (hero, footer, ilustraciones de sección) debe leerse así: un
semicírculo descansa sobre un cuadrado, un triángulo se apoya contra un arco, un círculo corona
el conjunto. Nunca piezas dispersas al azar.

Reglas de composición (brandbook, "Formas"):

1. Se combinan y **apilan con lógica física**: las piezas descansan unas sobre otras como bloques reales, con gravedad. Nada flota sin apoyo, salvo un círculo aislado como acento.
2. **Separación mínima** entre piezas (aprox. 3–4 % del tamaño de la pieza). Las formas **no se tocan ni se superponen**.
3. Cada composición usa 3 a 6 piezas y **no repite color** dentro del grupo.
4. Todas las esquinas llevan un radio pequeño (~2 % del lado); las piezas nunca tienen esquinas vivas ni bordes.
5. Las formas pueden ir dentro de cajas y contenedores de color; en ese caso una sola forma, grande, sobresaliendo del borde (ver §7).
6. Las formas también funcionan como **viñetas** al lado de una palabra clave en un título ("Construir ● para ▲ transformar & cohesionar.") con tamaño igual a la altura de la x mayúscula.
7. Sobre fondos de color pleno las formas se vuelven monocromas (crema o negro) y un solo acento de color (ver "Identidad visual 04", lámina de 6 aplicaciones).

En web se implementan como SVG inline (mejor nitidez y animación) replicando exactamente estas
proporciones; los PNG quedan como respaldo.

---

## 7. Formas lineales (bucles), cajas y fondos

**Bucles.** Trazo continuo grueso (~8 % del alto de la pieza) que dibuja lazos. Representa
recorridos, conexiones y procesos en desarrollo; se asocia a la gestión del cambio y al
acompañamiento continuo. Siempre en **negro sobre rosa/morado/verde/crema** o en **crema sobre
naranja/amarillo/azul/negro**. Nunca en un tercer color. Recortado por el borde del contenedor.

**Cajas** (`public/brand/cajas/caja-XX.png`, 1044×432). Contenedores con radio ~12 px:

| Serie | Descripción | Uso sugerido |
|---|---|---|
| caja-01…06 | Color pleno + bucle grande recortado | Destacados de procesos de acompañamiento (gestión del cambio). |
| caja-13…18 | Color pleno + bucle pequeño en esquina derecha | Chips / tarjetas de metodología. |
| caja-07…12 | Negro o crema + una forma geométrica grande que sobresale | Comunicación general y talleres. |
| caja-19…24 | Negro o crema + forma pequeña en esquina | Ítems de lista, tarjetas compactas. |

El brandbook diferencia dos registros: **"Comunicación general y talleres"** usa cajas negro/crema
con formas geométricas; **"Procesos de acompañamiento"** usa cajas de color con bucles. La web
aplica esta distinción: la línea Gestión del Cambio se viste con bucles; la línea Talleres con
formas geométricas.

**Fondos** (`public/brand/fondos/`, 1920 px). Full-bleed para secciones o hero:

- fondo-01…08: color pleno + bucle grande a la izquierda (rosa, morado, naranja, amarillo, verde, azul, crema, negro).
- fondo-09…14: crema o negro + conjunto de formas abajo a la derecha.
- fondo-15…22: color pleno + bucle pequeño en esquina (versiones limpias para texto).

Todos incluyen el logotipo apilado arriba a la derecha, por lo que si se usan como fondo de
sección **no se repite el logo** encima.

---

## 8. Componentes web

Todos los componentes derivan de las láminas de la presentación de servicios y de los mockups
web/móvil del brandbook.

**Navbar.** Fondo crema con leve blur al hacer scroll. Logotipo horizontal negro (altura 22 px).
Links en Golos 500, 15 px. CTA "Conversemos" como botón negro pill. Móvil: hamburguesa.

**Botones.**
- Primario: fondo `--ink`, texto `--cream`, radio 999 px (pill), padding 14×24, Golos 600 16 px. Hover: fondo `--blue`.
- Secundario: borde 1.5 px `--ink`, texto `--ink`, transparente. Hover: fondo `--ink`, texto crema.
- Sobre fondo negro: invertir (crema con texto negro).
- Nunca degradados ni sombras difusas.

**Encabezado de sección.** Eyebrow azul 600 + línea azul de 32×2 px debajo → H2 con 1–2 palabras
en acento → subrayado orgánico opcional → párrafo intro máximo 60 caracteres por línea.

**Tarjeta de servicio / valor.** Fondo `*-tint`, radio 20 px, sin borde ni sombra. Ícono lineal
(stroke 1.75 px) en color de acento dentro de círculo del mismo tinte. Título Golos 600 20 px en
el color de acento. Lista con viñetas circulares del mismo color.

**Tarjeta de proceso (pasos).** Fondo `--cream-soft`, borde 1 px `--line`, radio 16 px. Número
en círculo de acento (24 px), título 600 en acento, línea corta debajo, texto small. Conectadas
por flechas punteadas horizontales en desktop y verticales en móvil.

**Chips de metodología.** Cajas de color con bucle (serie 13–18) con texto Golos 600 en negro o
crema según fondo.

**Bloque cita / convicción.** Fondo `--ink`, texto crema, H2 con palabra en rosa o amarillo,
bucle crema recortado en un costado.

**Caso de experiencia.** Tarjeta blanca/crema-soft con foto 4:3 radio 12 px, chip de contexto
(tinte), y tres bloques etiquetados "Desafío", "Cómo acompañamos", "Resultado" separados por
líneas de acento.

**Formulario de contacto.** Campos con solo línea inferior negra (como el mockup móvil), label
small encima, sin cajas. Botón primario.

**Footer.** Fondo `--ink`. Logotipo apilado a color. Tagline "Transformamos desafíos en
capacidades." Datos de contacto. Conjunto de formas abajo a la derecha.

**Radios.** Pill para botones; 20 px tarjetas grandes; 12–16 px tarjetas pequeñas y fotos.

**Espaciado.** Escala de 4 px. Secciones: 96–128 px de padding vertical en desktop, 64 px en
móvil. Contenedor máximo 1200 px con padding lateral 24 px (móvil) / 40 px (desktop).

**Iconografía.** Íconos lineales monocolor (stroke 1.75, esquinas redondeadas), estilo de la
presentación de servicios. Se dibujan en SVG inline con `currentColor`.

**Movimiento.** Sutil y "físico": las formas entran con un pequeño desplazamiento vertical y
easing suave (300–500 ms). Nada rebota ni gira. Respetar `prefers-reduced-motion`.

---

## 9. Accesibilidad y contraste

- Texto sobre crema: solo `--ink`, `--blue` (7.2:1), `--green` (3.7:1, usar ≥ 18 px o 600) y `--purple` (4.6:1). El rosa (2.9:1), naranja (2.4:1) y amarillo (1.7:1) **no se usan para texto pequeño sobre crema**; solo para títulos ≥ 28 px bold o como viñetas/formas.
- Texto sobre negro: crema o blanco. Rosa, amarillo, naranja y verde funcionan como acento en títulos grandes.
- Texto sobre rosa/amarillo/naranja/verde: negro. Sobre azul y morado: crema.
- Foco visible: outline 2 px `--blue` con offset 3 px.
- Imágenes decorativas (formas, bucles) llevan `aria-hidden`.

---

## 10. Estructura del sitio (v1)

Página única con anclas, en español (Chile):

1. **Hero**: "¿Está tu organización preparada para convertir los desafíos en oportunidades?" + conjunto de formas.
2. **Nuestra convicción**: "Los desafíos seguirán cambiando. La preparación de las organizaciones no puede quedarse atrás." Tres focos: preparar equipos, fortalecer líderes, desarrollar organizaciones.
3. **Cómo trabajamos**: "No creemos en recetas." Escuchamos → Co-creamos → Adaptamos → Fortalecemos.
4. **Servicios** (dos líneas): Gestión del Cambio (acompañamiento estratégico, proyectos de mediano y largo plazo) y Talleres & Programas (LEGO® Serious Play, team building, liderazgo, desarrollo organizacional, estratégicos, train the trainers).
5. **Dónde aportamos valor**: transformación digital, liderazgo movilizador, equipos que evolucionan, estrategia compartida, capacidades para el futuro.
6. **Metodologías**: LEGO® Serious Play (proceso de 5 pasos), Facilitación, Liberating Structures, World Café, Design Thinking, Gestión del Cambio.
7. **Experiencia en acción**: 5 casos con foto.
8. **Galería**: fotos y videos de actividades (a completar con material de Gabriela).
9. **Quiénes somos**: propósito, Gabriela Alvarado, alianza con Inligo.
10. **Contacto**: "¿Cuál es el próximo desafío de tu organización?" Correo, teléfono/WhatsApp, formulario.

---

## 11. Checklist antes de publicar cualquier pantalla

- [ ] Solo Golos Text. H1 700 / H2 600 / H3 400.
- [ ] Solo los 8 colores + tintes definidos. Ningún color inventado.
- [ ] Formas: sin tocarse, con separación, apiladas con lógica física, esquinas redondeadas, sin repetir color en el grupo.
- [ ] Bucles solo en negro o crema.
- [ ] Logotipo con margen de seguridad y sin alteraciones.
- [ ] Contraste según §9.
- [ ] Tono cercano y concreto; keywords presentes; sin épica.
