import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

const headFaceSymptoms = [
  { id: "headache", label: "Dolor de cabeza" },
  { id: "dizziness", label: "Mareos o vértigo" },
  { id: "bruxism", label: "Bruxismo (apretar dientes)" },
  { id: "vision", label: "Problemas de visión o dolor de ojos" }
];

const headFaceSymptomsColumn2 = [
  { id: "red-eyes", label: "Ojos rojos o secos" },
  { id: "tics", label: "Tics" },
  { id: "throat", label: "Dolor de garganta" },
  { id: "dry-mouth", label: "Boca seca o sed excesiva" },
  { id: "ear-problems", label: "Pitido, zumbido o dolor de oídos" }
];

const headFaceSymptomsColumn3 = [
  { id: "hearing", label: "Problemas de audición" },
  { id: "lip-injuries", label: "Lesiones en labios o lengua" },
  { id: "bleeding", label: "Sangrado de nariz o encías" }
];

const trunkExtremitiesSymptoms = [
  { id: "joint-pain", label: "Dolor articular o rigidez" },
  { id: "back-pain", label: "Dolor lumbar" },
  { id: "knee-pain", label: "Dolor o debilidad de rodillas" },
  { id: "cramps", label: "Calambres" }
];

const trunkExtremitiesSymptomsColumn2 = [
  { id: "muscle-weakness", label: "Debilidad muscular" },
  { id: "tremors", label: "Temblores" },
  { id: "tingling", label: "Hormigueos" },
  { id: "varicose", label: "Várices visibles" }
];

const trunkExtremitiesSymptomsColumn3 = [
  { id: "swelling", label: "Hinchazón o pesadez de extremidades" },
  { id: "fluid-retention", label: "Retención de líquidos" }
];

const skinHairNailsSymptoms = [
  { id: "dry-skin", label: "Piel seca" },
  { id: "itching", label: "Picazón" },
  { id: "acne", label: "Acné" }
];

const skinHairNailsSymptomsColumn2 = [
  { id: "dermatitis", label: "Dermatitis" },
  { id: "psoriasis", label: "Psoriasis" },
  { id: "rosacea", label: "Rosácea" }
];

const skinHairNailsSymptomsColumn3 = [
  { id: "hair-loss", label: "Caída de cabello" },
  { id: "brittle-nails", label: "Uñas frágiles" }
];

export const DetailedSymptomsSection = (): JSX.Element => {
  const [headFaceAnswer, setHeadFaceAnswer] = useState("");
  const [trunkExtremitiesAnswer, setTrunkExtremitiesAnswer] = useState("");
  const [skinHairNailsAnswer, setSkinHairNailsAnswer] = useState("");
  const [selectedHeadFaceSymptoms, setSelectedHeadFaceSymptoms] = useState<string[]>([]);
  const [selectedTrunkExtremitiesSymptoms, setSelectedTrunkExtremitiesSymptoms] = useState<string[]>([]);
  const [selectedSkinHairNailsSymptoms, setSelectedSkinHairNailsSymptoms] = useState<string[]>([]);
  const [headFaceOther, setHeadFaceOther] = useState(false);
  const [trunkExtremitiesOther, setTrunkExtremitiesOther] = useState(false);
  const [skinHairNailsOther, setSkinHairNailsOther] = useState(false);

  const handleSymptomChange = (symptomId: string, checked: boolean, category: string) => {
    if (category === "headFace") {
      setSelectedHeadFaceSymptoms(prev =>
        checked ? [...prev, symptomId] : prev.filter(id => id !== symptomId)
      );
    } else if (category === "trunkExtremities") {
      setSelectedTrunkExtremitiesSymptoms(prev =>
        checked ? [...prev, symptomId] : prev.filter(id => id !== symptomId)
      );
    } else if (category === "skinHairNails") {
      setSelectedSkinHairNailsSymptoms(prev =>
        checked ? [...prev, symptomId] : prev.filter(id => id !== symptomId)
      );
    }
  };

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Síntomas
      </h1>

      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {/* Sección 1: Cabeza o rostro */}
        <Card className="items-center gap-6 p-6 bg-white rounded-lg shadow-shadow-sm flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <CardContent className="p-0 w-full">
            <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto] mb-6">
              <h2 className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                ¿Tienes molestias frecuentes en la cabeza o rostro?
              </h2>
              <RadioGroup value={headFaceAnswer} onValueChange={setHeadFaceAnswer} className="flex gap-6 justify-center">
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem value="yes" id="head-face-yes" className="w-4 h-4 bg-primary-50 border-[#2e3d33] data-[state=checked]:bg-primary-50" />
                  <Label htmlFor="head-face-yes" className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                    Sí
                  </Label>
                </div>
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem value="no" id="head-face-no" className="w-4 h-4 bg-primary-50 border-[#2e3d33]" />
                  <Label htmlFor="head-face-no" className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
            {headFaceAnswer === "yes" && (
              <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  {headFaceSymptoms.map((symptom) => (
                    <div key={symptom.id} className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedHeadFaceSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "headFace")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  {headFaceSymptomsColumn2.map((symptom) => (
                    <div key={symptom.id} className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedHeadFaceSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "headFace")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  {headFaceSymptomsColumn3.map((symptom) => (
                    <div key={symptom.id} className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedHeadFaceSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "headFace")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id="head-face-other"
                        checked={headFaceOther}
                        onCheckedChange={setHeadFaceOther}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor="head-face-other" className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        Otro
                      </Label>
                    </div>
                    {headFaceOther && (
                      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                          <Input className="border-0 bg-transparent p-0 h-auto" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sección 2: Tronco o extremidades */}
        <Card className="items-center gap-6 p-6 bg-white rounded-lg shadow-shadow-sm flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <CardContent className="p-0 w-full">
            <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto] mb-6">
              <h2 className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                ¿Tienes dolores o molestias en tronco o extremidades?
              </h2>
              <RadioGroup value={trunkExtremitiesAnswer} onValueChange={setTrunkExtremitiesAnswer} className="flex gap-6 justify-center">
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem value="yes" id="trunk-extremities-yes" className="w-4 h-4 bg-primary-50 border-[#2e3d33] data-[state=checked]:bg-primary-50" />
                  <Label htmlFor="trunk-extremities-yes" className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                    Sí
                  </Label>
                </div>
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem value="no" id="trunk-extremities-no" className="w-4 h-4 bg-primary-50 border-[#2e3d33]" />
                  <Label htmlFor="trunk-extremities-no" className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
            {trunkExtremitiesAnswer === "yes" && (
              <div className="gap-6 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  {trunkExtremitiesSymptoms.map((symptom) => (
                    <div key={symptom.id} className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedTrunkExtremitiesSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "trunkExtremities")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  {trunkExtremitiesSymptomsColumn2.map((symptom) => (
                    <div key={symptom.id} className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedTrunkExtremitiesSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "trunkExtremities")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  {trunkExtremitiesSymptomsColumn3.map((symptom) => (
                    <div key={symptom.id} className="flex items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedTrunkExtremitiesSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "trunkExtremities")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id="trunk-extremities-other"
                        checked={trunkExtremitiesOther}
                        onCheckedChange={setTrunkExtremitiesOther}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor="trunk-extremities-other" className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        Otro
                      </Label>
                    </div>
                    {trunkExtremitiesOther && (
                      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                          <Input className="border-0 bg-transparent p-0 h-auto" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sección 3: Piel, cabello o uñas */}
        <Card className="flex flex-col items-center justify-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="p-0 w-full">
            <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto] mb-6">
              <h2 className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                ¿Tienes problemas en la piel, cabello o uñas?
              </h2>
              <RadioGroup value={skinHairNailsAnswer} onValueChange={setSkinHairNailsAnswer} className="flex gap-6 justify-center">
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem value="yes" id="skin-hair-nails-yes" className="w-4 h-4 bg-primary-50 border-[#2e3d33] data-[state=checked]:bg-primary-50" />
                  <Label htmlFor="skin-hair-nails-yes" className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                    Sí
                  </Label>
                </div>
                <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
                  <RadioGroupItem value="no" id="skin-hair-nails-no" className="w-4 h-4 bg-primary-50 border-[#2e3d33]" />
                  <Label htmlFor="skin-hair-nails-no" className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
            {skinHairNailsAnswer === "yes" && (
              <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  {skinHairNailsSymptoms.map((symptom) => (
                    <div key={symptom.id} className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedSkinHairNailsSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "skinHairNails")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  {skinHairNailsSymptomsColumn2.map((symptom) => (
                    <div key={symptom.id} className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedSkinHairNailsSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "skinHairNails")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                  {skinHairNailsSymptomsColumn3.map((symptom) => (
                    <div key={symptom.id} className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id={symptom.id}
                        checked={selectedSkinHairNailsSymptoms.includes(symptom.id)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean, "skinHairNails")}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor={symptom.id} className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        {symptom.label}
                      </Label>
                    </div>
                  ))}

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                      <Checkbox 
                        id="skin-hair-nails-other"
                        checked={skinHairNailsOther}
                        onCheckedChange={setSkinHairNailsOther}
                        className="relative w-4 h-4 bg-primary-50 rounded border border-solid border-[#3c5043]" 
                      />
                      <Label htmlFor="skin-hair-nails-other" className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] cursor-pointer">
                        Otro
                      </Label>
                    </div>
                    {skinHairNailsOther && (
                      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2]">
                          <Input className="border-0 bg-transparent p-0 h-auto" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};