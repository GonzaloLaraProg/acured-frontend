import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

interface ActionButtonsSectionProps {
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
  showNextButton?: boolean;
}

export const ActionButtonsSection = ({ onNext, onBack, currentStep, showNextButton = true }: ActionButtonsSectionProps): JSX.Element => {
  return (
    <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
      <Button
        variant="outline"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs border-0 h-auto"
        onClick={onBack}
        disabled={currentStep === 0}
      >
        <ChevronLeftIcon className="w-4 h-4" />
        <span className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
          Atrás
        </span>
      </Button>

      {showNextButton && (
        <Button 
          className="bg-primary-800 shadow-shadow-md inline-flex items-center justify-center gap-2 px-4 py-2 rounded-3xl hover:bg-primary-700 h-auto"
          onClick={onNext}
        >
          <span className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};
