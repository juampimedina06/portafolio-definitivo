'use client'

import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  category: string
}

const allCertifications: Certification[] = [
  { id: '1', title: 'XAcademy DevTechnology', issuer: 'Technology with Purpose', date: '2025', category: 'DEV' },
  { id: '2', title: 'DML MySQL Manipulation', issuer: 'Alura Latam', date: '2025', category: 'DB' },
  { id: '3', title: 'Oracle Next Education G7', issuer: 'Oracle & Alura', date: '2025', category: 'CORE' },
  { id: '4', title: 'React Hooks & Function Components', issuer: 'Alura Latam', date: '2025', category: 'FRONT' },
  { id: '5', title: 'React Router SPA', issuer: 'Alura Latam', date: '2024', category: 'FRONT' },
  { id: '6', title: 'TypeScript & React Architecture', issuer: 'Alura Latam', date: '2025', category: 'ARCH' },
  { id: '7', title: 'Git & GitHub Workflow', issuer: 'Alura Latam', date: '2024', category: 'TOOL' },
  { id: '8', title: 'JavaScript DOM Manipulation', issuer: 'Alura Latam', date: '2024', category: 'CORE' },
]

const CertificationsSection = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.cert-grid-item', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%'
      }
    })
  }, { scope: container })

  return (
    <section 
      ref={container}
      id='certificaciones' 
      className='col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 py-64 px-8 md:px-0 bg-transparent text-white border-b border-white/10'
    >
      {/* Label */}
      <div className="col-span-1 md:col-span-2 md:col-start-2 mb-24 md:mb-0">
        <span className="small-caps text-xs tracking-swiss-wide opacity-50 block text-white">Premios / Certificados</span>
      </div>

      <div className='col-span-1 md:col-span-8 md:col-start-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10'>
          {allCertifications.map((cert) => (
            <div 
              key={cert.id} 
              className='cert-grid-item aspect-square border-r border-b border-white/10 p-8 flex flex-col justify-between hover:bg-white hover:text-black transition-all group cursor-default'
            >
              <div className='flex justify-between items-start'>
                <span className='text-[10px] font-black tracking-widest opacity-30 group-hover:opacity-100'>{cert.category}</span>
                <span className='text-[10px] font-black tracking-widest opacity-30 group-hover:opacity-100'>{cert.date}</span>
              </div>
              
              <h3 className='text-xl font-black uppercase tracking-tighter leading-tight'>
                {cert.title}
              </h3>
              
              <div className='overflow-hidden'>
                <span className='block text-[10px] font-bold small-caps tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-full group-hover:translate-y-0'>
                  Verificado por {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-24 flex justify-between items-end'>
          <div className='flex flex-col gap-2'>
            <span className='small-caps text-[10px] font-bold tracking-widest opacity-30'>Archivo Completo</span>
            <a href="#" className='text-2xl font-black uppercase tracking-swiss border-b-4 border-white'>
              Ver Todo
            </a>
          </div>
          <span className='text-8xl font-black opacity-[0.03] select-none text-white'>CERT</span>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
