import { ChevronRightIcon, MapPinIcon, VideoIcon, ClockIcon } from "lucide-react";
import React from "react";
import { AppointmentSuccessModal } from "../../../../components/AppointmentSuccessModal";
import { CancellationPolicyModal } from "../../../../components/CancellationPolicyModal";
import { TermsAndConditionsModal } from "../../../../components/TermsAndConditionsModal";
import { InformedConsentModal } from "../../../../components/InformedConsentModal";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";

export const MainContentSection = (): JSX.Element => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<string>("online");
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [acceptCancellation, setAcceptCancellation] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [acceptConsent, setAcceptConsent] = React.useState(false);
  const [isCancellationPolicyOpen, setIsCancellationPolicyOpen] = React.useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = React.useState(false);
  const [isConsentModalOpen, setIsConsentModalOpen] = React.useState(false);

  // Breadcrumb steps data
  const breadcrumbSteps = [
    { label: "Selección tratamiento", active: false },
    { label: "Selección horario", active: false },
    { label: "Inicia sesión", active: false },
    { label: "Confirmación y pago", active: true },
  ];

  // Payment methods
  const paymentMethods = [
    { 
      id: "online", 
      label: "Pago online", 
      subtitle: "Medios de pago",
      checked: true
    },
    { 
      id: "consulta", 
      label: "Pago en consulta", 
      subtitle: "Efectivo o transbank",
      checked: false
    },
  ];

  const handleConfirm = () => {
    setShowSuccessModal(true);
  };

  return (
    <>
    <section className="flex flex-col bg-primary-50 items-start gap-6 pt-24 pb-0 px-24 relative w-full">
      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-4 py-1 w-full max-w-[1384px] mx-auto">
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
      <div className="flex items-start gap-8 w-full max-w-[1384px] mx-auto">
        {/* Left column - Payment method selection */}
        <Card className="w-[632px] shadow-shadow-sm rounded-xl bg-white">
          <CardContent className="p-8">
            <h2 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)] mb-8">
              Modalidad de Pago
            </h2>

            <div className="space-y-6 mb-8">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="p-6 border border-gray-200 rounded-lg bg-white"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] mb-1">
                        {method.label}
                      </span>
                      <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-gray-600 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                        {method.subtitle}
                      </span>
                    </div>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      method.checked
                        ? "border-primary-900 bg-primary-900"
                        : "border-gray-300"
                    }`}>
                      {method.checked && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="cancellation-policy"
                  checked={acceptCancellation}
                  onCheckedChange={setAcceptCancellation}
                  className="w-4 h-4 bg-primary-50 border-gray-400 mt-1"
                />
                <Label
                  htmlFor="cancellation-policy"
                  className="text-sm text-primary-900 cursor-pointer"
                >
                  Acepto <button 
                    type="button"
                    onClick={() => setIsCancellationPolicyOpen(true)}
                    className="underline hover:no-underline"
                  >
                    política de cancelación
                  </button>
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms-conditions"
                  checked={acceptTerms}
                  onCheckedChange={setAcceptTerms}
                  className="w-4 h-4 bg-primary-50 border-gray-400 mt-1"
                />
                <Label
                  htmlFor="terms-conditions"
                  className="text-sm text-primary-900 cursor-pointer"
                >
                  Acepto <button 
                    type="button"
                    onClick={() => setIsTermsModalOpen(true)}
                    className="underline hover:no-underline"
                  >
                    términos y condiciones
                  </button>
                </Label>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="informed-consent"
                  checked={acceptConsent}
                  onCheckedChange={setAcceptConsent}
                  className="w-4 h-4 bg-primary-50 border-gray-400 mt-1"
                />
                <Label
                  htmlFor="informed-consent"
                  className="text-sm text-primary-900 cursor-pointer"
                >
                  Confirmo que he leído y acepto el <button 
                    type="button"
                    onClick={() => setIsConsentModalOpen(true)}
                    className="underline hover:no-underline"
                  >
                    consentimiento informado
                  </button>
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right column - Professional and service summary */}
        <Card className="flex-1 shadow-shadow-sm rounded-xl bg-white">
          <CardContent className="p-8">
            {/* Professional section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                  Profesional
                </h3>
                <div className="flex flex-col gap-2 text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <MapPinIcon className="w-4 h-4 text-gray-500" />
                    <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-sm">
                      Dirección
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <VideoIcon className="w-4 h-4 text-gray-500" />
                    <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-sm">
                      Modalidad
                    </span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <ClockIcon className="w-4 h-4 text-gray-500" />
                    <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)] text-sm">
                      Duración
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service section */}
            <div className="mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  Sesión de "(nombre del servicio)"
                </span>
                <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                  $0
                </span>
              </div>
            </div>

            {/* Total section */}
            <div className="flex justify-between items-center pt-4 border-t-2 border-primary-900 mb-8">
              <h4 className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                Total
              </h4>
              <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                $0
              </span>
            </div>

            {/* Confirm button */}
            <div className="flex justify-end">
              <Button 
                className="px-6 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 flex items-center gap-2"
                onClick={handleConfirm}
                disabled={!acceptCancellation || !acceptTerms || !acceptConsent}
              >
                <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
                  Confirmar y pagar
                </span>
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
      </div>
      <br /><br /><br />
    </section>

    <AppointmentSuccessModal
      isOpen={showSuccessModal}
      onClose={() => setShowSuccessModal(false)}
    />

    <CancellationPolicyModal
      isOpen={isCancellationPolicyOpen}
      onClose={() => setIsCancellationPolicyOpen(false)}
    />

    <TermsAndConditionsModal
      isOpen={isTermsModalOpen}
      onClose={() => setIsTermsModalOpen(false)}
    />

    <InformedConsentModal
      isOpen={isConsentModalOpen}
      onClose={() => setIsConsentModalOpen(false)}
    />
    </>
  );
};