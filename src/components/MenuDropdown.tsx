import React from "react";
import { Button } from "./ui/button";

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({
  isOpen,
  onClose,
  buttonRef,
}) => {
  const [position, setPosition] = React.useState({ top: 0, right: 0 });

  React.useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen, buttonRef]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  const menuItems = [
    "Quiénes somos",
    "Regístrate/inicia sesión", 
    "Ayuda/servicio al cliente"
  ];

  return (
    <div 
      className="fixed z-[100] bg-white rounded-lg shadow-lg border border-gray-200 py-4 px-0 min-w-[220px]"
      style={{
        top: `${position.top}px`,
        right: `${position.right}px`,
      }}
    >
      {/* Header */}
      <div className="px-4 pb-3 border-b border-gray-200">
        <h3 className="font-medium text-primary-900 text-base">
          Para pacientes
        </h3>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full px-4 py-2 text-left text-primary-900 hover:bg-gray-50 text-sm font-normal"
            onClick={onClose}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Footer Button */}
      <div className="px-4 pt-3 border-t border-gray-200">
        <Button 
          className="w-full px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 text-sm"
          onClick={onClose}
        >
          Para acupunturistas
        </Button>
      </div>
    </div>
  );
};