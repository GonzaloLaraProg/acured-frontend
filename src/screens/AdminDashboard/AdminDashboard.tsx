import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = (): JSX.Element => {
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
            Panel de Administración
          </h1>
          <Button onClick={handleLogout} variant="outline">
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Usuarios</h3>
              <p className="text-gray-600 mb-4">
                Gestiona todos los usuarios del sistema
              </p>
              <Button className="w-full">Ver Usuarios</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Centros Médicos</h3>
              <p className="text-gray-600 mb-4">
                Administra todos los centros registrados
              </p>
              <Button className="w-full">Ver Centros</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Terapeutas</h3>
              <p className="text-gray-600 mb-4">
                Supervisa todos los terapeutas del sistema
              </p>
              <Button className="w-full">Ver Terapeutas</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Pacientes</h3>
              <p className="text-gray-600 mb-4">
                Vista general de todos los pacientes
              </p>
              <Button className="w-full">Ver Pacientes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Citas del Sistema</h3>
              <p className="text-gray-600 mb-4">
                Monitorea todas las citas programadas
              </p>
              <Button className="w-full">Ver Citas</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Reportes Globales</h3>
              <p className="text-gray-600 mb-4">
                Reportes de actividad de todo el sistema
              </p>
              <Button className="w-full">Ver Reportes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Configuración del Sistema</h3>
              <p className="text-gray-600 mb-4">
                Configuraciones globales y parámetros
              </p>
              <Button className="w-full">Configurar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Logs y Auditoría</h3>
              <p className="text-gray-600 mb-4">
                Registros de actividad y seguridad
              </p>
              <Button className="w-full">Ver Logs</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Soporte</h3>
              <p className="text-gray-600 mb-4">
                Gestión de tickets y soporte técnico
              </p>
              <Button className="w-full">Ver Soporte</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Información del Administrador</h2>
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
