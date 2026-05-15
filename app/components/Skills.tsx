'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Engine / Frontend',
    skills: ['React', 'Next.js', 'Angular', 'Astro', 'TypeScript', 'Tailwind', 'Three.js']
  },
  {
    title: 'Architecture / Backend',
    skills: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Workflow / Design',
    skills: ['Git', 'Vercel', 'Figma', 'Zustand', 'React Query', 'Postman']
  }
]

const Skills = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.skill-block', {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%'
      }
    })

    // Scrolling text animation (marquee style but subtle)
    gsap.to('.skill-marquee', {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: 'top bottom',
        end: 'bottom top'
      }
    })
  }, { scope: container })

  return (
    <section 
      ref={container}
      id='skills' 
      className='col-span-1 md:col-span-12 py-64 bg-transparent text-white overflow-hidden relative border-b border-white/10'
    >
      {/* Background Marquee Text */}
      <div className='skill-marquee absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.05]'>
        <span className='text-[40vw] font-black uppercase tracking-tighter'>CAPABILITIES CAPABILITIES CAPABILITIES</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-12 px-8 md:px-0 relative z-10'>
        {/* Label */}
        <div className="col-span-1 md:col-span-2 md:col-start-2 mb-24 md:mb-0">
          <span className="small-caps text-xs tracking-swiss-wide opacity-50 block">Logic / Tools</span>
        </div>

        <div className='col-span-1 md:col-span-8 md:col-start-4 grid grid-cols-1 md:grid-cols-3 gap-24'>
          {skillCategories.map((category) => (
            <div key={category.title} className='skill-block flex flex-col gap-12'>
              <div className='flex flex-col gap-2'>
                <span className='text-[10px] font-bold opacity-30 small-caps tracking-widest'>Section</span>
                <h3 className='text-2xl font-black uppercase tracking-swiss border-b border-white/10 pb-4'>
                  {category.title}
                </h3>
              </div>
              
              <div className='flex flex-col gap-6'>
                {category.skills.map((skill) => (
                  <div key={skill} className='group flex items-center gap-4'>
                    <div className='h-px w-0 bg-white group-hover:w-8 transition-all duration-500' />
                    <span className='text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none hover:text-outline-thin transition-all cursor-default'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className='absolute bottom-12 right-12 flex flex-col items-end opacity-20'>
        <span className='text-6xl font-black leading-none'>99%</span>
        <span className='small-caps text-[10px] font-bold tracking-widest'>Efficiency Target</span>
      </div>
    </section>
  )
}

export default Skills
