import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesListSection = (): JSX.Element => {
  // Data for therapist cards
  const therapists = [
    { name: "Texto", specialty: "Especialidad" },
    { name: "Texto", specialty: "Especialidad" },
    { name: "Texto", specialty: "Especialidad" },
    { name: "Texto", specialty: "Especialidad" },
    { name: "Texto", specialty: "Especialidad" },
    { name: "Texto", specialty: "Especialidad" },
  ];

  return (
    <section className="flex flex-col items-start justify-center gap-8 pt-16 pb-32 px-16 w-full max-w-[1484px]">
      <h2 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-primary-900 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
        Nuevos terapeutas en Acured
      </h2>

      <div className="grid grid-cols-6 gap-[15px] w-full">
        {therapists.map((therapist, index) => (
          <Card
            key={`therapist-${index}`}
            className="shadow-shadow-sm bg-primary-50 rounded-xl"
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-3 h-[60px]">
                <Avatar className="w-[60px] h-[60px] bg-white rounded-[48px]">
                  <AvatarFallback className="bg-white"></AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                    {therapist.name}
                  </h6>

                  <span className="[font-family:'Inter',Helvetica] font-medium text-primary-900 text-sm tracking-[0] leading-[normal]">
                    {therapist.specialty}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
