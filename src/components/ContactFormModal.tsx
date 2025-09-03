import { XIcon } from "lucide-react";
import React, { useState } from "react";
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
      <DialogContent className="max-w-lg mx-auto bg-white rounded-lg p-6 relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 h-auto p-1 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <XIcon className="w-4 h-4" />
          <span className="ml-1 text-sm">Cerrar</span>
        </Button>

        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-2xl font-semibold text-gray-900 mb-2">
            ¡Contáctanos!
          </DialogTitle>
          <p className="text-gray-600 text-sm">
            Te contactaremos lo antes posible.
          </p>
        </DialogHeader>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="sr-only">
              Nombre
            </Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Nombre"
              className="w-full bg-gray-50 border-gray-200 rounded-md px-3 py-2 text-sm"
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
              className="w-full bg-gray-50 border-gray-200 rounded-md px-3 py-2 text-sm"
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
              className="w-full bg-gray-50 border-gray-200 rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje" className="sr-only">
              Mensaje
            </Label>
            <Textarea
              id="mensaje"
              placeholder="Escribe tu mensaje aquí"
              rows={4}
              className="w-full bg-gray-50 border-gray-200 rounded-md px-3 py-2 text-sm resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white rounded-md py-2 px-4 text-sm font-medium h-auto"
          >
            Confirmar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};