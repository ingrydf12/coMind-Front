import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import RedirectRoute from './components/RedirectRoute/RedirectRoute'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Layout from './components/Layout/Layout'
import Connect from './pages/Connect/Connect'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Sobre from './components/Sobre/Sobre'
import Indicacoes from './components/Indicacoes/Indicacoes'
import Depoimentos from './components/Depoimentos/Depoimentos'
import MedicPacient from './pages/Forms/MedicPacient'
import FormMedic from './pages/Forms/FormMedic'
import FormPacient from './pages/Forms/FormPacient'

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
      },
      {
        path: "/about",
        element: (
          <RedirectRoute>
            <Sobre />
          </RedirectRoute>
        )
      },
      {
        path: "/indications",
        element: (
          <RedirectRoute>
            <Indicacoes />
          </RedirectRoute>
        )
      },
      {
        path: "/testimonials",
        element: (
          <RedirectRoute>
            <Depoimentos />
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
