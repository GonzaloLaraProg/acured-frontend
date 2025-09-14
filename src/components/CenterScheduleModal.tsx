import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, InstagramIcon, FacebookIcon, LinkedinIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface CenterScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CenterScheduleModal: React.FC<CenterScheduleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = React.useState<string>("");
  const [selectedProfessional, setSelectedProfessional] = React.useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string>("");
  const [currentMonth, setCurrentMonth] = React.useState("Agosto 2025");

  if (!isOpen) return null;

  // Breadcrumb steps
  const breadcrumbSteps = [
    { label: "Selección tratamiento", active: true },
    { label: "Selección profesional", active: false },
    { label: "Selección Horario", active: false },
    { label: "Inicia sesión", active: false },
    { label: "Confirmación y pago", active: false },
  ];

  // Services data
  const services = [
    { id: "service-1", name: "Sesión de \"(nombre del servicio)\"", duration: "Duración", modality: "Modalidad", price: "Valor" },
    { id: "service-2", name: "Sesión de \"(nombre del servicio)\"", duration: "Duración", modality: "Modalidad", price: "Valor" },
    { id: "service-3", name: "Sesión de \"(nombre del servicio)\"", duration: "Duración", modality: "Modalidad", price: "Valor" },
  ];

  // Professionals data (filtered by selected service)
  const professionals = [
    { id: "prof-1", name: "Profesional 1" },
    { id: "prof-2", name: "Profesional 2" },
    { id: "prof-3", name: "Profesional 3" },
  ];

  // Days of the week
  const daysOfWeek = [
    { name: "Lunes", date: "00" },
    { name: "Martes", date: "00" },
    { name: "Miércoles", date: "00" },
    { name: "Jueves", date: "00" },
    { name: "Viernes", date: "00" },
  ];

  // Time slots (all showing dashes when no professional is selected)
  const timeSlots = Array(8).fill("—");

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedProfessional(""); // Reset professional selection
    setSelectedTimeSlot(""); // Reset time slot selection
  };

  const handleProfessionalSelect = (professionalId: string) => {
    setSelectedProfessional(professionalId);
    setSelectedTimeSlot(""); // Reset time slot selection
  };

  const handleScheduleAppointment = () => {
    navigate('/login-registration');
    onClose();
  };

  const isScheduleEnabled = selectedService && selectedProfessional;

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-[95vw] max-w-[1200px] h-[85vh] max-h-[800px] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-4 py-1 mb-4">
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
                  <span className="w-4 h-4 text-shadow-800">›</span>
                )}
              </div>
            ))}
          </div>

          {/* Center Info */}
          <Card className="w-full bg-white border border-gray-200 shadow-sm rounded-lg">
            <CardContent className="flex p-6 gap-6">
              {/* Center Logo */}
              <div className="w-[120px] h-[120px] flex-shrink-0">
                <div className="w-full h-full bg-primary-100 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Info */}
              <div className="flex-1 flex flex-col gap-3">
                <div>
                  <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] mb-2">
                    Centro
                  </h3>
                  <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] mb-3">
                    Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 flex flex-col gap-3">
                <h4 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Descripción
                </h4>
                <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.
                </p>
                
                {/* Social Media */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary-900">Instagram</span>
                    <InstagramIcon className="w-4 h-4 text-primary-900" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary-900">Facebook</span>
                    <FacebookIcon className="w-4 h-4 text-primary-900" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary-900">Linkedin</span>
                    <LinkedinIcon className="w-4 h-4 text-primary-900" />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-start w-[200px] flex-shrink-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-primary-900" />
                    <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-xs">
                      Antonio varas 320, Providencia
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-primary-900" />
                    <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-xs">
                      Teléfono
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex h-[calc(100%-140px)]">
          {/* Left Side - Services and Professionals */}
          <div className="w-1/2 p-6 border-r border-gray-200">
            {/* Tabs */}
            <Tabs defaultValue="servicios" className="w-full mb-6">
              <TabsList className="bg-transparent p-0 h-auto gap-6 rounded-none w-full justify-start border-b border-gray-200">
                <TabsTrigger
                  value="servicios"
                  className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary-800 data-[state=active]:text-primary-800 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent data-[state=inactive]:text-shadow-800 rounded-none bg-transparent"
                >
                  <span className="font-medium text-sm [font-family:'Inter',Helvetica]">
                    Servicios
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="profesionales"
                  className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary-800 data-[state=active]:text-primary-800 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent data-[state=inactive]:text-shadow-800 rounded-none bg-transparent"
                >
                  <span className="font-medium text-sm [font-family:'Inter',Helvetica]">
                    Profesionales
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Input
                  placeholder="Buscar..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 text-gray-400">🔍</div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-4 mb-6">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`w-full border border-gray-200 shadow-none rounded-lg cursor-pointer transition-colors ${
                    selectedService === service.id ? "bg-primary-50 border-primary-300" : "bg-white hover:bg-gray-50"
                  }`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex flex-col gap-1">
                      <h6 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                        {service.name}
                      </h6>
                      <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-sm">
                        {service.duration}
                      </p>
                      <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-sm">
                        {service.modality}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                        {service.price}
                      </span>
                      <Button
                        variant="outline"
                        className={`px-4 py-1 rounded-3xl text-sm ${
                          selectedService === service.id
                            ? "bg-primary-900 text-white border-primary-900 hover:bg-primary-800"
                            : "bg-primary-100 text-primary-800 border-primary-100 hover:bg-primary-200"
                        }`}
                      >
                        Reservar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Schedule */}
          <div className="w-1/2 p-6">
            {/* Service and Professional Selectors */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Servicios
                </label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue placeholder="Selecciona Servicio" />
                    <ChevronDownIcon className="w-4 h-4" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Profesional
                </label>
                <Select 
                  value={selectedProfessional} 
                  onValueChange={setSelectedProfessional}
                  disabled={!selectedService}
                >
                  <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue placeholder="Selecciona Profesional" />
                    <ChevronDownIcon className="w-4 h-4" />
                  </SelectTrigger>
                  <SelectContent>
                    {professionals.map((professional) => (
                      <SelectItem key={professional.id} value={professional.id}>
                        {professional.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="bg-gray-50 rounded-lg p-4">
              {/* Month selector */}
              <div className="flex justify-center items-center mb-4 gap-4">
                <Button variant="ghost" className="p-1">
                  <ChevronLeftIcon className="w-4 h-4 text-primary-900" />
                </Button>

                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200"
                >
                  <span className="text-sm font-medium text-black">
                    {currentMonth}
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

                <div className="grid grid-cols-5 gap-4 flex-1">
                  {daysOfWeek.map((day, index) => (
                    <div
                      key={index}
                      className="text-center py-2"
                    >
                      <span className="text-sm font-medium text-black">
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
                <div className="w-4"></div>
                
                <div className="grid grid-cols-5 gap-4 flex-1">
                  {daysOfWeek.map((day, dayIndex) => (
                    <div key={dayIndex} className="flex flex-col gap-2">
                      {timeSlots.map((slot, slotIndex) => (
                        <div
                          key={slotIndex}
                          className="flex justify-center items-center py-2 px-3 h-10 text-center"
                        >
                          <span className="text-sm text-gray-400">—</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="w-4"></div>
              </div>

              {/* Schedule Button */}
              <div className="flex justify-center mt-6">
                <Button 
                  className={`px-6 py-2 rounded-3xl ${
                    isScheduleEnabled 
                      ? "bg-primary-900 text-white hover:bg-primary-800" 
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={handleScheduleAppointment}
                  disabled={!isScheduleEnabled}
                >
                  <span className="font-medium text-sm">
                    Agendar hora
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};