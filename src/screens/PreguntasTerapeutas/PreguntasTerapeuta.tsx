import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent } from "../../components/ui/card";
import TopNavTerapeuta from "../../components/TopNavTerapeuta";
import { FooterTerapeuta } from "../../components/FooterTerapeuta";

export const PreguntasTerapeutas = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9]">
      {/* Contenido principal */}
      <main className="flex-grow flex flex-col items-center justify-center gap-16 pt-[148px] px-0">
        <TopNavTerapeuta />
        <Card className="w-[810px] bg-neutralswhite rounded-lg">
          <CardContent className="flex flex-col items-center gap-8 pt-8 pb-16 px-8">
            <h2 className="font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-primary-900 text-[35px] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
              Preguntas frecuentes
            </h2>

            <Accordion type="multiple" collapsible className="w-full space-y-6">
              {/* Item 1 */}
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">
                    ¿Qué es Acured?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Acured es un innovador software de gestión clínica diseñado específicamente para terapeutas e instituciones de salud que imparten la acupuntura. Con una arquitectura adaptable a la Medicina tradicional y escalable a nivel regional, nuestro objetivo es modernizar el sector mediante herramientas digitales que optimicen la atención, estandaricen la información, profesionalicen la práctica y promuevan la investigación científica.
                  <br /><br />
                  Nuestro enfoque es la automatización del ciclo completo de atención al paciente, y para ello Acured combina:
                  <ul className="list-disc pl-6">
                    <li>Trabajo Administrativo</li>
                    <li>Gestión Clínica</li>
                    <li>Asistencia diagnóstica mediante IA</li>
                  </ul>
                  <br />
                  Por último, a través de nuestra plataforma web, nuestros socios obtendrán una serie de beneficios como:
                  <ul className="list-disc pl-6">
                    <li>Agendamiento</li>
                    <li>Pago en línea</li>
                    <li>Ficha Clínica Digital</li>
                    <li>Prellenado asistido con IA</li>
                    <li>Creación de Base de Datos Científica</li>
                    <li>Foro Colaborativo para Terapeutas</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Item 2 */}
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">¿Cómo funciona la Ficha clínica digital?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Dentro de nuestra página de inicio, encontrarás un buscador el cual te permitirá seleccionar a tu especialista. Aquí podrás filtrar por ubicación geográfica, especialidad y fecha, entregándote así un amplio abanico de posibilidades para que te puedas atender.
                </AccordionContent>
              </AccordionItem>

              {/* Item 3 */}
              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">¿Qué es el Prellenado de Ficha con IA?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Una vez que has seleccionado a tu especialista, dentro de su perfil podrás seleccionar el botón de agendamiento. Una vez pinches ahí, podrás elegir el horario que más te acomode y así dejar reservada tu hora médica.
                </AccordionContent>
              </AccordionItem>

              {/* Item 4 */}
              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">¿Cómo funciona el Pago Online?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Cada terapeuta tiene sus propias especialidades y podrás ver éstas dentro del perfil de cada uno de ellos. Igualmente, dentro de nuestra página de inicio podrás ver algunos de los principales tratamientos existentes en medicina china, para que de esta forma te familiarices con sus distintos tipos de procedimientos.
                </AccordionContent>
              </AccordionItem>

              {/* Item 5 */}
              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">¿En qué consiste el foro médico?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Cada especialista define el método de pago, el cual podrá ser online vía botón de pago Transbank, presencial (pago en efectivo o Transbank) o vía transferencia.
                </AccordionContent>
              </AccordionItem>

              {/* Item 6 */}
              <AccordionItem value="item-6" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">¿Nos envían recordatorios de las citas médicas?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Cada especialista define sus políticas de reembolsos las cuales son transparentes para todos los pacientes, pudiendo haber reembolsos totales, parciales o consultas no reembolsables.
                </AccordionContent>
              </AccordionItem>

              {/* Item 7 */}
              <AccordionItem value="item-7" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">¿Cuáles son los planes de Acured?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Al momento de iniciar sesión, encontrarás un link el cual te permitirá generar una nueva clave de usuario. Para ello, en la sección “Olvidé mi contraseña”, al momento de pinchar ahí, te solicitará tu nombre de usuario y por medio de un correo electrónico que te enviaremos podrás iniciar el proceso para volver a ingresar a nuestro sitio.
                </AccordionContent>
              </AccordionItem>

              {/* Item 8 */}
              <AccordionItem value="item-8" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">¿Cómo me contacto con ustedes?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Puedes hacerlo a través de nuestro formulario de contacto. Para ello, en la pestaña “Contacto”, llenas tus datos y el motivo por el cual quieres comunicarte con nosotros y dentro de 48hrs tendrás noticias nuestras.
                </AccordionContent>
              </AccordionItem>

              {/* Item 9 */}
              <AccordionItem value="item-9" className="border-none">
                <AccordionTrigger className="flex items-center justify-between px-4 py-2 bg-primary-50 rounded-lg no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <span className="font-bold text-[20px] font-heading-h6 text-black">Olvidé mi contraseña, ¿cómo la recupero?</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 text-sm text-gray-700">
                  Al momento de iniciar sesión, encontrarás un link el cual te permitirá generar una nueva clave de usuario. Para ello, en la sección “Olvidé mi contraseña”, al momento de pinchar ahí, te solicitará tu nombre de usuario y por medio de un correo electrónico que te enviaremos podrás iniciar el proceso para volver a ingresar a nuestro sitio.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </main>
      <br /><br />

      {/* Footer fijo al fondo */}
      <FooterTerapeuta />
    </div>
  );
};
