import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ProgressIndicatorSectionProps {
  currentStep: number;
}

export const ProgressIndicatorSection = ({ currentStep }: ProgressIndicatorSectionProps): JSX.Element => {
  const steps = [
    { label: "Información General" },   // 1
    { label: "Motivo de consulta" },    // 2
    { label: "Antecedentes médicos" },  // 3
    { label: "Síntomas" },              // 4
    { label: "Exámenes" },              // 5
    { label: "Confirmación" },          // 6
  ];

  const getProgressStep = () => {
    if (currentStep === 1 || currentStep === 2) {
      return 2; // Motivo de consulta
    } else if (currentStep === 3) {
      return 3; // Antecedentes médicos
    } else if (currentStep >= 4 && currentStep <= 12) {
      return 4; // Síntomas
    } else if (currentStep === 13) {
      return 5; // Exámenes
    } else if (currentStep === 14) {
      return 6; // Confirmación
    }
    return currentStep + 1;
  };

  const progressValue = (getProgressStep() / steps.length) * 100;

  const getStepOpacity = (index: number) => {
    if (currentStep === 1 || currentStep === 2) {
      return index === 1 ? "opacity-100" : "opacity-25";
    } else if (currentStep === 3) {
      return index === 2 ? "opacity-100" : "opacity-25"; // Antecedentes médicos
    } else if (currentStep >= 4 && currentStep <= 12) {
      return index === 3 ? "opacity-100" : "opacity-25"; // Síntomas
    } else if (currentStep === 13) {
      return index === 4 ? "opacity-100" : "opacity-25"; // Exámenes
    } else if (currentStep === 14) {
      return index === 5 ? "opacity-100" : "opacity-25"; // Confirmación
    }
    return index === currentStep ? "opacity-100" : "opacity-25";
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
                {step.label}
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
