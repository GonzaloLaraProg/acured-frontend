import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CalendarIcon, ClockIcon, MapPinIcon, SearchIcon, VideoIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AdvancedFiltersModal } from "../../components/AdvancedFiltersModal";
import { CalendarModal } from "../../components/CalendarModal";
import { FooterSection } from "../Home/sections/FooterSection";

export const SearchResults = (): JSX.Element => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = React.useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date>(() => {
    // Default to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const navigate = useNavigate();

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

  // Navigation menu items data
  const navItems = [
    { text: "Agenda tu hora", active: true },
    { text: "Planes", active: false },
    { text: "Demo gratis", active: false },
  ];

  // Professional data
  const professionals = [
    {
      id: 1,
      name: "Profesional",
      specialty: "Especialidad",
      services: "Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      address: "Antonio varas 320, Providencia",
      modality: "Modalidad",
      duration: "Duración",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook", 
        linkedin: "Linkedin"
      }
    },
    {
      id: 2,
      name: "Profesional",
      specialty: "Especialidad",
      services: "Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      address: "Antonio varas 320, Providencia",
      modality: "Modalidad",
      duration: "Duración",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 3,
      name: "Profesional",
      specialty: "Especialidad",
      services: "Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      address: "Antonio varas 320, Providencia",
      modality: "Modalidad",
      duration: "Duración",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 4,
      name: "Profesional",
      specialty: "Especialidad",
      services: "Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      address: "Antonio varas 320, Providencia",
      modality: "Modalidad",
      duration: "Duración",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    },
    {
      id: 5,
      name: "Profesional",
      specialty: "Especialidad",
      services: "Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio, Servicio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      address: "Antonio varas 320, Providencia",
      modality: "Modalidad",
      duration: "Duración",
      image: "/profesional.jpg",
      socialMedia: {
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "Linkedin"
      }
    }
  ];

  const handleAgendarClick = (professionalId: number) => {
    // Navigate directly to schedule selection, skipping service selection
    navigate('/schedule-selection');
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
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] ${
                      item.active ? "bg-primary-50" : "bg-shadow-50"
                    }`}
                  >
                    <span
                      className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-lg ${
                        item.active ? "text-primary-900" : "text-shadow-900"
                      }`}
                    >
                      {item.text}
                    </span>
                  </Button>
                ))}
              </div>

              <Button className="inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl">
                <Link to="/therapist-dashboard" className="text-decoration-none">
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-neutralswhite text-lg leading-[normal] whitespace-nowrap">
                    Eres terapeuta
                  </span>
                </Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
                  {formatDate(selectedDate)}
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              className="px-4 py-2 bg-primary-100 rounded-3xl"
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
                src="/mapa.png" // Reemplaza con la ruta correcta de tu imagen
                alt="Mapa de ubicación"
                className="w-full h-full object-cover"
              />
              
              {/* Ver mapa button */}
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-primary-900 text-white rounded-[24px] hover:bg-primary-700">
                <span className="font-medium text-sm">Ver mapa</span>
              </Button>
            </CardContent>
          </Card>

          {/* Professionals Section */}
          <div className="space-y-6 max-w-[1384px] mx-auto mb-16">
            {professionals.map((professional) => (
              <Card key={professional.id} className="w-full shadow-shadow-sm rounded-xl bg-white">
                <CardContent className="flex p-6 gap-6">
                  {/* Professional Image */}
                  <div className="w-[200px] h-[150px] flex-shrink-0">
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      alt={professional.name}
                      src={professional.image}
                    />
                  </div>

                  {/* Professional Info */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div>
                      <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] mb-1">
                        {professional.name}
                      </h3>
                      <p className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] mb-2">
                        {professional.specialty}
                      </p>
                      <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] mb-3">
                        {professional.services}
                      </p>
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="flex-1 flex flex-col gap-3">
                    <h4 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                      Descripción del servicio
                    </h4>
                    <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] mb-3">
                      {professional.description}
                    </p>
                    
                    {/* Social Media */}
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-primary-900">{professional.socialMedia.instagram}</span>
                      <span className="font-semibold text-primary-900">{professional.socialMedia.facebook}</span>
                      <span className="font-semibold text-primary-900">{professional.socialMedia.linkedin}</span>
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
                        <VideoIcon className="w-4 h-4 text-primary-900" />
                        <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-xs">
                          {professional.modality}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4 text-primary-900" />
                        <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-xs">
                          {professional.duration}
                        </span>
                      </div>
                    </div>
                    
                    <Button className="px-4 py-2 bg-primary-100 text-primary-800 rounded-3xl hover:bg-primary-200 mt-4">
                      <span 
                        className="font-medium text-sm cursor-pointer"
                        onClick={() => handleAgendarClick(professional.id)}
                      >
                        Agendar
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <FooterSection />
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
    </>
  );
};