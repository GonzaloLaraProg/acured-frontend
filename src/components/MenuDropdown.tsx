import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 👈 usamos el contexto

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  setPositionFromButton: () => void;
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({
  isOpen,
  onClose,
  buttonRef,
}) => {
  const [position, setPosition] = React.useState<{ top: number; right: number } | null>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { user, logout } = useAuth(); // 👈 traemos sesión y logout

  // 👉 calcular posición del menú
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

  // 👉 cerrar si se hace click fuera
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

  return (
    <>
      {/* ------------------ MENU SIN SESIÓN ------------------ */}
      {!user && (
        <div
          ref={menuRef}
          className="fixed z-[60] bg-white rounded-xl shadow-md border border-gray-200 py-4 px-0 min-w-[240px]"
          style={{ top: `${position.top}px`, right: `${position.right}px` }}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-4 pb-3">
            <h3 className="font-bold text-primary-900 text-base">Para pacientes</h3>
          </div>

          {/* Items */}
          <div className="flex flex-col">
            <button
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 text-sm"
              onClick={() => {
                navigate("/about");
                onClose();
              }}
            >
              Quiénes somos
            </button>
            <button
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 text-sm"
              onClick={() => {
                navigate("/registration");
                onClose();
              }}
            >
              Regístrate
            </button>
            <button
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 text-sm"
              onClick={() => {
                navigate("/login");
                onClose();
              }}
            >
              Inicia sesión
            </button>
            <button
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 text-sm"
              onClick={() => {
                navigate("/support");
                onClose();
              }}
            >
              Ayuda/servicio al cliente
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 pt-3 border-t border-gray-200">
            <button
              onClick={() => {
                navigate("/therapist-dashboard");
                onClose();
              }}
              className="w-full text-left text-primary-900 font-semibold underline text-sm hover:text-primary-700"
            >
              Para acupunturistas
            </button>
          </div>
        </div>
      )}

      {/* ------------------ MENU CON SESIÓN ------------------ */}
      {user && (
        <div
          ref={menuRef}
          className="fixed z-[60] bg-white rounded-xl shadow-md border border-gray-200 py-4 px-0 min-w-[240px]"
          style={{ top: `${position.top}px`, right: `${position.right}px` }}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >

          {/* Items */}
          <div className="flex flex-col">
            <button
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 text-sm"
              onClick={() => {
                navigate("/patient-dashboard");
                onClose();
              }}
            >
              Ir a mis reservas
            </button>
          
            <button
              className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-50 text-sm"
              onClick={() => {
                navigate("/support");
                onClose();
              }}
            >
              Ayuda/servicio al cliente
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 pt-3 border-t border-gray-200">
            <button
              onClick={() => {
                logout();       // 👈 cerrar sesión desde AuthContext
                onClose();
                navigate("/");  // opcional: redirigir al inicio
              }}
              className="w-full text-left text-primary-900 font-semibold underline text-sm hover:text-primary-700"
            >
              Cerrar sesión
            </button>

          </div>
        </div>
      )}
    </>
  );
};
