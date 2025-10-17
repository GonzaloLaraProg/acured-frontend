// src/sections/AboutUsSection.tsx
import React from "react";
import { CreditCard, Heart } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full  px-16 py-16">
      <div className="max-w-[1512px] mx-auto flex justify-between items-start gap-16">
        {/* Imagen izquierda */}
        <img
          src="/close-up-hand-holding-acupuncture-needle-1.png"
          alt="Acupuntura"
          className="w-[680px] h-[653px] object-cover rounded-[16px]"
        />

        {/* Contenido derecho */}
        <div className="flex-1 flex flex-col justify-between h-[653px]">
          {/* Título */}
          <h2 className="font-haas text-primary-900 text-[40px] leading-[48px]  mb-8">
            Somos el mayor directorio de <br /> acupunturistas de Chile y
            Latinoamérica.
          </h2>

          {/* Features */}
          <div className="flex flex-col gap-6 mb-8">
            {/* Paga seguro */}
            <div className="flex items-start gap-3">
              <img src="/icon-card-outline.svg" alt="Pagar" className="w-10 h-10" />
              <p className="font-inter text-[20px] leading-[40px] text-black">
                Paga en línea con total seguridad.
              </p>
            </div>

            {/* Salud en tres líneas */}
            <div className="flex items-start gap-3">
              <img src="/icon-heart.svg" alt="Heart" className="w-10 h-10" />
              <p className="font-inter text-[20px] leading-[30px] text-black tracking-[0.01em] py-2">
  Aprovecha cada minuto de tu <br />
  sesión enfocándote en lo <br />
  que más importa:{" "}
  <span className="font-semibold">tu salud</span>
</p>

            </div>
          </div>

          {/* Párrafos inferiores */}
          <div className="flex gap-4 text-[18px] leading-[28px] text-black">
            <p className="font-inter flex-1">
              Agenda tu hora de forma rápida, segura, 100% en línea y encuentra
              al profesional que mejor se adapte a tus necesidades.
            </p>
            <p className="font-inter flex-1">
              Conoce sus especialidades, experiencia y enfoque terapéutico.
              Infórmate sobre los distintos tipos de tratamiento y elige con
              confianza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
