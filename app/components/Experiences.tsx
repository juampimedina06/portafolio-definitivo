'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  index: string
}

const experiences: Experience[] = [
  {
    role: 'Front-End Developer — Internship',
    company: 'HypperCompany',
    period: 'Nov 2025 — Feb 2026',
    description: 'Developed reusable components from Figma designs, improving visual consistency. Implemented interactive features and animations, including 3D elements with Three.js. Managed global state with Context API for dynamic content.',
    linkProyecto: 'https://hyperrealitycompany.com/',
    descriptionDos: 'Collaborated directly with the CTO on new website sections.',
    linkProyectoDos: 'https://green-book-web.netlify.app/',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Three.js', 'Figma', 'Context API'],
    index: '001'
  },
  {
    role: 'Full Stack Developer — Collaborative Project',
    company: 'Technology with Purpose Foundation',
    period: 'Feb 2026 — Present',
    description: 'Frontend development in Angular with modular architecture and REST API consumption. Backend endpoint development with Node.js and Express for data management.',
    linkProyecto: '',
    descriptionDos: 'Teamwork under Scrum, organizing tasks with Jira and performing code reviews.',
    linkProyectoDos: '',
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Scrum', 'Jira'],
    index: '002'
  },
]

const ExperienceSection = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.exp-item', {
      x: -100,
      opacity: 0,
      stagger: 0.3,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%'
      }
    })

    gsap.from('.exp-line-v', {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 2,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%'
      }
    })
  }, { scope: container })

  return (
    <section 
      ref={container}
      id='experiencia' 
      className='col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 py-64 px-8 md:px-0 bg-transparent text-white relative border-b border-white/10'
    >
      {/* Background Vertical Line */}
      <div className='exp-line-v absolute left-[8.333%] top-0 w-px h-full bg-white/5' />

      {/* Label */}
      <div className="col-span-1 md:col-span-2 md:col-start-2 mb-24 md:mb-0">
        <span className="small-caps text-xs tracking-swiss-wide opacity-50 block sticky top-32">Historia / Trayectoria</span>
      </div>

      <div className='col-span-1 md:col-span-8 md:col-start-4 flex flex-col gap-48'>
        {experiences.map((exp) => (
          <div key={exp.index} className='exp-item grid grid-cols-1 md:grid-cols-8 gap-12 relative'>
            {/* Index Number */}
            <div className='absolute -left-12 top-0 text-6xl font-black opacity-[0.03] select-none text-white'>
              {exp.index}
            </div>

            <div className='md:col-span-3 flex flex-col gap-4'>
              <span className='small-caps text-[10px] font-bold tracking-widest opacity-30'>{exp.period}</span>
              <h3 className='text-4xl font-black uppercase tracking-tighter leading-[0.9] text-white'>
                {exp.role.split(' — ').map((part, i) => (
                  <span key={i} className={i === 1 ? 'text-outline-thin text-white opacity-30 block' : 'block'}>
                    {part}
                  </span>
                ))}
              </h3>
              <p className='text-sm font-bold opacity-50 uppercase tracking-swiss-wide mt-4'>
                @ {exp.company}
              </p>
            </div>

            <div className='md:col-span-5 flex flex-col gap-12 text-white'>
              <div className='flex flex-col gap-8 text-xl opacity-70 leading-relaxed font-medium max-w-xl'>
                <p>{exp.description}</p>
                {exp.descriptionDos && (
                  <div className='pl-8 border-l border-white/10'>
                    <p className='text-base opacity-60 italic'>{exp.descriptionDos}</p>
                  </div>
                )}
              </div>

              {/* Action & Tech */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-white/5'>
                <div className='flex flex-col gap-4'>
                  <span className='small-caps text-[10px] font-bold tracking-widest opacity-20 uppercase'>Consulta</span>
                  <div className='flex flex-col gap-4'>
                    {exp.linkProyecto && (
                      <a href={exp.linkProyecto} target='_blank' className='text-xs font-black uppercase tracking-swiss border-b-2 border-white pb-1 hover:bg-white hover:text-black transition-all w-fit'>
                        Referencia Alpha
                      </a>
                    )}
                    {exp.linkProyectoDos && (
                      <a href={exp.linkProyectoDos} target='_blank' className='text-xs font-black uppercase tracking-swiss border-b-2 border-white pb-1 hover:bg-white hover:text-black transition-all w-fit'>
                        Referencia Beta
                      </a>
                    )}
                  </div>
                </div>

                <div className='flex flex-col gap-4'>
                  <span className='small-caps text-[10px] font-bold tracking-widest opacity-20 uppercase'>Stack Utilizado</span>
                  <div className='flex flex-wrap gap-2'>
                    {exp.tech.map((t) => (
                      <span key={t} className='px-2 py-1 bg-white text-black text-[9px] font-bold uppercase tracking-widest'>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
