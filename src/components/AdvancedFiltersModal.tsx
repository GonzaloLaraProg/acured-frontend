import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface AdvancedFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvancedFiltersModal: React.FC<AdvancedFiltersModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = React.useState("");
  const [selectedDistance, setSelectedDistance] = React.useState("");
  const [selectedModality, setSelectedModality] = React.useState("");
  const [selectedDateRange, setSelectedDateRange] = React.useState("");
  const [timeFrom, setTimeFrom] = React.useState("05:00 AM");
  const [timeTo, setTimeTo] = React.useState("06:00 AM");
  const [priceRange, setPriceRange] = React.useState([35000, 100000]);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = React.useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState("Mes");
  const [currentYear, setCurrentYear] = React.useState("2025");

  if (!isOpen) return null;

  const specialties = [
    "Medicina China General",
    "Dolor y trastornos musculoesqueléticos",
    "Rehabilitación y Medicina Deportiva",
    "Medicina Interna",
    "Ginecología y Fertilidad",
    "Trastornos Neurológicos",
    "Salud Mental, Dermatología",
    "Pediatría, Oncología y Cuidados Paliativos",
    "Medicina Estética"
  ];

  const distances = [
    "< 1km",
    "< 2km",
    "< 5km",
    "< 10km",
    "< 20km"
  ];

  const modalities = [
    "Presencial",
    "Online"
  ];

  const timeSlots = [
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM"
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
    "Otros"
  ];

  const genders = [
    "Femenino",
    "Masculino",
    "Otro"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleGenderToggle = (gender: string) => {
    setSelectedGenders(prev => 
      prev.includes(gender) 
        ? prev.filter(g => g !== gender)
        : [...prev, gender]
    );
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  // Calendar days for the mini calendar
  const getDaysInMonth = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  const daysOfWeek = ["LU", "MA", "MI", "JU", "VI", "SÁ", "DO"];
  const days = getDaysInMonth();

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center pt-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[500px] mx-4 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 rounded-t-2xl">
          <h2 className="text-lg font-medium text-gray-900">
            Filtros avanzados
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 p-1"
          >
            <span className="text-sm">Cerrar</span>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Content */}
        <div className="p-6 space-y-6 overflow-x-hidden">
          {/* Especialidad */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Especialidad
            </label>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona Especialidad" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Distancia */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Distancia (km)
            </label>
            <Select value={selectedDistance} onValueChange={setSelectedDistance}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona Distancia (km)" />
              </SelectTrigger>
              <SelectContent>
                {distances.map((distance) => (
                  <SelectItem key={distance} value={distance}>
                    {distance}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Modalidad */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Modalidad
            </label>
            <Select value={selectedModality} onValueChange={setSelectedModality}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona Modalidad" />
              </SelectTrigger>
              <SelectContent>
                {modalities.map((modality) => (
                  <SelectItem key={modality} value={modality}>
                    {modality}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Rango de Fechas */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Rango de Fechas
            </label>
            <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona Rango de Fechas" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-4 w-full">
                  {/* Mini Calendar */}
                  <div className="bg-white rounded-lg border p-3 w-full">
                    <div className="flex items-center justify-between mb-3">
                      <button className="p-1">
                        <ChevronLeftIcon className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{currentMonth}</span>
                        <span className="text-sm font-medium">{currentYear}</span>
                      </div>
                      <button className="p-1">
                        <ChevronRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                      {daysOfWeek.map(day => (
                        <div key={day} className="p-1 font-medium text-gray-600">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 text-xs text-center">
                      {/* Empty cells for alignment */}
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      
                      {/* Calendar days */}
                      {days.slice(0, 28).map((day) => {
                        const isSelected = day === 3 || day === 8;
                        return (
                          <button
                            key={day}
                            className={`p-1 rounded-full hover:bg-gray-100 ${
                              isSelected ? 'bg-primary-700 text-white' : 'text-gray-900'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SelectContent>
            </Select>
          </div>

          {/* Hora */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Hora
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Desde</label>
                <Select value={timeFrom} onValueChange={setTimeFrom}>
                  <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Hasta</label>
                <Select value={timeTo} onValueChange={setTimeTo}>
                  <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Precio */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Precio
            </label>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
              <div className="relative px-3">
                {/* Track background */}
                <div className="w-full h-2 bg-primary-200 rounded-full"></div>
                
                {/* Active track */}
                <div 
                  className="absolute top-0 h-2 bg-primary-900 rounded-full"
                  style={{
                    left: `${3 + (priceRange[0] / 100000) * (100 - 6)}%`,
                    width: `${((priceRange[1] - priceRange[0]) / 100000) * (100 - 6)}%`
                  }}
                ></div>
                
                {/* Min range slider */}
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                />
                
                {/* Max range slider */}
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Servicio o técnica */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Servicio o técnica
            </label>
            <Select>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona servicio o técnica" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2 space-y-2 max-h-[200px] overflow-y-auto">
                  {services.map((service) => (
                    <div key={service} className="flex items-center justify-between space-x-2 py-1">
                      <Label htmlFor={service} className="text-sm text-gray-900 flex-1 cursor-pointer">
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

          {/* Género */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Género
            </label>
            <Select>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona Género" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2 space-y-2">
                  {genders.map((gender) => (
                    <div key={gender} className="flex items-center justify-between space-x-2 py-1">
                      <Label htmlFor={gender} className="text-sm text-gray-900 flex-1 cursor-pointer">
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

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 rounded-b-2xl">
          <Button 
            className="w-full px-6 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
            onClick={onClose}
          >
            Buscar resultados
          </Button>
        </div>
      </div>
    </div>
  );
};