"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RangeCalendarProps {
  value: { start: Date | null; end: Date | null };
  onChange: (range: { start: Date | null; end: Date | null }) => void;
}

export const RangeCalendar: React.FC<RangeCalendarProps> = ({
  value,
  onChange,
}) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const start = value.start;
  const end = value.end;

  const daysOfWeek = ["L", "M", "X", "J", "V", "S", "D"];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  // en JS: 0=Domingo → lo ajustamos a Lunes como inicio
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentYear, currentMonth, day);

    if (!start || (start && end)) {
      // si no hay inicio o ya hay rango → reiniciamos
      onChange({ start: clickedDate, end: null });
    } else if (start && !end) {
      // si hay inicio pero no fin
      if (clickedDate < start) {
        onChange({ start: clickedDate, end: start });
      } else {
        onChange({ start, end: clickedDate });
      }
    }
  };

  const isInRange = (date: Date) => {
    if (!start || !end) return false;
    return date >= start && date <= end;
  };

  const isStart = (date: Date) =>
    start && date.toDateString() === start.toDateString();
  const isEnd = (date: Date) =>
    end && date.toDateString() === end.toDateString();

  return (
    <div className="w-full border rounded-lg p-4 bg-white">
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() =>
            setCurrentMonth((prev) =>
              prev === 0 ? (setCurrentYear(currentYear - 1), 11) : prev - 1
            )
          }
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-medium">
          {new Date(currentYear, currentMonth).toLocaleString("es-ES", {
            month: "long",
          })}{" "}
          {currentYear}
        </span>
        <button
          onClick={() =>
            setCurrentMonth((prev) =>
              prev === 11 ? (setCurrentYear(currentYear + 1), 0) : prev + 1
            )
          }
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 mb-1">
        {daysOfWeek.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Días */}
      <div className="grid grid-cols-7 text-sm">
        {Array.from({ length: adjustedFirstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(currentYear, currentMonth, day);

          const inRange = isInRange(date);
          const startSelected = isStart(date);
          const endSelected = isEnd(date);

          return (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`p-2 m-0.5 rounded-full text-center transition
                ${
                  startSelected || endSelected
                    ? "bg-green-700 text-white"
                    : inRange
                    ? "bg-green-200 text-green-900"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};
