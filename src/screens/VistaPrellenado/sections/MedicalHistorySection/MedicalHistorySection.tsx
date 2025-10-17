import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Textarea } from "../../../../components/ui/textarea";

interface MedicalHistorySectionProps {
  selectedGender?: string;
}

export const MedicalHistorySection = ({ selectedGender }: MedicalHistorySectionProps): JSX.Element => {
  const [selectedPacemaker, setSelectedPacemaker] = useState("");
  const [selectedProsthetics, setSelectedProsthetics] = useState("");
  const [selectedAnticoagulants, setSelectedAnticoagulants] = useState("");
  const [selectedPregnancy, setSelectedPregnancy] = useState("");
  const [hasAutoimmuneDisease, setHasAutoimmuneDisease] = useState(false);

  const medicalConditionsColumn1 = [
    "Prematurez",
    "Alergias",
    "Anemia",
    "Artritis/artrosis",
    "Fibromialgia",
    "Asma o EPOC",
    "Tuberculosis",
    "Cáncer",
    "Hipertensión",
  ];

  const medicalConditionsColumn2 = [
    "Hipotensión",
    "Desmayos",
    "Diabetes",
    "Hepatitis",
    "VIH/Sida",
    "Infecciones de transmisión sexual",
    "Hemofilia",
    "Trombosis",
    "Hipertiroidismo",
  ];

  const medicalConditionsColumn3 = [
    "Hipotiroidismo",
    "Cardiopatía coronaria",
    "Problemas de coagulación",
    "Enfermedad renal crónica",
    "Enfermedad autoinmune",
    "Tabaquismo",
  ];

  // Check if pregnancy question should be shown based on gender
  const shouldShowPregnancyQuestion = () => {
    return selectedGender && [
      "femenino",
      "no-binario", 
      "transmasculino",
      "otro",
      "prefiero-no-informar"
    ].includes(selectedGender);
  };

  return (
    <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Cuéntanos más de ti
      </div>

      <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
        <CardContent className="flex flex-col items-center gap-6 p-6">
          <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto]">
              <div className="justify-center flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  ¿Tomas algún medicamento regularmente? ¿Cuál?
                </Label>
              </div>

              <Textarea
                className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2] min-h-[40px]"
                placeholder=""
              />
            </div>

            <div className="flex flex-col w-[282px] items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                <Label className="relative w-[214px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-700 text-sm tracking-[0] leading-[normal]">
                  ¿Tienes alguna cirugía? ¿Cuál?
                </Label>
              </div>

              <Textarea
                className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2] min-h-[40px]"
                placeholder=""
              />
            </div>

            <div className="flex flex-col w-[282px] items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                <Label className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  ¿Eres usuario de marcapasos?
                </Label>
              </div>

              <RadioGroup
                value={selectedPacemaker}
                onValueChange={setSelectedPacemaker}
                className="inline-flex items-start gap-6 relative flex-[0_0_auto]"
              >
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem
                    value="si"
                    id="pacemaker-si"
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                  />
                  <Label
                    htmlFor="pacemaker-si"
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                  >
                    Si
                  </Label>
                </div>

                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem
                    value="no"
                    id="pacemaker-no"
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                  />
                  <Label
                    htmlFor="pacemaker-no"
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col w-[282px] items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                <Label className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  ¿Tienes alguna prótesis o placa metálica?
                </Label>
              </div>

              <RadioGroup
                value={selectedProsthetics}
                onValueChange={setSelectedProsthetics}
                className="inline-flex justify-center gap-6 items-start relative flex-[0_0_auto]"
              >
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem
                    value="si"
                    id="prosthetics-si"
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                  />
                  <Label
                    htmlFor="prosthetics-si"
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                  >
                    Si
                  </Label>
                </div>

                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem
                    value="no"
                    id="prosthetics-no"
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                  />
                  <Label
                    htmlFor="prosthetics-no"
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col w-[282px] items-center justify-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                <Label className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  ¿Tomas anticoagulantes o aspirina?
                </Label>
              </div>

              <RadioGroup
                value={selectedAnticoagulants}
                onValueChange={setSelectedAnticoagulants}
                className="inline-flex items-start gap-6 relative flex-[0_0_auto]"
              >
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem
                    value="si"
                    id="anticoagulants-si"
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                  />
                  <Label
                    htmlFor="anticoagulants-si"
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                  >
                    Si
                  </Label>
                </div>

                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem
                    value="no"
                    id="anticoagulants-no"
                    className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                  />
                  <Label
                    htmlFor="anticoagulants-no"
                    className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {shouldShowPregnancyQuestion() && (
              <div className="inline-flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto]">
                <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    ¿Embarazo actual o sospecha de embarazo?
                  </Label>
                </div>

                <RadioGroup
                  value={selectedPregnancy}
                  onValueChange={setSelectedPregnancy}
                  className="inline-flex items-start gap-6 relative flex-[0_0_auto]"
                >
                  <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                    <RadioGroupItem
                      value="si"
                      id="pregnancy-si"
                      className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                    />
                    <Label
                      htmlFor="pregnancy-si"
                      className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                    >
                      Si
                    </Label>
                  </div>

                  <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                    <RadioGroupItem
                      value="no"
                      id="pregnancy-no"
                      className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                    />
                    <Label
                      htmlFor="pregnancy-no"
                      className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-8 self-stretch w-full items-start relative flex-[0_0_auto]">
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="inline-flex flex-col items-center gap-12 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-bold text-primary-900 text-xl tracking-[0] leading-5 whitespace-nowrap">
                Antecedentes médicos
              </div>
            </div>

            <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                {medicalConditionsColumn1.map((condition, index) => (
                  <div
                    key={`column1-${index}`}
                    className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <Checkbox className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" />
                    <Label className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]">
                      {condition}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                {medicalConditionsColumn2.map((condition, index) => (
                  <div
                    key={`column2-${index}`}
                    className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <Checkbox className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" />
                    <Label className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]">
                      {condition}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                {medicalConditionsColumn3
                  .slice(0, 4)
                  .map((condition, index) => (
                    <div
                      key={`column3-${index}`}
                      className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                    >
                      <Checkbox className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" />
                      <Label className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]">
                        {condition}
                      </Label>
                    </div>
                  ))}

                <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <Checkbox 
                      className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]"
                      checked={hasAutoimmuneDisease}
                      onCheckedChange={(checked) => setHasAutoimmuneDisease(checked as boolean)}
                    />
                    <Label className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]">
                      Enfermedad autoinmune
                    </Label>
                  </div>

                  {hasAutoimmuneDisease && (
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <Label className="relative w-[214px] mt-[-1.00px] mr-[-28.67px] font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                          ¿Cuál?
                        </Label>
                      </div>

                      <Textarea
                        className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2] min-h-[40px]"
                        placeholder=""
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <Checkbox className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" />
                  <Label className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]">
                    Tabaquismo
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};