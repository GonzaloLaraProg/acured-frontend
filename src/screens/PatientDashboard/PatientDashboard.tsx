import React from "react";
import { Link } from "react-router-dom";
import { GlobeIcon, MenuIcon, UserIcon, MapPinIcon, VideoIcon, ClockIcon, Calendar, Settings, User, PhoneIcon, ChevronRightIcon } from "lucide-react";
import { CancellationModal } from "../../components/CancellationModal"; 
import { FAQModal } from "../../components/FAQModal";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { SupportModal } from "../../components/SupportModal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { CancellationPolicyModal } from "../../components/CancellationPolicyModal";

export const PatientDashboard = (): JSX.Element => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isCancellationModalOpen, setIsCancellationModalOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const [selectedAppointment, setSelectedAppointment] = React.useState<any>(null);
  const [currentView, setCurrentView] = React.useState<'reservas' | 'perfil'>('reservas');
  const [currentReservationsView, setCurrentReservationsView] = React.useState<'current' | 'past'>('current');
  const [isEditingProfile, setIsEditingProfile] = React.useState(false);
  const [cancellationType, setCancellationType] = React.useState<'full-refund' | 'partial-refund' | 'no-refund'>('full-refund');
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = React.useState(false);

  
// 👇 Aquí agregamos el estado del scroll
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  
  // Mock appointment data
  const appointments = [
    {
      id: 1,
      date: "01/08/2025, 15:30 PM",
      professional: "Profesional",
      professional2: "",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    },
    {
      id: 2,
      date: "01/08/2025, 15:30 PM",
      professional: "Centro",
      professional2: "Profesional",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    },
    {
      id: 3,
      date: "01/08/2025, 15:30 PM",
      professional: "Centro",
      professional2: "Profesional",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    },
    {
      id: 4,
      date: "01/08/2025, 15:30 PM",
      professional: "Centro",
      professional2: "Profesional",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    },
    {
      id: 5,
      date: "01/08/2025, 15:30 PM",
      professional: "Profesional",
      professional2: "",
      treatment: "Tratamiento o servicio",
      address: "Príncipe de gales, la reina 33333",
      modality: "Modalidad",
      duration: "Duración"
    }
  ];

  // Mock past appointments data
  const pastAppointments = [
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
    // Determine cancellation type based on appointment index
    
    const appointmentIndex = appointments.findIndex(apt => apt.id === appointment.id);
    let type: 'full-refund' | 'partial-refund' | 'no-refund' = 'full-refund';
    
    if (appointmentIndex === 0) {
      type = 'full-refund';
    } else if (appointmentIndex === 1) {
      type = 'partial-refund';
    } else if (appointmentIndex === 2) {
      type = 'no-refund';
    }
    
    setCancellationType(type);
    setSelectedAppointment(appointment);
    setIsCancellationModalOpen(true);
  };

  const handlePolicyClick = () => {
    setIsPolicyModalOpen(true);
  };

  return (
    <>
      <TopNav />
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
        <TopNav/>

        {/* Main Content */}
        <div className="flex min-h-screen">
          {/* Left Sidebar */}
          <div className="w-[300px] bg-primary-50 flex-shrink-0 min-h-screen p-6 pt-8">
            {/* Acured Logo */}
            <div className="mb-8">
              <Link
                className="relative w-[130px] h-[30px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
                to="/"
              />
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/logo_persona.png" 
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
              
              <button
                className={`flex w-full items-center -ml-3 gap-3 pl-2 py-2 rounded-lg text-base font-semibold ${
                  currentView === 'reservas' && currentReservationsView === 'current'
                    ? 'bg-primary-100 text-gray-900'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setCurrentView('reservas');
                  setCurrentReservationsView('current');
                }}
              >
                <img src="/icon-calendar-clear-outline.svg" alt="Calendar" className="w-6 h-6" />
                Mis reservas
              </button>
              
              <button
                className={`flex w-full items-center -ml-3 gap-3 pl-2 py-2 rounded-lg text-base font-semibold ${
                  currentView === 'reservas' && currentReservationsView === 'past'
                    ? 'bg-primary-100 text-gray-900'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setCurrentView('reservas');
                  setCurrentReservationsView('past');
                }}
              >
                <img src="/icon-calendar-clear-outline.svg" alt="Calendar" className="w-6 h-6" />
                Reservas pasadas
              </button>
              <br />

              <div className="mt-6 mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">AJUSTES</span>
              </div>
              
              <button
                className="flex w-full items-center -ml-3 gap-3 pl-2 py-2 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-100"
                onClick={() => setIsSupportModalOpen(true)}
              >
                <img src="/icon-cog-outline.svg" alt="Settings" className="w-6 h-6" />
                Soporte
              </button>
              
              <button
                className={`flex w-full items-center -ml-3 gap-3 pl-2 py-2 rounded-lg text-base font-semibold ${
                  currentView === 'perfil'
                    ? 'bg-primary-100 text-gray-900'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setCurrentView('perfil')}
              >
                <img src="/icon-person-outline1.svg" alt="User" className="w-6 h-6" />
                Perfil
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white p-8 pt-32">
            {currentView === 'reservas' ? (
              currentReservationsView === 'current' ? (
                <Card className="bg-white rounded-xl shadow-sm">
                  
                  <CardContent className="p-6">
                    <p className="font-hass font-bold text-[17px]">Próximas Citas</p>
                    &nbsp;
                    {/* Contenedor con scroll */}
                    <div className="overflow-y-auto max-h-[calc(150vh-250px)] pr-2 space-y-6">
                      {appointments.map((appointment) => (
                        <Card
                          key={appointment.id}
                          className="bg-white rounded-xl shadow-sm border border-gray-200"
                        >
                          <CardContent className="flex p-0 pl-0  gap-0">
                            {/* Imagen o placeholder del profesional */}
                            <div className="w-[230px] h-[230px] bg-primary-200 rounded-lg flex-shrink-0"></div>

                            {/* Detalles de la cita */}
                            <div className="flex-1 p-6">
                              <div className="mb-4">
                                <p className="text-sm text-gray-600 mb-1 font-bold font-inter ">{appointment.date}</p>
                                <h3 className="font-hass font-bold text-primary-900 text-lg mb-1 ">
                                  {appointment.professional}
                                </h3>
                                <p className="font-hass font-bold text-primary-900 mb-1 ">
                                  {appointment.professional2}
                                </p>
                                <p className="font-inter text-primary-900 ">{appointment.treatment}</p>
                              </div>
                           

                              {/* Botones de acción en el mismo orden que la imagen */}
                              <div className="flex gap-3 mt-9 ">
                                <Button
                                  variant="outline"
                                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 text-sm"
                                >
                                  Ver perfil
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={handlePolicyClick}   // 👈 aquí agregas la acción
                                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 text-sm"
                                >
                                  Ver política de cancelación
                                </Button>

                              </div>
                            </div>
                            

                            {/* Info de dirección y contacto */}
                            <div className="flex flex-col gap-2 w-[220px] mt-4">
                              <div className="flex flex-col gap-2 w-[220px]">
                                {/* Dirección */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-location-outline.svg" alt="Ubicación" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">{appointment.address}</span>
                                </div>

                                {/* Teléfono */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-call-outline.svg" alt="Teléfono" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">Teléfono</span>
                                </div>

                                {/* Modalidad (videollamada) */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-videocam-outline.svg" alt="Modalidad" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">{appointment.modality}</span>
                                </div>

                                {/* Duración (reloj/alarma) */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-alarm-outline.svg" alt="Duración" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">{appointment.duration}</span>
                                </div>
                              </div>

                              {/* Botones finales (Anular / Confirmar) */}
                            <div className="flex gap-2 items-center mt-3">
                              <Button
                                variant="outline"
                                className=" bg-primary-100 text-primary-900 rounded-full hover:bg-primary-200 text-sm"
                                onClick={() => handleCancelClick(appointment)}
                              >
                                Anular cita
                              </Button>
                              <Button className="bg-primary-900 text-white rounded-full hover:bg-primary-800 text-sm">
                                Confirmar
                              </Button>
                            </div>

                            </div>

                            
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              ) : (
                <Card className="bg-white rounded-xl shadow-sm">
                  <CardContent className="p-6">
                    {/* Contenedor con scroll */}
                    <div className="overflow-y-auto max-h-[calc(150vh-250px)] pr-2 space-y-6">
                      {pastAppointments.map((appointment) => (
                        <Card
                          key={appointment.id}
                          className="bg-white rounded-xl shadow-sm border border-gray-200"
                        >
                          <CardContent className="flex p-0 pl-0  gap-0">
                            {/* Imagen o placeholder del profesional */}
                            <div className="w-[230px] h-[230px] bg-primary-200 rounded-lg flex-shrink-0"></div>

                            {/* Detalles de la cita */}
                            <div className="flex-1 p-6">
                              <div className="mb-4">
                                <p className="text-sm text-gray-600 mb-1 font-bold font-inter ">{appointment.date}</p>
                                <h3 className="font-hass font-bold text-primary-900 text-lg mb-1 ">
                                  {appointment.professional}
                                </h3>
                                
                                <p className="font-inter text-primary-900 ">{appointment.treatment}</p>
                              </div>
                           

                              {/* Botones de acción en el mismo orden que la imagen */}
                              <div className="flex gap-3 mt-9 ">
                                <Button
                                  variant="outline"
                                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 text-sm"
                                >
                                  Ver perfil
                                </Button>
                               
                              </div>
                            </div>

                            {/* Info de dirección y contacto */}
                            <div className="flex flex-col gap-2 w-[220px] mt-4">
                              <div className="flex flex-col gap-2 w-[220px]">
                                {/* Dirección */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-location-outline.svg" alt="Ubicación" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">{appointment.address}</span>
                                </div>

                                {/* Teléfono */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-call-outline.svg" alt="Teléfono" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">Teléfono</span>
                                </div>

                                {/* Modalidad (videollamada) */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-videocam-outline.svg" alt="Modalidad" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">{appointment.modality}</span>
                                </div>

                                {/* Duración (reloj/alarma) */}
                                <div className="flex items-center gap-2">
                                  <img src="/icon-alarm-outline.svg" alt="Duración" className="w-5 h-5" />
                                  <span className="text-sm text-gray-700">{appointment.duration}</span>
                                </div>
                              </div>

                              {/* Botones finales (Anular / Confirmar) */}
                              <div className="flex items-center justify-end gap-3 mt-3 mr-3">
                                {appointment.id === 1 ? (
                                  <>
                                    <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium inline-block">
                                      Cancelada
                                    </span>
                                    <Button className="bg-primary-900 text-white rounded-full hover:bg-primary-800 text-sm">
                                      Agendar nuevamente
                                    </Button>
                                  </>
                                ) : (
                                  <Button className="bg-primary-900 text-white rounded-full hover:bg-primary-800 text-sm">
                                    Agendar nuevamente
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            ) : (
              /* Profile View */
              <div className="w-full">
                {/* Edit Button - positioned above title */}
                <div className="flex justify-start mb-6">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm bg-white border border-gray-200 hover:bg-gray-100 transition"
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                  >
                    {/* Ícono cuadrado oscuro con el lápiz */}
                    <div className="w-5 h-5 bg-primary-900 rounded-sm flex items-center justify-center">
                      <img src="/icon-create-sharp.svg" alt="Editar" className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-primary-900">
                      {isEditingProfile ? "Cancelar" : "Editar"}
                    </span>
                  </Button>
                </div>

                <>
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-[18px] font-inter font-bold text-primary-900">
                      Información General
                    </h2>
                  </div>

                  {isEditingProfile ? (
                    /* Edit Profile Form */
                    <div className="space-y-8">
                      {/* Profile Information Grid - Edit Mode */}
                      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          {/* Name */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              NOMBRE
                            </label>
                            <input
                              type="text"
                              defaultValue="Isidora Carrasco Zapata"
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>

                          {/* Age */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              EDAD
                            </label>
                            <input
                              type="text"
                              defaultValue="27"
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>

                          {/* Gender */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              GÉNERO
                            </label>
                            <input
                              type="text"
                              defaultValue="Mujer"
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>

                          {/* Contact Phone */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              TELÉFONO DE CONTACTO
                            </label>
                            <input
                              type="text"
                              defaultValue="+569"
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>

                          {/* RUT */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              RUT
                            </label>
                            <input
                              type="text"
                              defaultValue="19.605.454-5"
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          {/* Email */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              EMAIL
                            </label>
                            <input
                              type="email"
                              defaultValue="@"
                              className="w-full px-3 py-2  bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>

                          {/* Address */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              DIRECCIÓN
                            </label>
                            <input
                              type="text"
                              defaultValue="...."
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>

                          {/* Occupation */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              OCUPACIÓN
                            </label>
                            <input
                              type="text"
                              defaultValue="..."
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>

                          {/* Emergency Phone */}
                          <div>
                            <label className="block text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              TELÉFONO EN CASO DE EMERGENCIA
                            </label>
                            <input
                              type="text"
                              defaultValue="+569"
                              className="w-full px-3 py-2 bg-primary-50 border border-gray-300 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-start mt-8">
                        <Button
                          className="px-6 py-2 bg-primary-900 text-white rounded-full hover:bg-primary-800"
                          onClick={() => setIsEditingProfile(false)}
                        >
                          <span className="font-medium text-sm">Guardar cambios</span>
                        <ChevronRightIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* Profile View - Read Only */
                    <div className="space-y-8">
                      {/* Profile Information Grid - Read Only */}
                      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              NOMBRE
                            </label>
                            <p className="text-[17px] text-primary-900 font-inter font-semibold">Isidora Carrasco Zapata</p>
                          </div>

                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              EDAD
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">27</p>
                          </div>

                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              GÉNERO
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">Mujer</p>
                          </div>

                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              TELÉFONO DE CONTACTO
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">+569</p>
                          </div>

                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              RUT
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">19.605.454-5</p>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              EMAIL
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">@</p>
                          </div>

                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              DIRECCIÓN
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">....</p>
                          </div>

                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              OCUPACIÓN
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">...</p>
                          </div>

                          <div>
                            <label className="block  text-[14px] font-medium text-primary-400 uppercase tracking-wider mb-2">
                              TELÉFONO EN CASO DE EMERGENCIA
                            </label>
                            <p className="text-base text-primary-900  font-inter font-semibold">+569</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </div>


            )}
          </div>

        </div>
          {/* Modal de política */}
          <CancellationPolicyModal
            isOpen={isPolicyModalOpen}
            onClose={() => setIsPolicyModalOpen(false)}
          />        

        {/* Footer */}
        <Footer onFAQClick={() => setIsFAQModalOpen(true)} />
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
        cancellationType={cancellationType}
        appointment={selectedAppointment}
      />

      <FAQModal
        isOpen={isFAQModalOpen}
        onClose={() => setIsFAQModalOpen(false)}
      />


      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </>
  );
};