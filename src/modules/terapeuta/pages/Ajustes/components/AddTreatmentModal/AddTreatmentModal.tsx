import React from "react";
import { Button } from "../../../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../../../../components/ui/dialog";
import { Input } from "../../../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../components/ui/select";

interface AddTreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const AddTreatmentModal = ({ isOpen, onClose, onSave }: AddTreatmentModalProps): JSX.Element => {
  // Data for the dropdown
  const additionalTimeTypes = [
    "Anterior y posterior a consulta",
    // Add more options if needed
  ];

  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-4 p-8 bg-neutralswhite rounded-lg border border-solid border-[#f1f4f2] shadow-shadow-base w-[572px] max-w-full">
        <DialogHeader className="flex items-center p-0 space-y-0">
          <DialogTitle className="font-heading-h7 text-zinc-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
            Añadir servicio o tratamiento
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col w-full items-start gap-6 pt-0 pb-6 px-0 border-b [border-bottom-style:solid] border-[#dcdce2]">
          {/* Basic Data Section */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Datos básicos
            </h3>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start justify-center gap-1 w-full">
                <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                  Nombre del servicio
                </label>
                <Input className="bg-primary-50 border border-solid border-[#f1f4f2] p-2 w-full" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="flex flex-col items-start justify-center gap-1 w-full">
                <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                  Descripción
                </label>
                <Input className="bg-primary-50 border border-solid border-[#f1f4f2] p-2 w-full" />
              </div>
            </div>
          </div>

          {/* Prices and Duration Section */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Precios y duración
            </h3>

            <div className="flex items-start gap-2.5 w-full">
              <div className="flex flex-col items-start justify-center gap-1 flex-1">
                <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                  Duración
                </label>
                <Input className="bg-primary-50 border border-solid border-[#f1f4f2] p-2 w-full" />
              </div>

              <div className="flex flex-col items-start justify-center gap-1 flex-1">
                <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                  Valor
                </label>
                <Input className="bg-primary-50 border border-solid border-[#f1f4f2] p-2 w-full" />
              </div>
            </div>
          </div>

          {/* Additional Time Section */}
          <div className="flex flex-col items-start gap-3 w-full">
            <h3 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Tiempo adicional
            </h3>

            <div className="flex items-start gap-2.5 w-full">
              <div className="flex flex-col items-start justify-center gap-1 flex-1">
                <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                  Tipo
                </label>
                <Select defaultValue={additionalTimeTypes[0]}>
                  <SelectTrigger className="bg-primary-50 border border-solid border-[#f1f4f2] px-3 py-1.5 w-full">
                    <SelectValue className="font-paragraph-p1 font-[number:var(--paragraph-p1-font-weight)] text-primary-800 text-[length:var(--paragraph-p1-font-size)] leading-[var(--paragraph-p1-line-height)] tracking-[var(--paragraph-p1-letter-spacing)] [font-style:var(--paragraph-p1-font-style)]" />
                  </SelectTrigger>
                  <SelectContent>
                    {additionalTimeTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col items-start justify-center gap-1 flex-1">
                <label className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                  Duración
                </label>
                <Input className="bg-primary-50 border border-solid border-[#f1f4f2] p-2 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer with buttons */}
        <div className="flex items-start justify-between w-full">
          <Button
            variant="outline"
            className="bg-neutralswhite shadow-shadow-xs px-4 py-2 rounded-3xl"
            onClick={onClose}
          >
            <span className="font-inter-text-xs-medium font-[number:var(--inter-text-xs-medium-font-weight)] text-zinc-900 text-[length:var(--inter-text-xs-medium-font-size)] leading-[var(--inter-text-xs-medium-line-height)] text-right tracking-[var(--inter-text-xs-medium-letter-spacing)] [font-style:var(--inter-text-xs-medium-font-style)]">
              Cancelar
            </span>
          </Button>

          <Button className="bg-primary-800 shadow-shadow-md px-4 py-2 rounded-3xl" onClick={handleSave}>
            <span className="font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] text-right tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
              Guardar
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};