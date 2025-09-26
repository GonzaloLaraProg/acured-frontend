import { CheckCircleIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { FeedbackSubsection } from "./FeedbackSubsection";

interface ExitoSupport2Props {
  onClose: () => void;
}

export const ExitoSupport2: React.FC<ExitoSupport2Props> = ({ onClose }): JSX.Element => {
const [showFeedback, setShowFeedback] = React.useState(false);
  
    const otherExito = () => {
        setShowFeedback(true);
      };
    
      const handleFeedbackClose = () => {
        setShowFeedback(false);
        onClose?.();
      };
    
      if (showFeedback) {
        return (
          <div className="flex items-center justify-center">
            <FeedbackSubsection onClose={handleFeedbackClose} />
          </div>
        );
      }
  return (
    <Card className="w-96 shadow-shadow-md">
      <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-[8px_8px_0px_0px]">
        <CheckCircleIcon className="w-7 h-7 text-green-600" />

        <div className="flex-1 font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-green-600 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
          Éxito
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="p-1 hover:bg-green-100"
        >
          <XIcon className="w-4 h-4 text-green-600" />
        </Button>
      </div>

      <CardContent className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-[0px_0px_8px_8px]">
        <div className="self-stretch mt-[-1.00px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-gray-600 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
        Notificaremos al terapeuta sobre la <strong>anulación válida de tu cita</strong> dentro del plazo establecido.
        <br /><br />
        Recuerda que <strong>es el terapeuta quien gestiona la devolución y no Acured</strong>. Le facilitaremos tus datos y enviaremos recordatorios dentro de las primeras 48 hrs. Si tras ese plazo aún no ha realizado la devolución, te recomendamos contactarte de manera directa a sus medios de contacto en su perfil.
        </div>


        <div className="flex flex-col items-start gap-2 pt-3 pb-0 px-0 self-stretch w-full border-t [border-top-style:solid] border-[#d4d4d8]">
          <div className="flex items-center justify-end gap-2.5 self-stretch w-full">
            <div className="inline-flex items-start gap-2">
              <Button 
                className="h-auto px-4 py-2 bg-primary-800 rounded-3xl shadow-shadow-md hover:bg-primary-700"
                onClick={otherExito}
              >
                <div className="mt-[-1.00px] font-text-text-sm-text-sm-font-medium font-[number:var(--text-text-sm-text-sm-font-medium-font-weight)] text-neutralswhite text-[length:var(--text-text-sm-text-sm-font-medium-font-size)] tracking-[var(--text-text-sm-text-sm-font-medium-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-sm-text-sm-font-medium-font-style)]">
                  Cerrar
                </div>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};