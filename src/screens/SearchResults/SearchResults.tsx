import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CalendarIcon, ClockIcon, GlobeIcon, MapPinIcon, MenuIcon, SearchIcon, UserIcon, VideoIcon, PhoneIcon, InstagramIcon, FacebookIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AdvancedFiltersModal } from "../../components/AdvancedFiltersModal";
import { CalendarModal } from "../../components/CalendarModal";
import { TimeSelectionModal } from "../../components/TimeSelectionModal";
import { MapModal } from "../../components/MapModal";
import { CenterScheduleModal } from "../../components/CenterScheduleModal.tsx";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";

export const SearchResults = (): JSX.Element => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = React.useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = React.useState(false);
  const [isTimeModalOpen, setIsTimeModalOpen] = React.useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = React.useState(false);
  const [isCenterScheduleModalOpen, setIsCenterScheduleModalOpen] = React.useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date>(() => {
    // Default to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const navigate = useNavigate();
  const timeButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  // 👇 Aquí agregamos el estado del scroll
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  // Professional data
  const professionals = [
    {
      id: 1,
      type: "professional",
      name: "Profesional",
      specialty: "Especialidad",
      services: "Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      address: "Antonio varas 320, Providencia",
      phone: "Teléfono",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook", 
        linkedin: "Linkedin"
      }
    },
    {
      id: 2,
      type: "center",
      name: "Centro",
      specialty: "",
      services: "Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      address: "Antonio varas 320, Providencia",
      phone: "Teléfono",
      image: "/felix-dulnes-logo.png",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 3,
      type: "professional",
      name: "Profesional",
      specialty: "Especialidad",
      services: "Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      address: "Antonio varas 320, Providencia",
      phone: "Teléfono",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 4,
      type: "center",
      name: "Centro",
      specialty: "",
      services: "Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      address: "Antonio varas 320, Providencia",
      phone: "Teléfono",
      image: "/center-icon.png",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 5,
      type: "professional",
      name: "Profesional",
      specialty: "Especialidad",
      services: "Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      address: "Antonio varas 320, Providencia",
      phone: "Teléfono",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 6,
      type: "professional",
      name: "Profesional",
      specialty: "Especialidad",
      services: "Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      address: "Antonio varas 320, Providencia",
      phone: "Teléfono",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 7,
      type: "professional",
      name: "Profesional",
      specialty: "Especialidad",
      services: "Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica, Técnica",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      address: "Antonio varas 320, Providencia",
      phone: "Teléfono",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    }
  ];

  const handleAgendarClick = (professional: any) => {
    if (professional.type === "center") {
      navigate('/center-schedule');
    } else {
      // Navigate directly to schedule selection for professionals
      navigate('/schedule-selection');
    }
  };

  return (
    <>
      <TopNav />
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
        <TopNav/>
        {/* Main Content */}
        <div className="pt-32 px-16 relative z-10">
          {/* Search Bar */}
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-[200px] shadow-shadow-sm mb-8 max-w-[1384px] mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-3xl border border-solid border-[#dcdce2] w-80">
              <SearchIcon className="w-5 h-5 text-primary-900" />
              <div className="relative flex-1 h-5">
                <div className="absolute w-[252px] -top-px left-0 font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Profesional, tratamiento, centro
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-3xl border border-solid border-[#dcdce2] w-80">
              <MapPinIcon className="w-5 h-5 text-primary-900" />
              <div className="relative flex-1 h-5">
                <div className="absolute w-[252px] -top-px left-0 font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Ubicación
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-3xl border border-solid border-[#dcdce2] w-80">
              <CalendarIcon className="w-5 h-5 text-primary-900" />
              <div 
                className="relative flex-1 h-5 cursor-pointer"
                onClick={() => setIsCalendarModalOpen(true)}
              >
                <div className="absolute w-[252px] -top-px left-0 font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Fecha
                </div>
              </div>
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
              <span className="[font-family:'Inter',Helvetica] font-semibold text-primary-800 text-sm leading-5 whitespace-nowrap">
                Filtros avanzados
              </span>
            </Button>

            <Button className="px-4 py-2 bg-primary-900 rounded-3xl">
              <span className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-neutralswhite text-sm leading-[normal]">
                Buscar
              </span>
            </Button>
          </div>

          {/* Map Section */}
          <Card className="w-full max-w-[1384px] mx-auto mb-8 rounded-xl overflow-hidden shadow-shadow-sm bg-white" style={{ height: '265px' }}>
            <CardContent className="p-0 h-full relative">
              {/* Map image */}
              <img
                src="/mapa.png"
                alt="Mapa de ubicación"
                className="w-full h-full object-cover"
              />
              
              {/* Ver mapa button */}
              <Button 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-primary-900 text-white rounded-[24px] hover:bg-primary-700"
                onClick={() => setIsMapModalOpen(true)}
              >
                <span className="font-medium text-sm">Ver mapa</span>
              </Button>
            </CardContent>
          </Card>

          {/* Professionals Section */}
          <div className="space-y-6 max-w-[1384px] mx-auto mb-16">
            {professionals.map((professional) => (
              <Card key={professional.id} className="w-full shadow-shadow-sm rounded-xl bg-white">
                <CardContent className="flex p-6 gap-6">
                  {/* Professional/Center Image */}
                  <div className="w-[120px] h-[120px] flex-shrink-0">
                    {professional.type === "center" ? (
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
                    ) : (
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        alt={professional.name}
                        src={professional.image}
                      />
                    )}
                  </div>

                  {/* Professional Info */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div>
                      <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] mb-1">
                        {professional.name}
                      </h3>
                      {professional.specialty && (
                        <p className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] mb-2">
                          {professional.specialty}
                        </p>
                      )}
                      <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] mb-3">
                        {professional.services}
                      </p>
                      {professional.type === "professional" && (
                        <Button
                          variant="link"
                          className="text-primary-900 hover:underline p-0 h-auto text-sm font-medium"
                        >
                          Ver perfil profesional
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="flex-1 flex flex-col gap-3">
                    <h4 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                      Descripción
                    </h4>
                    <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] mb-3">
                      {professional.description}
                    </p>
                    
                    {/* Social Media */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-primary-900">{professional.socialMedia.instagram}</span>
                        <InstagramIcon className="w-4 h-4 text-primary-900" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-primary-900">{professional.socialMedia.facebook}</span>
                        <FacebookIcon className="w-4 h-4 text-primary-900" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-primary-900">{professional.socialMedia.linkedin}</span>
                        <LinkedinIcon className="w-4 h-4 text-primary-900" />
                      </div>
                    </div>
                  </div>

                  {/* Right Info and Button */}
                  <div className="flex flex-col justify-between w-[200px] flex-shrink-0">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4 text-primary-900" />
                        <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-xs">
                          {professional.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-primary-900" />
                        <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-xs">
                          {professional.phone}
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      className="px-4 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 mt-4"
                      onClick={() => handleAgendarClick(professional)}
                    >
                      <span className="font-medium text-sm">
                        Agendar una cita
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      <AdvancedFiltersModal
        isOpen={isFiltersModalOpen}
        onClose={() => setIsFiltersModalOpen(false)}
      />

      <CalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate}
      />

      <TimeSelectionModal
        isOpen={isTimeModalOpen}
        onClose={() => setIsTimeModalOpen(false)}
        buttonRef={timeButtonRef}
      />

      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
      />

      <CenterScheduleModal
        isOpen={isCenterScheduleModalOpen}
        onClose={() => setIsCenterScheduleModalOpen(false)}
      />

      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <MenuDropdown
        isOpen={isMenuDropdownOpen}
        onClose={() => setIsMenuDropdownOpen(false)}
        buttonRef={menuButtonRef}
      />
    </>
  );
};