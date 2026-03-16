'use client'
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'jpmedinagomez1@gmail.com',
    href: 'mailto:jpmedinagomez1@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Juan Pablo Medina',
    href: 'https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'juampimedina06',
    href: 'https://github.com/juampimedina06',
  },
]

// Variantes de animación
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as any },
  },
}

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.35, ease: 'easeOut' } as any },
}

const glowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.4 } },
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [focusedField, setFocusedField] = useState<string | null>(null)

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
      id='contacto'
      ref={sectionRef}
      className='relative min-h-screen w-full bg-black flex justify-center items-center flex-col py-24 px-6 overflow-hidden'
    >
      {/* Título de sección */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className='flex flex-col items-center gap-4 mb-16 w-full max-w-7xl relative z-10'
      >
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className='text-white/25 text-xs tracking-[0.3em] uppercase'
        >
          Contacto
        </span>
      </motion.div>

      {/* Contenido principal: Formulario + Métodos de contacto */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='w-full max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10'
      >
        {/* Formulario de contacto - ocupa 3 columnas */}
        <motion.div
          variants={itemVariants}
          className='lg:col-span-3'
        >
          <form onSubmit={handleSubmit} className='relative group'>
            {/* Card glow effect */}
            <div className='absolute -inset-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl opacity-0  transition-opacity duration-700' />

            <div className='relative  p-8 md:p-10 backdrop-blur-sm'>
              <div className='flex flex-col gap-6'>
                {/* Nombre */}
                <div className='relative'>
                  <motion.label
                    className='block text-white/40 text-xs uppercase tracking-widest mb-2'
                    animate={{
                      color: focusedField === 'name' ? 'rgba(255,255,255,0.8)' : 'rgba(255, 255, 255, 1)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Nombre
                  </motion.label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className='w-full bg-transparent border-b border-white/10 text-white text-lg py-3 
                      outline-none focus:border-white/40 transition-colors duration-500
                      placeholder:text-white/15'
                    placeholder='Tu nombre'
                  />
                  <motion.div
                    className='absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-white/80 to-transparent'
                    initial={{ width: '0%' }}
                    animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any }}
                  />
                </div>

                {/* Email */}
                <div className='relative'>
                  <motion.label
                    className='block text-white/40 text-xs uppercase tracking-widest mb-2'
                    animate={{
                      color: focusedField === 'email' ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Email
                  </motion.label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className='w-full bg-transparent border-b border-white/10 text-white text-lg py-3 
                      outline-none focus:border-white/40 transition-colors duration-500
                      placeholder:text-white/15'
                    placeholder='tu@email.com'
                  />
                  <motion.div
                    className='absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-white/80 to-transparent'
                    initial={{ width: '0%' }}
                    animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any }}
                  />
                </div>

                {/* Mensaje */}
                <div className='relative'>
                  <motion.label
                    className='block text-white/40 text-xs uppercase tracking-widest mb-2'
                    animate={{
                      color: focusedField === 'message' ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Mensaje
                  </motion.label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className='w-full bg-transparent border-b border-white/10 text-white text-lg py-3 
                      outline-none focus:border-white/40 transition-colors duration-500 resize-none
                      placeholder:text-white/15'
                    placeholder='Contame sobre tu proyecto...'
                  />
                  <motion.div
                    className='absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-white/80 to-transparent'
                    initial={{ width: '0%' }}
                    animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as any }}
                  />
                </div>

                {/* Botón de enviar */}
                <motion.button
                  type='submit'
                  className='relative mt-4 w-full py-4 rounded-2xl text-black font-semibold text-sm uppercase tracking-widest overflow-hidden group/btn cursor-pointer'
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='absolute inset-0 bg-white transition-all duration-500 group-hover/btn:bg-white/90' />
                  <div className='absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white via-gray-100 to-white' />
                  <span className='relative z-10 flex items-center justify-center gap-2'>
                    Enviar Mensaje
                    <motion.svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
                    </motion.svg>
                  </span>
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Métodos de contacto - ocupa 2 columnas */}
        <motion.div
          variants={itemVariants}
          className='lg:col-span-2 flex flex-col gap-4'
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target='_blank'
              rel='noopener noreferrer'
              variants={cardHover}
              initial='rest'
              whileHover='hover'
              className='relative group/card block'
            >
              {/* Card glow */}
              <motion.div
                variants={glowVariants}
                className='absolute -inset-[1px] bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-2xl'
              />

              <div className='relative border border-b-white/[0.08]  p-6 backdrop-blur-sm
                transition-colors duration-500 group-hover/card:bg-white/[0.06]'>
                <div className='flex items-center gap-5'>
                  <div className='w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 
                    group-hover/card:text-white group-hover/card:border-white/20 transition-all duration-500'>
                    {method.icon}
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-white/30 text-xs uppercase tracking-widest mb-1'>
                      {method.label}
                    </p>
                    <p className='text-white text-sm font-medium truncate group-hover/card:text-white/90 transition-colors'>
                      {method.value}
                    </p>
                  </div>
                  <motion.div
                    className='text-white/20 group-hover/card:text-white/60 transition-colors'
                    animate={{}}
                  >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={1.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Card de disponibilidad */}
          <motion.div
            variants={itemVariants}
            className='relative mt-4'
          >
            <div className='bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='relative flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500' />
                </span>
                <span className='text-white/60 text-sm'>Disponible para trabajar</span>
              </div>
              <p className='text-white/30 text-xs leading-relaxed'>
                Actualmente abierto a nuevos proyectos freelance y oportunidades laborales.
                Respondo en menos de 24 horas.
              </p>
            </div>
          </motion.div>

          {/* Ubicación */}
          <motion.div variants={itemVariants}>
            <div className='flex items-center gap-3 px-2 py-3'>
              <svg className='w-4 h-4 text-white/25' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={1.5}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' />
              </svg>
              <span className='text-white/30 text-xs tracking-wider'>
                Córdoba, Argentina 🇦🇷
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact