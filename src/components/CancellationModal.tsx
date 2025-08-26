import { X, AlertTriangle, MapPinIcon, VideoIcon, ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface CancellationModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment?: {
    professional: string;
    treatment: string;
    price: number;
  };
}

export const CancellationModal: React.FC<CancellationModalProps> = ({
  isOpen,
  onClose,
  appointment = {
    professional: "Profesional",
    treatment: "Tratamiento o servicio",
    price: 0
  }
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[500px] mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div></div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 p-2"
          >
            <span className="text-sm">Cerrar</span>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Title */}
        <h2 className="text-xl font-normal text-primary-900 text-center mb-6">
          Cancelación de cita
        </h2>

        {/* Warning Message */}
        <div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg mb-6">
          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-gray-800">
              Cancela con "x" días de anticipación para obtener un rembolso total.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">¿Entendido?</span>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 hover:bg-orange-100"
            >
              <X className="w-4 h-4 text-gray-400" />
            </Button>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="mb-6">
          {/* Professional Image Placeholder */}
          <div className="w-full h-32 bg-primary-200 rounded-lg mb-4"></div>
          
          {/* Appointment Info */}
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-primary-900 text-lg mb-1">
                {appointment.professional}
              </h3>
              <p className="text-primary-900 mb-2">
                {appointment.treatment}
              </p>
              <p className="text-primary-900 font-semibold">
                ${appointment.price}
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Dirección</span>
              </div>
              <div className="flex items-center gap-2">
                <VideoIcon className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Modalidad</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">Duración</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cancel Button */}
        <div className="flex justify-end">
          <Button 
            className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 flex items-center gap-2"
            onClick={onClose}
          >
            <span className="font-medium text-sm">
              Cancelar cita
            </span>
            <span className="text-lg">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
};