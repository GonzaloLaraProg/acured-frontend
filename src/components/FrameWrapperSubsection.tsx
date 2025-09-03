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

export const FrameWrapperSubsection = ({ onClose, onConfirmCancellation }: FrameWrapperSubsectionProps): JSX.Element => {
  const [showFeedback, setShowFeedback] = React.useState(false);

  const handleConfirmCancellation = () => {
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
    <div className="flex flex-col items-center gap-12 w-full">
      <Card className="w-full max-w-[612px] bg-neutralswhite rounded-lg">
        <CardContent className="flex flex-col items-center pt-8 pb-0 px-8">
          <div className="flex flex-col items-end w-full mb-6">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center gap-1.5 rounded-[37.5px] h-auto p-0"
              onClick={onClose}
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-zinc-900 text-sm">
                Cerrar
              </span>
              <XIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="flex flex-col items-center gap-6 py-6 w-full">
            <h2 className="w-[336px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
              Cancelación de cita
            </h2>

            <Alert className="w-full max-w-[530px] bg-yellow-100 border-yellow-200 shadow-shadow-base">
              <AlertTriangleIcon className="w-6 h-6 text-orange-700" />
              <div className="flex flex-col gap-2 flex-1">
                <AlertDescription className="font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-orange-700 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
                  Advertencia
                </AlertDescription>
                <div className="flex flex-col gap-1">
                  <p className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-orange-700 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                    Si cancelas ahora, recibirás un reembolso completo a tu
                    medio de pago. El tiempo de procesamiento dependerá de tu
                    entidad bancaria (generalmente de 3 a 7 días hábiles).
                  </p>
                  <Button
                    variant="link"
                    className="inline-flex gap-2 px-0 py-1.5 rounded-3xl h-auto"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-semibold text-orange-700 text-xs underline">
                      Ver política de cancelación
                    </span>
                  </Button>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-auto p-0">
                <XIcon className="w-4 h-4" />
              </Button>
            </Alert>

            <div className="flex flex-col items-start gap-3 w-full">
              <Card className="w-full bg-neutralswhite rounded-lg border border-[#dcdce2] shadow-shadow-xs overflow-hidden">
                <div className="h-[156px] bg-[#bbcac0]" />
                <CardContent className="flex flex-col items-end gap-6 pt-3 pb-6 px-4">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col items-start gap-3">
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-2.5">
                          <span className="font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-primary-700 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
                            01/08/2025, 15:30 PM
                          </span>
                        </div>

                        <div className="flex flex-col items-start gap-2">
                          <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-black text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                            Profesional
                          </h3>

                          <p className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-black text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                            Especialidad
                          </p>

                          <Button
                            variant="link"
                            className="[font-family:'Inter',Helvetica] font-semibold text-shadow-800 text-xs underline h-auto p-0"
                          >
                            Ver perfil profesional
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-[125px] items-start gap-1">
                      <div className="flex items-start gap-2.5 w-full">
                        <MapPinIcon className="w-6 h-6" />
                        <span className="flex-1 [font-family:'Inter',Helvetica] font-normal text-black text-xs leading-5">
                          Principe de gales, la reina 33333
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 w-full">
                        <PhoneIcon className="w-6 h-6" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xs leading-5">
                          Teléfono
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-start justify-end gap-2.5 w-full">
              <Button 
                className="inline-flex justify-center px-4 py-2 bg-primary-900 rounded-3xl h-auto"
                onClick={handleConfirmCancellation}
              >
                <div className="inline-flex items-center gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm leading-5">
                    Anular cita
                  </span>
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};