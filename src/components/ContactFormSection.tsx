import { X, ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { FeedbackSection } from "./FeedbackSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormSection = ({
  isOpen,
  onClose,
}: ContactFormSectionProps): JSX.Element => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
          className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
          {/* Botón cerrar */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-700 hover:text-primary-900 hover:bg-primary-100 p-1"
          >
            <span className="text-sm">Cerrar</span>
            <X className="w-4 h-4 ml-1" />
          </Button>

          {/* Título */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-primary-900 mb-2">
              ¡Contáctanos!
            </h2>
            <p className="text-primary-700 text-lg">
              Te contactaremos lo antes posible.
            </p>
          </div>

          {/* Formulario */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nombre"
              className="w-full bg-primary-100 border border-primary-300 rounded-md px-3 py-2 text-primary-900 placeholder-primary-600"
            />
            <Input
              type="text"
              placeholder="Apellidos"
              className="w-full bg-primary-100 border border-primary-300 rounded-md px-3 py-2 text-primary-900 placeholder-primary-600"
            />
            <Input
              type="email"
              placeholder="Mail"
              className="w-full bg-primary-100 border border-primary-300 rounded-md px-3 py-2 text-primary-900 placeholder-primary-600"
            />
            <Textarea
              placeholder="Escribe tu mensaje aquí"
              rows={4}
              className="w-full bg-primary-100 border border-primary-300 rounded-md px-3 py-2 text-primary-900 placeholder-primary-600 resize-none"
            />

            {/* Botón confirmar */}
            <div className="flex justify-start">
              <Button
                type="submit"
                onClick={() => handleSubmit()}
                className="bg-primary-900 hover:bg-primary-800 text-white rounded-full px-6 py-2 flex items-center gap-2"
              >
                Confirmar
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Feedback */}
      <FeedbackSection isOpen={showFeedback} onClose={handleFeedbackClose} />
    </>
  );
};
