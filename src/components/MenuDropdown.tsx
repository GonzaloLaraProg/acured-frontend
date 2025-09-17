import React from "react";
import { useNavigate } from "react-router-dom";

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  setPositionFromButton: () => void; // 👈 nueva prop para calcular posición
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({
  isOpen,
  onClose,
  buttonRef,
  setPositionFromButton,
}) => {
  const [position, setPosition] = React.useState<{ top: number; right: number } | null>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // 👇 usamos la prop para calcular la posición
  React.useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + rect.height + window.scrollY + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen, buttonRef]);

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

  if (!isOpen || !position) return null; // 👈 no renderiza hasta tener posición

  const menuItems = [
    { label: "Quiénes somos", path: "/about" },
    { label: "Regístrate", path: "/registration" },
    { label: "Inicia sesión", path: "/login" },
    { label: "Ayuda/servicio al cliente", path: "/support" },
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
      <div className="px-4 pb-3">
        <h3 className="font-bold text-primary-900 text-base">Para pacientes</h3>
      </div>

      {/* Items */}
      <div className="flex flex-col">
        {menuItems.map((item) => (
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

      {/* Footer link */}
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
  );
};
