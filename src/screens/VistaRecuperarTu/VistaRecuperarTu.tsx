import React from "react";
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
import { FooterSection } from "../Home/sections/FooterSection";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";

export const VistaRecuperarTu = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState<'email' | 'verification' | 'new-password' | 'success'>('email');
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

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
          {/* Left side - Password recovery form */}
          <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-16">
            {currentStep === 'email' ? (
              <Card className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  {/* Title */}
                  <h1 className="text-center mb-8 text-2xl font-normal text-primary-900">
                    Ingresa tu correo electrónico para recuperar tu contraseña
                  </h1>
                  <p className="text-center mb-6 text-sm text-gray-600">
                    Recibirás un email con un código de verificación
                  </p>

                  {/* Email Input */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <Label htmlFor="email" className="sr-only">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="Email"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-primary-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <button 
                      className="text-primary-900 text-sm hover:underline"
                      onClick={handleBack}
                    >
                      Atrás
                    </button>
                    <button 
                      className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
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
                <Card className="w-[390px] bg-neutralswhite rounded-lg shadow-shadow-sm">
                  <CardContent className="flex flex-col items-end justify-center gap-8 p-8">
                    <div className="flex flex-col items-start gap-6 w-full">
                      <div className="flex flex-col items-center gap-8 w-full">
                        <div className="flex flex-col items-center gap-3 w-full">
                          <h1 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                            Ingresa tu contraseña nueva
                          </h1>
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-6 w-full">
                        <div className="flex flex-col items-start gap-6 pt-0 pb-4 px-0 w-full">
                          <div className="flex flex-col items-start gap-2 w-full">
                            <div className="flex flex-col items-start gap-3 w-full">
                              <p className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                                Tu contraseña debe tener mínimo 8 caracteres
                              </p>

                              <Input
                                type="password"
                                placeholder="Crea una contraseña"
                                className="h-[33px] bg-primary-50 border-0 font-text-text-sm-text-sm-font-normal font-[number:var(--text-text-sm-text-sm-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-sm-text-sm-font-normal-font-size)] tracking-[var(--text-text-sm-text-sm-font-normal-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-normal-line-height)] [font-style:var(--text-text-sm-text-sm-font-normal-font-style)]"
                              />

                              <Input
                                type="password"
                                placeholder="Repite tu contraseña aquí"
                                className="h-auto bg-primary-50 border-0 font-text-text-sm-text-sm-font-normal font-[number:var(--text-text-sm-text-sm-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-sm-text-sm-font-normal-font-size)] tracking-[var(--text-text-sm-text-sm-font-normal-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-normal-line-height)] [font-style:var(--text-text-sm-text-sm-font-normal-font-style)]"
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
              /* Success Step */
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
            ) : (
              /* Verification Code Step */
              <div className="flex flex-col items-center justify-center gap-2.5 px-16 py-0 relative flex-1 self-stretch grow">
                <Card className="w-[398px] bg-neutralswhite rounded-lg shadow-shadow-sm">
                  <CardContent className="flex flex-col items-end justify-center gap-8 p-8">
                    <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                      <header className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                        <h1 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                          Código de verificación
                        </h1>

                        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-black text-sm text-center tracking-[0] leading-[normal]">
                          <span className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0]">
                            Ingrese el código de verificación de 6 dígitos enviado a{" "}
                          </span>
                          <span className="font-bold">acu***@gmail.com.</span>
                        </p>
                      </header>

                      <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                        <InputOTP maxLength={6} className="gap-2">
                          <InputOTPGroup className="gap-2">
                            <InputOTPSlot
                              index={0}
                              className="w-[50px] h-[50px] bg-primary-50 border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                            />
                            <InputOTPSlot
                              index={1}
                              className="w-[50px] h-[50px] bg-primary-50 border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                            />
                            <InputOTPSlot
                              index={2}
                              className="w-[50px] h-[50px] bg-primary-50 border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                            />
                            <InputOTPSlot
                              index={3}
                              className="w-[50px] h-[50px] bg-primary-50 border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                            />
                            <InputOTPSlot
                              index={4}
                              className="w-[50px] h-[50px] bg-primary-50 border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
                            />
                            <InputOTPSlot
                              index={5}
                              className="w-[50px] h-[50px] bg-primary-50 border-[#dcdce2] font-text-text-lg-text-lg-font-normal font-[number:var(--text-text-lg-text-lg-font-normal-font-weight)] text-primary-900 text-[length:var(--text-text-lg-text-lg-font-normal-font-size)] tracking-[var(--text-text-lg-text-lg-font-normal-letter-spacing)] leading-[var(--text-text-lg-text-lg-font-normal-line-height)] [font-style:var(--text-text-lg-text-lg-font-normal-font-style)]"
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
                        className="h-auto px-4 py-2 bg-neutralswhite rounded-3xl shadow-shadow-xs border-none"
                        onClick={handleBack}
                      >
                        <span className="mt-[-1.00px] font-text-text-xs-text-xs-font-medium font-[number:var(--text-text-xs-text-xs-font-medium-font-weight)] text-primary-800 text-[length:var(--text-text-xs-text-xs-font-medium-font-size)] tracking-[var(--text-text-xs-text-xs-font-medium-letter-spacing)] leading-[var(--text-text-xs-text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-text-xs-text-xs-font-medium-font-style)]">
                          Atrás
                        </span>
                      </Button>

                      <Button 
                        className="h-auto px-4 py-2 bg-primary-900 rounded-3xl"
                        onClick={handleContinue}
                      >
                        <div className="inline-flex items-center gap-1">
                          <span className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm tracking-[0] leading-5 whitespace-nowrap">
                            Confirmar
                          </span>
                          <ChevronRightIcon className="w-5 h-5" />
                        </div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right side - Image */}
          <div className="flex-1 relative">
            <img
              className="w-full h-full object-cover"
              alt="Close up hand"
              src="/close-up-hand-holding-acupuncture-needle-1.png"
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