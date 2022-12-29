import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
  // create a navbar using tailwindcss with title in the left say "MyDates" and a button in the right saying "MyDates" and a button in the right saying "Login"
    <nav className='flex items-center justify-between flex-wrap p-6 lg:mx-[40rem]'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-4xl tracking-tight'>MyDates</span>
      </div>
      {/* Add options to rigth to go to "Tecnologies, Repository" */}
      <div className=''>
        <div className='text-sm lg:flex-grow '>
          <Link to='/tecnologies' className='block mt-4 lg:inline-block lg:mt-0 text-slate-200 mr-4 text-base hover:text-white hover:border-white hover:border-collapse hover:border-[1px] p-[0.18rem] hover:rounded-lg'>
            Tecnologies
          </Link>
          <a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4 text-base'>
            Repository
          </a>
        </div>
      </div>
    </nav>
  )
}
