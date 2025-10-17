import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";

export const SymptomsSection = (): JSX.Element => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const leftColumnSymptoms = [
    "Cansancio o fatiga persistente",
    "Pesadez de cuerpo",
    "Estrés / ansiedad",
    "Irritabilidad",
    "Tristeza / ánimo bajo",
  ];

  const rightColumnSymptoms = [
    "Insomnio o sueño no reparador",
    "Sueños intensos / pesadillas",
    "Mala memoria o falta de concentración",
    "Palpitaciones",
    "Opresión de pecho",
  ];

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (checked) {
      setSelectedSymptoms(prev => [...prev, symptom]);
    } else {
      setSelectedSymptoms(prev => prev.filter(s => s !== symptom));
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="p-0 w-full">
            <div className="flex justify-center w-full">
              <h2 className="w-[522px] mt-[-1.00px] font-bold font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                Marca sólo los síntomas que hayas sentido de manera
                frecuente las últimas semanas
              </h2>
            </div>


            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto] mt-12">
              <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                {leftColumnSymptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <Checkbox 
                      className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                      checked={selectedSymptoms.includes(symptom)}
                      onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                    />
                    <label className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                      {symptom}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                {rightColumnSymptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <Checkbox 
                      className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                      checked={selectedSymptoms.includes(symptom)}
                      onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                    />
                    <label className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                      {symptom}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};