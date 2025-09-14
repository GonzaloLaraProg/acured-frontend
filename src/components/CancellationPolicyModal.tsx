import { X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface CancellationPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CancellationPolicyModal: React.FC<CancellationPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[600px] mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-end p-6 border-b border-gray-200">
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
        <div className="px-6 py-4">
          <h2 className="text-2xl font-normal text-primary-900 text-center">
            Política de cancelación
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 rounded-lg p-6 min-h-[400px] max-h-[50vh] overflow-y-auto">
            <p className="text-sm text-gray-700 leading-relaxed">
              Texto
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <Button
            variant="outline"
            className="px-6 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 border-0"
            onClick={onClose}
          >
            <span className="font-medium text-sm">Atrás</span>
          </Button>
          
          <Button
            className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
            onClick={onClose}
          >
            <span className="font-medium text-sm">Aceptar políticas</span>
          </Button>
        </div>
      </div>
    </div>
  );
};