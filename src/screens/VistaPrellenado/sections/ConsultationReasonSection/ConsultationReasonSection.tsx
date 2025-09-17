import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Progress } from "../../../../components/ui/progress";

export const ConsultationReasonSection = (): JSX.Element => {
  return (
    <div className="bg-primary-50 flex items-center justify-center py-8">
      <div className="flex flex-col w-[780px] items-center gap-6">
        
        {/* Primer bloque */}
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-primary-900 text-center font-heading-h6">
              ¿Cuál es tu motivo de consulta?
            </h2>
            <Input className="h-12 bg-primary-50 border-[#f1f4f2] w-[282px]" />
          </CardContent>
        </Card>

        {/* Segundo bloque */}
        <Card className="w-full bg-white rounded-lg shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-primary-900 text-center font-heading-h6">
              ¿Tienes algún diagnóstico relacionado a tu motivo de consulta?
            </h2>
            <Input className="h-12 bg-primary-50 border-[#f1f4f2] w-[282px]" />
          </CardContent>
        </Card>

        {/* Navegación */}
        <div className="flex w-full justify-between mt-4">
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeftIcon className="h-4 w-4" />
            Atrás
          </Button>
          <Button className="flex items-center gap-2 bg-primary-900 text-white">
            Siguiente
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
