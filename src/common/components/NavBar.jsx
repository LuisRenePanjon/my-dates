import { Disclosure } from '@headlessui/react'
import { MobileMenuOptions } from './MobileMenuOptions'
import { NavOptions } from './NavOptions'
export const NavBar = () => {
  return (
  // create a navbar using tailwindcss with title in the left say "MyDates" and a button in the right saying "MyDates" and a button in the right saying "Login"
    <Disclosure className='bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] fixed w-full z-10' as='nav'>
      {({ open }) => (
        <>
          <div className='max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <MobileMenuOptions open={open} />
              </div>
              {/* Nav Logo */}
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <h2 className='text-2xl text-purple-900 font-bold'>MyDates</h2>
              </div>

              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-end'>
                <div className='hidden sm:block sm:ml-6'>
                  <NavOptions />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile nav options */}
          <Disclosure.Panel className='sm:hidden'>
            <NavOptions isMobile />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
