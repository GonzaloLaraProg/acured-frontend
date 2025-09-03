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

export const ContactFormSection = ({
  isOpen,
  onClose,
}: ContactFormSectionProps): JSX.Element => {
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-[600px] h-[600px] max-w-none mx-auto bg-white rounded-xl p-10 shadow-xl flex flex-col">
          {/* Botón cerrar */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-6 right-6 h-auto p-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={onClose}
          >
            <span className="mr-1 text-sm">Cerrar</span>
            <XIcon className="w-5 h-5" />
          </Button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              ¡Contáctanos!
            </h2>
            <p className="text-gray-600 text-base">
              Te contactaremos lo antes posible.
            </p>
          </div>

          {/* Formulario */}
          <form
            className="space-y-4 flex-1 flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="sr-only">
                  Nombre
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500"
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
                  className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500"
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
                  className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje" className="sr-only">
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  placeholder="Escribe tu mensaje aquí"
                  rows={6}
                  className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>
            </div>

            {/* Botón confirmar */}
            <Button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-fit px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full text-base font-medium"
            >
              Confirmar
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>

      {/* Feedback */}
      <FeedbackSection isOpen={showFeedback} onClose={handleFeedbackClose} />
    </>
  );
};
