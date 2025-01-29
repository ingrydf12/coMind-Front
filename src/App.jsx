import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import RedirectRoute from './components/RedirectRoute/RedirectRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "auth",
        element: (
          <RedirectRoute>
            <Connect />
          </RedirectRoute>
        )
      },
      {
        path: "login",
        element: (
          <RedirectRoute>
            <Login />
          </RedirectRoute>
        )
      },
      {
        path: "register",
        element: (
          <RedirectRoute>
            <Register />
          </RedirectRoute>
        )
      },{
        path: "dashboard",
        element: (
          <RedirectRoute>
            <Dashboard />
          </RedirectRoute>
        )
      }
    ]
  }
])