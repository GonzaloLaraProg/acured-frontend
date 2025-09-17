import { ChevronDownIcon, X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  if (!isOpen) return null;

  const faqItems: FAQItem[] = [
    {
      question: "¿Qué es Acured?",
      answer:
        "Acured es el mayor directorio de Acupunturistas de Chile y Latinoamérica. A través de nuestro sitio, podrás acceder a un amplio espectro de especialistas a lo largo de cada país, permitiéndote así optar a la selección del tratante más cercano.",
    },
    {
      question: "¿Cómo busco a un especialista?",
      answer:
        "Dentro de nuestra página de inicio, encontrarás un buscador el cual te permitirá seleccionar a tu especialista. Aquí podrás filtrar por ubicación geográfica, especialidad y fecha, entregándote así un amplio abanico de posibilidades para que te puedas atender.",
    },
    {
      question: "¿Cómo agendo una hora médica?",
      answer:
        "Una vez que has seleccionado a tu especialista, dentro de su perfil, podrás seleccionar el botón de agendamiento. Una vez pinches ahí, podrás elegir el horario que más te acomode y así dejar reservada tu hora médica.",
    },
    {
      question: "¿Qué especialidades tratan en Acured?",
      answer:
        "Cada terapeuta tiene sus propias especialidades y podrás ver éstas dentro del perfil de cada uno de ellos. Igualmente, dentro de nuestra página de inicio podrás ver algunos de los principales tratamientos existentes en medicina china, para que de esta forma, te familiarices con sus distintos tipos de procedimientos.",
    },
    {
      question: "¿Cómo pago mi consulta?",
      answer:
        "Cada especialista define el método de pago, el cual podrá ser online vía botón de pago transbank, presencial (pago en efectivo o transbank) y vía transferencia.",
    },
    {
      question: "Si no asisto, ¿Hay reembolso?",
      answer:
        "Cada especialista define sus políticas de reembolso las cuales son transparentes para todos los pacientes, pudiendo haber reembolsos totales, parciales o consultas no reembolsables.",
    },
    {
      question: "Olvidé mi contraseña, ¿cómo la recupero?",
      answer:
        "Al momento de iniciar sesión, encontrarás un link el cual te permitirá generar una nueva clave de usuario. Para ello, en la sección “Olvidé mi contraseña”, al momento de pinchar ahí, te solicitará tu nombre de usuario y por medio de un correo electrónico que te enviaremos podrás iniciar el proceso para volver a ingresar a nuestro sitio.",
    },
    {
      question: "¿Cómo me contacto con ustedes?",
      answer:
        "Puedes hacerlo a través de nuestro formulario de contacto. Para ello, en la pestaña “Contacto”, llenas tus datos y el motivo por el cual quieres contactarte con nosotros y dentro de 24hrs tendrás noticias nuestras.",
    },
    {
      question: "¿Nos envían recordatorios para nuestras citas médicas?",
      answer:
        "Sí, los especialistas pueden incluir la opción de confirmación y recordatorios, con el fin de que no olvides tu asistencia. Igualmente, si deseas cancelar tu cita, dentro de estos mismos correos, podrás acceder a modificar tu hora con el especialista seleccionado.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="fixed top-[64px] left-0 right-0 bottom-0 z-[40] flex items-center justify-center">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[640px] mx-4 max-h-[80vh] overflow-hidden">
        {/* Header fijo */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <div className="relative flex items-center justify-center px-6 py-4">
            <h2 className="text-2xl md:text-3xl font-normal text-primary-900">
              Preguntas frecuentes
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded-full"
              aria-label="Cerrar"
            >
              <span className="text-sm">Cerrar</span>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Lista FAQ */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index}>
              {/* Título en cajita */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between px-4 py-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Respuesta sin fondo */}
              {openItems.includes(index) && (
                <div className="mt-2 px-2">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
