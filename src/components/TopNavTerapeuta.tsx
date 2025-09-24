// src/components/TopNav.tsx
import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { GlobeIcon, MenuIcon, UserIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 👇 importa los modales
import { LanguageModal } from "./LanguageModal";
import { MenuDropdownTerapeuta } from "./MenuDropdownTerapeuta";

export default function TopNavDefault(): JSX.Element {
  const [scrolled, setScrolled] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // set inicial
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fondo blanco con animación fade */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 w-full h-[90px] bg-white shadow-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Navbar centrado */}
      <NavigationMenu className="fixed top-[29px] left-1/2 -translate-x-1/2 bg-primary-50 rounded-[32px] border border-[#d3e0d7] shadow-shadow-sm backdrop-blur-[5.85px] z-50 h-[45px] flex items-center">

        <NavigationMenuList className="flex items-center gap-1 pl-3 pr-0 py-0">
          {/* Logo */}
          <NavigationMenuItem>
            <Link
              to="/therapist-dashboard"
              className="relative w-[92px] h-[21px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
            />
          </NavigationMenuItem>

          {/* Links principales */}
          <NavigationMenuItem>
            <Link
              to="/beneficios"
              className="text-[18px] font-bold text-primary-900 hover:text-primary-700 no-underline px-3 py-2 rounded-[25px]"
            >
              Beneficios
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/planes"
              className="text-[18px] font-bold text-primary-900 hover:text-primary-700 no-underline px-3 py-2 rounded-[25px]"
            >
              Planes
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/demo"
              className="text-[18px] font-bold text-primary-900 hover:text-primary-700 no-underline px-3 py-2 rounded-[25px]"
            >
              Demo gratis
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/login"
              className="text-[18px] font-bold text-primary-900 hover:text-primary-700 no-underline px-3 py-2 rounded-[25px]"
            >
              Inicia sesión
            </Link>
          </NavigationMenuItem>

          {/* Botón Registrarse */}
          <NavigationMenuItem>
            <Button className="h-[40px] inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl">
              <Link to="/registration" className="text-decoration-none">
                <span className="font-normal text-neutralswhite text-[18px] leading-[normal] whitespace-nowrap">
                  Regístrate
                </span>
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Botones derechos */}
      <div className="fixed top-[29px] right-8 flex items-center gap-2 z-50">
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-3 py-5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
          onClick={() => setIsLanguageModalOpen(true)}
        >
          <span className="text-[16px] text-gray-700 font-medium">Idioma</span>
          <GlobeIcon className="w-4 h-4 text-gray-600" />
        </Button>
        <div className="flex items-center gap-2 px-1 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
          <Button
            ref={menuButtonRef}
            variant="ghost"
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
            onClick={() => setIsMenuDropdownOpen((v) => !v)}
          >
            <span className="text-[16px] text-gray-700 font-medium">Menú</span>
            <MenuIcon className="w-4 h-4 text-gray-600" />
          </Button>

          <Button
            variant="ghost"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#d3e0d7] hover:bg-[#c5d4cc]"
          >
            <span className="text-[16px] text-gray-700 font-medium">Nombre</span>
            <UserIcon className="w-4 h-4 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* 👇 Renderiza los modales */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <MenuDropdownTerapeuta
        isOpen={isMenuDropdownOpen}
        onClose={() => setIsMenuDropdownOpen(false)}
        buttonRef={menuButtonRef}
      />
    </>
  );
}
