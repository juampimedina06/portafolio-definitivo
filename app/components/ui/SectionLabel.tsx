'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlurText from '../../../components/ui/ReactBits/BlurText'

gsap.registerPlugin(ScrollTrigger)

interface SectionLabelProps {
  children: React.ReactNode
  subtitle?: string
  accentWord?: string
  className?: string
  id?: string
  blurred?: boolean
}

const SectionLabel = ({ 
  children, 
  subtitle, 
  accentWord, 
  className = '', 
  id,
  blurred = true
}: SectionLabelProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.querySelector('.label-text'),
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
          },
        }
      )
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={containerRef}
      id={id}
      className={`relative ${className}`}
    >
      <div className='label-text flex items-center gap-4 mb-6'>
        <div className='w-8 h-[1px] bg-[#22D3EE]' />
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className='text-[#22D3EE] text-[10px] tracking-[0.3em] uppercase'
        >
          {children}
        </span>
      </div>
      
      {subtitle && (
        <div className='overflow-hidden'>
          {blurred ? (
            <BlurText
              text={subtitle}
              className='text-4xl md:text-5xl font-bold tracking-tight text-white'
              delay={50}
              animateBy='words'
            />
          ) : (
            <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-white'>
              {subtitle}
            </h2>
          )}
          {accentWord && (
            blurred ? (
              <BlurText
                text={accentWord}
                className='text-4xl md:text-5xl font-bold tracking-tight text-[#22D3EE]'
                delay={50}
                animateBy='words'
              />
            ) : (
              <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-[#22D3EE]'>
                {accentWord}
              </h2>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default SectionLabel
