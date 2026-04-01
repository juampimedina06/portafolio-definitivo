'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './ui/Card'
import BlurText from '../../components/ui/ReactBits/BlurText'

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  category: 'frontend' | 'backend' | 'database' | 'soft-skills' | 'tools'
}

const allCertifications: Certification[] = [
  { id: '1', title: 'XAcademy DevTechnology', issuer: 'Technology with Purpose Foundation', date: 'Nov 2025', category: 'frontend' },
  { id: '2', title: 'Comandos DML: Manipulación de datos con MySQL', issuer: 'Alura Latam', date: 'Mar 2025', category: 'database' },
  { id: '3', title: 'Programa Oracle Next Education F2 T7 Front-end', issuer: 'Alura Latam', date: 'Ene 2025', category: 'frontend' },
  { id: '4', title: 'React: practicando React con JS', issuer: 'Alura Latam', date: 'Ene 2025', category: 'frontend' },
  { id: '5', title: 'React: Function Components', issuer: 'Alura Latam', date: 'Ene 2025', category: 'frontend' },
  { id: '6', title: 'React: Hooks en ReactJS', issuer: 'Alura Latam', date: 'Ene 2025', category: 'frontend' },
  { id: '7', title: 'React: Styled Components', issuer: 'Alura Latam', date: 'Ene 2025', category: 'frontend' },
  { id: '8', title: 'Nivelación TypeScript y React', issuer: 'Alura Latam', date: 'Ene 2025', category: 'frontend' },
  { id: '9', title: 'React Router: Navegación en una SPA', issuer: 'Alura Latam', date: 'Dic 2024', category: 'frontend' },
  { id: '10', title: 'React: como los componentes funcionan', issuer: 'Alura Latam', date: 'Dic 2024', category: 'frontend' },
  { id: '11', title: 'React: desarrollando con JavaScript', issuer: 'Alura Latam', date: 'Nov 2024', category: 'frontend' },
  { id: '12', title: 'Challenge AluraGeek', issuer: 'Alura Latam', date: 'Nov 2024', category: 'frontend' },
  { id: '13', title: 'Formación Front End G7 - ONE', issuer: 'Alura Latam', date: 'Nov 2024', category: 'frontend' },
  { id: '14', title: 'JavaScript para web: páginas dinámicas', issuer: 'Alura Latam', date: 'Oct 2024', category: 'frontend' },
  { id: '15', title: 'JavaScript: manipulando elementos en el DOM', issuer: 'Alura Latam', date: 'Oct 2024', category: 'frontend' },
  { id: '16', title: 'ChatGPT y JavaScript: Juego Pong', issuer: 'Alura Latam', date: 'Oct 2024', category: 'frontend' },
  { id: '17', title: 'Challenge Portafolio', issuer: 'Alura Latam', date: 'Oct 2024', category: 'frontend' },
  { id: '18', title: 'Desde cero: HTML y CSS para proyectos Web', issuer: 'Alura Latam', date: 'Oct 2024', category: 'frontend' },
  { id: '19', title: 'CSS: Flexbox y layouts responsivos', issuer: 'Alura Latam', date: 'Sept 2024', category: 'frontend' },
  { id: '20', title: 'Formación Emprendimiento G7 - ONE', issuer: 'Alura Latam', date: 'Ago 2024', category: 'soft-skills' },
  { id: '21', title: 'Formación Principiante en Programación G7', issuer: 'Alura Latam', date: 'Jul 2024', category: 'frontend' },
  { id: '22', title: 'Maestría en JavaScript', issuer: 'Udemy', date: 'Jun 2024', category: 'frontend' },
  { id: '23', title: 'Git y GitHub: repositorio, commit y versiones', issuer: 'Alura Latam', date: 'Jun 2024', category: 'tools' },
  { id: '24', title: 'Desafío Latam: Aplicación Full Stack', issuer: 'Desafío Latam', date: 'Jun 2024', category: 'backend' },
  { id: '25', title: 'Latin Code Week', issuer: 'Junior Achievement Argentina', date: 'Sept 2023', category: 'soft-skills' },
  { id: '26', title: 'Desafío de Innovación Stellantis', issuer: 'Stellantis', date: 'Oct 2023', category: 'soft-skills' },
  { id: '27', title: 'Introducción a JavaScript', issuer: 'Desafío Latam', date: 'May 2024', category: 'frontend' },
  { id: '28', title: 'Introducción a la Programación', issuer: 'EducacionIT', date: 'May 2024', category: 'frontend' },
]

const highlightedIds = ['1', '3', '22', '13', '6', '23']

const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false)

  const displayedCerts = showAll ? allCertifications : allCertifications.filter(c => highlightedIds.includes(c.id))

  return (
    <section id='certificaciones' className='relative w-full py-24 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-8 h-[1px] bg-[#22D3EE]' />
            <span
              style={{ fontFamily: "'DM Mono', monospace" }}
              className='text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase'
            >
              Certificaciones
            </span>
          </div>

          <div className='overflow-hidden'>
            <BlurText
              text='Credenciales'
              className='text-4xl md:text-5xl font-bold tracking-tight text-white'
              delay={50}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {displayedCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            >
              <a
                href='https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/details/certifications/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card delay={index * 0.05} accentColor='cyan'>
                  <div className='p-5'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-[#22D3EE] text-[10px] tracking-wider'>
                        {cert.date}
                      </span>
                      <svg className='w-4 h-4 text-white/30' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' />
                      </svg>
                    </div>
                    <h3 className='text-white text-sm font-medium mb-1 leading-tight group-hover:text-[#22D3EE] transition-colors'>
                      {cert.title}
                    </h3>
                    <p className='text-white/40 text-xs'>
                      {cert.issuer}
                    </p>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        <div className='flex justify-center mt-12'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='group flex items-center gap-3 border border-[#22D3EE]/30 text-[#22D3EE] text-sm px-8 py-4 hover:bg-[#22D3EE]/10 hover:border-[#22D3EE]/50 transition-all duration-300'
          >
            <span>{showAll ? 'Ver menos' : `Ver todas (${allCertifications.length})`}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
