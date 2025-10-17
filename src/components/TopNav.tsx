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
import { LanguageModal } from "./LanguageModal";
import { useNavigate } from "react-router-dom";
import { MenuDropdown } from "./MenuDropdown";
import { useAuth } from "../context/AuthContext"; // 👈 usamos el contexto

interface TopNavProps {
  isPrefilledView?: boolean;
}

export default function TopNav({ isPrefilledView = false }: TopNavProps): JSX.Element {
  const [scrolled, setScrolled] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const navigate = useNavigate();


  const { user, logout } = useAuth(); // 👈 traemos user y logout

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fondo con animación */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 w-full h-[90px] bg-white/80 backdrop-blur-sm shadow-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* ------------------ NAVBAR SIN SESIÓN ------------------ */}
      {!user && (
        <>
          <NavigationMenu
            className="fixed top-[29px] left-1/2 -translate-x-1/2 
                       bg-white/80 backdrop-blur-[5.85px] 
                       rounded-[32px] border border-[#d3e0d7] 
                       shadow-shadow-sm z-50"
          >
            <NavigationMenuList className="flex items-center gap-2.5 pl-3 pr-0 py-0">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="relative w-[92px] h-[21px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
                />
              </NavigationMenuItem>

              <NavigationMenuItem className="inline-flex items-center gap-2 pl-0.5 pr-1 py-0.5 rounded-[40px]">
                <div className="inline-flex items-center">
                  <Button
                    variant="ghost"
                    className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] bg-primary-50/80"
                  >
                    <Link to="/login" className="text-decoration-none">
                      <span className="font-bold text-lg text-primary-900">
                        Inicia sesión
                      </span>
                    </Link>
                  </Button>
                </div>

                <Button className="inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl">
                  <Link to="/therapist-dashboard" className="text-decoration-none">
                    <span className="font-normal text-neutralswhite text-lg leading-[normal] whitespace-nowrap">
                      ¿Eres acupunturista?
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
              <span className="text-sm text-gray-700 font-medium">Idioma</span>
              <img src="/icon-earth-sharp.svg" alt="Idioma" className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2 px-1 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
              <Button
                ref={menuButtonRef}
                variant="ghost"
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
                onClick={() => setIsMenuDropdownOpen((v) => !v)}
              >
                <span className="text-sm text-gray-700 font-medium">Menú</span>
                <MenuIcon className="w-4 h-4 text-gray-600" />
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#d3e0d7] hover:bg-[#c5d4cc]"
                onClick={() => navigate("/login?step=patient")}
              >
                <img src="/icon-person-outline.svg" alt="User" className="w-5 h-5" />
              </Button>

            </div>
          </div>
        </>
      )}

      {/* ------------------ NAVBAR CON SESIÓN (Paciente logueado) ------------------ */}
      {user && (
        <>
          <NavigationMenu
            className="fixed top-[29px] left-1/2 -translate-x-1/2 
                       bg-white/80 backdrop-blur-[5.85px] 
                       rounded-[32px] border border-[#d3e0d7] 
                       shadow-shadow-sm z-50"
          >
            <NavigationMenuList className="flex items-center gap-2.5 pl-3 pr-0 py-0">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="relative w-[92px] h-[21px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
                />
              </NavigationMenuItem>

              <NavigationMenuItem className="inline-flex items-center gap-2 pl-0.5 pr-1 py-0.5 rounded-[40px]">
                <div className="inline-flex items-center">
                  <Button
                    variant="ghost"
                    className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] bg-primary-50/80"
                  >
                    <Link to="/search-results" className="text-decoration-none">
                      <span className="font-bold text-lg text-primary-900">
                        Agenda una cita
                      </span>
                    </Link>
                  </Button>
                </div>

                <Button className="inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl">
                  <Link to="/therapist-dashboard" className="text-decoration-none">
                    <span className="font-normal text-neutralswhite text-lg leading-[normal] whitespace-nowrap">
                      ¿Eres acupunturista?
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
              <span className="text-sm text-gray-700 font-medium">Idioma</span>
              <img src="/icon-earth-sharp.svg" alt="Idioma" className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2 px-1 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
             

              <Button
                ref={menuButtonRef}
                variant="ghost"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#d3e0d7] hover:bg-[#c5d4cc]"
                onClick={() => setIsMenuDropdownOpen((v) => !v)}
              >
                <span className="text-sm text-gray-700 font-medium">
                  {user?.name}
                </span>
                <img src="/icon-person-outline.svg" alt="User" className="w-5 h-5" />
              </Button>
            </div>

          </div>
        </>
      )}

      {/* Modales */}
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
}
