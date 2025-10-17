import { ChevronDownIcon, PlusIcon, TrashIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../components/ui/select";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  // Data for time slots
  const timeSlots = [
    { startTime: "9:00 AM", endTime: "13:00 PM" },
    { startTime: "14:00 PM", endTime: "19:00 PM" },
  ];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <Card className="w-[572px] p-0 border border-solid border-[#f1f4f2] shadow-shadow-base bg-white rounded-lg">
        <CardHeader className="p-8 pb-4 flex flex-row items-center justify-between space-y-0">
          <div className="flex flex-col space-y-1.5">
            <CardTitle className="font-heading-h7 text-zinc-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
              Horarios programados
            </CardTitle>
            <CardDescription className="font-paragraph-p1 text-black text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]">
              Programa tus horarios del dia
            </CardDescription>
          </div>
          <button 
            className="h-5 w-5 p-0 bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
            onClick={onClose}
          >
            <XIcon className="w-5 h-5" />
          </button>
        </CardHeader>

        <CardContent className="px-8 pb-4 flex flex-col gap-3 border-b border-[#dcdce2]">
          <div className="flex flex-col gap-2">
            <label className="font-paragraph-p1-semi-bold text-shadow-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
              Selecciona profesional
            </label>

            <Select>
              <SelectTrigger className="w-[202px] bg-primary-50 border-[#d3e0d7] text-primary-800 h-auto py-1.5">
                <SelectValue
                  placeholder="Nombre"
                  className="text-[#3c5043] font-paragraph-p1 [font-style:var(--paragraph-p1-font-style)] font-[number:var(--paragraph-p1-font-weight)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] text-[length:var(--paragraph-p1-font-size)]"
                />
                <ChevronDownIcon className="h-5 w-5" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nombre">Nombre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-4 w-full">
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-paragraph-p1-semi-bold text-shadow-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                Hora de inicio
              </label>
              <div className="flex flex-col gap-2 w-full">
                {timeSlots.map((slot, index) => (
                  <input
                    key={`start-${index}`}
                    type="text"
                    value={slot.startTime}
                    className="p-3 w-full bg-primary-50 rounded border border-solid border-[#d3e0d7] font-paragraph-p1 text-primary-700 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]"
                    readOnly
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="font-paragraph-p1-semi-bold text-shadow-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                Hora de finalización
              </label>
              <div className="flex flex-col gap-2 w-full">
                {timeSlots.map((slot, index) => (
                  <div key={`end-${index}`} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={slot.endTime}
                      className="p-3 w-full bg-primary-50 rounded border border-solid border-[#d3e0d7] font-paragraph-p1 text-primary-700 text-[length:var(--paragraph-p1-font-size)] tracking-[var(--paragraph-p1-letter-spacing)] leading-[var(--paragraph-p1-line-height)] [font-style:var(--paragraph-p1-font-style)]"
                      readOnly
                    />
                    {index === 1 && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="p-2 bg-neutralswhite rounded shadow-shadow-xs flex-shrink-0"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button variant="ghost" className="gap-2 px-0 py-2 w-fit text-primary-800 hover:bg-transparent">
            <PlusIcon className="h-4 w-4" />
            <span className="font-text-text-xs-text-xs-font-medium text-primary-800 text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
              Agregar turno
            </span>
          </Button>
        </CardContent>

        <CardFooter className="flex justify-between p-8 pt-4">
          <Button
            variant="outline"
            className="px-6 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs border-gray-300"
            onClick={onClose}
          >
            <span className="font-inter-text-xs-medium text-zinc-900 text-[length:var(--inter-text-xs-medium-font-size)] leading-[var(--inter-text-xs-medium-line-height)] tracking-[var(--inter-text-xs-medium-letter-spacing)] [font-style:var(--inter-text-xs-medium-font-style)]">
              Cancelar
            </span>
          </Button>

          <Button className="px-6 py-2 bg-primary-800 rounded-3xl shadow-shadow-md hover:bg-primary-700">
            <span className="font-text-text-xs-text-xs-font-medium text-neutralswhite text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
              Guardar
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};