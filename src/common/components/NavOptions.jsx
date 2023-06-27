import {NavLink} from 'react-router-dom'
import {AuthConstants} from "../../utils/index.js";

export const NavOptions = ({isMobile = false}) => {

    // const authStatus = 'not-authenticated'
    const authStatus = 'authenticated'

    const navigation = authStatus ===  AuthConstants.NOT_AUTHENTICATED ? [
        {name: 'Register', to: '/auth/register'},
        {name: 'Login', to: '/auth/login'}
    ] : [{name: 'Logout', to: '/auth/login'}]
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }
    return isMobile
        ? (
            <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        className={({isActive}) =>
                            isActive ? classNames('bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-bold') : classNames('text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold')}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        )
        : (
            <nav className='flex space-x-4'>
                {navigation.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.to}
                        className={({isActive}) =>
                            isActive ? classNames('bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold') : classNames('text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold')}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        )
}
