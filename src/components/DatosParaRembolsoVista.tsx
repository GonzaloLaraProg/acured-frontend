import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ExitoSupport2 } from "./ExitoSupport2";

interface DatosParaRembolsoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DatosParaRembolso: React.FC<DatosParaRembolsoProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = React.useState<"form" | "exito">("form");


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

  const formFields = [
    { id: "titular", label: "Titular", type: "input", placeholder: "Nombre", value: "" },
    { id: "rut", label: "Rut", type: "input", placeholder: "Sin puntos ni guión", value: "" },
    { id: "banco", label: "Banco", type: "select", placeholder: "Seleccione banco", value: "" },
    { id: "tipoCuenta", label: "Tipo de cuenta", type: "select", placeholder: "Seleccione cuenta", value: "" },
    { id: "cuenta", label: "Cuenta", type: "input", placeholder: "", value: "123456789" },
    { id: "email", label: "Correo electrónico", type: "input", placeholder: "Email", value: "" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[584px] items-center pt-6 pb-0 px-6 relative bg-neutralswhite rounded-lg mt-12">
      {/* Botón cerrar arriba */}
      <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-1.5 rounded-[37.5px] h-auto p-0 hover:bg-transparent"
        >
          <span className="text-zinc-900 text-sm">Cerrar</span>
          <XIcon className="w-[18px] h-[18px]" />
        </Button>
      </div>

      {/* Título */}
      <div className="flex flex-col items-center gap-6 pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-h5 text-primary-900 text-center">
              Datos para reembolso
            </div>

            <div className="relative self-stretch font-paragraph-p2-semi-bold text-shadow-700 text-center">
              Para gestionar la devolución, ingresa tus datos bancarios a continuación.
            </div>
          </div>

          {/* Formulario */}
          <Card className="flex items-start gap-2.5 p-2 relative self-stretch w-full rounded-lg border border-solid border-[#dcdce2]">
            <CardContent className="flex flex-col items-start gap-3 p-2 relative flex-1 grow">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                {formFields.map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col items-start gap-2 relative self-stretch w-full"
                  >
                    <Label className="font-paragraph-p2-semi-bold text-shadow-600">
                      {field.label}
                    </Label>

                    {field.type === "input" && (
                      <Input
                        defaultValue={field.value}
                        placeholder={field.placeholder}
                        className="p-2 flex-1 grow rounded border border-solid border-[#dcdce2] bg-primary-50 h-auto"
                      />
                    )}

                    {field.type === "select" && (
                      <Select>
                        <SelectTrigger className="p-2 flex-1 grow bg-primary-50 rounded border border-solid border-[#d3e0d7] h-auto">
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Opción 1</SelectItem>
                          <SelectItem value="option2">Opción 2</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer con Atrás y Confirmar */}
      <div className="flex items-center justify-between p-6 border-t border-gray-200 w-full">
        <Button
          variant="outline"
          className="px-6 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 border-0"
          onClick={onClose} // 👈 igual que en CancellationPolicyModal
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <span className="font-medium text-sm">Atrás</span>
        </Button>

        <Button
          className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          onClick={handleConfirmCancellation}
        >
          <span className="font-medium text-sm">Confirmar datos y anular cita</span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
