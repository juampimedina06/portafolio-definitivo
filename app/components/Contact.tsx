'use client'

import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactMethods = [
  { label: 'Correo', value: 'jpmedinagomez1@gmail.com', href: 'mailto:jpmedinagomez1@gmail.com' },
  { label: 'LinkedIn', value: 'Juan Pablo Medina', href: 'https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/' },
  { label: 'GitHub', value: 'juampimedina06', href: 'https://github.com/juampimedina06' },
]

const Contact = () => {
  const container = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useGSAP(() => {
    gsap.from('.contact-reveal', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:jpmedinagomez1@gmail.com?subject=Contacto de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`
    window.open(mailtoLink, '_blank')
  }

  return (
    <section 
      ref={container}
      id='contacto' 
      className='col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 py-64 px-8 md:px-0 bg-transparent text-white border-b border-white/10 relative overflow-hidden'
    >
      {/* Decorative Text */}
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none'>
        <span className='text-[35vw] font-black leading-none uppercase tracking-tighter'>HOLA</span>
      </div>

      {/* Label */}
      <div className="col-span-1 md:col-span-2 md:col-start-2 mb-24 md:mb-0 relative z-10">
        <span className="small-caps text-xs tracking-swiss-wide opacity-50 block">Contacto / Consulta</span>
      </div>

      <div className='col-span-1 md:col-span-8 md:col-start-4 grid grid-cols-1 md:grid-cols-8 gap-24 relative z-10'>
        {/* Form */}
        <div className='md:col-span-5 flex flex-col gap-16'>
          <div className='flex flex-col gap-6'>
            <h2 className='contact-reveal text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]'>
              Hagamos <br />
              Algo <br />
              <span className='text-outline-thin text-white opacity-30'>Épico.</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-12'>
            <div className='contact-reveal flex flex-col gap-2 group'>
              <label className='small-caps text-[10px] font-bold tracking-widest opacity-30 group-focus-within:opacity-100 transition-opacity uppercase'>Tu Nombre</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Escribe aquí'
                className='w-full bg-transparent border-b border-white/20 text-2xl font-black uppercase tracking-swiss py-4 outline-none focus:border-white transition-colors placeholder:opacity-20'
              />
            </div>
            
            <div className='contact-reveal flex flex-col gap-2 group'>
              <label className='small-caps text-[10px] font-bold tracking-widest opacity-30 group-focus-within:opacity-100 transition-opacity uppercase'>Tu Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='email@ejemplo.com'
                className='w-full bg-transparent border-b border-white/20 text-2xl font-black uppercase tracking-swiss py-4 outline-none focus:border-white transition-colors placeholder:opacity-20'
              />
            </div>
            
            <div className='contact-reveal flex flex-col gap-2 group'>
              <label className='small-caps text-[10px] font-bold tracking-widest opacity-30 group-focus-within:opacity-100 transition-opacity uppercase'>Mensaje</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder='¿En qué puedo ayudarte?'
                className='w-full bg-transparent border-b border-white/20 text-2xl font-black uppercase tracking-swiss py-4 outline-none focus:border-white transition-colors resize-none placeholder:opacity-20'
              />
            </div>
            
            <div className='contact-reveal mt-8'>
              <button
                type='submit'
                className='group relative flex items-center gap-4 bg-white text-black px-12 py-6 font-black uppercase tracking-swiss hover:bg-black hover:text-white border border-white transition-all overflow-hidden'
              >
                <span className='relative z-10'>Enviar Mensaje</span>
                <div className='h-2 w-2 rounded-full bg-black group-hover:bg-white group-hover:scale-[15] transition-transform duration-500 origin-center' />
              </button>
            </div>
          </form>
        </div>

        {/* Links & Details */}
        <div className='md:col-span-3 flex flex-col justify-between py-8'>
          <div className='flex flex-col gap-12'>
            {contactMethods.map((method) => (
              <div key={method.label} className='contact-reveal flex flex-col gap-2'>
                <span className='small-caps text-[10px] font-bold tracking-widest opacity-30 uppercase'>{method.label}</span>
                <a 
                  href={method.href} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-xl font-black uppercase tracking-swiss hover:opacity-50 transition-opacity border-b border-transparent hover:border-white/20 w-fit'
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>

          <div className='contact-reveal flex flex-col gap-4 border-t border-white/10 pt-12 mt-12'>
            <div className='flex items-center gap-3'>
              <div className='h-3 w-3 rounded-full bg-green-500 animate-pulse' />
              <span className='small-caps text-xs font-bold tracking-widest opacity-80 uppercase'>Disponible para Proyectos</span>
            </div>
            <p className='text-xs opacity-40 leading-tight'>
              Actualmente aceptando nuevos desafíos para el Q2 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
