import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
 
} from "../../../../components/ui/select";

const monthOptions = [
  { value: "enero", label: "Enero" },
  { value: "febrero", label: "Febrero" },
  { value: "marzo", label: "Marzo" },
  { value: "abril", label: "Abril" },
  { value: "mayo", label: "Mayo" },
  { value: "junio", label: "Junio" },
  { value: "julio", label: "Julio" },
  { value: "agosto", label: "Agosto" },
  { value: "septiembre", label: "Septiembre" },
  { value: "octubre", label: "Octubre" },
  { value: "noviembre", label: "Noviembre" },
  { value: "diciembre", label: "Diciembre" },
];

interface PersonalDataFormSectionProps {
  onGenderChange?: (gender: string) => void;
}

export const PersonalDataFormSection = ({ onGenderChange }: PersonalDataFormSectionProps): JSX.Element => {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  const [open, setOpen] = useState(false);
  const [genderExpansionLevel, setGenderExpansionLevel] = useState<number>(0);

  const getGenderOptions = () => {
    if (genderExpansionLevel === 0) {
      return [
        { value: "femenino", label: "Femenino" },
        { value: "masculino", label: "Masculino" },
        { value: "otro", label: "Otro" },
      ];
    }

    return [
      { value: "no-binario", label: "No binario" },
      { value: "transfemenino", label: "Transfemenino" },
      { value: "transmasculino", label: "Transmasculino" },
      { value: "prefiero-no-informar", label: "Prefiero no informar" },
      { value: "otro", label: "Otro" },
    ];
  };

  const handleGenderChange = (value: string) => {
    if (value === "otro" && genderExpansionLevel === 0) {
      // No debería dispararse si prevenimos el pointerdown para "otro",
      // pero lo dejamos por seguridad si se selecciona por teclado.
      setGenderExpansionLevel(1);
      setSelectedGender("");
      return; // no cerrar
    }

    setSelectedGender(value);
    onGenderChange?.(value);
    setOpen(false); // cerrar en selecciones "reales"
  };

  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Necesitamos algunos datos personales
      </h1>

      <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <Card className="flex flex-col items-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="inline-flex flex-col items-center gap-12 relative flex-[0_0_auto] p-0">
            <h2 className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
              Datos personales
            </h2>

            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] w-full">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Nombre y Apellidos
                  </span>
                </Label>

                <Input className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2] h-auto" />
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Rut
                  </span>
                </Label>

                <Input className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2] h-auto" />
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="relative w-fit mt-[-1.00px] font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-800 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                  Fecha de nacimiento
                </Label>

                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <Input
                    className="w-[130px] flex items-center p-2 relative bg-primary-50 rounded h-auto"
                    placeholder="Dia (ej: 04)"
                  />

                  <Select
                    value={selectedMonth}
                    onValueChange={setSelectedMonth}
                  >
                    <SelectTrigger className="flex w-[130px] items-center justify-between p-2 relative bg-primary-50 rounded h-auto">
                      <SelectValue placeholder="Mes" />
                    </SelectTrigger>
                    <SelectContent>
                      {monthOptions.map((month) => (
                        <SelectItem key={month.value} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Input
                    className="w-[130px] flex items-center p-2 relative bg-primary-50 rounded h-auto"
                    placeholder="Año (ej: 1996)"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Género
                  </span>
                </Label>


                  <Select
                    value={selectedGender}
                    onValueChange={handleGenderChange}
                    open={open}
                    onOpenChange={setOpen}
                  >

                  <SelectTrigger className="w-full flex items-center justify-between border border-[#bbcac0] shadow-shadow-sm relative bg-primary-50 rounded px-3 py-2">
                    <SelectValue placeholder="Género" />
                  </SelectTrigger>


                  <SelectContent
                    // evita cambios de foco bruscos al actualizar opciones
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    {getGenderOptions().map((opt) => {
                      // --- Item especial: "Otro" en nivel 0 (no cerrar al hacer click) ---
                      if (opt.value === "otro" && genderExpansionLevel === 0) {
                        return (
                          <SelectItem
                            key="otro"
                            value="otro"
                            // Evitamos que Radix seleccione y cierre:
                            onPointerDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setGenderExpansionLevel(1);
                              setSelectedGender("");
                              // No tocamos `open`: el menú sigue abierto
                            }}
                            onKeyDown={(e) => {
                              // Soporte teclado: Enter o Space
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                e.stopPropagation();
                                setGenderExpansionLevel(1);
                                setSelectedGender("");
                              }
                            }}
                          >
                            {opt.label}
                          </SelectItem>
                        );
                      }

                      // --- Resto de items (flujo normal) ---
                      return (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>

                </Select>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Ocupación
                  </span>
                </Label>

                <Input className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2] h-auto" />
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Mail
                  </span>
                </Label>

                <Input className="flex items-start p-2 relative self-stretch w-full flex-[0_0_auto] bg-primary-50 rounded border border-solid border-[#f1f4f2] h-auto" />
              </div>

              <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <Label className="inline-flex items-center relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Contacto de emergencia (teléfono)
                  </span>
                </Label>

                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <Select defaultValue="+569">
                      <SelectTrigger className="w-[87px] justify-between px-3 py-1.5 flex items-center relative bg-primary-50 rounded h-auto">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+569">+569</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      className="flex-1 grow flex items-center p-2 relative bg-primary-50 rounded h-auto"
                      placeholder="Numero de teléfono"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
