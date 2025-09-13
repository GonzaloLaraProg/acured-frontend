import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";

const frequencyOptions = [
  { value: "less-than-21", label: "Menos de 21 días" },
  { value: "21-35", label: "Entre 21 y 35 días (regular)" },
  { value: "more-than-35", label: "Más de 35 días" },
  { value: "irregular", label: "Cambia mucho (irregular)" },
];

const durationOptions = [
  { value: "less-than-3", label: "Menos de 3 días" },
  { value: "3-7", label: "Entre 3 y 7 días" },
  { value: "more-than-7", label: "Más de 7 días" },
];

const amountOptions = [
  { value: "light", label: "Escasa (manchas o flujo muy leve)" },
  { value: "moderate", label: "Moderada (flujo normal)" },
  { value: "heavy", label: "Abundante (cambios frecuentes, coágulos)" },
];

const colorOptions = [
  {
    value: "light-red",
    label: "Rojo claro (similar al agua con unas gotas de sangre)",
  },
  { value: "bright-red", label: "Rojo brillante/vivo (como sangre fresca)" },
  { value: "dark-red", label: "Rojo oscuro (como vino tinto)" },
  { value: "brown", label: "Marrón (como café)" },
  {
    value: "purple",
    label: "Morado o con coágulos oscuros (tonos violáceos o textura espesa)",
  },
];

export const MenstruationFormSection = (): JSX.Element => {
  const [menstruationFrequency, setMenstruationFrequency] = useState<string>("");
  const [menstruationDuration, setMenstruationDuration] = useState<string>("");
  const [bleedingAmount, setBleedingAmount] = useState<string>("");
  const [bleedingColor, setBleedingColor] = useState<string>("");

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Síntomas
      </h1>

      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-start gap-8 w-full">
          <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-6 relative flex-[0_0_auto] w-full">
                <h2 className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                  ¿Cada cuántos días ocurre tu menstruación?
                </h2>

                <div className="flex flex-col items-center gap-3 relative flex-[0_0_auto] w-full">
                  <RadioGroup
                    value={menstruationFrequency}
                    onValueChange={setMenstruationFrequency}
                    className="flex flex-col gap-3 w-full max-w-md"
                  >
                    {frequencyOptions.map((option) => (
                      <div key={option.value} className="flex items-center gap-4 justify-start">
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-4 h-4 bg-primary-50 rounded-[20px] border border-solid border-[#2e3d33]"
                        />
                        <Label
                          htmlFor={option.value}
                          className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-6 relative flex-[0_0_auto] w-full">
                <div className="flex gap-1 flex-col items-center relative flex-[0_0_auto]">
                  <h2 className="relative w-fit max-w-[450px] mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                    ¿Cuántos días dura normalmente tu menstruación?
                  </h2>
                  <p className="relative w-fit max-w-[450px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-regular-font-size)] text-center tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                    (desde el primer hasta el último día de sangrado)
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 relative flex-[0_0_auto] w-full">
                  <RadioGroup
                    value={menstruationDuration}
                    onValueChange={setMenstruationDuration}
                    className="flex flex-col gap-3 w-full max-w-md"
                  >
                    {durationOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center gap-4 justify-start w-full"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-4 h-4 bg-primary-50 rounded-[20px] border border-solid border-[#2e3d33]"
                        />
                        <Label
                          htmlFor={option.value}
                          className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-6 relative flex-[0_0_auto] w-full">
                <h2 className="relative w-fit max-w-[424px] mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  ¿Cómo es la cantidad de tu sangrado menstrual?
                </h2>

                <div className="flex flex-col items-center gap-3 relative flex-[0_0_auto] w-full">
                  <RadioGroup
                    value={bleedingAmount}
                    onValueChange={setBleedingAmount}
                    className="flex flex-col gap-3 w-full max-w-md"
                  >
                    {amountOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center gap-6 justify-start w-full"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-4 h-4 bg-primary-50 rounded-[20px] border border-solid border-[#2e3d33]"
                        />
                        <Label
                          htmlFor={option.value}
                          className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-6 relative flex-[0_0_auto] w-full">
                <h2 className="relative w-fit max-w-[480px] mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  ¿Cuál es el color habitual de tu sangrado menstrual?
                </h2>

                <div className="flex flex-col items-center gap-3 relative flex-[0_0_auto] w-full">
                  <RadioGroup
                    value={bleedingColor}
                    onValueChange={setBleedingColor}
                    className="flex flex-col gap-3 w-full max-w-md"
                  >
                    {colorOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center gap-6 justify-start w-full"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="w-4 h-4 bg-primary-50 rounded-[20px] border border-solid border-[#2e3d33]"
                        />
                        <Label
                          htmlFor={option.value}
                          className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};