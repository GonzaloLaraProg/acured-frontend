import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

export const CentroDashboard = (): JSX.Element => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-900">
            Dashboard Centro Médico
          </h1>
          <Button onClick={handleLogout} variant="outline">
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Terapeutas</h3>
              <p className="text-gray-600 mb-4">
                Gestiona el equipo de terapeutas del centro
              </p>
              <Button className="w-full">Ver Terapeutas</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Pacientes</h3>
              <p className="text-gray-600 mb-4">
                Administra todos los pacientes del centro
              </p>
              <Button className="w-full">Ver Pacientes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Agenda General</h3>
              <p className="text-gray-600 mb-4">
                Vista general de todas las citas del centro
              </p>
              <Button className="w-full">Ver Agenda</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Salas y Recursos</h3>
              <p className="text-gray-600 mb-4">
                Gestiona las salas de tratamiento y equipos
              </p>
              <Button className="w-full">Ver Recursos</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Finanzas</h3>
              <p className="text-gray-600 mb-4">
                Control de ingresos, gastos y facturación
              </p>
              <Button className="w-full">Ver Finanzas</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Reportes</h3>
              <p className="text-gray-600 mb-4">
                Reportes de actividad y rendimiento del centro
              </p>
              <Button className="w-full">Ver Reportes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Inventario</h3>
              <p className="text-gray-600 mb-4">
                Control de suministros y materiales
              </p>
              <Button className="w-full">Ver Inventario</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Configuración</h3>
              <p className="text-gray-600 mb-4">
                Configuración del centro y preferencias
              </p>
              <Button className="w-full">Configurar</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Información del Centro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Nombre:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
            </div>
            <div>
              <p><strong>Rol:</strong> {user?.role}</p>
              <p><strong>ID:</strong> {user?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
