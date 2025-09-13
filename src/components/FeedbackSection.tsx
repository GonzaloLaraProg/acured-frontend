import { CheckCircleIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface FeedbackSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[45] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-96 shadow-shadow-md">
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-[8px_8px_0px_0px]">
          <CheckCircleIcon className="w-7 h-7 text-green-600" />
          <div className="flex-1 font-medium text-green-600 text-sm">
            Éxito
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1 hover:bg-green-100"
          >
            <XIcon className="w-4 h-4" />
          </Button>
        </div>

        <CardContent className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-[0px_0px_8px_8px]">
          <div className="self-stretch text-gray-600 text-sm leading-relaxed">
            Tu mensaje ha sido enviado con éxito. <br />
            Nuestro equipo te contactara por correo a la brevedad.
          </div>

          <div className="flex flex-col items-start gap-2 pt-3 pb-0 px-0 self-stretch w-full border-t border-gray-300">
            <div className="flex items-center justify-end gap-2.5 self-stretch w-full">
              <div className="inline-flex items-start gap-2">
                <Button 
                  className="h-auto px-4 py-2 bg-primary-800 rounded-3xl shadow-shadow-md hover:bg-primary-700"
                  onClick={onClose}
                >
                  <span className="font-medium text-neutralswhite text-sm">
                    Cerrar
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};