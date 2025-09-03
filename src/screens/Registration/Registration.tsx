import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon, GlobeIcon, MenuIcon, UserIcon, ArrowRightIcon } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";
import { FooterSection } from "../Home/sections/FooterSection";

export const Registration = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const [currentStep, setCurrentStep] = React.useState<
  'choose-role' | 'create-account' | 'name-form' | 'basic-info' | 'verification-code' | 'sms-verification' | 'success-confirmation'
>('choose-role');


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

  const genderOptions = [
    { value: "masculino", label: "Masculino" },
    { value: "femenino", label: "Femenino" },
    { value: "otro", label: "Otro" },
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

  const handleVerificationOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    if (optionId === 'sms') {
      setCurrentStep('sms-verification');
    }
  };

  const verificationOptions = [
    {
      id: "sms",
      title: "Mensaje de texto",
      description: "Enviaremos un código de 6 dígitos al +569 *** *** **"
    },
    {
      id: "email",
      title: "Correo electrónico",
      description: "Enviaremos un código de 6 dígitos a tu correo electrónico"
    }
  ];
  
  const handleChoosePatient = () => setCurrentStep('create-account');
  const handleChooseTherapist = () => setCurrentStep('create-account');

  const handleNameForm = () => {
    setCurrentStep('name-form');
  };

  const handleBasicInfo = () => {
    setCurrentStep('basic-info');
  };

  const handleVerificationCode = () => {
    setCurrentStep('verification-code');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'name-form':
        setCurrentStep('create-account');
        break;
      case 'basic-info':
        setCurrentStep('name-form');
        break;
      case 'verification-code':
        setCurrentStep('basic-info');
        break;
      case 'sms-verification':
        setCurrentStep('verification-code');
        break;
      default:
        navigate('/login');
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
          {/* Left side - Registration form */}
          <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-16">
            <Card className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                {/* Title */}
                <h1 className="text-center mb-8 text-2xl font-normal text-primary-900">
                  {currentStep === 'create-account' ? "Crea una cuenta o regístrate a través de google" :
                   currentStep === 'name-form' ? "Crea una Cuenta en Acured" :
                   currentStep === 'basic-info' ? "Información básica" :
                   currentStep === 'verification-code' ? "Código de verificación" :
                   currentStep === 'sms-verification' ? "Código de verificación" :
                   "Registro"}
                </h1>

                {currentStep === 'name-form' && (
                  <p className="text-center mb-6 text-sm text-gray-600">
                    Ingresa tu nombre y apellido
                  </p>
                )}
                {/* 👉 Paso inicial: elegir rol */}
                {currentStep === 'choose-role' && (
                  <div className="space-y-4">
                    {/* Acured para pacientes */}
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

                    {/* Acured para acupunturistas */}
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


                {currentStep === 'create-account' ? (
                  /* Create Account Options */
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
                ) : currentStep === 'name-form' ? (
                  /* Name Form */
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
                ) : currentStep === 'basic-info' ? (
                  /* Basic Info Form */
                  <div className="flex flex-col items-center justify-center gap-2.5 relative flex-1 grow">
                    <Card className="relative self-stretch w-full flex-[0_0_auto] bg-neutralswhite rounded-lg shadow-shadow-sm">
                      <CardContent className="flex flex-col items-end justify-center gap-8 p-8">
                        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                              <h2 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                                Información básica
                              </h2>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-6 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]">
                              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                                <h3 className="relative w-fit mt-[-1.00px] font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-shadow-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] whitespace-nowrap [font-style:var(--heading-h7-font-style)]">
                                  Información personal
                                </h3>

                                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                    <Label className="relative w-fit mt-[-1.00px] font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                      Rut
                                    </Label>

                                    <Input
                                      className="items-start self-stretch w-full flex-[0_0_auto] flex p-2 relative bg-primary-50 rounded border-0"
                                      placeholder="Sin puntos y sin guión"
                                    />
                                  </div>

                                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                    <Label className="relative w-fit mt-[-1.00px] font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                      Fecha de nacimiento
                                    </Label>

                                    <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                                      <Input
                                        className="flex w-[130px] items-center p-2 relative bg-primary-50 rounded border-0"
                                        placeholder="Dia (ej: 04)"
                                      />

                                      <Select>
                                        <SelectTrigger className="flex w-[130px] items-center justify-between p-2 relative bg-primary-50 rounded border-0">
                                          <SelectValue placeholder="Mes" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          {monthOptions.map((month) => (
                                            <SelectItem
                                              key={month.value}
                                              value={month.value}
                                            >
                                              {month.label}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>

                                      <Input
                                        className="flex w-[130px] items-center p-2 relative bg-primary-50 rounded border-0"
                                        placeholder="Año (ej: 1996)"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                    <Select
                                      value={selectedGender}
                                      onValueChange={setSelectedGender}
                                    >
                                      <SelectTrigger className="flex-col self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] overflow-hidden border border-solid border-[#bbcac0] shadow-shadow-sm flex items-center relative bg-primary-50 rounded">
                                        <div className="flex items-center justify-between p-2 relative self-stretch w-full flex-[0_0_auto]">
                                          <SelectValue
                                            placeholder="Género"
                                            className="font-paragraph-p2-regular text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] relative w-fit font-[number:var(--paragraph-p2-regular-font-weight)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                                          />
                                        </div>
                                      </SelectTrigger>
                                      <SelectContent className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                                        {genderOptions.map((option) => (
                                          <SelectItem
                                            key={option.value}
                                            value={option.value}
                                            className="flex items-start relative self-stretch w-full flex-[0_0_auto] bg-neutralswhite border-t border-[#f3f3f5] px-2 py-1"
                                          >
                                            <span className="relative w-fit font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                                              {option.label}
                                            </span>
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </div>

                              <div className="justify-center flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex flex-[0_0_auto] items-center relative">
                                  <h3 className="relative w-fit mt-[-1.00px] font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-shadow-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] whitespace-nowrap [font-style:var(--heading-h7-font-style)]">
                                    Información de contacto
                                  </h3>
                                </div>

                                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                                  <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                    <Select defaultValue="+569">
                                      <SelectTrigger className="w-[87px] justify-between px-3 py-1.5 flex items-center relative bg-primary-50 rounded border-0">
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
                                      className="items-center flex-1 grow flex p-2 relative bg-primary-50 rounded border-0"
                                      placeholder="Numero de teléfono"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <h3 className="relative w-fit mt-[-1.00px] font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-shadow-900 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] whitespace-nowrap [font-style:var(--heading-h7-font-style)]">
                                  Email y contraseña
                                </h3>

                                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                                  <p className="mt-[-1.00px] relative self-stretch font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                    Recibirás un email con un código de confirmación
                                  </p>

                                  <Input
                                    className="h-[33px] items-center self-stretch w-full flex p-2 relative bg-primary-50 rounded border-0"
                                    placeholder="Email"
                                  />

                                  <p className="relative self-stretch font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                    Tu contraseña debe tener mínimo 8 números o caracteres
                                  </p>

                                  <Input
                                    type="password"
                                    className="h-[33px] items-center self-stretch w-full flex p-2 relative bg-primary-50 rounded border-0"
                                    placeholder="Crea una contraseña"
                                  />

                                  <div className="inline-flex flex-col items-start pl-2 pr-0 py-0 relative flex-[0_0_auto]">
                                    {passwordRequirements.map((requirement, index) => (
                                      <div
                                        key={index}
                                        className="relative w-fit font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]"
                                      >
                                        {requirement}
                                      </div>
                                    ))}
                                  </div>

                                  <Input
                                    type="password"
                                    className="h-[33px] items-center self-stretch w-full flex p-2 relative bg-primary-50 rounded border-0"
                                    placeholder="Confirma tu contraseña aquí"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button 
                          className="inline-flex px-4 py-2 flex-[0_0_auto] bg-primary-900 rounded-3xl items-center justify-center relative h-auto"
                          onClick={handleVerificationCode}
                        >
                          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <span className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm tracking-[0] leading-5 whitespace-nowrap relative w-fit text-right">
                              Confirmar
                            </span>
                            <ArrowRightIcon className="relative w-5 h-5" />
                          </div>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ) : currentStep === 'verification-code' ? (
                  /* Verification Code Step */
                  <section className="flex flex-col h-[735px] items-center justify-center gap-2.5 p-16 flex-1">
                    <Card className="w-[480px] bg-neutralswhite shadow-shadow-sm">
                      <CardContent className="flex flex-col items-start gap-8 p-8">
                        <header className="flex flex-col items-center gap-6 w-full">
                          <div className="flex flex-col items-center gap-3 w-full">
                            <h1 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                              Código de verificación
                            </h1>
                            <p className="font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-black text-[length:var(--heading-h7-font-size)] text-center tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
                              Elige cómo quieres recibir tu código de verificación.
                            </p>
                          </div>
                        </header>

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
                                <h3 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-800 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                                  {option.title}
                                </h3>
                                <p className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-800 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)] text-left">
                                  {option.description}
                                </p>
                              </div>
                              <ChevronRightIcon className="w-5 h-5 text-primary-800" />
                            </button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                ) : currentStep === 'sms-verification' ? (
                  /* SMS Verification Code Input */
                  <Card className="w-[398px] bg-neutralswhite rounded-lg shadow-shadow-sm">
                    <CardContent className="flex flex-col items-end justify-center gap-8 p-8">
                      <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                          <h2 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                            Código de verificación
                          </h2>

                          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-[14px]">
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0]">
                              Ingrese el código de verificación de 6 dígitos enviado a{" "}
                            </span>
                            <span className="font-semibold">+569 ****8823</span>
                          </p>
                        </div>

                        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                          <InputOTP
                            maxLength={6}
                            className="flex items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
                          >
                            <InputOTPGroup className="flex items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                              <InputOTPSlot
                                index={0}
                                className="flex items-center p-2 relative flex-1 grow bg-primary-50 rounded border border-solid border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                              />
                              <InputOTPSlot
                                index={1}
                                className="flex items-center p-2 relative flex-1 grow bg-primary-50 rounded border border-solid border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                              />
                              <InputOTPSlot
                                index={2}
                                className="flex items-center p-2 relative flex-1 grow bg-primary-50 rounded border border-solid border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                              />
                              <InputOTPSlot
                                index={3}
                                className="flex items-center p-2 relative flex-1 grow bg-primary-50 rounded border border-solid border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                              />
                              <InputOTPSlot
                                index={4}
                                className="flex items-center p-2 relative flex-1 grow bg-primary-50 rounded border border-solid border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                              />
                              <InputOTPSlot
                                index={5}
                                className="flex items-center p-2 relative flex-1 grow bg-primary-50 rounded border border-solid border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                              />
                            </InputOTPGroup>
                          </InputOTP>

                          <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-900 text-xs tracking-[0] leading-[normal]">
                              00:30
                            </div>

                            <button className="relative w-[206px] opacity-40 font-text-xs-medium-underline font-[number:var(--text-xs-medium-underline-font-weight)] text-primary-900 text-[length:var(--text-xs-medium-underline-font-size)] text-center tracking-[var(--text-xs-medium-underline-letter-spacing)] leading-[var(--text-xs-medium-underline-line-height)] underline [font-style:var(--text-xs-medium-underline-font-style)] bg-transparent border-none cursor-pointer">
                              Si aún no has recibido el código ¡Haz click aquí!
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                        <Button
                          variant="outline"
                          className="inline-flex flex-col items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-neutralswhite rounded-3xl shadow-shadow-xs h-auto"
                          onClick={handleBack}
                        >
                          <span className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap relative w-fit text-right [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                            Atrás
                          </span>
                        </Button>

                        <Button 
                          className="inline-flex px-4 py-2 flex-[0_0_auto] bg-primary-900 rounded-3xl items-center justify-center relative h-auto"
                          onClick={() => setCurrentStep('success-confirmation')}
                        >
                          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <span className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm tracking-[0] leading-5 whitespace-nowrap relative w-fit text-right">
                              Confirmar
                            </span>
                            <ChevronRightIcon className="relative w-5 h-5" />
                          </div>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : currentStep === 'success-confirmation' ? (
                  /* Success Confirmation */
                  <div className="flex flex-col items-center justify-center gap-2.5 px-16 py-0 flex-1">
                    <Card className="w-96 shadow-shadow-md">
                      <div className="flex items-center gap-2 px-4 py-2 bg-terciary-50 rounded-[8px_8px_0px_0px]">
                        <CheckCircleIcon className="w-7 h-7 text-terciary-600" />
                        <div className="flex-1 font-heading-h7 font-[number:var(--heading-h7-font-weight)] text-terciary-600 text-[length:var(--heading-h7-font-size)] tracking-[var(--heading-h7-letter-spacing)] leading-[var(--heading-h7-line-height)] [font-style:var(--heading-h7-font-style)]">
                          Éxito
                        </div>
                        <XIcon className="w-4 h-4" />
                      </div>
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-6 bg-otherswhite rounded-[0px_0px_8px_8px]">
                        <div className="self-stretch mt-[-1.00px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-gray-600 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                          Tu nueva contraseña ha sido creada con éxito
                        </div>
                        <div className="flex flex-col items-start gap-2 pt-3 pb-0 px-0 self-stretch w-full border-t border-solid border-[#d4d4d8]">
                          <div className="flex items-center justify-end gap-2.5 self-stretch w-full">
                            <div className="inline-flex items-start gap-2">
                              <Button 
                                className="h-auto px-4 py-2 bg-primary-800 rounded-3xl shadow-shadow-md"
                                onClick={() => navigate('/')}
                              >
                                <div className="mt-[-1.00px] font-text-text-sm-text-sm-font-medium font-[number:var(--text-text-sm-text-sm-font-medium-font-weight)] text-neutralswhite text-[length:var(--text-text-sm-text-sm-font-medium-font-size)] tracking-[var(--text-text-sm-text-sm-font-medium-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-medium-line-height)] whitespace-nowrap text-right [font-style:var(--text-text-sm-text-sm-font-medium-font-style)]">
                                  Agenda una cita
                                </div>
                              </Button>
                              <Button
                                variant="outline"
                                className="h-auto px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs"
                                onClick={() => navigate('/patient-dashboard')}
                              >
                                <div className="w-fit mt-[-1.00px] font-text-text-sm-text-sm-font-medium font-[number:var(--text-text-sm-text-sm-font-medium-font-weight)] text-primary-800 text-[length:var(--text-text-sm-text-sm-font-medium-font-size)] text-right tracking-[var(--text-text-sm-text-sm-font-medium-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-sm-text-sm-font-medium-font-style)]">
                                  Ir a mi perfil
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : null}
              </CardContent>
            </Card>
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