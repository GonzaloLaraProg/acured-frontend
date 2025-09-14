import { ChevronRightIcon, XIcon } from "lucide-react";
import React from "react";
import { AppointmentDetailsModal } from "./AppointmentDetailsModal";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface CancellationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CancellationFormModal: React.FC<CancellationFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [showAppointmentDetails, setShowAppointmentDetails] = React.useState(false);

  const handleConfirm = () => {
    setShowAppointmentDetails(true);
  };

  const handleAppointmentDetailsClose = () => {
    setShowAppointmentDetails(false);
    onClose(); // Close the main modal when appointment details is closed
  };

  if (!isOpen) return null;

  return (
    <>

      <div className="fixed inset-0 z-[45] flex items-center justify-center">

      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative max-w-lg p-0 bg-neutralswhite rounded-lg shadow-lg">
        <div className="flex flex-col pt-8 pb-0 px-8">
          <div className="flex flex-row items-center justify-end pb-0 space-y-0">
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 hover:bg-transparent"

              onClick={onClose}
            >
              <div className="inline-flex items-center justify-center gap-1.5 rounded-[37.5px]">
                <span className="[font-family:'Inter',Helvetica] font-normal text-zinc-900 text-sm tracking-[0] leading-[normal]">
                  Cerrar
                </span>
                <XIcon className="w-[18px] h-[18px]" />
              </div>
            </Button>
          </div>

          <div className="inline-flex flex-col items-center gap-6 pt-6 pb-12 px-0">
            <h2 className="w-[336px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
              Cancelación de cita
            </h2>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-start gap-3 w-full">
                  <Label className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Rut
                  </Label>
                </div>

                <div className="w-full">
                  <Input
                    className="w-full p-2 bg-primary-50 border-0 rounded font-text-text-sm-text-sm-font-normal font-[number:var(--text-text-sm-text-sm-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-sm-text-sm-font-normal-font-size)] tracking-[var(--text-text-sm-text-sm-font-normal-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-normal-line-height)] [font-style:var(--text-text-sm-text-sm-font-normal-font-style)]"
                    placeholder="Sin puntos y sin guión"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex items-start gap-3 w-full">
                  <Label className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Mail
                  </Label>
                </div>

                <Input className="w-full p-2 bg-primary-50 border border-solid border-[#f1f4f2] rounded" />
              </div>
            </div>

            <div className="flex flex-col items-end gap-2.5 w-full">
              <Button 
                className="h-auto inline-flex justify-center px-4 py-2 bg-primary-900 rounded-3xl items-center hover:bg-primary-800"
                onClick={handleConfirm}
              >
                <div className="inline-flex items-center gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-xs text-right tracking-[0] leading-[18px] whitespace-nowrap">
                    Confirmar
                  </span>
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <AppointmentDetailsModal
        isOpen={showAppointmentDetails}
        onClose={handleAppointmentDetailsClose}
      />
    </>
  );
};