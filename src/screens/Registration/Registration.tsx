import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRightIcon,
  GlobeIcon,
  MenuIcon,
  UserIcon,
  ArrowRightIcon,
} from "lucide-react";
import { CheckCircleIcon, XIcon } from "lucide-react";
import { FAQModal } from "../../components/FAQModal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { SupportModal } from "../../components/SupportModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import { FooterSection } from "../Home/sections/FooterSection";

export const Registration = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  const [currentStep, setCurrentStep] = React.useState<
    | "choose-role"
    | "create-account"
    | "name-form"
    | "basic-info"
    | "verification-code"
    | "sms-verification"
    | "success-confirmation"
  >("choose-role");

  const monthOptions = [
    { value: "enero", label: "Enero" },
    { value: "febrero", label: "Febrero" },
    { value: "marzo", label: "Marzo" },
    { value: "abril", label: "Abril" },
    { value: "mayo", label: "Mayo" },
    { value: "junio", label: "Junio" },
    { value: "julio", label: "Julio" },
    { value: "agosto", label: "Agosto" },
    { value: "septiembre", label: "Septiembre" },
    { value: "octubre", label: "Octubre" },
    { value: "noviembre", label: "Noviembre" },
    { value: "diciembre", label: "Diciembre" },
  ];

  const countryCodeOptions = [
    { value: "+569", label: "+569" },
    { value: "+56", label: "+56" },
  ];

  const passwordRequirements = [
    "• Al menos 8 caracteres",
    "• Al menos una letra mayúscula",
    "• Al menos una letra minúscula",
    "• Al menos un número",
  ];

  const [selectedGender, setSelectedGender] = React.useState<string>("");
  const [selectedOption, setSelectedOption] = React.useState<string>("");
  const [expandedGender, setExpandedGender] = React.useState(false);
  const [isGenderOpen, setIsGenderOpen] = React.useState(false);

  const getGenderOptions = () => {
    if (!expandedGender) {
      return [
        { value: "masculino", label: "Masculino" },
        { value: "femenino", label: "Femenino" },
        { value: "otro", label: "Otro" },
      ];
    }
    return [
      { value: "no-binario", label: "No binario" },
      { value: "transfemenino", label: "Transfemenino" },
      { value: "transmasculino", label: "Transmasculino" },
      { value: "prefiero-no-informar", label: "Prefiero no informar" },
      { value: "otro", label: "Otro" },
    ];
  };

  const handleVerificationOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    if (optionId === "sms") {
      setCurrentStep("sms-verification");
    }
  };

  const verificationOptions = [
    {
      id: "email",
      title: "Email",
      description:
        "Te enviaremos un código de verificación a tu correo electrónico acu**@gmail.com.",
    },
    {
      id: "sms",
      title: "Mensaje de texto",
      description:
        "Te enviaremos un SMS con un código de verificación a tu teléfono terminado en +569 **** 8823.",
    },
    {
      id: "Whatsapp",
      title: "Whatsapp",
      description:
        "Te enviaremos un WhatsApp con un código de verificación a tu teléfono terminado en +569 **** 8823.",
    },
  ];

  const handleChoosePatient = () => setCurrentStep("create-account");
  const handleChooseTherapist = () => setCurrentStep("create-account");

  const handleNameForm = () => setCurrentStep("name-form");
  const handleBasicInfo = () => setCurrentStep("basic-info");
  const handleVerificationCode = () => setCurrentStep("verification-code");

  const handleBack = () => {
    switch (currentStep) {
      case "name-form":
        setCurrentStep("create-account");
        break;
      case "basic-info":
        setCurrentStep("name-form");
        break;
      case "verification-code":
        setCurrentStep("basic-info");
        break;
      case "sms-verification":
        setCurrentStep("verification-code");
        break;
      default:
        navigate("/login");
    }
  };

  return (
    <>
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
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
        <div className="flex min-h-screen">
          {/* Left side - Registration or Success */}
          <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-16">
            {currentStep === "success-confirmation" ? (
              /* ✅ Success fuera del Card general */
              <div className="flex flex-col items-center justify-center gap-2.5 px-16 py-0 flex-1">
                <Card className="w-96 shadow-shadow-md">
                  <div className="flex items-center gap-2 px-4 py-2 bg-terciary-50 rounded-[8px_8px_0px_0px]">
                    <CheckCircleIcon className="w-7 h-7 text-terciary-600" />
                    <div className="flex-1 font-heading-h7 text-terciary-600">
                      Éxito
                    </div>
                    <XIcon className="w-4 h-4" />
                  </div>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 bg-otherswhite rounded-[0px_0px_8px_8px]">
                    <div className="self-stretch text-gray-600">
                      Tu cuenta ha sido creada con éxito
                    </div>
                    <div className="flex flex-col items-start gap-2 pt-3 w-full border-t border-solid border-[#d4d4d8]">
                      <div className="flex items-center justify-end gap-2.5 w-full">
                        <div className="inline-flex items-start gap-2">
                          <Button
                            className="h-auto px-4 py-2 bg-primary-800 rounded-3xl shadow-shadow-md"
                            onClick={() => navigate("/")}
                          >
                            Agenda una cita
                          </Button>
                          <Button
                            variant="outline"
                            className="h-auto px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs"
                            onClick={() => navigate("/patient-dashboard")}
                          >
                            Ir a mi perfil
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              /* ✅ Todos los demás pasos dentro del Card general */
              <Card className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  {/* Title */}
                  <h1 className="text-center mb-8 text-2xl font-normal text-primary-900">
                    {currentStep === "create-account"
                      ? "Crea una cuenta o regístrate a través de google"
                      : currentStep === "name-form"
                      ? "Crea una Cuenta en Acured"
                      : currentStep === "basic-info"
                      ? "Información básica"
                      : currentStep === "verification-code"
                      ? "Código de verificación"
                      : currentStep === "sms-verification"
                      ? "Código de verificación"
                      : "Registro"}
                  </h1>

                  {currentStep === "name-form" && (
                    <p className="text-center mb-6 text-sm text-gray-600">
                      Ingresa tu nombre y apellido
                    </p>
                  )}

                  {/* Step: choose-role */}
                  {currentStep === "choose-role" && (
                    <div className="space-y-4">
                      <div
                        className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={handleChoosePatient}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="font-paragraph-p2-semi-bold text-primary-900">
                              Acured para pacientes
                            </span>
                            <span className="font-paragraph-p3 text-gray-600">
                              Soy paciente y quiero registrarme
                            </span>
                          </div>
                          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>

                      <div
                        className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={handleChooseTherapist}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="font-paragraph-p2-semi-bold text-primary-900">
                              Acured para acupunturistas
                            </span>
                            <span className="font-paragraph-p3 text-gray-600">
                              Soy acupunturista y me interesa administrar mis pacientes
                            </span>
                          </div>
                          <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step: create-account */}
                  {currentStep === "create-account" && (
                    <div className="space-y-4">
                      <Button
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 hover:bg-gray-200 transition-colors"
                        onClick={handleNameForm}
                      >
                        <span className="font-medium">Crear cuenta</span>
                      </Button>

                      <Button className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                        <span className="text-xl">G</span>
                        <span className="font-medium">Continuar con google</span>
                      </Button>
                    </div>
                  )}

                  {/* Step: name-form */}
                  {currentStep === "name-form" && (
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Nombres"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />

                      <input
                        type="text"
                        placeholder="Apellidos"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />

                      <div className="flex items-center justify-between pt-4">
                        <button
                          className="text-primary-900 text-sm hover:underline"
                          onClick={handleBack}
                        >
                          Atrás
                        </button>
                        <button
                          className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
                          onClick={handleBasicInfo}
                        >
                          Siguiente
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step: basic-info */}
                  {currentStep === "basic-info" && (
                    <div className="flex flex-col items-center justify-center gap-2.5 relative flex-1 grow">
                      <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                        <div className="flex flex-col items-center gap-6 w-full">
                          <div className="flex flex-col items-start gap-6 pb-4 w-full">
                            <div className="flex flex-col items-start gap-4 w-full">
                              <h3 className="font-heading-h7 text-shadow-900">
                                Información personal
                              </h3>

                              <div className="flex flex-col items-start gap-3 w-full">
                                <div className="flex flex-col items-start gap-2 w-full">
                                  <Label className="font-paragraph-p1-semi-bold text-shadow-600">
                                    Rut
                                  </Label>
                                  <Input
                                    className="p-2 bg-primary-50 rounded border-0"
                                    placeholder="Sin puntos y sin guión"
                                  />
                                </div>

                                <div className="flex flex-col items-start gap-2 w-full">
                                  <Label className="font-paragraph-p1-semi-bold text-shadow-600">
                                    Fecha de nacimiento
                                  </Label>

                                  <div className="inline-flex items-center gap-2.5">
                                    <Input
                                      className="w-[130px] p-2 bg-primary-50 rounded border-0"
                                      placeholder="Dia (ej: 04)"
                                    />

                                    <Select>
                                      <SelectTrigger className="w-[130px] p-2 bg-primary-50 rounded border-0 justify-between">
                                        <SelectValue placeholder="Mes" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {monthOptions.map((m) => (
                                          <SelectItem key={m.value} value={m.value}>
                                            {m.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>

                                    <Input
                                      className="w-[130px] p-2 bg-primary-50 rounded border-0"
                                      placeholder="Año (ej: 1996)"
                                    />
                                  </div>
                                </div>

                                <div className="flex flex-col items-start gap-2 w-full">
                                  <Select
                                    value={selectedGender}
                                    open={isGenderOpen}
                                    onOpenChange={setIsGenderOpen}
                                    onValueChange={(value) => {
                                      if (value === "otro" && !expandedGender) {
                                        setExpandedGender(true);
                                        setTimeout(() => setIsGenderOpen(true), 0);
                                        setSelectedGender("");
                                      } else {
                                        setSelectedGender(value);
                                        setIsGenderOpen(false);
                                      }
                                    }}
                                  >
                                    <SelectTrigger className="flex-col w-full border border-[#bbcac0] bg-primary-50 rounded">
                                      <SelectValue placeholder="Género" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {getGenderOptions().map((option) => (
                                        <SelectItem
                                          key={option.value}
                                          value={option.value}
                                          onSelect={(e) => {
                                            if (option.value === "otro" && !expandedGender) {
                                              e.preventDefault();
                                              setExpandedGender(true);
                                              setIsGenderOpen(true);
                                            }
                                          }}
                                        >
                                          {option.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col items-start gap-4 w-full">
                              <div className="inline-flex items-center">
                                <h3 className="font-heading-h7 text-shadow-900">
                                  Información de contacto
                                </h3>
                              </div>

                              <div className="flex flex-col items-start gap-6 w-full">
                                <div className="flex items-start gap-2 w-full">
                                  <Select defaultValue="+569">
                                    <SelectTrigger className="w-[87px] px-3 py-1.5 bg-primary-50 rounded border-0 justify-between">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {countryCodeOptions.map((code) => (
                                        <SelectItem key={code.value} value={code.value}>
                                          {code.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>

                                  <Input
                                    className="flex-1 p-2 bg-primary-50 rounded border-0"
                                    placeholder="Numero de teléfono"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 w-full">
                              <h3 className="font-heading-h7 text-shadow-900">
                                Email y contraseña
                              </h3>

                              <div className="flex flex-col items-start gap-3 w-full">
                                <p className="font-paragraph-p1-semi-bold text-shadow-600">
                                  Recibirás un email con un código de confirmación
                                </p>

                                <Input
                                  className="h-[33px] p-2 bg-primary-50 rounded border-0"
                                  placeholder="Email"
                                />

                                <p className="font-paragraph-p1-semi-bold text-shadow-600">
                                  Tu contraseña debe tener mínimo 8 números o caracteres
                                </p>

                                <Input
                                  type="password"
                                  className="h-[33px] p-2 bg-primary-50 rounded border-0"
                                  placeholder="Crea una contraseña"
                                />

                                <div className="inline-flex flex-col items-start pl-2">
                                  {passwordRequirements.map((req, i) => (
                                    <div
                                      key={i}
                                      className="font-paragraph-p1-semi-bold text-shadow-600"
                                    >
                                      {req}
                                    </div>
                                  ))}
                                </div>

                                <Input
                                  type="password"
                                  className="h-[33px] p-2 bg-primary-50 rounded border-0"
                                  placeholder="Confirma tu contraseña aquí"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button
                          className="inline-flex px-4 py-2 bg-primary-900 rounded-3xl items-center justify-center"
                          onClick={handleVerificationCode}
                        >
                          <span className="font-semibold text-neutralswhite text-sm leading-5">
                            Confirmar
                          </span>
                          <ArrowRightIcon className="w-5 h-5 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step: verification-code */}
                  {currentStep === "verification-code" && (
                    <div className="w-full">
                      <header className="flex flex-col items-center gap-6 w-full">
                        <div className="flex flex-col items-center gap-3 w-full">
                          <p className="font-heading-h7 text-black text-center">
                            Elige cómo quieres recibir tu código de verificación.
                          </p>
                        </div>
                      </header>

                      <div className="h-4" />

                      <div className="flex flex-col items-start gap-4 w-full">
                        {verificationOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleVerificationOptionSelect(option.id)}
                            className={`flex items-center gap-3 p-6 w-full rounded border border-solid shadow-shadow-xs transition-colors ${
                              selectedOption === option.id
                                ? "bg-primary-50 border-[#d3e0d7]"
                                : "bg-neutralswhite border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <div className="flex flex-col items-start justify-center gap-2 flex-1">
                              <h3 className="font-heading-h6 text-primary-800">
                                {option.title}
                              </h3>
                              <p className="font-paragraph-p1-semi-bold text-primary-800 text-left">
                                {option.description}
                              </p>
                            </div>
                            <ChevronRightIcon className="w-5 h-5 text-primary-800" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step: sms-verification */}
                  {currentStep === "sms-verification" && (
                    <div className="w-full">
                      <div className="flex flex-col items-center gap-6 w-full">
                        <div className="flex flex-col items-center gap-3 w-full">
                          <p className="text-black text-sm text-center leading-[14px]">
                            <span>Ingrese el código de verificación de 6 dígitos enviado a </span>
                            <span className="font-semibold">+569 ****8823</span>
                          </p>
                        </div>

                        <div className="flex flex-col items-center gap-4 w-full">
                          <InputOTP
                            maxLength={6}
                            className="flex items-start justify-center gap-2 w-full"
                          >
                            <InputOTPGroup className="flex items-start justify-center gap-2 w-full">
                              <InputOTPSlot
                                index={0}
                                className="flex items-center p-2 flex-1 bg-primary-50 rounded border border-solid border-[#dcdce2]"
                              />
                              <InputOTPSlot
                                index={1}
                                className="flex items-center p-2 flex-1 bg-primary-50 rounded border border-solid border-[#dcdce2]"
                              />
                              <InputOTPSlot
                                index={2}
                                className="flex items-center p-2 flex-1 bg-primary-50 rounded border border-solid border-[#dcdce2]"
                              />
                              <InputOTPSlot
                                index={3}
                                className="flex items-center p-2 flex-1 bg-primary-50 rounded border border-solid border-[#dcdce2]"
                              />
                              <InputOTPSlot
                                index={4}
                                className="flex items-center p-2 flex-1 bg-primary-50 rounded border border-solid border-[#dcdce2]"
                              />
                              <InputOTPSlot
                                index={5}
                                className="flex items-center p-2 flex-1 bg-primary-50 rounded border border-solid border-[#dcdce2]"
                              />
                            </InputOTPGroup>
                          </InputOTP>

                          <div className="flex flex-col items-center gap-2.5 w-full">
                            <div className="font-medium text-primary-900 text-xs">00:30</div>
                            <button className="w-[206px] opacity-40 font-text-xs-medium-underline text-primary-900 text-center underline">
                              Si aún no has recibido el código ¡Haz click aquí!
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start justify-between w-full mt-6">
                        <Button
                          variant="outline"
                          className="px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs h-auto"
                          onClick={handleBack}
                        >
                          <span className="text-primary-800 text-xs">Atrás</span>
                        </Button>

                        <Button
                          className="px-4 py-2 bg-primary-900 rounded-3xl items-center justify-center h-auto"
                          onClick={() => setCurrentStep("success-confirmation")}
                        >
                          <span className="text-neutralswhite text-sm font-semibold">
                            Confirmar
                          </span>
                          <ChevronRightIcon className="w-5 h-5 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right side - Image */}
          <div className="flex-1 relative">
            <img
              src="/loginimg.jpg"
              alt="Acupuncture treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <FooterSection
          onFAQClick={() => setIsFAQModalOpen(true)}
          onSupportClick={() => setIsSupportModalOpen(true)}
        />
      </div>

      {/* Modals */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
      />
      <MenuDropdown
        isOpen={isMenuDropdownOpen}
        onClose={() => setIsMenuDropdownOpen(false)}
        buttonRef={menuButtonRef}
      />
      <FAQModal
        isOpen={isFAQModalOpen}
        onClose={() => setIsFAQModalOpen(false)}
      />
      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </>
  );
};
