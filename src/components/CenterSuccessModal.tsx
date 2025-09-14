import { CalendarIcon, ChevronRightIcon, MapPinIcon, PhoneIcon, PlusIcon, VideoIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarSuccessModal } from "./CalendarSuccessModal";
import { Button } from "./ui/button";

interface CenterSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CenterSuccessModal: React.FC<CenterSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const [showCalendarSuccess, setShowCalendarSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handleBackToHome = () => {
    navigate('/');
    onClose();
  };

  const handleAddToCalendar = () => {
    setShowCalendarSuccess(true);
  };

  const handleCalendarSuccessClose = () => {
    setShowCalendarSuccess(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-[40] flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[500px] mx-4 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-normal text-primary-900 mb-3">
              ¡Tu cita ha sido reservada con éxito!
            </h2>
            <p className="text-base text-gray-600">
              Recibirás un email de confirmación y recordatorios antes de la cita.
            </p>
          </div>

          {/* Center section with building icon */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
            <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Centro
            </span>
          </div>

          {/* Professional section with user icon */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
              Profesional
            </span>
          </div>

          {/* Appointment details */}
          <div className="space-y-4 mb-8 flex flex-col items-center">
            <div className="flex items-center gap-3 justify-center">
              <PlusIcon className="w-5 h-5 text-gray-500" />
              <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Tratamiento
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <VideoIcon className="w-5 h-5 text-gray-500" />
              <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Modalidad
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
              <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Fecha y hora
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <MapPinIcon className="w-5 h-5 text-gray-500" />
              <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Dirección
              </span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Teléfono
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline"
              className="px-4 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 border-0"
              onClick={handleBackToHome}
            >
              <span className="font-medium text-sm">
                Volver a la página de inicio
              </span>
            </Button>

            <Button 
              variant="ghost"
              className="flex items-center gap-2 text-primary-900 hover:bg-primary-100 px-4 py-2 rounded-3xl border border-gray-300"
              onClick={handleAddToCalendar}
            >
              <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Añadir cita a tu calendario
              </span>
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CalendarSuccessModal
        isOpen={showCalendarSuccess}
        onClose={handleCalendarSuccessClose}
      />
    </>
  );
};