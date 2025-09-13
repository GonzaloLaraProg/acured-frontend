import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/service-selection",
    element: (
      <>
        <ScrollToTop />
        <ServiceSelection />
      </>
    ),
  },
  {
    path: "/schedule-selection",
    element: (
      <>
        <ScrollToTop />
        <ScheduleSelection />
      </>
    ),
  },
  {
    path: "/confirmation-payment",
    element: (
      <>
        <ScrollToTop />
        <ConfirmationPayment />
      </>
    ),
  },
  {
    path: "/VistaPrellenado",
    element: (
      <>
        <ScrollToTop />
        <VistaPrellenado />
      </>
    ),
  },
  {
    path: "/therapist-dashboard",
    element: (
      <>
        <ScrollToTop />
        <TherapistDashboard />
      </>
    ),
  },
  {
    path: "/search-results",
    element: (
      <>
        <ScrollToTop />
        <SearchResults />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <ScrollToTop />
        <Login />
      </>
    ),
  },
  {
    path: "/service-details/:serviceId?",
    element: (
      <>
        <ScrollToTop />
        <ServiceDetails />
      </>
    ),
  },
  {
    path: "/patient-dashboard",
    element: (
      <>
        <ScrollToTop />
        <PatientDashboard />
      </>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <>
        <ScrollToTop />
        <TermsAndConditions />
      </>
    ),
  },
  {
    path: "/login-registration",
    element: (
      <>
        <ScrollToTop />
        <LoginRegistration />
      </>
    ),
  },
  {
    path: "/center-schedule",
    element: (
      <>
        <ScrollToTop />
        <CenterSchedule />
      </>
    ),
  },
  {
    path: "/center-payment",
    element: (
      <>
        <ScrollToTop />
        <CenterPayment />
      </>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
