import React, { useState } from "react";
import { MenuIcon, XIcon, CreditCardIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

interface NavigationSectionProps {
  onLogout?: () => void;
  userType?: "paciente" | "terapeuta" | "clinica";
}

export const NavigationSection = ({
  onLogout,
  userType = "terapeuta",
}: NavigationSectionProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Rutas de navegación según el tipo de usuario
  const getNavigationSections = () => {
    if (userType === "clinica") {
      return [
        {
          title: "CLÍNICA",
          items: [
            { icon: "/icon-calendar-clear-outline.svg", text: "Calendario", path: "/clinica/calendario" },
            { icon: "/icon-albums-outline.svg", text: "Gestión de pacientes", path: "/clinica/gestion-pacientes" },
          ],
        },
        {
          title: "COMUNIDAD",
          items: [
            { icon: "/icon-add.svg", text: "Dashboard", path: "/comunidad" },
            { icon: "/icon-chatbubbles-outline.svg", text: "Foro", path: "/foro" },
          ],
        },
        {
          title: "AJUSTES",
          items: [
            { icon: "/icon-cog-outline.svg", text: "Gestión de citas", path: "/clinica/ajustes" },
            { icon: "credit-card", text: "Pagos y facturación", path: "/clinica/pagos" },
            { icon: "/icon-person-outline.svg", text: "Perfil", path: "/clinica/perfil" },
            { icon: "/icon-document-text-outline.svg", text: "Formularios", path: "/clinica/formularios" },
          ],
        },
      ];
    } else if (userType === "terapeuta") {
      return [
        {
          title: "CLÍNICA",
          items: [
            { icon: "/icon-calendar-clear-outline.svg", text: "Calendario", path: "/terapeuta/calendario" },
            { icon: "/icon-albums-outline.svg", text: "Gestión de pacientes", path: "/terapeuta/gestion-pacientes" },
          ],
        },
        {
          title: "COMUNIDAD",
          items: [
            { icon: "/icon-add.svg", text: "Dashboard", path: "/comunidad" },
            { icon: "/icon-chatbubbles-outline.svg", text: "Foro", path: "/foro" },
          ],
        },
        {
          title: "AJUSTES",
          items: [
            { icon: "/icon-cog-outline.svg", text: "Gestión de citas", path: "/terapeuta/ajustes" },
            { icon: "credit-card", text: "Pagos y facturación", path: "/terapeuta/pagos" },
            { icon: "/icon-person-outline.svg", text: "Perfil", path: "/terapeuta/perfil" },
            { icon: "/icon-document-text-outline.svg", text: "Formularios", path: "/terapeuta/formularios" },
            { icon: "credit-card", text: "Subscripción", path: "/terapeuta/formularios" },
          ],
        },
      ];
    } else {
      return [
        {
          title: "COMUNIDAD",
          items: [
            { icon: "/icon-add.svg", text: "Dashboard", path: "/comunidad" },
            { icon: "/icon-chatbubbles-outline.svg", text: "Foro", path: "/foro" },
          ],
        },
      ];
    }
  };

  const navigationSections = getNavigationSections().map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      icon:
        item.icon === "credit-card" ? (
          <CreditCardIcon className="w-5 h-5" />
        ) : (
          <img src={item.icon} alt={item.text} className="w-5 h-5" />
        ),
      label: item.text,
      path: item.path,
      active: location.pathname === item.path,
    })),
  }));

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      window.location.reload();
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getUserTypeLabel = () => {
    switch (userType) {
      case "clinica":
        return "Administrador";
      case "terapeuta":
        return "Terapeuta Individual";
      case "paciente":
        return "Paciente";
      default:
        return "Usuario";
    }
  };

  return (
    <>
      {/* Botón menú móvil */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMobileMenu}
          className="p-2 bg-white shadow-md rounded-lg"
        >
          {isMobileMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Overlay móvil */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        flex flex-col bg-primary-50 z-40
        lg:relative lg:w-64 lg:min-w-64 lg:translate-x-0 lg:h-auto lg:min-h-screen
        fixed top-0 left-0 h-full w-80 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full lg:min-h-screen">
          <div className="flex flex-col h-full lg:h-auto overflow-y-auto lg:overflow-visible">
            {/* Logo */}
            <div className="spacing-6 flex-shrink-0 ml-6">
              <img
                className="h-8 w-auto"
                alt="Acured LOGO"
                src="/acured-logo-1.png"
              />
            </div>
            <br />

            {/* Usuario */}
            <div className="spacing-6 flex-shrink-0 ml-6">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/ava.svg" alt="User avatar" />
                  <AvatarFallback className="bg-primary-200 text-primary-600">
                    N
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="text-body-md font-semibold ">
                    Nombre
                  </div>
                  <div className="text-body-sm text-shadow-500">
                    {getUserTypeLabel()}
                  </div>
                </div>
              </div>
            </div>

            <br />

            {/* Navegación */}
            <nav className="flex-1 spacing-4 lg:flex-none ml-6">
              {navigationSections.map((section, sectionIndex) => (
                <div key={`section-${sectionIndex}`} className="mb-6">
                  <div className="mb-2">
                    <h3 className="font-inter text-[12px] text-shadow-600 uppercase ">
                      {section.title}
                    </h3>
                  </div>

                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={`item-${sectionIndex}-${itemIndex}`}
                        to={item.path}
                        className={`relative flex items-center gap-3 px-1 py-2 rounded-lg transition-all duration-200 ${
                          item.active
                            ? " shadow-xs"
                            : "text-shadow-700 hover:bg-primary-100/50 hover:text-primary-600"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {/* Fondo activo controlado */}
                        {item.active && (
                          <span
                            aria-hidden
                            className="absolute inset-y-0 left-[-12px] right-6 rounded-lg bg-primary-100 shadow-xs -z-10"
                          />
                        )}

                        {item.icon}
                        <span className="text-body-md relative z-10">{item.label}</span>
                      </Link>

                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <div className="spacing-4 mt-auto lg:pb-6 flex-shrink-0 ml-6">
            <Button
              variant="ghost"
              className="w-full justify-start text-shadow-700 hover:text-primary-600 hover:bg-primary-100/50 text-body-sm underline"
              onClick={handleLogout}
            >
              Log out
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
