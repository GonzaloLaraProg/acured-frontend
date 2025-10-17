import React, { useState } from "react";
import { NavigationSection } from "../../../comunidad/components/NavigationSection";
import { TreatmentListSection } from "./sections/TreatmentListSection";
import { ScheduleSection } from "./sections/ScheduleSection";
import { PolicySection } from "./sections/PolicySection/PolicySection";

interface AjustesProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'calendario') => void;
  onLogout?: () => void;
}

export const Ajustes = ({ onPageChange, onLogout }: AjustesProps): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<'services' | 'calendar' | 'policy'>('calendar');

  const handleTabChange = (tab: 'services' | 'calendar' | 'policy') => {
    setCurrentTab(tab);
  };

  return (
    <main className="w-full bg-white min-h-screen">
      <div className="flex flex-row w-full relative min-h-screen">
        <NavigationSection 
          currentPage="ajustes" 
          onPageChange={onPageChange}
          onLogout={onLogout}
          userType="clinica"
        />
        <div className="flex-1 lg:ml-0 bg-secondary-50 min-h-screen">
          {/* Espaciado superior en móvil para el botón del menú */}
          <div className="lg:hidden h-16 w-full"></div>
          
          {currentTab === 'calendar' ? (
            <ScheduleSection onTabChange={handleTabChange} />
          ) : currentTab === 'services' ? (
            <TreatmentListSection onTabChange={handleTabChange} />
          ) : (
            <PolicySection onTabChange={handleTabChange} />
          )}
        </div>
      </div>
    </main>
  );
};