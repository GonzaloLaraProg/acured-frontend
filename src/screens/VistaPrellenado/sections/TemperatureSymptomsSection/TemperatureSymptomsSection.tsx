import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";

interface TemperatureSymptomsSectionProps {
  onAutoAdvance?: () => void;
  onAnswerChange?: (answer: string) => void;
}

export const TemperatureSymptomsSection = ({ onAutoAdvance, onAnswerChange }: TemperatureSymptomsSectionProps): JSX.Element => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const leftColumnSymptoms = [
    "Sudor espontáneo o excesivo",
    "Sudoración nocturna",
    "Sensación de frío constante",
    "Sensación de calor constante",
  ];

  const rightColumnSymptoms = [
    "Manos frías",
    "Pies fríos",
    "Pérdida de peso sin causa aparente",
    "Aumento de peso considerable",
  ];

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setSelectedSymptoms(prev => [...prev, symptom]);
    } else {
      setSelectedSymptoms(prev => prev.filter(s => s !== symptom));
    }
  };

  const handleAnswerChange = (value: string) => {
    setSelectedAnswer(value);
    onAnswerChange?.(value);
    if (value === "no" && onAutoAdvance) {
      // Auto advance when "No" is selected
      setTimeout(() => {
        onAutoAdvance();
      }, 500); // Small delay for better UX
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {/* Question Card */}
        <div className="w-full">
          <Card className="bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="p-6 flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-12">
                <h2 className="w-[600px] font-bold font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  ¿Has experimentado cambios constantes de temperatura,
                  sudoración o peso en las últimas semanas?
                </h2>
              </div>

              <RadioGroup 
                value={selectedAnswer}
                onValueChange={handleAnswerChange}
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="si"
                    id="si"
                    className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                  />
                  <Label
                    htmlFor="si"
                    className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                  >
                    Si
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="no"
                    id="no"
                    className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                  />
                  <Label
                    htmlFor="no"
                    className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>

              {selectedAnswer === "si" && (
                <div className="flex gap-3 w-full">
                  <div className="flex-1 flex flex-col gap-6">
                    {leftColumnSymptoms.map((symptom, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Checkbox
                          id={`left-${index}`}
                          className="w-4 h-4 bg-primary-50 border-[#3c5043] rounded"
                          checked={selectedSymptoms.includes(symptom)}
                          onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                        />
                        <Label
                          htmlFor={`left-${index}`}
                          className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm cursor-pointer"
                        >
                          {symptom}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 flex flex-col gap-6">
                    {rightColumnSymptoms.map((symptom, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Checkbox
                          id={`right-${index}`}
                          className="w-4 h-4 bg-primary-50 border-[#3c5043] rounded"
                          checked={selectedSymptoms.includes(symptom)}
                          onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                        />
                        <Label
                          htmlFor={`right-${index}`}
                          className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm cursor-pointer"
                        >
                          {symptom}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};