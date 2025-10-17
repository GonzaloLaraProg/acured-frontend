import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ChevronRightIcon } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { FAQModal } from "../../components/FAQModal";
import { SupportModal } from "../../components/SupportModal";
import { useAuth, PREDEFINED_USERS } from "../../context/AuthContext";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get("step");

  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const [currentStep, setCurrentStep] = React.useState<
    "initial" | "patient-login" | "therapist-login"
  >(step === "patient" ? "patient-login" : step === "therapist"? "therapist-login": "initial");

    React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handlePatientLogin = () => {
    setCurrentStep("patient-login");
  };

  const handleTherapistLogin = () => {
    setCurrentStep("therapist-login");
  };

  const handleCreateAccount = () => {
    navigate("/registration");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, completa todos los campos");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Buscar el usuario por email y contraseña
      const user = PREDEFINED_USERS.find(u => u.email === email && u.password === password);
      
      if (!user) {
        setError("Credenciales incorrectas. Por favor, verifica tu email y contraseña.");
        setIsLoading(false);
        return;
      }

      // Validar que el tipo de usuario coincida con el paso actual
      if (currentStep === "patient-login" && user.role !== "patient") {
        setError("Este usuario no es un paciente. Por favor, usa las credenciales de paciente o selecciona 'Acupunturista'.");
        setIsLoading(false);
        return;
      }

      if (currentStep === "therapist-login" && user.role === "patient") {
        setError("Este usuario es un paciente. Por favor, usa las credenciales de acupunturista o selecciona 'Paciente'.");
        setIsLoading(false);
        return;
      }

      // Si todo está correcto, hacer login
      const success = await login(email, password);
      if (success) {
        navigate(user.dashboardRoute);
      } else {
        setError("Error al iniciar sesión. Por favor, intenta de nuevo.");
      }
    } catch (err) {
      setError("Error al iniciar sesión. Por favor, intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
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
                {/* Paso inicial */}
                {currentStep === "initial" && (
                  <>
                    <h1 className="font-heading-h5 text-center text-3xl text-gray-900 mb-6 leading-snug">
                      ¡Inicia sesión!
                    </h1>

                    <div className="space-y-4">
                      {/* Opción Paciente */}
                      <div
                        className="p-5 rounded-lg bg-[#F2F7F4] hover:bg-[#E9F2EC] cursor-pointer shadow-sm border border-gray-200 flex items-center justify-between transition"
                        onClick={handlePatientLogin}
                      >
                        <div>
                          <p className="font-heading-h5 text-gray-900 font-semibold text-lg">
                            Acured para pacientes
                          </p>
                          <p className="font-paragraph-p3 text-gray-600 text-sm">
                            Soy paciente y quiero iniciar sesión
                          </p>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                      </div>

                      {/* Opción Acupunturista */}
                      <div
                        className="p-5 rounded-lg bg-white hover:bg-gray-50 cursor-pointer shadow-sm border border-gray-200 flex items-center justify-between transition"
                        onClick={handleTherapistLogin}
                      >
                        <div>
                          <p className="font-heading-h5 text-gray-900 font-semibold text-lg">
                            Acured para acupunturistas
                          </p>
                          <p className="font-paragraph-p3 text-gray-600 text-sm">
                            Soy acupunturista y me interesa administrar mis pacientes
                          </p>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                  </>
                )}

                {/* Paso login paciente */}
                {currentStep === "patient-login" && (
                  <>
                    <h1 className="font-heading-h5 text-center text-3xl font-medium text-gray-900 mb-6 leading-snug">
                      Ingresa tu correo electrónico y contraseña
                    </h1>

                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332] font-paragraph-p3"
                      />
                      <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332] font-paragraph-p3"
                      />

                      {error && (
                        <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                          {error}
                        </div>
                      )}

                      {/* Google button */}
                      <button className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition flex items-center justify-center gap-2 font-paragraph-p3">
                        <span className="text-lg">G</span>
                        <span className="font-medium">Continuar con Google</span>
                      </button>

                      {/* Forgot password */}
                      <div className="text-left">
                        <button
                          className="text-sm text-[#1B4332] hover:underline font-paragraph-p3"
                          onClick={() => navigate("/password-recovery?role=patient")}
                        >
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>

                      {/* Bottom buttons */}
                      <div className="flex items-center justify-between pt-4 gap-4">
                        <button
                          className="px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow-sm hover:bg-gray-50 font-paragraph-p3"
                          onClick={handleCreateAccount}
                        >
                          Crear cuenta
                        </button>
                        <button
                          className="px-6 py-2 bg-[#1B4332] text-white rounded-full hover:bg-[#163828] font-paragraph-p3 disabled:opacity-50"
                          onClick={handleLogin}
                          disabled={isLoading}
                        >
                          {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Paso login terapeuta */}
                {currentStep === "therapist-login" && (
                  <>
                    <h1 className="font-heading-h5 text-center text-3xl font-medium text-gray-900 mb-6 leading-snug">
                      Ingresa tu correo electrónico y contraseña
                    </h1>

                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332] font-paragraph-p3"
                      />
                      <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F2F7F4] border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1B4332] font-paragraph-p3"
                      />

                      {error && (
                        <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                          {error}
                        </div>
                      )}

                      {/* Google button */}
                      <button className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-50 transition flex items-center justify-center gap-2 font-paragraph-p3">
                        <span className="text-lg">G</span>
                        <span className="font-medium">Continuar con Google</span>
                      </button>

                      {/* Forgot password */}
                      <div className="text-left">
                        <button
                          className="text-sm text-[#1B4332] hover:underline font-paragraph-p3"
                          onClick={() => navigate("/password-recovery?role=therapist")}
                        >
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>

                      {/* Bottom buttons */}
                      <div className="flex items-center justify-between pt-4 gap-4">
                        <button
                          className="px-6 py-2 bg-white border border-gray-300 text-gray-900 rounded-full shadow-sm hover:bg-gray-50 font-paragraph-p3"
                          onClick={handleCreateAccount}
                        >
                          Crear cuenta
                        </button>
                        <button
                          className="px-6 py-2 bg-[#1B4332] text-white rounded-full hover:bg-[#163828] font-paragraph-p3 disabled:opacity-50"
                          onClick={handleLogin}
                          disabled={isLoading}
                        >
                          {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                        </button>
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

      <FAQModal isOpen={isFAQModalOpen} onClose={() => setIsFAQModalOpen(false)} />
      <SupportModal isOpen={isSupportModalOpen} onClose={() => setIsSupportModalOpen(false)} />
    </>
  );
};
