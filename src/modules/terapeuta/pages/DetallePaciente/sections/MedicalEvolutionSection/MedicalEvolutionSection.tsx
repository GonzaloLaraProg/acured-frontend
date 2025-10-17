import React from "react";
import { Card, CardContent, CardHeader } from "../../../../../../components/ui/card";
import { Button } from "../../../../../../components/ui/button";
import { Badge } from "../../../../../../components/ui/badge";
import { UploadIcon } from "lucide-react";

export const MedicalEvolutionSection = (): JSX.Element => {
  // Data for sessions
  const sessions = [
    {
      month: "Nov",
      day: "07",
      number: "1",
      treatment: "Medicina china general",
      isActive: false,
    },
    {
      month: "Nov",
      day: "16",
      number: "2",
      treatment: "Dragon de fuego",
      isActive: true,
    },
    {
      month: "Nov",
      day: "23",
      number: "3",
      treatment: "Dragon de fuego",
      isActive: false,
    },
  ];

  return (
    <div className="flex gap-8 w-full">
      {/* Left panel - Medical observations form */}
      <div className="flex-1 max-w-[550px]">
        <Card className="w-full shadow-sm border border-[#dcdce2]">
          <CardHeader className="flex flex-row items-center justify-between p-6 border-b border-[#dcdce2]">
            <div className="flex flex-col">
              <span className="text-base font-semibold" style={{ color: '#2e3d33' }}>
                Nov
              </span>
              <span className="text-2xl font-semibold" style={{ color: '#738c7c' }}>
                16
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {/* Pulso - Dos cajas lado a lado */}
            <div className="space-y-2">
              <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                Pulso
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="px-3 py-2 w-full rounded border border-solid h-10 flex items-center" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                  <span className="text-sm" style={{ color: '#4d6455' }}>Texto</span>
                </div>
                <div className="px-3 py-2 w-full rounded border border-solid h-10 flex items-center" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                  <span className="text-sm" style={{ color: '#4d6455' }}>Texto</span>
                </div>
              </div>
            </div>

            {/* Lengua */}
            <div className="space-y-2">
              <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                Lengua
              </label>
              <div className="px-3 py-2 w-full rounded border border-solid h-10 flex items-center" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                <span className="text-sm" style={{ color: '#4d6455' }}>Texto</span>
              </div>
            </div>

            {/* Observaciones */}
            <div className="space-y-2">
              <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                Observaciones
              </label>
              <div className="px-3 py-2 w-full rounded border border-solid h-10 flex items-center" style={{ backgroundColor: '#f1f4f2', borderColor: '#f1f4f2' }}>
                <span className="text-sm" style={{ color: '#4d6455' }}>Texto</span>
              </div>
            </div>

            {/* File upload section */}
            <div className="space-y-3 pt-4">
              <label className="text-sm font-semibold" style={{ color: '#4d6455' }}>
                Fotos (jpg)
              </label>
              <div className="flex flex-col items-center gap-4 p-8 w-full rounded-lg border-2 border-dashed" style={{ backgroundColor: '#ffffff', borderColor: '#d3e0d7' }}>
                <div className="flex w-12 h-12 items-center justify-center rounded-full" style={{ backgroundColor: '#f1f4f2' }}>
                  <UploadIcon className="w-6 h-6" style={{ color: '#4d6455' }} />
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
          </CardContent>
        </Card>
      </div>

      {/* Right panel - Sessions */}
      <div className="flex-1 max-w-[450px]">
        <div className="rounded-lg p-6 h-full" style={{ backgroundColor: '#f1f4f2' }}>
          <div className="space-y-8">
            {/* Consultation reason header */}
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <span className="text-xs font-medium uppercase tracking-wide" style={{ color: '#a1b5a8' }}>
                  Motivo de consulta
                </span>
                <h3 className="text-lg font-semibold" style={{ color: '#2e3d33' }}>
                  Dolor de cabeza
                </h3>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 shadow-xs rounded-3xl px-4 py-2 border transition-all duration-200 hover:shadow-md"
                style={{ 
                  backgroundColor: '#ffffff', 
                  borderColor: '#d3e0d7',
                  color: '#3c5043'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f4f2';
                  e.currentTarget.style.borderColor = '#a1b5a8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = '#d3e0d7';
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Añadir sesión
                </span>
              </Button>
            </div>

            {/* Sessions list */}
            <div className="space-y-4">
              {sessions.map((session, index) => (
                <Card
                  key={`session-${index}`}
                  className={`border-2 transition-all duration-200 hover:shadow-md ${
                    session.isActive 
                      ? "shadow-sm" 
                      : ""
                  }`}
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: session.isActive ? '#738c7c' : '#c5c6ce'
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center min-w-[60px] pr-4 border-r" style={{ borderColor: '#c5c6ce' }}>
                        <span className="text-sm font-semibold" style={{ color: '#2e3d33' }}>
                          {session.month}
                        </span>
                        <span className="text-xl font-semibold" style={{ color: '#738c7c' }}>
                          {session.day}
                        </span>
                      </div>
                      <div className="flex-1 space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#a1b5a8' }}>
                          SESIÓN {session.number}
                        </span>
                        <Badge
                          variant="outline"
                          className="rounded-3xl text-xs px-3 py-1 font-semibold border"
                          style={{ 
                            backgroundColor: '#f3f3f5', 
                            color: '#222327',
                            borderColor: '#c5c6ce'
                          }}
                        >
                          {session.treatment}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};