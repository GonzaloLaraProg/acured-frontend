import { X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "Inglés" },
    { code: "pt", name: "Português" },
  ];

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[500px] mx-4 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-normal text-primary-900">
            Cambiar idioma
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="flex items-center gap-2 text-primary-900 hover:bg-gray-100 p-2"
          >
            <span className="text-sm">Cerrar</span>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Language Options */}
        <div className="space-y-4">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="outline"
              className="w-full py-4 px-6 text-left justify-start bg-white border-gray-200 rounded-lg hover:bg-gray-50 text-primary-900"
              onClick={onClose}
            >
              <span className="text-base font-normal">
                {language.name}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};