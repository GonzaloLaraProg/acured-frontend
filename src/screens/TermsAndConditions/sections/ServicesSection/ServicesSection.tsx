import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  const policyContent = [
    {
      title: "1. Flexibilidad en las Políticas Individuales",
      content: [
        {
          type: "list",
          items: [
            <>
              <span className="font-semibold">
                Cada terapeuta o centro médico establece sus propias políticas
              </span>
              {
                " de cancelación y reprogramación. Te recomendamos revisar las condiciones específicas de tu profesional al momento de agendar tu cita. Esta información suele estar disponible en su perfil o durante el proceso de reserva."
              }
            </>,
          ],
        },
      ],
    },
    {
      title: "2. Cómo Notificar una Cancelación o Reprogramación",
      content: [
        {
          type: "normal",
          text: "Para cancelar o reprogramar tu cita, puedes hacerlo de las siguientes maneras:",
        },
        {
          type: "list",
          items: [
            "Directamente a través de la plataforma donde realizaste la reserva.",
            "Por teléfono al número de contacto del terapeuta o centro médico.",
            "Vía correo electrónico, utilizando la dirección de contacto proporcionada.",
          ],
        },
        {
          type: "normal",
          text: "Asegúrate de recibir una confirmación de tu cancelación o reprogramación para evitar inconvenientes.",
        },
      ],
    },
    {
      title: "3. Reembolsos por Cancelación",
      content: [
        {
          type: "list",
          items: [
            "La posibilidad de reembolso parcial o total dependerá directamente de la política establecida por el terapeuta o centro médico, así como del motivo y la antelación con la que se realice la cancelación.",
            "En casos de emergencias o situaciones justificadas, algunos profesionales o centros podrían considerar reembolsos, incluso si la cancelación se produce con poca antelación. Esto será evaluado caso por caso por el profesional.",
          ],
        },
      ],
    },
    {
      title: "4. No Presentación (No-Show)",
      content: [
        {
          type: "list",
          items: [
            "Si un paciente no se presenta a su cita sin previo aviso, la decisión de otorgar o no algún tipo de reembolso queda a criterio exclusivo del terapeuta o centro médico. Generalmente, las citas no asistidas sin notificación previa no son elegibles para reembolso.",
          ],
        },
      ],
    },
    {
      title: "5. Cancelación por Parte del Profesional",
      content: [
        {
          type: "normal",
          text: "Para cancelar o reprogramar tu cita, puedes hacerlo de las siguientes maneras:",
        },
        {
          type: "list",
          items: [
            "Reprogramar la cita en una nueva fecha y hora conveniente.",
            "Solicitar el reembolso completo del monto abonado.",
          ],
        },
      ],
    },
  ];
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="flex flex-col w-full items-center gap-6 relative">
      {/* Título */}
      <header className="text-center text-2xl md:text-3xl text-primary-900">
        Política de cancelación, reembolsos y reprogramación de citas
      </header>

      <Card className="w-[1300px] bg-white rounded-3xl shadow-shadow-sm border-0">
        <CardContent className="flex flex-col items-start gap-3 p-8">
          <div className="relative w-full [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[14px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] mb-4">
              Entendemos que pueden surgir imprevistos. Para garantizar la mejor
              atención y el respeto por el tiempo de nuestros profesionales, te
              pedimos que leas atentamente nuestras políticas de cancelación y
              reprogramación de citas.
            </p>

            {policyContent.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="[font-family:'Neue_Haas_Grotesk_Display_Pro-Regular',Helvetica] font-bold text-base mb-2">
                  {section.title}
                </h3>

                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-2">
                    {item.type === "bold" && (
                      <span className="font-semibold">{item.text}</span>
                    )}
                    {item.type === "normal" && (
                      <span className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0]">
                        {item.text}
                      </span>
                    )}
                    {item.type === "list" && (
                      <ul className="ml-4 mt-2 mb-2 list-disc">
                        {item.items?.map((listItem, listIndex) => (
                          <li
                            key={listIndex}
                            className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] mb-1"
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <br />
    </section>
  );
};
