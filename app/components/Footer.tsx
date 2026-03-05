import Iridescence from '@/components/ui/ReactBits/Iridescence.css/Iridescence'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative h-[70vh] w-full'>
      <Iridescence mouseReact amplitude={0.1} speed={1} />

      <div className='absolute inset-0 z-10 flex items-center justify-center'>
        <div className='inset-0 z-10 flex items-center justify-center bg-red-600'>
          <p className='text-2xl font-bold text-white'>PRIMERA INFORMACION</p>
        </div>
        <div className=' inset-0 z-10 flex items-center justify-center bg-blue-600'>
          <p className='text-2xl font-bold text-white'>SEGUNDA INFORMACION</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer