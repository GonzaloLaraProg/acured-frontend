import React from "react";
import { NavigationSection } from "../../../comunidad/components/NavigationSection";
import { PatientListSection } from "./sections/PatientListSection";

interface GestionPacientesProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'gestion-pacientes' | 'detalle-paciente' | 'calendario') => void;
  onLogout?: () => void;
}

export const GestionPacientes = ({ onPageChange, onLogout }: GestionPacientesProps): JSX.Element => {
  return (
    <main className="w-full bg-white min-h-screen">
      <div className="flex flex-row w-full relative min-h-screen">
        <NavigationSection 
          currentPage="gestion-pacientes" 
          onPageChange={onPageChange}
          onLogout={onLogout}
          userType="clinica"
        />
        <div className="flex-1 lg:ml-0 bg-secondary-50 min-h-screen">
          <PatientListSection onPageChange={onPageChange} />
        </div>
      </div>
    </main>
  );
};