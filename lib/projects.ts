export interface SectionImage {
  src: string
  alt: string
}

export interface ProjectSection {
  title: string
  number: string
  text: string
  images: SectionImage[]
  imagePosition: "left" | "right"
}

export interface Project {
  slug: string
  tag: string
  title: string
  description: string
  heroImage: string
  sections: ProjectSection[]
  githubLink: string
  imagen: string
  role: string
  tech: string
  year: string
}

const qlientaChallenge =
  "El principal desafío fue desarrollar una plataforma B2B capaz de centralizar toda la comunicación y el seguimiento de proyectos entre la empresa y sus clientes. El sistema debía manejar múltiples tipos de usuarios con distintos permisos y garantizar que cada uno accediera únicamente a la información correspondiente. Además, era importante construir una interfaz clara y escalable que permitiera visualizar el estado de los proyectos, compartir recursos y mantener una comunicación organizada sin depender de herramientas externas como correos o mensajes dispersos."

const qlientaContext =
  "El proyecto nació a partir de una problemática común en agencias y equipos de desarrollo: la falta de un espacio centralizado para gestionar clientes y hacer seguimiento de proyectos. Muchas veces la información quedaba distribuida entre chats, documentos y reuniones, dificultando el control del avance y la comunicación con el cliente. La idea fue crear un portal privado donde tanto administradores como clientes pudieran acceder en tiempo real al estado de cada proyecto, documentos compartidos, tareas pendientes y actualizaciones importantes desde una sola plataforma."

const qlientaSolution =
  "Se desarrolló una aplicación full stack utilizando Next.js, React, TypeScript y Supabase, implementando autenticación segura, gestión de sesiones y control de acceso basado en roles. El sistema cuenta con dashboards diferenciados para administradores, empleados y clientes, permitiendo gestionar usuarios, registrar futuros clientes, actualizar estados de proyectos y centralizar información importante dentro de un entorno privado. Supabase fue utilizado para autenticación, base de datos y almacenamiento, mientras que Tailwind CSS permitió construir una interfaz moderna, responsive y enfocada en la experiencia de usuario. La arquitectura fue diseñada pensando en escalabilidad y mantenimiento a largo plazo."

const pequeChallenge =
  "El desafío principal fue construir un e-commerce moderno que combinara rendimiento, diseño visual atractivo y herramientas administrativas completas para la gestión del negocio. El sistema debía permitir administrar productos, stock e imágenes desde un panel privado, manteniendo al mismo tiempo una experiencia de navegación dinámica y fluida para los usuarios. También se buscó desarrollar una identidad visual fuerte mediante animaciones y transiciones que diferenciaran la plataforma de un catálogo tradicional."

const pequeContext =
  "Muchos pequeños negocios no cuentan con plataformas digitales personalizadas para administrar sus productos y suelen depender de soluciones limitadas o redes sociales para vender. El objetivo del proyecto fue crear una tienda online completa que permitiera centralizar la gestión de productos, mejorar la presentación visual del catálogo y optimizar la experiencia de compra. Además, se buscó facilitar la administración del contenido mediante herramientas simples para agregar, editar y controlar stock desde un panel administrativo."

const pequeSolution =
  "Se desarrolló un e-commerce full stack utilizando React, Supabase y CSS Modules, incorporando un panel administrador con CRUD completo de productos y control de stock en tiempo real. Supabase fue utilizado como backend para autenticación, almacenamiento de imágenes y base de datos, permitiendo una integración rápida y escalable. Para mejorar la experiencia visual se implementaron animaciones avanzadas utilizando GSAP, generando transiciones más dinámicas e interacciones modernas dentro de la interfaz. La aplicación fue estructurada de manera modular para facilitar mantenimiento, escalabilidad y reutilización de componentes."

const circularChallenge =
  "El principal reto fue desarrollar una plataforma de compraventa entre usuarios que permitiera publicar productos, interactuar mediante mensajes y administrar publicaciones dentro de un mismo ecosistema digital. El sistema debía manejar autenticación, perfiles personalizados y publicaciones dinámicas, manteniendo una experiencia simple e intuitiva tanto para usuarios nuevos como recurrentes. También fue necesario pensar la estructura de datos para soportar futuras funcionalidades relacionadas a interacción y escalabilidad."

const circularContext =
  "El proyecto surgió con la idea de impulsar la reutilización y circulación de productos entre personas mediante un marketplace accesible y fácil de usar. Muchas plataformas existentes resultan complejas o están sobrecargadas de funcionalidades, por lo que el objetivo fue construir una experiencia más limpia y enfocada en la interacción directa entre usuarios. Se buscó que cualquier persona pudiera registrarse, crear publicaciones y comunicarse rápidamente con otros usuarios dentro de la plataforma."

const circularSolution =
  "Se desarrolló una aplicación full stack orientada al intercambio y compraventa de productos entre usuarios, incorporando autenticación, perfiles personalizados y gestión de publicaciones. Los usuarios pueden registrarse, iniciar sesión, crear publicaciones con imágenes, visualizar productos detallados y administrar sus propios artículos desde un panel personal. Además, se implementó un sistema de mensajes integrado para facilitar la comunicación entre compradores y vendedores sin salir de la plataforma. La arquitectura fue diseñada de forma modular y escalable, priorizando organización del código, reutilización de componentes y una experiencia de navegación clara y responsive."

const lor1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
const lor2 =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
const lor3 =
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."

export const projects: Project[] = [
  {
    slug: "qlienta",
    tag: "B2B / DASHBOARD",
    title: "Customer Portal",
    description:
      "Sistema con autenticación y roles (admin/cliente). Dashboard para seguimiento de proyectos y comunicación cliente-empresa.",
    heroImage: "",
    imagen: "/imagenes/Qlienta/imagen_qlienta.png",
    githubLink: "https://github.com/juampimedina06/customer-portal",
    role: "Desarrollo Full Stack",
    tech: "Next.js, TypeScript, Supabase, Tailwind",
    year: "2025",
    sections: [
      {
        title: "El Desafío",
        number: "01",
        text: qlientaChallenge,
        images: [
          { src: "/imagenes/Qlienta/inicio_admin.jpg", alt: "Panel de administración" },
          { src: "/imagenes/Qlienta/empleado_inicio.jpg", alt: "Inicio del empleado" },
          { src: "/imagenes/Qlienta/cliente_dashboard.jpg", alt: "Dashboard del cliente" },
        ],
        imagePosition: "left",
      },
      {
        title: "Contexto",
        number: "02",
        text: qlientaContext,
        images: [
          { src: "/imagenes/Qlienta/cliente_proyecto.jpg", alt: "Proyecto del cliente" },
          { src: "/imagenes/Qlienta/cliente_perfil.jpg", alt: "Perfil del cliente" },
          { src: "/imagenes/Qlienta/empleado_darAltaFuturoCliente.jpg", alt: "Empleado dando de alta futuro cliente" },
        ],
        imagePosition: "right",
      },
      {
        title: "La Solución",
        number: "03",
        text: qlientaSolution,
        images: [
          { src: "/imagenes/Qlienta/admin_clientesActivos.jpg", alt: "Clientes activos" },
          { src: "/imagenes/Qlienta/admin_futurosClientes.jpg", alt: "Futuros clientes" },
          { src: "/imagenes/Qlienta/admin_altaUsuario.jpg", alt: "Alta de usuario" },
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
      "Sistema completo de gestión de productos con panel administrador. CRUD de productos y control de stock.",
    heroImage: "/imagenes/Elpeque/inicio.jpg",
    imagen: "/imagenes/Elpeque/el_peque.png",
    githubLink: "https://github.com/juampimedina06/el-pequeno-hong-kong",
    role: "Desarrollo Full Stack",
    tech: "React, GSAP, CSS Modules",
    year: "2025",
    sections: [
      {
        title: "El Desafío",
        number: "01",
        text: pequeChallenge,
        images: [
          { src: "/imagenes/Elpeque/productos.jpg", alt: "Listado de productos" },
          { src: "/imagenes/Elpeque/producto_detallado.jpg", alt: "Producto detallado" },
        ],
        imagePosition: "left",
      },
      {
        title: "Contexto",
        number: "02",
        text: pequeContext,
        images: [
          { src: "/imagenes/Elpeque/carrito.jpg", alt: "Carrito de compras" },
          { src: "/imagenes/Elpeque/stock.jpg", alt: "Panel de stock" },
        ],
        imagePosition: "right",
      },
      {
        title: "La Solución",
        number: "03",
        text: pequeSolution,
        images: [
          { src: "/imagenes/Elpeque/subir_producto.jpg", alt: "Subir producto" },
        ],
        imagePosition: "left",
      },
    ],
  },
  {
    slug: "circularlocal",
    tag: "SITIO DE INTERCAMBIOS",
    title: "CircularLocal",
    description:
      "E-commerce diseñado para la compraventa de productos entre usuarios.",
    heroImage: "/imagenes/CircularLocal/circular_landing.jpg",
    imagen: "/imagenes/CircularLocal/circularlocal.png",
    githubLink: "",
    role: "Desarrollo Full Stack",
    tech: "",
    year: "",
    sections: [
      {
        title: "El Desafío",
        number: "01",
        text: circularChallenge,
        images: [
          { src: "/imagenes/CircularLocal/circular_login.jpg", alt: "Pantalla de login" },
          { src: "/imagenes/CircularLocal/circular_registro.jpg", alt: "Pantalla de registro" },
          { src: "/imagenes/CircularLocal/circular_inicio.jpg", alt: "Página de inicio" },
        ],
        imagePosition: "left",
      },
      {
        title: "Contexto",
        number: "02",
        text: circularContext,
        images: [
          { src: "/imagenes/CircularLocal/circular_publicaciones.jpg", alt: "Publicaciones" },
          { src: "/imagenes/CircularLocal/circular_publicacionDetallada.jpg", alt: "Publicación detallada" },
          { src: "/imagenes/CircularLocal/circular_subirPublicacion.jpg", alt: "Subir publicación" },
        ],
        imagePosition: "right",
      },
      {
        title: "La Solución",
        number: "03",
        text: circularSolution,
        images: [
          { src: "/imagenes/CircularLocal/circular_perfil.jpg", alt: "Perfil de usuario" },
          { src: "/imagenes/CircularLocal/circular_misPublicaciones.jpg", alt: "Mis publicaciones" },
          { src: "/imagenes/CircularLocal/circular_mensajes.jpg", alt: "Mensajes" },
        ],
        imagePosition: "left",
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
