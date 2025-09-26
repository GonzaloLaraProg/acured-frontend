import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ChevronLeftIcon } from "lucide-react";
import {
  Select,
  SelectContent, 
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { 
  AlertTriangleIcon,
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { useNavigate } from "react-router-dom";
import { ExitoSupport2 } from "./ExitoSupport2";
import { FrameWrapperSubsection } from "./FrameWrapperSubsection";

interface DatosParaRembolsoProps {
  onClose?: () => void;
  onConfirmCancellation?: () => void;
}

export const DatosParaRembolso = ({ onClose, onConfirmCancellation }: DatosParaRembolsoProps): JSX.Element => {

const [step, setStep] = React.useState<"form" | "exito" | "atras">("form");
  const navigate = useNavigate();

  const handleConfirmCancellation = () => {
    setStep("exito"); // Muestra la pantalla de éxito
  };

  const handleBack = () => {
    setStep("atras"); // Muestra la pantalla anterior
  };

  const handleClose = () => {
    setStep("form");
    onClose?.();
  };

  // 👉 Render según el step
  if (step === "exito") {
    return (
      <div className="flex items-center justify-center">
        <ExitoSupport2 onClose={handleClose} />
      </div>
    );
  }

  if (step === "atras") {
    return (
      <div className="flex items-center justify-center">
        <FrameWrapperSubsection onClose={handleClose} />
      </div>
    );
  }

  const formFields = [
    {
      id: "titular",
      label: "Titular",
      type: "input",
      placeholder: "Nombre",
      value: "",
    },
    {
      id: "rut",
      label: "Rut",
      type: "input",
      placeholder: "Sin puntos ni guión",
      value: "",
    },
    {
      id: "banco",
      label: "Banco",
      type: "select",
      placeholder: "Seleccione banco",
      value: "",
    },
    {
      id: "tipoCuenta",
      label: "Tipo de cuenta",
      type: "select",
      placeholder: "Seleccione cuenta",
      value: "",
    },
    {
      id: "cuenta",
      label: "Cuenta",
      type: "input",
      placeholder: "",
      value: "123456789",
    },
    {
      id: "email",
      label: "Correo electrónico",
      type: "input",
      placeholder: "Email",
      value: "",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[584px] items-center pt-6 pb-0 px-6 relative bg-neutralswhite rounded-lg mt-12">
      <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
        <Button
  variant="ghost"
  size="sm"
  onClick={onClose}   // 👈 aquí llamas a la función que cierra
  className="inline-flex items-center justify-center gap-1.5 rounded-[37.5px] h-auto p-0 hover:bg-transparent"
>
  <span className="text-zinc-900 text-sm">Cerrar</span>
  <XIcon className="w-[18px] h-[18px]" />
</Button>

      </div>

      <div className="flex flex-col items-center gap-6 pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                Datos para reembolso
              </div>

              <div className="relative self-stretch font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-shadow-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] text-center tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Para gestionar la devolución, ingresa tus datos bancarios a
                continuación.
              </div>
            </div>

            <Card className="flex items-start gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto] rounded-lg border border-solid border-[#dcdce2]">
              <CardContent className="flex flex-col items-start gap-3 p-2 relative flex-1 grow">
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  {formFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]"
                    >
                      <Label className="relative self-stretch mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                        {field.label}
                      </Label>

                      {field.type === "input" && (
                        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            defaultValue={field.value}
                            placeholder={field.placeholder}
                            className="p-2 flex-1 grow rounded border border-solid border-[#dcdce2] bg-primary-50 h-auto"
                          />
                        </div>
                      )}

                      {field.type === "select" && (
                        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                          <Select>
                            <SelectTrigger className="flex items-center justify-between p-2 relative flex-1 grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-primary-50 rounded border border-solid border-[#d3e0d7] h-auto">
                              <SelectValue
                                placeholder={field.placeholder}
                                className="relative w-fit font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="option1">Opción 1</SelectItem>
                              <SelectItem value="option2">Opción 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <Button
            variant="outline"
            className="inline-flex justify-center px-4 py-2 flex-[0_0_auto] bg-primary-100 rounded-3xl border-0 border-none items-center relative h-auto hover:bg-primary-200"
          onClick={handleBack}
          >
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <ChevronLeftIcon className="w-4 h-4" />
              <div className="relative w-fit font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-semi-bold-font-size)] text-right tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Atrás
              </div>
            </div>
          </Button>

          <Button className="inline-flex justify-center px-4 py-2 flex-[0_0_auto] bg-primary-900 rounded-3xl items-center relative h-auto hover:bg-primary-800"
          onClick={handleConfirmCancellation}>
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm text-right tracking-[0] leading-5 whitespace-nowrap">
                Confirmar datos y anular cita
              </div>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
