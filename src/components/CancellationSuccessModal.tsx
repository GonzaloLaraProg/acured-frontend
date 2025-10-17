import { CheckCircleIcon, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface CancellationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CancellationSuccessModal: React.FC<CancellationSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[45] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[400px] mx-4 p-0">
        {/* Success header with green background */}
        <div className="flex items-center justify-between gap-3 p-4 bg-green-50 rounded-t-2xl border-b border-green-200">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-6 h-6 text-green-600" />
            <span className="font-medium text-green-600 text-base">
              Éxito
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1 hover:bg-green-100"
          >
            <X className="w-4 h-4 text-green-600" />
          </Button>
        </div>

        {/* Success message */}
        <div className="p-6">
          <p className="text-sm text-gray-700 mb-6">
            ¡Cita cancelada con éxito!
          </p>

          {/* Close button */}
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Button 
              className="px-4 py-2 bg-primary-800 text-white rounded-3xl hover:bg-primary-700"
              onClick={onClose}
            >
              <span className="font-medium text-sm">
                Cerrar
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};