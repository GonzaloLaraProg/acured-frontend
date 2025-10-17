import { CheckCircleIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface CalendarSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarSuccessModal: React.FC<CalendarSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleBackToHome = () => {
    navigate('/');
    onClose();
  };

  const handleGoToReservations = () => {
    navigate('/patient-dashboard');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[45] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[400px] mx-4 p-8">
        {/* Success header with green background */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-green-50 rounded-lg">
          <CheckCircleIcon className="w-6 h-6 text-green-600" />
          <span className="font-medium text-green-600 text-base">
            Éxito
          </span>
        </div>

        {/* Success message */}
        <div className="text-center mb-8">
          <p className="text-base text-gray-700">
            Tu cita ha sido añadida a tu calendario con éxito
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center">
          <Button 
            variant="outline"
            className="px-6 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 border-0"
            onClick={handleBackToHome}
          >
            <span className="font-medium text-sm">
              Volver a la página de inicio
            </span>
          </Button>

          <Button 
            className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
            onClick={handleGoToReservations}
          >
            <span className="font-medium text-sm">
              Ir a mis reservas
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};