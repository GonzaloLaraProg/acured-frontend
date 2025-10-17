import { X, ChevronRightIcon, InstagramIcon, FacebookIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface ProfessionalProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  professional?: {
    name: string;
    specialty: string;
    image: string;
  };
}

export const ProfessionalProfileModal: React.FC<ProfessionalProfileModalProps> = ({
  isOpen,
  onClose,
  professional = {
    name: "Profesional",
    specialty: "Especialidad",
    image: "/profesional.jpg"
  }
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
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[600px] mx-4 max-h-[75vh] overflow-y-auto">
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

        {/* Professional Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 flex-shrink-0">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-normal text-primary-900 mb-1">
                {professional.name}
              </h2>
              <p className="text-lg text-primary-900 mb-3">
                {professional.specialty}
              </p>
              <Button 
                className="px-6 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 flex items-center gap-2"
              >
                <span className="font-medium text-sm">
                  Reservar
                </span>
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              Descripción
            </h3>
            <p className="text-base text-primary-900 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit 
              amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor 
              sit amet, consectetur adipiscing elit ut aliquam, purus sit amet. Lorem ipsum 
              dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus 
              venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit ut aliquam, purus sit amet.
            </p>
          </div>

          {/* Professional Formation */}
          <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              Formación profesional
            </h3>
            <ul className="space-y-2 text-base text-primary-900">
              <li>• Lorem ipsum dolor sit amet, consectetur</li>
              <li>• Lorem ipsum dolor sit amet, consectetur</li>
            </ul>
          </div>

          {/* Applied Techniques */}
          <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              Técnicas aplicadas
            </h3>
            <p className="text-base text-primary-900 leading-relaxed">
              Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, 
              Técnica, Técnica.
            </p>
          </div>

          {/* Social Networks */}
          <div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4">
              Redes sociales
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-base text-primary-900">Instagram</span>
                <InstagramIcon className="w-5 h-5 text-primary-900" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base text-primary-900">Facebook</span>
                <FacebookIcon className="w-5 h-5 text-primary-900" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base text-primary-900">Lindkedin</span>
                <LinkedinIcon className="w-5 h-5 text-primary-900" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};