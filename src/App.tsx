import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
    path: "/VistaPrellenado",
    element: <VistaPrellenado/>,
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
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
