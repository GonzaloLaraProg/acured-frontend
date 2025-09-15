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
