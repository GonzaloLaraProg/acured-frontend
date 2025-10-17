import React from "react";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "../../components/NavigationSection";

interface ForoProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'calendario') => void;
  onLogout?: () => void;
  userType?: 'paciente' | 'terapeuta' | 'clinica';
}

export const Foro = ({ onPageChange, onLogout, userType }: ForoProps): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <div className="flex flex-row w-full relative">
        <NavigationSection 
          currentPage="foro" 
          onPageChange={onPageChange}
          onLogout={onLogout}
          userType={userType}
        />
        <div className="flex-1 lg:ml-0">
          <MainContentSection />
        </div>
      </div>
    </main>
  );
};