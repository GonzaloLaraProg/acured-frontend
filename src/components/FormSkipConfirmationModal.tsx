import { InfoIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface FormSkipConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormSkipConfirmationModal: React.FC<FormSkipConfirmationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleRespondNow = () => {
    navigate('/VistaPrellenado');
    onClose();
  };

  const handleContinueLater = () => {
    navigate('/confirmation-payment');
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
      <Card className="relative w-[400px] bg-white rounded-2xl shadow-lg border-0">
        <CardContent className="p-0">
          {/* Header with info icon */}
          <div className="flex items-center gap-3 px-6 py-4 bg-primary-100 rounded-t-2xl">
            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
              <InfoIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-primary-900 text-base">
              Información
            </span>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Te enviaremos recordatorios con un enlace para completar el formulario más tarde. Es importante para tu terapeuta que finalices este paso previo a tu sesión.
            </p>

            {/* Action buttons */}
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                className="px-4 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 border-0"
                onClick={handleRespondNow}
              >
                <span className="font-medium text-sm">
                  Responder ahora
                </span>
              </Button>

              <Button
                className="px-4 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
                onClick={handleContinueLater}
              >
                <span className="font-medium text-sm">
                  Continuar más tarde
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};