import { CalendarIcon, PlusIcon, VideoIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleAnother: () => void;
}

export const SummaryModal = ({ isOpen, onClose, onScheduleAnother }: SummaryModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  // Define appointment details data for mapping
  const appointmentDetails = [
    {
      icon: <PlusIcon className="h-6 w-6 text-primary-500" />,
      label: "Tratamiento",
    },
    {
      icon: <CalendarIcon className="h-6 w-6 text-primary-500" />,
      label: "Fecha",
    },
    {
      icon: <VideoIcon className="h-6 w-6 text-primary-500" />,
      label: "Modalidad",
    },
  ];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleScheduleAnother = () => {
    onClose();
    onScheduleAnother();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="max-w-[503px] w-full">
        <Card className="border-none shadow-lg">
          <CardContent className="flex flex-col items-center gap-6 p-8">
            <div className="flex items-center justify-end gap-2.5 relative self-stretch w-full">
              <button 
                className="h-5 w-5 p-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
                onClick={onClose}
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-4 relative self-stretch w-full">
              <h2 className="text-heading-md font-bold text-primary-900 text-center">
                ¡Tu cita ha sido reservada con éxito!
              </h2>

              <p className="text-body-md text-shadow-700 text-center">
                El paciente "Nombre" recibirá un email de confirmación
                y recordatorios antes de la cita.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              {appointmentDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-2.5 w-full justify-center">
                  {detail.icon}
                  <span className="text-body-md font-medium text-primary-900">
                    {detail.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-start justify-between w-full gap-4">
              <Button
                variant="outline"
                className="rounded-3xl shadow-xs text-primary-500 border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 px-6 py-3"
                onClick={handleScheduleAnother}
              >
                <span className="text-sm font-medium">
                  Agendar otra hora
                </span>
              </Button>

              <Button 
                className="bg-primary-500 hover:bg-primary-600 rounded-3xl shadow-md text-white px-6 py-3 transition-all duration-200"
                onClick={onClose}
              >
                <span className="text-sm font-medium">
                  Cerrar
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};