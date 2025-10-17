import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { Checkbox } from "../../../../components/ui/checkbox";

const painOptions = [
  {
    id: "no-pain",
    label: "No duele",
  },
  {
    id: "mild-pain",
    label: "Dolor leve sin medicación",
  },
  {
    id: "moderate-pain",
    label: "Dolor moderado, requiere reposo o calor",
  },
  {
    id: "severe-pain",
    label: "Dolor fuerte, necesita analgésicos o impide trabajar",
  },
];

const temperatureOptions = [
  { id: "frio", label: "Frío" },
  { id: "calor", label: "Calor" },
  { id: "ninguno", label: "Ninguno" },
  { id: "cambia", label: "Cambia según el ciclo" },
];

const symptoms = [
  {
    id: "emotional-changes",
    label: "Cambios emocionales (irritabilidad, llanto, ansiedad)"
  },
  {
    id: "breast-abdominal-pain",
    label: "Dolor de mamas o abdomen"
  },
  {
    id: "bloating-retention",
    label: "Hinchazón o retención de líquidos"
  },
  {
    id: "headache",
    label: "Dolor de cabeza"
  },
  {
    id: "back-pain",
    label: "Dolor lumbar"
  },
  {
    id: "none",
    label: "Ninguno"
  }
];

export const MenstrualPainSection = (): JSX.Element => {
  const [selectedPain, setSelectedPain] = useState<string>("");
  const [selectedTemperature, setSelectedTemperature] = useState<string>("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleSymptomChange = (symptomId: string, checked: boolean) => {
    if (symptomId === "none") {
      if (checked) {
        setSelectedSymptoms(["none"]);
      } else {
        setSelectedSymptoms([]);
      }
    } else {
      if (checked) {
        setSelectedSymptoms(prev => prev.filter(id => id !== "none").concat(symptomId));
      } else {
        setSelectedSymptoms(prev => prev.filter(id => id !== symptomId));
      }
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
     

      <div className="flex flex-col items-center gap-12 w-full max-w-4xl mx-auto">
        {/* Pregunta 1: Dolor menstrual */}
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="flex flex-col w-[424px] items-center gap-12">
              <h2 className="text-center font-bold font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Sientes dolor menstrual?
              </h2>
            </div>

            <div className="flex flex-col w-[298px] items-start gap-3">
              <RadioGroup 
                value={selectedPain}
                onValueChange={setSelectedPain}
                className="flex flex-col items-start gap-3 w-full"
              >
                {painOptions.map((option) => (
                  <div key={option.id} className="flex items-center gap-6 w-full">
                    <RadioGroupItem
                      value={option.id}
                      id={option.id}
                      className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                    />
                    <Label
                      htmlFor={option.id}
                      className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Pregunta 2: Frío o calor */}
        <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col w-[424px] items-center gap-12 relative flex-[0_0_auto] p-0">
            <div className="ml-[-13.00px] mr-[-13.00px] inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-[450px] font-bold mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Sientes frío o calor durante la menstruación?
              </div>

              <div className="relative w-[450px] font-bold font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-regular-font-size)] text-center tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                (en el abdomen, el cuerpo o las extremidades).
              </div>
            </div>
          </CardContent>

          <RadioGroup 
            value={selectedTemperature}
            onValueChange={setSelectedTemperature}
            className="flex flex-col w-[298px] items-start gap-3 relative flex-[0_0_auto]"
          >
            {temperatureOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="relative w-4 h-4 bg-primary-50 rounded-[20px] border border-solid border-[#2e3d33]"
                />
                <Label
                  htmlFor={option.id}
                  className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Card>

        {/* Pregunta 3: Otros síntomas */}
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="flex flex-col items-center gap-12 w-full">
              <div className="flex flex-col items-center gap-1">
                <h2 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] font-bold text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  ¿Tienes otros síntomas previos o durante la menstruación?
                </h2>
                <p className="w-[450px] font-paragraph-p2-regular font-bold font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-regular-font-size)] text-center tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                  (Puedes marcar más de una opción)
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[298px] items-start gap-3">
              <div className="flex flex-col items-start gap-3 w-full">
                {symptoms.map((symptom) => (
                  <div key={symptom.id} className="flex items-center gap-6 w-full">
                    <Checkbox
                      id={symptom.id}
                      checked={selectedSymptoms.includes(symptom.id)}
                      onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean)}
                      className="w-4 h-4 bg-primary-50 rounded-full border border-solid border-[#3c5043]"
                    />
                    <Label
                      htmlFor={symptom.id}
                      className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                    >
                      {symptom.label}
                    </Label>
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