import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GlobeIcon, MenuIcon, UserIcon } from "lucide-react";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { ServicesSection } from "./sections/ServicesSection";


export const TermsAndConditions = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  
// 👇 Aquí agregamos el estado del scroll
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Check if we came from the reembolsos option in support
  const showServicesSection = searchParams.get('from') === 'reembolsos';
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
      

        {/* Main Content */}
        <div className="pt-32 px-16 relative z-10">
          {showServicesSection && <ServicesSection />}
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
    </>
  );
};