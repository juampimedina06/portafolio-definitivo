import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='sm:p-20 sm:pt-0 p-0 bg-black'>
      {children}
    </div>
  )
}

export default Container