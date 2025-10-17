import { ChevronRightIcon, XIcon } from "lucide-react";
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
      <div className="fixed inset-0 z-[45] flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative  p-3 bg-neutralswhite rounded-lg shadow-lg">
          <div className="flex flex-col pt-8 pb-0 px-8">
            {/* Botón cerrar */}
            <div className="flex flex-row items-center justify-end">
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 hover:bg-transparent"
                onClick={onClose}
              >
                <div className="inline-flex items-center justify-center gap-1.5 rounded-[37.5px]">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-zinc-900 text-sm tracking-[0] leading-[normal]">
                    Cerrar
                  </span>
                  <XIcon className="w-[18px] h-[18px]" />
                </div>
              </Button>
            </div>

            {/* Contenido */}
            <div className="inline-flex flex-col items-center gap-6 pt-6 pb-12 px-0">
              {/* Título */}
              <h2 className="w-[500px] font-haas text-[40px] font-[number:var(--heading-h5-font-weight)] text-primary-900 text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                ¡Contáctanos!
              </h2>


              <p className="w-[500px] font-inter text-[70px]  font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)]  tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
               &nbsp; &nbsp;  Te contactaremos lo antes posible
              </p>

              {/* Campos */}
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                 
                  <Input
                    className="w-full p-2 bg-primary-50 border-0 rounded text-primary-900"
                    placeholder="Nombre"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  
                  <Input
                    className="w-full p-2 bg-primary-50 border-0 rounded text-primary-900"
                    placeholder="Apellidos"
                  />
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  
                  <Input
                    type="email"
                    className="w-full p-2 bg-primary-50 border-0 rounded text-primary-900"
                    placeholder="Mail"
                  />
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                 
                  <Textarea
                    rows={4}
                    className="w-full p-2 bg-primary-50 border-0 rounded text-primary-900 resize-none"
                    placeholder="Escribe tu mensaje aquí"
                  />
                </div>
              </div>

              {/* Botón confirmar */}
              <div className="flex flex-col items-start gap-2.5 w-full">
                <Button
                  className="h-auto inline-flex justify-center px-4 py-2 bg-primary-900 rounded-3xl items-center hover:bg-primary-800"
                  onClick={handleSubmit}
                >
                  <div className="inline-flex items-center gap-1">
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-xs text-left tracking-[0] leading-[18px] whitespace-nowrap">
                      Confirmar
                    </span>
                    <ChevronRightIcon className="w-4 h-4" />
                  </div>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <FeedbackSection isOpen={showFeedback} onClose={handleFeedbackClose} />
    </>
  );
};
