import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string | null>(null);
  const navigate = useNavigate();

  // Breadcrumb steps data
  const breadcrumbSteps = [
    { label: "Selección Servicio", active: false },
    { label: "Selección Servicio", active: false },
    { label: "Selección Horario", active: true },
    { label: "Confirmación y pago", active: false },
  ];

  // Days of the week
  const daysOfWeek = [
    { name: "Lunes", date: "00" },
    { name: "Martes", date: "00" },
    { name: "Miercoles", date: "00" },
    { name: "Jueves", date: "00" },
    { name: "Viernes", date: "00" },
  ];

  // Time slots for each day
  const timeSlots = [
    "09:00 AM - 09:45 AM",
    "09:00 AM - 09:45 AM",
    "09:00 AM - 09:45 AM",
    "09:00 AM - 09:45 AM",
    "09:00 AM - 09:45 AM",
    "09:00 AM - 09:45 AM",
    "09:00 AM - 09:45 AM",
    "09:00 AM - 09:45 AM",
  ];

  // Social media links
  const socialLinks = [
    { name: "Instagram", icon: <InstagramIcon className="w-5 h-5" /> },
    { name: "Facebook", icon: <FacebookIcon className="w-5 h-5" /> },
    { name: "Lindkedin", icon: <LinkedinIcon className="w-5 h-5" /> },
  ];

  const handleTimeSlotClick = (dayIndex: number, slotIndex: number) => {
    const slotId = `${dayIndex}-${slotIndex}`;
    setSelectedTimeSlot(slotId);
  };

  const isSlotSelected = (dayIndex: number, slotIndex: number) => {
    return selectedTimeSlot === `${dayIndex}-${slotIndex}`;
  };

  const isSlotUnavailable = (dayIndex: number, slotIndex: number) => {
    // Make some slots unavailable for Miercoles (index 2)
    return dayIndex === 2 && (slotIndex === 2 || slotIndex === 3);
  };

  const handleScheduleAppointment = () => {
    navigate('/confirmation-payment');
  };

  return (
    <section className="flex flex-col items-start gap-6 pt-24 pb-0 px-24 relative w-full">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-4 py-1 w-full">
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
      <h1 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-primary-900 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
        Seleccionar horario
      </h1>

      {/* Professional card */}
      <Card className="w-full border border-solid border-[#dcdce2] shadow-shadow-sm rounded-lg bg-white">
        <CardContent className="flex p-0 h-[164px]">
          <div className="w-[166px] h-full">
            <img
              className="h-full w-full object-cover rounded-l-lg"
              alt="Professional"
              src="/9ed8871431e38c555a92361057be591190379d9c.jpg"
            />
          </div>

          <div className="flex flex-1 p-6">
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex flex-col w-[317px] gap-2">
                <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  Profesional
                </h6>
                <p className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Especialidad
                </p>
                <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                  Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[312px] gap-3">
              <h6 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Descripción del servicio
              </h6>

              <p className="w-[279px] font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
              </p>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((link, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex gap-2 items-center rounded-3xl bg-transparent border-shadow-800"
                  >
                    <span className="font-semibold text-shadow-800 text-sm leading-5 [font-family:'Inter',Helvetica]">
                      {link.name}
                    </span>
                    {link.icon}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 w-[120px]">
              <div className="flex items-center gap-2.5">
                <MapPinIcon className="w-5 h-5 text-primary-900" />
                <span className="font-normal text-primary-900 text-xs leading-5 [font-family:'Inter',Helvetica]">
                  Dirección
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <VideoIcon className="w-5 h-5 text-primary-900" />
                <span className="font-normal text-primary-900 text-xs leading-5 [font-family:'Inter',Helvetica]">
                  Modalidad
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <ClockIcon className="w-5 h-5 text-primary-900" />
                <span className="font-normal text-primary-900 text-xs leading-5 [font-family:'Inter',Helvetica]">
                  Duración
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule section */}
      {/* Schedule container with rounded border */}
      <Card className="w-full rounded-xl p-6 mb-8 shadow-lg bg-white">
        <CardContent className="p-0">
          {/* Week navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" className="p-2">
              <ChevronLeftIcon className="w-5 h-5 text-primary-900" />
            </Button>
            
            <div className="grid grid-cols-5 flex-1">
              {daysOfWeek.map((day, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                    {day.name}
                  </span>
                  <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    {day.date}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="p-2">
              <ChevronRightIcon className="w-5 h-5 text-primary-900" />
            </Button>
          </div>

          {/* Time slots grid */}
          <div className="grid grid-cols-5 gap-4">
            {daysOfWeek.map((day, dayIndex) => (
              <div key={dayIndex} className="flex flex-col gap-1">
                {timeSlots.map((slot, slotIndex) => {
                  const isSelected = isSlotSelected(dayIndex, slotIndex);
                  const isUnavailable = isSlotUnavailable(dayIndex, slotIndex);
                  
                  return (
                    <button
                      key={slotIndex}
                      disabled={isUnavailable}
                      onClick={() => handleTimeSlotClick(dayIndex, slotIndex)}
                      className={`h-auto py-2 px-3 text-xs border-none rounded-md text-center flex items-center justify-center ${
                        isSelected 
                          ? "bg-primary-900 text-white" 
                          : isUnavailable
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-primary-900 hover:bg-primary-200"
                      }`}
                    >
                      <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                        {slot}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          className="px-6 py-2 bg-primary-100 text-primary-800 rounded-3xl border-none hover:bg-primary-200"
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Volver
          </span>
        </Button>

        <Button 
          className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          disabled={!selectedTimeSlot}
          onClick={handleScheduleAppointment}
        >
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Agendar Hora
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};