import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";

interface MenstruationAgeSectionProps {
  onDataChange?: (timing: string, reason: string) => void;
  onAutoNavigate?: () => void;
}

export const MenstruationAgeSection = ({ onDataChange, onAutoNavigate }: MenstruationAgeSectionProps): JSX.Element => {
  const [lastMenstruation, setLastMenstruation] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const lastMenstruationOptions = [
    { value: "less-than-1-month", label: "Hace menos de 1 mes" },
    { value: "1-3-months", label: "Entre 1 y 3 meses" },
    { value: "more-than-3-months", label: "Hace más de 3 meses" }
  ];

  const reasonOptions = [
    { value: "pregnancy", label: "Embarazo" },
    { value: "breastfeeding", label: "Lactancia" },
    { value: "menopause", label: "Menopausia" },
    { value: "other", label: "Otro" }
  ];

  const handleLastMenstruationChange = (value: string) => {
    setLastMenstruation(value);
    onDataChange?.(value, reason);
  };

  const handleReasonChange = (value: string) => {
    setReason(value);
    onDataChange?.(lastMenstruation, value);
  };

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Síntomas
      </h1>

      <div className="flex flex-col items-start gap-8 w-full">
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm border-0">
          <CardContent className="p-6">
            <div className="inline-flex flex-col items-center gap-8">
              {/* First Question */}
              <div className="flex flex-col items-start gap-1 w-full">
                <Label className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  ¿A qué edad fue tu primera menstruación?
                </Label>
                <Input
                  placeholder="(ej: 14 años)."
                  className="bg-primary-50 border-[#f1f4f2] font-text-text-sm-text-sm-font-normal font-[number:var(--text-text-sm-text-sm-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-sm-text-sm-font-normal-font-size)] tracking-[var(--text-text-sm-text-sm-font-normal-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-normal-line-height)] [font-style:var(--text-text-sm-text-sm-font-normal-font-style)]"
                />
              </div>

              {/* Second Question */}
              <div className="flex flex-col items-start gap-3 w-full">
                <Label className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  ¿Cuándo fue tu última menstruación?
                </Label>

                <div className="flex flex-col items-start gap-6 w-full">
                  <RadioGroup
                    value={lastMenstruation}
                    onValueChange={setLastMenstruation}
                    className="flex flex-col items-start gap-3 w-full"
                  >
                    {lastMenstruationOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center gap-6 w-full"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-4 h-4 bg-primary-50 border-[#2e3d33] data-[state=checked]:bg-primary-50"
                        />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {/* Follow-up Question */}
                  {lastMenstruation === "more-than-3-months" && (
                    <div className="flex flex-col items-start gap-3 w-full">
                      <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                        ¿Por qué?
                      </Label>

                      <RadioGroup
                        value={reason}
                        onValueChange={handleReasonChange}
                        className="flex flex-col items-start gap-3 w-full"
                      >
                        {reasonOptions.map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center gap-6 w-full"
                          >
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                              className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                            />
                            <Label
                              htmlFor={option.value}
                              className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};