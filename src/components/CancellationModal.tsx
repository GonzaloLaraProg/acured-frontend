import { X, AlertTriangle, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { CancellationPolicyModal } from "./CancellationPolicyModal";
import { CancellationSuccessModal } from "./CancellationSuccessModal";

interface CancellationModalProps {
  isOpen: boolean;
  onClose: () => void;
  cancellationType: 'full-refund' | 'partial-refund' | 'no-refund';
  appointment?: {
    professional: string;
    treatment: string;
    price: number;
  };
}

export const CancellationModal: React.FC<CancellationModalProps> = ({
  isOpen,
  onClose,
  cancellationType,
  appointment = {
    professional: "Profesional",
    treatment: "Especialidad",
    price: 0
  }
}) => {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = React.useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = React.useState(false);

  if (!isOpen) return null;

  const getWarningMessage = () => {
    switch (cancellationType) {
      case 'full-refund':
        return "Si cancelas ahora, recibirás un reembolso completo a tu medio de pago. El tiempo de procesamiento dependerá de tu entidad bancaria (generalmente de 3 a 7 días hábiles).";
      case 'partial-refund':
        return "Si cancelas ahora, recibirás un reembolso parcial según la política de cancelación de tu terapeuta. El tiempo de procesamiento dependerá de tu entidad bancaria (generalmente de 3 a 7 días hábiles).";
      case 'no-refund':
        return "Esta cancelación no incluye reembolso debido a que ya superaste el plazo permitido por tu terapeuta.";
    }
  };

  const handleCancelAppointment = () => {
    setIsSuccessModalOpen(true);
  };

  const handlePolicyClick = () => {
    setIsPolicyModalOpen(true);
  };

  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-[40] flex items-center justify-center">
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
            <h2 className="text-xl font-normal text-primary-900">
              Cancelación de cita
            </h2>
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

          {/* Warning Message */}
          <div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg mb-6">
            <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-orange-700">Advertencia</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-1 hover:bg-orange-100 ml-auto"
                >
                  <X className="w-4 h-4 text-orange-400" />
                </Button>
              </div>
              <p className="text-sm text-orange-700 mb-2">
                {getWarningMessage()}
              </p>
              <button 
                onClick={handlePolicyClick}
                className="text-sm text-orange-700 underline hover:no-underline"
              >
                Ver política de cancelación
              </button>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="mb-6">
            {/* Professional Image Placeholder */}
            <div className="w-full h-32 bg-primary-200 rounded-lg mb-4"></div>
            
            {/* Appointment Info */}
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">01/08/2025, 15:30 PM</p>
                <h3 className="font-semibold text-primary-900 text-lg mb-1">
                  {appointment.professional}
                </h3>
                <p className="text-primary-900 mb-2">
                  {appointment.treatment}
                </p>
                <button className="text-primary-900 text-sm underline hover:no-underline">
                  Ver perfil profesional
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Príncipe de gales, la reina 33333</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Teléfono</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cancel Button */}
          <div className="flex justify-end">
            <Button 
              className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 flex items-center gap-2"
              onClick={handleCancelAppointment}
            >
              <span className="font-medium text-sm">
                Anular cita
              </span>
              <span className="text-lg">→</span>
            </Button>
          </div>
        </div>
      </div>

      <CancellationPolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
      />

      <CancellationSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessClose}
      />
    </>
  );
};