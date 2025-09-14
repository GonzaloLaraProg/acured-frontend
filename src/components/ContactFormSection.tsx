
import { XIcon, ArrowRightIcon } from "lucide-react";

import React, { useState } from "react";
import { FeedbackSection } from "./FeedbackSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
}


export const ContactFormSection = ({ isOpen, onClose }: ContactFormSectionProps): JSX.Element => {

  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFeedback(true);
  };

  const handleFeedbackClose = () => {
    setShowFeedback(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>

      <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative max-w-4xl mx-auto bg-primary-50 rounded-lg p-6 shadow-lg border border-primary-200">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 h-auto p-1 text-primary-700 hover:text-primary-900 hover:bg-primary-100"
          onClick={onClose}
        >
          <XIcon className="w-4 h-4" />
          <span className="ml-1 text-sm">Cerrar</span>
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-primary-900 mb-2">
            ¡Contáctanos!
          </h2>
          <p className="text-primary-700 text-sm">
            Te contactaremos lo antes posible.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="nombre" className="sr-only">
              Nombre
            </Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Nombre"
              className="w-full bg-primary-100 border-primary-300 rounded-md px-3 py-2 text-sm text-primary-900 placeholder-primary-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellidos" className="sr-only">
              Apellidos
            </Label>
            <Input
              id="apellidos"
              type="text"
              placeholder="Apellidos"
              className="w-full bg-primary-100 border-primary-300 rounded-md px-3 py-2 text-sm text-primary-900 placeholder-primary-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mail" className="sr-only">
              Mail
            </Label>
            <Input
              id="mail"
              type="email"
              placeholder="Mail"
              className="w-full bg-primary-100 border-primary-300 rounded-md px-3 py-2 text-sm text-primary-900 placeholder-primary-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje" className="sr-only">
              Mensaje
            </Label>
            <Textarea
              id="mensaje"
              placeholder="Escribe tu mensaje aquí"
              rows={4}
              className="w-full bg-primary-100 border-primary-300 rounded-md px-3 py-2 text-sm resize-none text-primary-900 placeholder-primary-600"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary-800 hover:bg-primary-900 text-white rounded-md py-2 px-4 text-sm font-medium h-auto"
          >
            Confirmar
          </Button>
        </form>
      </div>
      </div>

      <FeedbackSection
        isOpen={showFeedback}
        onClose={handleFeedbackClose}
      />
    </>
  );
};

