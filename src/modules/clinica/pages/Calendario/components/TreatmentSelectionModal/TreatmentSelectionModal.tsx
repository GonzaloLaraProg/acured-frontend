import {
  CalendarIcon,
  ChevronRightIcon,
  PlusIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Separator } from "../../../../../../components/ui/separator";

interface TreatmentSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  onContinue: () => void;
}

export const TreatmentSelectionModal = ({ 
  isOpen, 
  onClose, 
  onBack, 
  onContinue 
}: TreatmentSelectionModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  // Steps data for the progress indicator
  const steps = [
    { name: "Selección Servicio", active: false },
    { name: "Información paciente", active: false },
    { name: "Selección Profesional", active: false },
    { name: "Selecciona tratamiento", active: true },
  ];

  // Treatment options data
  const treatments = [
    { name: "Moxibustión" },
    { name: "Acupuntura" },
    { name: "Ventosas" },
    { name: "Electropuntura" },
    { name: "Fitoterapia" },
  ];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="max-w-[572px] w-full max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col gap-6 p-8 bg-neutralswhite rounded-lg border border-solid border-[#f1f4f2] shadow-shadow-base">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-heading-lg font-bold text-primary-900">
              Agendamiento
            </h2>
            <button 
              className="h-5 w-5 p-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
              onClick={onClose}
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 py-1 w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`inline-flex items-center ${
                  !step.active ? "opacity-25" : ""
                }`}
              >
                <div className="inline-flex items-center gap-4">
                  <div className={`text-xs text-shadow-800 tracking-[0] leading-[18px] whitespace-nowrap ${
                    step.active ? "font-semibold" : "font-medium"
                  }`}>
                    {step.name}
                  </div>
                  {index < steps.length - 1 && <ChevronRightIcon className="h-4 w-4" />}
                </div>
              </div>
            ))}
          </div>

          {/* Appointment summary */}
          <div className="flex flex-col pb-6 border-b border-[#dcdce2]">
            <Card className="border border-solid border-[#dcdce2] rounded">
              <CardContent className="p-3">
                <div className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-6 h-6 text-primary-500" />
                    <span className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                      Domingo, 27 noviembre
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2">
                      <span className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                        12:00 PM
                      </span>
                    </div>
                    <Separator orientation="vertical" className="h-px w-[7px]" />
                    <div className="p-2">
                      <span className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                        13:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-1.5">
                  <UserIcon className="w-6 h-6 text-primary-500" />
                  <span className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                    Profesional
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Treatment selection */}
            <div className="flex flex-col w-full gap-3 mt-6">
              <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Selecciona tratamiento
              </h3>
              <div className="flex flex-col w-full border border-gray-200 rounded-lg overflow-hidden">
                {treatments.map((treatment, index) => (
                  <div
                    key={`treatment-${index}`}
                    className={`flex items-center justify-between px-4 py-3 bg-[#ffffff] hover:bg-gray-50 transition-colors ${
                      index < treatments.length - 1
                        ? "border-b border-[#f3f3f5]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                        {treatment.name}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
                    >
                      <span className="font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] text-right tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                        Añadir
                      </span>
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-start justify-between w-full">
            <Button
              variant="outline"
              className="flex-col justify-center bg-neutralswhite shadow-shadow-xs px-4 py-2 rounded-3xl border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
              onClick={onBack}
            >
              <span className="font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] text-right tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                Atrás
              </span>
            </Button>
            <Button 
              className="flex-col justify-center bg-primary-800 shadow-shadow-md px-4 py-2 rounded-3xl hover:bg-primary-900 transition-all duration-200"
              onClick={onContinue}
            >
              <span className="font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] text-right tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                Continuar
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};