'use client'
import React, { useRef, useEffect } from 'react'
import HoverButton from '@/components/ui/HoverButtom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTailwindcss,
  SiCss3,
  SiSupabase,
  SiExpress,
  SiMysql,
  SiNextdotjs
} from 'react-icons/si'

// Mapa de iconos disponibles para asociar fácilmente desde el JSON
const techIconsMap: Record<string, React.ElementType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  angular: SiAngular,
  nodejs: SiNodedotjs,
  tailwind: SiTailwindcss,
  css: SiCss3,
  supabase: SiSupabase,
  express: SiExpress,
  mysql: SiMysql,
  next: SiNextdotjs
}

// Array de datos de los proyectos (JSON)
const projectsData = [
  {
    id: 1,
    tag: 'Gestor de Cliente',
    title: 'Proyecto para Agencia GuargSystems',
    description: 'Portal de Gestión de Clientes y Seguimiento de Proyectos (En desarrollo) Plataforma Full-Stack B2B diseñada para optimizar la comunicación y transparencia entre la administración y los clientes. Implementación de un sistema de roles donde los administradores pueden gestionar y actualizar el estado de los proyectos, mientras que los clientes disponen de un portal privado para monitorear el progreso en tiempo real y aportar información estructurada, reduciendo los tiempos de feedback.',
    primaryButtonText: 'Mas Informacion',
    linkPrimaryButton: '',
    secondaryButtonText: 'Ver Proyecto',
    linkSecondaryButtonText: '',
    videoSrc: '/videos/gestorClientes.mp4',
    technologies: ['react', 'typescript', 'next', 'tailwind', 'supabase'],
  },
  {
    id: 2,
    tag: 'Gestor y Catalogo de Productos',
    title: 'Proyecto para El Pequeño HongKong - Bazar',
    description: 'La plataforma ofrece una integracion de un carrito de compras persistente que culmina el proceso de compra directamente a través de WhatsApp. Además, incluye un panel de control protegido con autenticación para que el administrador pueda gestionar el stock y el CRUD de productos en tiempo real.',
    primaryButtonText: 'Mas Informacion',
    linkPrimaryButton: '',
    secondaryButtonText: 'Ver Proyecto',
    linkSecondaryButtonText: '',
    videoSrc: '/videos/elpequehongkong.mp4',
    technologies: ['react', 'typescript', 'tailwind', 'css', 'supabase'],
  },
  {
    id: 3,
    tag: 'Gestion de Jugadores',
    title: 'Codebase Animated Website',
    description: 'A modern, animated website template for codebase ai brand with professional sections. Fully customizable and free to use, perfect for developers, designers, and creative professionals.',
    primaryButtonText: 'Mas Informacion',
    linkPrimaryButton: '',
    secondaryButtonText: 'Ver Proyecto',
    linkSecondaryButtonText: '',
    videoSrc: '/videos/jugadoresFifa.mp4',
    technologies: ['typescript', 'angular', 'css', 'nodejs', 'express', 'mysql'],
  }
]

type ProjectData = typeof projectsData[0]

const ProjectItem = ({ project, layout }: { project: ProjectData, layout: 'izq' | 'der' }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    {/* IntersectionObserver obtiene alerta de cuando se esta visualizando el componente */ }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(e => console.log(e))
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  return (
    <div className={`flex flex-col ${layout === 'izq' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
      {/* Text Section */}
      <div className='flex-1 flex flex-col items-start gap-6'>
        <div className='bg-white/10 border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider'>
          {project.tag}
        </div>
        <h3 className='text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight'>
          {project.title}
        </h3>
        <p className='text-white/55 text-sm md:text-base leading-relaxed mb-6'>
          {project.description}
        </p>
        <div className='flex flex-wrap items-center gap-4 mt-2'>
          <HoverButton
            link={project.linkPrimaryButton || '#'}
            color="#000"
            background="#fff"
            border="#fff"
          >
            {project.primaryButtonText} <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </HoverButton>
          <HoverButton
            link={project.linkSecondaryButtonText || '#'}
            color="#fff"
            background="transparent"
            border="rgba(255, 255, 255, 0.2)"
          >
            {project.secondaryButtonText} <ArrowUpRight className="w-4 h-4 ml-2 inline-block" />
          </HoverButton>
        </div>

        {/* Tecnologías mapeadas dinámicamente */}
        <div className='flex items-center gap-6 text-gray-500 mt-6'>
          {project.technologies?.map((tech, index) => {
            const IconComponent = techIconsMap[tech.toLowerCase()]
            if (!IconComponent) return null
            return (
              <div key={index} title={tech} className="cursor-pointer">
                <IconComponent className="w-5 h-5 hover:text-white transition-colors" />
              </div>
            )
          })}
        </div>
      </div>
      {/* Video Section */}
      <div className='flex-1 w-full'>
        <div className='rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group shadow-2xl shadow-white/5'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none'></div>
          <video
            ref={videoRef}
            src={project.videoSrc}
            muted
            loop
            playsInline
            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  )
}

const Portafolio = () => {
  return (
    <section id='proyectos' className='min-h-screen w-full bg-black flex justify-center items-center flex-col py-24 px-6'>
      <div className='flex items-center justify-center gap-4 mb-20 w-full max-w-7xl'>
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className='text-white/25 text-xs tracking-[0.3em] uppercase'
        >
          Portafolio
        </span>
      </div>

      <div className='w-full max-w-7xl flex flex-col gap-32'>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            layout={index % 2 === 0 ? 'izq' : 'der'}
          />
        ))}
      </div>
    </section>
  )
}

export default Portafolio