import { CalendarIcon, ChevronRightIcon, PlusIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export const AppointmentModal = ({ isOpen, onClose, onContinue }: AppointmentModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  // Treatment data for mapping
  const treatments = [
    { name: "Moxibustión" },
    { name: "Acupuntura" },
    { name: "Ventosas" },
    { name: "Electropuntura" },
    { name: "Fitoterapia" },
  ];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="w-[520px] max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-6 p-8 bg-white rounded-lg border border-solid border-[#f1f4f2] shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-heading-lg font-bold text-primary-900">
              Agendamiento
            </h2>
            <button 
              className="h-5 w-5 p-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
              onClick={onClose}
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 py-1 w-full">
            <div className="inline-flex items-center pl-0 pr-4 py-0 rounded-3xl opacity-25">
              <div className="inline-flex items-center gap-4">
                <div className="text-xs font-medium text-shadow-800 tracking-[0] leading-[18px] whitespace-nowrap">
                  Información paciente
                </div>
                <ChevronRightIcon className="h-4 w-4" />
              </div>
            </div>

            <div className="flex items-center px-4 py-0 flex-1 rounded-3xl">
              <div className="inline-flex items-center gap-4">
                <div className="text-xs font-semibold text-shadow-800 tracking-[0] leading-[18px] whitespace-nowrap">
                  Selecciona tratamiento
                </div>
                <ChevronRightIcon className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 pt-0 pb-6 border-b border-[#dcdce2] w-full">
            <Card className="w-full border border-solid border-[#dcdce2] shadow-none">
              <CardContent className="p-0">
                <div className="flex items-center justify-between px-3 py-1.5 w-full">
                  <div className="inline-flex items-center gap-3">
                    <CalendarIcon className="h-6 w-6 text-primary-500" />
                    <div className="text-body-md font-semibold text-primary-900">
                      Domingo, 27 noviembre
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 self-stretch">
                    <div className="inline-flex items-center gap-2 p-2">
                      <div className="text-body-md font-semibold text-primary-900">
                        12:00 PM
                      </div>
                    </div>

                    <Separator orientation="vertical" className="h-px w-[7px]" />

                    <div className="inline-flex items-center gap-2 p-2">
                      <div className="text-body-md font-semibold text-primary-900">
                        13:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col w-full items-start gap-3">
              <div className="text-body-md font-bold text-primary-900">
                Selecciona tratamiento
              </div>

              <div className="flex flex-col items-start w-full border border-gray-200 rounded-lg overflow-hidden">
                {treatments.map((treatment, index) => (
                  <div
                    key={`treatment-${index}`}
                    className={`bg-white flex items-center justify-between px-4 py-3 w-full hover:bg-gray-50 transition-colors
                      ${index < treatments.length - 1 ? "border-b border-[#f3f3f5]" : ""}`}
                  >
                    <div className="inline-flex flex-col items-start gap-2">
                      <div className="text-body-md font-semibold text-shadow-900">
                        {treatment.name}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-3xl shadow-xs border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-primary-500">
                        Añadir
                      </span>
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              className="bg-primary-500 hover:bg-primary-600 shadow-md px-6 py-3 rounded-3xl transition-all duration-200"
              onClick={handleContinue}
            >
              <span className="text-sm font-medium text-white">
                Continuar
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};