import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import RedirectRoute from './components/RedirectRoute/RedirectRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Layout from './components/Layout/Layout'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/auth",
        element: (
          <RedirectRoute>
            <Login />
          </RedirectRoute>
        )
      },
      {
        path: "/register",
        element: (
          <RedirectRoute>
            <Register />
          </RedirectRoute>
        )
      }
    ]
  }
])