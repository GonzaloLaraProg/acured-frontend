import { CalendarIcon, PlusIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Avatar } from "../../../../../../components/ui/avatar";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { AppointmentModal } from "../../components/AppointmentModal";

interface ScheduleSectionProps {
  onTabChange?: (tab: 'services' | 'calendar' | 'policy') => void;
}

export const ScheduleSection = ({ onTabChange }: ScheduleSectionProps): JSX.Element => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // Data for the days of the week
  const weekDays = [
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SÁBADO",
    "DOMINGO",
  ];

  // Staff data with their schedules
  const staffMembers = [
    {
      id: 1,
      avatar: "/img.svg",
      schedules: [
        [
          { start: "09", end: "13" },
          { start: "14", end: "19" },
        ],
        [
          { start: "09", end: "13" },
          { start: "14", end: "16" },
          { start: "17", end: "19" },
        ],
        [{ start: "00", end: "00" }],
        [{ start: "00", end: "00" }],
        [{ start: "00", end: "00" }],
        [{ start: "00", end: "00" }],
        [{ start: "00", end: "00" }],
      ],
    },
    {
      id: 2,
      avatar: "/img-3.svg",
      schedules: Array(7).fill([{ start: "00", end: "00" }]),
    },
    {
      id: 3,
      avatar: "/img-5.svg",
      schedules: Array(7).fill([{ start: "00", end: "00" }]),
    },
    {
      id: 4,
      avatar: "/img-2.svg",
      schedules: Array(7).fill([{ start: "00", end: "00" }]),
    },
    {
      id: 5,
      avatar: "/img-1.svg",
      schedules: Array(7).fill([{ start: "00", end: "00" }]),
    },
  ];

  // Action buttons data
  const actionButtons = [
    { label: "Fechas de cierre", primary: true },
    { label: "Horario vacaciones", primary: false },
    { label: "Añadir Profesional", primary: false },
  ];

  const handleTabClick = (tab: 'services' | 'calendar' | 'policy') => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const handleFechasCierreClick = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <>
      <section className="flex flex-col items-start gap-6 px-8 py-6 relative flex-1 self-stretch grow">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
        {/* Tabs Navigation */}
        <div className="inline-flex items-start gap-3 relative border-b border-shadow-100 w-full">
          <div className="w-full">
            <div className="flex items-start gap-8 relative border-b border-shadow-100 w-full bg-transparent h-auto p-0 justify-start">
              <div className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden border-b-2 border-primary-800 rounded-none whitespace-nowrap transition-all duration-200">
                <span className="text-sm text-primary-800 font-semibold">
                  Calendario y horarios
                </span>
                <CalendarIcon className="w-4 h-4 text-primary-800" />
              </div>

              <div 
                className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                onClick={() => handleTabClick('services')}
              >
                <span className="text-sm text-shadow-600 hover:text-primary-800">
                  Servicios o tratamientos
                </span>
                <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
              </div>

              <div 
                className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                onClick={() => handleTabClick('policy')}
              >
                <span className="text-sm text-shadow-600 hover:text-primary-800">
                  Política de cancelación y pago
                </span>
                <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
              </div>
            </div>
          </div>
        </div>

        <header className="flex items-center justify-between relative self-stretch w-full bg-transparent">
          <h2 className="text-heading-lg text-primary-900 font-semibold">
            Horarios
          </h2>

          <div className="inline-flex items-center gap-3 relative self-stretch">
            {actionButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.primary ? "default" : "outline"}
                className={`gap-2 rounded-3xl ${
                  button.primary
                    ? "bg-primary-800 shadow-shadow-md"
                    : "bg-neutralswhite shadow-shadow-xs"
                }`}
                onClick={button.label === "Fechas de cierre" ? handleFechasCierreClick : undefined}
              >
                <span
                  className={`font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] [font-style:var(--text-text-xs-text-xs-font-medium-font-style)] ${
                    button.primary ? "text-neutralswhite" : "text-primary-800"
                  }`}
                >
                  {button.label}
                </span>
                <PlusIcon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </header>

        {/* Schedule Card */}
        <Card className="w-full shadow-shadow-base">
          <CardContent className="p-6">
            <div className="flex flex-col items-start relative w-full">
              {/* Days of the week header */}
              <div className="inline-flex items-start pl-10 pr-0 py-0 relative w-full">
                {weekDays.map((day, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[144.57px] items-center pt-1 pb-4 px-2"
                  >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-900 text-[10px] tracking-[0] leading-3 whitespace-nowrap text-center">
                      {day}
                    </div>
                  </div>
                ))}
              </div>

              {/* Staff schedules */}
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                {staffMembers.map((staff, staffIndex) => (
                  <div
                    key={staffIndex}
                    className="flex items-center relative self-stretch w-full"
                  >
                    <Avatar className="w-10 h-10">
                      <img
                        className="w-full h-full object-cover"
                        alt={`Staff member ${staff.id}`}
                        src={staff.avatar}
                      />
                    </Avatar>

                    <div className="flex items-center relative flex-1 grow">
                      {staff.schedules.map((daySchedules, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`flex flex-col items-start gap-2.5 px-3 py-0 relative flex-1 grow ${
                            dayIndex < 6 ? "border-r border-[#dcdce2]" : ""
                          }`}
                        >
                          {daySchedules.map((schedule, scheduleIndex) => (
                            <div
                              key={scheduleIndex}
                              className="flex items-center justify-center gap-3 px-3 py-2 relative self-stretch w-full bg-primary-50 rounded h-9"
                            >
                              <div className="w-fit font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                {schedule.start}
                              </div>
                              <div className="w-fit font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                -
                              </div>
                              <div className="w-fit font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                {schedule.end}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
      />
    </>
  );
};