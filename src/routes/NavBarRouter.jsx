import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TecnologiesPage } from '../common'

export const NavBarRouter = () => {
  return (
    <Routes>
      <Route path='/tecnologies' element={<TecnologiesPage />} />
    </Routes>
  )
}
