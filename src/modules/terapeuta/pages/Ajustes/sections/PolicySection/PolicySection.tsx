import { CalendarIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";

interface PolicySectionProps {
  onTabChange?: (tab: 'services' | 'calendar' | 'policy') => void;
}

export const PolicySection = ({ onTabChange }: PolicySectionProps): JSX.Element => {
  const handleTabClick = (tab: 'services' | 'calendar' | 'policy') => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Action buttons data
  const actionButtons = [
    { text: "Fechas de cierre", primary: true },
    { text: "Horario vacaciones", primary: false },
    { text: "Añadir Profesional", primary: false },
  ];

  return (
    <section className="flex flex-col items-start gap-6 px-8 py-6 relative flex-1 self-stretch grow">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
        {/* Tabs Navigation */}
        <div className="inline-flex items-start gap-3 relative border-b border-shadow-100 w-full">
          <div className="w-full">
            <div className="flex items-start gap-8 relative border-b border-shadow-100 w-full bg-transparent h-auto p-0 justify-start">
              <div 
                className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                onClick={() => handleTabClick('services')}
              >
                <span className="text-sm text-shadow-600 hover:text-primary-800">
                  Servicios o tratamientos
                </span>
                <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
              </div>

              <div 
                className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                onClick={() => handleTabClick('calendar')}
              >
                <span className="text-sm text-shadow-600 hover:text-primary-800">
                  Calendario y horarios
                </span>
                <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
              </div>

              <div className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden border-b-2 border-primary-800 rounded-none whitespace-nowrap transition-all duration-200">
                <span className="text-sm text-primary-800 font-semibold">
                  Política de cancelación y pago
                </span>
                <CalendarIcon className="w-4 h-4 text-primary-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Header with Actions */}
        <header className="flex items-center justify-between w-full">
          <h1 className="text-heading-lg text-primary-900 font-bold">
            Escribe la política de cancelación
          </h1>

          <div className="flex items-center gap-3">
            {actionButtons.map((button, index) => (
              <Button
                key={`action-${index}`}
                variant={button.primary ? "default" : "outline"}
                className={`rounded-3xl px-6 py-3 h-auto transition-all duration-200 flex items-center gap-2 ${
                  button.primary
                    ? "bg-primary-500 hover:bg-primary-600 text-white shadow-md"
                    : "bg-white text-primary-500 shadow-xs border-primary-200 hover:bg-primary-50 hover:border-primary-300"
                }`}
              >
                <span className="text-sm font-medium">
                  {button.text}
                </span>
                <PlusIcon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </header>

        {/* Main Content Card */}
        <Card className="w-full h-[378px] shadow-sm border border-gray-200 rounded-xl">
          <CardContent className="p-0 h-full bg-white rounded-xl">
            {/* Empty content area */}
          </CardContent>
        </Card>

        {/* Footer Actions */}
        <div className="flex items-center justify-between w-full">
          <Button
            variant="outline"
            className="rounded-3xl px-6 py-3 h-auto bg-white shadow-xs border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            <span className="text-sm font-medium text-shadow-700">
              Cancelar
            </span>
          </Button>

          <Button className="rounded-3xl px-6 py-3 h-auto bg-primary-500 hover:bg-primary-600 shadow-md transition-all duration-200">
            <span className="text-sm font-medium text-white">
              Guardar
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};