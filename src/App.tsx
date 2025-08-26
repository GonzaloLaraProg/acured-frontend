import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { ScheduleSelection } from "./screens/ScheduleSelection";
import { ServiceSelection } from "./screens/ServiceSelection";
import { ConfirmationPayment } from "./screens/ConfirmationPayment";
import { PatientForm } from "./screens/PatientForm";
import { TherapistDashboard } from "./screens/TherapistDashboard";
import { SearchResults } from "./screens/SearchResults";
import { Login } from "./screens/Login";
import { ServiceDetails } from "./screens/ServiceDetails";
import { PatientDashboard } from "./screens/PatientDashboard";
import { PrivacyCookies } from "./screens/PrivacyCookies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service-selection",
    element: <ServiceSelection />,
  },
  {
    path: "/schedule-selection",
    element: <ScheduleSelection />,
  },
  {
    path: "/confirmation-payment",
    element: <ConfirmationPayment />,
  },
  {
    path: "/patient-form",
    element: <PatientForm />,
  },
  {
    path: "/therapist-dashboard",
    element: <TherapistDashboard />,
  },
  {
    path: "/search-results",
    element: <SearchResults />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/service-details/:serviceId?",
    element: <ServiceDetails />,
  },
  {
    path: "/patient-dashboard",
    element: <PatientDashboard />,
  },
  {
    path: "/privacy-cookies",
    element: <PrivacyCookies />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
