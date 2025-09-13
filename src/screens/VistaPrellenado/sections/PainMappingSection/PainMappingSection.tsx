import React from "react";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface PainMappingSectionProps {
  onImageClick?: () => void;
  onBack?: () => void;
}

export const PainMappingSection = ({ onImageClick, onBack }: PainMappingSectionProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <Card className="w-[780px] bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col items-center justify-center gap-8 p-6">
            <div className="flex flex-col gap-1 items-center">
              <h1 className="w-[388px] mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                Si presentas algún dolor, márcalo haciendo click donde
                corresponda
              </h1>
              <p className="w-[450px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-regular-font-size)] text-center tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                (puedes marcar más de uno)
              </p>
            </div>

            <div className="relative w-[476.65px] h-[468px]">
              <img
                className="absolute w-[477px] h-[445px] top-3 left-0"
                alt="Capa"
                src="public/personas.png"
                onClick={onImageClick}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="flex items-start justify-start relative self-stretch w-full flex-[0_0_auto]">
        <Button
          variant="outline"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs border-0 h-auto"
          onClick={onBack}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
            Atrás
          </span>
        </Button>
      </div>
    </div>
  );
};