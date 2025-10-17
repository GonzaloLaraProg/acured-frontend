import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../../../components/ui/dialog";
import { Input } from "../../../../../../components/ui/input";
import { Label } from "../../../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../components/ui/select";

interface ServiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const ServiceSelectionModal = ({ isOpen, onClose, onSave }: ServiceSelectionModalProps): JSX.Element => {
  // Data for dropdowns
  const serviceOptions = [{ value: "medicina-china", label: "Medicina China" }];
  const durationOptions = [{ value: "1-hora", label: "1 hora" }];
  const professionalOptions = [{ value: "nombre", label: '"Nombre"' }];
  const additionalTimeTypeOptions = [
    { value: "anterior-posterior", label: "Anterior y posterior a sesión" },
  ];
  const additionalTimeDurationOptions = [
    { value: "15-minutos", label: "15 minutos" },
  ];

  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] w-full p-0 max-h-[90vh] overflow-y-auto">
        <div className="p-8">
        <DialogHeader className="flex flex-row items-center justify-between p-6 space-y-0">
          <DialogTitle className="font-heading-h7 font-bold text-zinc-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
            Configuración de tu sesión
          </DialogTitle>
          <button 
            className="h-5 w-5 p-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
            onClick={onClose}
          >
            <XIcon className="w-5 h-5" />
          </button>
        </DialogHeader>

        <div className="flex flex-col w-full items-start gap-6 pt-0 pb-6 px-6 border-b [border-bottom-style:solid] border-[#dcdce2]">
            <div className="flex flex-col items-start gap-6 w-full">
              {/* Service name and selection */}
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start justify-center gap-1 flex-1">
                    <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                      Nombre del servicio
                    </Label>
                    <Input className="p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1 flex-1">
                    <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                      Selecciona servicios
                    </Label>
                    <Select defaultValue={serviceOptions[0].value}>
                      <SelectTrigger className="px-3 py-1.5 bg-primary-50 rounded border border-solid border-[#d3e0d7] font-paragraph-p1 text-primary-800">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Session value and duration */}
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start justify-center gap-1 flex-1">
                    <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                      Valor general de la sesión
                    </Label>
                    <Input className="p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-1 flex-1">
                    <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                      Duración
                    </Label>
                    <Select defaultValue={durationOptions[0].value}>
                      <SelectTrigger className="px-3 py-1.5 bg-primary-50 rounded border border-solid border-[#f1f4f2] font-paragraph-p1 text-primary-800">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {durationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Modality */}
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex items-start gap-2.5 w-full">
                  <div className="flex flex-col items-start justify-center gap-1 flex-1">
                    <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                      Modalidad
                    </Label>
                    <Input className="p-2 bg-primary-50 rounded border border-solid border-[#f1f4f2]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Professional selection */}
            <div className="flex flex-col items-start gap-3">
              <Label className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Escoja Profesional
              </Label>
              <Select defaultValue={professionalOptions[0].value}>
                <SelectTrigger className="w-[202px] px-3 py-1.5 bg-primary-50 rounded border border-solid border-[#d3e0d7] font-paragraph-p1 text-primary-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {professionalOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className="text-[#3c5043] font-paragraph-p1 [font-style:var(--paragraph-p1-font-style)] font-[number:var(--paragraph-p1-font-weight)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] text-[length:var(--paragraph-p1-font-size)]">
                        {option.label}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Additional time */}
            <div className="flex flex-col items-start gap-3 w-full">
              <Label className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Tiempo adicional
              </Label>
              <div className="flex items-start gap-2.5 w-full">
                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                    Tipo
                  </Label>
                  <Select defaultValue={additionalTimeTypeOptions[0].value}>
                    <SelectTrigger className="px-3 py-1.5 bg-primary-50 rounded border border-solid border-[#f1f4f2] font-paragraph-p1 text-primary-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {additionalTimeTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
                    (ej: 15 minutos de descanso después de cada sesión)
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center gap-1 flex-1">
                  <Label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                    Duración
                  </Label>
                  <Select defaultValue={additionalTimeDurationOptions[0].value}>
                    <SelectTrigger className="px-3 py-1.5 bg-primary-50 rounded border border-solid border-[#d3e0d7] font-paragraph-p1 text-primary-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {additionalTimeDurationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
        </div>

        <DialogFooter className="flex items-center justify-between w-full p-6">
          <Button
            variant="outline"
            className="bg-neutralswhite shadow-shadow-xs px-4 py-2 rounded-3xl"
            onClick={onClose}
          >
            <span className="font-[number:var(--inter-text-xs-medium-font-weight)] text-zinc-900 text-[length:var(--inter-text-xs-medium-font-size)] leading-[var(--inter-text-xs-medium-line-height)] font-paragraph-p3-text-xs-medium text-right tracking-[var(--inter-text-xs-medium-letter-spacing)] [font-style:var(--inter-text-xs-medium-font-style)]">
              Cancelar
            </span>
          </Button>
          <Button className="bg-primary-800 shadow-shadow-md px-4 py-2 rounded-3xl" onClick={handleSave}>
            <span className="font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] text-right tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
              Guardar
            </span>
          </Button>
        </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};