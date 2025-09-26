import React from "react";
import { NavigationSection } from "../../../comunidad/components/NavigationSection";
import { PaymentSection } from "./sections/PaymentSection";

interface PagosFacturacionProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'calendario') => void;
  onLogout?: () => void;
}

export const PagosFacturacion = ({ onPageChange, onLogout }: PagosFacturacionProps): JSX.Element => {
  return (
    <main className="w-full bg-white min-h-screen">
      <div className="flex flex-row w-full relative min-h-screen">
        <NavigationSection 
          currentPage="pagos" 
          onPageChange={onPageChange}
          onLogout={onLogout}
        />
        <div className="flex-1 lg:ml-0 bg-secondary-50 min-h-screen">
          <PaymentSection />
        </div>
      </div>
    </main>
  );
};