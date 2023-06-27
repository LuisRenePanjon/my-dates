import { NavBar } from '../../common/index.js'

export const CalendarLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className="bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] h-screen">
                {children}
            </div>

        </>
    )
}
