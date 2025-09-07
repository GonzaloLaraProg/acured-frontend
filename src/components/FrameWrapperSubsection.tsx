import {
  AlertTriangleIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { FeedbackSubsection } from "./FeedbackSubsection";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface FrameWrapperSubsectionProps {
  onClose?: () => void;
  onConfirmCancellation?: () => void;
}

export const FrameWrapperSubsection = ({
  onClose,
  onConfirmCancellation,
}: FrameWrapperSubsectionProps): JSX.Element => {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleConfirmCancellation = () => {
    setShowFeedback(true);
  };

  const handleFeedbackClose = () => {
    setShowFeedback(false);
    onClose?.();
  };

  // Si entra al flujo de feedback
  if (showFeedback) {
    return (
      <div className="fixed inset-0 z-[130] flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={handleFeedbackClose}
        />
        {/* Submodal feedback */}
        <div className="relative w-[612px] h-[635px]">
          <FeedbackSubsection onClose={handleFeedbackClose} />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenido modal */}
      <Card className="relative w-[612px] h-[635px] bg-neutralswhite rounded-lg border border-[#dcdce2] shadow-shadow-xs">
        <CardContent className="flex flex-col justify-between pt-6 pb-6 px-8 h-full">
          {/* Header */}
          <div className="flex justify-end w-full">
            <Button
              variant="ghost"
              className="inline-flex items-center gap-1.5 rounded-[37.5px] h-auto p-0 hover:bg-transparent"
              onClick={onClose}
            >
              <span className="text-sm text-zinc-900">Cerrar</span>
              <XIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6 flex-1 items-center overflow-y-auto">
            <h2 className="text-primary-900 font-heading-h5 text-center">
              Cancelación de cita
            </h2>

            <Alert className="w-full max-w-[530px] bg-yellow-100 border-yellow-200 shadow-shadow-base">
              <AlertTriangleIcon className="w-6 h-6 text-orange-700" />
              <div className="flex flex-col gap-2 flex-1">
                <AlertDescription className="font-heading-h7 text-orange-700">
                  Advertencia
                </AlertDescription>
                <p className="text-orange-700 text-sm">
                  Si cancelas ahora, recibirás un reembolso completo a tu medio de pago.
                  El tiempo de procesamiento dependerá de tu entidad bancaria
                  (generalmente de 3 a 7 días hábiles).
                </p>
                <Button variant="link" className="px-0 py-1.5 h-auto underline text-xs text-orange-700">
                  Ver política de cancelación
                </Button>
              </div>
            </Alert>

            {/* Tarjeta cita */}
            <Card className="w-full border border-[#dcdce2] shadow-shadow-xs overflow-hidden">
              <div className="h-[156px] bg-[#bbcac0]" />
              <CardContent className="flex justify-between gap-6 pt-3 pb-6 px-4">
                <div className="flex flex-col gap-2">
                  <span className="text-primary-700 text-sm">01/08/2025, 15:30 PM</span>
                  <h3 className="font-heading-h6">Profesional</h3>
                  <p className="font-paragraph-p2-semi-bold">Especialidad</p>
                  <Button variant="link" className="underline text-xs p-0 h-auto">
                    Ver perfil profesional
                  </Button>
                </div>

                <div className="flex flex-col gap-2 w-[125px]">
                  <div className="flex gap-2">
                    <MapPinIcon className="w-5 h-5" />
                    <span className="text-xs">Principe de gales, la reina 33333</span>
                  </div>
                  <div className="flex gap-2">
                    <PhoneIcon className="w-5 h-5" />
                    <span className="text-xs">Teléfono</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="flex justify-end w-full">
            <Button
              className="px-4 py-2 bg-primary-900 rounded-3xl h-auto flex items-center gap-2"
              onClick={handleConfirmCancellation}
            >
              <span className="text-neutralswhite text-sm font-semibold">Anular cita</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>

      </Card>
    </div>
  );
};
