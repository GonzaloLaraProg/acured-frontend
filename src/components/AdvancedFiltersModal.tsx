import { ChevronDownIcon, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
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
  const [selectedDateRange, setSelectedDateRange] = React.useState("");
  const [timeFrom, setTimeFrom] = React.useState("");
  const [timeTo, setTimeTo] = React.useState("");
  const [priceRange, setPriceRange] = React.useState([35000, 300000]);
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [selectedGender, setSelectedGender] = React.useState("");

  if (!isOpen) return null;

  const specialties = [
    "Medicina China General",
    "Dolor y trastornos musculoesqueléticos",
    "Rehabilitación y Medicina Deportiva",
    "Neurología",
    "Ginecología y fertilidad",
    "Trastornos Neurológicos",
    "Salud Mental, Dermatología",
    "Pediatría, Oncología y Cuidados Paliativos",
    "Medicina Estética",
    "Local"
  ];

  const distances = [
    "5 km",
    "10 km",
    "15 km",
    "20 km",
    "25 km"
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
    "Acupuntura y Medicina China",
    "Masaje Tuina",
    "Fitoterapia",
    "Dietoterapia",
    "Auriculoterapia",
    "Ventosas",
    "Moxibustión",
    "Qigong",
    "Local"
  ];

  const genders = [
    "Femenino",
    "Masculino",
    "Otro",
    "Local"
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[400px] mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
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
        <div className="p-6 space-y-6">
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
                <div className="p-4">
                  {/* Mini Calendar */}
                  <div className="bg-white rounded-lg border p-3">
                    <div className="flex items-center justify-between mb-3">
                      <button className="p-1">
                        <ChevronDownIcon className="w-4 h-4 rotate-90" />
                      </button>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Mes</span>
                        <span className="text-sm font-medium">2025</span>
                      </div>
                      <button className="p-1">
                        <ChevronDownIcon className="w-4 h-4 -rotate-90" />
                      </button>
                    </div>
                    
                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                      {['LU', 'MA', 'MI', 'JU', 'VI', 'SÁ', 'DO'].map(day => (
                        <div key={day} className="p-1 font-medium text-gray-600">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 text-xs text-center">
                      {/* Calendar days */}
                      {[...Array(31)].map((_, i) => {
                        const day = i + 1;
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
                    <SelectValue placeholder="05:00 AM" />
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
                    <SelectValue placeholder="06:00 AM" />
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
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="35000"
                  max="300000"
                  step="5000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                  className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="35000"
                  max="300000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                  className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Servicios
            </label>
            <Select>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona Servicio" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2 space-y-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="rounded border-gray-300"
                      />
                      <label htmlFor={service} className="text-sm text-gray-900">
                        {service}
                      </label>
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
            <Select value={selectedGender} onValueChange={setSelectedGender}>
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-lg">
                <SelectValue placeholder="Selecciona Género" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2 space-y-2">
                  {genders.map((gender) => (
                    <div key={gender} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={gender}
                        name="gender"
                        value={gender}
                        checked={selectedGender === gender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="rounded-full border-gray-300"
                      />
                      <label htmlFor={gender} className="text-sm text-gray-900">
                        {gender}
                      </label>
                    </div>
                  ))}
                </div>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <Button className="w-full px-6 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800">
            Buscar resultados
          </Button>
        </div>
      </div>
    </div>
  );
};