import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";

export const AIQuestionSection = (): JSX.Element => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Pregunta de seguimiento
      </h1>

      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {/* Question Card */}
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm border-0">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="flex flex-col items-center gap-12">
              <h2 className="w-[338px] text-center font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] mt-[-1.00px]">
                Pregunta IA
              </h2>
            </div>

            <div className="flex flex-col w-[282px] items-center justify-center gap-1">
              <RadioGroup
                value={selectedAnswer}
                onValueChange={setSelectedAnswer}
                className="flex items-start gap-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <RadioGroupItem
                    value="si"
                    id="si"
                    className="w-4 h-4 bg-primary-50 border-[#3c5043] data-[state=checked]:bg-primary-800 data-[state=checked]:border-primary-800"
                  />
                  <Label
                    htmlFor="si"
                    className="text-sm font-medium text-primary-900 [font-family:'Inter',Helvetica] mt-[-1.00px] cursor-pointer"
                  >
                    Si
                  </Label>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <RadioGroupItem
                    value="no"
                    id="no"
                    className="w-4 h-4 bg-primary-50 border-[#3c5043] data-[state=checked]:bg-primary-800 data-[state=checked]:border-primary-800"
                  />
                  <Label
                    htmlFor="no"
                    className="text-sm font-medium text-primary-900 [font-family:'Inter',Helvetica] mt-[-1.00px] cursor-pointer"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};