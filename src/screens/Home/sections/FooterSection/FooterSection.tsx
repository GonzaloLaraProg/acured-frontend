import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { ContactFormSection } from "../../../../components/ContactFormSection";
import { FAQModal } from "../../../../components/FAQModal";
import { SupportModal } from "../../../../components/SupportModal";
import { Button } from "../../../../components/ui/button";

interface FooterSectionProps {
  onFAQClick?: () => void;
  onSupportClick?: () => void;
}

export const FooterSection = ({ onFAQClick, onSupportClick }: FooterSectionProps): JSX.Element => {
  const [isFAQModalOpen, setIsFAQModalOpen] = React.useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = React.useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = React.useState(false);

  const handleFAQClick = () => {
    if (onFAQClick) {
      onFAQClick();
    } else {
      setIsFAQModalOpen(true);
    }
  };

  const handleSupportClick = () => {
    if (onSupportClick) {
      onSupportClick();
    } else {
      setIsSupportModalOpen(true);
    }
  };

  // Footer links data
  const footerLinks = [
    { text: "Preguntas frecuentes", onClick: handleFAQClick },
    { text: "Privacidad y cookies", onClick: () => {} },
    { text: "Términos y condiciones", onClick: null },
    { text: "Soporte", onClick: handleSupportClick },
    { text: "Contacto", onClick: () => setIsContactFormOpen(true) },
  ];

  // Social media data
  const socialMedia = [
    { name: "Instagram", icon: <InstagramIcon className="w-5 h-5" /> },
    { name: "Facebook", icon: <FacebookIcon className="w-5 h-5" /> },
    { name: "Linkedin", icon: <LinkedinIcon className="w-5 h-5" /> },
  ];

  return (
    <>
      <footer className="flex items-start justify-end gap-4 pt-28 pb-16 px-16 relative self-stretch w-full flex-[0_0_auto] bg-primary-50">
      {/* Left section - Call to action buttons */}
      <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch grow">
        <Button
          variant="outline"
          className="w-[211px] h-[31px] justify-center gap-4 px-4 py-2 bg-primary-100 border-0 rounded-3xl"
        >
          <span className="font-medium text-primary-800 text-sm leading-5 whitespace-nowrap">
            Agenda tu hora aquí
          </span>
        </Button>

        <Button className="flex justify-center gap-4 px-4 py-2 self-stretch w-full bg-primary-900 rounded-3xl">
          <span className="font-medium text-neutralswhite text-sm leading-[normal]">
            ¿Eres acupunturista?
          </span>
        </Button>
      </div>

      {/* Spacers */}
      <div className="relative flex-1 grow h-[79px]" />
      <div className="relative flex-1 grow h-[79px]" />

      {/* Middle section - Links */}
      <div className="flex flex-col w-[450px] items-start gap-2.5 relative">
        {footerLinks.map((link, index) => (
          link.onClick ? (
            <button
              key={`footer-link-${index}`}
              onClick={link.onClick}
              className="relative w-fit font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)] hover:text-primary-700 cursor-pointer"
            >
              {link.text}
            </button>
          ) : (
            <span
              key={`footer-link-${index}`}
              className="relative w-fit font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-gray-500 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]"
            >
              {link.text}
            </span>
          )
        ))}
      </div>

      {/* Right section - Social media */}
      <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
        <div className="relative w-fit mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-primary-900 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] whitespace-nowrap [font-style:var(--heading-h6-font-style)]">
          Síguenos en Redes
        </div>

        {socialMedia.map((social, index) => (
          <a
            key={`social-link-${index}`}
            href="#"
            className="inline-flex gap-2 items-center relative rounded-3xl"
          >
            <span className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-shadow-800 text-sm leading-5 whitespace-nowrap relative w-fit text-right tracking-[0]">
              {social.name}
            </span>
            {social.icon}
          </a>
        ))}
      </div>
    </footer>

    <FAQModal
      isOpen={isFAQModalOpen}
      onClose={() => setIsFAQModalOpen(false)}
    />

    <SupportModal
      isOpen={isSupportModalOpen}
      onClose={() => setIsSupportModalOpen(false)}
    />

    <ContactFormSection
      isOpen={isContactFormOpen}
      onClose={() => setIsContactFormOpen(false)}
    />
    </>
  );
};
