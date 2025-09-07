import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Progress } from "../../../../components/ui/progress";

export const ConsultationReasonSection = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="flex w-full items-center justify-center bg-primary-50">
        <div className="flex flex-col w-[780px] items-center gap-12 pt-24 pb-16 px-16">
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col items-start gap-8 w-full">
              <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
                <CardContent className="flex flex-col items-center gap-8 p-6">
                  <div className="inline-flex flex-col items-center gap-12">
                    <h2 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                      ¿Cuál es tu motivo de consulta?
                    </h2>
                  </div>

                  <div className="flex flex-col w-[282px] items-start gap-1">
                    <Input className="h-14 bg-primary-50 border-[#f1f4f2]" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
            <CardContent className="flex flex-col items-center gap-6 p-6">
              <div className="inline-flex flex-col items-center gap-12">
                <h2 className="w-[338px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  ¿Tienes algún diagnóstico relacionado a tu motivo de consulta?
                </h2>
              </div>

              <div className="flex flex-col w-[282px] items-start gap-1">
                <Input className="h-14 bg-primary-50 border-[#f1f4f2]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};