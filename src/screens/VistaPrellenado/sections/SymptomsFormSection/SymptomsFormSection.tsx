import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

const respiratorySymptoms = [
  { id: "tos", label: "Tos" },
  { id: "flema", label: "Flema" },
  { id: "falta-aire", label: "Falta de aire" },
  { id: "rinitis", label: "Rinitis" },
  { id: "congestion", label: "Congestión nasal" },
  { id: "sinusitis", label: "Sinusitis" },
  { id: "alergia", label: "Alergia estacional" },
];

const digestiveSymptoms = [
  [
    { id: "nauseas", label: "Náuseas" },
    { id: "vomitos", label: "Vómitos" },
    { id: "acidez", label: "Acidez o reflujo" },
    { id: "dolor-abdominal", label: "Dolor abdominal" },
  ],
  [
    { id: "hinchazon", label: "Hinchazón abdominal" },
    { id: "diarrea", label: "Diarrea, heces blandas o disgregadas" },
    { id: "estrenimiento", label: "Estreñimiento o heces secas" },
  ],
  [
    { id: "sangrado", label: "Sangrado anal o hemorroides" },
    { id: "gases", label: "Gases o flatulencia" },
  ],
];

const urinarySymptoms = [
  [
    { id: "frecuencia", label: "Orinar con mucha frecuencia" },
    { id: "concentrada", label: "Orina muy concentrada" },
    { id: "dolor-orinar", label: "Dolor o ardor al orinar" },
    { id: "infecciones", label: "Infecciones urinarias recurrentes" },
  ],
  [
    { id: "incontinencia", label: "Incontinencia urinaria" },
    { id: "calculos", label: "Cálculos renales" },
    { id: "picazon", label: "Picazón genital" },
    { id: "secrecion", label: "Secreción anormal" },
  ],
  [
    { id: "sequedad", label: "Sequedad genital" },
    { id: "disminucion-libido", label: "Disminución de la libido" },
    { id: "aumento-libido", label: "Aumento de la libido" },
    { id: "problemas-sexuales", label: "Problemas sexuales" },
  ],
];

export const SymptomsFormSection = (): JSX.Element => {
  const [respiratoryAnswer, setRespiratoryAnswer] = useState("");
  const [digestiveAnswer, setDigestiveAnswer] = useState("");
  const [urinaryAnswer, setUrinaryAnswer] = useState("");
  const [respiratoryOther, setRespiratoryOther] = useState(false);
  const [digestiveOther, setDigestiveOther] = useState(false);
  const [urinaryOther, setUrinaryOther] = useState(false);

  return (
    <section className="flex flex-col items-center gap-8 w-full">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Síntomas
      </h1>

      <div className="flex flex-col items-start gap-8 w-full">
        <Card className="bg-white rounded-lg shadow-shadow-sm w-full">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="flex flex-col items-center gap-12">
              <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Tienes problemas respiratorios frecuentes?
              </h3>
            </div>

            <RadioGroup
              value={respiratoryAnswer}
              onValueChange={setRespiratoryAnswer}
              className="flex items-start gap-6"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="si"
                  id="respiratory-si"
                  className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                />
                <Label
                  htmlFor="respiratory-si"
                  className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                >
                  Si
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="no"
                  id="respiratory-no"
                  className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                />
                <Label
                  htmlFor="respiratory-no"
                  className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>

            {respiratoryAnswer === "si" && (
              <div className="flex items-start gap-8">
                <div className="flex flex-col items-start gap-6">
                  {respiratorySymptoms.slice(0, 3).map((symptom) => (
                    <div key={symptom.id} className="flex items-center gap-4">
                      <Checkbox
                        id={symptom.id}
                        className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                      />
                      <Label
                        htmlFor={symptom.id}
                        className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                      >
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-6">
                  {respiratorySymptoms.slice(3, 6).map((symptom) => (
                    <div key={symptom.id} className="flex items-center gap-4">
                      <Checkbox
                        id={symptom.id}
                        className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                      />
                      <Label
                        htmlFor={symptom.id}
                        className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                      >
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center gap-4">
                    <Checkbox
                      id="alergia-estacional"
                      className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                    />
                    <Label
                      htmlFor="alergia-estacional"
                      className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                    >
                      Alergia estacional
                    </Label>
                  </div>

                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex items-start gap-4 w-full">
                      <Checkbox
                        id="respiratory-otro"
                        checked={respiratoryOther}
                        onCheckedChange={setRespiratoryOther}
                        className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                      />
                      <Label 
                        htmlFor="respiratory-otro"
                        className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm cursor-pointer"
                      >
                        Otro
                      </Label>
                    </div>
                    {respiratoryOther && (
                      <div className="flex flex-col items-start gap-2 w-full">
                        <Input className="w-full p-2 bg-primary-50 border border-[#f1f4f2] rounded" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white rounded-lg shadow-shadow-sm w-full">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="flex flex-col items-center gap-12">
              <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Tienes problemas digestivos frecuentes?
              </h3>
            </div>

            <RadioGroup
              value={digestiveAnswer}
              onValueChange={setDigestiveAnswer}
              className="flex items-start gap-6"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="si"
                  id="digestive-si"
                  className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                />
                <Label
                  htmlFor="digestive-si"
                  className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                >
                  Si
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="no"
                  id="digestive-no"
                  className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                />
                <Label
                  htmlFor="digestive-no"
                  className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>

            {digestiveAnswer === "si" && (
              <div className="w-full flex items-start gap-8">
                {digestiveSymptoms.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className="flex flex-col items-start gap-6 flex-1"
                  >
                    {column.map((symptom) => (
                      <div
                        key={symptom.id}
                        className="flex items-center gap-4 w-full"
                      >
                        <Checkbox
                          id={symptom.id}
                          className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                        />
                        <Label
                          htmlFor={symptom.id}
                          className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                        >
                          {symptom.label}
                        </Label>
                      </div>
                    ))}
                    {columnIndex === 2 && (
                      <div className="flex flex-col items-start gap-2 w-full">
                        <div className="flex items-start gap-4 w-full">
                          <Checkbox
                            id="digestive-otro"
                            checked={digestiveOther}
                            onCheckedChange={setDigestiveOther}
                            className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                          />
                          <Label 
                            htmlFor="digestive-otro"
                            className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm cursor-pointer"
                          >
                            Otro
                          </Label>
                        </div>
                        {digestiveOther && (
                          <div className="flex flex-col items-start gap-2 w-full">
                            <Input className="w-full p-2 bg-primary-50 border border-[#f1f4f2] rounded" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-white rounded-lg shadow-shadow-sm w-full">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <div className="flex flex-col items-center gap-12">
              <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                ¿Tienes problemas urinarios o genitales de manera frecuente?
              </h3>
            </div>

            <RadioGroup
              value={urinaryAnswer}
              onValueChange={setUrinaryAnswer}
              className="flex items-start gap-6"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="si"
                  id="urinary-si"
                  className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                />
                <Label
                  htmlFor="urinary-si"
                  className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                >
                  Si
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="no"
                  id="urinary-no"
                  className="w-4 h-4 bg-primary-50 border-[#2e3d33]"
                />
                <Label
                  htmlFor="urinary-no"
                  className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                >
                  No
                </Label>
              </div>
            </RadioGroup>

            {urinaryAnswer === "si" && (
              <div className="flex items-start gap-8 w-full">
                {urinarySymptoms.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className="flex flex-col items-start gap-6 flex-1"
                  >
                    {column.map((symptom) => (
                      <div
                        key={symptom.id}
                        className="flex items-center gap-4 w-full"
                      >
                        <Checkbox
                          id={symptom.id}
                          className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                        />
                        <Label
                          htmlFor={symptom.id}
                          className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm"
                        >
                          {symptom.label}
                        </Label>
                      </div>
                    ))}
                    {columnIndex === 2 && (
                      <div className="flex flex-col items-start gap-2 w-full">
                        <div className="flex items-start gap-4 w-full">
                          <Checkbox
                            id="urinary-otro"
                            checked={urinaryOther}
                            onCheckedChange={setUrinaryOther}
                            className="w-4 h-4 bg-primary-50 border-[#3c5043]"
                          />
                          <Label 
                            htmlFor="urinary-otro"
                            className="flex-1 [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm cursor-pointer"
                          >
                            Otro
                          </Label>
                        </div>
                        {urinaryOther && (
                          <div className="flex flex-col items-start gap-2 w-full">
                            <Input className="w-full p-2 bg-primary-50 border border-[#f1f4f2] rounded" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};