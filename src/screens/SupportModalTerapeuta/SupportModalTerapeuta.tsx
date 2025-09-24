import {
  CalendarIcon,
  GlobeIcon,
  MenuIcon,
  MessageCircleIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import TopNavTerapeuta from "../../components/TopNavTerapeuta";
import { FooterTerapeuta } from "../../components/FooterTerapeuta";



const supportOptions = [
  {
    icon: MessageCircleIcon,
    text: "¡Quiero hablar con el equipo!",
  },
  {
    icon: CalendarIcon,
    text: "Quiero saber más de la plataforma",
  },
];


export const SupportModalTerapeuta = (): JSX.Element => {
  return (
    <div className="min-h-screen flex bg-primary-50 relative">
      <TopNavTerapeuta/>
      <div className="flex z-[1] w-full min-h-screen flex-col items-center">
        <main className="flex flex-col min-h-screen items-center justify-center w-full">
          <section className="flex flex-col items-center justify-center px-8 py-0 flex-1 w-full bg-primary-700 rounded-[0px_0px_8px_8px]">
            <div className="flex flex-col w-[534px] items-center gap-6">
              <h1 className="w-[336px] mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-50 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                Te damos la bienvenida al servicio de soporte de Acured
              </h1>

              <Card className="w-full bg-primary-50 rounded-3xl border-0">
                <CardContent className="flex flex-col items-center gap-6 p-12">
                  <div className="inline-flex flex-col items-center gap-12">
                    <h2 className="font-bold w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
                      ¿Con qué te podemos ayudar?
                    </h2>
                  </div>

                  <div className="inline-flex flex-col items-start gap-3">
                    {supportOptions.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 w-full"
                      >
                        <div className="flex flex-col items-start gap-3 flex-1">
                          <Button
                            variant="outline"
                            className="flex items-center gap-2 p-5 w-full justify-start bg-neutralswhite rounded-lg shadow-shadow-xs border-0 h-auto"
                          >
                            <div className="inline-flex items-center gap-2.5">
                              <option.icon className="w-[22.5px] h-[22.5px]" />
                            </div>
                            <span className="font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-primary-700 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                              {option.text}
                            </span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <FooterTerapeuta/>
      </div>
    
    </div>
    
  );
};
