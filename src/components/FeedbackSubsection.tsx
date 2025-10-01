import { CheckCircleIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface FeedbackSubsectionProps {
  onClose: () => void;
}

export const FeedbackSubsection: React.FC<FeedbackSubsectionProps> = ({ onClose }): JSX.Element => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <Card className="relative w-96 shadow-shadow-md z-[71]">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-t-lg">
          <CheckCircleIcon className="w-7 h-7 text-green-600" />

          <div className="flex-1 font-heading-h7 text-green-600">
            Éxito
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-1 hover:bg-green-100"
          >
            <XIcon className="w-4 h-4 text-green-600" />
          </Button>
        </div>

        {/* Content */}
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-b-lg">
          <div className="self-stretch text-sm text-gray-600">
            ¡Cita cancelada con éxito!
          </div>

          {/* Footer */}
          <div className="flex justify-end w-full border-t pt-4">
            <Button
              className="h-auto px-4 py-2 bg-primary-800 rounded-3xl shadow-md hover:bg-primary-700"
              onClick={onClose}
            >
              <span className="text-white text-sm font-medium">Cerrar</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
