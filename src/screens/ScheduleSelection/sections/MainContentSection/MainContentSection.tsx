import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  MapPinIcon,
  PhoneIcon,
  InfoIcon,
  X,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CancellationPolicyModal } from "../../../../components/CancellationPolicyModal";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string>("0-0"); // First slot selected by default
  const [currentMonth, setCurrentMonth] = React.useState("Agosto");
  const [currentYear, setCurrentYear] = React.useState("2025");
  const [isCancellationPolicyOpen, setIsCancellationPolicyOpen] = React.useState(false);
  const [dismissedMessages, setDismissedMessages] = React.useState<number[]>([]);
  const navigate = useNavigate();

  // Breadcrumb steps data
  const breadcrumbSteps = [
    { label: "Selección tratamiento", active: false },
    { label: "Selección Horario", active: true },
    { label: "Inicia sesión", active: false },
    { label: "Confirmación y pago", active: false },
  ];

  // Days of the week with dates
  const daysOfWeek = [
    { name: "Martes", date: "00", active: true },
    { name: "Miércoles", date: "00", active: false },
    { name: "Jueves", date: "00", active: false },
    { name: "Viernes", date: "00", active: false },
    { name: "Lunes", date: "00", active: false },
  ];

  // Time slots for each day
  const getTimeSlotsForDay = (dayIndex: number) => {
    if (dayIndex === 0) { // Martes - first slot selected, some available
      return [
        { time: "08:00 AM", available: true, selected: true },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
      ];
    } else if (dayIndex === 1) { // Miércoles - all available
      return [
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
      ];
    } else if (dayIndex === 2) { // Jueves - all unavailable (dashes)
      return [
        { time: "—", available: false, selected: false },
        { time: "—", available: false, selected: false },
        { time: "—", available: false, selected: false },
        { time: "—", available: false, selected: false },
        { time: "—", available: false, selected: false },
        { time: "—", available: false, selected: false },
        { time: "—", available: false, selected: false },
        { time: "—", available: false, selected: false },
      ];
    } else if (dayIndex === 3) { // Viernes - all available
      return [
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
      ];
    } else { // Lunes - all available
      return [
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
        { time: "09:00 AM", available: true, selected: false },
      ];
    }
  };

  const handleTimeSlotClick = (dayIndex: number, slotIndex: number) => {
    const slots = getTimeSlotsForDay(dayIndex);
    if (slots[slotIndex].available) {
      setSelectedTimeSlot(`${dayIndex}-${slotIndex}`);
    }
  };

  const isSlotSelected = (dayIndex: number, slotIndex: number) => {
    return selectedTimeSlot === `${dayIndex}-${slotIndex}`;
  };

  const handleScheduleAppointment = () => {
    navigate('/login-registration');
  };

  const handleDismissMessage = (messageIndex: number) => {
    setDismissedMessages(prev => [...prev, messageIndex]);
  };
  return (
    <>
      <div className="min-h-screen bg-primary-50">
      {/* Main content container */}
      <div className="pt-32 px-16 pb-16 max-w-[1384px] mx-auto">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-4 py-1 mb-8">
          {breadcrumbSteps.map((step, index) => (
            <div
              key={`step-${index}`}
              className={`inline-flex items-center gap-1 ${step.active ? "" : "opacity-25"}`}
            >
              <span
                className={`text-xs ${step.active ? "font-semibold" : "font-medium"} text-shadow-800 leading-[18px] [font-family:'Inter',Helvetica]`}
              >
                {step.label}
              </span>
              {index < breadcrumbSteps.length - 1 && (
                <ChevronRightIcon className="w-4 h-4 text-shadow-800" />
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-[32px] font-normal text-primary-900 mb-6 [font-family:'Neue_Haas_Grotesk_Display_Pro',Helvetica]">
          Seleccionar horario
        </h1>

        {/* Professional card */}
        <Card className="w-full bg-white border border-gray-200 shadow-sm rounded-lg mb-6">
          <CardContent className="flex p-6 gap-6">
            {/* Professional Image */}
            <div className="w-[200px] h-[150px] flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-l-lg"
                alt="Professional"
                src="/profesional.jpg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex justify-between">
              {/* Left section - Professional info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium text-black mb-4">
                    Profesional
                  </h3>
                </div>
              </div>

              {/* Middle section - Service details */}
              <div className="flex flex-col justify-between flex-1 px-6">
                <div>
                  <h4 className="text-sm font-semibold text-black mb-1">
                    Sesión de "(nombre del servicio)"
                  </h4>
                  <p className="text-xs text-black mb-1">Duración</p>
                  <p className="text-xs text-black">Modalidad</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-black">$0 CLP</p>
                </div>
              </div>

              {/* Right section - Contact info */}
              <div className="flex flex-col gap-1 w-[200px] flex-shrink-0">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-xs text-black underline">
                    Antonio varas 320, Providencia
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4 text-gray-600" />
                  <span className="text-xs text-black">Teléfono</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cancellation Policy Messages */}
        <div className="space-y-4 mb-6">
          {/* First message */}
          {!dismissedMessages.includes(0) && (
            <div className="flex items-center gap-3 p-4 bg-primary-100 rounded-lg border border-primary-200">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <InfoIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-primary-900">
                  Las citas agendadas con menos de "X" horas de antelación, no son reembolsables.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsCancellationPolicyOpen(true)}
                  className="text-sm text-primary-900 underline hover:no-underline"
                >
                  Ver política de cancelación
                </button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDismissMessage(0)}
                  className="p-1 hover:bg-primary-200"
                >
                  <X className="w-4 h-4 text-primary-700" />
                </Button>
              </div>
            </div>
          )}

          {/* Second message */}
          {!dismissedMessages.includes(1) && (
            <div className="flex items-center gap-3 p-4 bg-primary-100 rounded-lg border border-primary-200">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <InfoIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-primary-900">
                  Las citas agendadas con menos de "X" horas de antelación, no son 100% reembolsables.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsCancellationPolicyOpen(true)}
                  className="text-sm text-primary-900 underline hover:no-underline"
                >
                  Ver política de cancelación
                </button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDismissMessage(1)}
                  className="p-1 hover:bg-primary-200"
                >
                  <X className="w-4 h-4 text-primary-700" />
                </Button>
              </div>
            </div>
          )}
        </div>
        {/* Schedule Section */}
        <Card className="w-full bg-white shadow-shadow-sm rounded-xl">
          <CardContent className="p-8">
            {/* Month selector */}
            <div className="flex justify-center items-center mb-8 gap-8">
              <Button variant="ghost" className="p-1">
                <ChevronLeftIcon className="w-4 h-4 text-primary-900" />
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-3xl"
              >
                <span className="text-xs font-semibold text-black">
                  Agosto 2025
                </span>
                <ChevronDownIcon className="w-4 h-4 text-gray-600" />
              </Button>

              <Button variant="ghost" className="p-1">
                <ChevronRightIcon className="w-4 h-4 text-gray-600" />
              </Button>
            </div>

            {/* Days header */}
            <div className="flex justify-center items-center mb-4 gap-4">
              <Button variant="ghost" className="p-2">
                <ChevronLeftIcon className="w-4 h-4 text-primary-900" />
              </Button>

              <div className="grid grid-cols-5 gap-6 flex-1 max-w-[800px]">
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className="text-center py-2"
                  >
                    <span className={`text-base ${day.active ? 'font-semibold' : 'font-normal'} text-black`}>
                      {day.name} {day.date}
                    </span>
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="p-2">
                <ChevronRightIcon className="w-4 h-4 text-gray-600" />
              </Button>
            </div>

            {/* Time slots grid */}
            <div className="flex justify-center">
              <div className="w-4"></div> {/* Space for left arrow */}
              
              <div className="grid grid-cols-5 gap-6 flex-1 max-w-[800px]">
                {daysOfWeek.map((day, dayIndex) => (
                  <div key={dayIndex} className="flex flex-col gap-2">
                    {/* Highlight background for first column (Martes) */}
                    {dayIndex === 0 && (
                      <div className="absolute bg-primary-50 rounded-lg -ml-2 -mt-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -z-10"></div>
                    )}
                    
                    {getTimeSlotsForDay(dayIndex).map((slot, slotIndex) => {
                      const isSelected = isSlotSelected(dayIndex, slotIndex);
                      const isUnavailable = !slot.available;
                      const isDash = slot.time === "—";
                      
                      if (isDash) {
                        return (
                          <div
                            key={slotIndex}
                            className="flex justify-center items-center py-3 px-4 h-12 text-center"
                          >
                            <span className="text-sm text-gray-400">—</span>
                          </div>
                        );
                      }
                      
                      return (
                        <button
                          key={slotIndex}
                          onClick={() => handleTimeSlotClick(dayIndex, slotIndex)}
                          disabled={isUnavailable}
                          className={`py-3 px-4 h-12 rounded-lg text-sm font-semibold transition-colors ${
                            isSelected 
                              ? "bg-primary-800 text-white" 
                              : dayIndex === 0
                              ? "bg-primary-100 text-primary-900 hover:bg-primary-200"
                              : "bg-primary-100 text-primary-900 hover:bg-primary-200"
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="w-4"></div> {/* Space for right arrow */}
            </div>

            {/* Action buttons */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="ghost"
                className="flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-3xl"
              >
                <ChevronLeftIcon className="w-4 h-4 text-primary-800" />
                <span className="text-sm font-semibold text-primary-800">
                  Volver
                </span>
              </Button>

              <Button 
                className="flex items-center gap-2 px-4 py-2 bg-primary-900 rounded-3xl hover:bg-primary-800"
                onClick={handleScheduleAppointment}
              >
                <span className="text-sm font-semibold text-white">
                  Agendar hora
                </span>
                <ChevronRightIcon className="w-4 h-4 text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>

      <CancellationPolicyModal
        isOpen={isCancellationPolicyOpen}
        onClose={() => setIsCancellationPolicyOpen(false)}
      />
    </>
  );
};