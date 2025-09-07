import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";

interface MenopauseSectionProps {
  onBack?: () => void;
  onNext?: () => void;
}

export const MenopauseSection = ({ onBack, onNext }: MenopauseSectionProps): JSX.Element => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [menstruationStatus, setMenstruationStatus] = useState<string>("");

  const radioOptions = [
    {
      id: "no-menstruation",
      value: "no-menstruation",
      label: "No menstrúo hace más de 12 meses",
    },
    {
      id: "irregular-menstruation",
      value: "irregular-menstruation",
      label: "Aún menstrúo pero de forma irregular",
    },
    {
      id: "regular-with-symptoms",
      value: "regular-with-symptoms",
      label: "Aún menstrúo regularmente pero tengo síntomas de menopausia",
    },
  ];

  const leftColumnSymptoms = [
    "Cansancio o fatiga extrema",
    "Bochornos / sensación súbita de calor",
    "Sudoración nocturna",
    "Sequedad vaginal",
    "Cambios en el estado de ánimo (irritabilidad, tristeza, ansiedad)",
  ];

  const rightColumnSymptoms = [
    "Insomnio o sueño ligero",
    "Palpitaciones o nerviosismo",
    "Mareos o zumbido en los oídos",
    "Dolor lumbar o debilidad en las piernas",
    "Ninguno",
  ];

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    if (symptom === "Ninguno") {
      if (checked) {
        setSelectedSymptoms(["Ninguno"]);
      } else {
        setSelectedSymptoms([]);
      }
    } else {
      if (checked) {
        setSelectedSymptoms(prev => prev.filter(s => s !== "Ninguno").concat(symptom));
      } else {
        setSelectedSymptoms(prev => prev.filter(s => s !== symptom));
      }
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Síntomas
      </h1>

      <div className="flex flex-col items-center gap-8 w-full">
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="flex flex-col w-[424px] items-center gap-12">
              <h2 className="text-center font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Sigues teniendo menstruaciones o ya han cesado por completo?
              </h2>
            </div>

            <div className="flex flex-col w-[298px] items-start gap-3">
              <RadioGroup 
                value={menstruationStatus}
                onValueChange={setMenstruationStatus}
                className="flex flex-col items-start gap-3 w-full"
              >
                {radioOptions.map((option) => (
                  <div key={option.id} className="flex items-center gap-6 w-full">
                    <RadioGroupItem
                      value={option.value}
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

        <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
        <CardContent className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto] p-0">
          <header className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
              ¿Has notado alguno de estos síntomas?
            </h2>
            <p className="relative w-[450px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-regular-font-size)] text-center tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
              (puedes marcar más de una casilla)
            </p>
          </header>
          <div className="flex w-[555px] items-start gap-8 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-6 relative flex-1 grow">
              {leftColumnSymptoms.map((symptom, index) => (
                <div
                  key={`left-symptom-${index}`}
                  className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <Checkbox 
                    id={`left-symptom-${index}`}
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                    checked={selectedSymptoms.includes(symptom)}
                    onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                  />
                  <Label 
                    htmlFor={`left-symptom-${index}`}
                    className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                  >
                    {symptom}
                  </Label>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-6 relative flex-1 grow">
              {rightColumnSymptoms.map((symptom, index) => (
                <div
                  key={`right-symptom-${index}`}
                  className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <Checkbox 
                    id={`right-symptom-${index}`}
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                    checked={selectedSymptoms.includes(symptom)}
                    onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                  />
                  <Label 
                    htmlFor={`right-symptom-${index}`}
                    className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                  >
                    {symptom}
                  </Label>
                </div>
              ))}
            </div>
          </div>
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