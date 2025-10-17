import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface TimeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const TimeSelectionModal: React.FC<TimeSelectionModalProps> = ({
  isOpen,
  onClose,
  buttonRef,
}) => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const [selectedTimeOption, setSelectedTimeOption] = React.useState("en-cualquier-momento");
  const [timeFrom, setTimeFrom] = React.useState("05:00 AM");
  const [timeTo, setTimeTo] = React.useState("06:00 AM");

  React.useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
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

  const timeOptions = [
    "05:00 AM", "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM",
    "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
  ];

  const timeSlotOptions = [
    { value: "en-cualquier-momento", label: "En cualquier momento" },
    { value: "manana", label: "Mañana" },
    { value: "tarde", label: "Tarde" },
  ];

  return (
    <div 
      className="absolute z-[60] bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col gap-6 p-6"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: '412px',
        height: '219px',
      }}
    >
      {/* Time slot buttons */}
      <div className="flex items-center gap-2">
        {timeSlotOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            onClick={() => setSelectedTimeOption(option.value)}
            className={`px-4 py-2 rounded-3xl text-sm font-medium ${
              selectedTimeOption === option.value
                ? "bg-primary-900 text-white hover:bg-primary-800"
                : "bg-primary-100 text-primary-800 hover:bg-primary-200"
            }`}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200" />

      {/* Personalizar section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-base font-medium text-primary-900">
          Personalizar
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-primary-900">Desde</span>
            <Select value={timeFrom} onValueChange={setTimeFrom}>
              <SelectTrigger className="w-32 bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue />
                <ChevronDownIcon className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent>
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-primary-900">Hasta</span>
            <Select value={timeTo} onValueChange={setTimeTo}>
              <SelectTrigger className="w-32 bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue />
                <ChevronDownIcon className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent>
                {timeOptions.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
              
            </Select>
            
          </div>

          
        </div>
        
      </div>
      
    </div>
    
  );
};