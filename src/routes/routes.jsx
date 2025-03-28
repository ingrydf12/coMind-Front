import { createBrowserRouter } from "react-router-dom";
import RedirectRoute from "../components/RedirectRoute/RedirectRoute";
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
import Agenda from "../pages/Agenda";
import ProfileRoute from "../routes/profileRouter";

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
        element: <Connect />,
      },
      {
        path: "register",
        element: <Register />,
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
        element: <MedicPacient />,
      },
      {
        path: "/form-medic",
        element: <FormMedic />,
      },
      {
        path: "/profile",
        element: (
          <RedirectRoute>
            <ProfileRoute />
          </RedirectRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <RedirectRoute>
            <Dashboard />
          </RedirectRoute>
        ),
      },
      {
        path: "/empty",
        element: (
          <RedirectRoute>
            <Empty />
          </RedirectRoute>
        ),
      },
      {
        path: "/agenda",
        element: (
          <RedirectRoute>
            <Agenda />
          </RedirectRoute>
        ),
      },
    ],
  },
]);
