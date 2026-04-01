'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './ui/Card'
import BlurText from '../../components/ui/ReactBits/BlurText'

gsap.registerPlugin(ScrollTrigger)

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
    role: 'Desarrollador Front-End — Pasantía',
    company: 'HypperCompany',
    period: 'Nov 2025 — Feb 2026',
    description: 'Desarrollé componentes reutilizables a partir de diseños en Figma, mejorando la consistencia visual del sitio. Implementé funcionalidades interactivas y animaciones, incluyendo integración de elementos 3D con Three.js. Gestioné estado global con Context API para contenido dinámico.',
    linkProyecto: 'https://hyperrealitycompany.com/',
    descriptionDos: 'Colaboré directamente con el CTO en la implementación de nuevas secciones del sitio web.',
    linkProyectoDos: 'https://green-book-web.netlify.app/',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Three.js', 'Figma', 'Context API'],
  },
  {
    role: 'Desarrollador Full Stack — Proyecto Colaborativo',
    company: 'Technology with Purpose Foundation',
    period: 'Feb 2026 — Actualidad',
    description: 'Desarrollo de frontend en Angular con arquitectura modular y consumo de APIs REST. Desarrollo de endpoints backend con Node.js y Express para gestión de datos.',
    linkProyecto: '',
    descriptionDos: 'Trabajo en equipo bajo Scrum, organizando tareas con Jira y realizando code reviews.',
    linkProyectoDos: '',
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Scrum', 'Jira'],
  },
]

const ExperienceSection = () => {
  return (
    <section id='experiencia' className='relative w-full py-24 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-8 h-[1px] bg-[#22D3EE]' />
            <span style={{ fontFamily: "'DM Mono', monospace" }} className='text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase'>
              Experiencia
            </span>
          </div>
          <BlurText
            text='Trayectoria'
            className='text-4xl md:text-5xl font-bold tracking-tight text-white'
            delay={50}
          />
        </div>

        <div className='space-y-6'>
          {experiences.map((exp, index) => (
            <div key={index}>
              <Card delay={index * 0.1} accentColor='cyan'>
                <div className='p-8 md:p-10'>
                  <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6'>
                    <div>
                      <h3 className='text-2xl md:text-3xl font-medium text-white tracking-tight'>
                        {exp.role}
                      </h3>
                      <p className='text-[#22D3EE] text-sm mt-1'>{exp.company}</p>
                    </div>
                    <span style={{ fontFamily: "'DM Mono', monospace" }} className='text-white/30 text-xs tracking-wider self-start'>
                      {exp.period}
                    </span>
                  </div>

                  <p className='text-white/50 text-sm leading-relaxed mb-4'>
                    {exp.description}
                  </p>

                  {exp.linkProyecto && (
                    <a href={exp.linkProyecto} target='_blank' rel='noopener noreferrer' className='text-[#22D3EE] text-sm hover:underline inline-flex items-center gap-2 mb-4'>
                      Ver proyecto
                      <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
                      </svg>
                    </a>
                  )}

                  {exp.descriptionDos && (
                    <>
                      <p className='text-white/40 text-sm leading-relaxed mb-4'>
                        {exp.descriptionDos}
                      </p>
                      {exp.linkProyectoDos && (
                        <a href={exp.linkProyectoDos} target='_blank' rel='noopener noreferrer' className='text-[#22D3EE] text-sm hover:underline inline-flex items-center gap-2'>
                          Ver proyecto
                          <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
                          </svg>
                        </a>
                      )}
                    </>
                  )}

                  <div className='flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10'>
                    {exp.tech.map((t) => (
                      <span key={t} style={{ fontFamily: "'DM Mono', monospace" }} className='text-[#22D3EE]/60 text-[10px] tracking-wider border border-[#22D3EE]/20 px-3 py-1 rounded-full'>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
