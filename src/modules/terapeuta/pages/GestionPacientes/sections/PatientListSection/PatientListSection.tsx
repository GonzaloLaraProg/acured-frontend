import { PlusIcon, ChevronUpIcon, ChevronDownIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { ScrollArea, ScrollBar } from "../../../../../../components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../../components/ui/table";

interface PatientListSectionProps {
  onPageChange?: (page: 'dashboard' | 'foro' | 'formularios' | 'perfil' | 'pagos' | 'ajustes' | 'gestion-pacientes' | 'detalle-paciente' | 'calendario') => void;
}

export const PatientListSection = ({ onPageChange }: PatientListSectionProps): JSX.Element => {
  // Patient data for the table
  const patients = [
    {
      id: 1,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 2,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pendiente",
    },
    {
      id: 3,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 4,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pendiente",
    },
    {
      id: 5,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pendiente",
    },
    {
      id: 6,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pendiente",
    },
    {
      id: 7,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 8,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pendiente",
    },
    {
      id: 9,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 10,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 11,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 12,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 13,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 14,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 15,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
    {
      id: 16,
      name: "Nombre paciente",
      date: "00.00",
      value: "$0",
      status: "Pagado",
    },
  ];

  // Column headers with sort functionality
  const columns = [
    { id: "patient", label: "Nombre paciente", width: "w-64", sortable: true },
    { id: "date", label: "Dia de reserva", width: "w-40", sortable: true },
    { id: "value", label: "Valor", width: "w-40", sortable: true },
    { id: "status", label: "Estado", width: "w-40", sortable: true },
  ];

  const handleRowClick = (patientId: number, event: React.MouseEvent) => {
    // Evitar navegación si se hace clic en el checkbox
    const target = event.target as HTMLElement;
    if (target.closest('[role="checkbox"]') || target.closest('input[type="checkbox"]')) {
      return;
    }
    
    if (onPageChange) {
      onPageChange('detalle-paciente');
    }
  };

  return (
    <div className="flex-1 bg-secondary-50 min-h-screen">
      {/* Espaciado superior en móvil para el botón del menú */}
      <div className="lg:hidden h-16 w-full"></div>
      
      <section className="flex flex-col h-screen overflow-hidden px-8 py-6 relative flex-1 self-stretch">
        {/* Header - Fixed */}
        <header className="flex items-center justify-between w-full bg-transparent mb-6 flex-shrink-0">
          <h2 className="text-heading-lg text-primary-900 font-bold">
            Historial
          </h2>

          <div className="flex items-center gap-3">
            <Button
              className="bg-primary-500 hover:bg-primary-600 text-white shadow-md rounded-3xl transition-all duration-200 hover:shadow-lg"
              size="sm"
            >
              <span className="text-sm font-medium">
                Agendar paciente
              </span>
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              className="bg-white text-primary-500 shadow-xs rounded-3xl border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
              size="sm"
            >
              <span className="text-sm font-medium">
                Agregar paciente
              </span>
              <PlusIcon className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              className="bg-white text-primary-500 shadow-xs rounded-3xl border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
              size="sm"
            >
              <span className="text-sm font-medium">
                Eliminar pacientes
              </span>
              <Trash2Icon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </header>

        {/* Scrollable Table Content */}
        <div className="flex-1 overflow-hidden flex gap-2">
          <div className="flex-1 border border-solid border-shadow-100 rounded-lg bg-white shadow-sm overflow-hidden">
            <div className="h-full overflow-auto">
              <Table>
                <TableHeader className="bg-white sticky top-0 z-10">
                  <TableRow>
                    {columns.map((column) => (
                      <TableHead
                        key={column.id}
                        className={`${column.width} px-4 py-3 border-b border-shadow-100 bg-white`}
                      >
                        <div className={`flex items-center gap-2 ${column.sortable ? 'cursor-pointer hover:text-primary-600 transition-colors' : ''}`}>
                          <span className="text-body-md font-bold text-primary-900">
                            {column.label}
                          </span>
                          {column.sortable && (
                            <div className="flex flex-col">
                              <ChevronUpIcon className="w-3 h-3 text-gray-400" />
                              <ChevronDownIcon className="w-3 h-3 text-gray-400 -mt-1" />
                            </div>
                          )}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patients.map((patient, index) => (
                    <TableRow
                      key={patient.id}
                      className={`transition-colors duration-200 hover:bg-primary-100 cursor-pointer ${
                        index % 2 === 0
                          ? "bg-primary-50"
                          : "bg-white"
                      }`}
                      onClick={(e) => handleRowClick(patient.id, e)}
                    >
                      <TableCell className="px-4 py-3">
                        <div className="flex items-center gap-2 w-64">
                          <Checkbox 
                            className="w-4 h-4 bg-white rounded border border-solid border-primary-300 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 data-[state=checked]:text-white"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="flex-1 text-body-md text-primary-900">
                            {patient.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <div className="w-40">
                          <span className="text-body-md text-primary-900">
                            {patient.date}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <div className="w-40">
                          <span className="text-body-md text-primary-900">
                            {patient.value}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-4 py-3">
                        <div className="w-40 flex justify-center">
                          <div
                            className={`flex items-center justify-center px-16 py-2 rounded-sm min-w-[200px] h-8 ${
                              patient.status === "Pagado"
                                ? "bg-[#B8C5B8] text-[#2E3D33]"
                                : "bg-[#1A2B1F] text-white"
                            }`}
                          >
                            <span className="text-sm font-medium">
                              {patient.status}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};