'use client'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  variant?: 'default' | 'alternate' | 'full'
}

const SectionWrapper = ({ 
  children, 
  id, 
  className = '', 
  variant = 'default' 
}: SectionWrapperProps) => {
  const variants = {
    default: 'min-h-screen py-20 md:py-24',
    alternate: 'py-16 md:py-20',
    full: 'min-h-screen flex items-center justify-center',
  }

  return (
    <section
      id={id}
      className={`
        relative w-full 
        ${variants[variant]}
        ${className}
      `}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none' />
      
      <div className='relative z-10 px-6 md:px-16'>
        <div className='max-w-7xl mx-auto'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper
