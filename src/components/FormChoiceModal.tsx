import React from "react";
import { useNavigate } from "react-router-dom";
import { FormSkipConfirmationModal } from "./FormSkipConfirmationModal";
import { Button } from "./ui/button";

interface FormChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormChoiceModal: React.FC<FormChoiceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const [isSkipConfirmationOpen, setIsSkipConfirmationOpen] = React.useState(false);

  if (!isOpen) return null;

  const handleFillForm = () => {
    navigate('/VistaPrellenado');
    onClose();
  };

  const handlePayLater = () => {
    setIsSkipConfirmationOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[500px] mx-4 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-sm font-medium text-gray-600 mb-4">
            Para finalizar tu reserva
          </h3>
          <h2 className="text-2xl font-normal text-primary-900 mb-4">
            Necesitamos que respondas el siguiente cuestionario clínico.
          </h2>
          <p className="text-sm text-gray-600">
            Este paso es muy relevante ya que esta información será enviada a tu terapeuta previo a la sesión.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4">
          <Button 
            className="w-full px-6 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
            onClick={handleFillForm}
          >
            <span className="font-medium">
              Rellenar formulario clínico
            </span>
          </Button>

          <Button 
            variant="outline"
            className="w-full px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50"
            onClick={handlePayLater}
          >
            <span className="font-medium">
              Continuar más tarde y pagar
            </span>
          </Button>
        </div>
      </div>

      <FormSkipConfirmationModal
        isOpen={isSkipConfirmationOpen}
        onClose={() => setIsSkipConfirmationOpen(false)}
      />
    </div>
  );
};