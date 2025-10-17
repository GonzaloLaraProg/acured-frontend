import { X, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ExitoSupport2 } from "./ExitoSupport2";

interface DatosParaRembolsoProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
}

export const DatosParaRembolso: React.FC<DatosParaRembolsoProps> = ({
  isOpen,
  onClose,
  onBack,
}) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = React.useState(false);

  if (!isOpen) return null;

  const formFields = [
    { id: "titular", label: "Titular", type: "input", placeholder: "Nombre" },
    { id: "rut", label: "Rut", type: "input", placeholder: "Sin puntos ni guión" },
    { id: "banco", label: "Banco", type: "select", placeholder: "Seleccione banco" },
    { id: "tipoCuenta", label: "Tipo de cuenta", type: "select", placeholder: "Seleccione cuenta" },
    { id: "cuenta", label: "Cuenta", type: "input", placeholder: "123456789" },
    { id: "email", label: "Correo electrónico", type: "input", placeholder: "Email" },
  ];

  const handleConfirmClick = () => {
    setIsConfirmModalOpen(true);
  };

  return (
    <>
      {/* Modal principal */}
      <div className="fixed inset-0 z-[40] flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Contenido */}
        <div className="relative bg-white rounded-2xl shadow-lg w-[600px] mx-4 h-[85vh] mt-14 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200 text-center">
            {/* Botón cerrar al extremo derecho */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute right-4 top-6 flex items-center gap-2 text-gray-600 hover:bg-gray-100 p-2"
            >
              <span className="text-sm">Cerrar</span>
              <X className="w-4 h-4" />
            </Button>

            {/* Título */}
            <h2 className="text-xl font-normal text-primary-900 font-hass">
              Datos para reembolso
            </h2>

            {/* Párrafo debajo del título */}
            <p className="text-sm text-gray-700 mt-2">
              Para gestionar la devolución, ingresa tus datos bancarios a continuación.
            </p>
          </div>
          <br />


          {/* Formulario */}
          <div className="px-6 pb-6 overflow-y-auto flex-1">
            

            <Card className="border border-gray-200">
              <CardContent className="flex flex-col gap-4 p-4">
                {formFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-2 w-full">
                    <Label className="text-sm font-medium text-gray-600">
                      {field.label}
                    </Label>

                    {field.type === "input" && (
                      <Input
                        placeholder={field.placeholder}
                        className="p-2 rounded border border-gray-300 bg-primary-50 h-auto"
                      />
                    )}

                    {field.type === "select" && (
                      <Select>
                        <SelectTrigger className="p-2 bg-primary-50 rounded border border-gray-300 h-auto">
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Opción 1</SelectItem>
                          <SelectItem value="option2">Opción 2</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200">
            <Button
              variant="outline"
              className="px-6 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 border-0"
              onClick={onBack ?? onClose}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span className="font-medium text-sm">Atrás</span>
            </Button>

            <Button
              className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 flex items-center gap-2"
              onClick={handleConfirmClick}
            >
              <span className="font-medium text-sm">Confirmar datos y anular cita</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      <ExitoSupport2
        isOpen={isConfirmModalOpen}
        onClose={onClose} 
      />
    </>
  );
};
