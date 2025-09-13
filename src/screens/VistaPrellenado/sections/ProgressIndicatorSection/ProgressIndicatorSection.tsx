import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ProgressIndicatorSectionProps {
  currentStep: number;
}

export const ProgressIndicatorSection = ({ currentStep }: ProgressIndicatorSectionProps): JSX.Element => {
  const steps = [
    { label: "Información General" },
    { label: "Motivo de consulta" },
    { label: "Antecedentes médicos" },
    { label: "Síntomas" },
    { label: "Exámenes" },
    { label: "Confirmación" },
  ];

  // Para los pasos 1 y 2, mantener el progreso en el paso 2
  const getProgressStep = () => {
    if (currentStep === 1 || currentStep === 2) {
      return 2;
    } else if (currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 || currentStep === 7 || currentStep === 8 || currentStep === 9 || currentStep === 10 || currentStep === 11 || currentStep === 12 || currentStep === 13) {
      return 4; // Keep progress on "Síntomas" for steps 3-10
    } else if (currentStep === 14) {
      return 5; // "Exámenes" step
    } else if (currentStep === 15) {
      return 6; // "Confirmación" step
    }
    return currentStep + 1;
  };

  const progressValue = (getProgressStep() / steps.length) * 100;

  // Para los pasos 1 y 2, mantener "Motivo de consulta" resaltado pero cambiar el texto en el paso 2
  const getStepOpacity = (index: number) => {
    if (currentStep === 1 || currentStep === 2) {
      return index === 1 ? "opacity-100" : "opacity-25";
    } else if (currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 || currentStep === 7 || currentStep === 8 || currentStep === 9 || currentStep === 10 || currentStep === 11 || currentStep === 12 || currentStep === 13) {
      return index === 3 ? "opacity-100" : "opacity-25"; // Highlight "Síntomas" for steps 3-10
    } else if (currentStep === 14) {
      return index === 4 ? "opacity-100" : "opacity-25"; // Highlight "Exámenes" for step 14
    } else if (currentStep === 15) {
      return index === 5 ? "opacity-100" : "opacity-25"; // Highlight "Confirmación" for step 15
    }
    return index === currentStep ? "opacity-100" : "opacity-25";
  };

  // Cambiar el texto del paso según el currentStep
  const getStepLabel = (index: number, originalLabel: string) => {
    return originalLabel;
  };

  return (
    <section className="flex flex-col items-center gap-6 w-full">
      <nav className="flex items-center gap-4 px-0 py-1">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center rounded-3xl ${getStepOpacity(index)}`}
          >
            <div className="flex items-center gap-1">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-shadow-800 text-xs tracking-[0] leading-[normal] text-right whitespace-nowrap">
                {getStepLabel(index, step.label)}
              </span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        ))}
      </nav>

      <div className="w-[700px] h-2 bg-neutralswhite overflow-hidden shadow-[inset_0px_1px_2px_#00000026,inset_-1px_0px_2px_#0000001a] rounded-[100px] relative">
        <div
          className="h-2 bg-primary-800 rounded-[100px]"
          style={{ width: `${progressValue}%` }}
        />
      </div>
    </section>
  );
};