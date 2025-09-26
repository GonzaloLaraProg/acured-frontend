import { CalendarIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";

interface PolicySectionProps {
  onTabChange?: (tab: 'services' | 'calendar' | 'policy') => void;
}

export const PolicySection = ({ onTabChange }: PolicySectionProps): JSX.Element => {
  // Cancellation policies data
  const cancellationPolicies = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  // Payment methods data
  const paymentMethods = [
    { id: 1 },
    { id: 2 },
  ];

  const handleTabClick = (tab: 'services' | 'calendar' | 'policy') => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div className="flex-1 bg-secondary-50 min-h-screen">
      {/* Espaciado superior en móvil para el botón del menú */}
      <div className="lg:hidden h-16 w-full"></div>
      
      <div className="flex flex-col w-full min-h-screen">
        <main className="flex-1 bg-white">
          <div className="flex flex-col items-start gap-6 px-8 py-6 relative flex-1 self-stretch grow">
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
              {/* Tabs Navigation */}
              <div className="inline-flex items-start gap-3 relative border-b border-shadow-100 w-full">
                <div className="w-full">
                  <div className="flex items-start gap-8 relative border-b border-shadow-100 w-full bg-transparent h-auto p-0 justify-start">
                    <div 
                      className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                      onClick={() => handleTabClick('calendar')}
                    >
                      <span className="text-sm text-shadow-600 hover:text-primary-800">
                        Calendario y horarios
                      </span>
                      <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
                    </div>

                    <div 
                      className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                      onClick={() => handleTabClick('services')}
                    >
                      <span className="text-sm text-shadow-600 hover:text-primary-800">
                        Servicios o tratamientos
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

              {/* Cancellation policy section */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading-h7 text-primary-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] whitespace-nowrap">
                    Selecciona la política de cancelación
                  </h2>
                  <div className="w-[151px]"></div>
                </div>

                <div className="flex gap-6">
                  {cancellationPolicies.map((policy) => (
                    <Card
                      key={`policy-${policy.id}`}
                      className="h-[104px] shadow-shadow-sm min-w-[350px]"
                    >
                      <CardContent className="p-0"></CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="bg-neutralswhite rounded-3xl shadow-shadow-xs"
                  >
                    <span className="font-inter-text-xs-medium text-zinc-900 text-[length:var(--inter-text-xs-medium-font-size)] tracking-[var(--inter-text-xs-medium-letter-spacing)] leading-[var(--inter-text-xs-medium-line-height)]">
                      Cancelar
                    </span>
                  </Button>
                  <Button className="bg-primary-800 rounded-3xl shadow-shadow-md">
                    <span className="font-text-text-xs-text-xs-font-medium text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)]">
                      Guardar
                    </span>
                  </Button>
                </div>
              </section>

              {/* Payment method section */}
              <section className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading-h7 text-primary-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] whitespace-nowrap">
                    <span className="text-[#2e3d33]">Modalidad de pago </span>
                  </h2>
                  <div className="w-[151px]"></div>
                </div>

                <div className="flex gap-6">
                  {paymentMethods.map((method) => (
                    <Card
                      key={`method-${method.id}`}
                      className="flex-1 h-[104px] shadow-shadow-sm min-w-[400px]"
                    >
                      <CardContent className="p-0"></CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    className="bg-neutralswhite rounded-3xl shadow-shadow-xs"
                  >
                    <span className="font-inter-text-xs-medium text-zinc-900 text-[length:var(--inter-text-xs-medium-font-size)] tracking-[var(--inter-text-xs-medium-letter-spacing)] leading-[var(--inter-text-xs-medium-line-height)]">
                      Cancelar
                    </span>
                  </Button>
                  <Button className="bg-primary-800 rounded-3xl shadow-shadow-md">
                    <span className="font-text-text-xs-text-xs-font-medium text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)]">
                      Guardar
                    </span>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};