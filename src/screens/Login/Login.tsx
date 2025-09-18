import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { FAQModal } from "../../components/FAQModal";
import { SupportModal } from "../../components/SupportModal";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);

  const [currentStep, setCurrentStep] = React.useState<
    "initial" | "patient-login" | "therapist-login"
  >("initial");

  const handlePatientLogin = () => {
    setCurrentStep("patient-login");
  };

  const handleTherapistLogin = () => {
    setCurrentStep("therapist-login");
  };

  const handleCreateAccount = () => {
    navigate("/registration");
  };

  return (
    <>
      <TopNav />
      <div className="relative w-full bg-[#F8FAF9] overflow-hidden min-h-screen">
        {/* Main Content */}
        <div className="flex min-h-screen">
          {/* Left side - Login form */}
          <div className="flex-1 flex items-center justify-center px-8">
            <Card className="w-full max-w-[500px] bg-white rounded-xl shadow-md">
              <CardContent className="p-8">
                {currentStep === "patient-login" || currentStep === "therapist-login" ? (
                  <>
                    <h1 className="font-haas text-center text-3xl font-medium text-gray-900 mb-6 leading-snug">
                      Ingresa tu correo electrónico y contraseña para iniciar sesión.
                    </h1>


                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332] font-inter"
                      />
                      <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332] font-inter"
                      />

                      {/* Google button */}
                      <button className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition flex items-center justify-center gap-2 font-inter">
                        <span className="text-lg">G</span>
                        <span className="font-medium">Continuar con Google</span>
                      </button>

                      {/* Forgot password */}
                      <div className="text-left">
                        <button
                          className="text-sm text-[#1B4332] hover:underline font-inter"
                          onClick={() => navigate("/password-recovery")}
                        >
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>

                      {/* Bottom buttons */}
                      <div className="flex items-center justify-between pt-4 gap-4">
                        <button
                          className="px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow-sm hover:bg-gray-50 font-inter"
                          onClick={handleCreateAccount}
                        >
                          Crear cuenta
                        </button>
                        <button
                          className="px-6 py-2 bg-[#1B4332] text-white rounded-full hover:bg-[#163828] font-inter"
                          onClick={() => navigate("/patient-dashboard")}
                        >
                          Iniciar sesión
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="font-haas text-center text-3xl text-gray-900 mb-6 leading-snug">
                      ¡Inicia sesión!
                    </h1>

                    <div className="space-y-4">
                      <div
                        className="p-5 rounded-lg bg-[#F2F7F4] hover:bg-[#E9F2EC] cursor-pointer shadow-sm border border-gray-200 flex items-center justify-between transition"
                        onClick={handlePatientLogin}
                      >
                        <div>
                          <p className="font-haas text-gray-900 font-semibold text-lg">
                            Acured para pacientes
                          </p>
                          <p className="font-inter text-gray-600 text-sm">
                            Soy paciente y quiero iniciar sesión
                          </p>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                      </div>

                      <div
                        className="p-5 rounded-lg bg-white hover:bg-gray-50 cursor-pointer shadow-sm border border-gray-200 flex items-center justify-between transition"
                        onClick={handleTherapistLogin}
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
                  </>
                )}
              </CardContent>
            </Card>
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

      <FAQModal isOpen={isFAQModalOpen} onClose={() => setIsFAQModalOpen(false)} />
      <SupportModal isOpen={isSupportModalOpen} onClose={() => setIsSupportModalOpen(false)} />
    </>
  );
};
