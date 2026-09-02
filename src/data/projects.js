export const PROJECTS = [
  {
    id: "ecommerce-architecture",
    title: "E-Commerce Architecture",
    shortTitle: "SaaS Dashboard",
    description:
      "Plataforma de comercio electrónico de alto rendimiento desarrollada con React y Node.js. Implementa pasarela de pagos, gestión de inventario en tiempo real y panel de administración avanzado.",
    shortDescription:
      "Plataforma analítica con visualización de datos en tiempo real.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIK9d6ri6TAIOjmqg4kNZfBvKlpVK1UXnTJtTxNDxXZsytU1sX4nAjHaks0kehJrM2MHBqk84s5o10ZhLK_5mYllZLDJgmeCrMRF9GCtAkiHw_wR8H3DsKpGZg2CoslkDp6HxzWJQsy9vHbcBykbgzawX6hTbvomVBoq3z6KN_yPrSn-jVv7GN2MnqmlxgFI_PnOu9YFdMuy-t1kYWXJir8xQfIBzVTCoxY1N3PP3_0P7f4xu2utXInw",
    alt: "Dashboard e-commerce moderno en dark mode con métricas técnicas",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    category: "fullstack",
    featured: true,
  },
  {
    id: "trail-tracker",
    title: "TrailTracker App",
    shortTitle: "E-Commerce Headless",
    description:
      "Aplicación web progresiva (PWA) para planificación y seguimiento de rutas deportivas. Integra mapas topográficos, cálculo de desnivel y funcionalidad offline para zonas montañosas.",
    shortDescription:
      "Tienda online ultrarrápida con arquitectura headless.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB66DTfRmqCZon6aIAUAEFLQ3AlrEvLW1Dk-coOs1V3LWnqQUzkPV79ZqrFnQbd82hSjHF96KqT4K5fUNu--Qy3Cz8NgwiNpOsardhs_csdBnl_9ZoDvN6bCF8w5OMVckzQxM8hLoNn8SymVokXV0JWvGBIVDKQxwk39TVZFGKD3xfgTYQnVWJvGIRYHqH8IN5QooEA4Yl1iyRpvKUh6KGPJM3qL8jz6HLoin4KxhIwF5tLx21l8ae7kA",
    alt: "Interfaz móvil de app de rutas con mapa topográfico",
    tags: ["Vue.js", "Python", "Mapbox GL", "PWA"],
    category: "frontend",
    featured: true,
  },
  {
    id: "findata-dashboard",
    title: "FinData Analytics Dashboard",
    shortTitle: "API de Integración",
    description:
      "Sistema de visualización de datos financieros en tiempo real. Procesa grandes volúmenes de datos transaccionales para generar insights visuales interactivos y reportes exportables.",
    shortDescription:
      "Servicio backend robusto para sincronización de datos empresariales.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZZjIhdDk6eCTFuha_J_a0yrEGh8ofrypEKjwgS9QWeAPL9EGBUo3mFKudgP0tK77T0rvtn6ZHtAPFtFVWlJAuS6OC60P--rtWyabz9q-ns1-AAMinI_wVr4zb6RLb3Z9A_JgwBgHJn_FFb2--KOEzt6GHmt6YBsqFpSn1wa7NznlY9XRAFetatpn4C-oEhuwR1IKrWdWlFsfKAru7SjeVGrjiwO0FxEp6H8MrrwNyQSlLlTdR7vSnmQ",
    alt: "Dashboard financiero con gráficos minimalistas en dark mode",
    tags: ["React", "D3.js", "Go", "Redis"],
    category: "backend",
    featured: true,
  },
  {
    id: "microservices-toolkit",
    title: "Microservices Toolkit",
    shortTitle: "Microservices Toolkit",
    description:
      "Colección de utilidades y patrones para arquitecturas de microservicios. Incluye descubrimiento de servicios, trazabilidad distribuida y resiliencia de red.",
    shortDescription:
      "Colección de utilidades para arquitecturas de microservicios.",
    image: null,
    icon: "hub",
    tags: ["Docker", "Kubernetes", "Rust"],
    category: "infra",
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

export const PROJECT_DETAIL_MOCK = {
  id: "distributed-architecture",
  title: "Sistema de Arquitectura Distribuida para Gestión de Datos a Gran Escala",
  summary:
    "Un rediseño completo de la infraestructura core enfocado en alta disponibilidad, reducción de latencia y procesamiento en tiempo real utilizando microservicios.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBAGxO14YTG9nXYfA6yllOZpAnEThXn04iGXKleFfn7PO9hO4kaOYZIHYkLmWjqVbLYeVF6ME1b996q2OEvcr1YBIWTra5ykhVbFxXl3NeftIwvyy4_dGieqUJj_qIhJaedue0xrPB2GWMbUOm-Gosod3YLoqoR77CVOOqHaS1utsSn4l9aQ3HKXggxS7rSEduPD4Lqn6if-xwmtyeSp0JnoI5W0el1f67lrqn5i6Y1mjxpebJvUHospQ",
  descriptionParagraphs: [
    "Este proyecto nació de la necesidad crítica de modernizar un monolito heredado que ya no soportaba la carga de usuarios concurrentes. El objetivo principal era diseñar una solución que no solo resolviera los cuellos de botella actuales, sino que estableciera una base técnica sólida para el crecimiento futuro.",
    "Se implementó un enfoque de Domain-Driven Design (DDD) para separar lógicamente los contextos y permitir que los equipos trabajaran de forma autónoma en diferentes servicios.",
  ],
  problem:
    "Tiempos de respuesta superiores a 3 segundos en endpoints críticos, caídas frecuentes durante picos de tráfico y una deuda técnica que impedía despliegues rápidos.",
  solution:
    "Migración a una arquitectura de microservicios en Kubernetes, implementación de Redis para caché de sesión y Kafka para eventos asíncronos.",
  timeline: [
    {
      label: "Fase 1: Análisis y Desacoplamiento",
      description:
        'El mayor desafío fue identificar los "seams" lógicos en el código existente sin interrumpir el servicio en producción. Se utilizó el patrón Strangler Fig para migrar progresivamente.',
    },
    {
      label: "Fase 2: Infraestructura y CI/CD",
      description:
        "Configuración de pipelines automatizados con GitHub Actions y Terraform para infraestructura como código, asegurando entornos reproducibles.",
    },
  ],
  techStack: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker", "AWS"],
  features: [
    "Autenticación JWT con rotación de tokens",
    "Procesamiento de colas asíncronas",
    "Dashboards analíticos en tiempo real",
  ],
  gallery: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4FvS9jSgQ_y--am_7sQA5nw0JYT3NnQZ1OOVRIqocB4LYf2xMKn_GiBqWxcLanfX8_7iVHiRmgHRe3zkI6rv44LGH5DaxZURv0rdr7rcLwX19SOXlAhblb_gfK1keXruQG8mbdmlUgnKsLJ7t3vGjSJsI6mMULx10yB_SY7bcJA5Y_2L1CQ9gv-vqToyT3sE-ddWMoIlHSRpl9v8lWxXCTR_73lyvoYSkAyeO_FQvNyVxI5tD_pvf5A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFxV9tf1JxD6ZrTu57UD2--Bo5Q_VcBYxLdjXNxKowff0qsTYw1UwaWtu-Cyn-I3_5sf7-knPDftqYnC06h9si-3G8FPxT9TpsNtFHM3XRULf40B7ZoMQutmRun16jWRXpOnepOoQoFcg4eFEHEdbeqkUnzcRWoRSKrUIzzfJIopg6OBkv2-5-zdTsPohUxyJ0YQzVBxis7LUwVAgxnzJNgtAUhtuMYYOz3uRIM-y9nnnll8uYZqGL4Q",
  ],
};

export const PROJECT_CATEGORIES = [
  { label: "Todos", value: "all" },
  { label: "React", value: "react" },
  { label: "Node.js", value: "node" },
  { label: "Python", value: "python" },
  { label: "Tailwind", value: "tailwind" },
];
