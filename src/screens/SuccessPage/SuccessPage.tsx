import { CheckCircleIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import TopNavTerapeuta from "../../components/TopNavTerapeuta";
import { FooterTerapeuta } from "../../components/FooterTerapeuta";
import { useNavigate } from "react-router-dom";

export const SuccessPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col min-h-screen bg-primary-50">
      {/* Nav */}
      <TopNavTerapeuta />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 my-60">
        <div className="w-[500px] shadow-md rounded-lg overflow-hidden">
          
          {/* Encabezado con fondo verde claro */}
          <div className="flex items-center justify-between w-full bg-green-50 px-4 py-2 rounded-t-lg">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-7 h-7 text-green-600" />
              <h1 className="text-[20px] font-semibold text-green-700">Éxito</h1>
            </div>
            <button
              onClick={() => navigate("/therapist-dashboard")}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Body con fondo blanco */}
          <div className="bg-white p-6 flex flex-col gap-4 rounded-b-lg">
            {/* Mensaje alineado a la izquierda */}
            <div>
              <p className="text-gray-700 text-sm leading-relaxed text-left">
                Tu mensaje ha sido enviado con éxito.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed text-left">
                Nuestro equipo te contactará por correo a la brevedad.
              </p>
            </div>

            {/* Línea separadora */}
            <hr className="border-t border-gray-200 my-2" />

            {/* Botón alineado a la derecha */}
            <div className="flex justify-end">
              <Button
                onClick={() => navigate("/therapist-dashboard")}
                className="px-5 py-2 bg-primary-900 text-white rounded-full hover:bg-primary-800 transition-colors"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <FooterTerapeuta />
    </section>
  );
};
