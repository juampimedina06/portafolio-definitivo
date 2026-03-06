import PillNav from '@/components/ui/ReactBits/PillNav/PillNav'
import logo from '@/public/imagenes/traje_sinfondo.png'

const NavBar = () => {
  return (
    <header className=' fixed z-100 w-full bg-black h-4'>
      <nav className='flex items-center '>
        <div className='flex bg-black w-38 gap-2 rounded-rl-2 relative bg-black h-20 rounded-br-[30px] items-center'>
          <svg className="svg-corner corner-content-box-one absolute left-38 bottom-8.5" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
          <svg className="svg-corner corner-content-box-one absolute left-0 top-20" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#000000ff"></path></g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
          <div className="w-14 h-14 border-2 rounded-full border-white overflow-hidden">
            <img src={logo.src} alt="" className="w-full object-cover" />
          </div>          <div className='flex flex-col'>
            <span className='text-white text-xl'>Juan P.</span>
            <span className='text-white text-xl'>Medina</span>
          </div>
        </div>
        <div className=''>
          <PillNav
            items={[
              { label: 'Home', href: '#inicio' },
              { label: 'About', href: '#sobre-mi' },
              { label: 'Experiences', href: '#experiencia' },
              { label: 'Projects', href: '#proyectos' },
              { label: 'Skills', href: '#habilidades' },
              { label: 'Contact', href: '#contacto' },
            ]}
            activeHref="#inicio"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
            initialLoadAnimation={false}
          />
        </div>
      </nav>
    </header>
  )
}

export default NavBar