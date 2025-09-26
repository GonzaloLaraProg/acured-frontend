import { PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { NavigationSection } from "../../../comunidad/components/NavigationSection";

interface FormulariosProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'calendario') => void;
  onLogout?: () => void;
}

// Form items data
const formItems = [
  {
    title: "Consentimiento informado",
  },
  {
    title: "Indicaciones generales",
  },
];

export const Formularios = ({ onPageChange, onLogout }: FormulariosProps): JSX.Element => {
  return (
    <main className="w-full bg-white min-h-screen">
      <div className="flex flex-row w-full relative min-h-screen">
        <NavigationSection 
          currentPage="formularios" 
          onPageChange={onPageChange}
          onLogout={onLogout}
          userType="clinica"
        />
        <div className="flex-1 lg:ml-0 bg-secondary-50">
          {/* Espaciado superior en móvil para el botón del menú */}
          <div className="lg:hidden h-16 w-full"></div>
          
          <section className="flex flex-col gap-6 px-8 py-6 w-full min-h-screen">
            {/* Header */}
            <header className="flex items-center justify-between w-full">
              <h1 className="text-heading-lg font-bold text-primary-900">
                Formularios
              </h1>

              <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-3xl shadow-md flex items-center gap-2 px-6 py-3">
                <span className="text-sm font-medium">
                  Agregar formulario
                </span>
                <PlusIcon className="w-4 h-4" />
              </Button>
            </header>

            {/* Form Cards */}
            <div className="flex flex-col gap-6 flex-1">
              {formItems.map((form, index) => (
                <Card key={`form-${index}`} className="shadow-sm rounded-lg border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-heading-sm font-semibold text-primary-900">
                        {form.title}
                      </h3>
                      <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-3xl shadow-md px-6 py-2">
                        <span className="text-sm font-medium">
                          Editar
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};