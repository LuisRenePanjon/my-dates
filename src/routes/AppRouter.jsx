import {Navigate, Route, Routes} from 'react-router-dom'
import {LoginPage, RegisterPage} from '../auth/pages'
import {CalendarPage} from '../calendar/pages/CalendarPage'
import {TecnologiesPage} from '../common'
import {NotFoundPage} from '../common/index.js'

export const AppRouter = () => {
    // const authStatus = 'not-authenticated'
    const authStatus = 'authenticated'


    return (
        <Routes>
            {authStatus === 'authenticated'
                ? (
                    <>
                        <Route path='/' element={<CalendarPage/>}/>
                        <Route path='/auth/*' element={<Navigate to='/'/>}/>
                    </>
                )
                : (
                    <>
                        <Route path='/auth/login' element={<LoginPage/>}/>
                        <Route path='/auth/register' element={<RegisterPage/>}/>
                        <Route path='/' element={<Navigate to='/auth/login'/>}/>
                    </>
                )}
            <Route path='tecnologies' element={<TecnologiesPage/>}/>

            {/* add to not found path */}
            <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
    )
}
