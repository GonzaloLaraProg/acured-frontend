import React, { useState, useEffect, useRef } from "react";
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
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";

interface Registration {
  onGenderChange?: (gender: string) => void;
}

export const Registration = ({ onGenderChange }: Registration): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const [code, setCode] = useState(Array(6).fill("")); 
  const [timeLeft, setTimeLeft] = useState(30);
  const [error, setError] = useState<string | null>(null);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  
// 👇 Aquí agregamos el estado del scroll
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    React.useEffect(() => {
      if (timeLeft <= 0) return;
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }, [timeLeft]);
    React.useEffect(() => {
      setIsComplete(code.every((digit) => digit !== ""));
    }, [code]);

    const [currentStep, setCurrentStep] = React.useState<
    | "choose-role"
    | "create-account"
    | "name-form"
    | "basic-info"
    | "verification-code"
    | "sms-verification"
    | "success-confirmation"
  >("choose-role");
  
        // Reinicia el contador SOLO cuando entras en sms-verification
    useEffect(() => {
      if (currentStep === "sms-verification") {
        setTimeLeft(30); // reinicia a 30 segundos
      }
    }, [currentStep]);

    // Temporizador
    useEffect(() => {
      if (currentStep !== "sms-verification") return; // 👈 solo corre en sms-verification
      if (timeLeft <= 0) return;

      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }, [currentStep, timeLeft]);

    // 🔹 Cuando entras en sms-verification, limpia los inputs
    useEffect(() => {
      if (currentStep === "sms-verification") {
        setCode(Array(6).fill(""));   // 👈 limpia los 6 dígitos
        setError(null);               // limpia errores previos
        setIsComplete(false);         // reinicia validación
      }
    }, [currentStep]);

  
    // Manejo de inputs con auto-focus
    const handleChange = (value: string, index: number) => {
      if (/^[0-9]?$/.test(value)) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        setError(null);
  
        if (value && index < 5) {
          inputsRef.current[index + 1]?.focus();
        }
      }
    };
  
    // Permitir retroceso al input anterior
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };
  
    // ✅ Validación al confirmar
    const handleConfirm = () => {
      const enteredCode = code.join("");
      if (enteredCode === "111111") {
        setError("Código de verificación incorrecto");
      } else {
        setError(null);
        alert("✅ Código válido: " + enteredCode);
      }
    };
     
    const [selectedGender, setSelectedGender] = useState<string>("");
    const [open, setOpen] = useState(false);
    const [genderExpansionLevel, setGenderExpansionLevel] = useState<number>(0);
      
    const getGenderOptions = () => {
        if (genderExpansionLevel === 0) {
           return [
             { value: "femenino", label: "Femenino" },
              { value: "masculino", label: "Masculino" },
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
    
      const handleGenderChange = (value: string) => {
        if (value === "otro" && genderExpansionLevel === 0) {
          // No debería dispararse si prevenimos el pointerdown para "otro",
          // pero lo dejamos por seguridad si se selecciona por teclado.
          setGenderExpansionLevel(1);
          setSelectedGender("");
          return; // no cerrar
        }
    
        setSelectedGender(value);
        onGenderChange?.(value);
        setOpen(false); // cerrar en selecciones "reales"
      };

  

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


  const [selectedOption, setSelectedOption] = React.useState<string>("");
  const [expandedGender, setExpandedGender] = React.useState(false);
  const [isGenderOpen, setIsGenderOpen] = React.useState(false);

 

  const handleVerificationOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setCurrentStep("sms-verification");
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

  const verificationMessages: Record<string, string> = {
    email: "acu***@gmail.com",
    sms: "+569 **** 8823",
    whatsapp: "+569 **** 8823",
  };


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
      <TopNav />

        {/* Main Content */}
        <div className="flex min-h-screen">
          {/* Left side - Registration or Success */}
          <div className={`flex-1 flex ${currentStep === "basic-info" ? "items-start pt-16" : "items-center"} justify-center px-8`}>
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

                  <div className="flex-1 flex justify-center px-8">
                  {/* Step: choose-role */}
                  
              
                  {currentStep === "choose-role" && (
                    <>
                    <Card className=" max-w-[500px] bg-white rounded-2xl shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        {/* Opción Pacientes */}
                        {/* Título principal */}
                        
                    <h1 className="font-haas text-center text-3xl text-gray-900 mb-6 leading-snug">
                      ¡Regístrate!
                    </h1>
                        <div
                          className="p-5 rounded-lg bg-[#F2F7F4] hover:bg-[#E9F2EC] cursor-pointer shadow-sm border border-gray-200 flex items-center justify-between transition"
                          onClick={handleChoosePatient}
                        >
                          <div>
                            <p className="font-haas text-gray-900 font-semibold text-lg">
                              Acured para pacientes
                            </p>
                            <p className="font-inter text-gray-600 text-sm">
                              Soy paciente y quiero registrarme
                            </p>
                          </div>
                          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                        </div>

                        {/* Opción Acupunturistas */}
                        <div
                          className="p-5 rounded-lg bg-white hover:bg-gray-50 cursor-pointer shadow-sm border border-gray-200 flex items-center justify-between transition"
                          onClick={handleChooseTherapist}
                        >
                          <div>
                            <p className="font-haas text-gray-900 font-semibold text-lg">
                              Acured para acupunturistas
                            </p>
                            <p className="font-inter text-gray-600 text-sm">
                              Soy acupunturista y me interesa administrar mis pacientes
                            </p>
                          </div>
                          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                        </div>
                      </div>
                      </CardContent>
                      </Card>
                    </>
                  )}

                  {/* Step: create-account */}
                  {currentStep === "create-account" && (
                    
                    <Card className=" max-w-[500px] bg-white rounded-2xl shadow-lg">
                    <CardContent className="p-8">
                    {/* Título principal */}
                    <h1 className="font-haas text-center text-3xl text-gray-900 mb-6 leading-snug">
                      Crea una cuenta o regístrate a
                      <br />
                      través de Google
                    </h1>


                      <div className="space-y-4">
                        {/* Botón Crear cuenta */}
                        <button
                          onClick={handleNameForm}
                          className="w-full p-3 rounded-lg bg-[#F2F7F4] hover:bg-[#E9F2EC] 
                                    border border-gray-200 shadow-sm text-primary-900 font-haas font-semibold 
                                    transition"
                        >
                          Crear cuenta
                        </button>

                        {/* Botón Google */}
                        <button
                          className="w-full p-3 rounded-lg bg-white hover:bg-gray-50 
                                    border border-gray-200 shadow-sm flex items-center justify-center gap-2 
                                    text-primary-900 font-haas font-semibold transition"
                        >
                          <span className="text-lg">G</span>
                          <span>Continuar con Google</span>
                        </button>
                      </div>
                      </CardContent>
                      </Card>
                    
                  )}

                  {/* Step: name-form */}
                  {currentStep === "name-form" && (
                    <Card className=" max-w-[500px] bg-white rounded-2xl shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        {/* Título principal */}
                        <h1 className="font-haas text-center text-3xl text-gray-900 mb-4 leading-snug">
                          Crea una cuenta para
                          <br />
                          pacientes en Acured
                        </h1>

                        {/* Subtítulo */}
                        <p className="font-inter text-center text-base text-gray-900 font-semibold mb-6">
                          Ingresa tu nombre y apellido
                        </p>

                        {/* Inputs */}
                        <div className="space-y-4 mb-6">
                          <input
                            type="text"
                            placeholder="Nombres"
                            className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                          />
                          <input
                            type="text"
                            placeholder="Apellidos"
                            className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                          />
                        </div>

                        {/* Botón */}
                        <div className="flex justify-end">
                          <button
                            className="px-6 py-2 bg-[#1B4332] text-white rounded-full shadow-md hover:bg-[#163828] transition"
                            onClick={handleBasicInfo}
                          >
                            Siguiente
                          </button>
                        </div>
                      </div>
                      </CardContent>
                      </Card>

                  )}


                  {/* Step: basic-info */}
                  {currentStep === "basic-info" && (
                    <Card className="w-full bg-white rounded-2xl shadow-lg mb-20">

                    <CardContent className="p-8 space-y-4 ">

                    <div className="flex flex-col items-center justify-center w-full px-6  ">

                      <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                        <div className="flex flex-col items-center gap-6 w-full">
                          <h1 className="font-haas text-center text-2xl text-gray-900 mb-4 leading-snug">
                                Información Básica
                              </h1>
                          <div className="flex flex-col items-start gap-6 pb-4 w-full">
                            
                            <div className="flex flex-col items-start gap-4 w-full">
                              <h3 className="font-inter font-bold font-heading-h7 text-shadow-900">
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
                                    onValueChange={handleGenderChange}
                                    open={open}
                                    onOpenChange={setOpen}
                                  >

                                  <SelectTrigger className="w-full flex items-center justify-between border border-[#bbcac0] shadow-shadow-sm relative bg-primary-50 rounded px-3 py-2">
                                    <SelectValue placeholder="Género" />
                                  </SelectTrigger>


                                  <SelectContent
                                    // evita cambios de foco bruscos al actualizar opciones
                                    onCloseAutoFocus={(e) => e.preventDefault()}
                                  >
                                    {getGenderOptions().map((opt) => {
                                      // --- Item especial: "Otro" en nivel 0 (no cerrar al hacer click) ---
                                      if (opt.value === "otro" && genderExpansionLevel === 0) {
                                        return (
                                          <SelectItem
                                            key="otro"
                                            value="otro"
                                            // Evitamos que Radix seleccione y cierre:
                                            onPointerDown={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              setGenderExpansionLevel(1);
                                              setSelectedGender("");
                                              // No tocamos `open`: el menú sigue abierto
                                            }}
                                            onKeyDown={(e) => {
                                              // Soporte teclado: Enter o Space
                                              if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setGenderExpansionLevel(1);
                                                setSelectedGender("");
                                              }
                                            }}
                                          >
                                            {opt.label}
                                          </SelectItem>
                                        );
                                      }

                                      // --- Resto de items (flujo normal) ---
                                      return (
                                        <SelectItem key={opt.value} value={opt.value}>
                                          {opt.label}
                                        </SelectItem>
                                      );
                                    })}
                                  </SelectContent>

                                </Select>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col items-start gap-4 w-full">
                              <div className="inline-flex items-center">
                                <h3 className="font-inter font-bold font-heading-h7 text-shadow-900">
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
                              <h3 className="font-inter font-bold font-heading-h7 text-shadow-900">
                                Email y contraseña
                              </h3>

                              <div className="flex flex-col items-start gap-3 w-full">
                                <p className="font-inter font-paragraph-p1-semi-bold text-shadow-600 text-[14px]">
                                  Recibirás un email con un código de confirmación
                                </p>

                                <Input
                                  className="h-[33px] p-2 bg-primary-50 rounded border-0"
                                  placeholder="Email"
                                />

                                <p className="font-inter font-paragraph-p1-semi-bold text-shadow-600 text-[14px]">
                                  Tu contraseña debe tener mínimo 8 números o caracteres 
                                </p>


                                <Input
                                  type="password"
                                  className="h-[33px] p-2 bg-primary-50 rounded border-0"
                                  placeholder="Crea una contraseña"
                                />

                                

                                <Input
                                  type="password"
                                  className="h-[33px] p-2 bg-primary-50 rounded border-0"
                                  placeholder="Confirma tu contraseña aquí"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full justify-end">
                        <Button
                          className="inline-flex px-4 py-2 bg-primary-900 rounded-3xl items-center justify-center"
                          onClick={handleVerificationCode}
                        >
                          <span className="font-semibold text-neutralswhite text-sm leading-5">
                            Confirmar
                          </span>
                          <ChevronRightIcon className="w-5 h-5 text-gray-100" />
                        </Button>
                      
                          </div>
                      </div>
                    </div>
                    </CardContent>
                    </Card>
                    
                  )}

                  {/* Step: verification-code */}
                  {currentStep === "verification-code" && (
                    <Card className="max-w-lg bg-white rounded-2xl shadow-md">
                      <CardContent className="p-8 space-y-6">
                        {/* Encabezado */}
                        <header className="text-center space-y-2">
                          <h1 className="font-haas text-[30px] font-haas text-gray-900">
                            Código de verificación
                          </h1>
                          <p className="font-inter text-[16px] font-bold text-gray-800">
                            Elige cómo quieres recibir tu código de verificación.
                          </p>
                        </header>

                        {/* Opciones */}
                        <div className="space-y-4">
                          {verificationOptions.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => handleVerificationOptionSelect(option.id)}
                              className={`flex items-center justify-between w-full p-5 text-left rounded-lg border shadow-sm transition ${
                                selectedOption === option.id
                                  ? "bg-[#F2F7F4] border-[#d3e0d7]"
                                  : "bg-white border-gray-200 hover:bg-gray-50"
                              }`}
                            >
                              <div>
                                <h3 className="font-inter font-bold text-gray-800 text-[20px]">
                                  {option.title}
                                </h3>
                                <p className="mt-1 font-inter text-[13px] font-semibold text-gray-600">{option.description}</p>
                              </div>
                              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                            </button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step: sms-verification */}
                  {currentStep === "sms-verification" && (
                    <Card className=" max-w-[500px] bg-white rounded-2xl shadow-lg">
                      <CardContent className="flex flex-col items-end justify-center gap-8 p-8">
                        <div className="flex flex-col items-center gap-2 w-full">
                          {/* Título */}
                          <header className="flex flex-col items-center gap-2 w-full">
                            <h1 className="text-center text-[30px] font-haas text-primary-900">
                              Código de verificación
                            </h1>
                            <p className="text-center text-md text-gray-700">
                              Ingrese el código de verificación de 6 dígitos 
                              <br />
                              enviado a{" "}
                              <span className="font-bold">
                                {verificationMessages[selectedOption] || "+569 **** 8823"}
                              </span>.
                            </p>

                          </header>

                          {/* Inputs */}
                          <div className="flex justify-center gap-3 mb-2">
                            {code.map((digit: string, index: number) => (
                              <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputsRef.current[index] = el)}
                                className={`w-12 h-12 text-center rounded-md border text-lg font-medium ${
                                  error
                                    ? "border-red-500 bg-red-50 text-red-600"
                                    : "border-gray-300 bg-gray-100 text-gray-900"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Error */}
                        {error && (
                          <p className="text-red-600 text-sm font-medium text-left w-full">
                            &nbsp; &nbsp; &nbsp; {error}
                          </p>
                        )}


                          {/* Timer */}
                          <div className="text-center text-sm text-gray-600">
                            {`00:${timeLeft.toString().padStart(2, "0")}`}
                          </div>
                          {/* Reenviar (siempre visible) */}
                          <div className="text-center">
                            <button
                              className="text-primary-900 underline text-[14px]"
                              onClick={() => setCurrentStep("verification-code")} // 👈 vuelve al paso de selección
                            >
                              Si no recibiste ningun código,
                              <br />
                              selecciona otro método de envío 
                            </button>
                          </div>

                        </div>

                        {/* Botones */}
                        <div className="flex justify-between w-full">
                          <button
                            onClick={() => setCurrentStep("verification-code")}
                            className="px-6 py-2 bg-gray-100 rounded-3xl shadow text-primary-900"
                          >
                            Atrás
                          </button>
                          <button
                            onClick={() => {
                              const enteredCode = code.join("");
                              if (enteredCode === "111111") {
                                setError("Código de verificación incorrecto");
                              } else if (!code.includes("")) {
                                setError(null);
                                setCurrentStep("success-confirmation"); // 👉 pasa al paso de nueva contraseña
                              }
                            }}
                            disabled={code.includes("")}
                            className={`px-6 py-2 rounded-3xl flex items-center gap-2 ${
                              code.includes("")
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-primary-900 text-white hover:bg-primary-800"
                            }`}
                          >
                            Confirmar <ChevronRightIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                    
                  )}
                </div>
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
        
        <Footer
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
