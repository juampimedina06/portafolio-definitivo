import React from 'react'

const NavBar = () => {
  return (
    <header className=' fixed top-4 z-10 w-full'>
      <nav>
        <div className='flex bg-black w-38 gap-2 p-2 rounded-rl-2'>
          <div className='w-14  border-2 rounded-full border-white '></div>
          <div className='flex flex-col'>
            <span className='text-white text-xl'>Juan</span>
            <span className='text-white text-xl'>Medina</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar