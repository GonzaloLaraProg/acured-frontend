import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";

const breadcrumbItems = [
  { label: "Información General", active: false },
  { label: "Motivo de consulta", active: false },
  { label: "Antecedentes médicos", active: false },
  { label: "Síntomas", active: true },
  { label: "Exámenes", active: false },
  { label: "Confirmación", active: false },
];

interface DetailedPainMappingSectionProps {
  onBack?: () => void;
  onMarkMorePains?: () => void;
  onNext?: () => void;
}

export const DetailedPainMappingSection = ({ onBack, onMarkMorePains, onNext }: DetailedPainMappingSectionProps): JSX.Element => {
  const [painIntensity, setPainIntensity] = useState(0);

  return (
    <div className="min-h-screen bg-primary-50 relative">
      <div className="flex w-full items-start justify-center bg-primary-50">
        <div className="flex flex-col w-[780px] items-center gap-8 pt-24 pb-16 px-16">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex items-center gap-4 px-0 py-1">
              {breadcrumbItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${item.active ? "" : "opacity-25"}`}
                >
                  <div className="flex items-center gap-1">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-shadow-800 text-xs text-right tracking-[0] leading-[18px] whitespace-nowrap">
                      {item.label}
                    </div>
                    <ChevronRightIcon className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[700px] h-2 bg-neutralswhite overflow-hidden shadow-[inset_0px_1px_2px_#00000026,inset_-1px_0px_2px_#0000001a] rounded-[100px]">
              <Progress value={75} className="h-full bg-primary-800" />
            </div>
          </div>

          <Card className="w-[780px] bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="flex flex-col items-center justify-center gap-8 p-6">
              <div className="w-[388px] mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                Si presentas algún dolor, márcalo haciendo click donde
                corresponda
              </div>

              <div className="flex justify-center items-center">
                <img 
                  src="public/cabeza.png" 
                  alt="Diagrama del cuerpo humano para marcar dolor"
                  className="max-w-[391px] h-auto"
                />
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[20px] leading-[28px] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] whitespace-nowrap text-right [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                  Intensidad del dolor
                </div>


                <div className="flex items-center gap-2.5">
                  <div className="w-fit font-heading-h6 font- bold font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                    0
                  </div>

                  <div className="relative w-[343px] h-11 flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={painIntensity}
                      onChange={(e) => setPainIntensity(Number(e.target.value))}
                      className="w-full h-1 bg-primary-200 rounded-sm appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #2b705aff 0%, #2b705aff ${(painIntensity / 10) * 100}%, var(--primary-200) ${(painIntensity / 10) * 100}%, var(--primary-200) 100%)`
                      }}
                    />
                    <div 
                      className="absolute -top-3 [font-family:'Inter',Helvetica] font-semibold text-black text-[14.1px] tracking-[0] leading-[18.8px] whitespace-nowrap pointer-events-none transition-all duration-200 ease-out"
                      style={{
                        left: `${(painIntensity / 10) * 100}%`,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      {painIntensity}
                    </div>
                  </div>

                  <div className="w-fit font-heading-h6 font-bold font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                    10
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="h-auto flex items-center justify-center gap-2 px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs"
                onClick={onMarkMorePains}
              >
                <div className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[12px] leading-[12px] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] whitespace-nowrap text-right [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                  Marcar más dolores
                </div>

                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

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
        </div>
      </div>
    </div>
  );
};