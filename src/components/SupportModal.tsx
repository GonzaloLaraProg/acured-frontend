import {
  CalendarIcon,
  CreditCardIcon,
  MessageCircleIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import React from "react";
import { ContactFormSection } from "./ContactFormSection";
import { CancellationFormModal } from "./CancellationFormModal";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const supportOptions = [
  {
    icon: CalendarIcon,
    text: "Agendar hora",
  },
  {
    icon: Trash2Icon,
    text: "Cancelación de cita",
  },
  {
    icon: CreditCardIcon,
    text: "Reembolsos",
  },
  {
    icon: MessageCircleIcon,
    text: "Contáctanos",
  },
];

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);
  const [isCancellationFormOpen, setIsCancellationFormOpen] = React.useState(false);

  const handleOptionClick = (optionText: string) => {
    if (optionText === "Contáctanos") {
      setIsContactFormOpen(true);
    } else if (optionText === "Cancelación de cita") {
      setIsCancellationFormOpen(true);
    } else if (optionText === "Reembolsos") {
      navigate('/terms-and-conditions?from=reembolsos');
      onClose();
    } else {
      onClose();
    }
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
        <div className="relative">
          <div className="flex flex-col items-center gap-12 w-full max-w-[576px] mx-auto">
            <Card className="w-full bg-neutralswhite rounded-lg shadow-lg">
              <CardContent className="flex flex-col items-center pt-8 pb-0 px-8">
                <div className="flex flex-col items-end w-full mb-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="inline-flex items-center justify-center gap-1.5 rounded-[37.5px] h-auto p-2 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    <div className="[font-family:'Inter',Helvetica] font-normal text-zinc-900 text-sm">
                      Cerrar
                    </div>
                    <XIcon className="w-[18px] h-[18px]" />
                  </Button>
                </div>

                <div className="flex flex-col items-center gap-6 pb-12 w-full">
                  <div className="w-[336px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    Te damos la bienvenida al servicio de soporte de Acured
                  </div>

                  <div className="flex flex-col items-center gap-6 px-12 py-8 w-full bg-primary-50 rounded-3xl">
                    <div className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      ¿Con que te podemos ayudar?
                    </div>

                    <div className="flex flex-col items-start gap-3 w-full max-w-fit">
                      {supportOptions.map((option, index) => {
                        const IconComponent = option.icon;
                        return (
                          <Button
                            key={index}
                            variant="ghost"
                            className="flex items-center gap-2 p-3 w-full bg-neutralswhite rounded-lg shadow-shadow-xs h-auto justify-start hover:bg-gray-50"
                            onClick={() => handleOptionClick(option.text)}
                          >
                            <div className="inline-flex items-center gap-2.5">
                              <IconComponent className="w-[22.5px] h-[22.5px]" />
                            </div>
                            <div className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                              {option.text}
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ContactFormSection
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      <CancellationFormModal
        isOpen={isCancellationFormOpen}
        onClose={() => setIsCancellationFormOpen(false)}
      />
    </>
  );
};