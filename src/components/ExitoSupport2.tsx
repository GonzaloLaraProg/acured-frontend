import { CheckCircleIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { FeedbackSubsection } from "./FeedbackSubsection";

interface ExitoSupport2Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ExitoSupport2: React.FC<ExitoSupport2Props> = ({
  isOpen,
  onClose,
}) => {
  const [showFeedback, setShowFeedback] = React.useState(false);

  if (!isOpen) return null;

  const handleOtherExito = () => {
    setShowFeedback(true);
  };

  const handleFeedbackClose = () => {
    setShowFeedback(false);
    onClose?.();
  };

  if (showFeedback) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        <FeedbackSubsection onClose={onClose} />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal de éxito */}
      <Card className="relative w-96 shadow-shadow-md z-[61]">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-t-lg">
          <CheckCircleIcon className="w-7 h-7 text-green-600" />

          <div className="flex-1 font-heading-h7 text-green-600">
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

        {/* Content */}
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-b-lg">
          <div className="text-gray-600 text-sm leading-relaxed">
            Notificaremos al terapeuta sobre la{" "}
            <strong>anulación válida de tu cita</strong> dentro del plazo establecido.
            <br />
            <br />
            Recuerda que{" "}
            <strong>es el terapeuta quien gestiona la devolución y no Acured</strong>.  
            Le facilitaremos tus datos y enviaremos recordatorios dentro de las primeras 48 hrs.  
            Si tras ese plazo aún no ha realizado la devolución, te recomendamos contactarte de manera directa a sus medios de contacto en su perfil.
          </div>

          {/* Footer */}
          <div className="flex justify-end w-full border-t pt-4">
            <Button
              className="h-auto px-4 py-2 bg-primary-800 rounded-3xl shadow-md hover:bg-primary-700"
              onClick={handleOtherExito}
            >
              <span className="text-white text-sm font-medium">Cerrar</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
