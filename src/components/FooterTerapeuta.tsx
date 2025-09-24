import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { FAQModal } from "./FAQModal";
import { SupportModal } from "./SupportModal";
import { ContactTerapeuta } from "./ContactTerapeuta"; // 👈 importa el modal de contacto
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  onFAQClick?: () => void;
  onSupportClick?: () => void;
}

export const FooterTerapeuta = ({ }: FooterProps): JSX.Element => {
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false); // 👈 nuevo estado
  const navigate = useNavigate();

  const handleFAQClick = () => {
  navigate("/preguntas-terapeutas");
};


  const handleSupportClick = () => {
    navigate("/SupportModalTerapeuta");
  };

  const handleContactClick = () => {
    navigate("/ContactTerapeuta");
  };

  // Footer links data
  const footerLinks = [
    { text: "Preguntas frecuentes", onClick: handleFAQClick },
    {
      text: "Privacidad y cookies",
      onClick: () => window.open("/privacidad-terapeutas.pdf", "_blank"),
    },
    {
      text: "Términos y condiciones",
      onClick: () => window.open("/terminos-terapeutas.pdf", "_blank"),
    },
    { text: "Soporte", onClick: handleSupportClick },
    { text: "Contacto", onClick: handleContactClick }, // sigue abriendo el modal de contacto
  ];


  // Social media data
  const socialMedia = [
    { name: "Instagram", icon: <InstagramIcon className="w-5 h-5" /> },
    { name: "Facebook", icon: <FacebookIcon className="w-5 h-5" /> },
    { name: "Linkedin", icon: <LinkedinIcon className="w-5 h-5" /> },
  ];

  return (
    <>
   
      <footer className="flex items-start justify-end gap-4 pt-28 pb-16 px-16 relative self-stretch w-full flex-[0_0_auto] bg-white">
        {/* Left section - Call to action buttons */}
        <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch grow">
          <Button
            variant="outline"
            className="flex justify-center w-[211px] h-[31px] px-4 py-2 bg-primary-100 border-0 rounded-3xl"
            onClick={() => navigate('/registration')}
          >
            <span className="font-medium text-primary-800 text-sm leading-5 [font-family:'Inter',Helvetica]">
              Regístrate aquí
            </span>
          </Button>

          <Button
          
            className="flex justify-center w-full px-4 py-2 bg-primary-900 rounded-3xl"
            onClick={() => navigate('/')}
          >
            <span className="font-medium text-neutralswhite text-sm leading-[normal] [font-family:'Inter',Helvetica]">
              ¿Eres paciente?
            </span>
          </Button>
        </div>

        {/* Spacers */}
        <div className="relative flex-1 grow h-[79px]" />
        <div className="relative flex-1 grow h-[79px]" />

        {/* Middle section - Footer links */}
        <div className="flex flex-col w-[450px] items-start gap-2.5 relative">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="link"
              onClick={link.onClick}
              className="p-0 h-auto font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]"
            >
              {link.text}
            </Button>
          ))}
        </div>

        {/* Right section - Social media links */}
        <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
          <div className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
            Síguenos en Redes
          </div>

          {socialMedia.map((social, index) => (
            <Button
              key={index}
              variant="link"
              className="inline-flex gap-2 p-0 h-auto items-center rounded-3xl"
            >
              <span className="font-semibold text-shadow-800 text-sm leading-5 whitespace-nowrap [font-family:'Inter',Helvetica]">
                {social.name}
              </span>
              {social.icon}
            </Button>
          ))}
        </div>
      </footer>

      {/* Modals */}
      
      
    </>
  );
};
