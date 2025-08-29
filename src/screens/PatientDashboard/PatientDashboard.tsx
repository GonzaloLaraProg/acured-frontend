import React from "react";
import { Link } from "react-router-dom";
import { GlobeIcon, MenuIcon, UserIcon, MapPinIcon, VideoIcon, ClockIcon } from "lucide-react";
import { CancellationModal } from "../../components/CancellationModal"; 
import { FAQModal } from "../../components/FAQModal";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { FooterSection } from "../Home/sections/FooterSection";

export const PatientDashboard = (): JSX.Element => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isCancellationModalOpen, setIsCancellationModalOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [selectedAppointment, setSelectedAppointment] = React.useState<any>(null);
  const [currentView, setCurrentView] = React.useState<'reservas' | 'perfil'>('reservas');
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  // Mock appointment data
  const appointments = [
    {
      id: 1,
      date: "01/08/2025, 15:30 PM",
      professional: "Profesional",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    },
    {
      id: 2,
      date: "01/08/2025, 15:30 PM",
      professional: "Profesional",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    },
    {
      id: 3,
      date: "01/08/2025, 15:30 PM",
      professional: "Profesional",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    }
  ];

  const handleCancelClick = (appointment: any) => {
    setSelectedAppointment(appointment);
    setIsCancellationModalOpen(true);
  };

  return (
    <>
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
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
        <div className="flex min-h-screen">
          {/* Left Sidebar */}
          <div className="w-[240px] bg-primary-50 flex-shrink-0 min-h-screen p-6 pt-8">
            {/* Acured Logo */}
            <div className="mb-8">
              <Link
                className="relative w-[92px] h-[21px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
                to="/"
              />
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/profesional.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-medium text-primary-900">"Nombre"</span>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-2">
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">MI PERFIL</span>
              </div>
              
              <Button
                variant="ghost"
                className={`w-full justify-start px-3 py-2 rounded-lg ${
                  currentView === 'reservas' 
                    ? 'bg-primary-200 text-primary-900 hover:bg-primary-300' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setCurrentView('reservas')}
              >
                <span className="text-sm font-medium">Mis reservas</span>
              </Button>
              
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <span className="text-sm font-medium">Reservas pasadas</span>
              </Button>

              <div className="mt-6 mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">AJUSTES</span>
              </div>
              
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <span className="text-sm font-medium">Soporte</span>
              </Button>
              
              <Button
                variant="ghost"
                className={`w-full justify-start px-3 py-2 rounded-lg ${
                  currentView === 'perfil' 
                    ? 'bg-primary-200 text-primary-900 hover:bg-primary-300' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setCurrentView('perfil')}
              >
                <span className="text-sm font-medium">Perfil</span>
              </Button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white p-8 pt-32">
            {currentView === 'reservas' ? (
              <div className="space-y-6">
                {appointments.map((appointment) => (
                  <Card key={appointment.id} className="bg-white rounded-xl shadow-sm">
                    <CardContent className="flex p-6 gap-6">
                      {/* Professional Image Placeholder */}
                      <div className="w-[120px] h-[120px] bg-primary-200 rounded-lg flex-shrink-0"></div>

                      {/* Appointment Details */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">{appointment.date}</p>
                          <h3 className="font-semibold text-primary-900 text-lg mb-1">{appointment.professional}</h3>
                          <p className="text-primary-900">{appointment.treatment}</p>
                        </div>
                        
                        <Button
                          variant="ghost"
                          className="text-primary-900 hover:bg-primary-100 p-0 h-auto text-sm"
                        >
                          Ver perfil
                        </Button>
                      </div>

                      {/* Appointment Info */}
                      <div className="flex flex-col gap-2 w-[200px]">
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{appointment.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <VideoIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{appointment.modality}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{appointment.duration}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="px-4 py-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                          onClick={() => handleCancelClick(appointment)}
                        >
                          Anular
                        </Button>
                        <Button
                          className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800"
                        >
                          Confirmar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Profile View */
              <div className="max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-2xl font-normal text-primary-900">Información General</h1>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    <span className="text-sm">Editar</span>
                  </Button>
                </div>

                {/* Profile Information Grid */}
                <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        NOMBRE
                      </label>
                      <p className="text-lg text-primary-900">
                        Isidora Carrasco Zapata
                      </p>
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        EDAD
                      </label>
                      <p className="text-lg text-primary-900">
                        27
                      </p>
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        GÉNERO
                      </label>
                      <p className="text-lg text-primary-900">
                        Mujer
                      </p>
                    </div>

                    {/* Contact Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        TELÉFONO DE CONTACTO
                      </label>
                      <p className="text-lg text-primary-900">
                        +569
                      </p>
                    </div>

                    {/* RUT */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        RUT
                      </label>
                      <p className="text-lg text-primary-900">
                        19.605.454-5
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        EMAIL
                      </label>
                      <p className="text-lg text-primary-900">
                        @
                      </p>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        DIRECCIÓN
                      </label>
                      <p className="text-lg text-primary-900">
                        ....
                      </p>
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        OCUPACIÓN
                      </label>
                      <p className="text-lg text-primary-900">
                        ...
                      </p>
                    </div>

                    {/* Emergency Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                        TELÉFONO EN CASO DE EMERGENCIA
                      </label>
                      <p className="text-lg text-primary-900">
                        +569
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <FooterSection onFAQClick={() => setIsFAQModalOpen(true)} />
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

      <CancellationModal
        isOpen={isCancellationModalOpen}
        onClose={() => setIsCancellationModalOpen(false)}
        appointment={selectedAppointment}
      />

      <FAQModal
        isOpen={isFAQModalOpen}
        onClose={() => setIsFAQModalOpen(false)}
      />
    </>
  );
};