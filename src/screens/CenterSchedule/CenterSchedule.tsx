import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  GlobeIcon, 
  MenuIcon, 
  UserIcon, 
  ChevronRightIcon, 
  ChevronDownIcon,
  ChevronLeftIcon,
  MapPinIcon,
  PhoneIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  InfoIcon,
  X
} from "lucide-react";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { CancellationPolicyModal } from "../../components/CancellationPolicyModal";
import { ProfessionalProfileModal } from "../../components/ProfessionalProfileModal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";

export const CenterSchedule = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isCancellationPolicyOpen, setIsCancellationPolicyOpen] = React.useState(false);
  const [dismissedMessages, setDismissedMessages] = React.useState<number[]>([]);
  const [selectedService, setSelectedService] = React.useState<string>("");
  const [selectedProfessional, setSelectedProfessional] = React.useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string>("");
  const [currentTab, setCurrentTab] = React.useState<"servicios" | "profesionales">("servicios");
  const [isProfessionalProfileOpen, setIsProfessionalProfileOpen] = React.useState(false);
  const [selectedProfessionalData, setSelectedProfessionalData] = React.useState<any>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  
// 👇 Aquí agregamos el estado del scroll
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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

  // Professionals data
  const professionals = [
    { 
      id: "prof-1", 
      name: "Profesional", 
      specialty: "Especialidad",
      image: "/profesional.jpg"
    },
    { 
      id: "prof-2", 
      name: "Profesional", 
      specialty: "Especialidad",
      image: "/profesional.jpg"
    },
    { 
      id: "prof-3", 
      name: "Profesional", 
      specialty: "Especialidad",
      image: "/profesional.jpg"
    },
    { 
      id: "prof-4", 
      name: "Profesional", 
      specialty: "Especialidad",
      image: "/profesional.jpg"
    },
    { 
      id: "prof-5", 
      name: "Profesional", 
      specialty: "Especialidad",
      image: "/profesional.jpg"
    },
    { 
      id: "prof-6", 
      name: "Profesional", 
      specialty: "Especialidad",
      image: "/profesional.jpg"
    },
  ];

  // Days of the week
  const daysOfWeek = [
    { name: "Lunes", date: "00" },
    { name: "Martes", date: "00" },
    { name: "Miércoles", date: "00" },
    { name: "Jueves", date: "00" },
    { name: "Viernes", date: "00" },
  ];

  // Time slots (showing dashes when no professional is selected)
  const getTimeSlots = () => {
    if (!selectedProfessional) {
      return Array(8).fill("—");
    }
    return [
      "09:00 AM", "09:00 AM", "09:00 AM", "09:00 AM",
      "09:00 AM", "09:00 AM", "09:00 AM", "09:00 AM"
    ];
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedProfessional(""); // Reset professional selection
    setSelectedTimeSlot(""); // Reset time slot selection
  };

  const handleProfessionalSelect = (professionalId: string) => {
    setSelectedProfessional(professionalId);
    setSelectedTimeSlot(""); // Reset time slot selection
  };

  const handleTimeSlotSelect = (dayIndex: number, slotIndex: number) => {
    if (selectedProfessional) {
      setSelectedTimeSlot(`${dayIndex}-${slotIndex}`);
    }
  };

  const handleScheduleAppointment = () => {
    navigate('/center-payment');
  };

  const handleViewProfile = (professional: any) => {
    setSelectedProfessionalData(professional);
    setIsProfessionalProfileOpen(true);
  };

  const handleDismissMessage = (messageIndex: number) => {
    setDismissedMessages(prev => [...prev, messageIndex]);
  };

  const isScheduleEnabled = selectedService && selectedProfessional && selectedTimeSlot;

  const getSelectedServiceName = () => {
    const service = services.find(s => s.id === selectedService);
    return service ? service.name : "Selecciona Servicio";
  };

  const getSelectedProfessionalName = () => {
    const professional = professionals.find(p => p.id === selectedProfessional);
    return professional ? professional.name : "Selecciona Profesional";
  };

  return (
    <>
      <TopNav />
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
        {/* Fondo blanco detrás del navbar */}
        <div
          className={`fixed top-0 left-0 w-full h-[90px] bg-white shadow-sm transition-opacity duration-300 z-40 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <NavigationMenu className="fixed top-[29px] left-1/2 transform -translate-x-1/2 bg-primary-50 rounded-[32px] border border-solid border-[#d3e0d7] shadow-shadow-sm backdrop-blur-[5.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.85px)_brightness(100%)] z-50">
          <NavigationMenuList className="flex items-center gap-2.5 pl-3 pr-0 py-0">
            <NavigationMenuItem>
              <Link
                className="relative w-[92px] h-[21px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
                to="/"
              />
            </NavigationMenuItem>

            <NavigationMenuItem className="inline-flex items-center gap-2 pl-0.5 pr-1 py-0.5 rounded-[40px]">
              <div className="inline-flex items-center">
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] bg-primary-50"
                >
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-lg text-primary-900">
                    Inicia sesión
                  </span>
                </Button>
              </div>

              <Button className="inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl">
                <Link to="/therapist-dashboard" className="text-decoration-none">
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-neutralswhite text-lg leading-[normal] whitespace-nowrap">
                    ¿Eres acupunturista?
                  </span>
                </Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>





        {/* Right side buttons */}
        <div className="fixed top-[29px] right-8 flex items-center gap-2 z-50">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
            onClick={() => setIsLanguageModalOpen(true)}
          >
            <span className="text-sm text-gray-700 font-medium">Idioma</span>
            <GlobeIcon className="w-4 h-4 text-gray-600" />
          </Button>

          <Button 
            ref={menuButtonRef}
            variant="ghost" 
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
            onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
          >
            <span className="text-sm text-gray-700 font-medium">Menú</span>
            <MenuIcon className="w-4 h-4 text-gray-600" />
          </Button>

          <Button 
            variant="ghost" 
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
          >
            <span className="text-sm text-gray-700 font-medium">Nombre</span>
            <UserIcon className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="pt-32 px-16 relative z-10 min-h-screen">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-4 py-1 mb-8 max-w-[1384px] mx-auto">
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

          {/* Center Info Card */}
          <Card className="w-full max-w-[1384px] mx-auto bg-white border border-gray-200 shadow-sm rounded-lg mb-6">
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

          {/* Info Message */}
          {selectedService && !selectedProfessional && !dismissedMessages.includes(0) && (
            <div className="flex items-center gap-3 p-4 bg-primary-100 rounded-lg border border-primary-200 mb-6 max-w-[1384px] mx-auto">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <InfoIcon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-primary-900">
                  Para agendar un nuevo servicio, primero debe finalizar la reserva del servicio actualmente seleccionado
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDismissMessage(0)}
                className="p-1 hover:bg-primary-200"
              >
                <X className="w-4 h-4 text-primary-700" />
              </Button>
            </div>
          )}

          {/* Cancellation Policy Message */}
          {selectedProfessional && !dismissedMessages.includes(1) && (
            <div className="flex items-center gap-3 p-4 bg-primary-100 rounded-lg border border-primary-200 mb-6 max-w-[1384px] mx-auto">
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
                  onClick={() => handleDismissMessage(1)}
                  className="p-1 hover:bg-primary-200"
                >
                  <X className="w-4 h-4 text-primary-700" />
                </Button>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex gap-8 max-w-[1384px] mx-auto">
            {/* Left Side - Services and Professionals */}
            <div className="w-1/2 bg-white rounded-xl shadow-shadow-sm">
              <div className="p-6">
                {/* Tabs */}
                <Tabs value={currentTab} onValueChange={(value) => setCurrentTab(value as "servicios" | "profesionales")} className="w-full mb-6">
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

                {/* Content based on active tab */}
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {currentTab === "servicios" ? (
                    /* Services List */
                    services.map((service) => (
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
                              {selectedService === service.id ? "Eliminar" : "Reservar"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    /* Professionals List */
                    professionals.map((professional) => (
                      <Card
                        key={professional.id}
                        className={`w-full border border-gray-200 shadow-none rounded-lg cursor-pointer transition-colors ${
                          selectedProfessional === professional.id ? "bg-primary-50 border-primary-300" : "bg-white hover:bg-gray-50"
                        }`}
                        onClick={() => handleProfessionalSelect(professional.id)}
                      >
                        <CardContent className="flex items-center gap-4 p-4">
                          <div className="w-16 h-16 flex-shrink-0">
                            <img
                              src={professional.image}
                              alt={professional.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h6 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                              {professional.name}
                            </h6>
                            <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-sm">
                              {professional.specialty}
                            </p>
                            <Button
                              variant="link"
                              className="text-primary-900 hover:underline p-0 h-auto text-sm"
                              onClick={() => handleViewProfile(professional)}
                            >
                              Ver perfil profesional
                            </Button>
                          </div>
                          <Button
                            variant="outline"
                            className={`px-4 py-1 rounded-3xl text-sm ${
                              selectedProfessional === professional.id
                                ? "bg-primary-900 text-white border-primary-900 hover:bg-primary-800"
                                : "bg-primary-100 text-primary-800 border-primary-100 hover:bg-primary-200"
                            }`}
                          >
                            {selectedProfessional === professional.id ? "Cancelar" : "Reservar"}
                          </Button>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Schedule */}
            <div className="w-1/2 bg-white rounded-xl shadow-shadow-sm">
              <div className="p-6">
                {/* Service and Professional Selectors */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Servicios
                    </label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                        <SelectValue placeholder={getSelectedServiceName()} />
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
                        <SelectValue placeholder={getSelectedProfessionalName()} />
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
                          {getTimeSlots().map((slot, slotIndex) => {
                            const isSelected = selectedTimeSlot === `${dayIndex}-${slotIndex}`;
                            const isClickable = selectedProfessional && slot !== "—";
                            
                            return (
                              <button
                                key={slotIndex}
                                onClick={() => isClickable && handleTimeSlotSelect(dayIndex, slotIndex)}
                                disabled={!isClickable}
                                className={`flex justify-center items-center py-2 px-3 h-10 text-center rounded transition-colors ${
                                  slot === "—" 
                                    ? "text-gray-400 cursor-not-allowed"
                                    : isSelected
                                    ? "bg-primary-800 text-white"
                                    : isClickable
                                    ? "bg-primary-100 text-primary-900 hover:bg-primary-200 cursor-pointer"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                }`}
                              >
                                <span className="text-sm">{slot}</span>
                              </button>
                            );
                          })}
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

        {/* Footer */}
        <Footer />
      </div>

      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <MenuDropdown
        isOpen={isMenuDropdownOpen}
        onClose={() => setIsMenuDropdownOpen(false)}
        buttonRef={menuButtonRef}
      />

      <CancellationPolicyModal
        isOpen={isCancellationPolicyOpen}
        onClose={() => setIsCancellationPolicyOpen(false)}
      />

      <ProfessionalProfileModal
        isOpen={isProfessionalProfileOpen}
        onClose={() => setIsProfessionalProfileOpen(false)}
        professional={selectedProfessionalData}
      />
    </>
  );
};