import {
  ChevronRightIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MapPinIcon,
  PlusIcon,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const MainContentSection = (): JSX.Element => {
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const navigate = useNavigate();

  // Breadcrumb steps data
  const breadcrumbSteps = [
    { label: "Selección Servicio", active: false },
    { label: "Selección Servicio", active: true },
    { label: "Selección Horario", active: false },
    { label: "Confirmación y pago", active: false },
  ];

  // Service categories data
  const serviceCategories = [
    { name: "Todos", active: true },
    { name: "Servicio 1", active: false },
    { name: "Servicio 2", active: false },
    { name: "Servicio 3", active: false },
    { name: "Servicio 4", active: false },
  ];

  // Services data
  const services = [
    { id: "medicina-china", name: "Medicina china integral", duration: "Duración", weight: "Peso", price: 50000 },
    { id: "dragon-fuego", name: "Dragon de fuego", duration: "Duración", weight: "Peso", price: 35000 },
    { id: "tratamiento-1", name: "Tratamiento", duration: "Duración", weight: "Peso", price: 25000 },
    { id: "tratamiento-2", name: "Tratamiento", duration: "Duración", weight: "Peso", price: 30000 },
  ];

  // Social media links
  const socialLinks = [
    { name: "Instagram", icon: <InstagramIcon className="w-5 h-5" /> },
    { name: "Facebook", icon: <FacebookIcon className="w-5 h-5" /> },
    { name: "Lindkedin", icon: <LinkedinIcon className="w-5 h-5" /> },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getSelectedServicesData = () => {
    return services.filter(service => selectedServices.includes(service.id));
  };

  const getTotalPrice = () => {
    return getSelectedServicesData().reduce((total, service) => total + service.price, 0);
  };

  const handleConfirm = () => {
    navigate('/schedule-selection');
  };

  return (
    <section className="flex flex-col items-start gap-6 pt-24 pb-0 px-24 relative w-full">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-4 py-1 w-full">
        {breadcrumbSteps.map((step, index) => (
          <div
            key={`step-${index}`}
            className={`inline-flex items-center gap-1 ${step.active ? "" : "opacity-25"}`}
          >
            <span
              className={`text-xs ${step.active ? "font-semibold" : "font-medium"} text-shadow-800 leading-[18px] [font-family:'Inter',Helvetica]`}
            >
              {step.label}
            </span>
            {index < breadcrumbSteps.length - 1 && (
              <ChevronRightIcon className="w-4 h-4 text-shadow-800" />
            )}
          </div>
        ))}
      </div>

      {/* Professional card */}
      <Card className="w-full border border-solid border-[#dcdce2] shadow-shadow-sm rounded-lg bg-white">
        <CardContent className="flex p-0 h-[164px]">
          <div className="w-[166px] h-full">
            <img
              className="h-full w-full object-cover rounded-l-lg"
              alt="Professional"
              src="/9ed8871431e38c555a92361057be591190379d9c.jpg"
            />
          </div>

          <div className="flex flex-1 p-6 gap-6">
            <div className="flex flex-col gap-6 flex-grow">
              <div className="flex flex-col w-[317px] gap-2">
                <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  Profesional
                </h6>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h6 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Descripción
              </h6>

              <p className="w-[279px] font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                Todo lo que ofrece.
              </p>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((link, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex gap-2 items-center rounded-3xl bg-transparent border-none"
                  >
                    <span className="font-semibold text-shadow-800 text-sm leading-5 [font-family:'Inter',Helvetica]">
                      {link.name}
                    </span>
                    {link.icon}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 w-[120px] flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <MapPinIcon className="w-5 h-5 text-primary-900" />
                <span className="font-normal text-primary-900 text-xs leading-5 [font-family:'Inter',Helvetica]">
                  Dirección
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <VideoIcon className="w-5 h-5 text-primary-900" />
                <span className="font-normal text-primary-900 text-xs leading-5 [font-family:'Inter',Helvetica]">
                  Modalidad
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <ClockIcon className="w-5 h-5 text-primary-900" />
                <span className="font-normal text-primary-900 text-xs leading-5 [font-family:'Inter',Helvetica]">
                  Duración
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services section */}
      <div className="flex items-start gap-8 w-full">
        {/* Left column - Service selection */}
        <div className="flex flex-col w-[686px] gap-6">
          {/* Service categories tabs */}
          <div className="px-0">
            <Tabs defaultValue="Todos" className="w-full">
              <TabsList className="bg-transparent p-0 h-auto gap-6 rounded-none w-full justify-start">
                {serviceCategories.map((category, index) => (
                  <TabsTrigger
                    key={index}
                    value={category.name}
                    className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary-800 data-[state=active]:text-primary-800 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=inactive]:bg-transparent data-[state=inactive]:text-shadow-800 rounded-none bg-transparent"
                  >
                    <span className="font-medium text-sm [font-family:'Inter',Helvetica]">
                      {category.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Service list */}
          <div className="flex flex-col gap-4 w-full mt-0">
            {services.map((service, index) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <Card
                  key={index}
                  className="w-full border border-solid border-gray-200 shadow-none rounded-[4px] bg-white"
                >
                  <CardContent className="flex items-end justify-between p-4">
                    <div className="flex flex-col gap-2">
                      <h6 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                        {service.name}
                      </h6>
                      <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                        {service.duration}
                      </p>
                      <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                        {service.weight}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleServiceToggle(service.id)}
                      className={`rounded-3xl border-none px-4 py-2 ${
                        isSelected 
                          ? "bg-primary-900 text-white hover:bg-primary-800" 
                          : "bg-primary-100 text-primary-800 hover:bg-primary-200"
                      }`}
                    >
                      <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
                        {isSelected ? "Eliminar" : "Añadir"}
                      </span>
                      {isSelected ? (
                        <span className="ml-2">—</span>
                      ) : (
                        <PlusIcon className="w-4 h-4 ml-2" />
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Right column - Selected services */}
        <Card className="flex-1 shadow-shadow-sm rounded-lg min-h-[400px] bg-white">
          <CardContent className="p-6">
            {selectedServices.length === 0 ? (
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <p className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] text-center tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  No hay servicios seleccionados
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {getSelectedServicesData().map((service, index) => (
                  <div key={index} className="flex flex-col gap-2 pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <h6 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                        {service.name}
                      </h6>
                      <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                        ${service.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                      {service.duration}
                    </p>
                  </div>
                ))}
                
                {/* Total section */}
                <div className="flex justify-between items-center pt-4 border-t-2 border-primary-900">
                  <h6 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Total
                  </h6>
                  <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    ${getTotalPrice().toLocaleString()}
                  </span>
                </div>

                {/* Confirm button */}
                <div className="flex justify-end mt-6">
                  <Button 
                    className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
                    onClick={handleConfirm}
                  >
                    <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
                      Confirmar
                    </span>
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};