'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import Card from './ui/Card'
import BlurText from '../../components/ui/ReactBits/BlurText'

const contactMethods = [
  { label: 'Email', value: 'jpmedinagomez1@gmail.com', href: 'mailto:jpmedinagomez1@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'Juan Pablo Medina', href: 'https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/', icon: Linkedin },
  { label: 'GitHub', value: 'juampimedina06', href: 'https://github.com/juampimedina06', icon: Github },
]

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
    <section id='contacto' ref={sectionRef} className='relative w-full py-24 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-8 h-[1px] bg-[#22D3EE]' />
            <span style={{ fontFamily: "'DM Mono', monospace" }} className='text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase'>
              Contacto
            </span>
          </div>
          <BlurText
            text='Hablemos'
            className='text-4xl md:text-5xl font-bold tracking-tight text-white'
            delay={50}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card accentColor='cyan'>
              <form onSubmit={handleSubmit} className='p-8 flex flex-col gap-6'>
                <div className='relative'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className='w-full bg-transparent border-b text-white text-base py-3 outline-none transition-colors placeholder:text-white/20'
                    style={{ borderColor: focusedField === 'name' ? '#22D3EE' : 'rgba(255,255,255,0.1)' }}
                    placeholder='Nombre'
                  />
                </div>
                <div className='relative'>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className='w-full bg-transparent border-b text-white text-base py-3 outline-none transition-colors placeholder:text-white/20'
                    style={{ borderColor: focusedField === 'email' ? '#22D3EE' : 'rgba(255,255,255,0.1)' }}
                    placeholder='Email'
                  />
                </div>
                <div className='relative'>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className='w-full bg-transparent border-b text-white text-base py-3 outline-none transition-colors resize-none placeholder:text-white/20'
                    style={{ borderColor: focusedField === 'message' ? '#22D3EE' : 'rgba(255,255,255,0.1)' }}
                    placeholder='Mensaje'
                  />
                </div>
                <button
                  type='submit'
                  className='bg-[#fff] text-black rounded-lg font-medium text-sm py-4 mt-4 hover:bg-[#22D3EE]/90 transition-colors'
                >
                  Enviar mensaje
                </button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col gap-4'
          >
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <a key={method.label} href={method.href} target='_blank' rel='noopener noreferrer'>
                  <Card hoverable={true} accentColor='cyan'>
                    <div className='p-6 flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <div className='w-10 h-10 rounded-xl flex items-center justify-center' style={{ backgroundColor: '#22D3EE15', border: '1px solid #22D3EE30' }}>
                          <IconComponent size={20} className='text-[#22D3EE]' />
                        </div>
                        <div>
                          <p className='text-white/30 text-[10px] tracking-widest uppercase mb-1'>{method.label}</p>
                          <p className='text-white text-sm'>{method.value}</p>
                        </div>
                      </div>
                      <svg className='w-5 h-5 text-white/20' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
                      </svg>
                    </div>
                  </Card>
                </a>
              )
            })}

            <div className='flex items-center gap-3 mt-6'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75' />
                <span className='relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]' />
              </span>
              <span className='text-white/40 text-sm'>Disponible para trabajar</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
