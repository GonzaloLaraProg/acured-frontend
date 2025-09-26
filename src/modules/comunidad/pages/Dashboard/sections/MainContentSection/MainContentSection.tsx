import { DownloadIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Chart data for demonstration - 6 charts
  const chartData = [
    { title: "Gráfico interactivo", subtitle: "Subtítulo" },
    { title: "Gráfico interactivo", subtitle: "Subtítulo" },
    { title: "Gráfico interactivo", subtitle: "Subtítulo" },
    { title: "Gráfico interactivo", subtitle: "Subtítulo" },
    { title: "Gráfico interactivo", subtitle: "Subtítulo" },
    { title: "Gráfico interactivo", subtitle: "Subtítulo" },
  ];

  const ChartCard = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className="min-w-0 flex-1">
            <h3 className="text-heading-sm text-shadow-900 mb-1 truncate">{title}</h3>
            <p className="text-body-md text-shadow-500">{subtitle}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 h-8 w-8 hover:bg-gray-100 rounded-lg flex-shrink-0 ml-2"
          >
            <DownloadIcon className="w-4 h-4 text-shadow-500" />
          </Button>
        </div>

        {/* Chart Area */}
        <div className="relative h-32 sm:h-48 mb-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-body-sm text-shadow-400 pr-2 sm:pr-3">
            <span className="text-xs sm:text-sm">100K</span>
            <span className="text-xs sm:text-sm">200K</span>
            <span className="text-xs sm:text-sm">100K</span>
          </div>

          {/* Chart container */}
          <div className="ml-8 sm:ml-12 h-full relative">
            {/* Grid lines - 4 líneas horizontales */}
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
            </div>

            {/* Chart area sin línea verde - solo el área vacía */}
            <div className="absolute inset-0 flex items-end">
              {/* Área del gráfico sin contenido visual */}
            </div>
          </div>
        </div>

        {/* X-axis labels - 7 veces "Mes" + "Mes Actual" */}
        <div className="ml-8 sm:ml-12 flex justify-between text-body-sm text-shadow-400 overflow-x-auto">
          <span className="text-xs sm:text-sm whitespace-nowrap">Mes</span>
          <span className="text-xs sm:text-sm whitespace-nowrap">Mes</span>
          <span className="text-xs sm:text-sm whitespace-nowrap">Mes</span>
          <span className="text-xs sm:text-sm whitespace-nowrap">Mes</span>
          <span className="text-xs sm:text-sm whitespace-nowrap">Mes</span>
          <span className="text-xs sm:text-sm whitespace-nowrap">Mes</span>
          <span className="text-xs sm:text-sm whitespace-nowrap">Mes</span>
          <span className="text-xs sm:text-sm text-shadow-700 font-medium whitespace-nowrap">Mes Actual</span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex-1 bg-secondary-50 p-4 sm:p-6 min-h-screen">
      {/* Espaciado superior en móvil para el botón del menú */}
      <div className="lg:hidden h-16 w-full"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Charts Grid - Responsive: 1 columna en móvil, 2 en tablet y desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {chartData.map((chart, index) => (
            <ChartCard
              key={index}
              title={chart.title}
              subtitle={chart.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};