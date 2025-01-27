import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import RedirectRoute from './components/RedirectRoute/RedirectRoute'
import Login from './pages/Login/Login'
import Layout from './components/Layout/Layout'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: (
          <RedirectRoute>
            <Login />
          </RedirectRoute>
        )
      }
    ]
  }
])
