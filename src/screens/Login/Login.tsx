import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, ChevronDownIcon, ArrowRightIcon } from "lucide-react";
import { CheckCircleIcon, XIcon } from "lucide-react";
import { FAQModal } from "../../components/FAQModal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { SupportModal } from "../../components/SupportModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../components/ui/input-otp";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);

  const [currentStep, setCurrentStep] = React.useState<'initial' | 'patient-login' | 'therapist-login' | 'create-account' | 'name-form' | 'basic-info'>('initial');

  const handlePatientLogin = () => {
    setCurrentStep('patient-login');
  };

  const handleTherapistLogin = () => {
    setCurrentStep('therapist-login');
  };

  const handleCreateAccount = () => {
    navigate('/registration');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'patient-login':
      case 'therapist-login':
        setCurrentStep('initial');
        break;
      default:
        setCurrentStep('initial');
    }
  };

  return (
    <>
      <TopNav />
      <div className="relative w-full bg-primary-50 overflow-hidden min-h-screen">

        {/* Main Content */}
        <div className="flex min-h-screen">
          {/* Left side - Login form */}
          <div className="flex-1 flex items-center justify-center pt-32 pb-16 px-16">
            <Card className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                {/* Title */}
                <h1 className="text-center mb-8 text-2xl font-normal text-primary-900">
                  {currentStep === 'patient-login' || currentStep === 'therapist-login' ? "Ingresa tu correo electrónico y contraseña para iniciar sesión." : "Inicia sesión"}
                </h1>

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
                        onClick={() => navigate('/password-recovery')}   // 👈 aquí está el fix
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
                          <span onClick={handleCreateAccount}>Crear cuenta</span>
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
                          {/* 🔹 Título más grande */}
                          <span className="font-bold text-primary-900 text-xl leading-6">
                            Acured para pacientes
                          </span>

                          {/* 🔹 Subtítulo más pequeño */}
                          <span className="text-gray-600 text-sm leading-5">
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
                          {/* 🔹 Título más grande */}
                          <span className="font-bold text-primary-900 text-xl leading-6">
                            Acured para acupunturistas
                          </span>

                          {/* 🔹 Subtítulo más pequeño */}
                          <span className="text-gray-600 text-sm leading-5">
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
        <Footer 
          onFAQClick={() => setIsFAQModalOpen(true)}
          onSupportClick={() => setIsSupportModalOpen(true)}
        />
      </div>

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