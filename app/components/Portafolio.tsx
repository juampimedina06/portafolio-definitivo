'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiNodedotjs, SiTailwindcss, SiCss3, SiSupabase, SiExpress, SiMysql, SiNextdotjs } from 'react-icons/si'
import Card from './ui/Card'
import BlurText from '../../components/ui/ReactBits/BlurText'

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

const projectsData = [
  {
    id: 1,
    tag: 'B2B Portal',
    title: 'Customer Portal',
    description: 'Sistema con autenticación y roles (admin/cliente). Dashboard para seguimiento de proyectos y comunicación cliente-empresa .',
    link: 'https://github.com/juampimedina06/customer-portal',
    videoSrc: '/videos/gestorClientes.mp4',
    technologies: ['next', 'react', 'typescript', 'tailwind', 'supabase'],
  },
  {
    id: 2,
    tag: 'E-commerce',
    title: 'El Pequeño Hong Kong',
    description: 'Sistema completo de gestión de productos con panel administrador. CRUD de productos y control de stock con autenticación.',
    link: 'https://github.com/juampimedina06/el-pequeno-hong-kong',
    videoSrc: '/videos/elpequehongkong.mp4',
    technologies: ['react', 'typescript', 'tailwind', 'supabase'],
  },
  {
    id: 3,
    tag: 'Gestión Deportiva',
    title: 'Gestión Deportiva',
    description: 'Sistema de gestión y análisis de jugadores con arquitectura cliente-servidor desacoplada. Implementación de autenticación con JWT.',
    link: 'https://github.com/juampimedina06/fifa-list',
    videoSrc: '/videos/jugadoresFifa.mp4',
    technologies: ['nodejs', 'express', 'mysql', 'angular'],
  }
]

const ProjectItem = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoRef.current?.play().catch(() => { })
        else videoRef.current?.pause()
      },
      { threshold: 0.5 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
    >
      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
        <span style={{ fontFamily: "'DM Mono', monospace" }} className='text-[#22D3EE] text-[10px] tracking-[0.2em] uppercase'>
          {project.tag}
        </span>
        <h3 className='text-2xl md:text-4xl font-medium text-white mt-2 mb-4 tracking-tight'>
          {project.title}
        </h3>
        <p className='text-white/50 text-sm leading-relaxed mb-6'>
          {project.description}
        </p>
        <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-white/60 text-sm hover:text-[#22D3EE] transition-colors inline-flex items-center gap-2 group'>
          Ver proyecto
          <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
          </svg>
        </a>
        <div className='flex items-center gap-4 mt-6'>
          {project.technologies?.map((tech, i) => {
            const IconComponent = techIconsMap[tech.toLowerCase()]
            if (!IconComponent) return null
            return <IconComponent key={i} className='w-4 h-4 text-white/30 hover:text-[#22D3EE] transition-colors' />
          })}
        </div>
      </div>

      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
        <Card accentColor='cyan' className='overflow-hidden group'>
          <video ref={videoRef} src={project.videoSrc} muted loop playsInline className='w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity' />
        </Card>
      </div>
    </motion.div>
  )
}

const Portafolio = () => {
  return (
    <section id='proyectos' className='relative w-full py-24 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-20'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-8 h-[1px] bg-[#22D3EE]' />
            <span style={{ fontFamily: "'DM Mono', monospace" }} className='text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase'>
              Portfolio
            </span>
          </div>
          <BlurText text='Proyectos' className='text-4xl md:text-5xl font-bold tracking-tight text-white' delay={50} />
        </div>

        <div className='flex flex-col gap-24'>
          {projectsData.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portafolio
