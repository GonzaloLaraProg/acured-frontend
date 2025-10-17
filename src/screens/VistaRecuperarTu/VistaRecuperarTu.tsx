import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobeIcon, MenuIcon, UserIcon, ChevronRightIcon, CheckCircleIcon, XIcon } from "lucide-react";
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
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";
import { useLocation } from "react-router-dom";

export const VistaRecuperarTu = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState<'email' | 'verification' | 'new-password' | 'success'>('email');
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const [code, setCode] = useState(Array(6).fill("")); 
  const [timeLeft, setTimeLeft] = useState(30);
  const [error, setError] = useState<string | null>(null);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [role, setRole] = React.useState<"patient" | "therapist">("patient");
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


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

    // Reinicia el contador al entrar a la pantalla de verificación
  useEffect(() => {
    if (currentStep === "verification") {
      setTimeLeft(30); // ⏳ cada vez que entras aquí, reinicia en 30
    }
  }, [currentStep]);

  // 🔹 Cuando entras en verification, limpia los inputs
  useEffect(() => {
    if (currentStep === "verification") {
      setCode(Array(6).fill(""));   // limpia los 6 dígitos
      setError(null);               // limpia errores previos
      setIsComplete(false);         // reinicia validación
    }
  }, [currentStep]);


  // Temporizador (solo corre en verification)
  useEffect(() => {
    if (currentStep !== "verification") return; // 👉 corre solo en verification
    if (timeLeft <= 0) return;

    

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [currentStep, timeLeft]);

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

  useEffect(() => {
    const urlRole = params.get("role");
    if (urlRole === "therapist") {
      setRole("therapist");
    } else {
      setRole("patient");
    }
  }, [location.search]);


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




  const handleBack = () => {
    if (currentStep === 'success') {
      setCurrentStep('new-password');
    } else if (currentStep === 'new-password') {
      setCurrentStep('verification');
    } else if (currentStep === 'verification') {
      setCurrentStep('email');
    } else {
      navigate('/login');
    }
  };

  const handleContinue = () => {
    if (currentStep === 'email') {
      setCurrentStep('verification');
    } else if (currentStep === 'verification') {
      setCurrentStep('new-password');
    } else if (currentStep === 'new-password') {
      setCurrentStep('success');
    } else {
      // Handle success completion
      navigate('/login');
    }
  };
  

  return (
    <>
      <TopNav />
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
        <TopNav/>

        {/* Main Content */}
        <div className="flex min-h-screen ">
          {/* Left side - Password recovery form */}
          <div className="flex-1 flex items-center justify-center px-8">
            {currentStep === 'email' ? (
              <Card className="w-full max-w-[460px] bg-white rounded-2xl shadow-lg">
                <CardContent className="p-8">
                 {/* Título */}
                  <h1 className="font-heading-h5 text-center text-[30px] leading-snug text-primary-900 mb-6">
                    Ingresa tu correo electrónico
                    <br />
                    para recuperar tu contraseña
                  </h1>
                  {/* Subtítulo */}
                  <p className="font-paragraph-p3 text-center text-[15px] text-gray-700 mb-8">
                    Recibirás un email con un código de verificación
                  </p>

                  {/* Input de Email */}
                  <div className="mb-8">
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="h-12 w-full px-4 bg-[#F2F7F4] border border-gray-200 rounded-lg 
                                text-gray-900 placeholder-gray-500 
                                focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>

                  {/* Botones */}
                  <div className="flex items-center justify-between">
                    <button
                      className="px-6 py-2 bg-white border border-gray-200 text-gray-900 
                                rounded-full shadow-md hover:bg-gray-50 font-paragraph-p3"
                      onClick={handleBack}
                    >
                      Atrás
                    </button>

                    <button
                      className="px-6 py-2 bg-[#1B4332] text-white rounded-full shadow-md 
                                hover:bg-[#163828] font-paragraph-p3"
                      onClick={handleContinue}
                    >
                      Continuar
                    </button>
                  </div>
                </CardContent>
              </Card>
            ) : currentStep === 'new-password' ? (
              /* New Password Step */
              
              <div className="flex flex-col items-center justify-center gap-2.5 px-16 py-0 flex-1">
                <Card className="w-[480px] bg-neutralswhite rounded-lg shadow-shadow-sm">
                  <CardContent className="flex flex-col items-end justify-center gap-8 p-8">
                    <div className="flex flex-col items-start gap-6 w-full">
                      <div className="flex flex-col items-center gap-8 w-full">
                        <div className="flex flex-col items-center gap-3 w-full">
                          <h1 className="font-heading-h5 text-[30px]  text-primary-900 text-center">
                            Ingresa tu contraseña nueva
                          </h1>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-6 w-full">
                        <div className="flex flex-col items-start gap-6 pt-0 pb-4 px-0 w-full">
                          <div className="flex flex-col items-start gap-2 w-full">
                            <div className="flex flex-col items-start gap-3 w-full">
                              <p className="font-paragraph-p3 font-semibold text-gray-600 text-[14px]">
                                Tu contraseña debe tener mínimo 8 caracteres
                              </p>


                              <Input
                                type="password"
                                placeholder="Crea una contraseña"
                                className="h-[50px] bg-primary-50 border-0 font-text-text-sm-text-sm-font-normal font-[number:var(--text-text-sm-text-sm-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-sm-text-sm-font-normal-font-size)] tracking-[var(--text-text-sm-text-sm-font-normal-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-normal-line-height)] [font-style:var(--text-text-sm-text-sm-font-normal-font-style)]"
                              />
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                  <li className="text-green-600">
                                    ✓ Mínimo 8 caracteres
                                  </li>
                                  <li>Al menos una letra mayúscula</li>
                                  <li>Al menos una letra minúscula</li>
                                  <li>Al menos un número</li>
                                  <li>Al menos un carácter especial (!@#$%^&amp;*./)</li>
                                </ul>

                              <Input
                                type="password"
                                placeholder="Repite tu contraseña aquí"
                                className="h-[50px] bg-primary-50 border-0 font-text-text-sm-text-sm-font-normal font-[number:var(--text-text-sm-text-sm-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-sm-text-sm-font-normal-font-size)] tracking-[var(--text-text-sm-text-sm-font-normal-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-normal-line-height)] [font-style:var(--text-text-sm-text-sm-font-normal-font-style)]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="h-auto px-4 py-2 bg-primary-900 rounded-3xl" onClick={handleContinue}>
                      <div className="inline-flex items-center gap-1">
                        <span className="[font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm tracking-[0] leading-5">
                          Confirmar
                        </span>
                        <ChevronRightIcon className="w-5 h-5" />
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : currentStep === 'success' ? (
              role === "therapist" ? (
                // 🎯 Mensaje de éxito para TERAPEUTA (con mismos estilos que PACIENTE)
                <div className="flex flex-col items-center justify-center gap-2.5 px-16 py-0 flex-1">
                  <Card className="w-96 shadow-shadow-md">
                    {/* Header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-terciary-50 rounded-t-md">
                      <CheckCircleIcon className="w-7 h-7 text-terciary-600" />
                      <span className="flex-1 text-terciary-600 font-semibold">Éxito</span>
                      <XIcon
                        className="w-4 h-4 cursor-pointer"
                        onClick={() => navigate('/login')}
                      />
                    </div>

                    {/* Body */}
                    <CardContent className="flex flex-col items-center gap-4 p-6 bg-otherswhite rounded-b-md">
                      <p className="text-gray-600 text-center">
                        Tu nueva contraseña ha sido creada con éxito
                      </p>

                      <div className="flex gap-3 pt-3 w-full border-t border-gray-200 justify-end">
                        <Button
                          className="px-4 py-2 bg-primary-800 text-white rounded-3xl"
                          onClick={() => navigate('/login')}
                        >
                          Iniciar sesión
                        </Button>
                        <Button
                          variant="outline"
                          className="px-4 py-2 bg-white border border-gray-300 rounded-3xl text-primary-800"
                          onClick={() => navigate('/therapist-dashboard')}
                        >
                          Volver al inicio
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                // ✅ Mensaje de éxito para PACIENTE
                <div className="flex flex-col items-center justify-center gap-2.5 px-16 py-0 flex-1">
                  <Card className="w-96 shadow-shadow-md">
                    <div className="flex items-center gap-2 px-4 py-2 bg-terciary-50 rounded-t-md">
                      <CheckCircleIcon className="w-7 h-7 text-terciary-600" />
                      <span className="flex-1 text-terciary-600 font-semibold">Éxito</span>
                      <XIcon className="w-4 h-4 cursor-pointer" />
                    </div>
                    <CardContent className="flex flex-col items-center gap-4 p-6 bg-otherswhite rounded-b-md">
                      <p className="text-gray-600 text-center">
                        Tu nueva contraseña ha sido creada con éxito
                      </p>
                      <div className="flex gap-3 pt-3 w-full border-t border-gray-200 justify-end">
                        <Button
                          className="px-4 py-2 bg-primary-800 text-white rounded-3xl"
                          onClick={() => navigate('/')}
                        >
                          Agenda una cita
                        </Button>
                        <Button
                          variant="outline"
                          className="px-4 py-2 bg-white border border-gray-300 rounded-3xl text-primary-800"
                          onClick={() => navigate('/patient-dashboard')}
                        >
                          Ir a mi perfil
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            ) : (
              /* Verification Code Step */
              <div className="flex flex-col items-center justify-center gap-2.5 px-16 py-0 relative flex-1 self-stretch grow">
                <Card className="w-[450px] bg-white rounded-lg shadow-md">
                  <CardContent className="flex flex-col items-end justify-center gap-8 p-8">
                    <div className="flex flex-col items-center gap-2 w-full">
                      {/* Título */}
                      <header className="flex flex-col items-center gap-2 w-full">
                        <h1 className="text-center text-[30px] font-heading-h5 text-primary-900">
                          Código de verificación
                        </h1>
                        <p className="text-center text-md text-gray-700">
                          Ingrese el código de verificación de 6 dígitos 
                          <br />
                          enviado a{" "}
                          <span className="font-bold">acu***@gmail.com</span>.
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
                        <button className=" text-primary-900 underline text-sm">
                          Si aún no has recibido el código 
                          <br />
                          ¡Haz click aquí!
                        </button>
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-between w-full">
                      <button
                        onClick={() => setCurrentStep("email")}
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
                            setCurrentStep("new-password"); // 👉 pasa al paso de nueva contraseña
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
              </div>
            )}
          </div>

          {/* Right side - Image */}
          <div className="flex-1 relative">
            <img
              src="/loginimg.jpg" // 👈 asegúrate de que este archivo esté dentro de la carpeta /public/
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