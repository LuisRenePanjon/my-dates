import React from 'react'
import { NavBar } from '../../common'

export const AuthLayout = ({ children }) => {
  return (
    // create a layout to wrap the form using tailwindcss
    <div className='bg-[#aaaa77] bg-gradient-to-bl h-screen w-screen'>
      <NavBar />
      <div className='lg:mx-[40rem]'>
        <div className='sm:flex sm:row  items-center sm:justify-between'>
          <h1 className='text-2xl text-slate-200 pl-4 pr-20 max-sm:my-6'>Tu tiempo es valioso, administralo correctamente. <br /> Tu diversión, trabajo y familia perfectamente equilibrado.</h1>
          <img src='/src/assets/profesional.jpg' alt='Imágen animada de personas con un calendario' className=' rounded-xl mx-3 sm:w-[600px] max-sm:w-56' />
        </div>

        <div className='flex items-center justify-center'>
          <div className='w-full max-w-md'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
