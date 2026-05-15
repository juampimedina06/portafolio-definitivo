'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const NavBar = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Ensuring visibility immediately in case GSAP fails or takes too long
    gsap.set('.nav-reveal', { visibility: 'visible', opacity: 1 })
    
    gsap.from('.nav-reveal', {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    })
    
    gsap.from('.nav-line', {
      scaleX: 0,
      transformOrigin: 'center center',
      duration: 1.5,
      ease: 'expo.inOut',
      delay: 0.2
    })
  }, { scope: container })

  return (
    <header ref={container} className='fixed top-0 left-0 z-[999] w-full bg-black/40 backdrop-blur-md border-b border-white/10'>
      <div className='grid grid-cols-1 md:grid-cols-12 h-20 items-center px-8 md:px-0 relative'>
        {/* Name / Logo */}
        <div className='col-span-1 md:col-span-2 md:col-start-2'>
          <a href="#inicio" className='nav-reveal inline-block text-xl font-black uppercase tracking-swiss-wide text-white hover:text-white/70 transition-colors'>
            J.P. MEDINA
          </a>
        </div>

        {/* Navigation Links */}
        <nav className='hidden md:flex col-span-1 md:col-span-8 md:col-start-4 justify-end gap-16'>
          {[
            { label: 'Bio', href: '#sobre-mi' },
            { label: 'Trabajos', href: '#experiencia' },
            { label: 'Proyectos', href: '#proyectos' },
            { label: 'Stack', href: '#skills' },
            { label: 'Contacto', href: '#contacto' },
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className='nav-reveal text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-white transition-all relative group'
            >
              {item.label}
              <span className='absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full' />
            </a>
          ))}
        </nav>

        {/* Animated Bottom Line */}
        <div className='nav-line absolute bottom-0 left-0 w-full h-px bg-white/20' />
      </div>
    </header>
  )
}

export default NavBar