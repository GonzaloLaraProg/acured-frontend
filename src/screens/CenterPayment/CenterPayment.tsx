import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, MapPinIcon, VideoIcon, ClockIcon, GlobeIcon, MenuIcon, UserIcon } from "lucide-react";
import { CenterSuccessModal } from "../../components/CenterSuccessModal";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { CancellationPolicyModal } from "../../components/CancellationPolicyModal";
import { TermsAndConditionsModal } from "../../components/TermsAndConditionsModal";
import { InformedConsentModal } from "../../components/InformedConsentModal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";

export const CenterPayment = (): JSX.Element => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<string>("online");
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [acceptCancellation, setAcceptCancellation] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [acceptConsent, setAcceptConsent] = React.useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isCancellationPolicyOpen, setIsCancellationPolicyOpen] = React.useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = React.useState(false);
  const [isConsentModalOpen, setIsConsentModalOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  // 👇 Aquí agregamos el estado del scroll
    const [scrolled, setScrolled] = React.useState(false);
  
    React.useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 0);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  // Breadcrumb steps data
  const breadcrumbSteps = [
    { label: "Selección tratamiento", active: false },
    { label: "Selección profesional", active: false },
    { label: "Selección Horario", active: false },
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
      <TopNav />
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

        {/* Right side buttons */}
        <div className="fixed top-[29px] right-8 flex items-center gap-2 z-50">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
            onClick={() => setIsLanguageModalOpen(true)}
          >
            <span className="text-sm text-gray-700 font-medium">Idioma</span>
            <GlobeIcon className="w-4 h-4 text-gray-600" />
          </Button>

          <Button 
            ref={menuButtonRef}
            variant="ghost" 
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
            onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
          >
            <span className="text-sm text-gray-700 font-medium">Menú</span>
            <MenuIcon className="w-4 h-4 text-gray-600" />
          </Button>

          <Button 
            variant="ghost" 
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/90 shadow-sm"
          >
            <span className="text-sm text-gray-700 font-medium">Nombre</span>
            <UserIcon className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="pt-32 px-16 relative z-10">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-4 py-1 mb-8 max-w-[1384px] mx-auto">
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
                  <span className="w-4 h-4 text-shadow-800">›</span>
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

            {/* Right column - Center and service summary */}
            <Card className="flex-1 shadow-shadow-sm rounded-xl bg-white">
              <CardContent className="p-8">
                {/* Center section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                      Centro
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

                  <p className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Profesional
                  </p>
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
                    Confirmar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CenterSuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
      
      <LanguageModal 
        isOpen={isLanguageModalOpen} 
        onClose={() => setIsLanguageModalOpen(false)} 
      />
      
      <MenuDropdown 
        isOpen={isMenuDropdownOpen} 
        onClose={() => setIsMenuDropdownOpen(false)} 
        triggerRef={menuButtonRef}
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