import React from 'react'
import { NavBar } from '../../common/index.js'
import '../styles/Auth.css'

export const AuthLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className='bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] h-screen'>
        <div className='max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:row  items-center sm:justify-between'>
            <h1 className='text-2xl text-sky-900 pl-4'>Tu tiempo es valioso, administralo correctamente. Mantén equilibrado tu trabajo, familia y amigos 🥳.</h1>
            <div className='lg:w-1/2 w-full lg:max-w-none max-w-md lg:pt-0 pt-6 mx-auto lg:pl-20 grid place-items-center'>
              <img src='/assets/productive.png' alt='Imágen animada de personas con un calendario' className='w-full h-auto animate-[floating_2s_infinite_ease-in-out] mt-20' />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='w-full max-w-md'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
