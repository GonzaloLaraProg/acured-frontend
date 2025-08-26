import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cardsPerView = 5;
  const totalCards = 12;

  // Extended service data for 12 services
  const services = [
    {
      title: "Acupuntura",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-2.svg",
    },
    {
      title: "Medicina China",
      description:
        "La Medicina Tradicional China (MTC) es un sistema médico complejo y holístico...",
      image: "/image.svg",
    },
    {
      title: "Moxibustión",
      description:
        "La moxibustión es una técnica de la medicina tradicional china que utiliza el calor generado...",
      image: "/image-1.svg",
    },
    {
      title: "Ventosas",
      description:
        "La terapia de ventosas, conocida en chino como 'Ba Guan' (拔罐) y en Occidente como 'cupping'...",
      image: "/image-2.svg",
    },
    {
      title: "Masaje Tuina",
      description:
        "El Masaje Tuina es una rama de la Medicina Tradicional China que utiliza el masaje como medio...",
      image: "/image-63.png",
    },
    {
      title: "Auriculoterapia",
      description:
        "La auriculoterapia es una especialidad...",
      image: "/image-3.svg",
    },
    {
      title: "Fitoterapia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image.svg",
    },
    {
      title: "Electropuntura",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-1.svg",
    },
    {
      title: "Reflexología",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-2.svg",
    },
    {
      title: "Qi Gong",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-3.svg",
    },
    {
      title: "Dietoterapia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image.svg",
    },
    {
      title: "Medicina Herbal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
      image: "/image-63.png",
    },
  ];

  const handleNavigation = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      // Loop to the end if at the beginning
      setCurrentIndex(currentIndex === 0 ? totalCards - cardsPerView : currentIndex - cardsPerView);
    } else {
      // Loop to the beginning if at the end
      setCurrentIndex(currentIndex + cardsPerView >= totalCards ? 0 : currentIndex + cardsPerView);
    }
  };

  const visibleCards = services.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="px-16 py-28 relative">
      {/* Navigation arrows */}
      <Button
        variant="ghost"
        onClick={() => handleNavigation('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
      >
        <ChevronLeftIcon className="w-5 h-5 text-primary-900" />
      </Button>

      <Button
        variant="ghost"
        onClick={() => handleNavigation('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
      >
        <ChevronRightIcon className="w-5 h-5 text-primary-900" />
      </Button>

      {/* Cards container */}
      <div className="flex gap-[15px] justify-center">
        {visibleCards.map((service, index) => (
          <Card
            key={currentIndex + index}
            className="shadow-shadow-base flex flex-col items-start gap-6 p-3 w-[260px] flex-shrink-0 bg-primary-50 rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <CardContent className="flex flex-col items-start gap-6 w-full p-0">
              <div className="flex items-start gap-2.5 w-full h-[145px] bg-primary-200 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={service.title}
                  src={service.image}
                />
              </div>

              <div className="flex flex-col items-start gap-3 w-full">
                <h3 className="w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] text-left tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  {service.title}
                </h3>

                <div className="flex flex-col items-start gap-3 w-full">
                  <p className="w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal] line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              <Button
                variant="ghost"
                className="px-4 py-2 bg-primary-100 rounded-3xl [font-family:'Inter',Helvetica] font-medium text-primary-800 text-sm leading-5 h-auto"
              >
                <Link to={`/service-details/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-decoration-none">
                  Ver más
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scroll indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(totalCards / cardsPerView) }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / cardsPerView) === index
                ? 'bg-primary-900'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
