'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectsData = [
  {
    id: 1,
    tag: 'B2B Portal',
    title: 'Customer Portal',
    description: 'System with authentication and roles (admin/client). Dashboard for project tracking and client-company communication.',
    link: 'https://github.com/juampimedina06/customer-portal',
    videoSrc: '/videos/gestorClientes.mp4',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase'],
    accent: '01'
  },
  {
    id: 2,
    tag: 'E-commerce',
    title: 'El Pequeño Hong Kong',
    description: 'Complete product management system with admin panel. CRUD of products and stock control with authentication.',
    link: 'https://github.com/juampimedina06/el-pequeno-hong-kong',
    videoSrc: '/videos/elpequehongkong.mp4',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    accent: '02'
  },
  {
    id: 3,
    tag: 'Sports Management',
    title: 'Gestión Deportiva',
    description: 'Player management and analysis system with decoupled client-server architecture. Authentication with JWT.',
    link: 'https://github.com/juampimedina06/fifa-list',
    videoSrc: '/videos/jugadoresFifa.mp4',
    technologies: ['Node.js', 'Express', 'MySQL', 'Angular'],
    accent: '03'
  }
]

const ProjectSlide = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoRef.current?.play().catch(() => { })
        else videoRef.current?.pause()
      },
      { threshold: 0.3 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  // Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    
    gsap.to(cardRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      scale: 1.02,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  // Magnetic Button Effect
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.5
    const y = (clientY - (top + height / 2)) * 0.5
    
    gsap.to(currentTarget, {
      x: x,
      y: y,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
  }

  return (
    <div className='flex-shrink-0 w-screen h-screen flex items-center justify-center px-8 md:px-24 relative overflow-hidden'>
      {/* Background Parallax Text */}
      <span className='project-title-bg absolute left-0 bottom-0 text-[35vw] font-black uppercase leading-none opacity-[0.03] whitespace-nowrap pointer-events-none select-none z-0'>
        {project.title}
      </span>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 w-full max-w-7xl'>
        {/* Project Number */}
        <div className='hidden md:block col-span-1'>
          <span className='text-8xl font-black opacity-10 tracking-tighter'>{project.accent}</span>
        </div>

        {/* Media Section */}
        <div 
          className='col-span-1 md:col-span-6 relative'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1000px' }}
        >
          <div 
            ref={cardRef}
            className='border border-white/10 bg-white/5 overflow-hidden shadow-2xl origin-center'
          >
            <video 
              ref={videoRef} 
              src={project.videoSrc} 
              muted 
              loop 
              playsInline 
              className='w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000' 
            />
          </div>
        </div>

        {/* Info Section */}
        <div className='col-span-1 md:col-span-5 flex flex-col gap-6 md:pl-12 text-white'>
          <div className='flex flex-col gap-2'>
            <span className='small-caps text-sm font-bold tracking-swiss-wide opacity-50 text-white'>
              {project.tag}
            </span>
            <h3 className='text-5xl md:text-7xl font-black uppercase tracking-swiss leading-[0.85] text-white'>
              {project.title.split(' ').map((word, i) => (
                <span key={i} className='block'>{word}</span>
              ))}
            </h3>
          </div>
          
          <p className='text-xl opacity-70 leading-relaxed font-medium max-w-md'>
            {project.description}
          </p>
          
          <div className='flex flex-wrap gap-x-6 gap-y-3 mt-4 opacity-40'>
            {project.technologies?.map((tech) => (
              <span key={tech} className='text-[10px] font-bold small-caps tracking-widest text-white'>
                {tech}
              </span>
            ))}
          </div>

          <div className='mt-8'>
            <a 
              href={project.link} 
              target='_blank' 
              rel='noopener noreferrer' 
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className='magnetic-btn inline-block text-sm font-black uppercase tracking-swiss bg-white text-black px-10 py-5 hover:bg-white/80 transition-all'
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Portafolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      x: 0
    }, {
      x: `-${100 * (projectsData.length - 1)}vw`,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${sectionRef.current?.offsetWidth}`,
        invalidateOnRefresh: true,
      }
    })

    // Parallax background titles
    gsap.utils.toArray('.project-title-bg').forEach((title: any, i) => {
      gsap.to(title, {
        x: -200,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    return () => pin.kill()
  }, { scope: triggerRef })

  return (
    <section ref={triggerRef} id='proyectos' className='overflow-hidden bg-transparent text-white'>
      <div className='sticky-title absolute top-24 left-8 md:left-24 z-20'>
        <span className='small-caps text-xs tracking-swiss-wide opacity-30 text-white'>Trabajos Seleccionados — 2026</span>
      </div>

      <div 
        ref={sectionRef} 
        className='flex flex-nowrap h-screen'
        style={{ width: `${projectsData.length * 100}vw` }}
      >
        {projectsData.map((project, index) => (
          <ProjectSlide key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Portafolio
