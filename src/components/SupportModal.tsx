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

  // Estado único: controla qué modal está activo
  const [activeModal, setActiveModal] = React.useState<
    null | "support" | "contact" | "cancel"
  >(null);

  // Cada vez que isOpen cambie a true, mostramos el modal de soporte
  React.useEffect(() => {
    if (isOpen) {
      setActiveModal("support");
    } else {
      setActiveModal(null);
    }
  }, [isOpen]);

  const handleOptionClick = (optionText: string) => {
    if (optionText === "Contáctanos") {
      setActiveModal("contact");
    } else if (optionText === "Cancelación de cita") {
      setActiveModal("cancel");
    } else if (optionText === "Reembolsos") {
      navigate("/terms-and-conditions?from=reembolsos");
      onClose();
    } else {
      onClose();
    }
  };

  if (!activeModal) return null;

  return (
    <>
      {/* Ventana de soporte */}
      {activeModal === "support" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal principal */}
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
                      <div className="font-normal text-zinc-900 text-sm">
                        Cerrar
                      </div>
                      <XIcon className="w-[18px] h-[18px]" />
                    </Button>
                  </div>

                  <div className="flex flex-col items-center gap-6 pb-12 w-full">
                    <div className="w-[336px] font-heading-h5 font-semibold text-primary-900 text-[20px] text-center">
                      Te damos la bienvenida al servicio de soporte de Acured
                    </div>

                    <div className="flex flex-col items-center gap-6 px-12 py-8 w-full bg-primary-50 rounded-3xl">
                      <div className="font-heading-h6 font-semibold text-primary-900 text-[18px]">
                        ¿Con qué te podemos ayudar?
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
                              <div className="font-paragraph-p1-semi-bold text-primary-700 text-[16px]">
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
      )}

      {/* Modal de contacto */}
      {activeModal === "contact" && (
        <ContactFormSection
          isOpen={true}
          onClose={() => setActiveModal("support")}
        />
      )}

      {/* Modal de cancelación */}
      {activeModal === "cancel" && (
        <CancellationFormModal
          isOpen={true}
          onClose={() => setActiveModal("support")}
        />
      )}
    </>
  );
};
