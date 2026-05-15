'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const formations = [
  {
    year: '2025',
    title: 'Universidad de Alta Ingeniería',
    degree: 'Ingeniero de Sistemas Full Stack',
    location: 'Remoto / Global',
    details: 'Especialización en arquitecturas cloud escalables y sistemas reactivos complejos.'
  },
  {
    year: '2024',
    title: 'Digital Design Lab',
    degree: 'Sistemas de Diseño Suizo y UI Logic',
    location: 'Workshop Intensivo',
    details: 'Dominio de la grilla, jerarquía tipográfica y comunicación visual objetiva.'
  },
  {
    year: '2023',
    title: 'Oracle Next Education',
    degree: 'G7 Backend & Core Logic',
    location: 'Academia Online',
    details: 'Profundización en optimización de bases de datos, eficiencia algorítmica y principios Clean Code.'
  }
]

const Formations = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.formation-item', {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%'
      }
    })

    gsap.from('.formation-line', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 2,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%'
      }
    })
  }, { scope: container })

  return (
    <section 
      ref={container}
      id='formacion' 
      className='col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 py-64 px-8 md:px-0 bg-transparent text-white border-b border-white/10 relative overflow-hidden'
    >
      {/* Decorative Index */}
      <div className='absolute right-12 top-24 opacity-[0.03] select-none pointer-events-none'>
        <span className='text-[20vw] font-black leading-none uppercase'>ACADEMIA</span>
      </div>

      {/* Label */}
      <div className="col-span-1 md:col-span-2 md:col-start-2 mb-24 md:mb-0">
        <span className="small-caps text-xs tracking-swiss-wide opacity-50 block sticky top-32">Academia / Camino</span>
      </div>

      <div className='col-span-1 md:col-span-8 md:col-start-4 flex flex-col gap-0'>
        {formations.map((item, index) => (
          <div key={index} className='formation-item group relative py-16 border-t border-white/10 last:border-b transition-colors hover:bg-white/5'>
            <div className='grid grid-cols-1 md:grid-cols-8 gap-8 items-start'>
              {/* Year */}
              <div className='md:col-span-1'>
                <span className='text-xl font-black opacity-30 group-hover:opacity-100 transition-opacity'>{item.year}</span>
              </div>

              {/* Title & Degree */}
              <div className='md:col-span-4 flex flex-col gap-2'>
                <h3 className='text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-500'>
                  {item.title}
                </h3>
                <span className='text-sm font-bold tracking-widest uppercase opacity-50'>{item.degree}</span>
              </div>

              {/* Location & Details */}
              <div className='md:col-span-3 flex flex-col gap-4'>
                <span className='text-[10px] font-bold uppercase tracking-widest opacity-30 flex items-center gap-2'>
                  <div className='w-2 h-2 rounded-full bg-white opacity-20' />
                  {item.location}
                </span>
                <p className='text-base opacity-60 leading-tight max-w-sm'>
                  {item.details}
                </p>
              </div>
            </div>

            {/* Hover Line */}
            <div className='formation-line absolute top-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Formations
