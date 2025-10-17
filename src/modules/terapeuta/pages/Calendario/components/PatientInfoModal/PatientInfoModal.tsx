import { ChevronRightIcon, UploadIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../../../components/ui/card";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { Input } from "../../../../../../components/ui/input";
import { Separator } from "../../../../../../components/ui/separator";

interface PatientInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export const PatientInfoModal = ({ isOpen, onClose, onContinue }: PatientInfoModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  // Navigation steps data
  const navigationSteps = [
    { label: "Información paciente", active: true },
    { label: "Selecciona tratamiento", active: false },
  ];

  // Form sections data
  const formSections = [
    {
      title: "Datos básicos",
      fields: [
        { label: "Nombre", name: "nombre" },
        { label: "Apellidos", name: "apellidos" },
        { label: "Edad", name: "edad" },
        { label: "Rut", name: "rut" },
      ],
    },
    {
      title: "Información general paciente",
      fields: [
        { label: "Teléfono", name: "telefono" },
        { label: "Ocupación", name: "ocupacion" },
      ],
    },
  ];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContinue = () => {
    onContinue();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <Card className="flex flex-col gap-4 p-8 bg-white rounded-lg border border-solid border-[#f1f4f2] shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between p-0 space-y-0">
            <h2 className="text-heading-lg font-bold text-primary-900">
              Agendamiento
            </h2>
            <Button variant="ghost" size="icon" className="w-5 h-5 p-0" onClick={onClose}>
              <XIcon className="w-5 h-5" />
            </Button>
          </CardHeader>

          <div className="flex items-center gap-4 px-0 py-1 w-full">
            {navigationSteps.map((step, index) => (
              <div
                key={index}
                className={`inline-flex items-center ${
                  !step.active && "opacity-25"
                }`}
              >
                <div className="inline-flex items-center gap-1">
                  <span
                    className={`font-semibold text-shadow-800 text-xs text-right tracking-[0] leading-[18px] whitespace-nowrap ${
                      step.active
                        ? "text-primary-800"
                        : "font-normal"
                    }`}
                  >
                    {step.label}
                  </span>
                  {index < navigationSteps.length - 1 && <ChevronRightIcon className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>

          <CardContent className="flex flex-col w-full gap-6 pt-0 pb-6 px-0 border-b border-[#dcdce2] p-0">
            <div className="flex flex-col items-start gap-3 w-full">
              <h3 className="text-heading-sm font-bold text-primary-900">
                Información paciente
              </h3>

              <div className="flex flex-col items-start gap-1 w-full">
                <label className="text-body-md font-semibold text-primary-700">
                  Fecha
                </label>

                <div className="flex items-center gap-3 w-full">
                  <div className="flex-1 p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                    <span className="text-body-md text-primary-700">
                      Domingo, 27 noviembre
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 self-stretch">
                    <div className="p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                      <span className="text-body-md text-primary-700">
                        Hora
                      </span>
                    </div>

                    <Separator className="w-[7px] h-px" orientation="horizontal" />

                    <div className="p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                      <span className="text-body-md text-primary-700">
                        Hora
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {formSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="flex flex-col items-start gap-3 w-full"
              >
                <h4 className="text-body-md font-bold text-primary-900">
                  {section.title}
                </h4>

                <div className="grid grid-cols-2 gap-2.5 w-full">
                  {section.fields.map((field, fieldIndex) => (
                    <div
                      key={fieldIndex}
                      className="flex flex-col items-start justify-center gap-1"
                    >
                      <label className="text-body-md font-semibold text-primary-700">
                        {field.label}
                      </label>
                      <Input
                        className="w-full p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]"
                        name={field.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col items-start gap-3 w-full">
              <h4 className="text-body-md font-bold text-primary-900">
                Ficha Clínica
              </h4>

              <div className="flex items-center gap-3">
                <label className="text-body-md font-semibold text-primary-700">
                  Enviar ficha clinica paciente
                </label>
                <Checkbox className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <h4 className="text-body-md font-bold text-primary-900">
                Imágenes
              </h4>

              <div className="flex flex-col items-center gap-1 p-4 w-full bg-white rounded-md border border-dashed border-[#d3e0d7]">
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="flex w-11 h-11 items-center justify-center gap-2.5 p-[9px] bg-primary-50 rounded-[50px]">
                    <UploadIcon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col items-center gap-1 w-full">
                    <div className="flex items-center justify-center gap-1 w-full">
                      <span className="text-body-md text-primary-700">
                        Haga clic para cargar
                      </span>
                      <span className="text-body-md text-shadow-900">
                        o arrastra y suelta
                      </span>
                    </div>

                    <p className="w-full text-body-md text-shadow-900 text-center">
                      (Tamaño máximo de archivo: 25 MB)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end p-0">
            <Button 
              className="bg-primary-500 hover:bg-primary-600 shadow-md px-6 py-3 rounded-3xl"
              onClick={handleContinue}
            >
              <span className="text-sm font-medium text-white">
                Continuar
              </span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};