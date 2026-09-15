/**
 * Contenido del sitio. Fuente: "Presentación servicios Intropia_2026.pdf",
 * brandbook (al).Contrario y conversación con Gabriela Alvarado.
 * Tono: cercano y concreto, verbos de acción, sin épica (ver design/DESIGN-SYSTEM.md §2).
 */

export type Accent = 'blue' | 'green' | 'pink' | 'purple' | 'orange' | 'yellow';

export const site = {
  name: 'Intropia',
  tagline: 'Transformamos desafíos en capacidades.',
  claim: 'Construir para transformar & cohesionar.',
  url: 'https://www.intropia.cl',
  email: 'gabrielaalvarado@inligo.cl',
  phone: '+56 9 3777 8897',
  phoneRaw: '56937778897',
  whatsapp: 'https://wa.me/56937778897',
  founder: 'Gabriela Alvarado',
  partner: { name: 'Inligo', url: 'https://www.inligo.cl' },
};

export const nav = [
  { href: '#nosotros', label: 'Quiénes somos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodologias', label: 'Metodologías' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
];

export const hero = {
  title: [
    { text: '¿Está tu ' },
    { text: 'organización', accent: 'pink' as Accent },
    { text: ' preparada para convertir los ' },
    { text: 'desafíos', accent: 'blue' as Accent },
    { text: ' en ' },
    { text: 'oportunidades', accent: 'green' as Accent },
    { text: '?' },
  ],
  lead: 'Acompañamos a las organizaciones a desarrollar capacidades, movilizar personas y construir transformaciones que perduran.',
  primary: { label: 'Conversemos', href: '#contacto' },
  secondary: { label: 'Ver servicios', href: '#servicios' },
};

export const conviction = {
  eyebrow: 'Nuestra convicción',
  title: [
    { text: 'Los ' },
    { text: 'desafíos', accent: 'blue' as Accent },
    { text: ' seguirán cambiando. La ' },
    { text: 'preparación', accent: 'pink' as Accent },
    { text: ' de las organizaciones no puede quedarse atrás.' },
  ],
  lead: 'La tecnología evoluciona. Las prioridades del negocio también. La diferencia estará en las organizaciones que preparen a sus personas para aprender, colaborar y responder con confianza a lo que viene.',
  pillars: [
    {
      accent: 'green' as Accent,
      title: 'Preparar equipos',
      text: 'para que se sientan con las habilidades y capacidades para responder a cada desafío.',
    },
    {
      accent: 'blue' as Accent,
      title: 'Fortalecer líderes',
      text: 'para movilizar e inspirar a las personas en contextos de transformación.',
    },
    {
      accent: 'orange' as Accent,
      title: 'Desarrollar organizaciones',
      text: 'que aprenden, se adaptan y evolucionan de forma continua.',
    },
  ],
};

export const approach = {
  eyebrow: '¿Cómo construimos esa preparación?',
  title: [
    { text: 'No creemos en recetas. ' },
    { text: 'Creemos en soluciones', accent: 'green' as Accent },
    { text: ' que nacen del desafío de cada organización.' },
  ],
  lead: 'No partimos de una metodología. Partimos de comprender el desafío y diseñamos la mejor manera de abordarlo junto a las personas.',
  closing: [
    { text: 'Las soluciones deben adaptarse a cada organización. ' },
    { text: 'Nunca al revés.', accent: 'blue' as Accent },
  ],
  steps: [
    {
      icon: 'chat',
      accent: 'blue' as Accent,
      title: 'Escuchamos',
      text: 'Cada organización enfrenta desafíos distintos.',
    },
    {
      icon: 'people',
      accent: 'green' as Accent,
      title: 'Co-creamos',
      text: 'Las mejores soluciones se construyen con las personas.',
    },
    {
      icon: 'bulb',
      accent: 'purple' as Accent,
      title: 'Adaptamos',
      text: 'Elegimos la metodología que mejor responde al desafío, no al revés.',
    },
    {
      icon: 'hands',
      accent: 'orange' as Accent,
      title: 'Fortalecemos',
      text: 'Buscamos que cada intervención deje a la organización mejor preparada para lo que viene.',
    },
  ],
};

export const services = {
  eyebrow: 'Nuestros servicios',
  title: [
    { text: 'Dos formas de ' },
    { text: 'acompañar', accent: 'blue' as Accent },
    { text: ' a tu organización.' },
  ],
  lead: 'Un mismo criterio para ambas: comprender el desafío primero y construir la respuesta junto a las personas.',
  lines: [
    {
      id: 'gestion-del-cambio',
      kind: 'acompanamiento' as const,
      accent: 'blue' as Accent,
      label: 'Gestión del Cambio',
      title: 'Acompañamiento estratégico para proyectos de mediano y largo plazo.',
      text: 'Los proyectos pueden estar perfectamente diseñados. Pero la transformación solo ocurre cuando las personas la hacen propia. Acompañamos el proyecto completo: desde comprender el contexto hasta consolidar la adopción.',
      bullets: [
        'Implementaciones tecnológicas (ERP, plataformas, sistemas World Class)',
        'Programas de transformación y rediseño organizacional',
        'Estrategia de adopción, comunicación y red de embajadores',
        'Medición de adopción y sostenibilidad del cambio',
      ],
      cta: { label: 'Ver nuestro enfoque', href: '#enfoque-cambio' },
    },
    {
      id: 'talleres',
      kind: 'talleres' as const,
      accent: 'pink' as Accent,
      label: 'Talleres & Programas',
      title: 'Experiencias participativas para equipos, líderes y organizaciones.',
      text: 'Desde un taller de cuatro horas hasta un programa de varios meses. Trabajamos con metodologías participativas donde las personas construyen, conversan y deciden con las manos.',
      bullets: [
        'Talleres con LEGO® Serious Play',
        'Team building y cohesión de equipos',
        'Programas de liderazgo y desarrollo organizacional',
        'Talleres estratégicos y de alineamiento',
        'Train the Trainers: formación de facilitadores internos',
        'Programa de oratoria y liderazgo',
      ],
      cta: { label: 'Ver metodologías', href: '#metodologias' },
    },
  ],
};

export const changeManagement = {
  eyebrow: 'Gestión del cambio',
  title: [
    { text: 'Los proyectos pueden estar perfectamente diseñados. Pero ' },
    { text: 'la transformación', accent: 'blue' as Accent },
    { text: ' solo ocurre cuando las personas ' },
    { text: 'la hacen propia', accent: 'green' as Accent },
    { text: '.' },
  ],
  phasesLabel: 'Nuestro enfoque',
  phases: [
    { accent: 'green' as Accent, icon: 'search-people', title: 'Comprender', items: ['Contexto', 'Personas', 'Impacto'] },
    { accent: 'blue' as Accent, icon: 'strategy', title: 'Preparar', items: ['Estrategia', 'Adopción', 'Plan'] },
    { accent: 'orange' as Accent, icon: 'megaphone-people', title: 'Movilizar', items: ['Liderazgo', 'Compromiso', 'Acción'] },
    { accent: 'purple' as Accent, icon: 'hand-person', title: 'Acompañar', items: ['Herramientas', 'Seguimiento', 'Adopción'] },
    { accent: 'green' as Accent, icon: 'chart-up', title: 'Consolidar', items: ['Medición', 'Aprendizaje', 'Sostenibilidad'] },
  ],
  toolsLabel: 'Herramientas que utilizamos',
  tools: [
    { icon: 'star', accent: 'purple' as Accent, label: 'Patrocinio ejecutivo' },
    { icon: 'network', accent: 'green' as Accent, label: 'Gestión de stakeholders' },
    { icon: 'megaphone', accent: 'blue' as Accent, label: 'Plan de comunicación' },
    { icon: 'people', accent: 'orange' as Accent, label: 'ADKAR' },
    { icon: 'chart-up', accent: 'pink' as Accent, label: 'Medición de adopción' },
  ],
};

export const valueAreas = {
  eyebrow: 'Dónde aportamos valor',
  title: [
    { text: 'Cada desafío pone a prueba ' },
    { text: 'capacidades', accent: 'green' as Accent },
    { text: ' distintas.' },
  ],
  lead: 'Por eso acompañamos a las organizaciones donde nos necesitan: preparar personas, fortalecer equipos, movilizar líderes y desarrollar las capacidades necesarias para enfrentar lo que viene.',
  areas: [
    {
      accent: 'green' as Accent,
      icon: 'devices',
      title: 'Transformación digital',
      items: ['Adopción de nuevas tecnologías', 'Nuevas formas de trabajo', 'Transformación sostenible'],
    },
    {
      accent: 'blue' as Accent,
      icon: 'leader',
      title: 'Liderazgo movilizador',
      items: ['Confianza', 'Movilización', 'Acompañamiento del cambio'],
    },
    {
      accent: 'orange' as Accent,
      icon: 'people',
      title: 'Equipos que evolucionan',
      items: ['Colaboración', 'Adaptabilidad', 'Aprendizaje continuo'],
    },
    {
      accent: 'pink' as Accent,
      icon: 'compass',
      title: 'Estrategia compartida',
      items: ['Comprender la estrategia', 'Alinear la organización', 'Movilizar la ejecución'],
    },
    {
      accent: 'purple' as Accent,
      icon: 'bars',
      title: 'Capacidades para el futuro',
      items: ['Nuevas habilidades', 'Aprendizaje', 'Evolución continua'],
    },
  ],
};

export const methodologies = {
  eyebrow: 'Metodologías',
  title: [
    { text: 'Cómo hacemos que el cambio ' },
    { text: 'cobre sentido', accent: 'blue' as Accent },
    { text: '.' },
  ],
  lead: 'Combinamos distintas metodologías según el desafío, las personas y el contexto de cada organización.',
  lsp: {
    label: 'LEGO® Serious Play®',
    title: [
      { text: 'Las mejores ideas surgen cuando ' },
      { text: 'todos participan', accent: 'pink' as Accent },
      { text: '.' },
    ],
    text: 'Utilizamos la metodología LEGO® Serious Play® para facilitar conversaciones significativas, desbloquear perspectivas y generar soluciones creativas a desafíos complejos.',
    processLabel: 'El proceso',
    steps: [
      { accent: 'green' as Accent, icon: 'search-people', title: 'Explorar', text: 'Entendemos el desafío, el contexto y las necesidades del equipo.' },
      { accent: 'blue' as Accent, icon: 'brick', title: 'Construir', text: 'A través de la construcción con LEGO®, las personas expresan ideas, experiencias y perspectivas.' },
      { accent: 'orange' as Accent, icon: 'chat-people', title: 'Reflexionar', text: 'Facilitamos el diálogo para compartir significados, descubrir insights y generar comprensión colectiva.' },
      { accent: 'purple' as Accent, icon: 'target', title: 'Decidir', text: 'Transformamos los aprendizajes en acuerdos, prioridades y acciones concretas de alto impacto.' },
      { accent: 'green' as Accent, icon: 'chart-up', title: 'Actuar', text: 'Acompañamos la puesta en marcha y sostenemos el cambio para que los resultados se traduzcan en valor.' },
    ],
    applicationsLabel: 'Algunas aplicaciones de la metodología',
    applications: [
      { label: 'Team Building', accent: 'green' as Accent },
      { label: 'Innovación', accent: 'blue' as Accent },
      { label: 'Diseño de soluciones', accent: 'orange' as Accent },
      { label: 'Conversaciones difíciles', accent: 'purple' as Accent },
      { label: 'Alineamiento estratégico', accent: 'pink' as Accent },
    ],
  },
  othersTitle: 'Otras metodologías que complementan nuestro trabajo',
  othersLead: 'Dependiendo del desafío, incorporamos metodologías participativas que fortalecen la colaboración y la construcción conjunta de soluciones.',
  others: [
    { accent: 'blue' as Accent, icon: 'chat-people', title: 'Facilitación', text: 'Creamos espacios de conversación estructurados para alinear equipos, tomar decisiones y movilizar acciones.' },
    { accent: 'orange' as Accent, icon: 'network', title: 'Liberating Structures', text: 'Microestructuras participativas que amplían la participación y generan conversaciones más inclusivas y efectivas.' },
    { accent: 'purple' as Accent, icon: 'people', title: 'World Café', text: 'Conversaciones colaborativas para recoger perspectivas diversas y construir comprensión compartida.' },
    { accent: 'green' as Accent, icon: 'bulb-heart', title: 'Design Thinking', text: 'Enfoque centrado en las personas para comprender problemas, explorar ideas y diseñar soluciones de alto valor.' },
    { accent: 'pink' as Accent, icon: 'megaphone-people', title: 'Programa Train the Trainers', text: 'Formamos facilitadores internos para diseñar y conducir experiencias de aprendizaje, integrando oratoria, educación de adultos, facilitación y manejo de grupos.' },
    { accent: 'orange' as Accent, icon: 'megaphone', title: 'Programa de liderazgo y oratoria', text: 'Fortalecemos la capacidad de liderar con éxito, comunicar de forma clara, persuasiva y eficaz, y generar impacto en equipos y organizaciones.' },
  ],
};

export const experience = {
  eyebrow: 'Nuestra experiencia en acción',
  title: [
    { text: 'Las metodologías cobran sentido cuando generan ' },
    { text: 'resultados', accent: 'orange' as Accent },
    { text: '.' },
  ],
  lead: 'Estas son algunas de las experiencias donde las hemos llevado a la práctica.',
  cases: [
    {
      accent: 'blue' as Accent,
      title: 'Movilizar una transformación',
      context: 'Implementación de un ERP',
      image: '/casos/erp.jpg',
      challenge: 'Movilizar a 55 personas clave para liderar la implementación de un ERP que impactaría a más de 1.100 colaboradores en toda la organización.',
      how: 'Diseñamos una estrategia integral de Gestión del Cambio con narrativa, comunicación, workshops, capacitación y red de embajadores.',
      result: 'Un equipo preparado para liderar la adopción del nuevo sistema en toda la organización.',
    },
    {
      accent: 'green' as Accent,
      title: 'Alinear un equipo remoto',
      context: 'Implementación de una plataforma tecnológica',
      image: '/casos/plataforma.jpg',
      challenge: 'Construir relaciones y confianza en un equipo 100% remoto que debía colaborar en la implementación de una nueva plataforma tecnológica, donde muchos de sus integrantes no se conocían.',
      how: 'Workshop con LEGO® Serious Play® para fortalecer vínculos y construir una visión compartida del proyecto.',
      result: 'Un equipo más conectado y preparado para colaborar durante toda la iniciativa.',
    },
    {
      accent: 'purple' as Accent,
      title: 'Escuchar a los stakeholders antes de transformar',
      context: 'Programa de Transformación',
      image: '/casos/stakeholders.jpg',
      challenge: 'Comprender las expectativas, preocupaciones y riesgos de los principales stakeholders antes de iniciar un Programa de Transformación.',
      how: 'Facilitamos un World Café para recoger perspectivas y construir una mirada compartida.',
      result: 'Los hallazgos guiaron el diseño del programa y la estrategia de Gestión del Cambio.',
    },
    {
      accent: 'orange' as Accent,
      title: 'Capitalizar los aprendizajes',
      context: 'Implementación de un sistema World Class',
      image: '/casos/world-class.jpg',
      challenge: 'Cerrar la implementación de un sistema World Class, rescatando aprendizajes y dejando capacidades para futuras iniciativas.',
      how: 'Diseñamos una retrospectiva participativa para identificar aprendizajes y construir el legado del proyecto.',
      result: 'Buenas prácticas, recomendaciones y el legado del proyecto documentados como referencia para futuras transformaciones.',
    },
    {
      accent: 'pink' as Accent,
      title: 'Fortalecer líderes del cambio',
      context: 'Programa de desarrollo de líderes · Colombia',
      image: '/casos/lideres-colombia.jpg',
      challenge: 'Fortalecer las capacidades de los participantes del Programa de Líderes de la compañía para incorporar la Gestión del Cambio en sus desafíos.',
      how: 'Taller experiencial con metodologías participativas y aplicación directa a desafíos reales de la organización.',
      result: 'Líderes con herramientas prácticas para movilizar personas e incorporar la Gestión del Cambio en sus iniciativas.',
    },
  ],
};

export const gallery = {
  eyebrow: 'Así se ve un taller Intropia',
  title: [
    { text: 'Pensamos ' },
    { text: 'con las manos', accent: 'yellow' as Accent },
    { text: '.' },
  ],
  lead: 'Lo nuestro es lúdico e interactivo: construimos, conversamos y decidimos en la misma mesa.',
  phrases: ['Expansión ordenada.', 'Pensamos con las manos.', 'Cambio que se queda.', 'Es mejor con todos.', 'Diseña la respuesta.', 'Prueba otra vez.'],
};

export const about = {
  eyebrow: 'Quiénes somos',
  title: [
    { text: 'Acompañamos a las organizaciones para que las personas ' },
    { text: 'crezcan con el cambio', accent: 'pink' as Accent },
    { text: ' y las transformaciones ' },
    { text: 'perduren', accent: 'yellow' as Accent },
    { text: '.' },
  ],
  text: 'Las empresas invierten en tecnología, procesos y estrategia para lograr una transformación. Pero el desafío real casi nunca está en la solución técnica, sino en lograr que las personas comprendan el cambio, confíen en él y lo incorporen a su forma de trabajar. En Intropia diseñamos estrategias y creamos experiencias que disminuyen la incertidumbre, fortalecen el liderazgo e involucran a las personas, hasta convertir la transformación en una capacidad propia de la organización.',
  pillars: [
    { accent: 'blue' as Accent, title: 'Construir para transformar', text: 'Convertimos conversaciones difíciles en algo que se puede tocar, mover y discutir en grupo.' },
    { accent: 'green' as Accent, title: 'Construimos la capacidad de cambio', text: 'Acompañamos el tiempo suficiente para que la transformación se sostenga más allá de una sesión aislada.' },
    { accent: 'orange' as Accent, title: 'Construimos con las personas', text: 'No imponemos soluciones. Escuchamos antes de proponer y co-construimos desde el contexto de cada cliente.' },
  ],
  founder: {
    name: 'Gabriela Alvarado',
    role: 'Fundadora y consultora principal',
    text: 'Consultora en gestión del cambio y desarrollo organizacional. Facilita procesos de transformación y talleres con metodologías participativas como LEGO® Serious Play®, acompañando a equipos en Chile y Latinoamérica.',
    partnerNote: 'Intropia trabaja en alianza con Inligo, consultora socia en proyectos de transformación.',
  },
};

export const contact = {
  eyebrow: 'Conversemos',
  title: [
    { text: '¿Cuál es el próximo ' },
    { text: 'desafío', accent: 'blue' as Accent },
    { text: ' de tu organización?' },
  ],
  lead: 'Cada organización enfrenta desafíos distintos. Creemos que las mejores respuestas se construyen en conjunto.',
  promises: [
    { accent: 'green' as Accent, icon: 'search-people', label: 'Preparar personas.' },
    { accent: 'blue' as Accent, icon: 'people', label: 'Movilizar equipos.' },
    { accent: 'orange' as Accent, icon: 'star', label: 'Fortalecer organizaciones.' },
  ],
  form: {
    name: 'Nombre',
    company: 'Empresa',
    email: 'Correo',
    message: '¿Qué desafío quieres abordar?',
    submit: 'Enviar mensaje',
    hint: 'Al enviar se abrirá tu correo con el mensaje listo. También puedes escribirnos directo por WhatsApp.',
  },
};
