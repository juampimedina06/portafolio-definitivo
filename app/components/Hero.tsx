import HoverButton from '@/components/ui/HoverButtom'
import Carousel from '@/components/ui/ReactBits/Carousel/Carousel'
import Iridescence from '@/components/ui/ReactBits/Iridescence.css/Iridescence'
import React from 'react'

const Hero = () => {
  return (
    <section id='inicio' className='w-full h-[90vh] sm:flex gap-4 mt-4'>
      <div className="relative w-full h-full">
        <Iridescence mouseReact amplitude={0.1} speed={1} />
        <svg className="svg-corner corner-content-box-one relative left-170 bottom-7 rotate-270 " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
        <svg className="svg-corner corner-content-box-one relative bottom-78  rotate-270 " width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
        <div className='absolute bottom-0 left-0 bg-black rounded-tr-[30px]'>
          <div className='h-50 w-170 flex items-center'>
            <h1 className='text-5xl  text-white w-full'>Full Stack Developer orientado a performance y UX</h1>
          </div>
          <div className='h-auto '>
            <HoverButton
              color="#fff"
              background="#000"
              border="#fff"
              link='#about'
            >
              ↓
            </HoverButton>
          </div>
        </div>
      </div>
      <div className=' flex gap-4 flex-col'>
        <div className='h-auto'>
          <Carousel
            autoplay={true}
            autoplayDelay={4500}
            round={true}
            loop={true}
          />
        </div>
        <div className='flex-1 bg-sky-400 rounded-4xl'>
          <Carousel
            autoplay={true}
            autoplayDelay={4500}
            round={false}
            loop={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero