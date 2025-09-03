import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon, GlobeIcon, MenuIcon, UserIcon, ChevronDownIcon } from "lucide-react";
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
import { FooterSection } from "../Home/sections/FooterSection";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState<'initial' | 'patient-login' | 'therapist-login' | 'create-account' | 'name-form' | 'basic-info'>('initial');
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  const handlePatientLogin = () => {
    setCurrentStep('patient-login');
  };

  const handleTherapistLogin = () => {
    setCurrentStep('therapist-login');
  };

  const handleCreateAccount = () => {
    setCurrentStep('create-account');
  };

  const handleNameForm = () => {
    setCurrentStep('name-form');
  };

  const handleBasicInfo = () => {
    setCurrentStep('basic-info');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'patient-login':
      case 'therapist-login':
        setCurrentStep('initial');
        break;
      case 'create-account':
        setCurrentStep('therapist-login');
        break;
      case 'name-form':
        setCurrentStep('create-account');
        break;
      case 'basic-info':
        setCurrentStep('name-form');
        break;
      default:
        setCurrentStep('initial');
    }
  };

  return (
    <>
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">
        {/* Navigation */}
        <NavigationMenu className="absolute top-[29px] left-1/2 transform -translate-x-1/2 bg-primary-50 rounded-[32px] border border-solid border-[#d3e0d7] shadow-shadow-sm backdrop-blur-[5.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.85px)_brightness(100%)] z-50">
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
        <div className="absolute top-[29px] right-8 flex items-center gap-2 z-50">
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
          {/* Left side - Login form */}
          <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-16">
            <Card className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                {/* Title */}
                <h1 className="text-center mb-8 text-2xl font-normal text-primary-900">
                  {currentStep === 'patient-login' || currentStep === 'therapist-login' ? "Ingresa tu correo electrónico y contraseña para iniciar sesión." : 
                   currentStep === 'create-account' ? "Crea una cuenta o regístrate a través de google" :
                   currentStep === 'name-form' ? "Crea una Cuenta en Acured" :
                   currentStep === 'basic-info' ? "Información básica" :
                   "Inicia sesión"}
                </h1>

                {currentStep === 'name-form' && (
                  <p className="text-center mb-6 text-sm text-gray-600">
                    Ingresa tu nombre y apellido
                  </p>
                )}

                {currentStep === 'basic-info' && (
                  <div className="mb-6">
                    {/* This will be the scrollable content */}
                  </div>
                )}

                {(currentStep === 'patient-login' || currentStep === 'therapist-login') ? (
                  /* Patient Login Form */
                  <div className="space-y-4">
                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {/* Password Input */}
                    <div>
                      <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {/* Continue with Google Button */}
                    <button className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      <span className="text-xl">G</span>
                      <span className="font-medium">Continuar con google</span>
                    </button>

                    {/* Forgot Password Link */}
                    <div className="text-left">
                      <button 
                        className="text-primary-900 text-sm hover:underline"
                        onClick={() => navigate('/password-recovery')}
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="flex items-center justify-between pt-4">
                      <button className="text-primary-900 text-sm hover:underline">
                        {currentStep === 'therapist-login' ? (
                          <span onClick={handleCreateAccount}>Crear cuenta</span>
                        ) : (
                          <span>¿No tienes cuenta?</span>
                        )}
                      </button>
                      <button 
                        className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
                        onClick={() => navigate('/patient-dashboard')}
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                  </div>
                ) : currentStep === 'create-account' ? (
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
                  <div className="space-y-6 max-h-[60vh] overflow-y-auto">
                    {/* Información personal */}
                    <div>
                      <h3 className="text-sm font-medium text-primary-900 mb-4">Información personal</h3>
                      
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Rut (sin puntos y con guión)"
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        
                        <Select>
                          <SelectTrigger className="w-full bg-gray-100 border-0 rounded-lg">
                            <SelectValue placeholder="Género" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="masculino">Masculino</SelectItem>
                            <SelectItem value="femenino">Femenino</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">Fecha de nacimiento</label>
                          <input
                            type="text"
                            placeholder="DD/MM/AAAA"
                            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <Select>
                          <SelectTrigger className="w-full bg-gray-100 border-0 rounded-lg">
                            <SelectValue placeholder="Profesión" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="acupunturista">Acupunturista</SelectItem>
                            <SelectItem value="medico">Médico</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {/* Información de contacto */}
                    <div>
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
                        <input
                          type="text"
                          placeholder="Número de teléfono"
                          className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    {/* Email y contraseña */}
                    <div>
                      <h3 className="text-sm font-medium text-primary-900 mb-2">Email y contraseña</h3>
                      <p className="text-xs text-gray-600 mb-4">Recibirás un email con un código de confirmación</p>
                      
                      <div className="space-y-4">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        
                        <input
                          type="password"
                          placeholder="Crea una contraseña"
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        
                        <input
                          type="password"
                          placeholder="Confirma tu contraseña"
                          className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    
                    {/* Bottom Buttons */}
                    <div className="flex items-center justify-between pt-4">
                      <button 
                        className="text-primary-900 text-sm hover:underline"
                        onClick={handleBack}
                      >
                        Atrás
                      </button>
                      <button 
                        className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 flex items-center gap-2"
                        onClick={() => setCurrentStep('initial')}
                      >
                        <span>Confirmar</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Login Options */
                  <div className="space-y-4">
                    {/* Acured para pacientes */}
                    <div
                      className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={handlePatientLogin}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                            Acured para pacientes
                          </span>
                          <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-gray-600 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                            Soy paciente y quiero iniciar sesión
                          </span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    {/* Acured para acupunturistas */}
                    <div
                      className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={handleTherapistLogin}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-primary-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                            Acured para acupunturistas
                          </span>
                          <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-gray-600 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                            Soy acupunturista y me interesa administrar mis pacientes
                          </span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                )}
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