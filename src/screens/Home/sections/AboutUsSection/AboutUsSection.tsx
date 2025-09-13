import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Data for the two paragraph columns
  const paragraphs = [
    {
      text: "Agenda tu hora de forma rápida, segura, 100% en línea y encuentra al profesional que mejor se adapte a tus necesidades.",
    },
    {
      text: "Conoce sus especialidades, experiencia y enfoque terapéutico. Infórmate sobre los distintos tipos de tratamiento y elige con confianza.",
    },
  ];

  return (
    <section className="py-16 px-16 w-full">
      <div className="w-full max-w-[1384px] mx-auto">
        <div className="flex items-start gap-8">
          {/* Left side - Image */}
          <div className="flex-shrink-0">
            <img
              className="w-[680px] h-[653px] object-cover rounded-[24px]"
              alt="Close up hand holding acupuncture needle"
              src="/close-up-hand-holding-acupuncture-needle-1.png"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 flex flex-col justify-between h-[653px] pl-8">
            {/* Title */}
            <div>
              <h2 className="font-['Neue_Haas_Grotesk_Display_Pro-55Rg',Helvetica] text-primary-900 text-[52px] leading-[57.2px] font-normal mb-8">
                Somos el mayor directorio de acupunturistas de Chile y Latinoamérica.
              </h2>
            </div>

            {/* Features list */}
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <div>
                  <span className="font-paragraph-p3 text-black text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)] font-semibold">
                    Paga en línea con total seguridad.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <span className="font-paragraph-p3 text-black text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)]">
                    Aprovecha cada minuto de tu sesión enfocándote en lo que más importa: 
                    <span className="font-semibold"> tu salud</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom paragraphs */}
            <div className="flex gap-8">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="font-paragraph-p3 text-black text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)] flex-1"
                >
                  {paragraph.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
