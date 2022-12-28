import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    // 404 page with tailwind css
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-9xl font-bold'>404</div>
      <div className='text-2xl font-bold'>Page not found</div>
      {/* Add button to go to home="/" using react router */}
      <Link to='/' className='px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600'>
        Go to home
      </Link>

    </div>
  )
}
