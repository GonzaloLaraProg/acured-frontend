import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, FilterIcon, GlobeIcon, MapPinIcon, MenuIcon, SearchIcon, UserIcon } from "lucide-react";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesListSection } from "./sections/ServicesListSection/ServicesListSection";
import { ServicesSection } from "./sections/ServicesSection";

export const Home = (): JSX.Element => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
    <div className="relative w-full bg-primary-50 overflow-hidden">
      {/* Navigation */}
      <NavigationMenu className="mt-[29px] mx-auto w-fit bg-primary-50 rounded-[32px] border border-solid border-[#d3e0d7] shadow-shadow-sm backdrop-blur-[5.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.85px)_brightness(100%)]">
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
                className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] bg-shadow-50"
              >
                <Link to="/login" className="text-decoration-none">
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-lg text-shadow-900">
                    Inicia sesión
                  </span>
                </Link>
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

      {/* Right side buttons - separate from main navbar */}
      <div className="absolute top-[29px] right-8 flex items-center gap-2 z-50">
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
        className="absolute top-0 left-0 w-full h-[884px] bg-cover bg-center bg-no-repeat opacity-100 z-0"
        style={{ backgroundImage: 'url(/close-up-1.png)' }}
      />
      
      <div className="w-full relative z-10">
        <div className="flex flex-col w-full items-center relative">
          <HeroSection />
          <ServicesSection />
          <ServicesListSection />
          <AboutUsSection />
          <FooterSection />
        </div>
      </div>
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
    </>
  );
};
