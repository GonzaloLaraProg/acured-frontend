import {
  AlertCircleIcon,
  CalendarIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Avatar } from "../../../../../../components/ui/avatar";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { MedicalEvolutionSection } from "../MedicalEvolutionSection/MedicalEvolutionSection";

interface PatientDetailsSectionProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'gestion-pacientes' | 'detalle-paciente' | 'historial-medico' | 'calendario') => void;
  initialTab?: 'personal' | 'historial' | 'todos' | 'evolucion';
}

export const PatientDetailsSection = ({ onPageChange, initialTab = 'personal' }: PatientDetailsSectionProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<'personal' | 'historial' | 'todos' | 'evolucion' | 'evaluacion-tratamiento'>(initialTab);

  // Update active tab when initialTab prop changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Patient information data
  const patientInfo = [
    { label: "NOMBRE", value: "Isidora Carrasco Zapata" },
    { label: "EDAD", value: "27" },
    { label: "GENERO", value: "Mujer" },
    { label: "TELÉFONO DE CONTACTO", value: "+569" },
  ];

  const additionalInfo = [
    { label: "EMAIL", value: "@" },
    { label: "DIRECCIÓN", value: "...." },
    { label: "OCUPACIÓN", value: "..." },
    { label: "TELÉFONO EN CASO DE EMERGENCIA", value: "+569" },
  ];

  // Tab items
  const tabItems = [
    {
      label: "Información personal",
      key: 'personal' as const,
      active: activeTab === 'personal',
      icon: "/icon-person-outline.svg",
    },
    { 
      label: "Historial médico", 
      key: 'historial' as const,
      active: activeTab === 'historial',
      icon: "/icon-albums-outline.svg",
    },
    { 
      label: "Evaluación y tratamiento", 
      key: 'evaluacion-tratamiento' as const,
      active: activeTab === 'evaluacion-tratamiento',
      icon: "/icon-body.svg",
    },
    { 
      label: "Evolución", 
      key: 'evolucion' as const,
      active: activeTab === 'evolucion',
      icon: "/icon-analytics.svg",
    },
  ];

  const handleBackToList = () => {
    if (onPageChange) {
      onPageChange('gestion-pacientes');
    }
  };

  const handleTabClick = (tabKey: 'personal' | 'historial' | 'todos' | 'evolucion' | 'evaluacion-tratamiento') => {
    console.log('Tab clicked:', tabKey); // Debug log
    setActiveTab(tabKey);
    console.log('Active tab set to:', tabKey); // Debug log
  };

  const renderTabContent = () => {
    console.log('Rendering tab content for:', activeTab); // Debug log
    switch (activeTab) {
      case 'historial':
        return (
          <div className="flex flex-col items-start gap-3 p-6 self-stretch w-full">
            <Card className="flex items-start gap-6 px-6 py-6 self-stretch w-full border border-solid border-gray-200 shadow-sm rounded-lg min-h-[300px]">
              <CardContent className="flex items-start gap-6 p-0 w-full">
                <div className="flex flex-col items-start justify-start gap-4 flex-1 grow">
                  <span className="self-stretch font-semibold text-primary-300 text-lg uppercase tracking-wider">
                    ¿CUÁL ES TU MOTIVO DE CONSULTA?
                  </span>

                  <span className="text-body-md font-semibold text-primary-900">
                    Dolor de espalda
                  </span>
                </div>

                <div className="flex items-start pt-2">
                  <Button
                    variant="outline"
                    className="justify-center gap-2 bg-white shadow-xs px-4 py-2 rounded-3xl border-primary-200 hover:bg-primary-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm font-medium text-primary-500">
                      Notas
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 'evaluacion-tratamiento':
        return (
          <div className="w-full p-6">
            <div className="w-full max-w-none">
              <div className="w-full shadow-sm border border-[#dcdce2] rounded-lg bg-white">
                <div className="flex flex-row items-center justify-between p-6 border-b border-[#dcdce2]">
                  <div className="flex flex-col">
                    <span className="text-base font-semibold" style={{ color: '#2e3d33' }}>
                      Nov
                    </span>
                    <span className="text-2xl font-semibold" style={{ color: '#738c7c' }}>
                      07
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {/* Pulso - Dos cajas lado a lado */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                      Pulso
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="px-3 py-2 w-full rounded border border-solid h-10" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                      </div>
                      <div className="px-3 py-2 w-full rounded border border-solid h-10" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                      </div>
                    </div>
                  </div>

                  {/* Lengua */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                      Lengua
                    </label>
                    <div className="px-3 py-2 w-full rounded border border-solid h-10" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                    </div>
                  </div>

                  {/* Palpación de canales */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                      Palpación de canales
                    </label>
                    <div className="px-3 py-2 w-full rounded border border-solid h-10" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                    </div>
                  </div>

                  {/* Palpación abdominal */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                      Palpación abdominal
                    </label>
                    <div className="px-3 py-2 w-full rounded border border-solid h-10" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                      Observaciones
                    </label>
                    <div className="px-3 py-2 w-full rounded border border-solid h-10" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                    </div>
                  </div>

                  {/* File upload section */}
                  <div className="space-y-3 pt-4">
                    <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                      Fotos (jpg)
                    </label>
                    <div className="flex flex-col items-center gap-4 p-8 w-full rounded-lg border-2 border-dashed" style={{ backgroundColor: '#ffffff', borderColor: '#d3e0d7' }}>
                      <div className="flex w-12 h-12 items-center justify-center rounded-full" style={{ backgroundColor: '#f1f4f2' }}>
                        <svg className="w-6 h-6" style={{ color: '#4d6455' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="flex justify-center gap-1">
                          <span className="text-body-md" style={{ color: '#4d6455' }}>
                            Haga clic para cargar
                          </span>
                          <span className="text-body-md" style={{ color: '#222327' }}>
                            o arrastra y suelta
                          </span>
                        </div>
                        <p className="text-xs" style={{ color: '#222327' }}>
                          (Tamaño máximo de archivo: 25 MB)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botón Guardar */}
                  <div className="flex justify-end pt-4">
                    <button 
                      className="px-6 py-3 rounded-3xl text-sm font-medium text-white transition-all duration-200 shadow-md hover:shadow-lg"
                      style={{ backgroundColor: '#3c5043' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2e3d33';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#3c5043';
                      }}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'evolucion':
        return (
          <div className="w-full p-6">
            <MedicalEvolutionSection />
          </div>
        );
      case 'personal':
      default:
        return (
          <div className="flex flex-col items-start gap-6 p-6 w-full">
            <h2 className="text-heading-md font-semibold text-primary-500">
              Información General
            </h2>

            <div className="flex items-start gap-12 w-full">
              {/* Left column */}
              <div className="flex flex-col items-start gap-6 flex-1">
                {patientInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-center gap-2 w-full"
                  >
                    <label className="w-full font-semibold text-primary-300 text-xs uppercase tracking-wider">
                      {item.label}
                    </label>
                    <span className="text-body-md font-semibold text-primary-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="flex flex-col items-start gap-6 flex-1">
                {additionalInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-center gap-2 w-full"
                  >
                    <label className="w-full font-semibold text-primary-300 text-xs uppercase tracking-wider">
                      {item.label}
                    </label>
                    <span className="text-body-md font-semibold text-primary-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-secondary-50 min-h-screen">
      {/* Espaciado superior en móvil para el botón del menú */}
      <div className="lg:hidden h-16 w-full"></div>
      
      <div className="flex flex-col items-start gap-4 p-6 pt-4 relative flex-1 grow">
        {/* Breadcrumb navigation - Always shows the same structure */}
        <div className="flex items-center gap-4 py-1">
          <div className="opacity-25">
            <button 
              onClick={handleBackToList}
              className="inline-flex items-center gap-1 hover:opacity-100 transition-opacity"
            >
              <span className="font-semibold text-shadow-800 text-xs">
                Listado de pacientes
              </span>
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div>
            <div className="inline-flex items-center gap-1">
              <span className="font-semibold text-shadow-800 text-xs">
                Detalle de paciente
              </span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Main content card */}
        <Card className="flex items-start gap-8 w-full shadow-sm border border-gray-200 rounded-xl">
          <CardContent className="flex flex-col items-center justify-end w-full p-0 bg-white rounded-xl">
            {/* Patient header with name and actions */}
            <div className="flex items-center justify-between px-6 py-4 w-full">
              <div className="flex items-center gap-12 flex-1">
                {/* Patient avatar and name */}
                <div className="inline-flex items-center gap-3 bg-white rounded">
                  <Avatar className="w-[50px] h-[50px]">
                    <img src="/image copy copy copy copy.png" alt="Patient avatar" className="object-cover" />
                  </Avatar>
                  <span className="text-heading-md font-semibold text-primary-900">
                    Nombre Apellido
                  </span>
                </div>

                {/* Payment alert */}
                <div className="inline-flex items-center rounded-lg overflow-hidden border border-solid border-shadow-100">
                  <div className="inline-flex items-center justify-center p-2 bg-primary-500 rounded-l">
                    <AlertCircleIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="inline-flex items-start gap-px self-stretch bg-gray-200 rounded-r">
                    <div className="inline-flex items-center gap-4 px-4 py-2 self-stretch bg-white">
                      <span className="text-body-md font-semibold text-gray-600">
                        Pago pendiente
                      </span>
                      <Button
                        variant="link"
                        className="px-2 py-1 font-bold text-primary-700 text-xs underline h-auto"
                      >
                        Ver más
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-10 h-full flex items-center justify-center p-0 bg-white rounded-r"
                    >
                      <XIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Schedule appointment button */}
              <Button className="gap-2 bg-primary-500 hover:bg-primary-600 shadow-md rounded-3xl px-6 py-3">
                <CalendarIcon className="w-5 h-5" />
                <span className="text-sm font-medium text-white">
                  Reservar Hora
                </span>
              </Button>
            </div>

            {/* Tabs navigation */}
            <div className="flex flex-col items-start gap-2.5 pt-2 pb-6 px-6 w-full border-b border-shadow-100">
              <div className="inline-flex items-start gap-8 bg-white border-b border-shadow-100 w-full">
                {tabItems.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(tab.key)}
                    className={`inline-flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 self-stretch transition-all duration-200 cursor-pointer ${
                      tab.active 
                        ? "border-b-2 border-primary-500 text-primary-500" 
                        : "text-shadow-300 hover:text-primary-500"
                    }`}
                  >
                    <span className={`text-sm font-medium ${tab.active ? 'font-semibold' : ''}`}>
                      {tab.label}
                    </span>
                    <img src={tab.icon} alt={tab.label} className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            {renderTabContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};