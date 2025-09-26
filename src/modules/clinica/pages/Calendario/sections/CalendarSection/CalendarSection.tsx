import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../../../components/ui/toggle-group";
import { PatientInformationSection } from "../../components/PatientInformationSection";
import { ProfessionalSelectionModal } from "../../components/ProfessionalSelectionModal";
import { TreatmentSelectionModal } from "../../components/TreatmentSelectionModal";
import { SummaryModal } from "../../components/SummaryModal";

export const CalendarSection = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<string>("semana");
  const [isPatientInformationOpen, setIsPatientInformationOpen] = useState(false);
  const [isProfessionalSelectionOpen, setIsProfessionalSelectionOpen] = useState(false);
  const [isTreatmentSelectionOpen, setIsTreatmentSelectionOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);

  // Calendar data
  const days = [
    { name: "LUNES", number: "21", isActive: false },
    { name: "MARTES", number: "22", isActive: false },
    { name: "MIERCOLES", number: "23", isActive: false },
    { name: "JUEVES", number: "24", isActive: false },
    { name: "VIERNES", number: "25", isActive: true },
    { name: "SÁBADO", number: "26", isActive: false },
    { name: "DOMINGO", number: "27", isActive: false },
  ];

  const timeSlots = [
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
  ];

  // Month calendar data with updated colors
  const monthDays = [
    // Week 1
    { day: "01", dayName: "LUNES", appointments: [] },
    { day: "02", dayName: "MARTES", appointments: [
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F7F2F8]", textColor: "text-[#45334C]", borderColor: "border-l-[#45334C]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
    ]},
    { day: "03", dayName: "MIERCOLES", appointments: [
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F7F2F8]", textColor: "text-[#45334C]", borderColor: "border-l-[#45334C]" },
    ]},
    { day: "04", dayName: "JUEVES", appointments: [
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F7F2F8]", textColor: "text-[#45334C]", borderColor: "border-l-[#45334C]" },
    ]},
    { day: "05", dayName: "VIERNES", appointments: [] },
    { day: "06", dayName: "SÁBADO", appointments: [] },
    { day: "07", dayName: "DOMINGO", appointments: [] },
    
    // Week 2
    { day: "08", dayName: "LUNES", appointments: [] },
    { day: "09", dayName: "MARTES", appointments: [] },
    { day: "10", dayName: "MIERCOLES", appointments: [
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F7F2F8]", textColor: "text-[#45334C]", borderColor: "border-l-[#45334C]" },
    ]},
    { day: "11", dayName: "JUEVES", appointments: [
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F7F2F8]", textColor: "text-[#45334C]", borderColor: "border-l-[#45334C]" },
    ]},
    { day: "12", dayName: "VIERNES", appointments: [] },
    { day: "13", dayName: "SÁBADO", appointments: [] },
    { day: "14", dayName: "DOMINGO", appointments: [] },
    
    // Week 3
    { day: "15", dayName: "LUNES", appointments: [] },
    { day: "16", dayName: "MARTES", appointments: [] },
    { day: "17", dayName: "MIERCOLES", appointments: [] },
    { day: "18", dayName: "JUEVES", appointments: [] },
    { day: "19", dayName: "VIERNES", appointments: [
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F7F2F8]", textColor: "text-[#45334C]", borderColor: "border-l-[#45334C]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
      { title: "Título", time: "11a.m.", bgColor: "bg-[#F1F4F2]", textColor: "text-[#2E3D33]", borderColor: "border-l-[#2E3D33]" },
    ]},
    { day: "20", dayName: "SÁBADO", appointments: [] },
    { day: "21", dayName: "DOMINGO", appointments: [] },
    
    // Week 4
    { day: "22", dayName: "LUNES", appointments: [] },
    { day: "23", dayName: "MARTES", appointments: [] },
    { day: "24", dayName: "MIERCOLES", appointments: [] },
    { day: "25", dayName: "JUEVES", appointments: [] },
    { day: "26", dayName: "VIERNES", appointments: [] },
    { day: "27", dayName: "SÁBADO", appointments: [] },
    { day: "28", dayName: "DOMINGO", appointments: [] },
  ];

  // Week appointments data with updated colors
  const weekAppointments = [
    {
      day: 2, // Wednesday (index 2)
      timeSlot: 1, // 9 AM (index 1)
      bgColor: "bg-[#F1F4F2]",
      borderColor: "border-l-[#2E3D33]",
      textColor: "text-[#2E3D33]",
      time: "Hora",
      period: "AM",
      description: "Descripción",
      iconBg: "bg-[#2E3D33]",
      iconColor: "text-white",
      spans: 1, // 1 hour
    },
    {
      day: 2, // Wednesday (index 2)
      timeSlot: 5, // 1 PM (index 5)
      bgColor: "bg-[#F1F4F2]",
      borderColor: "border-l-[#2E3D33]",
      textColor: "text-[#2E3D33]",
      time: "Hora",
      period: "PM",
      description: "Descripción",
      iconBg: "bg-[#2E3D33]",
      iconColor: "text-white",
      spans: 1, // 1 hour
    },
    {
      day: 3, // Thursday (index 3)
      timeSlot: 3, // 11 AM (index 3)
      bgColor: "bg-[#F7F2F8]",
      borderColor: "border-l-[#45334C]",
      textColor: "text-[#45334C]",
      time: "Hora",
      period: "AM",
      description: "Descripción",
      iconBg: "bg-[#45334C]",
      iconColor: "text-white",
      spans: 1, // 1 hour
    },
    {
      day: 4, // Friday (index 4)
      timeSlot: 6, // 2 PM (index 6)
      bgColor: "bg-[#F7F2F8]",
      borderColor: "border-l-[#45334C]",
      textColor: "text-[#45334C]",
      time: "Hora",
      period: "PM",
      description: "Descripción",
      iconBg: "bg-[#45334C]",
      iconColor: "text-white",
      spans: 2, // 2 PM to 4 PM = 2 hours
    },
    {
      day: 6, // Sunday (index 6)
      timeSlot: 7, // 3 PM (index 7)
      bgColor: "bg-[#6B8074]",
      borderColor: "border-l-[#6B8074]",
      textColor: "text-white",
      time: "Hora",
      period: "PM",
      description: "Descripción",
      iconBg: "bg-white",
      iconColor: "text-[#6B8074]",
      spans: 1.5, // 3 PM to 4:30 PM = 1.5 hours
    },
  ];

  // Appointment data for day view (Friday) with updated colors
  const dayAppointments = [
    {
      time: "9 AM",
      bgColor: "bg-[#F1F4F2]",
      borderColor: "border-l-[#2E3D33]",
      textColor: "text-[#2E3D33]",
      period: "AM",
      description: "Descripción",
      iconBg: "bg-[#2E3D33]",
      iconColor: "text-white",
      spans: 1,
    },
    {
      time: "11 AM",
      bgColor: "bg-[#F7F2F8]",
      borderColor: "border-l-[#45334C]",
      textColor: "text-[#45334C]",
      period: "AM",
      description: "Descripción",
      iconBg: "bg-[#45334C]",
      iconColor: "text-white",
      spans: 1,
    },
    {
      time: "2 PM",
      bgColor: "bg-[#F1F5EA]",
      borderColor: "border-l-[#43681C]",
      textColor: "text-[#43681C]",
      period: "PM",
      description: "Descripción",
      iconBg: "bg-[#43681C]",
      iconColor: "text-white",
      spans: 2, // 2 PM to 4 PM
    },
  ];

  const handleViewModeChange = (value: string) => {
    if (value) {
      setViewMode(value);
    }
  };

  const handleSchedulePatient = () => {
    setIsPatientInformationOpen(true);
  };

  const handleClosePatientInformation = () => {
    setIsPatientInformationOpen(false);
  };

  const handleContinueToAppointment = () => {
    setIsPatientInformationOpen(false);
    setIsProfessionalSelectionOpen(true);
  };

  const handleCloseProfessionalSelection = () => {
    setIsProfessionalSelectionOpen(false);
  };

  const handleBackToPatientInformation = () => {
    setIsProfessionalSelectionOpen(false);
    setIsPatientInformationOpen(true);
  };

  const handleContinueToTreatmentSelection = () => {
    setIsProfessionalSelectionOpen(false);
    setIsTreatmentSelectionOpen(true);
  };

  const handleCloseTreatmentSelection = () => {
    setIsTreatmentSelectionOpen(false);
  };

  const handleBackToProfessionalSelection = () => {
    setIsTreatmentSelectionOpen(false);
    setIsProfessionalSelectionOpen(true);
  };

  const handleContinueFromTreatmentToAppointment = () => {
    setIsTreatmentSelectionOpen(false);
    setIsSummaryModalOpen(true);
  };


  const handleCloseSummaryModal = () => {
    setIsSummaryModalOpen(false);
  };

  const handleScheduleAnother = () => {
    setIsSummaryModalOpen(false);
    setIsPatientInformationOpen(true);
  };

  const renderWeekView = () => (
    <div className="relative">
      {/* Calendar header with days */}
      <div className="flex items-start relative self-stretch w-full">
        {/* Empty space for left time column */}
        <div className="w-12 flex-shrink-0"></div>
        
        {/* Days header with border that starts after time column */}
        <div className="flex items-start relative flex-1 border-b border-gray-200">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex flex-col flex-1 items-start pt-1 pb-4 px-2 relative ${
                day.isActive ? "bg-gray-100" : "bg-white"
              } border-r border-gray-200 last:border-r-0`}
            >
              <div className="relative self-stretch mt-[-1.00px] text-body-xs font-bold text-gray-500 uppercase tracking-wider">
                {day.name}
              </div>
              <div className="relative self-stretch text-heading-lg font-medium text-gray-900">
                {day.number}
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty space for right time column */}
        <div className="w-12 flex-shrink-0"></div>
      </div>

      {/* Time slots with appointments */}
      <div className="relative">
        {timeSlots.map((time, timeIndex) => (
          <div
            key={timeIndex}
            className="flex items-start relative self-stretch w-full flex-[0_0_auto]"
          >
            {/* Left time column */}
            <div className="relative w-12 flex-shrink-0 text-body-sm font-medium text-gray-500 text-right pr-3 py-4 bg-white">
              {time}
            </div>
            
            {/* Calendar grid with border that starts after time column */}
            <div className="flex items-start relative flex-1 self-stretch border-b border-gray-200">
              {days.map((day, dayIndex) => {
                // Find appointment for this specific day and time slot
                const appointment = weekAppointments.find(
                  apt => apt.day === dayIndex && apt.timeSlot === timeIndex
                );
                
                return (
                  <div
                    key={dayIndex}
                    className={`flex flex-col flex-1 items-start relative h-[72px] ${
                      day.isActive ? "bg-gray-100" : "bg-white"
                    } border-r border-gray-200 last:border-r-0 overflow-visible`}
                  >
                    {appointment && (
                      <div
                        className={`absolute inset-0 ${appointment.bgColor} ${appointment.borderColor} border-l-4 shadow-sm hover:shadow-md transition-all duration-200 rounded-sm z-10`}
                        style={{
                          height: `${72 * appointment.spans}px`,
                          width: '100%',
                          left: '0',
                          top: '0',
                        }}
                      >
                        <div className="flex flex-col h-full items-start p-1.5 relative flex-1 grow">
                          <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                            <div
                              className={`relative w-fit text-body-sm font-semibold ${appointment.textColor}`}
                            >
                              {appointment.time}
                            </div>
                            <div
                              className={`relative w-fit text-body-sm font-semibold ${appointment.textColor}`}
                            >
                              {appointment.period}
                            </div>
                            <div
                              className={`${appointment.iconBg} inline-flex items-center justify-center p-0.5 relative flex-[0_0_auto] rounded-full`}
                            >
                              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div
                            className={`relative self-stretch text-body-sm font-semibold ${appointment.textColor}`}
                          >
                            {appointment.description}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Right time column */}
            <div className="relative w-12 flex-shrink-0 text-body-sm font-medium text-gray-500 text-left pl-3 py-4 bg-white">
              {time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDayView = () => (
    <>
      {/* Day header */}
      <div className="flex items-start relative self-stretch w-full">
        {/* Empty space for left time column */}
        <div className="w-12 flex-shrink-0"></div>
        
        {/* Day header with border that starts after time column */}
        <div className="flex items-start relative flex-1 border-b border-gray-200">
          <div className="flex flex-col w-full items-start pt-1 pb-4 px-2 relative bg-white">
            <div className="relative self-stretch mt-[-1.00px] text-body-xs font-bold text-gray-500 uppercase tracking-wider">
              VIERNES
            </div>
            <div className="relative self-stretch text-heading-lg font-medium text-gray-900">
              25
            </div>
          </div>
        </div>
        
        {/* Empty space for right time column */}
        <div className="w-12 flex-shrink-0"></div>
      </div>

      {/* Time slots for day view */}
      {timeSlots.map((time, index) => {
        const appointment = dayAppointments.find(apt => apt.time === time);
        
        return (
          <div
            key={index}
            className="flex items-start relative self-stretch w-full flex-[0_0_auto]"
          >
            {/* Left time column */}
            <div className="relative w-12 flex-shrink-0 text-body-sm font-medium text-gray-500 text-right pr-3 py-4">
              {time}
            </div>
            
            {/* Day content with border that starts after time column */}
            <div className="flex items-start relative flex-1 self-stretch border-b border-gray-200">
              <div className="flex flex-col w-full items-start relative bg-white h-[72px] overflow-visible">
                {appointment && (
                  <div
                    className={`absolute inset-0 ${appointment.bgColor} ${appointment.borderColor} border-l-4 shadow-sm hover:shadow-md transition-all duration-200 rounded-sm z-10`}
                    style={{
                      height: `${72 * appointment.spans}px`,
                      width: '100%',
                      left: '0',
                      top: '0',
                    }}
                  >
                    <div className="flex flex-col h-full items-start p-1.5 relative flex-1 grow">
                      <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <div
                          className={`relative w-fit text-body-sm font-semibold ${appointment.textColor}`}
                        >
                          Hora
                        </div>
                        <div
                          className={`relative w-fit text-body-sm font-semibold ${appointment.textColor}`}
                        >
                          {appointment.period}
                        </div>
                        <div
                          className={`${appointment.iconBg} inline-flex items-center justify-center p-0.5 relative flex-[0_0_auto] rounded-full`}
                        >
                          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div
                        className={`relative self-stretch text-body-sm font-semibold ${appointment.textColor}`}
                      >
                        {appointment.description}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right time column */}
            <div className="relative w-12 flex-shrink-0 text-body-sm font-medium text-gray-500 text-left pl-3 py-4">
              {time}
            </div>
          </div>
        );
      })}
    </>
  );

  const renderMonthView = () => {
    const dayNames = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"];
    
    return (
      <div className="w-full">
        {/* Month header with day names */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {dayNames.map((dayName, index) => (
            <div
              key={index}
              className="p-3 text-center border-r border-gray-200 last:border-r-0"
            >
              <div className="text-body-xs font-bold text-gray-500 uppercase tracking-wider">
                {dayName}
              </div>
            </div>
          ))}
        </div>

        {/* Month calendar grid */}
        <div className="grid grid-cols-7">
          {monthDays.map((dayData, index) => (
            <div
              key={index}
              className="min-h-[120px] p-2 border-r border-b border-gray-200 last:border-r-0 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Day number */}
              <div className="text-heading-md font-medium text-gray-900 mb-2">
                {dayData.day}
              </div>

              {/* Appointments */}
              <div className="space-y-1">
                {dayData.appointments.map((appointment, appointmentIndex) => (
                  <div
                    key={appointmentIndex}
                    className={`${appointment.bgColor} ${appointment.borderColor} border-l-4 p-1 text-xs rounded-sm`}
                  >
                    <div className={`${appointment.textColor} font-medium flex items-center gap-1`}>
                      <span>{appointment.title}</span>
                      <span className="text-[10px]">{appointment.time}</span>
                      <div className="w-2 h-2 bg-[#2E3D33] rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCurrentView = () => {
    switch (viewMode) {
      case "dia":
        return renderDayView();
      case "mes":
        return renderMonthView();
      default:
        return renderWeekView();
    }
  };

  return (
    <div className="flex-1 bg-secondary-50 min-h-screen">
      {/* Espaciado superior en móvil para el botón del menú */}
      <div className="lg:hidden h-16 w-full"></div>
      
      <section className="flex flex-col items-start gap-6 py-6 relative flex-1 self-stretch grow bg-white w-full">
        <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] bg-transparent px-6">
          <Select defaultValue="calendario">
            <SelectTrigger className="w-[202px] bg-primary-50 border-primary-200 text-primary-800 text-body-md">
              <SelectValue placeholder="Calendario 'Nombre'" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="calendario">
                Calendario "Nombre"
              </SelectItem>
            </SelectContent>
          </Select>

          <ToggleGroup
            type="single"
            value={viewMode}
            onValueChange={handleViewModeChange}
            className="inline-flex bg-primary-50 rounded-xl p-1 gap-0"
          >
            <ToggleGroupItem
              value="dia"
              className="px-4 py-2 rounded-lg text-primary-900 text-body-sm font-medium hover:bg-primary-100 data-[state=on]:bg-primary-500 data-[state=on]:text-white transition-all duration-200 border-0"
            >
              Día
            </ToggleGroupItem>
            <ToggleGroupItem
              value="semana"
              className="px-4 py-2 rounded-lg text-primary-900 text-body-sm font-medium hover:bg-primary-100 data-[state=on]:bg-primary-500 data-[state=on]:text-white transition-all duration-200 border-0"
            >
              Semana
            </ToggleGroupItem>
            <ToggleGroupItem
              value="mes"
              className="px-4 py-2 rounded-lg text-primary-900 text-body-sm font-medium hover:bg-primary-100 data-[state=on]:bg-primary-500 data-[state=on]:text-white transition-all duration-200 border-0"
            >
              Mes
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="inline-flex items-center gap-3 self-stretch">
            <Button 
              className="bg-[#3C5043] hover:bg-[#2E3D33] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              onClick={handleSchedulePatient}
            >
              Agendar paciente
              <PlusIcon className="w-4 h-4" />
            </Button>
            <Button className="bg-white hover:bg-[#F1F4F2] text-[#3C5043] border border-[#A7C1AF] rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2">
              Agregar paciente
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <Card className="card card-hover flex flex-col items-start p-3 self-stretch w-full mx-6">
          <CardContent className="p-0 w-full relative overflow-hidden">
            {renderCurrentView()}
          </CardContent>
        </Card>
      </section>

      {/* Patient Information Modal */}
      <PatientInformationSection 
        isOpen={isPatientInformationOpen} 
        onClose={handleClosePatientInformation}
        onContinue={handleContinueToAppointment}
      />

      {/* Professional Selection Modal */}
      <ProfessionalSelectionModal 
        isOpen={isProfessionalSelectionOpen} 
        onClose={handleCloseProfessionalSelection}
        onBack={handleBackToPatientInformation}
        onContinue={handleContinueToTreatmentSelection}
      />


      {/* Treatment Selection Modal */}
      <TreatmentSelectionModal 
        isOpen={isTreatmentSelectionOpen} 
        onClose={handleCloseTreatmentSelection}
        onBack={handleBackToProfessionalSelection}
        onContinue={handleContinueFromTreatmentToAppointment}
      />

      {/* Summary Modal */}
      <SummaryModal 
        isOpen={isSummaryModalOpen} 
        onClose={handleCloseSummaryModal}
        onScheduleAnother={handleScheduleAnother}
      />
    </div>
  );
};