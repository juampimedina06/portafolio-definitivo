'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Back
import Express from '../../components/ui/LenguajesSVG/Back/Express'
import NodeJS from '../../components/ui/LenguajesSVG/Back/NodeJS'
import Supabase from '../../components/ui/LenguajesSVG/Back/Supabase'

// BaseDeDatos
import MySQL from '../../components/ui/LenguajesSVG/BaseDeDatos/MySQL'
import PostgreSQL from '../../components/ui/LenguajesSVG/BaseDeDatos/PostgreSQL'
import SQLServer from '../../components/ui/LenguajesSVG/BaseDeDatos/SQLserver'

// Front
import Angular from '../../components/ui/LenguajesSVG/Front/Angular'
import Css from '../../components/ui/LenguajesSVG/Front/Css'
import Html from '../../components/ui/LenguajesSVG/Front/Html'
import Javascript from '../../components/ui/LenguajesSVG/Front/Javascript'
import ReactIcon from '../../components/ui/LenguajesSVG/Front/React'
import Tailwind from '../../components/ui/LenguajesSVG/Front/Talwind'
import Typescript from '../../components/ui/LenguajesSVG/Front/Typescript'

// Herramientas
import Figma from '../../components/ui/LenguajesSVG/Herramientas/Figma'
import Git from '../../components/ui/LenguajesSVG/Herramientas/Git'
import GitHub from '../../components/ui/LenguajesSVG/Herramientas/GitHub'
import Postman from '../../components/ui/LenguajesSVG/Herramientas/Postaman'
import Vercel from '../../components/ui/LenguajesSVG/Herramientas/Vercel'

// IAtools
import Antigravity from '../../components/ui/LenguajesSVG/IAtools/Antigrabity'
import Claude from '../../components/ui/LenguajesSVG/IAtools/Claude'
import OpenAI from '../../components/ui/LenguajesSVG/IAtools/OpenAI'

interface AccordionItemProps {
  title: string
  children?: React.ReactNode
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Determinar si debe estar expandido basado en hover (desktop) o click (mobile)
  // En muchos casos, es mejor manejar el click explícitamente para mobile
  const active = isHovered || isOpen

  const segunNombreSkills = ({ title }: { title: string }) => {
    const iconWidth = 60
    switch (title) {
      case 'FRONT':
        return (
          <div className='flex gap-10 items-center flex-wrap'>
            <Html width={iconWidth} />
            <Css width={iconWidth} />
            <Javascript width={iconWidth} />
            <Typescript width={iconWidth} />
            <ReactIcon width={iconWidth} />
            <Angular width={iconWidth} />
            <Tailwind width={iconWidth} />
          </div>
        )
      case 'BACK':
        return (
          <div className='flex gap-10 items-center flex-wrap'>
            <NodeJS width={iconWidth} />
            <Express width={iconWidth} />
            <Supabase width={iconWidth} />
          </div>
        )
      case 'BASE DE DATOS':
        return (
          <div className='flex gap-10 items-center flex-wrap'>
            <PostgreSQL width={iconWidth} />
            <MySQL width={iconWidth} />
            <SQLServer width={iconWidth} />
          </div>
        )
      case 'HERRAMIENTAS':
        return (
          <div className='flex gap-10 items-center flex-wrap'>
            <Git width={iconWidth} />
            <GitHub width={iconWidth} />
            <Figma width={iconWidth} />
            <Postman width={iconWidth} />
            <Vercel width={iconWidth} />
          </div>
        )
      case 'IA TOOLS':
        return (
          <div className='flex gap-10 items-center flex-wrap'>
            <OpenAI width={iconWidth} />
            <Claude width={iconWidth} />
            <Antigravity width={iconWidth} />
          </div>
        )
    }
  }

  return (
    <div
      className=' group cursor-pointer transition-colors duration-300 hover:border-white/50'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex justify-between items-center py-4 border-b-8 border-white'>
        <h3 className='text-6xl md:text-[7rem] text-white transition-transform duration-500 group-hover:translate-x-4 uppercase'>
          {title}
        </h3>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className='overflow-hidden'
          >
            <div className='pb-12 pt-4 px-4'>
              {children || (
                segunNombreSkills({ title })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Skills = () => {
  return (
    <section id='skills' className='min-h-screen w-full bg-black flex justify-center items-center flex-col py-24 px-6'>
      <div className='flex items-center justify-center gap-4 mb-20 w-full max-w-7xl'>
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className='text-white/25 text-xs tracking-[0.3em] uppercase'
        >
          Skills
        </span>
      </div>
      <div className='w-full max-w-7xl flex flex-col gap-12'>
        <AccordionItem title="FRONT" />
        <AccordionItem title="BACK" />
        <AccordionItem title="BASE DE DATOS" />
        <AccordionItem title="HERRAMIENTAS" />
        <AccordionItem title="IA TOOLS" />
      </div>
    </section>
  )
}

export default Skills