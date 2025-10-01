// src/App.tsx
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { AuthProvider, useAuth, UserRole } from "./context/AuthContext";
import { useEffect } from "react";

// Layouts
import WithTopNav from "./components/WithTopNav";
import WithTopNavTerapeuta from "./components/WithTopNavTerapeuta";

// Screens (paciente y generales)
import { Home } from "./screens/Home";
import { ScheduleSelection } from "./screens/ScheduleSelection";
import { ServiceSelection } from "./screens/ServiceSelection";
import { ConfirmationPayment } from "./screens/ConfirmationPayment";
import { VistaPrellenado } from "./screens/VistaPrellenado/VistaPrellenado";
import { SearchResults } from "./screens/SearchResults";
import { Login } from "./screens/Login";
import { ServiceDetails } from "./screens/ServiceDetails";
import { PatientDashboard } from "./screens/PatientDashboard";
import { TermsAndConditions } from "./screens/TermsAndConditions";
import { LoginRegistration } from "./screens/LoginRegistration";
import { CenterSchedule } from "./screens/CenterSchedule";
import { CenterPayment } from "./screens/CenterPayment";
import { VistaRecuperarTu } from "./screens/VistaRecuperarTu";
import { Registration } from "./screens/Registration";
import { RegistrationAcupunturist } from "./screens/RegistrationAcupunturist";
import { ContactTerapeuta } from "./screens/ContactTerapeuta";
import { SuccessPage } from "./screens/SuccessPage";

// Dashboards y páginas de terapeuta/centro/admin
import { TherapistDashboard } from "./screens/TherapistDashboard";
import { TerapeutaDashboard } from "./screens/TerapeutaDashboard/TerapeutaDashboard";
import { CentroDashboard } from "./screens/CentroDashboard/CentroDashboard";
import { AdminDashboard } from "./screens/AdminDashboard/AdminDashboard";
import { PreguntasTerapeutas } from "./screens/PreguntasTerapeutas";
import { SupportModalTerapeuta } from "./screens/SupportModalTerapeuta";

// Comunidad
import { Foro, Dashboard as ComunidadDashboard } from "./modules/comunidad";

// Terapeuta módulos
import {
  Formularios as TerapeutaFormularios,
  Perfil as TerapeutaPerfil,
  PagosFacturacion as TerapeutaPagosFacturacion,
  Ajustes as TerapeutaAjustes,
  GestionPacientes as TerapeutaGestionPacientes,
  DetallePaciente as TerapeutaDetallePaciente,
  HistorialMedico as TerapeutaHistorialMedico,
  Calendario as TerapeutaCalendario,
} from "./modules/terapeuta";

// Clínica módulos
import {
  Formularios as ClinicaFormularios,
  Perfil as ClinicaPerfil,
  PagosFacturacion as ClinicaPagosFacturacion,
  Ajustes as ClinicaAjustes,
  GestionPacientes as ClinicaGestionPacientes,
  DetallePaciente as ClinicaDetallePaciente,
  HistorialMedico as ClinicaHistorialMedico,
  Calendario as ClinicaCalendario,
} from "./modules/clinica";

// 👉 Scroll to top
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return null;
};

// 👉 Rutas privadas con restricción por tipo de usuario
const PrivateRoute = ({ children, allowed }: { children: JSX.Element; allowed: UserRole[] }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  if (user && allowed.includes(user.role)) {
    return children;
  }

  return <Navigate to="/" />;
};

// 👉 Definición de rutas
const routes = [
  {
    element: (
      <>
        <ScrollToTop />
        <WithTopNav />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/service-selection", element: <ServiceSelection /> },
      { path: "/schedule-selection", element: <ScheduleSelection /> },
      { path: "/confirmation-payment", element: <ConfirmationPayment /> },
      { path: "/VistaPrellenado", element: <VistaPrellenado /> },
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

  // Terapeuta
  {
    element: (
      <>
        <ScrollToTop />
        <WithTopNavTerapeuta />
      </>
    ),
    children: [
      { path: "/therapist-dashboard", element: <TherapistDashboard /> },
      { path: "/terapeuta-dashboard", element: <TerapeutaDashboard /> },
      { path: "/preguntas-terapeutas", element: <PreguntasTerapeutas /> },
      { path: "/SupportModalTerapeuta", element: <SupportModalTerapeuta /> },
      { path: "/ContactTerapeuta", element: <ContactTerapeuta /> },
      { path: "/SuccessPage", element: <SuccessPage /> },
      { path: "/registration-acupunturist", element: <RegistrationAcupunturist /> },
    ],
  },

  { path: "/terapeuta/perfil", element: <TerapeutaPerfil onPageChange={() => {}} onLogout={() => {}} /> },
  { path: "/terapeuta/formularios", element: <TerapeutaFormularios onPageChange={() => {}} onLogout={() => {}} /> },
  { path: "/terapeuta/pagos", element: <TerapeutaPagosFacturacion onPageChange={() => {}} onLogout={() => {}} /> },
  { path: "/terapeuta/ajustes", element: <TerapeutaAjustes onPageChange={() => {}} onLogout={() => {}} /> },
  { path: "/terapeuta/gestion-pacientes", element: <TerapeutaGestionPacientes onPageChange={() => {}} onLogout={() => {}} /> },
  { path: "/terapeuta/detalle-paciente", element: <TerapeutaDetallePaciente onPageChange={() => {}} onLogout={() => {}} initialTab="personal" /> },
  { path: "/terapeuta/historial-medico", element: <TerapeutaHistorialMedico onPageChange={() => {}} onLogout={() => {}} /> },
  { path: "/terapeuta/calendario", element: <TerapeutaCalendario onPageChange={() => {}} onLogout={() => {}} /> },

  // Clínica
  {
    element: (
      <>
        <ScrollToTop />
        <WithTopNavTerapeuta />
      </>
    ),
    children: [
      {
        path: "/centro-dashboard",
        element: (
          <PrivateRoute allowed={["centro"]}>
            <CentroDashboard />
          </PrivateRoute>
        ),
      },
      { path: "/clinica/perfil", element: <ClinicaPerfil onPageChange={() => {}} onLogout={() => {}} /> },
      { path: "/clinica/formularios", element: <ClinicaFormularios onPageChange={() => {}} onLogout={() => {}} /> },
      { path: "/clinica/pagos", element: <ClinicaPagosFacturacion onPageChange={() => {}} onLogout={() => {}} /> },
      { path: "/clinica/ajustes", element: <ClinicaAjustes onPageChange={() => {}} onLogout={() => {}} /> },
      { path: "/clinica/gestion-pacientes", element: <ClinicaGestionPacientes onPageChange={() => {}} onLogout={() => {}} /> },
      { path: "/clinica/detalle-paciente", element: <ClinicaDetallePaciente onPageChange={() => {}} onLogout={() => {}} initialTab="personal" /> },
      { path: "/clinica/historial-medico", element: <ClinicaHistorialMedico onPageChange={() => {}} onLogout={() => {}} /> },
      { path: "/clinica/calendario", element: <ClinicaCalendario onPageChange={() => {}} onLogout={() => {}} /> },
    ],
  },

  // Admin
  {
    path: "/admin-dashboard",
    element: (
      <PrivateRoute allowed={["administrador"]}>
        <AdminDashboard />
      </PrivateRoute>
    ),
  },
];

// 👉 Router principal con basename para subcarpeta
const router = createBrowserRouter(routes, { basename: "/acured" });

// 👉 App principal
export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
