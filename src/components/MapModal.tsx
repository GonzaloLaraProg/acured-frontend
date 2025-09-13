import { X, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Professional {
  id: number;
  name: string;
  specialty: string;
  address: string;
  phone: string;
  position: { x: number; y: number };
}

export const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedProfessional, setSelectedProfessional] = React.useState<Professional | null>(null);

  if (!isOpen) return null;

  // Mock professionals data with map positions
  const professionals: Professional[] = [
    {
      id: 1,
      name: "Profesional",
      specialty: "Especialidad",
      address: "Príncipe de gales, la reina 33333",
      phone: "Teléfono",
      position: { x: 45, y: 35 }
    },
    {
      id: 2,
      name: "Profesional",
      specialty: "Especialidad", 
      address: "Príncipe de gales, la reina 33333",
      phone: "Teléfono",
      position: { x: 60, y: 25 }
    },
    {
      id: 3,
      name: "Profesional",
      specialty: "Especialidad",
      address: "Príncipe de gales, la reina 33333", 
      phone: "Teléfono",
      position: { x: 75, y: 40 }
    },
    {
      id: 4,
      name: "Profesional",
      specialty: "Especialidad",
      address: "Príncipe de gales, la reina 33333",
      phone: "Teléfono", 
      position: { x: 55, y: 55 }
    },
    {
      id: 5,
      name: "Profesional",
      specialty: "Especialidad",
      address: "Príncipe de gales, la reina 33333",
      phone: "Teléfono",
      position: { x: 40, y: 60 }
    },
    {
      id: 6,
      name: "Profesional",
      specialty: "Especialidad",
      address: "Príncipe de gales, la reina 33333",
      phone: "Teléfono",
      position: { x: 70, y: 70 }
    },
    {
      id: 7,
      name: "Profesional",
      specialty: "Especialidad",
      address: "Príncipe de gales, la reina 33333",
      phone: "Teléfono",
      position: { x: 85, y: 30 }
    },
    {
      id: 8,
      name: "Profesional",
      specialty: "Especialidad",
      address: "Príncipe de gales, la reina 33333",
      phone: "Teléfono",
      position: { x: 30, y: 45 }
    }
  ];

  const handleLocationClick = (professional: Professional) => {
    setSelectedProfessional(professional);
  };

  const displayedProfessionals = selectedProfessional ? [selectedProfessional] : professionals;

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-[90vw] max-w-[1200px] h-[75vh] max-h-[650px] flex overflow-hidden mt-16">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] flex items-center gap-2 text-gray-600 hover:bg-gray-100 p-2 bg-white rounded-lg shadow-sm"
        >
          <span className="text-sm">Cerrar</span>
          <X className="w-4 h-4" />
        </Button>

        {/* Left sidebar - Professionals list */}
        <div className="w-80 flex-shrink-0 bg-gray-50 p-6 overflow-y-auto">
          <div className="space-y-4">
            {displayedProfessionals.map((professional) => (
              <Card key={professional.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <CardContent className="p-4">
                  {/* Professional Image Placeholder */}
                  <div className="w-full h-32 bg-primary-200 rounded-lg mb-4"></div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-black text-base mb-1">
                        {professional.name}
                      </h4>
                      <p className="text-black text-sm mb-2">
                        {professional.specialty}
                      </p>
                      <button className="text-black hover:underline text-sm font-medium">
                        Ver perfil profesional
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{professional.address}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{professional.phone}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-3 px-4 py-2 bg-primary-200 text-primary-900 rounded-3xl hover:bg-primary-300">
                      Ver perfil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right side - Map */}
        <div className="flex-1 relative">
          <div className="w-full h-full relative overflow-hidden">
            <img
              src="/mapa.png"
              alt="Mapa de ubicaciones"
              className="w-full h-full object-cover"
            />
            
            {/* Location markers */}
            {professionals.map((professional) => (
              <button
                key={professional.id}
                onClick={() => handleLocationClick(professional)}
                className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all hover:scale-110 ${
                  selectedProfessional?.id === professional.id
                    ? "bg-primary-600 ring-4 ring-white shadow-lg"
                    : "bg-primary-900 hover:bg-primary-800"
                }`}
                style={{
                  left: `${professional.position.x}%`,
                  top: `${professional.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {professional.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};