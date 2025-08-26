import { ChevronRightIcon, MapPinIcon, VideoIcon } from "lucide-react";
import React from "react";
import { ConfirmationModal } from "../../../../components/ConfirmationModal";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<string>("online");
  const [showConfirmationModal, setShowConfirmationModal] = React.useState(false);

  // Breadcrumb steps data
  const breadcrumbSteps = [
    { label: "Selección Servicio", active: false },
    { label: "Selección Servicio", active: false },
    { label: "Selección Horario", active: false },
    { label: "Confirmación y pago", active: true },
  ];

  // Payment methods
  const paymentMethods = [
    { id: "online", label: "Pago online", subtitle: "Subtítulo" },
    { id: "consulta", label: "Pago en consulta", subtitle: "Subtítulo" },
  ];

  // Services data (mock data for display)
  const services = [
    { name: "Tratamiento", duration: "Duración", price: 0 },
    { name: "Tratamiento", duration: "Duración", price: 0 },
  ];

  const totalPrice = services.reduce((total, service) => total + service.price, 0);

  const handleConfirm = () => {
    setShowConfirmationModal(true);
  };

  return (
    <>
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

      {/* Main content */}
      <div className="flex items-start gap-8 w-full">
        {/* Left column - Payment method selection */}
        <Card className="w-[686px] shadow-shadow-sm rounded-xl bg-white">
          <CardContent className="p-6">
            <h2 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] mb-6">
              Modalidad de Pago
            </h2>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedPaymentMethod === method.id
                      ? "border-primary-900 bg-primary-50"
                      : "border-gray-200 bg-white hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                        {method.label}
                      </span>
                      <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                        {method.subtitle}
                      </span>
                    </div>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      selectedPaymentMethod === method.id
                        ? "border-primary-900 bg-primary-900"
                        : "border-gray-300"
                    }`}>
                      {selectedPaymentMethod === method.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right column - Professional and service summary */}
        <Card className="flex-1 shadow-shadow-sm rounded-xl bg-white">
          <CardContent className="p-6">
            {/* Professional section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  Profesional
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-primary-900" />
                    <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                      Dirección
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VideoIcon className="w-4 h-4 text-primary-900" />
                    <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                      Modalidad
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services section */}
            <div className="space-y-4 mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col gap-2 pb-4 border-b border-gray-200 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                      {service.name}
                    </h4>
                    <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                      ${service.price}
                    </span>
                  </div>
                  <p className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                    {service.duration}
                  </p>
                </div>
              ))}
            </div>

            {/* Total section */}
            <div className="flex justify-between items-center pt-4 border-t-2 border-primary-900 mb-6">
              <h4 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Total
              </h4>
              <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                ${totalPrice}
              </span>
            </div>

            {/* Confirm button */}
            <div className="flex justify-end">
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
          </CardContent>
        </Card>
      </div>
    </section>

    <ConfirmationModal
      isOpen={showConfirmationModal}
      onClose={() => setShowConfirmationModal(false)}
    />
    </>
  );
};