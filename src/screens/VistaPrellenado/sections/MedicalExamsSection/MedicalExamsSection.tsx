import React from "react";
import { UploadIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MedicalExamsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
        Exámenes
      </h1>

      <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
        <CardContent className="flex flex-col items-center justify-center gap-8 p-6">
          <h1 className="w-[380px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
            Resultados de exámenes médicos
          </h1>

          <div className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col items-center gap-3 p-6 w-full bg-white rounded-md border border-dashed border-[#bbcac0]">
              <p className="w-[362px] font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] text-center tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                Si tienes exámenes médicos relacionados con tu motivo de
                consulta, adjúntalos aquí (ej: informes, imágenes, etc).
              </p>

              <div className="flex flex-col items-center gap-3 w-full">
                <div className="flex w-11 h-11 items-center justify-center gap-2.5 p-[9px] bg-primary-50 rounded-[50px]">
                  <UploadIcon className="w-6 h-6" />
                </div>

                <div className="flex flex-col items-center gap-1 w-full">
                  <div className="flex items-start justify-center gap-1 w-full">
                    <span className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
                      Haga clic para cargar
                    </span>
                    <span className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-shadow-900 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
                      o arrastra y suelta
                    </span>
                  </div>

                  <p className="w-full font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-shadow-900 text-[length:var(--paragraph-p1-font-size)] text-center tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
                    (Tamaño máximo de archivo: 25 MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};