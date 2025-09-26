import { ChevronRightIcon, UploadIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../../../components/ui/dialog";
import { Input } from "../../../../../../components/ui/input";
import { Separator } from "../../../../../../components/ui/separator";

interface PatientInformationSectionProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export const PatientInformationSection = ({ isOpen, onClose, onContinue }: PatientInformationSectionProps): JSX.Element => {
  // Navigation steps data
  const navigationSteps = [
    { label: "Selección Servicio", active: false },
    { label: "Información paciente", active: true },
    { label: "Selección Profesional", active: false },
    { label: "Selecciona tratamiento", active: false },
  ];

  if (!isOpen) return <></>;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <DialogTitle className="text-heading-lg font-bold text-primary-900">
              Agendamiento
            </DialogTitle>
            <button 
              className="h-5 w-5 p-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
              onClick={onClose}
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 py-1 w-full">
            {navigationSteps.map((step, index) => (
              <div
                key={index}
                className={`inline-flex items-center relative rounded-3xl ${
                  !step.active ? "opacity-25" : ""
                }`}
              >
                <div className="inline-flex items-center gap-1">
                  <div
                    className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-shadow-800 text-xs text-right tracking-[0] leading-[18px] ${
                      step.active ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {step.label}
                  </div>
                  {index < navigationSteps.length - 1 && <ChevronRightIcon className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full items-start gap-6 pb-6 border-b border-[#dcdce2]">
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-primary-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)]">
                Información paciente
              </h2>

              <div className="flex flex-col items-start gap-1 w-full">
                <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]">
                  Fecha
                </label>

                <div className="flex items-center gap-3 w-full">
                  <div className="flex-1 p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                    <span className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)]">
                      Domingo, 27 noviembre
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 self-stretch">
                    <div className="p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                      <span className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)]">
                        Hora
                      </span>
                    </div>

                    <Separator
                      className="w-[7px] h-px"
                      orientation="horizontal"
                    />

                    <div className="p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                      <span className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)]">
                        Hora
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)]">
                Datos básicos
              </h3>

              <div className="flex items-start gap-2.5 w-full">
                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]">
                    Nombre
                  </label>
                  <Input className="w-full p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                </div>

                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]">
                    Apellidos
                  </label>
                  <Input className="w-full p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                </div>
              </div>

              <div className="flex items-start gap-2.5 w-full">
                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]">
                    Edad
                  </label>
                  <Input className="w-full p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                </div>

                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]">
                    Rut
                  </label>
                  <Input className="w-full p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)]">
                Información general paciente
              </h3>

              <div className="flex items-start gap-2.5 w-full">
                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]">
                    Teléfono
                  </label>
                  <Input className="w-full p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                </div>

                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]">
                    Ocupación
                  </label>
                  <Input className="w-full p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)]">
                Ficha Clínica
              </h3>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="send-clinical-record"
                  className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)]"
                >
                  Enviar ficha clinica paciente
                </label>
                <Checkbox id="send-clinical-record" className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 w-full">
              <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)]">
                Imágenes
              </h3>

              <Card className="w-full border-dashed border-[#d3e0d7] bg-[#ffffff]">
                <CardContent className="flex flex-col items-center gap-3 p-4">
                  <div className="flex w-11 h-11 items-center justify-center p-[9px] bg-primary-50 rounded-[50px]">
                    <UploadIcon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col items-center gap-1 w-full">
                    <div className="flex items-center justify-center gap-1 w-full">
                      <span className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-font-size)] leading-[var(--paragraph-p1-line-height)] tracking-[var(--paragraph-p1-letter-spacing)]">
                        Haga clic para cargar
                      </span>
                      <span className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-shadow-900 text-[length:var(--paragraph-p1-font-size)] leading-[var(--paragraph-p1-line-height)] tracking-[var(--paragraph-p1-letter-spacing)]">
                        o arrastra y suelta
                      </span>
                    </div>
                    <p className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-shadow-900 text-[length:var(--paragraph-p1-font-size)] text-center tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)]">
                      (Tamaño máximo de archivo: 25 MB)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex items-start justify-end w-full">
            <Button className="bg-primary-500 hover:bg-primary-600 shadow-md px-6 py-3 rounded-3xl transition-all duration-200" onClick={onContinue}>
              <span className="text-sm font-medium text-white">
                Continuar
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};