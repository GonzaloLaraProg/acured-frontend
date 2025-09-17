import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Footer } from "../../components/Footer";

export const ServiceDetails = (): JSX.Element => {
  const { serviceId } = useParams();

  // Service menu items for sidebar
  const serviceMenuItems = [
    { id: "medicina-tradicional-china", name: "Medicina tradicional china", active: serviceId === "medicina-tradicional-china" || !serviceId },
    { id: "acupuntura", name: "Acupuntura", active: serviceId === "acupuntura" },
    { id: "moxibustion", name: "Moxibustión", active: serviceId === "moxibustion" },
    { id: "ventosas", name: "Ventosas", active: serviceId === "ventosas" },
    { id: "masaje-tuina", name: "Masaje Tuina", active: serviceId === "masaje-tuina" },
    { id: "auriculoterapia", name: "Auriculoterapia", active: serviceId === "auriculoterapia" },
    { id: "fitoterapia", name: "Fitoterapia", active: serviceId === "fitoterapia" },
    { id: "dietoterapia", name: "Dietoterapia", active: serviceId === "dietoterapia" },
    { id: "sangria-terapeutica", name: "Sangría terapéutica", active: serviceId === "sangria-terapeutica" },
    { id: "agua-de-fuego", name: "Agua de fuego", active: serviceId === "agua-de-fuego" },
    { id: "gua-sha", name: "Gua Sha", active: serviceId === "gua-sha" },
    { id: "qigong", name: "Qigong", active: serviceId === "qigong" },
  ];

  
// 👇 Aquí agregamos el estado del scroll
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get current service content
  const getCurrentServiceContent = () => {
    const currentServiceId = serviceId || "medicina-tradicional-china";
    
    if (currentServiceId === "medicina-tradicional-china") {
      return {
        title: "Medicina Tradicional China",
        content: (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-sm text-primary-900 mb-2">MEDICINA TRADICIONAL CHINA</h3>
              <p className="text-sm text-primary-900 leading-relaxed">
                La Medicina Tradicional China (MTC) es un sistema médico completo y holístico que se ha desarrollado a lo largo de más de 3,000 años en 
                China. A diferencia de la medicina occidental, que se centra en el tratamiento de síntomas específicos, la MTC busca entender y tratar las 
                causas subyacentes de las enfermedades, promoviendo el equilibrio y la armonía en el cuerpo, la mente y el entorno.
              </p>
            </div>

            <p className="text-sm text-primary-900 leading-relaxed">
              Se basa en principios fisiológicos y teóricos como el Qi (concebido en este contexto como dinámica vital del organismo) el equilibrio entre el Yin 
              y el Yang, la Teoría de los Cinco Fases y la Teoría de Canales. Estos conceptos explican cómo el cuerpo funciona a través de los canales que 
              conectan órganos y tejidos, y cómo la salud depende del flujo armonioso del Qi. Además, considera las emociones, los factores externos 
              (ambientales) y la interacción entre los órganos como claves para el bienestar.
            </p>

            <div>
              <p className="text-sm text-primary-900 font-semibold mb-3">La MTC incluye una variedad de prácticas terapéuticas:</p>
              <ol className="text-sm text-primary-900 leading-relaxed space-y-1">
                <li>1. Acupuntura: Inserción de agujas finas en zonas del cuerpo para regular funciones internas y aliviar desequilibrios.</li>
                <li>2. Moxibustión: Aplicación de calor en ciertas zonas clave para estimular la circulación y fortalecer el organismo.</li>
                <li>3. Ventosas: Técnica que utiliza copas de vidrio o plástico para crear succión y mejorar la circulación del flujo corporal.</li>
                <li>4. Auriculoterapia: Estimulación de puntos reflejos en la oreja relacionados con órganos y funciones corporales.</li>
                <li>5. Masaje Tuina (Masaje Terapéutico Chino): Masaje terapéutico que combina presión, estiramiento y movimiento para mejorar la circulación y aliviar molestias.</li>
                <li>6. Fitoterapia china: Uso de combinaciones de hierbas medicinales para apoyar la salud y tratar distintas alteraciones internas.</li>
                <li>7. Dietoterapia china</li>
                <li>8. Selección de alimentos según sus efectos en el cuerpo para apoyar su funcionamiento natural.</li>
                <li>9. Sangría terapéutica</li>
                <li>10. Extracción controlada de sangre en zonas específicas para eliminar estancamientos y liberar excesos internos.</li>
                <li>11. Agua de fuego: Aplicación de una aguja previamente calentada para activar zonas bloqueadas o dolorosas.</li>
                <li>12. Gua Sha: Raspado suave de la piel con herramientas lisas para mejorar la circulación y reducir tensiones.</li>
                <li>13. Qigong: Práctica que combina respiración, movimiento y atención consciente para promover la armonía interna.</li>
              </ol>
            </div>

            <p className="text-sm text-primary-900 leading-relaxed">
              Estas técnicas se utilizan tanto para prevenir como para tratar enfermedades, y su objetivo es restaurar el flujo adecuado de Qi en los canales y 
              órganos con el fin de promover su correcto funcionamiento.
            </p>

            <p className="text-sm text-primary-900 leading-relaxed">
              La elección de cada técnica se basa en un diagnóstico chino determinado por cada terapeuta, escogiendo lo o las que sean más efectivas para 
              cada caso.
            </p>

            <p className="text-sm text-primary-900 leading-relaxed font-medium">
              ¿Quieres saber más acerca de cada técnica? Encuentra mayor información haciendo click sobre el nombre de cada una de ellas.
            </p>

            <div className="pt-4">
              <Button className="px-6 py-2 bg-primary-200 text-primary-900 rounded-3xl hover:bg-primary-300">
                <span className="font-medium text-sm">
                  Quiero reservar una cita
                </span>
              </Button>
            </div>
          </div>
        )
      };
    } else {
      // For other services, return Lorem ipsum with same structure
      return {
        title: serviceMenuItems.find(item => item.id === currentServiceId)?.name || "Servicio",
        content: (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-sm text-primary-900 mb-2">{serviceMenuItems.find(item => item.id === currentServiceId)?.name.toUpperCase()}</h3>
              <p className="text-sm text-primary-900 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <p className="text-sm text-primary-900 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div>
              <p className="text-sm text-primary-900 font-semibold mb-3">Beneficios principales:</p>
              <ol className="text-sm text-primary-900 leading-relaxed space-y-1">
                <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
                <li>4. Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
                <li>5. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</li>
              </ol>
            </div>

            <p className="text-sm text-primary-900 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>

            <p className="text-sm text-primary-900 leading-relaxed font-medium">
              ¿Quieres saber más acerca de esta técnica? Contacta con nuestros especialistas para mayor información.
            </p>

            <div className="pt-4">
              <Button className="px-6 py-2 bg-primary-200 text-primary-900 rounded-3xl hover:bg-primary-300">
                <span className="font-medium text-sm">
                  Quiero reservar una cita
                </span>
              </Button>
            </div>
          </div>
        )
      };
    }
  };

  const currentService = getCurrentServiceContent();

  return (
    <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
      {/* Navigation */}
        {/* Fondo blanco detrás del navbar */}
        <div
          className={`fixed top-0 left-0 w-full h-[90px] bg-white shadow-sm transition-opacity duration-300 z-40 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        <NavigationMenu className="fixed top-[29px] left-1/2 transform -translate-x-1/2 bg-primary-50 rounded-[32px] border border-solid border-[#d3e0d7] shadow-shadow-sm backdrop-blur-[5.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.85px)_brightness(100%)] z-50">
          <NavigationMenuList className="flex items-center gap-2.5 pl-3 pr-0 py-0">
            <NavigationMenuItem>
              <Link
                className="relative w-[92px] h-[21px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
                to="/"
              />
            </NavigationMenuItem>

            <NavigationMenuItem className="inline-flex items-center gap-2 pl-0.5 pr-1 py-0.5 rounded-[40px]">
              <div className="inline-flex items-center">
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] bg-primary-50"
                >
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-lg text-primary-900">
                    Inicia sesión
                  </span>
                </Button>
              </div>

              <Button className="inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl">
                <Link to="/therapist-dashboard" className="text-decoration-none">
                  <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-neutralswhite text-lg leading-[normal] whitespace-nowrap">
                    ¿Eres acupunturista?
                  </span>
                </Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      {/* Main Content - Full height layout */}
      <div className="pt-0 flex relative z-10 min-h-screen">
        {/* Left Sidebar */}
        <div className="w-[280px] bg-primary-200 flex-shrink-0 min-h-screen pt-32">
          <div className="p-0 pt-4">
            {serviceMenuItems.map((item, index) => (
              <Link
                key={index}
                to={`/service-details/${item.id}`}
                className={`block px-4 py-3 text-sm hover:bg-primary-300 transition-colors font-bold ${
                  item.active ? "bg-primary-100 rounded-lg mx-2 my-1 shadow-sm" : ""
                }`}
              >
                <span className="text-primary-900">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white min-h-screen pt-32">
          <div className="p-8 pt-12 max-w-4xl">
            <h1 className="text-xl font-bold text-primary-900 mb-6">
              {currentService.title}
            </h1>
            
            {currentService.content}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};