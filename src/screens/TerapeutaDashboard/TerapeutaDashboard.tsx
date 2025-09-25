import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";

export const TerapeutaDashboard = (): JSX.Element => {
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
            Dashboard Terapeuta
          </h1>
          <Button onClick={handleLogout} variant="outline">
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Pacientes</h3>
              <p className="text-gray-600 mb-4">
                Gestiona tus pacientes y sus tratamientos
              </p>
              <Button className="w-full">Ver Pacientes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Citas</h3>
              <p className="text-gray-600 mb-4">
                Administra tu agenda y citas programadas
              </p>
              <Button className="w-full">Ver Citas</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Tratamientos</h3>
              <p className="text-gray-600 mb-4">
                Registra y sigue el progreso de tratamientos
              </p>
              <Button className="w-full">Ver Tratamientos</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Historial Médico</h3>
              <p className="text-gray-600 mb-4">
                Accede al historial completo de tus pacientes
              </p>
              <Button className="w-full">Ver Historial</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Reportes</h3>
              <p className="text-gray-600 mb-4">
                Genera reportes de actividad y resultados
              </p>
              <Button className="w-full">Ver Reportes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Configuración</h3>
              <p className="text-gray-600 mb-4">
                Personaliza tu perfil y preferencias
              </p>
              <Button className="w-full">Configurar</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Información del Usuario</h2>
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
