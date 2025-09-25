// src/components/MenuDropdownTerapeuta.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 👈 para manejar sesión

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const MenuDropdownTerapeuta: React.FC<MenuDropdownProps> = ({
  isOpen,
  onClose,
  buttonRef,
}) => {
  const [position, setPosition] = React.useState<{ top: number; right: number } | null>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { user, logout } = useAuth(); // 👈 obtenemos estado y logout

  // 👉 función para calcular la posición (sin scrollY, porque usamos fixed)
  const updatePosition = React.useCallback(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + rect.height + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen, buttonRef]);

  React.useEffect(() => {
    if (isOpen) {
      updatePosition();
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  // 👉 cerrar al hacer click fuera
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      onClose();
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen || !position) return null;

  // ------------------- MENÚ SIN SESIÓN -------------------
  const menuItemsSinSesion = [
    { label: "Quiénes somos", path: "/about" },
    { label: "Regístrate", path: "/registration-acupunturist" },
    { label: "Inicia sesión", path: "/login" },
    { label: "Ayuda/servicio al cliente", path: "/support" },
  ];

  // ------------------- MENÚ CON SESIÓN -------------------
  const menuItemsConSesion = [
    { label: "Ir a mi acured", path: "/therapist-dashboard" },
    { label: "Ayuda/servicio al cliente", path: "/therapist-patients" },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed z-[60] bg-white rounded-xl shadow-md border border-gray-200 py-4 px-0 min-w-[240px]"
      style={{ top: `${position.top}px`, right: `${position.right}px` }}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      {/* Header → solo cuando NO hay sesión */}
      {!user && (
        <div className="px-4 pb-3">
          <h3 className="font-bold text-primary-900 text-base">
            Para acupunturistas
          </h3>
        </div>
      )}


      {/* Items */}
      <div className="flex flex-col">
        {(user ? menuItemsConSesion : menuItemsSinSesion).map((item) => (
          <button
            key={item.path}
            className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 text-sm"
            onClick={() => {
              navigate(item.path);
              onClose();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Footer link → depende del estado de sesión */}
      <div className="px-4 pt-3 border-t border-gray-200">
        {user ? (
          <button
            onClick={() => {
              logout(); // 👈 cierra sesión
              navigate("/therapist-dashboard");
              onClose();
            }}
            className="w-full text-left text-primary-900 font-semibold underline text-sm hover:text-primary-700"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/");
              onClose();
            }}
            className="w-full text-left text-primary-900 font-semibold underline text-sm hover:text-primary-700"
          >
            Para pacientes
          </button>
        )}
      </div>
    </div>
  );
};
