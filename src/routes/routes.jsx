import { createBrowserRouter } from "react-router-dom";
import RedirectRoute from "../components/RedirectRoute/RedirectRoute";
import LoggedInRedirect from "../contexts/LoggedInReplace";
import Register from "../pages/Register/Register";
import Layout from "../components/Layout/Layout";
import Connect from "../pages/Connect/Connect";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Sobre from "../components/Sobre/Sobre";
import Indicacoes from "../components/Indicacoes/Indicacoes";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import MedicPacient from "../pages/Forms/MedicPacient";
import FormMedic from "../pages/Forms/FormMedic";
import FormPacient from "../pages/Forms/FormPacient";
import Empty from "../pages/Empty/Empty";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: (
        <LoggedInRedirect>
          <Connect />
        </LoggedInRedirect>
        ),
      },
      {
        path: "register",
        element: (
          <LoggedInRedirect>
            <Register />
          </LoggedInRedirect>
        ),
      },
      {
        path: "dashboard",
        element: (
          <RedirectRoute>
            <Dashboard />
          </RedirectRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <RedirectRoute>
            <Sobre />
          </RedirectRoute>
        ),
      },
      {
        path: "/indications",
        element: (
          <RedirectRoute>
            <Indicacoes />
          </RedirectRoute>
        ),
      },
      {
        path: "/testimonials",
        element: (
          <RedirectRoute>
            <Depoimentos />
          </RedirectRoute>
        ),
      },
      {
        path: "/medic-pacient",
        element: 
            <MedicPacient />,
      },
      {
        path: "/form-medic",
        element: 
            <FormMedic />,
      },
      {
        path: "/form-pacient",
        element: 
            <FormPacient />,
      },
      {
        path: "/empty",
        element: (
          <RedirectRoute>
            <Empty />
          </RedirectRoute>
        ),
      },
    ],
  },
]);