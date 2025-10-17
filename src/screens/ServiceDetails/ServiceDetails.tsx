import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import TopNav from "../../components/TopNav";
import { Footer } from "../../components/Footer";
import { servicesContent } from "../../components/ServiceContents";

export const ServiceDetails = (): JSX.Element => {
  const { serviceId } = useParams();

 React.useEffect(() => {
  // 1️⃣ Rompemos posición fija
  const fixedElements = document.querySelectorAll(".fixed, [style*='position: fixed']");
  fixedElements.forEach((el) => {
    (el as HTMLElement).style.position = "absolute";
  });

  // 2️⃣ Observamos el DOM para ocultar el fondo del TopNav (sin selectores inválidos)
  const hideTopNavBackground = () => {
    const candidates = document.querySelectorAll(".fixed");
    candidates.forEach((el) => {
      const element = el as HTMLElement;
      const classList = element.className || "";
      if (
        classList.includes("left-0") &&
        classList.includes("top-0") &&
        classList.includes("w-full") &&
        classList.includes("h-[90px]") &&
        classList.includes("bg-white")
      ) {
        element.style.display = "none";
      }
    });
  };

  hideTopNavBackground(); // Ejecutamos una vez
  const observer = new MutationObserver(hideTopNavBackground);
  observer.observe(document.body, { childList: true, subtree: true });

  // 3️⃣ Limpieza
  return () => {
    observer.disconnect();
    fixedElements.forEach((el) => {
      (el as HTMLElement).style.position = "fixed";
    });
    const candidates = document.querySelectorAll(".fixed");
    candidates.forEach((el) => {
      const element = el as HTMLElement;
      const classList = element.className || "";
      if (
        classList.includes("left-0") &&
        classList.includes("top-0") &&
        classList.includes("w-full") &&
        classList.includes("h-[90px]") &&
        classList.includes("bg-white")
      ) {
        element.style.display = "";
      }
    });
  };
}, []);


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

  const currentServiceId = serviceId || "medicina-china";
  const currentService = servicesContent[currentServiceId];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentServiceId]);

  return (
    <div className="relative w-full bg-primary-50 min-h-screen">
      {/* Navbar */}
      <TopNav />

      {/* Contenido principal */}
      <div className="pt-0 flex relative z-10 min-h-screen">
        {/* Sidebar */}
        <div className="w-[280px] bg-primary-50 flex-shrink-0 min-h-screen pt-0">
          <div className="p-0 pt-4">
            {serviceMenuItems.map((item) => (
              <Link
                key={item.id}
                to={`/service-details/${item.id}`}
                className={`block px-4 py-3 text-sm hover:bg-primary-300 transition-colors font-bold ${
                  currentServiceId === item.id
                    ? "bg-primary-100 rounded-lg shadow-sm"
                    : ""
                }`}
              >
                <span className="text-primary-900">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Cuerpo del servicio */}
        <div className="flex-1 bg-white min-h-screen pt-32">
          <div className="w-[1100px] min-h-[300px] mx-auto bg-white rounded-lg p-8 mb-40 custom-shadow">
            <div className="overflow-y-auto max-h-[calc(150vh-250px)] pr-8 mr-[-12px]">


              <h1 className="text-2xl font-bold text-primary-900 mb-6">
                {currentService?.title || "Servicio"}
              </h1>
              {currentService?.content || (
                <p className="text-gray-600">
                  No se encontró información para este servicio.
                </p>
              )}
            </div>

            <div className="pt-6">
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

      <Footer />
    </div>
  );
};
