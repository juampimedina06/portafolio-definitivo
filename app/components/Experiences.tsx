'use client'

import GlareHover from '@/components/ui/ReactBits/GlareHover/GlareHover'
import React, { useRef, useEffect, useState } from 'react'

interface Experience {
  role: string
  company: string
  period: string
  description: string
  linkProyecto?: string
  descriptionDos?: string
  linkProyectoDos?: string
  tech: string[]
}

const experiences: Experience[] = [
  {
    role: 'Programador Full Stack (Pasantia)',
    company: 'Hyper Company - Miami Florida',
    period: 'Nov 2025 — Feb 2026',
    description: 'Durante mi pasantía de tres meses como desarrollador Front-End participé en el desarrollo de dos proyectos web utilizando React, JavaScript, Tailwind CSS y Three.js. En el primer proyecto trabajé junto a un equipo de tres desarrolladores en la creación de la landing page institucional de la empresa. El desarrollo se guiaba a partir de prototipos definidos en Figma y mi responsabilidad principal fue implementar distintas secciones de la interfaz, construir componentes reutilizables y realizar ajustes en animaciones y elementos interactivos. También trabajé con componentes 3D integrados con Three.js y utilicé Context API para gestionar y mostrar información dinámica dentro de la aplicación.',
    linkProyecto: 'https://hyperrealitycompany.com/',
    descriptionDos: 'En el segundo proyecto colaboré directamente con el CTO en el desarrollo de una web para una productora de café. En este caso trabajé de forma más autónoma, recibiendo tareas específicas relacionadas con la implementación de nuevas secciones y la mejora de la experiencia visual del sitio. Gran parte del trabajo se centró en la integración y corrección de animaciones, así como en el ajuste de botones y componentes de la interfaz para garantizar su correcto funcionamiento y coherencia dentro del diseño general del proyecto. Este proyecto reforzó mi capacidad de resolver problemas de interfaz y mantener consistencia en componentes dentro de aplicaciones React.',
    linkProyectoDos: 'https://green-book-web.netlify.app/',
    tech: ['React', 'JavaScript', 'ThreeJS', 'Figma', 'TailwindCSS'],
  },
  {
    role: 'Proyecto Full Stack',
    company: 'Technology with Purpose FoundationTechnology',
    period: 'Febrero 2026 — Act.',
    description:
      'Actualmente participo en el desarrollo de Circular Local, un proyecto Full Stack realizado en equipo bajo metodología Scrum supervisado por um miembro de la empresa Santex, donde trabajamos cuatro desarrolladores organizando el trabajo mediante Jira. El proyecto cuenta con la guía de un mentor técnico que define requisitos funcionales y revisa el avance del equipo. La arquitectura utiliza MySQL para la base de datos, Node.js con Express para el backend y Angular con TypeScript y Tailwind CSS para el frontend. El objetivo de la plataforma es fomentar la economía circular a nivel local conectando cooperativas, recicladores y emprendedores sustentables para facilitar el intercambio de materiales, productos y servicios con impacto social y ambiental positivo.',
    linkProyecto: '',
    descriptionDos: '',
    linkProyectoDos: '',
    tech: ['TypeScript', 'MySQL', 'Node.js', 'Express', 'Angular', 'Tailwind CSS', 'Jira', 'Lucid'],
  },
]

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(28px)',
          transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        }}
        className='group relative border-l-6 border-white p-7 md:p-9'
      >
        {/* número de tarjeta */}
        <span

          className='absolute top-7 right-7 text-white/15 text-xs tracking-widest select-none'
        >
          0{index + 1}
        </span>

        {/* encabezado */}
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5'>
          <div>
            <h3
              className='text-white text-xl md:text-5xl tracking-tight leading-snug'
            >
              {exp.role}
            </h3>
            <p className='text-white/40 text-sm mt-1 tracking-wide'>{exp.company} · Remoto</p>
          </div>
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className='self-start sm:self-auto text-[11px] tracking-widest text-white/30 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap'
          >
            {exp.period}
          </span>
        </div>

        {/* divisor */}
        <div className='w-full h-px bg-white/8 mb-5' />

        {/* descripción */}
        <p className='text-white/55 text-sm md:text-base leading-relaxed mb-6'>
          {exp.description}{exp.linkProyecto && (
            <a href={exp.linkProyecto} target='_blank' rel='noopener noreferrer' className='text-white text-sm md:text-base leading-relaxed mb-6 transition-colors duration-200 p-2 pl-0 flex items-center gap-2'>
              Ver Proyecto
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
            </a>
          )}
        </p>

        {exp.descriptionDos && (
          <p className='text-white/55 text-sm md:text-base leading-relaxed mb-6'>
            {exp.descriptionDos}{exp.linkProyectoDos && (
              <a href={exp.linkProyectoDos} target='_blank' rel='noopener noreferrer' className='text-white text-sm md:text-base leading-relaxed mb-6 transition-colors duration-200 p-2 pl-0 flex items-center gap-2'>
                Ver Proyecto
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
              </a>
            )}
          </p>
        )}

        {/* tech pills */}
        <div className='flex flex-wrap gap-2'>
          {exp.tech.map((t) => (
            <span
              key={t}
              style={{ fontFamily: "'DM Mono', monospace" }}
              className='text-[11px] text-white/40 border border-white/10 rounded-full px-3 py-1 tracking-wider hover:text-white/70 hover:border-white/25 transition-colors duration-200'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </GlareHover>

  )
}

const ExperienceSection = () => {
  return (
    <section id='experiencia' className='w-full min-h-screen flex flex-col justify-center py-20 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto w-full'>

        {/* título sección */}
        <div className='flex items-center justify-center gap-4 mb-12'>
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className='text-white/25 text-xs tracking-[0.3em] uppercase'
          >
            Experiencia
          </span>
        </div>

        {/* tarjetas */}
        <div className='flex flex-col gap-5'>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section >
  )
}

export default ExperienceSection