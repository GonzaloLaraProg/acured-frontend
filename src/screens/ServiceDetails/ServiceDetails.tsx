import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import TopNav from "../../components/TopNav";
import { Footer } from "../../components/Footer";
import { servicesContent } from "../../components/ServiceContents"; // 👈 Importa el contenidos

export const ServiceDetails = (): JSX.Element => {
  const { serviceId } = useParams();

  // Lista de servicios para el menú lateral
  const serviceMenuItems = [
    { id: "medicina-china", name: "Medicina tradicional china" },
    { id: "acupuntura", name: "Acupuntura" },
    { id: "moxibustion", name: "Moxibustión" },
    { id: "ventosas", name: "Ventosas" },
    { id: "masaje-tuina", name: "Masaje Tuina" },
    { id: "auriculoterapia", name: "Auriculoterapia" },
    { id: "fitoterapia", name: "Fitoterapia" },
    { id: "dietoterapia", name: "Dietoterapia" },
    { id: "sangria-terapeutica", name: "Sangría terapéutica" },
    { id: "agua-de-fuego", name: "Agua de fuego" },
    { id: "gua-sha", name: "Gua Sha" },
    { id: "qigong", name: "Qigong" },
  ];

  // Id actual (default: medicina-china)
  const currentServiceId = serviceId || "medicina-china";
  const currentService = servicesContent[currentServiceId];

  // Scroll siempre al inicio
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentServiceId]);

  return (
    <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
      {/* Barra de navegación */}
      <TopNav />

      {/* Layout principal */}
      <div className="pt-0 flex relative z-10 min-h-screen">
        {/* Sidebar izquierda */}
        <div className="w-[280px] bg-primary-200 flex-shrink-0 min-h-screen pt-32">
          <div className="p-0 pt-4">
            {serviceMenuItems.map((item) => (
              <Link
                key={item.id}
                to={`/service-details/${item.id}`}
                className={`block px-4 py-3 text-sm hover:bg-primary-300 transition-colors font-bold ${
                  currentServiceId === item.id
                    ? "bg-primary-100 rounded-lg mx-2 my-1 shadow-sm"
                    : ""
                }`}
              >
                <span className="text-primary-900">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 bg-primary-50 min-h-screen pt-32">
          <div className="p-8 pt-12 pl-20 ml-20 max-w-4xl">

            <h1 className="text-2xl font-bold text-primary-900 mb-6">
              {currentService?.title || "Servicio"}
            </h1>
            {currentService?.content || (
              <p className="text-gray-600">
                No se encontró información para este servicio.
              </p>
            )}

            {/* Botón de reservar */}
            <div className="pt-8">
            <Link to="/search-results">
              <Button className="px-6 py-2 bg-primary-200 text-primary-900 rounded-3xl hover:bg-primary-300">
                <span className="font-medium text-sm">
                  Quiero reservar una cita
                </span>
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
