import { CalendarIcon, FilterIcon, MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AdvancedFiltersModal } from "../../../../components/AdvancedFiltersModal";
import { CalendarModal } from "../../../../components/CalendarModal";
import { TimeSelectionModal } from "../../../../components/TimeSelectionModal";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = React.useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = React.useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const timeButtonRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const formatDate = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return "Hoy";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Mañana";
    } else {
      return date.toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'short' 
      });
    }
  };

  const getDisplayDate = () => {
    if (selectedDate) {
      return formatDate(selectedDate);
    }
    return "Fecha";
  };

  const handleSearchClick = () => {
    navigate('/service-selection');
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Card className="flex flex-col items-center justify-center gap-8 px-16 py-28 relative bg-primary-100 rounded-3xl overflow-hidden shadow-shadow-sm w-full max-w-[1384px] mx-auto mt-32">
      <CardContent className="flex flex-col items-center gap-8 p-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="w-full max-w-[740px] mt-[-1.00px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Rg',Helvetica] font-normal text-primary-900 text-[52px] text-center tracking-[0] leading-[57.2px]">
            Sistema de Agendamiento y Asistencia Clínica de Acupuntura
          </h1>

          <h2 className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-primary-900 text-[length:var(--subtitle-1-font-size)] text-center tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] whitespace-nowrap [font-style:var(--subtitle-1-font-style)]">
            Acured Gestión y Tecnología para la Medicina China
          </h2>
        </div>

        {/* Updated Search Bar */}
        <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-[200px] shadow-shadow-sm">
          <div
  className="flex items-center gap-2 px-4 py-2 bg-white rounded-3xl border border-solid border-[#dcdce2] w-80 cursor-pointer"
  onClick={handleSearchClick}
>
  <SearchIcon className="w-5 h-5 text-primary-900 flex-shrink-0" />
  <span className="font-paragraph-p2-semi-bold text-primary-900 leading-normal">
    Profesional, centro o servicio
  </span>
</div>


          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-3xl border border-solid border-[#dcdce2] w-60">
            <MapPinIcon className="w-5 h-5 text-primary-900 flex-shrink-0" />
            <span className="font-paragraph-p2-semi-bold text-primary-900 leading-normal">
              Ubicación
            </span>
          </div>


          <div
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-3xl border border-solid border-[#dcdce2] w-40 cursor-pointer"
            onClick={() => setIsCalendarModalOpen(true)}
          >
            <CalendarIcon className="w-5 h-5 text-primary-900 flex-shrink-0" />
            <span className="font-paragraph-p2-semi-bold text-primary-900 leading-normal">
              {getDisplayDate()}
            </span>
          </div>


          <Button
            ref={timeButtonRef}
            variant="ghost"
            className="px-4 py-2 bg-primary-100 rounded-3xl"
            onClick={() => setIsTimeModalOpen(true)}
          >
            <span className="[font-family:'Inter',Helvetica] font-semibold text-primary-800 text-sm leading-5 whitespace-nowrap">
              En cualquier momento
            </span>
          </Button>

          <Button
            variant="ghost"
            className="px-4 py-2 bg-primary-100 rounded-3xl"
            onClick={() => setIsFiltersModalOpen(true)}
          >
            <FilterIcon className="w-4 h-4 mr-2" />
            <span className="[font-family:'Inter',Helvetica] font-semibold text-primary-800 text-sm leading-5 whitespace-nowrap">
              Filtros avanzados
            </span>
          </Button>

          <Button className="px-4 py-2 bg-primary-900 rounded-3xl">
            <Link to="/search-results" className="text-decoration-none">
              <span className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-neutralswhite text-sm leading-[normal]">
                Buscar
              </span>
            </Link>
          </Button>
        </div>
      </CardContent>
      </Card>

      <AdvancedFiltersModal
        isOpen={isFiltersModalOpen}
        onClose={() => setIsFiltersModalOpen(false)}
      />

      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate || undefined}
      />

      <TimeSelectionModal
        isOpen={isTimeModalOpen}
        onClose={() => setIsTimeModalOpen(false)}
        buttonRef={timeButtonRef}
      />
    </>
  );
};
