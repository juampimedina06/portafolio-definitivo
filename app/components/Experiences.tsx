import React from 'react'
import imagenJuanPabloMedina from '@/public/imagenes/traje.jpg'
import BlurText from '@/components/ui/ReactBits/BlurText'
import HoverButton from '@/components/ui/HoverButtom'

const Experiences = () => {
  return (
    <section className='relative w-full min-h-screen flex items-center justify-center py-16 px-6 md:px-16 overflow-hidden'>



      <div className='relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16'>

        {/* Imagen — ocupa ~1/3 */}
        <div className='flex-shrink-0 flex items-center justify-center'>
          <div className='relative'>
            {/* Borde decorativo */}
            <div className='absolute -inset-1 rounded-[28px] bg-gradient-to-br from-white/20 via-white/5 to-transparent' />
            <img
              src={imagenJuanPabloMedina.src}
              alt='Juan Pablo Medina'
              className='relative w-52 h-64 sm:w-60 sm:h-72 md:w-56 md:h-72 lg:w-64 lg:h-80 object-cover rounded-[24px] shadow-2xl'
            />
          </div>
        </div>

        {/* Línea divisora — vertical en desktop, horizontal en mobile */}
        <div className='hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-white/25 to-transparent flex-shrink-0' />
        <div className='md:hidden w-24 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent' />

        {/* Texto — ocupa ~2/3 */}
        <div className='flex-1 flex flex-col items-center md:items-start gap-4 text-center md:text-left'>

          {/* Etiqueta pequeña arriba */}
          <span className='text-white/40 text-xs tracking-[0.25em] uppercase font-medium'>
            Sobre mí
          </span>

          <BlurText
            text='Desarrollador Full Stack con fuerte orientación al Front-End y enfoque en performance, arquitectura limpia y experiencia de usuario.'
            delay={50}
            className='text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed'
          />

          <p className='text-white/55 text-sm sm:text-base leading-relaxed max-w-md'>
            Experiencia profesional en entorno productivo trabajando bajo metodología Scrum.
            Perfil analítico, disciplinado y con rápida capacidad de adaptación.
          </p>
          <HoverButton color='white' background='#000' border='white' >Contactame</HoverButton>
        </div>
      </div>

    </section>
  )
}

export default Experiences