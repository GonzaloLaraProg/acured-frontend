import { ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import TopNavTerapeuta from "../../components/TopNavTerapeuta";
import { FooterTerapeuta } from "../../components/FooterTerapeuta";
import { SuccesPage } from "../../SuccesPage.tsx";
import { useNavigate } from "react-router-dom";


const userTypeOptions = [
  { value: "individual", label: "Soy acupunturista individual" },
  { value: "center", label: "Soy un centro de acupuntura" },
];

const helpOptions = [
  { value: "information", label: "Información" },
  { value: "support", label: "Soporte" },
  { value: "pricing", label: "Planes y Precios" },
  { value: "others", label: "Otros" },
];

export const ContactTerapeuta = (): JSX.Element => {
  const [selectedUserType, setSelectedUserType] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/SuccessPage"); // 👉 lleva a la nueva página
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-2.5 relative w-full bg-primary-50">
        <TopNavTerapeuta/>
      <div className="flex flex-col items-center justify-center gap-8 pt-[148px] pb-24 px-6 relative w-full rounded-lg ">
        <div className="inline-flex flex-col items-start gap-2.5 relative">
          <Card className="w-[700px] bg-white rounded-xl overflow-hidden">
            <CardContent className="flex flex-col items-start gap-8 p-16">
              <header className="flex flex-col items-start gap-3 relative w-full">
                <h1 className="relative w-fit mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-primary-900 text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
                  ¡Contáctanos!
                </h1>

                <p className="relative w-full font-subtitle-1 font-[number:var(--subtitle-1-font-weight)] text-primary-900 text-[length:var(--subtitle-1-font-size)] tracking-[var(--subtitle-1-letter-spacing)] leading-[var(--subtitle-1-line-height)] [font-style:var(--subtitle-1-font-style)]">
                  Te contactaremos lo antes posible.
                </p>
              </header>

              <form className="flex flex-col items-start gap-4 relative w-full" onSubmit={handleSubmit}>
                <Select onValueChange={setSelectedUserType}>
                  <SelectTrigger className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm">
                    <SelectValue
                      placeholder="Cuéntanos más de ti"
                      className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {userTypeOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedUserType === "individual" && (
                  <div className="flex flex-col items-start gap-4 relative w-full">
                    <Input
                      placeholder="Nombre"
                      className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                    <Input
                      placeholder="Apellido"
                      className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                    <Input
                      type="email"
                      placeholder="Mail"
                      className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                  </div>
                )}

                {selectedUserType === "center" && (
                  <div className="flex flex-col items-start gap-4 relative w-full">
                    <Input
                      placeholder="Nombre del centro"
                      className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                    <Input
                      placeholder="Nombre y apellido del consultante"
                      className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                    <Input
                      type="email"
                      placeholder="Mail"
                      className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                  </div>
                )}

                <Select>
                  <SelectTrigger className="w-full bg-primary-50 border-[#bbcac0] shadow-shadow-sm">
                    <SelectValue
                      placeholder="En qué podemos ayudarte"
                      className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {helpOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-primary-800 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex flex-col items-start gap-1 relative w-full">
                  <Textarea
                    placeholder="Escribe tu mensaje aquí"
                    className="h-14 bg-primary-50 border-[#dcdce2] font-text-text-sm-text-sm-font-normal font-[number:var(--text-text-sm-text-sm-font-normal-font-weight)] text-primary-800 text-[length:var(--text-text-sm-text-sm-font-normal-font-size)] tracking-[var(--text-text-sm-text-sm-font-normal-letter-spacing)] leading-[var(--text-text-sm-text-sm-font-normal-line-height)] [font-style:var(--text-text-sm-text-sm-font-normal-font-style)]"
                  />

                  <p className="relative w-full font-paragraph-p1-semi-bold font-[number:var(--paragraph-p1-semi-bold-font-weight)] text-shadow-600 text-[length:var(--paragraph-p1-semi-bold-font-size)] tracking-[var(--paragraph-p1-semi-bold-letter-spacing)] leading-[var(--paragraph-p1-semi-bold-line-height)] [font-style:var(--paragraph-p1-semi-bold-font-style)]">
                    Máximo 500 caracteres.
                  </p>
                </div>
                <Button 
                  type="submit"
                  onClick={handleSubmit}
                  className="h-auto px-4 py-2 bg-primary-900 rounded-3xl [font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm leading-5 tracking-[0]"
                >
                  Confirmar
                  <ChevronRightIcon className="w-5 h-5 ml-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <FooterTerapeuta/>
   
    </section>
  );
};
