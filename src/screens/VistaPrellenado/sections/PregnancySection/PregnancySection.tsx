import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { Textarea } from "../../../../components/ui/textarea";

const pregnancyOptions = [
  { value: "first", label: "Menos de 12 semanas (primer trimestre)" },
  { value: "second", label: "Entre 13 y 27 semanas (segundo trimestre)" },
  { value: "third", label: "28 semanas o más (tercer trimestre)" },
  { value: "unknown", label: "No lo sé" },
];

interface PregnancySectionProps {
  onBack?: () => void;
  onNext?: () => void;
}

export const PregnancySection = ({ onBack, onNext }: PregnancySectionProps): JSX.Element => {
  const [selectedWeeks, setSelectedWeeks] = useState<string>("");

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
     

      <div className="flex flex-col items-center gap-8 w-full">
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="p-6 flex flex-col items-center gap-6">
            <div className="w-[424px] flex flex-col items-center gap-12">
              <h2 className="font-heading-h6 font-bold font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Cuántas semanas de embarazo tienes?
              </h2>
            </div>

            <div className="w-[350px]">
              <RadioGroup
                value={selectedWeeks}
                onValueChange={setSelectedWeeks}
                className="flex flex-col gap-3"
              >
                {pregnancyOptions.map((option) => (
                  <div key={option.value} className="flex items-center gap-6">
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                    />
                    <Label
                      htmlFor={option.value}
                      className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm flex-1 cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="p-6 flex flex-col items-center gap-6">
            <div className="w-[424px] flex flex-col items-center gap-12">
              <h2 className="font-heading-h6 font-bold font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Has tenido alguna complicación?
              </h2>
            </div>

            <Textarea className="p-2 bg-primary-50 rounded border border-[#f1f4f2] min-h-[40px] w-full" />
          </CardContent>
        </Card>
      </div>

      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
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

        <Button 
          className="bg-primary-800 shadow-shadow-md inline-flex items-center justify-center gap-2 px-4 py-2 rounded-3xl hover:bg-primary-700 h-auto"
          onClick={onNext}
        >
          <span className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};