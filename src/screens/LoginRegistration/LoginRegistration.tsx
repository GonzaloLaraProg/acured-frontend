import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobeIcon, MenuIcon, UserIcon } from "lucide-react";
import { EmailVerificationModal } from "../../components/EmailVerificationModal";
import { FormChoiceModal } from "../../components/FormChoiceModal";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";

interface LoginRegistration {
  onGenderChange?: (gender: string) => void;
}

 export const LoginRegistration = ({ onGenderChange }: LoginRegistration): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isEmailVerificationOpen, setIsEmailVerificationOpen] = React.useState(false);
  const [isFormChoiceOpen, setIsFormChoiceOpen] = React.useState(false);
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
    { label: "Selección horario", active: false },
    { label: "Inicia sesión", active: true },
    { label: "Confirmación y pago", active: false },
  ];

  const handleLoginSubmit = () => {
    setIsFormChoiceOpen(true);
  };

  const handleRegisterSubmit = () => {
    setIsEmailVerificationOpen(true);
  };

  const handleVerificationComplete = () => {
    setIsEmailVerificationOpen(false);
    setIsFormChoiceOpen(true);
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


  return (
    <>
      <TopNav />
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
        <TopNav/>
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

          {/* Title */}
          <div className="max-w-[1384px] mx-auto mb-8">
            <h1 className="text-[32px] font-normal text-primary-900 [font-family:'Neue_Haas_Grotesk_Display_Pro',Helvetica]">
              Inicia sesión o registra tus datos para reservar tu cita
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex gap-8 max-w-[1384px] mx-auto">
            {/* Left side - Login */}
            <Card className="flex-1 bg-white rounded-xl shadow-shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-normal text-primary-900 mb-2">
                    Ingresa tu correo electrónico y contraseña para iniciar sesión.
                  </h2>
                </div>

                <div className="space-y-4 mb-6">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />

                  <Input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />

                  <Button className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <span className="text-xl">G</span>
                    <span className="font-medium">Continuar con Google</span>
                  </Button>
                </div>

                <div className="text-left mb-6">
                  <button className="text-primary-900 text-sm hover:underline">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                <div className="flex justify-end">
                  <Button 
                    className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
                    onClick={handleLoginSubmit}
                  >
                    Iniciar sesión
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Right side - Registration */}
            <Card className="flex-1 bg-white rounded-xl shadow-shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-normal text-primary-900 mb-2">
                    Si no tienes una cuenta regístrate aquí
                  </h2>
                </div>

                {/* Información personal */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-primary-900 mb-4">Información personal</h3>
                  
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Nombres"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    
                    <Input
                      type="text"
                      placeholder="Apellidos"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    
                    <Input
                      type="text"
                      placeholder="Rut"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <p className="text-xs text-gray-600">Sin puntos y sin guión</p>
                    
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">Fecha de nacimiento</label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="Día (ej: 04)"
                          className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <Select>
                          <SelectTrigger className="flex-1 bg-gray-100 border-0 rounded-lg">
                            <SelectValue placeholder="Mes" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="enero">Enero</SelectItem>
                            <SelectItem value="febrero">Febrero</SelectItem>
                            <SelectItem value="marzo">Marzo</SelectItem>
                            <SelectItem value="abril">Abril</SelectItem>
                            <SelectItem value="mayo">Mayo</SelectItem>
                            <SelectItem value="junio">Junio</SelectItem>
                            <SelectItem value="julio">Julio</SelectItem>
                            <SelectItem value="agosto">Agosto</SelectItem>
                            <SelectItem value="septiembre">Septiembre</SelectItem>
                            <SelectItem value="octubre">Octubre</SelectItem>
                            <SelectItem value="noviembre">Noviembre</SelectItem>
                            <SelectItem value="diciembre">Diciembre</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          type="text"
                          placeholder="Año (ej: 1996)"
                          className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                
                {/* Información de contacto */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-primary-900 mb-4">Información de contacto</h3>
                  
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-24 bg-gray-100 border-0 rounded-lg">
                        <SelectValue placeholder="+569" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+569">+569</SelectItem>
                        <SelectItem value="+56">+56</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="text"
                      placeholder="Número de teléfono"
                      className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                {/* Email y contraseña */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-primary-900 mb-2">Email y contraseña</h3>
                  <p className="text-xs text-gray-600 mb-4">Recibirás un email con un código de confirmación</p>
                  
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    
                    <div>
                      <Input
                        type="password"
                        placeholder="Crea una contraseña"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <div className="mt-2 text-xs text-gray-600">
                        <p className="mb-1">Tu contraseña debe tener mínimo 8 números o caracteres</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Mínimo 8 caracteres</li>
                          <li>Al menos una letra mayúscula</li>
                          <li>Al menos una letra minúscula</li>
                          <li>Al menos un número</li>
                          <li>Al menos un carácter especial (!@#$%^&* etc.)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Input
                      type="password"
                      placeholder="Confirma tu contraseña aquí"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                {/* Google Registration */}
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-sm font-medium text-primary-900">O regístrate con Google</span>
                  </div>
                  
                  <Button className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <span className="text-xl">G</span>
                    <span className="font-medium">Continuar con Google</span>
                  </Button>
                </div>

                <div className="flex justify-end">
                  <Button 
                    className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 flex items-center gap-2"
                    onClick={handleRegisterSubmit}
                  >
                    <span>Confirmar</span>
                    <span>→</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
<br /> <br />
        {/* Footer */}
        <Footer />
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

      <EmailVerificationModal
        isOpen={isEmailVerificationOpen}
        onClose={() => setIsEmailVerificationOpen(false)}
        onVerificationComplete={handleVerificationComplete}
      />

      <FormChoiceModal
        isOpen={isFormChoiceOpen}
        onClose={() => setIsFormChoiceOpen(false)}
      />
    </>
  );
};