import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import WithTopNav from "./components/WithTopNav";
import { Home } from "./screens/Home";
import { ScheduleSelection } from "./screens/ScheduleSelection";
import { ServiceSelection } from "./screens/ServiceSelection";
import { ConfirmationPayment } from "./screens/ConfirmationPayment";
import { VistaPrellenado } from "./screens/VistaPrellenado/VistaPrellenado"; 
import { TherapistDashboard } from "./screens/TherapistDashboard";
import { SearchResults } from "./screens/SearchResults";
import { Login } from "./screens/Login";
import { ServiceDetails } from "./screens/ServiceDetails";
import { PatientDashboard } from "./screens/PatientDashboard";
import { TermsAndConditions } from "./screens/TermsAndConditions";

import { LoginRegistration } from "./screens/LoginRegistration";
import { CenterSchedule } from "./screens/CenterSchedule";
import { CenterPayment } from "./screens/CenterPayment";

// Component to scroll to top on route change
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
};

import { VistaRecuperarTu } from "./screens/VistaRecuperarTu";
import { Registration } from "./screens/Registration";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <WithTopNav />   {/* 👈 Aquí va el layout con navbar */}
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/service-selection", element: <ServiceSelection /> },
      { path: "/schedule-selection", element: <ScheduleSelection /> },
      { path: "/confirmation-payment", element: <ConfirmationPayment /> },
      { path: "/VistaPrellenado", element: <VistaPrellenado /> },
      { path: "/therapist-dashboard", element: <TherapistDashboard /> },
      { path: "/search-results", element: <SearchResults /> },
      { path: "/login", element: <Login /> },
      { path: "/service-details/:serviceId?", element: <ServiceDetails /> },
      { path: "/patient-dashboard", element: <PatientDashboard /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> },
      { path: "/login-registration", element: <LoginRegistration /> },
      { path: "/center-schedule", element: <CenterSchedule /> },
      { path: "/center-payment", element: <CenterPayment /> },
      { path: "/password-recovery", element: <VistaRecuperarTu /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
