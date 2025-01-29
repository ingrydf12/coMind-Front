import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import RedirectRoute from './components/RedirectRoute/RedirectRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Layout from './components/Layout/Layout'
import MedicPacient from './pages/Forms/MedicPacient'
import FormMedic from './pages/Forms/FormMedic'
import FormPacient from './pages/Forms/FormPacient'

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
      },
      {
        path: "/medic-pacient",
        element: (
          <RedirectRoute>
            <MedicPacient />
          </RedirectRoute>
        )
      },
      {
        path: "/form-medic",
        element: (
          <RedirectRoute>
            <FormMedic />
          </RedirectRoute>
        )
      },
      {
        path: "/form-pacient",
        element: (
          <RedirectRoute>
            <FormPacient />
          </RedirectRoute>
        )
      }
    ]
  }
])