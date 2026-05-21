import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-screen bg-black overflow-x-clip'>
      {children}
    </div>
  )
}

export default Container