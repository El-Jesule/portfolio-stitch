export const PROJECTS = [
  {
    id: "rutas-deportivas",
    title: "RutasDeportivas",
    shortTitle: "RutasDeportivas",
    description:
      "Aplicación web para planificar y personalizar rutas deportivas sobre mapas interactivos. Calcula distancia, tiempo, calorías, pasos y desnivel según la actividad y el usuario. Incluye cuentas de usuario, rutas guardadas y datos meteorológicos en tiempo real.",
    shortDescription:
      "Aplicación web para planificar y personalizar rutas deportivas sobre mapas interactivos. Calcula distancia, tiempo, calorías, pasos y desnivel según la actividad y el usuario. Incluye cuentas de usuario, rutas guardadas y datos meteorológicos en tiempo real.",
    image: "/images/projects/rutas-deportivas.png",
    alt: "Captura de RutasDeportivas: mapa de Madrid con panel de Configuración y Resultados",
    tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Leaflet"],
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com/El-Jesule/RutasDeportivas",
    liveUrl: "https://rutas-deportivas.vercel.app/",
  },
  {
    id: "okydoky",
    title: "OkyDoky",
    shortTitle: "OkyDoky",
    description:
      "Marketplace desarrollado con React que presenta un catálogo de productos consumido desde una API externa. Incluye filtrado por categorías, navegación multipágina, usuarios y contenido editorial de la marca. Cuenta con diseño responsive, gestión de estados asíncronos y arquitectura basada en componentes reutilizables.",
    shortDescription:
      "Marketplace desarrollado con React que presenta un catálogo de productos consumido desde una API externa. Incluye filtrado por categorías, navegación multipágina, usuarios y contenido editorial de la marca. Cuenta con diseño responsive, gestión de estados asíncronos y arquitectura basada en componentes reutilizables.",
    image: "/images/projects/okydoky.png",
    alt: "Captura de OkyDoky: portada neón con OKYDOKY y sección Los 5 más exclusivos",
    tags: ["React 19", "JavaScript", "Vite", "React Router", "Axios", "ESLint"],
    category: "frontend",
    featured: true,
    githubUrl: "https://github.com/El-Jesule/tiendaOnlineOkyDoky",
    liveUrl: "https://tienda-online-okydoky.vercel.app/",
  },
  {
    id: "habitafactoria",
    title: "HabitaFactoría",
    shortTitle: "HabitaFactoría",
    description:
      "Portal web de alquiler de viviendas orientado a estudiantes en España. Permite explorar propiedades, consultar sus detalles y contactar con la agencia mediante una interfaz responsive. El proyecto incorpora React, Tailwind CSS, navegación dinámica y un sistema de datos semánticos.",
    shortDescription:
      "Portal web de alquiler de viviendas orientado a estudiantes en España. Permite explorar propiedades, consultar sus detalles y contactar con la agencia mediante una interfaz responsive. El proyecto incorpora React, Tailwind CSS, navegación dinámica y un sistema de datos semánticos.",
    image: "/images/projects/habitafactoria.png",
    alt: "Captura de HabitaFactoría: hero azul con mano entregando llaves y texto Gastos Incluidos",
    tags: ["React 19", "JavaScript", "Vite", "Tailwind CSS", "React Router", "Axios"],
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com/El-Jesule/La-Inmobiliaria",
    liveUrl: "https://habitafactoria.vercel.app/",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

export const PROJECT_DETAIL_MOCK = {
  id: "rutas-deportivas",
  title: "RutasDeportivas",
  summary:
    "Aplicación web para planificar y personalizar rutas deportivas sobre mapas interactivos. Calcula distancia, tiempo, calorías, pasos y desnivel según actividad y usuario.",
  heroImage: "/images/projects/rutas-deportivas.png",
  liveUrl: "https://rutas-deportivas.vercel.app/",
  githubUrl: "https://github.com/El-Jesule/RutasDeportivas",
  descriptionParagraphs: [
    "RutasDeportivas es una aplicación web orientada a la planificación de actividades deportivas al aire libre. Permite crear rutas directamente sobre un mapa y obtener información detallada del recorrido.",
    "El sistema calcula distancia, tiempo estimado, calorías, pasos y desnivel. También incorpora información meteorológica para los puntos de la ruta. Los usuarios pueden registrarse, gestionar su perfil y guardar sus rutas favoritas. La aplicación combina un frontend interactivo con una API REST y una base de datos. Se integraron diferentes servicios externos para mapas, rutas, geolocalización, elevación y meteorología. El proyecto fue desarrollado como Trabajo de Fin de Grado de Desarrollo de Aplicaciones Web.",
  ],
  problem:
    "Planificar una ruta deportiva puede requerir consultar diferentes herramientas para conocer su recorrido, distancia, desnivel, duración y condiciones meteorológicas. Esta dispersión de información dificulta preparar una actividad de forma rápida y personalizada.",
  solution:
    "RutasDeportivas centraliza toda esta información en una única aplicación. El usuario puede diseñar el recorrido sobre el mapa y obtener automáticamente las principales estadísticas necesarias para valorar y preparar la actividad.",
  timeline: [
    {
      label: "Análisis y definición de funcionalidades",
      description: "Análisis de los requisitos y definición de las funcionalidades principales.",
    },
    {
      label: "Arquitectura y mapas",
      description: "Diseño de la arquitectura frontend/backend e integración de mapas y servicios externos.",
    },
    {
      label: "Usuarios y cálculos",
      description:
        "Desarrollo del sistema de usuarios y persistencia de rutas, implementación de los cálculos y visualización de estadísticas.",
    },
    {
      label: "Pruebas y UX",
      description: "Pruebas y ajustes de la experiencia de usuario.",
    },
  ],
  techStack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Leaflet"],
  features: [
    "Creación de rutas sobre mapas interactivos",
    "Cálculo de distancia y tiempo estimado",
    "Estimación de calorías y pasos",
    "Perfil y análisis de elevación",
    "Información meteorológica en tiempo real",
    "Registro, autenticación y gestión de usuarios",
    "Guardado y recuperación de rutas",
    "Buscador de direcciones",
    "Modo oscuro",
    "Marcadores de ruta arrastrables",
  ],
  gallery: ["/images/projects/okydoky.png", "/images/projects/habitafactoria.png"],
};

export const PROJECT_DETAILS = {
  "rutas-deportivas": PROJECT_DETAIL_MOCK,
  okydoky: {
    id: "okydoky",
    title: "OkyDoky",
    summary:
      "Marketplace desarrollado con React que presenta un catálogo de productos consumido desde una API externa, con filtrado por categorías y arquitectura basada en componentes reutilizables.",
    heroImage: "/images/projects/okydoky.png",
    liveUrl: "https://tienda-online-okydoky.vercel.app/",
    githubUrl: "https://github.com/El-Jesule/tiendaOnlineOkyDoky",
    descriptionParagraphs: [
      "OKYDOKY es una SPA desarrollada durante el bootcamp con una identidad visual inspirada en la estética cyberpunk. La aplicación obtiene productos desde una API externa y los presenta mediante un catálogo interactivo.",
      "Los usuarios pueden filtrar los productos por categorías y consultar diferentes secciones de la marca. La interfaz utiliza componentes reutilizables para mantener una experiencia consistente. La navegación se gestiona mediante React Router y un layout compartido. Las peticiones HTTP están centralizadas mediante Axios y cuentan con gestión de estados de carga y error. También incorpora perfiles de usuarios, información sobre el equipo y una sección dedicada a la historia de la marca. Como funcionalidad adicional, incluye un widget meteorológico basado en geolocalización. El proyecto incorpora además tests unitarios y de integración.",
    ],
    problem:
      "Un catálogo online necesita presentar una cantidad variable de información procedente de una fuente externa sin sacrificar la claridad de navegación ni la experiencia del usuario.",
    solution:
      "OKYDOKY organiza los productos en un catálogo dinámico con filtrado por categorías, componentes reutilizables y estados de carga y error. La arquitectura permite separar la obtención de datos, la lógica y la presentación para facilitar el mantenimiento.",
    timeline: [
      {
        label: "Identidad y estructura",
        description: "Definición de la identidad visual y estructura del marketplace. Organización de la aplicación mediante componentes reutilizables.",
      },
      {
        label: "Catálogo y navegación",
        description: "Integración de la API externa de productos. Implementación de navegación y filtrado.",
      },
      {
        label: "Estados y páginas informativas",
        description:
          "Gestión de estados de carga y errores. Desarrollo de páginas informativas y elementos adicionales.",
      },
      {
        label: "Pruebas",
        description: "Incorporación de pruebas para componentes, servicios y rutas.",
      },
    ],
    techStack: ["React 19", "JavaScript", "Vite", "React Router", "Axios", "ESLint"],
    features: [
      "Catálogo de productos dinámico",
      "Filtrado por categorías",
      "Selección de productos destacados",
      "Perfiles de usuarios",
      "Página de historia de la marca",
      "Página del equipo",
      "Widget meteorológico opcional",
      "Gestión de estados de carga y error",
      "Diseño responsive",
      "Tests unitarios y de integración",
    ],
    gallery: ["/images/projects/rutas-deportivas.png", "/images/projects/habitafactoria.png"],
  },
  habitafactoria: {
    id: "habitafactoria",
    title: "HabitaFactoría",
    summary:
      "Portal web de alquiler de viviendas orientado a estudiantes en España, con catálogo de propiedades, fichas detalladas y contacto con la agencia.",
    heroImage: "/images/projects/habitafactoria.png",
    liveUrl: "https://habitafactoria.vercel.app/",
    githubUrl: "https://github.com/El-Jesule/La-Inmobiliaria",
    descriptionParagraphs: [
      "HabitaFactoría es un prototipo de portal inmobiliario orientado al alquiler de viviendas para estudiantes. La aplicación permite consultar un catálogo de propiedades y acceder a fichas detalladas de cada vivienda. Incluye información sobre precios, características, agentes y condiciones de las propiedades.",
      "También incorpora páginas informativas sobre la agencia y su equipo. La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla. El proyecto utiliza React y React Router para estructurar la aplicación y su navegación. Los datos inmobiliarios se gestionan actualmente mediante fixtures locales. Además, incorpora una pequeña aplicación de restaurante conectada a TheMealDB como funcionalidad adicional. El proyecto fue desarrollado siguiendo un sistema de diseño basado en tokens y una estructura semántica de componentes.",
    ],
    problem:
      "Los estudiantes que buscan alojamiento necesitan comparar rápidamente diferentes propiedades y disponer de información clara sobre precios, características y condiciones antes de contactar con una agencia.",
    solution:
      "HabitaFactoría propone una plataforma centralizada donde consultar propiedades, revisar sus características y contactar con la agencia desde una interfaz sencilla y responsive.",
    timeline: [
      {
        label: "Estructura y diseño",
        description: "Definición de la estructura y necesidades principales del portal. Diseño de la interfaz y sistema visual.",
      },
      {
        label: "Componentes y catálogo",
        description:
          "Creación de componentes reutilizables. Implementación del catálogo de propiedades y fichas individuales.",
      },
      {
        label: "Navegación y contacto",
        description: "Desarrollo de navegación responsive. Implementación del formulario de contacto.",
      },
      {
        label: "Funcionalidad adicional",
        description: "Integración de la aplicación complementaria de restaurante.",
      },
    ],
    techStack: ["React 19", "JavaScript", "Vite", "Tailwind CSS", "React Router", "Axios"],
    features: [
      "Catálogo de propiedades",
      "Búsqueda y listado de viviendas",
      "Fichas detalladas de propiedades",
      "Información de agentes y agencia",
      "Formulario de contacto",
      "Diseño responsive",
      "Mini-app de restaurante",
      "Carrito de pedidos",
      "Estados de carga, error y vacío",
      "Sistema de diseño mediante tokens",
    ],
    gallery: ["/images/projects/rutas-deportivas.png", "/images/projects/okydoky.png"],
  },
};

export const PROJECT_CATEGORIES = [
  { label: "Todos", value: "all" },
  { label: "React", value: "react" },
  { label: "Node.js", value: "node" },
  { label: "Python", value: "python" },
  { label: "Tailwind", value: "tailwind" },
];
