import React from "react";
import { NavigationSection } from "../../../comunidad/components/NavigationSection";
import { MedicalHistorySection } from "./sections/MedicalHistorySection";

interface HistorialMedicoProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'gestion-pacientes' | 'detalle-paciente' | 'historial-medico' | 'calendario', tab?: 'personal' | 'historial' | 'todos' | 'evolucion') => void;
  onLogout?: () => void;
}

export const HistorialMedico = ({ onPageChange, onLogout }: HistorialMedicoProps): JSX.Element => {
  return (
    <main className="w-full bg-white min-h-screen">
      <div className="flex flex-row w-full relative min-h-screen">
        <NavigationSection 
          currentPage="gestion-pacientes" 
          onPageChange={onPageChange}
          onLogout={onLogout}
        />
        <div className="flex-1 lg:ml-0 bg-secondary-50 min-h-screen">
          <MedicalHistorySection onPageChange={onPageChange} />
        </div>
      </div>
    </main>
  );
};