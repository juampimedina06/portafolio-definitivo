'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './ui/Card'
import BlurText from '../../components/ui/ReactBits/BlurText'

gsap.registerPlugin(ScrollTrigger)

interface Formation {
  id: string
  title: string
  institution: string
  period: string
  description: string
  type: 'university' | 'bootcamp' | 'course'
  image: string
}

const formations: Formation[] = [
  { id: '1', title: 'Tecnicatura Superior en Desarrollo de Software', institution: 'Instituto Técnico Superior Córdoba', period: 'En curso', description: 'Formación técnica en desarrollo de software con énfasis en programación, estructuras de datos y metodologías ágiles.', type: 'university', image: '/imagenes/itsc.png' },
  { id: '2', title: 'Oracle Next Education / Alura Latam', institution: 'Oracle & Alura', period: '2024', description: 'Desarrollo web con JavaScript, React y MySQL. Formación en frontend moderno y bases de datos.', type: 'bootcamp', image: '/imagenes/alura.png' },
  { id: '3', title: 'Technology with Purpose Foundation', institution: 'TWP Foundation', period: '2026', description: 'Formación en Node.js, Angular y bases de datos. Metodología Scrum y trabajo en equipo.', type: 'bootcamp', image: '/imagenes/twp.jpg' },
]

const typeConfig = {
  university: { label: 'Universidad', color: '#22D3EE' },
  bootcamp: { label: 'Bootcamp', color: '#A78BFA' },
  course: { label: 'Curso', color: '#34D399' },
}

const FormationsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll('.formation-item')
      items.forEach((item, i) => {
        gsap.fromTo(item, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: i * 0.15, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 85%' } })
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section id='formaciones' className='relative w-full py-24 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-20'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-8 h-[1px] bg-[#22D3EE]' />
            <span style={{ fontFamily: "'DM Mono', monospace" }} className='text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase'>
              Formación
            </span>
          </div>
          <BlurText text='Educación' className='text-4xl md:text-5xl font-bold tracking-tight text-white' delay={50} />
        </div>

        <div ref={containerRef} className='space-y-0'>
          {formations.map((formation, index) => (
            <div key={formation.id} className='formation-item grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-white/10 group'>
              <div className='md:col-span-3'>
                <div className='mt-2'>
                  <img src={formation.image} alt={formation.title} className='w-24 h-24 object-contain rounded-full' />
                </div>
              </div>
              <div className='md:col-span-5'>
                <h3 className='text-xl md:text-2xl font-medium text-white mb-1 group-hover:translate-x-2 transition-transform duration-300'>
                  {formation.title}
                </h3>
                <p className='text-white/50 text-sm'>{formation.institution}</p>
              </div>
              <div className='md:col-span-4'>
                <p className='text-white/40 text-sm leading-relaxed'>{formation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FormationsSection
