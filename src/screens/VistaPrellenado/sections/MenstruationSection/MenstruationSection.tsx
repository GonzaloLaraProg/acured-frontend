import React, { useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";

interface MenstruationSectionProps {
  onAnswerChange?: (answer: string) => void;
  onBack?: () => void;
}

export const MenstruationSection = ({ onAnswerChange, onBack }: MenstruationSectionProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    onAnswerChange?.(value);
  };

  return (
    <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        

        <div className="flex flex-col items-center gap-8 w-full">
          <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="flex flex-col items-center gap-6 p-6">
              <div className="flex flex-col items-center gap-12">
                <h2 className="font-heading-h6 font-bold font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                  ¿Has menstruado alguna vez en tu vida?
                </h2>
              </div>

              <RadioGroup
                value={selectedOption}
                onValueChange={handleOptionChange}
                className="flex items-start gap-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <RadioGroupItem
                    value="si"
                    id="si"
                    className="w-4 h-4 bg-primary-50 border-[#2e3d33] data-[state=checked]:bg-primary-50"
                  />
                  <Label
                    htmlFor="si"
                    className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm cursor-pointer"
                  >
                    Si
                  </Label>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <RadioGroupItem
                    value="no"
                    id="no"
                    className="w-4 h-4 bg-primary-50 border-[#2e3d33] data-[state=checked]:bg-primary-50"
                  />
                  <Label
                    htmlFor="no"
                    className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
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