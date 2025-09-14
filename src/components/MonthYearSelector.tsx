import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface MonthYearSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  currentMonth: string;
  currentYear: string;
  onMonthYearChange: (month: string, year: string) => void;
}

export const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({
  isOpen,
  onClose,
  currentMonth,
  currentYear,
  onMonthYearChange,
}) => {
  const [selectedMonth, setSelectedMonth] = React.useState(currentMonth);
  const [selectedYear, setSelectedYear] = React.useState(currentYear);

  if (!isOpen) return null;

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const daysOfWeek = ["LU", "MA", "MI", "JU", "VI", "SÁ", "DO"];

  // Generate calendar days for the selected month/year
  const getDaysInMonth = () => {
    const monthIndex = months.indexOf(selectedMonth);
    const year = parseInt(selectedYear);
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Adjust for Monday start

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    const currentIndex = months.indexOf(selectedMonth);
    if (currentIndex === 0) {
      setSelectedMonth("Diciembre");
      setSelectedYear((parseInt(selectedYear) - 1).toString());
    } else {
      setSelectedMonth(months[currentIndex - 1]);
    }
  };

  const handleNextMonth = () => {
    const currentIndex = months.indexOf(selectedMonth);
    if (currentIndex === 11) {
      setSelectedMonth("Enero");
      setSelectedYear((parseInt(selectedYear) + 1).toString());
    } else {
      setSelectedMonth(months[currentIndex + 1]);
    }
  };

  const handleDateClick = (day: number) => {
    onMonthYearChange(selectedMonth, selectedYear);
  };

  const days = getDaysInMonth();

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Calendar Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-[400px] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </Button>
          
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium text-gray-900">
              {selectedMonth}
            </span>
            <span className="text-xl font-medium text-gray-900">
              {selectedYear}
            </span>
          </div>

          <Button
            variant="ghost"
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </Button>
        </div>

        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <div key={index} className="aspect-square">
              {day ? (
                <button
                  onClick={() => handleDateClick(day)}
                  className="w-full h-full flex items-center justify-center text-sm rounded-full hover:bg-gray-100 transition-colors text-gray-900"
                >
                  {day}
                </button>
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};