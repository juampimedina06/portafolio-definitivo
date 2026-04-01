'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from './ui/Card'
import BlurText from '../../components/ui/ReactBits/BlurText'

import Express from '../../components/ui/LenguajesSVG/Back/Express'
import NodeJS from '../../components/ui/LenguajesSVG/Back/NodeJS'
import Supabase from '../../components/ui/LenguajesSVG/Back/Supabase'

import MySQL from '../../components/ui/LenguajesSVG/BaseDeDatos/MySQL'
import PostgreSQL from '../../components/ui/LenguajesSVG/BaseDeDatos/PostgreSQL'
import SQLServer from '../../components/ui/LenguajesSVG/BaseDeDatos/SQLserver'

import Angular from '../../components/ui/LenguajesSVG/Front/Angular'
import Css from '../../components/ui/LenguajesSVG/Front/Css'
import Html from '../../components/ui/LenguajesSVG/Front/Html'
import Javascript from '../../components/ui/LenguajesSVG/Front/Javascript'
import ReactIcon from '../../components/ui/LenguajesSVG/Front/React'
import Tailwind from '../../components/ui/LenguajesSVG/Front/Talwind'
import Typescript from '../../components/ui/LenguajesSVG/Front/Typescript'
import NextJS from '../../components/ui/LenguajesSVG/Front/NextJS'
import Astro from '../../components/ui/LenguajesSVG/Front/Astro'

import Zustand from '../../components/ui/LenguajesSVG/Herramientas/Zustand'
import TanStackQuery from '../../components/ui/LenguajesSVG/Herramientas/TanStackQuery'
import ChartJS from '../../components/ui/LenguajesSVG/Herramientas/ChartJS'

import Figma from '../../components/ui/LenguajesSVG/Herramientas/Figma'
import Git from '../../components/ui/LenguajesSVG/Herramientas/Git'
import GitHub from '../../components/ui/LenguajesSVG/Herramientas/GitHub'
import Postman from '../../components/ui/LenguajesSVG/Herramientas/Postaman'
import Vercel from '../../components/ui/LenguajesSVG/Herramientas/Vercel'

import Antigravity from '../../components/ui/LenguajesSVG/IAtools/Antigrabity'
import Claude from '../../components/ui/LenguajesSVG/IAtools/Claude'
import OpenAI from '../../components/ui/LenguajesSVG/IAtools/OpenAI'

const skillCategories = [
  {
    title: 'Front',
    color: '#22D3EE',
    icons: [
      { component: Html, name: 'HTML' },
      { component: Css, name: 'CSS' },
      { component: Javascript, name: 'JavaScript' },
      { component: Typescript, name: 'TypeScript' },
      { component: ReactIcon, name: 'React' },
      { component: NextJS, name: 'Next.js' },
      { component: Angular, name: 'Angular' },
      { component: Astro, name: 'Astro' },
      { component: Tailwind, name: 'Tailwind' }
    ]
  },
  {
    title: 'Back',
    color: '#A78BFA',
    icons: [
      { component: NodeJS, name: 'Node.js' },
      { component: Express, name: 'Express' },
      { component: Supabase, name: 'Supabase' }
    ]
  },
  {
    title: 'Base de Datos',
    color: '#34D399',
    icons: [
      { component: PostgreSQL, name: 'PostgreSQL' },
      { component: MySQL, name: 'MySQL' },
      { component: SQLServer, name: 'SQL Server' }
    ]
  },
  {
    title: 'Herramientas',
    color: '#F472B6',
    icons: [
      { component: Git, name: 'Git' },
      { component: GitHub, name: 'GitHub' },
      { component: Vercel, name: 'Vercel' },
      { component: Figma, name: 'Figma' },
      { component: Postman, name: 'Postman' },
      { component: Zustand, name: 'Zustand' },
      { component: TanStackQuery, name: 'TanStack Query' },
      { component: ChartJS, name: 'Chart.js' }
    ]
  },
  {
    title: 'IA Tools',
    color: '#FBBF24',
    icons: [
      { component: OpenAI, name: 'OpenAI' },
      { component: Claude, name: 'Claude' },
      { component: Antigravity, name: 'Antigravity' }
    ]
  },
]

const AccordionItem = ({ category }: { category: typeof skillCategories[0] }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card hoverable={true} accentColor='cyan' className='overflow-hidden'>
      <button onClick={() => setIsOpen(!isOpen)} className='w-full flex justify-between items-center p-6 text-left group'>
        <div className='flex items-center gap-4'>
          <h3 className='text-xl md:text-3xl border-l-2 border-[#22D3EE] pl-4 text-white tracking-tight group-hover:text-white/80 transition-colors'>
            {category.title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className='text-[#22D3EE] text-2xl font-light'
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden'
          >
            <div className='px-6 pb-6 border-t border-white/10'>
              <div className='flex gap-8 items-center flex-wrap py-4'>
                {category.icons.map((item) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    key={item.name}
                    className='flex flex-col items-center gap-2 group/skill cursor-pointer'
                  >
                    <div
                      className='transition-transform duration-300 group-hover/skill:scale-110'
                      style={{ filter: 'grayscale(100%) brightness(0.7)' }}
                    >
                      <item.component width={40} />
                    </div>
                    <span
                      style={{ fontFamily: "'DM Mono', monospace" }}
                      className='text-white/30 text-[10px] tracking-wider group-hover/skill:text-white/60 transition-colors'
                    >
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

const Skills = () => {
  return (
    <section id='skills' className='relative w-full py-24 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <div className='flex items-center gap-4 mb-6'>
            <div className='w-8 h-[1px] bg-[#22D3EE]' />
            <span style={{ fontFamily: "'DM Mono', monospace" }} className='text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase'>
              Skills
            </span>
          </div>
          <BlurText
            text='Stack Técnico'
            className='text-4xl md:text-5xl font-bold tracking-tight text-white'
            delay={50}
          />
        </div>

        <div className='flex flex-col gap-3'>
          {skillCategories.map((category) => (
            <AccordionItem key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
