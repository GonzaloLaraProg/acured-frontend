import { MapPinIcon, PhoneIcon, XIcon } from "lucide-react";
import React from "react";
import { FrameWrapperSubsection } from "./FrameWrapperSubsection";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

interface AppointmentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const appointmentData = [
  {
    id: 1,
    date: "01/08/2025, 15:30 PM",
    professional: "Profesional",
    treatment: "Tratamiento o servicio",
    address: "Principe de gales, la reina 33333",
    phone: "Teléfono",
  },
  {
    id: 2,
    date: "01/08/2025, 15:30 PM",
    professional: "Profesional",
    treatment: "Tratamiento o servicio",
    address: "Principe de gales, la reina 33333",
    phone: "Teléfono",
  },
  {
    id: 3,
    date: "01/08/2025, 15:30 PM",
    professional: "Profesional",
    treatment: "Tratamiento o servicio",
    address: "Principe de gales, la reina 33333",
    phone: "Teléfono",
  },
];

export const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [showCancellationConfirmation, setShowCancellationConfirmation] = React.useState(false);

  const handleAnularCitaClick = () => {
    setShowCancellationConfirmation(true);
  };

  const handleCancellationClose = () => {
    setShowCancellationConfirmation(false);
  };

  const handleConfirmCancellation = () => {
    // Handle the actual cancellation logic here
    setShowCancellationConfirmation(false);
    onClose();
  };

  if (!isOpen) return null;

  if (showCancellationConfirmation) {
    return (
      <div className="fixed inset-0 z-[46] flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={handleCancellationClose}
        />
        
        {/* Cancellation Confirmation */}
        <div className="relative">
          <FrameWrapperSubsection 
            onClose={handleCancellationClose}
            onConfirmCancellation={handleConfirmCancellation}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[45] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-[612px] h-[635px] bg-neutralswhite rounded-lg border border-solid border-[#dcdce2] shadow-shadow-xs">
        <CardContent className="flex flex-col items-center pt-8 pb-0 px-8 h-full">
          <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto] rounded-[37.5px] h-auto p-0 hover:bg-transparent"
              onClick={onClose}
            >
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-zinc-900 text-sm tracking-[0] leading-[normal]">
                Cerrar
              </div>
              <XIcon className="relative w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="flex flex-col items-start gap-6 relative flex-1 self-stretch w-full grow">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[336px] mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                Cancelación de cita
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-0 pb-6 px-0 relative flex-1 self-stretch w-full grow">
              <ScrollArea className="flex-1 h-[489px]">
                <div className="flex flex-col items-center gap-6 p-1 relative">
                  <div className="flex flex-col h-[348px] items-start gap-4 relative self-stretch w-full">
                    {appointmentData.map((appointment, index) => (
                      <Card
                        key={appointment.id}
                        className={`items-center self-stretch w-full flex-[0_0_auto] bg-neutralswhite rounded-lg overflow-hidden border border-solid border-[#dcdce2] shadow-shadow-xs flex relative ${index === 2 ? "mb-[-185.00px]" : index === 1 ? "mb-[-2.00px]" : ""}`}
                      >
                        <CardContent className="flex p-0 w-full">
                          <div className="flex w-[159px] items-center gap-2.5 relative self-stretch">
                            <div className="relative flex-1 self-stretch grow bg-[#bbcac0]" />
                          </div>

                          <div className="flex flex-col items-end gap-6 px-4 py-3 relative flex-1 grow">
                            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                              <div className="inline-flex flex-col items-start justify-around gap-3 relative self-stretch flex-[0_0_auto]">
                                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-primary-700 text-[length:var(--heading-h7-font-size)] text-right tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] whitespace-nowrap [font-style:var(--heading-h7-font-style)]">
                                      {appointment.date}
                                    </div>
                                  </div>

                                  <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-black text-[length:var(--heading-h6-font-size)] text-right tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                                      {appointment.professional}
                                    </div>

                                    <div className="relative w-fit font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-black text-[length:var(--paragraph-p2-semi-bold-font-size)] text-right tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                                      {appointment.treatment}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col w-[125px] items-start gap-1 relative">
                                <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                                  <MapPinIcon className="relative w-6 h-6" />
                                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-xs tracking-[0] leading-5">
                                    {appointment.address}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                                  <PhoneIcon className="relative w-6 h-6" />
                                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-black text-xs text-right tracking-[0] leading-5 whitespace-nowrap">
                                    {appointment.phone}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-start justify-end gap-3 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                                <Button
                                  variant="ghost"
                                  className="inline-flex flex-col justify-center gap-4 px-4 py-2 flex-[0_0_auto] bg-primary-100 rounded-3xl items-center relative h-auto hover:bg-primary-100"
                                  onClick={handleAnularCitaClick}
                                >
                                  <div className="relative w-fit font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-800 text-[length:var(--paragraph-p1-semi-bold-font-size)] text-right tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                    Anular cita
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};