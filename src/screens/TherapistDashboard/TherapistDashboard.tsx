import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobeIcon, MenuIcon, UserIcon } from "lucide-react";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { FooterSection } from "../Home/sections/FooterSection/FooterSection";

export const TherapistDashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  // Navigation menu items data
  const navItems = [
    { text: "Beneficios", active: false },
    { text: "Planes", active: false },
    { text: "Demo gratis", active: false },
  ];

  // Service data for mapping
  const services = [
    {
      title: "Acupuntura",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-2.svg",
    },
    {
      title: "Sangría",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-3.svg",
    },
    {
      title: "Fitoterapia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image.svg",
    },
    {
      title: "Ventosas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-1.svg",
    },
    {
      title: "Electropuntura",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-63.png",
    },
  ];

  // Data for the two paragraph columns
  const paragraphs = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  ];

  const handleStartFreeTrial = () => {
    navigate('/login');
  };

  return (
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
                <Link key={index} to={item.text === "Demo gratis" ? "/login" : "#"}>
                  <Button
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
                </Link>
              ))}
              
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] bg-shadow-50"
              >
                <Link to="/login" className="text-decoration-none">
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-lg text-shadow-900">
                    Inicia sesión
                  </span>
                </Link>
              </Button>
            </div>

            <Button className="inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl hover:bg-primary-800">
              <Link to="/" className="text-decoration-none">
                <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-neutralswhite text-lg leading-[normal] whitespace-nowrap">
                  Regístrate
                </span>
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side buttons - separate from main navbar */}
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

      {/* Background image positioned behind hero section */}
      <div 
        className="absolute top-0 left-0 w-full h-[1294px] bg-cover bg-center bg-no-repeat opacity-100 z-0"
        style={{ backgroundImage: 'url(/close-up-1.png)' }}
      />

      {/* Main Content */}
      <div className="pt-32 px-16 relative z-10">
        {/* Hero Section */}
        <Card className="flex flex-col items-center justify-center gap-8 px-16 py-16 relative bg-primary-100 rounded-3xl overflow-hidden shadow-shadow-sm w-full max-w-[1384px] mx-auto mb-8">
          <CardContent className="flex flex-col items-center gap-8 p-0">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="w-full max-w-[740px] [font-family:'Neue_Haas_Grotesk_Display_Pro-55Rg',Helvetica] font-normal text-primary-900 text-[52px] text-center tracking-[0] leading-[57.2px]">
                Sistema de Agendamiento y Asistencia Clínica de Acupuntura
              </h1>

              <h2 className="font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-primary-900 text-[length:var(--subtitle-1-font-size)] text-center tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] whitespace-nowrap [font-style:var(--subtitle-1-font-style)]">
                Acu-red Gestión y Tecnología para la Medicina China
              </h2>
            </div>

            {/* Management System Image */}
            <Card className="w-full max-w-[1000px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/sistema.png" 
                  alt="Sistema de Gestión de Pacientes" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Services Section */}
        <section className="flex items-center gap-[15px] px-0 py-28">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-shadow-base flex flex-col items-start gap-6 p-3 flex-1 bg-primary-50 rounded-xl"
            >
              <CardContent className="flex flex-col items-start gap-6 w-full p-0">
                <div className="flex items-start gap-2.5 w-full h-[145px] bg-primary-200 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={service.title}
                    src={service.image}
                  />
                </div>

                <div className="flex flex-col items-start gap-3 w-full">
                  <h3 className="w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-right tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                    {service.title}
                  </h3>

                  <div className="flex flex-col items-start gap-3 w-full">
                    <p className="w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="px-4 py-2 bg-primary-100 rounded-3xl [font-family:'Inter',Helvetica] font-medium text-primary-800 text-sm leading-5 h-auto"
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* About Us Section */}
        <section className="py-16 px-0 w-full">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <img
                    className="w-[680px] h-[653px] object-cover rounded-[24px]"
                    alt="Close up hand holding acupuncture needle"
                    src="/close-up-hand-holding-acupuncture-needle-1.png"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between gap-8">
                  <h2 className="font-['Neue_Haas_Grotesk_Display_Pro-55Rg',Helvetica] text-primary-900 text-4xl md:text-5xl leading-tight md:leading-[60px] font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam
                  </h2>

                  <div className="flex flex-col md:flex-row items-start gap-4 pr-3">
                    {paragraphs.map((paragraph, index) => (
                      <div
                        key={index}
                        className="font-paragraph-p3 text-black text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)] md:w-[208px]"
                      >
                        {paragraph.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section> 

        {/* Mobile App Section */}
        <section className="py-16 px-0 w-full">
          <Card className="w-full max-w-[1384px] mx-auto rounded-3xl overflow-hidden shadow-shadow-sm">
            <CardContent className="p-0">
              <img
                className="w-full h-auto object-cover"
                alt="Mobile App Interface"
                src="/gradient.png"
              />
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="py-16 px-0 w-full">
          <div className="flex flex-col items-center gap-8 max-w-[1384px] mx-auto">
            {/* Title and Description */}
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-['Neue_Haas_Grotesk_Display_Pro-55Rg',Helvetica] text-primary-900 text-4xl md:text-5xl leading-tight font-normal max-w-[800px]">
                Contrata Acu-red y lleva la atención de tus pacientes a un nuevo nivel.
              </h2>
              
              <p className="font-paragraph-p3 text-primary-900 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)] max-w-[600px]">
                Accede a los beneficios de nuestro sistema en línea desde
                el agendamiento hasta el pago, pre llenado de ficha clínica
                asistida por IA, base datos, foro y mucho más.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              className="px-8 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 text-lg"
              onClick={handleStartFreeTrial}
            >
              <span className="font-medium">
                Comienza tu prueba gratis
              </span>
            </Button>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-[900px] mt-8">
              {/* Agendamiento Card */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      {/* Placeholder for calendar icon - you can add your image here */}
                      <div className="w-8 h-8 bg-primary-500 rounded"></div>
                    </div>
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Agendamiento
                    </h3>
                    <p className="font-paragraph-p3 text-primary-900 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    {/* Image placeholder - replace with your image */}
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Agendamiento Image</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Foro Médico Card */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      {/* Placeholder for forum icon - you can add your image here */}
                      <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
                    </div>
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Foro médico
                    </h3>
                    <p className="font-paragraph-p3 text-primary-900 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    {/* Image placeholder - replace with your image */}
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Foro Médico Image</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fichas Clínicas Card */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      {/* Placeholder for clinical records icon - you can add your image here */}
                      <div className="w-8 h-8 bg-primary-500 rounded"></div>
                    </div>
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Fichas Clínicas
                    </h3>
                    <p className="font-paragraph-p3 text-primary-900 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    {/* Image placeholder - replace with your image */}
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Fichas Clínicas Image</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pagos y Facturas Card */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      {/* Placeholder for payments icon - you can add your image here */}
                      <div className="w-8 h-8 bg-primary-500 rounded"></div>
                    </div>
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Pagos y Facturas
                    </h3>
                    <p className="font-paragraph-p3 text-primary-900 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    {/* Image placeholder - replace with your image */}
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Pagos y Facturas Image</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
        {/* Pricing Plans Section */}
        <section className="py-16 px-0 w-full">
          <div className="flex flex-col items-center gap-8 max-w-[1384px] mx-auto">
            {/* Plans Title */}
            <h2 className="font-['Neue_Haas_Grotesk_Display_Pro-55Rg',Helvetica] text-primary-900 text-4xl md:text-5xl leading-tight font-normal text-center">
              Planes
            </h2>

            {/* Plans Grid */}
            <div className="grid grid-cols-4 gap-6 w-full">
              {/* Plan 1 */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Texto
                    </h3>
                    <p className="font-paragraph-p3 text-gray-600 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500">Desde</span>
                      <span className="text-3xl font-bold text-primary-900">$0</span>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary-900">↗</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                    </div>

                    <Button className="w-full px-4 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800">
                      <span className="font-medium text-sm">
                        Probar plan
                      </span>
                    </Button>

                    <div className="flex flex-col gap-2 mt-4">
                      {[...Array(7)].map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-sm text-primary-900">Texto</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plan 2 */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Texto
                    </h3>
                    <p className="font-paragraph-p3 text-gray-600 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500">Desde</span>
                      <span className="text-3xl font-bold text-primary-900">$0</span>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary-900">↗</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                    </div>

                    <Button className="w-full px-4 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800">
                      <span className="font-medium text-sm">
                        Probar plan
                      </span>
                    </Button>

                    <div className="flex flex-col gap-2 mt-4">
                      {[...Array(7)].map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-sm text-primary-900">Texto</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plan 3 */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Texto
                    </h3>
                    <p className="font-paragraph-p3 text-gray-600 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500">Desde</span>
                      <span className="text-3xl font-bold text-primary-900">$0</span>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary-900">↗</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                    </div>

                    <Button className="w-full px-4 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800">
                      <span className="font-medium text-sm">
                        Probar plan
                      </span>
                    </Button>

                    <div className="flex flex-col gap-2 mt-4">
                      {[...Array(7)].map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-sm text-primary-900">Texto</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plan 4 */}
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Texto
                    </h3>
                    <p className="font-paragraph-p3 text-gray-600 text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                      Accede a los beneficios de nuestro sistema en línea desde el agendamiento hasta el pago
                    </p>
                    
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500">Desde</span>
                      <span className="text-3xl font-bold text-primary-900">$0</span>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary-900">↗</span>
                        <span className="text-sm text-primary-900">Texto</span>
                      </div>
                    </div>

                    <Button className="w-full px-4 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800">
                      <span className="font-medium text-sm">
                        Probar plan
                      </span>
                    </Button>

                    <div className="flex flex-col gap-2 mt-4">
                      {[...Array(7)].map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-sm text-primary-900">Texto</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* Footer */}
      <FooterSection />

      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <MenuDropdown
        isOpen={isMenuDropdownOpen}
        onClose={() => setIsMenuDropdownOpen(false)}
        buttonRef={menuButtonRef}
      />
    </div>
  );
};