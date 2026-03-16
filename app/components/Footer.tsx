import Iridescence from '@/components/ui/ReactBits/Iridescence.css/Iridescence'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/juampimedina06',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:jpmedinagomez1@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ]

  return (
    <footer className='relative w-full overflow-hidden'>
      {/* Iridescence Background */}
      <div className='absolute inset-0 z-0'>
        <Iridescence mouseReact amplitude={0.1} speed={1} />
      </div>

      {/* Dark overlay for readability */}
      <div className='absolute inset-0 z-[1] bg-black/50' />

      {/* Footer Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-8'>

        {/* Top Section - 3 Columns */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8'>

          {/* Column 1: Branding */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-white text-2xl font-bold tracking-tight'>
              Juan P. Medina
            </h3>
            <p className='text-white/50 text-sm leading-relaxed max-w-xs'>
              Desarrollador Full Stack con fuerte orientación al Front-End.
              Enfocado en performance, arquitectura limpia y experiencia de usuario.
            </p>
            {/* Social Icons */}
            <div className='flex gap-3 mt-2'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 
                    hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-semibold uppercase tracking-widest'>
              Navegación
            </h4>
            <nav className='flex flex-col gap-2'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className='text-white/50 text-sm hover:text-white hover:translate-x-1 transition-all duration-300 w-fit'
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white text-sm font-semibold uppercase tracking-widest'>
              Contacto
            </h4>
            <div className='flex flex-col gap-3'>
              <a
                href='mailto:juanpablomedina.dev@gmail.com'
                className='text-white/50 text-sm hover:text-white transition-colors duration-300 flex items-center gap-2'
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                jpmedinagomez1@gmail.com
              </a>
              <span className='text-white/50 text-sm flex items-center gap-2'>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Cordoba, Argentina
              </span>
              <span className='text-white/50 text-sm flex items-center gap-2'>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                Disponible para trabajar
              </span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12 mb-6' />

        {/* Bottom Bar */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-white/30 text-xs'>
            © {currentYear} Juan Pablo Medina. Todos los derechos reservados.
          </p>
          <p className='text-white/30 text-xs'>
            Diseñado y desarrollado con ☕ y 💜
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer