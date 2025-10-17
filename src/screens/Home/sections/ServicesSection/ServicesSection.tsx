import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cardsPerView = 5;

  const services = [
    { title: "Medicina China", description: "La Medicina Tradicional China (MTC) es un sistema médico completo y holístico …", image: "/image-1.png" },
    { title: "Acupuntura", description: "Los orígenes de la acupuntura se remontan a la antigüedad, aunque es difícil precisar …", image: "/image-2.png" },
    { title: "Moxibustión", description: "La moxibustión es una técnica de la medicina tradicional china que utiliza el calor generado …", image: "/image-3.png" },
    { title: "Ventosas", description: "La terapia de ventosas, conocida en chino como 'Bá Guàn' (拔罐) y en Occidente como 'Cupping' …", image: "/image-4.png" },
    { title: "Masaje Tuina", description: "El Masaje Tuina es una rama de la Medicina Tradicional China que utiliza el masaje como medio …", image: "/image-5.png" },
    { title: "Auriculoterapia", description: "La auriculoterapia (耳针疗法 - ěr zhēn liáo fǎ) es una rama especializada de la acupuntura …", image: "/image-6.png" },
    { title: "Fitoterapia", description: "La fitoterapia es una de las ramas más importantes de la Medicina Tradicional China (MTC), con …", image: "/image-7.png" },
    { title: "Dietoterapia", description: "La dietoterapia china es una disciplina terapéutica basada en los principios de la Medicina …", image: "/image-8.png" },
    { title: "Sangría terapéutica", description: "En la Medicina China Tradicional, la sangría se considera una técnica valiosa para regular el flujo …", image: "/image-9.png" },
    { title: "Aguja de fuego", description: "La aguja de fuego (huǒ zhēn), es una técnica especializada dentro de la Medicina China, que combina …", image: "/image-10.png" },
    { title: "Gua sha", description: "El Gua Sha es una técnica de la Medicina Tradicional China que consiste en aplicar fricción …", image: "/image-11.png" },
    { title: "Qigong", description: "El Qigong es una de las ramas más importantes de la Medicina China. Esta práctica combina …", image: "/image-12.png" },
  ];

  const totalCards = services.length;
  const cardWidth = 275;

  const handleNavigation = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => prev - cardsPerView);
    } else {
      setCurrentIndex((prev) => prev + cardsPerView);
    }
  };

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const getServiceAtIndex = (index: number) => {
    const normalizedIndex = ((index % services.length) + services.length) % services.length;
    return services[normalizedIndex];
  };

  const renderServices = [];
  const totalRenderItems = 1000;

  for (let i = 0; i < totalRenderItems; i++) {
    renderServices.push({
      ...getServiceAtIndex(i),
      originalIndex: i,
    });
  }

  return (
    <section className="px-16 py-28 relative">
      {/* Flecha izquierda */}
      <Button
        variant="ghost"
        onClick={() => handleNavigation("left")}
        className="absolute left-[calc(50%-720px)] top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200"
      >
        <ChevronLeftIcon className="w-6 h-6 text-primary-900" />
      </Button>

      {/* Flecha derecha */}
      <Button
        variant="ghost"
        onClick={() => handleNavigation("right")}
        className="absolute right-[calc(50%-720px)] top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200"
      >
        <ChevronRightIcon className="w-6 h-6 text-primary-900" />
      </Button>

      {/* Contenedor de tarjetas */}
      <div className="flex justify-center">
        <div className="overflow-hidden w-[1375px]">
          <div
            className="flex gap-[15px] transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(504 + currentIndex) * cardWidth}px)`,
              width: `${renderServices.length * cardWidth}px`,
            }}
          >
            {renderServices.map((service, index) => (
              <Card
                key={`${service.title}-${service.originalIndex}`}
                className="
                  group relative flex flex-col items-start gap-6 p-3 w-[260px] flex-shrink-0
                  bg-white/80 backdrop-blur-sm
                  rounded-2xl cursor-pointer 
                  shadow-md hover:shadow-xl
                  hover:-translate-y-1 hover:bg-white transition-all duration-300
                  border border-gray-100
                "
              >
                <CardContent className="flex flex-col items-start gap-6 w-full p-0">
                  
                  {/* Imagen */}
                  <div className="relative w-full h-[145px] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={service.title}
                      src={service.image}
                    />
                  </div>

                  {/* Título y descripción */}
                  <div className="flex flex-col items-start gap-3 w-full">
                    <h3 className="font-heading-h6 text-primary-900 text-lg">
                      {service.title}
                    </h3>
                    <p className="text-primary-900 text-sm line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Botón Ver más */}
                  <Button
                    variant="ghost"
                    className="px-4 py-2 bg-primary-100 rounded-3xl text-primary-800 text-sm hover:bg-primary-200 transition-all duration-300"
                  >
                    <Link to={`/service-details/${slugify(service.title)}`}>
                      Ver más
                    </Link>
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
