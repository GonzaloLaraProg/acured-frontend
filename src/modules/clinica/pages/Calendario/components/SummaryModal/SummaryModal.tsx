import { CalendarIcon, PlusIcon, VideoIcon, XIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../../../components/ui/avatar";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../../../../../components/ui/card";

interface SummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleAnother: () => void;
}

export const SummaryModal = ({ isOpen, onClose, onScheduleAnother }: SummaryModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  // Data for appointment details
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
          <CardHeader className="flex flex-row justify-end items-start p-4 pb-0 space-y-0">
            <button 
              className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors ml-auto"
              onClick={onClose}
            >
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-6 p-8 pt-0">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="text-heading-md font-bold text-primary-900 text-center">
                ¡Tu cita ha sido reservada con éxito!
              </h2>

              <p className="text-body-md text-shadow-700 text-center">
                El paciente "Nombre" recibirá un email de confirmación
                y recordatorios antes de la cita.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/ava.svg" alt="Professional" />
                  <AvatarFallback className="bg-primary-200 text-primary-600">P</AvatarFallback>
                </Avatar>
                <span className="text-body-md font-semibold text-primary-900">
                  Profesional
                </span>
              </div>

              <div className="flex flex-col items-center gap-3">
                {appointmentDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    {detail.icon}
                    <span className="text-body-md font-medium text-primary-900">
                      {detail.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between p-8 pt-0">
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
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};