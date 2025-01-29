import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import RedirectRoute from './components/RedirectRoute/RedirectRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Layout from './components/Layout/Layout'
import Connect from './pages/Connect/Connect'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Home />
        )
      },
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
      },
      {
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
