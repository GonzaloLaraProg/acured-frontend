import { XIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="relative w-[800px] h-[600px] max-w-none mx-auto bg-white rounded-xl p-10 shadow-xl flex flex-col"
      >
        {/* Botón cerrar */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-6 right-6 h-auto p-1 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          onClick={onClose}
        >
          <span className="mr-1 text-sm">Cerrar</span>
          <XIcon className="w-5 h-5" />
        </Button>

        {/* Header */}
        <DialogHeader className="text-center mb-8">
          <DialogTitle className="text-3xl font-semibold text-gray-900 mb-2">
            ¡Contáctanos!
          </DialogTitle>
          <p className="text-gray-600 text-base">
            Te contactaremos lo antes posible.
          </p>
        </DialogHeader>

        {/* Formulario */}
        <form className="space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre" className="sr-only">
                Nombre
              </Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Nombre"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellidos" className="sr-only">
                Apellidos
              </Label>
              <Input
                id="apellidos"
                type="text"
                placeholder="Apellidos"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mail" className="sr-only">
                Mail
              </Label>
              <Input
                id="mail"
                type="email"
                placeholder="Mail"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje" className="sr-only">
                Mensaje
              </Label>
              <Textarea
                id="mensaje"
                placeholder="Escribe tu mensaje aquí"
                rows={6}
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-base text-gray-900 placeholder-gray-500 resize-none"
              />
            </div>
          </div>

          {/* Botón confirmar */}
          <Button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-fit px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full text-base font-medium"
          >
            Confirmar
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
