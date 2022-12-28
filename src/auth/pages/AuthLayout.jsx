import React from 'react'
import { NavBar } from '../../common'

export const AuthLayout = ({ children }) => {
  return (
    // create a layout to wrap the form using tailwindcss
    <>
      <NavBar />
      <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-md'>
          {children}
        </div>
      </div>
    </>
  )
}
