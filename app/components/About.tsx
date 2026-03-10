import React from 'react'
import imagenJuanPabloMedina from '@/public/imagenes/traje.jpg'
import BlurText from '@/components/ui/ReactBits/BlurText'
import HoverButton from '@/components/ui/HoverButtom'

const About = () => {
  return (
    <section id='sobre-mi' className='relative w-full h-[80vh] flex items-center justify-center py-16 px-6 md:px-16 overflow-hidden'>2

      {/* Etiqueta pequeña arriba */}


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
          <BlurText
            text='Desarrollador Full Stack con fuerte orientación al Front-End y enfoque en performance, arquitectura limpia y experiencia de usuario.'
            delay={50}
            className='text-white text-xl sm:text-2xl lg:text-4xl leading-relaxed'
          />
          <BlurText
            text='Experiencia profesional en entorno productivo trabajando bajo metodología Scrum.
            Perfil analítico, disciplinado y con rápida capacidad de adaptación.'
            delay={50}
            className='text-white/55 text-sm sm:text-base max-w-3xl leading-relaxed 
              md:text-base '
          />
          <HoverButton color='white' background='#000' border='white' >Contactame</HoverButton>
        </div>
      </div>

    </section>
  )
}

export default About