import { X } from "lucide-react";
import React from "react";

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
      <div className="relative bg-primary-50 rounded-2xl shadow-lg w-full max-w-[420px] mx-4 p-10 flex flex-col items-center">
        {/* Botón cerrar arriba a la derecha */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center gap-2 text-primary-900 hover:opacity-70"
        >
          <span className="text-sm">Cerrar</span>
          <X className="w-5 h-5" />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-normal text-primary-900 text-center mb-10">
          Cambiar idioma
        </h2>

        {/* Opciones de idioma */}
        <div className="flex flex-col gap-4 w-full">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={onClose}
              className="w-[70%] h-14 mx-auto bg-white text-green-900 font-semibold rounded-xl shadow-sm hover:bg-gray-50 transition"
            >
              {language.name}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
