import React from "react";
import { NavigationSection } from "../../../comunidad/components/NavigationSection";
import { ProfileDetailsSection } from "./sections/ProfileDetailsSection";

interface PerfilProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'calendario') => void;
  onLogout?: () => void;
}

export const Perfil = ({ onPageChange, onLogout }: PerfilProps): JSX.Element => {
  return (
    <main className="w-full bg-white min-h-screen">
      <div className="flex flex-row w-full relative min-h-screen">
        <NavigationSection 
          currentPage="perfil" 
          onPageChange={onPageChange}
          onLogout={onLogout}
        />
        <div className="flex-1 lg:ml-0 bg-secondary-50 min-h-screen">
          <ProfileDetailsSection />
        </div>
      </div>
    </main>
  );
};