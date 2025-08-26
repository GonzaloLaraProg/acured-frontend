import React from "react";
import { Link } from "react-router-dom";
import { GlobeIcon, MenuIcon, UserIcon } from "lucide-react";
import { LanguageModal } from "../../components/LanguageModal";
import { MenuDropdown } from "../../components/MenuDropdown";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { FooterSection } from "../Home/sections/FooterSection";

export const PrivacyCookies = (): JSX.Element => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

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
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] bg-shadow-50"
                >
                  <Link to="/login" className="text-decoration-none">
                    <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-lg text-shadow-900">
                      Inicia sesión
                    </span>
                  </Link>
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
          <Card className="w-full max-w-[1200px] mx-auto bg-white rounded-2xl shadow-lg mb-16">
            <CardContent className="p-12">
              <h1 className="text-4xl font-normal text-primary-900 mb-8 text-center">
                Privacidad y Cookies
              </h1>

              <div className="space-y-8 text-primary-900">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Política de Privacidad</h2>
                  <p className="text-base leading-relaxed mb-4">
                    En Acured, nos comprometemos a proteger y respetar su privacidad. Esta política explica cuándo y por qué recopilamos información personal, cómo la utilizamos, las condiciones bajo las cuales podemos divulgarla a otros y cómo la mantenemos segura.
                  </p>
                  <p className="text-base leading-relaxed">
                    Al utilizar nuestros servicios, usted acepta la recopilación y el uso de información de acuerdo con esta política.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Información que Recopilamos</h2>
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Información Personal</h3>
                    <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                      <li>Nombre completo y datos de contacto</li>
                      <li>Información médica relevante para el tratamiento</li>
                      <li>Historial de citas y tratamientos</li>
                      <li>Información de facturación y pago</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <h3 className="text-lg font-medium">Información Técnica</h3>
                    <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                      <li>Dirección IP y datos de ubicación</li>
                      <li>Información del navegador y dispositivo</li>
                      <li>Cookies y tecnologías similares</li>
                      <li>Datos de uso de la plataforma</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Cómo Utilizamos su Información</h2>
                  <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                    <li>Proporcionar y mejorar nuestros servicios de acupuntura</li>
                    <li>Gestionar citas y comunicaciones</li>
                    <li>Procesar pagos y mantener registros financieros</li>
                    <li>Cumplir con obligaciones legales y regulatorias</li>
                    <li>Enviar comunicaciones importantes sobre el servicio</li>
                    <li>Personalizar su experiencia en la plataforma</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Política de Cookies</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Tipos de Cookies que Utilizamos:</h3>
                      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                        <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                        <li><strong>Cookies de Rendimiento:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio</li>
                        <li><strong>Cookies de Funcionalidad:</strong> Permiten que el sitio recuerde sus preferencias</li>
                        <li><strong>Cookies de Marketing:</strong> Utilizadas para mostrar anuncios relevantes</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Sus Derechos</h2>
                  <p className="text-base leading-relaxed mb-4">
                    Usted tiene derecho a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                    <li>Acceder a sus datos personales</li>
                    <li>Rectificar información incorrecta</li>
                    <li>Solicitar la eliminación de sus datos</li>
                    <li>Limitar el procesamiento de sus datos</li>
                    <li>Portabilidad de datos</li>
                    <li>Oponerse al procesamiento</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Seguridad de Datos</h2>
                  <p className="text-base leading-relaxed">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
                  <p className="text-base leading-relaxed">
                    Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus datos personales, puede contactarnos a través de nuestros canales de atención al cliente o enviando un correo electrónico a privacidad@acured.com
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Cambios a esta Política</h2>
                  <p className="text-base leading-relaxed">
                    Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página y actualizando la fecha de "última actualización".
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Última actualización: Enero 2025
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <FooterSection />
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
    </>
  );
};