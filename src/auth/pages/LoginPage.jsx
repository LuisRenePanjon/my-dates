import { useState } from 'react'
import { AuthLayout } from '../components/AuthLayout.jsx'

export const LoginPage = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }
  const onSubmitWithGoogle = () => {
    console.log('google')
  }
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AuthLayout>
      <div className='w-full border-dashed border-[1px] border-spacing-1 mt-10 p-5 rounded-lg py-7 shadow-2xl'>
        <h1 className='text-3xl font-bold text-center text-white'>Inicia Sesión</h1>
        {/* create form using tailwindcss */}
        <form className='space-y-6' onSubmit={() => {}}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div className='py-2'>
              <label htmlFor='email' className='sr-only'>
                "Email"
              </label>
              <input
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Ingresa tu email'
                type='email'
              />
            </div>
            <div className='py-2'>
              <label htmlFor='password' className='sr-only'>
                "Contraseña"
              </label>
              <input
                className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Ingresa tu contraseña'
                type='password'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-[#070b3b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-[#17618e] ${isLoading && ('bg-indigo-300 hover:bg-indigo-300')}`}
            >
              Iniciar Sesión
            </button>
          </div>
          <div>
            <button
              type='button'
              disabled={isLoading}
              onClick={onSubmitWithGoogle}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${!isLoading ? 'bg-red-500 hover:bg-red-700' : 'bg-red-300'}`}
            >
              <p>
                Iniciar con <span className='font-bold text-base'>G</span>oogle
              </p>
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
