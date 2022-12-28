import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes'

export const MyDatesApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
