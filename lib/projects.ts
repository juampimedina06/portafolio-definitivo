// ─── Interfaces ──────────────────────────────────────────────────────────────

export type ImagePosition = "left" | "right"

export interface SectionImage {
  src: string
  alt: string
}

export interface ProjectSection {
  title: string
  number: string
  text: string[]
  images: SectionImage[]
  imagePosition: ImagePosition
}

export type ProjectTag =
  | "SITIO DE INTERCAMBIOS"
  | "B2B / DASHBOARD"
  | "E-COMMERCE"
  | string

export interface Project {
  slug: string
  tag: ProjectTag
  title: string
  description: string
  implementaciones: string[]
  heroImage: string
  sections: ProjectSection[]
  githubLink: string
  imagen: string
  role: string
  tech: string[]
  year: string
}

// ─── CircularLocal ────────────────────────────────────────────────────────────

const circularChallenge = [
  "El principal reto fue diseñar e implementar una plataforma de compraventa entre usuarios capaz de gestionar autenticación, perfiles personalizados y publicaciones dinámicas dentro de un mismo ecosistema.",
  "El sistema debía soportar flujos de interacción directa entre compradores y vendedores, incluyendo mensajería integrada, sin comprometer la simplicidad de uso.",
  "A nivel técnico, fue necesario definir un modelo de datos extensible que pudiera escalar hacia nuevas funcionalidades sin requerir refactorizaciones estructurales.",
  "Fuimos guiados por un scrum master donde teniamos dailis para poder organizarse, tambien nos organizabamos por jira donde teniamos tareas para cada uno, tambien teniamos reuniones para ver el estado de los tareas y en general fue una experiencia muy buena porque aprendi mucho sobre trabajo en equipo y desarrollo de software.",
  "Tambien realizamos el der en lucid chart y los mockups en figma el cual desarrolle con stitchUI e iba editandolos en figma para que este acorde a lo que queria",
]

const circularContext = [
  "El proyecto surgió como respuesta a la necesidad de una plataforma local orientada a la reutilización y circulación de productos entre particulares.",
  "Las soluciones existentes resultaban complejas o incorporaban funcionalidades que no aportaban valor en contextos de intercambio directo.",
  "El objetivo fue construir un marketplace enfocado: registro rápido, publicación de artículos con imágenes y comunicación fluida entre usuarios, priorizando la interacción directa por sobre la intermediación.",
]

const circularSolution = [
  "Se desarrolló una aplicación full stack con Angular en el frontend y Node.js con Express y Sequelize en el backend, respaldado por MySQL como motor de base de datos.",
  "La arquitectura sigue un patrón por capas (Model → Service → Controller → Route), facilitando el mantenimiento y la extensibilidad.",
  "Se implementaron endpoints para gestión de publicaciones, perfiles de usuario y conversaciones, con autenticación mediante JWT e interceptores HTTP para inyección automática de tokens.",
  "El sistema de mensajería integrado permite la comunicación directa entre usuarios sin abandonar la plataforma, y el panel personal centraliza la gestión de publicaciones propias.",
  "El frontend fue desarrollado con Angular standalone components, signals y control flow moderno (@for, @if), garantizando reactividad sin dependencias de módulos adicionales.",
]

// ─── Qlienta ──────────────────────────────────────────────────────────────────

const qlientaChallenge = [
  "El desafío principal fue construir una plataforma B2B capaz de centralizar la comunicación y el seguimiento de proyectos entre una agencia y sus clientes, eliminando la dependencia de canales dispersos como WhatsApp o correo electrónico.",
  "El sistema debía gestionar tres roles de usuario (administrador, empleado y cliente) con acceso diferenciado a la información, garantizando que cada actor vea únicamente los datos que le corresponden.",
  "La implementación de Row Level Security (RLS) en Supabase fue clave para asegurar el aislamiento de datos a nivel de base de datos, sin depender exclusivamente de lógica de aplicación.",
]

const qlientaContext = [
  "El proyecto nació a partir de una problemática recurrente en agencias y equipos de desarrollo: la falta de un espacio centralizado para gestionar clientes y hacer seguimiento de proyectos en curso.",
  "La información quedaba fragmentada entre conversaciones, documentos y reuniones, dificultando tanto el control interno como la transparencia hacia el cliente.",
  "La propuesta fue desarrollar un portal privado donde administradores, empleados y clientes pudieran acceder en tiempo real al estado de cada proyecto, documentos compartidos, tareas pendientes y actualizaciones, desde una única interfaz.",
]

const qlientaSolution = [
  "Se desarrolló una aplicación full stack utilizando Next.js con TypeScript y Supabase como backend-as-a-service.",
  "La autenticación se implementó con Supabase Auth, y el control de acceso granular se enforcea mediante políticas RLS directamente en la base de datos.",
  "Los dashboards están diferenciados por rol: el administrador gestiona usuarios, futuros clientes y proyectos; el empleado puede registrar prospectos y hacer seguimiento; el cliente accede a su información, proyectos y canal de comunicación asignado.",
  "Se utilizaron Server Actions de Next.js para mutaciones con revalidación de caché, shadcn/ui con Tailwind CSS para la interfaz, y Zod para validación de formularios.",
  "La arquitectura fue diseñada pensando en mantenibilidad y escalabilidad a largo plazo.",
]

// ─── El Pequeño Hong Kong ─────────────────────────────────────────────────────

const pequeChallenge = [
  "El desafío fue construir un e-commerce completo que combinara una experiencia de navegación visualmente atractiva con herramientas administrativas funcionales para la gestión del negocio.",
  "Era necesario implementar CRUD de productos, control de stock en tiempo real y carga de imágenes desde un panel privado, sin comprometer la fluidez de la interfaz pública.",
  "Adicionalmente, se buscó construir una identidad visual diferenciada mediante animaciones que elevaran la experiencia por encima de un catálogo estático.",
]

const pequeContext = [
  "El proyecto surgió de la necesidad concreta de un negocio local de productos para el hogar: contar con una plataforma propia que centralizara su catálogo digital y simplificara la gestión de stock sin depender de redes sociales o soluciones genéricas.",
  "El objetivo fue diseñar una tienda online personalizada con panel administrativo integrado, permitiendo al equipo agregar, editar y controlar productos directamente desde la aplicación.",
]

const pequeSolution = [
  "Se desarrolló un e-commerce full stack con React, TypeScript, Supabase y CSS Modules.",
  "El panel administrador incluye CRUD completo de productos con carga de imágenes a Supabase Storage y control de stock en tiempo real.",
  "Se integró Zustand para manejo de estado global, evitando prop drilling en el carrito y el estado de sesión.",
  "Las consultas al backend se gestionan con React Query, aprovechando caché y revalidación automática para mejorar el rendimiento percibido.",
  "Las animaciones fueron implementadas con GSAP, generando transiciones fluidas entre vistas y microinteracciones en el catálogo.",
  "La arquitectura modular por componentes facilita el mantenimiento y la incorporación de nuevas funcionalidades.",
]

// ─── Dataset ──────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "circularlocal",
    tag: "SITIO DE INTERCAMBIOS",
    title: "CircularLocal",
    description:
      "Plataforma de compraventa e intercambio entre usuarios, desarrollada en equipo bajo metodología Scrum con mentorías de Santex. Resuelve la falta de una herramienta centralizada para coordinar oferta y demanda de materiales reciclables, productos reutilizados y servicios a nivel local, integrando publicaciones, mensajería y administración en un mismo ecosistema.",
    heroImage: "/imagenes/CircularLocal/circular_landing.jpg",
    implementaciones: [
      "Autenticación con JWT e interceptores HTTP para inyección automática de tokens",
      "Registro y gestión de actores de la economía circular: cooperativas, recicladores y emprendedores",
      "Publicación de materiales reciclables, productos reutilizados y servicios con carga de imágenes",
      "Sistema de mensajería integrado entre compradores y vendedores",
      "Clasificación y búsqueda por tipo de material o servicio",
      "Panel de administración para moderación de usuarios y publicaciones",
      "Dashboard de métricas de impacto con Chart.js (intercambios realizados, materiales reutilizados)",
      "Arquitectura por capas en el backend: Model → Service → Controller → Route",
      "Componentes standalone en Angular con signals y control flow moderno (@for, @if)",
    ],
    imagen: "/imagenes/CircularLocal/circularlocal.png",
    githubLink: "",
    role: "Full Stack Developer",
    tech: ["TypeScript", "Angular", "SCSS", "Node.js", "Express", "Sequelize", "MySQL", "Docker"],
    year: "2026",
    sections: [
      {
        title: "El Desafío",
        number: "01",
        text: circularChallenge,
        images: [
          { src: "/imagenes/CircularLocal/daili_circularlocal.jpg", alt: "Daily ui circularlocal" },
          { src: "/imagenes/CircularLocal/der_circularlocal.jpg", alt: "Base de datos" },
          { src: "/imagenes/CircularLocal/jira_circularlocal.jpg", alt: "Panel de tareas Scrum" },
        ],
        imagePosition: "left",
      },
      {
        title: "Contexto",
        number: "02",
        text: circularContext,
        images: [
          { src: "/imagenes/CircularLocal/diseño_circularlocal.jpg", alt: "Diseño del proyecto" },
          { src: "/imagenes/CircularLocal/circular_publicaciones.jpg", alt: "Listado de publicaciones" },
          { src: "/imagenes/CircularLocal/circular_publicacionDetallada.jpg", alt: "Publicación detallada" },
        ],
        imagePosition: "right",
      },
      {
        title: "La Solución",
        number: "03",
        text: circularSolution,
        images: [
          { src: "/imagenes/CircularLocal/circular_perfil.jpg", alt: "Perfil de usuario" },
          { src: "/imagenes/CircularLocal/circular_misPublicaciones.jpg", alt: "Panel de publicaciones propias" },
          { src: "/imagenes/CircularLocal/circular_mensajes.jpg", alt: "Sistema de mensajes" },
        ],
        imagePosition: "left",
      },
    ],
  },
  {
    slug: "qlienta",
    tag: "B2B / DASHBOARD",
    title: "Customer Portal",
    description:
      "Plataforma B2B de gestión de clientes y seguimiento de proyectos con control de acceso por roles. Resuelve la dispersión de información entre canales externos (WhatsApp, correo) centralizando la comunicación, el estado de proyectos y los recursos compartidos en un portal privado con dashboards diferenciados para administradores, empleados y clientes.",
    implementaciones: [
      "Autenticación con Supabase Auth y gestión de sesiones server-side en Next.js",
      "Control de acceso granular mediante Row Level Security (RLS) en Supabase",
      "Dashboards diferenciados por rol: administrador, empleado y cliente",
      "Gestión de futuros clientes y conversión a usuarios activos",
      "Seguimiento de proyectos con estados y actualizaciones en tiempo real",
      "Mutaciones con Server Actions de Next.js y revalidación de caché con revalidatePath",
      "Validación de formularios con Zod",
      "Interfaz construida con shadcn/ui y Tailwind CSS",
      "Arquitectura frontend modular y escalable en Next.js App Router",
    ],
    heroImage: "/imagenes/Qlienta/inicio_admin.jpg",
    imagen: "/imagenes/Qlienta/imagen_qlienta.png",
    githubLink: "https://github.com/juampimedina06/customer-portal",
    role: "Full Stack Developer",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Zod"],
    year: "2025",
    sections: [
      {
        title: "El Desafío",
        number: "01",
        text: qlientaChallenge,
        images: [
          { src: "/imagenes/Qlienta/cliente_dashboard.jpg", alt: "Dashboard del cliente" },
          { src: "/imagenes/Qlienta/cliente_perfil.jpg", alt: "Perfil del cliente" },
          { src: "/imagenes/Qlienta/cliente_proyecto.jpg", alt: "Vista de proyecto del cliente" },


        ],
        imagePosition: "left",
      },
      {
        title: "Contexto",
        number: "02",
        text: qlientaContext,
        images: [
          { src: "/imagenes/Qlienta/inicio_admin.jpg", alt: "Panel de administración" },
          { src: "/imagenes/Qlienta/empleado_inicio.jpg", alt: "Inicio del empleado" },

          { src: "/imagenes/Qlienta/empleado_darAltaFuturoCliente.jpg", alt: "Alta de futuro cliente" },
        ],
        imagePosition: "right",
      },
      {
        title: "La Solución",
        number: "03",
        text: qlientaSolution,
        images: [
          { src: "/imagenes/Qlienta/admin_clientesActivos.jpg", alt: "Gestión de clientes activos" },
          { src: "/imagenes/Qlienta/admin_futurosClientes.jpg", alt: "Pipeline de futuros clientes" },
          { src: "/imagenes/Qlienta/admin_altaUsuario.jpg", alt: "Alta de nuevo usuario" },
        ],
        imagePosition: "right",
      },
    ],
  },
  {
    slug: "elpeque",
    tag: "E-COMMERCE",
    title: "El Pequeño Hong Kong",
    description:
      "E-commerce full stack con panel administrativo para un negocio local de productos para el hogar. Centraliza la gestión de catálogo, stock e imágenes en una única plataforma, eliminando la dependencia de redes sociales y herramientas externas, con animaciones GSAP para una experiencia de navegación diferenciada.",
    implementaciones: [
      "CRUD completo de productos con carga de imágenes a Supabase Storage",
      "Control de stock en tiempo real con actualización desde el panel administrativo",
      "Autenticación con Supabase Auth para acceso restringido al panel de administración",
      "Estado global del carrito y sesión con Zustand",
      "Gestión de caché y revalidación automática de datos con React Query",
      "Animaciones y transiciones entre vistas con GSAP",
      "Panel administrador con gestión de productos, stock e imágenes",
      "Interfaz responsive con CSS Modules y Tailwind CSS",
    ],
    heroImage: "/imagenes/Elpeque/inicio.jpg",
    imagen: "/imagenes/Elpeque/el_peque.png",
    githubLink: "https://github.com/juampimedina06/el-pequeno-hong-kong",
    role: "Full Stack Developer",
    tech: ["React", "TypeScript", "Supabase", "Zustand", "React Query", "GSAP", "CSS Modules", "Tailwind CSS"],
    year: "2025",
    sections: [
      {
        title: "El Desafío",
        number: "01",
        text: pequeChallenge,
        images: [
          { src: "/imagenes/Elpeque/productos.jpg", alt: "Listado de productos" },
          { src: "/imagenes/Elpeque/producto_detallado.jpg", alt: "Vista detallada de producto" },
        ],
        imagePosition: "left",
      },
      {
        title: "Contexto",
        number: "02",
        text: pequeContext,
        images: [
          { src: "/imagenes/Elpeque/carrito.jpg", alt: "Carrito de compras" },
          { src: "/imagenes/Elpeque/stock.jpg", alt: "Panel de control de stock" },
        ],
        imagePosition: "right",
      },
      {
        title: "La Solución",
        number: "03",
        text: pequeSolution,
        images: [
          { src: "/imagenes/Elpeque/subir_producto.jpg", alt: "Formulario de carga de producto" },
        ],
        imagePosition: "left",
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}