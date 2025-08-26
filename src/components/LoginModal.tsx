import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handlePatientLogin = () => {
    navigate('/login');
    onClose();
  };

  const handleTherapistLogin = () => {
    navigate('/login');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[500px] mx-4 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-normal text-primary-900 mb-2">
            Inicia sesión
          </h2>
        </div>

        {/* Login Options */}
        <div className="space-y-4">
          {/* Acured para pacientes */}
          <div
            className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handlePatientLogin}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Acured para pacientes
                </span>
                <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-gray-600 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                  Soy paciente y quiero iniciar sesión
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Acured para acupunturistas */}
          <div
            className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleTherapistLogin}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Acured para acupunturistas
                </span>
                <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-gray-600 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                  Soy acupunturista y me interesa administrar mis pacientes
                </span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};