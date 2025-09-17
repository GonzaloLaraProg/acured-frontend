import React from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RangeCalendar } from "./RangeCalendar";

interface AdvancedFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvancedFiltersModal: React.FC<AdvancedFiltersModalProps> = ({
  isOpen,
  onClose,
}) => {
  // estados
  const [selectedSpecialty, setSelectedSpecialty] = React.useState("");
  const [selectedDistance, setSelectedDistance] = React.useState("");
  const [selectedModality, setSelectedModality] = React.useState("");
  const [timeFrom, setTimeFrom] = React.useState("05:00 AM");
  const [timeTo, setTimeTo] = React.useState("06:00 AM");
  const [priceRange, setPriceRange] = React.useState([35000, 100000]);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = React.useState<string[]>([]);
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  if (!isOpen) return null;

  // opciones
  const specialties = [
    "Medicina China General",
    "Dolor y trastornos musculoesqueléticos",
    "Rehabilitación y Medicina Deportiva",
    "Medicina Interna",
    "Ginecología y Fertilidad",
    "Trastornos Neurológicos",
    "Salud Mental, Dermatología",
    "Pediatría, Oncología y Cuidados Paliativos",
    "Medicina Estética",
  ];

  const distances = ["< 1km", "< 2km", "< 5km", "< 10km", "< 20km"];

  const modalities = ["Presencial", "Online"];

  const timeSlots = [
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
  ];

  const services = [
    "Medicina China Integral",
    "Acupuntura",
    "Moxibustión",
    "Ventosas",
    "Masaje Tuina",
    "Fitoterapia",
    "Auriculoterapia",
    "Dietoterapia",
    "Sangría",
    "Agua de fuego",
    "Gua Sha",
    "Qigong",
    "Otros",
  ];

  const genders = ["Femenino", "Masculino", "Otro"];

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleGenderToggle = (gender: string) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const fmt = (d: Date | null) => {
    if (!d) return "";
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const rangeLabel =
    dateRange.start && dateRange.end
      ? `${fmt(dateRange.start)} — ${fmt(dateRange.end)}`
      : "Selecciona Rango de Fechas";

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg 
      w-full max-w-[500px] mx-4 
      mt-[90px]          /* 👈 margen para no tapar navbar */
      max-h-[85vh]       /* 👈 controla altura máxima */
      overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Filtros avanzados
          </h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
          >
            <span className="text-sm">Cerrar</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Contenido */}
        <div className="divide-y divide-gray-200">
          {/* Especialidad */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">
              Especialidad
            </label>
            <div className="w-[280px]">
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Selecciona Especialidad" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Distancia */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">
              Distancia (km)
            </label>
            <div className="w-[280px]">
              <Select
                value={selectedDistance}
                onValueChange={setSelectedDistance}
              >
                <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Selecciona Distancia (km)" />
                </SelectTrigger>
                <SelectContent>
                  {distances.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Modalidad */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">
              Modalidad
            </label>
            <div className="w-[280px]">
              <Select
                value={selectedModality}
                onValueChange={setSelectedModality}
              >
                <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue placeholder="Selecciona Modalidad" />
                </SelectTrigger>
                <SelectContent>
                  {modalities.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Rango de Fechas */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">
              Rango de Fechas
            </label>
            <div className="w-[280px]">
              <button
                type="button"
                onClick={() => setShowCalendar((v) => !v)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-left text-sm flex items-center justify-between"
              >
                <span
                  className={
                    dateRange.start && dateRange.end
                      ? "text-primary-900"
                      : "text-gray-500"
                  }
                >
                  {rangeLabel}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showCalendar ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showCalendar && (
                <div className="mt-2">
                  <RangeCalendar
                    value={dateRange}
                    onChange={(r) => {
                      setDateRange(r);
                      if (r.start && r.end) setShowCalendar(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Hora */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">Hora</label>
            <div className="w-[280px] grid grid-cols-2 gap-3">
              <Select value={timeFrom} onValueChange={setTimeFrom}>
                <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={timeTo} onValueChange={setTimeTo}>
                <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Precio */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">Precio</label>
            <div className="w-[280px] space-y-3">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
              <div className="relative px-3">
                <div className="w-full h-2 bg-primary-200 rounded-full"></div>
                <div
                  className="absolute top-0 h-2 bg-primary-900 rounded-full"
                  style={{
                    left: `${(priceRange[0] / 100000) * 100}%`,
                    width: `${((priceRange[1] - priceRange[0]) / 100000) * 100}%`,
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[0]}
                  onChange={(e) =>
                    handlePriceChange(0, parseInt(e.target.value))
                  }
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-500 [&::-webkit-slider-thumb]:rounded-full"
                />
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    handlePriceChange(1, parseInt(e.target.value))
                  }
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-500 [&::-webkit-slider-thumb]:rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Servicio o técnica */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">
              Servicio o técnica
            </label>
            <div className="w-[280px]">
            
            <Select>
            <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg min-h-[44px]">
              <div className="flex flex-wrap gap-1">
                {selectedServices.length > 0 ? (
                  selectedServices.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full whitespace-nowrap"
                    >
                      {s}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">Selecciona servicio o técnica</span>
                )}
              </div>
            </SelectTrigger>

            <SelectContent>
              <div className="p-2 space-y-2 max-h-[200px] overflow-y-auto">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center justify-between space-x-2 py-1"
                  >
                    <Label
                      htmlFor={service}
                      className="text-sm text-gray-900 flex-1 cursor-pointer"
                    >
                      {service}
                    </Label>
                    <Checkbox
                      id={service}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                      className="rounded border-gray-300"
                    />
                  </div>
                ))}
              </div>
            </SelectContent>
          </Select>



            </div>
          </div>

          {/* Género */}
          <div className="flex items-start justify-between px-6 py-4">
            <label className="text-sm font-medium text-gray-900">Género</label>
            <div className="w-[280px]">
              <Select>
                <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg min-h-[44px]">
                  <div className="flex flex-wrap gap-1">
                    {selectedGenders.length > 0 ? (
                      selectedGenders.map((g) => (
                        <span
                          key={g}
                          className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full whitespace-nowrap"
                        >
                          {g}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400">Selecciona Género</span>
                    )}
                  </div>
                </SelectTrigger>

                <SelectContent>
                  <div className="p-2 space-y-2">
                    {genders.map((gender) => (
                      <div
                        key={gender}
                        className="flex items-center justify-between space-x-2 py-1"
                      >
                        <Label
                          htmlFor={gender}
                          className="text-sm text-gray-900 flex-1 cursor-pointer"
                        >
                          {gender}
                        </Label>
                        <Checkbox
                          id={gender}
                          checked={selectedGenders.includes(gender)}
                          onCheckedChange={() => handleGenderToggle(gender)}
                          className="rounded border-gray-300"
                        />
                      </div>
                    ))}
                  </div>
                </SelectContent>
              </Select>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200 rounded-b-2xl">
          <Button
            className="px-10 py-3 bg-primary-900 text-white rounded-full hover:bg-primary-800"
            onClick={onClose}
          >
            Buscar resultados
          </Button>
        </div>

      </div>
    </div>
  );
};
