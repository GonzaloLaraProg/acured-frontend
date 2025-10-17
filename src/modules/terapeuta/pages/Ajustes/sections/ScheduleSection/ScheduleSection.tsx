import { CalendarIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../../../components/ui/avatar";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../../../components/ui/tabs";

interface ScheduleSectionProps {
  onTabChange?: (tab: 'services' | 'calendar' | 'policy') => void;
}

export const ScheduleSection = ({ onTabChange }: ScheduleSectionProps): JSX.Element => {
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

  // Data for the schedule slots
  const scheduleData = {
    monday: [
      { start: "09", end: "13" },
      { start: "14", end: "19" },
    ],
    tuesday: [
      { start: "09", end: "13" },
      { start: "14", end: "16" },
      { start: "17", end: "19" },
    ],
    wednesday: [{ start: "00", end: "00" }],
    thursday: [{ start: "00", end: "00" }],
    friday: [{ start: "00", end: "00" }],
    saturday: [{ start: "00", end: "00" }],
    sunday: [{ start: "00", end: "00" }],
  };

  const handleTabClick = (tab: 'services' | 'calendar' | 'policy') => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <section className="flex flex-col items-start gap-6 px-8 py-6 relative flex-1 self-stretch grow">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
        {/* Tabs Navigation */}
        <div className="inline-flex items-start gap-3 relative border-b border-shadow-100 w-full">
          <div className="w-full">
            <div className="flex items-start gap-8 relative border-b border-shadow-100 w-full bg-transparent h-auto p-0 justify-start">
              <div 
                className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                onClick={() => handleTabClick('services')}
              >
                <span className="text-sm text-shadow-600 hover:text-primary-800">
                  Servicios o tratamientos
                </span>
                <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
              </div>

              <div className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden border-b-2 border-primary-800 rounded-none whitespace-nowrap transition-all duration-200">
                <span className="text-sm text-primary-800 font-semibold">
                  Calendario y horarios
                </span>
                <CalendarIcon className="w-4 h-4 text-primary-800" />
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

          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className="bg-primary-500 hover:bg-primary-600 text-white rounded-3xl shadow-md flex items-center gap-3 px-6 py-3 transition-all duration-200"
            >
              <span className="text-sm font-medium">
                Fechas de cierre
              </span>
              <PlusIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="bg-white hover:bg-primary-50 text-primary-500 border-primary-200 hover:border-primary-300 rounded-3xl shadow-xs flex items-center gap-3 px-6 py-3 transition-all duration-200"
            >
              <span className="text-sm font-medium">
                Horario vacaciones
              </span>
              <PlusIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="bg-white hover:bg-primary-50 text-primary-500 border-primary-200 hover:border-primary-300 rounded-3xl shadow-xs flex items-center gap-3 px-6 py-3 transition-all duration-200"
            >
              <span className="text-sm font-medium">
                Añadir Profesional
              </span>
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <Card className="border border-shadow-100 shadow-sm rounded-xl overflow-hidden w-full">
          <CardContent className="p-8">
            <div className="flex flex-col items-start gap-8 w-full">
              <div className="flex flex-col items-start w-full">
                {/* Days of the week header */}
                <div className="inline-flex items-start pl-12 pr-0 py-0 w-full">
                  {weekDays.map((day, index) => (
                    <div
                      key={`day-${index}`}
                      className="flex flex-col w-[144.57px] items-center pt-3 pb-6 px-4"
                    >
                      <div className="text-body-md font-bold text-primary-900 tracking-wide uppercase text-center">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Schedule rows */}
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex items-start w-full min-h-[120px]">
                    <Avatar className="w-12 h-12 border-2 border-primary-100">
                      <img
                        src="/ava.svg"
                        alt="Profile"
                        className="object-cover"
                      />
                    </Avatar>

                    <div className="flex items-start flex-1 ml-4 min-h-[120px]">
                      {/* Monday */}
                      <div className="border-r border-shadow-100 flex flex-col items-start gap-3 px-4 py-0 flex-1 min-h-[120px]">
                        {scheduleData.monday.map((slot, index) => (
                          <div
                            key={`monday-${index}`}
                            className="flex items-center justify-center gap-3 px-4 py-3 w-full bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.start}
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              -
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.end}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tuesday */}
                      <div className="border-r border-shadow-100 flex flex-col items-start gap-3 px-4 py-0 flex-1 min-h-[120px]">
                        {scheduleData.tuesday.map((slot, index) => (
                          <div
                            key={`tuesday-${index}`}
                            className="flex items-center justify-center gap-3 px-4 py-3 w-full bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.start}
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              -
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.end}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Wednesday */}
                      <div className="border-r border-shadow-100 flex flex-col items-start gap-3 px-4 py-0 flex-1 min-h-[120px]">
                        {scheduleData.wednesday.map((slot, index) => (
                          <div
                            key={`wednesday-${index}`}
                            className="flex h-12 items-center justify-center gap-3 px-4 py-0 w-full bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.start}
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              -
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.end}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Thursday */}
                      <div className="border-r border-shadow-100 flex flex-col items-start gap-3 px-4 py-0 flex-1 min-h-[120px]">
                        {scheduleData.thursday.map((slot, index) => (
                          <div
                            key={`thursday-${index}`}
                            className="flex h-12 items-center justify-center gap-3 px-4 py-0 w-full bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.start}
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              -
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.end}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Friday */}
                      <div className="border-r border-shadow-100 flex flex-col items-start gap-3 px-4 py-0 flex-1 min-h-[120px]">
                        {scheduleData.friday.map((slot, index) => (
                          <div
                            key={`friday-${index}`}
                            className="flex h-12 items-center justify-center gap-3 px-4 py-0 w-full bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.start}
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              -
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.end}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Saturday */}
                      <div className="border-r border-shadow-100 flex flex-col items-start gap-3 px-4 py-0 flex-1 min-h-[120px]">
                        {scheduleData.saturday.map((slot, index) => (
                          <div
                            key={`saturday-${index}`}
                            className="flex h-12 items-center justify-center gap-3 px-4 py-0 w-full bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.start}
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              -
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.end}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Sunday */}
                      <div className="flex flex-col items-start gap-3 px-4 py-0 flex-1 min-h-[120px]">
                        {scheduleData.sunday.map((slot, index) => (
                          <div
                            key={`sunday-${index}`}
                            className="flex h-12 items-center justify-center gap-3 px-4 py-0 w-full bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200 cursor-pointer"
                          >
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.start}
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              -
                            </span>
                            <span className="text-body-md font-semibold text-primary-900">
                              {slot.end}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};