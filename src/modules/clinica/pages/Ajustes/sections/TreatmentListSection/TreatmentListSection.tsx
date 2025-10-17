import { CalendarIcon, PlusIcon, SearchIcon, ChevronUpIcon, ChevronDownIcon, EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../../../components/ui/badge";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { Input } from "../../../../../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../../../../../components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../../components/ui/table";
import { ServiceSelectionModal } from "../../components/ServiceSelectionModal";

interface TreatmentListSectionProps {
  onTabChange?: (tab: 'services' | 'calendar' | 'policy') => void;
}

export const TreatmentListSection = ({ onTabChange }: TreatmentListSectionProps): JSX.Element => {
  const [isServiceSelectionModalOpen, setIsServiceSelectionModalOpen] = useState(false);

  // Table data - Updated with specified content
  const tableData = [
    {
      treatment: "Tratamientos",
      value: "$25.000",
      duration: "1 hora",
    },
    {
      treatment: "Tratamientos",
      value: "$25.000",
      duration: "1 hora",
    },
    {
      treatment: "Tratamientos",
      value: "$25.000",
      duration: "1 hora",
    },
    {
      treatment: "Tratamientos",
      value: "$25.000",
      duration: "1 hora",
    },
    {
      treatment: "Tratamientos",
      value: "$25.000",
      duration: "1 hora",
    },
    {
      treatment: "Tratamientos",
      value: "$25.000",
      duration: "1 hora",
    },
    {
      treatment: "Tratamientos",
      value: "$25.000",
      duration: "1 hora",
    },
  ];

  const handleTabClick = (tab: 'services' | 'calendar' | 'policy') => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const handleAddTreatment = () => {
    setIsServiceSelectionModalOpen(true);
  };

  const handleCloseServiceModal = () => {
    setIsServiceSelectionModalOpen(false);
  };

  const handleSaveService = () => {
    // Aquí puedes agregar la lógica para guardar el servicio
    console.log('Servicio guardado');
  };

  return (
    <div className="flex flex-col items-start gap-2.5 px-8 py-6 relative flex-1 self-stretch grow">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-1">
        {/* Tabs Navigation */}
        <div className="inline-flex items-start gap-3 relative border-b border-shadow-100 w-full">
          <div className="w-full">
            <div className="flex items-start gap-8 relative border-b border-shadow-100 w-full bg-transparent h-auto p-0 justify-start">
              <div 
                className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                onClick={() => handleTabClick('calendar')}
              >
                <span className="text-sm text-shadow-600 hover:text-primary-800">
                  Calendario y horarios
                </span>
                <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
              </div>

              <div className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden border-b-2 border-primary-800 rounded-none whitespace-nowrap transition-all duration-200">
                <span className="text-sm text-primary-800 font-semibold">
                  Servicios o tratamientos
                </span>
                <CalendarIcon className="w-4 h-4 text-primary-800" />
              </div>

              <div 
                className="flex items-center justify-center gap-2.5 pt-3 pb-4 px-0 relative self-stretch overflow-hidden rounded-none whitespace-nowrap transition-all duration-200 hover:text-primary-800 cursor-pointer"
                onClick={() => handleTabClick('policy')}
              >
                <span className="text-sm text-shadow-600 hover:text-primary-800">
                  Política de cancelación y pago
                </span>
                <CalendarIcon className="w-4 h-4 text-shadow-600 hover:text-primary-800" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-6 relative self-stretch w-full flex-1">
          {/* Header with title and action buttons */}
          <header className="flex items-center justify-between relative self-stretch w-full">
            <h2 className="text-heading-lg font-bold text-primary-900">
              Tratamientos
            </h2>

            <div className="inline-flex items-center gap-3">
              <Button 
                className="bg-primary-500 hover:bg-primary-600 text-white rounded-3xl shadow-md flex items-center gap-2 px-6 py-3"
                onClick={handleAddTreatment}
              >
                <span className="text-sm font-medium">
                  Añadir tratamiento
                </span>
                <PlusIcon className="w-4 h-4 text-white" />
              </Button>

              <Button
                variant="outline"
                className="bg-white text-primary-500 shadow-xs rounded-3xl border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 flex items-center gap-2 px-6 py-3"
              >
                <span className="text-sm font-medium">
                  Eliminar tratamientos
                </span>
                <PlusIcon className="w-4 h-4 text-primary-500" />
              </Button>
            </div>
          </header>

          {/* Main content card with rounded corners */}
          <Card className="shadow-sm w-full flex-1 border border-gray-200 bg-white rounded-xl">
            <CardContent className="gap-3 px-6 py-6 flex flex-col items-start h-full bg-white rounded-xl">
              <div className="flex items-start justify-end gap-6 relative self-stretch w-full flex-1">
                <div className="gap-4 flex-1 grow flex flex-col items-start h-full">
                  {/* Table Container with External ScrollArea */}
                  <div className="flex items-start gap-3 relative self-stretch w-full flex-1">
                    <div className="flex-1 grow rounded-xl border border-solid border-shadow-100 h-[400px] overflow-hidden bg-white">
                      <ScrollArea className="h-full w-full bg-white">
                        <Table>
                          <TableHeader className="bg-white sticky top-0 z-10">
                            <TableRow>
                              <TableHead className="w-64 h-10 bg-white">
                                <div className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors">
                                  <span className="font-bold text-primary-900 text-sm">
                                    Tratamiento
                                  </span>
                                  <div className="flex flex-col">
                                    <ChevronUpIcon className="w-3 h-3 text-gray-400" />
                                    <ChevronDownIcon className="w-3 h-3 text-gray-400 -mt-1" />
                                  </div>
                                </div>
                              </TableHead>
                              <TableHead className="w-40 h-10 bg-white">
                                <div className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors">
                                  <span className="font-bold text-primary-900 text-sm">
                                    Valor
                                  </span>
                                  <div className="flex flex-col">
                                    <ChevronUpIcon className="w-3 h-3 text-gray-400" />
                                    <ChevronDownIcon className="w-3 h-3 text-gray-400 -mt-1" />
                                  </div>
                                </div>
                              </TableHead>
                              <TableHead className="w-40 h-10 bg-white">
                                <div className="flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors">
                                  <span className="font-bold text-primary-900 text-sm">
                                    Duración
                                  </span>
                                  <div className="flex flex-col">
                                    <ChevronUpIcon className="w-3 h-3 text-gray-400" />
                                    <ChevronDownIcon className="w-3 h-3 text-gray-400 -mt-1" />
                                  </div>
                                </div>
                              </TableHead>
                              <TableHead className="w-40 h-10 bg-white">
                                <span className="font-bold text-primary-900 text-sm">
                                  Acciones
                                </span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {tableData.map((row, index) => (
                              <TableRow
                                key={index}
                                className={`transition-colors duration-200 hover:bg-primary-100 ${
                                  index % 2 === 0
                                    ? "bg-primary-50"
                                    : "bg-white"
                                }`}
                              >
                                <TableCell className="py-3 px-4">
                                  <div className="flex items-center gap-2">
                                    <Checkbox className="w-4 h-4 rounded border border-solid border-primary-300 bg-white data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 data-[state=checked]:text-white" />
                                    <span className="text-body-md text-primary-900">
                                      {row.treatment}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell className="py-3 px-4">
                                  <span className="text-body-md text-primary-900">
                                    {row.value}
                                  </span>
                                </TableCell>
                                <TableCell className="py-3 px-4">
                                  <span className="text-body-md text-primary-900">
                                    {row.duration}
                                  </span>
                                </TableCell>
                                <TableCell className="py-3 px-4">
                                  <div className="flex items-center gap-3">
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-6 w-6 p-0 hover:bg-gray-100 rounded"
                                      title="Ver"
                                    >
                                      <EyeIcon className="w-4 h-4 text-gray-600" />
                                    </Button>
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-6 w-6 p-0 hover:bg-gray-100 rounded"
                                      title="Editar"
                                    >
                                      <PencilIcon className="w-4 h-4 text-gray-600" />
                                    </Button>
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="h-6 w-6 p-0 hover:bg-gray-100 rounded"
                                      title="Eliminar"
                                    >
                                      <Trash2Icon className="w-4 h-4 text-gray-600" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                        <ScrollBar 
                          orientation="vertical" 
                          className="bg-white w-2 rounded-full [&>div]:bg-primary-500"
                        />
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service Selection Modal */}
      <ServiceSelectionModal 
        isOpen={isServiceSelectionModalOpen}
        onClose={handleCloseServiceModal}
        onSave={handleSaveService}
      />
    </div>
  );
};