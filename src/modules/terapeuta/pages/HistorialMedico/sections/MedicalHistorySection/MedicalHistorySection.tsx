import {
  AlertCircleIcon,
  CalendarIcon,
  ChevronRightIcon,
  FileTextIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Avatar } from "../../../../../../components/ui/avatar";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";

interface MedicalHistorySectionProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'gestion-pacientes' | 'detalle-paciente' | 'historial-medico' | 'calendario', tab?: 'personal' | 'historial' | 'todos' | 'evolucion') => void;
}

export const MedicalHistorySection = ({ onPageChange }: MedicalHistorySectionProps): JSX.Element => {
  // Medical history questions data - restored to original
  const medicalHistoryItems = [
    {
      number: "1.",
      question: "¿CUÁL ES TU MOTIVO DE CONSULTA?",
      answer: "Dolor de espalda",
    },
    {
      number: "2.",
      question: "¿TIENES ALGUNA ALERGIA?",
      answer: "No",
    },
    {
      number: "3.",
      question: "¿TOMAS ALGÚN MEDICAMENTO?",
      answer: "No",
    },
    {
      number: "4.",
      question: "¿HAS TENIDO ALGUNA CIRUGÍA?",
      answer: "No",
    },
    {
      number: "5.",
      question: "¿TIENES ALGUNA ENFERMEDAD CRÓNICA?",
      answer: "No",
    },
    {
      number: "6.",
      question: "¿FUMAS O BEBES ALCOHOL?",
      answer: "No",
    },
    {
      number: "7.",
      question: "¿HACES EJERCICIO REGULARMENTE?",
      answer: "Sí",
    },
    {
      number: "8.",
      question: "¿TIENES ALGÚN ANTECEDENTE FAMILIAR RELEVANTE?",
      answer: "No",
    },
  ];

  // Tab items data
  const tabItems = [
    { name: "Información personal", active: false, icon: "/icon-person-outline.svg" },
    { name: "Historial médico", active: true, icon: "/icon-albums-outline.svg" },
    { name: "Todos", active: false, icon: "/icon-body.svg" },
    { name: "Evolución", active: false, icon: "/icon-analytics.svg" },
  ];

  const handleBackToPatientDetail = () => {
    if (onPageChange) {
      onPageChange('detalle-paciente', 'personal');
    }
  };

  const handleBackToPatientList = () => {
    if (onPageChange) {
      onPageChange('gestion-pacientes');
    }
  };

  const handleTabClick = (tabName: string) => {
    if (tabName === "Información personal" && onPageChange) {
      onPageChange('detalle-paciente', 'personal');
    } else if (tabName === "Evolución" && onPageChange) {
      onPageChange('detalle-paciente', 'evolucion');
    } else if (tabName === "Todos" && onPageChange) {
      onPageChange('detalle-paciente', 'todos');
    }
    // Current tab (Historial médico) stays on this page
  };

  return (
    <div className="flex-1 bg-secondary-50 min-h-screen">
      {/* Espaciado superior en móvil para el botón del menú */}
      <div className="lg:hidden h-16 w-full"></div>
      
      <section className="flex flex-col items-start justify-center gap-4 p-6 relative flex-1 grow">
        {/* Breadcrumb navigation - Always shows the same structure */}
        <div className="flex items-center gap-4 py-1">
          <div className="opacity-25">
            <button 
              onClick={handleBackToPatientList}
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

        <div className="flex items-start gap-6 relative self-stretch w-full">
          <Card className="flex items-start gap-8 relative flex-1 grow shadow-sm border border-gray-200 rounded-xl">
            <CardContent className="flex flex-col items-center justify-end relative flex-1 grow p-0 bg-white rounded-xl">
              {/* Patient header with info and actions */}
              <div className="flex items-center justify-between px-6 py-4 relative self-stretch w-full">
                <div className="flex items-center gap-12 relative flex-1 grow">
                  {/* Patient profile */}
                  <div className="inline-flex items-center gap-3 relative bg-white rounded">
                    <Avatar className="w-[50px] h-[50px]">
                      <img 
                        src="/image copy copy copy copy.png" 
                        alt="Patient profile" 
                        className="object-cover"
                      />
                    </Avatar>
                    <span className="text-heading-md font-semibold text-primary-900 whitespace-nowrap">
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

                {/* Reserve button */}
                <Button className="gap-2 bg-primary-500 hover:bg-primary-600 shadow-md rounded-3xl px-6 py-3">
                  <CalendarIcon className="w-5 h-5" />
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    Reservar Hora
                  </span>
                </Button>
              </div>

              {/* Tabs navigation */}
              <div className="flex flex-col items-start gap-2.5 pt-2 pb-6 px-6 self-stretch w-full border-b border-shadow-100">
                <div className="inline-flex items-start gap-8 bg-white border-b border-shadow-100 w-full">
                  {tabItems.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabClick(tab.name)}
                      className={`inline-flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 self-stretch transition-all duration-200 cursor-pointer ${
                        tab.active
                          ? "border-b-2 border-primary-500 text-primary-500"
                          : "text-shadow-300 hover:text-primary-500"
                      }`}
                    >
                      <span className={`text-sm font-medium ${tab.active ? 'font-semibold' : ''}`}>
                        {tab.name}
                      </span>
                      <img src={tab.icon} alt={tab.name} className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Medical history items */}
              <div className="flex flex-col items-start gap-3 p-6 self-stretch w-full">
                {medicalHistoryItems.map((item, index) => (
                  <Card key={index} className="flex items-start gap-6 px-6 py-6 self-stretch w-full border border-solid border-gray-200 shadow-sm rounded-lg">
                    <CardContent className="flex items-start gap-6 p-0 w-full">
                      <div className="flex items-start gap-4 flex-1 grow">
                        <span className="text-heading-md font-semibold text-primary-900 whitespace-nowrap">
                          {item.number}
                        </span>

                        <div className="flex flex-col items-start justify-start gap-4 flex-1 grow">
                          <span className="self-stretch font-semibold text-primary-300 text-sm uppercase tracking-wider">
                            {item.question}
                          </span>

                          <span className="text-body-md font-semibold text-primary-900">
                            {item.answer}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pt-2">
                        <Button
                          variant="outline"
                          className="justify-center gap-2 bg-white shadow-xs px-4 py-2 rounded-3xl border-primary-200 hover:bg-primary-50 transition-colors"
                        >
                          <span className="text-sm font-medium text-primary-500">
                            Editar
                          </span>
                        </Button>

                        <Button
                          variant="outline"
                          className="justify-center gap-2 bg-white shadow-xs px-4 py-2 rounded-3xl border-primary-200 hover:bg-primary-50 transition-colors"
                        >
                          <FileTextIcon className="w-4 h-4" />
                          <span className="text-sm font-medium text-primary-500">
                            Notas
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-start justify-between p-6 self-stretch w-full">
                <Button
                  variant="outline"
                  className="justify-center gap-2 bg-white shadow-xs px-6 py-3 rounded-3xl border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-shadow-700">
                    Cancelar
                  </span>
                </Button>

                <Button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-3xl shadow-md transition-colors">
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    Guardar
                  </span>
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};