import { CheckCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import TopNavTerapeuta from "../../components/TopNavTerapeuta";
import { FooterTerapeuta } from "../../components/FooterTerapeuta";
import { useNavigate } from "react-router-dom";

export const SuccessPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-between min-h-screen bg-primary-50">
      {/* Nav */}
      <TopNavTerapeuta />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
        <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 flex flex-col items-center text-center">
          <CheckCircleIcon className="w-12 h-12 text-green-600 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            ¡Éxito!
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tu mensaje ha sido enviado con éxito. Nuestro equipo te contactará por correo a la brevedad.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-primary-900 text-white rounded-full hover:bg-primary-800 transition-colors"
          >
            Volver al inicio
          </Button>
        </div>
      </div>

      {/* Footer */}
      <FooterTerapeuta />
    </section>
  );
};
