import { ChevronLeftIcon, ChevronRightIcon, UploadIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const PatientForm = (): JSX.Element => {
  const [currentStep, setCurrentStep] = React.useState(0);

  // Breadcrumb steps data
  const breadcrumbSteps = [
    { label: "Selección Servicio", active: false },
    { label: "Información General", active: currentStep === 0 },
    { label: "Historial médico", active: currentStep === 1 || currentStep === 2 || currentStep === 3 || currentStep === 4 },
  ];

  // Form fields data for step 1
  const formFields = [
    { label: "Nombre", placeholder: "" },
    { label: "Rut", placeholder: "" },
    { label: "Edad", placeholder: "" },
    { label: "Género", placeholder: "" },
    { label: "Ocupación", placeholder: "" },
    { label: "Contacto de emergencia", placeholder: "" },
    { label: "Teléfono (Contacto de emergencia)", placeholder: "" },
  ];

  // Medical questions for step 2
  const medicalQuestions = [
    "¿Presentas alguna cirugía?",
    "Eres usuario de marcapasos?",
    "Tienes alguna prótesis o placa metálica?",
    "Tomas algún medicamento regularmente?",
  ];

  // Medical conditions for step 2
  const medicalConditions = [
    { name: "Prematurez", column: 1 },
    { name: "Alergias", column: 1 },
    { name: "Anemia", column: 1 },
    { name: "Artritis/artrosis", column: 1 },
    { name: "Fibromialgia", column: 1 },
    { name: "Asma", column: 1 },
    { name: "Cáncer", column: 1 },
    { name: "Hipertensión", column: 1 },
    { name: "Hipotensión", column: 2 },
    { name: "Desmayos", column: 2 },
    { name: "Diabetes", column: 2 },
    { name: "VIH/Sida", column: 2 },
    { name: "Hemofilia", column: 2 },
    { name: "Trombosis", column: 2 },
    { name: "Hipertiroidismo", column: 2 },
    { name: "Hipotiroidismo", column: 2 },
    { name: "Enfermedad coronaria", column: 3 },
    { name: "Enfermedad autoinmune", column: 3 },
    { name: "Enfermedad neurológica", column: 3 },
    { name: "Problemas reproductivos", column: 3 },
    { name: "Problemas de coagulación", column: 3 },
  ];
  const [hasMenstruated, setHasMenstruated] = React.useState<string>("");

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderPersonalDataStep = () => (
    <>
      {/* Title */}
      <h1 className="text-3xl font-normal text-primary-900 mb-12 text-center">
        Necesitamos algunos datos personales
      </h1>

      {/* Form card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Datos personales
          </h2>

          <div className="space-y-6">
            {formFields.map((field, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="text-base font-medium text-primary-900">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next button */}
      <div className="flex justify-end w-full max-w-[600px] mt-8 mb-12">
        <Button 
          className="px-8 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          onClick={handleNext}
        >
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );

  const renderMedicalHistoryStep = () => (
    <>
      {/* Title */}
      <h1 className="text-3xl font-normal text-primary-900 mb-12 text-center">
        Cuéntanos más de ti
      </h1>

      {/* Medical Questions Card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Antecedentes médicos
          </h2>

          <div className="space-y-6">
            {medicalQuestions.map((question, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label className="text-base font-medium text-primary-900">
                  {question}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medical Conditions Card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Antecedentes médicos
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              {medicalConditions.filter(condition => condition.column === 1).map((condition, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`condition-1-${index}`}
                    className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label 
                    htmlFor={`condition-1-${index}`}
                    className="text-sm font-medium text-primary-900"
                  >
                    {condition.name}
                  </label>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {medicalConditions.filter(condition => condition.column === 2).map((condition, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`condition-2-${index}`}
                    className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label 
                    htmlFor={`condition-2-${index}`}
                    className="text-sm font-medium text-primary-900"
                  >
                    {condition.name}
                  </label>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              {medicalConditions.filter(condition => condition.column === 3).map((condition, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`condition-3-${index}`}
                    className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label 
                    htmlFor={`condition-3-${index}`}
                    className="text-sm font-medium text-primary-900"
                  >
                    {condition.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Upload Card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Exámenes o imágenes relevantes para tu consulta
          </h2>

          <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
            <UploadIcon className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-base font-medium text-primary-900 mb-2">
              Haga clic para cargar o arrastre y suelte
            </p>
            <p className="text-sm text-gray-500">
              Tamaño máximo de archivo: 25 MB
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-[600px] mt-8 mb-12">
        <Button 
          variant="outline"
          className="px-8 py-3 bg-white text-primary-900 border border-gray-300 rounded-3xl hover:bg-gray-50"
          onClick={handleBack}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Atrás
          </span>
        </Button>

        <Button 
          className="px-8 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          onClick={handleNext}
        >
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );

  const renderConsultationReasonStep = () => (
    <>
      {/* Title */}
      <h1 className="text-3xl font-normal text-primary-900 mb-12 text-center">
        Cuéntanos más de ti
      </h1>

      {/* Consultation reason card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            ¿Cuál es tu motivo de consulta?
          </h2>

          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-primary-900">
              Motivo
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-primary-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-[600px] mt-8 mb-12">
        <Button 
          variant="outline"
          className="px-8 py-3 bg-white text-primary-900 border border-gray-300 rounded-3xl hover:bg-gray-50"
          onClick={handleBack}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Atrás
          </span>
        </Button>

        <Button 
          className="px-8 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          onClick={handleNext}
        >
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );

  const renderSymptomsStep = () => (
    <>
      {/* Title */}
      <h1 className="text-3xl font-normal text-primary-900 mb-12 text-center max-w-4xl">
        Marca sólo los síntomas que hayas sentido de manera<br />frecuente el último tiempo
      </h1>

      {/* Symptoms checklist card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="cansancio"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="cansancio" className="text-sm font-medium text-primary-900">
                  Cansancio
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="estres"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="estres" className="text-sm font-medium text-primary-900">
                  Estrés
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="irritabilidad"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="irritabilidad" className="text-sm font-medium text-primary-900">
                  Irritabilidad
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="depresion"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="depresion" className="text-sm font-medium text-primary-900">
                  Depresión
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="ansiedad"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="ansiedad" className="text-sm font-medium text-primary-900">
                  Ansiedad
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="mala-memoria"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="mala-memoria" className="text-sm font-medium text-primary-900">
                  Mala memoria
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="insomnio"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="insomnio" className="text-sm font-medium text-primary-900">
                  Insomnio
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="pesadillas"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="pesadillas" className="text-sm font-medium text-primary-900">
                  Pesadillas o sueños vívidos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="perdida-peso"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="perdida-peso" className="text-sm font-medium text-primary-900">
                  Pérdida de peso
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="aumento-peso"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="aumento-peso" className="text-sm font-medium text-primary-900">
                  Aumento de peso
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="sensacion-frio"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="sensacion-frio" className="text-sm font-medium text-primary-900">
                  Sensación de frío constante
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="exceso-sed"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="exceso-sed" className="text-sm font-medium text-primary-900">
                  Exceso de sed
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="sudor-espontaneo"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="sudor-espontaneo" className="text-sm font-medium text-primary-900">
                  Sudor espontáneo o excesivo
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="sudor-nocturno"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="sudor-nocturno" className="text-sm font-medium text-primary-900">
                  Sudor nocturno
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="sangrados"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="sangrados" className="text-sm font-medium text-primary-900">
                  Sangrados (nariz, encías, orina, etc)
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-[600px] mt-8 mb-12">
        <Button 
          variant="outline"
          className="px-8 py-3 bg-white text-primary-900 border border-gray-300 rounded-3xl hover:bg-gray-50"
          onClick={handleBack}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Atrás
          </span>
        </Button>

        <Button 
          className="px-8 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          onClick={handleNext}
        >
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );

  const renderSpecificSymptomsStep = () => (
    <>
      {/* Title */}
      <h1 className="text-3xl font-normal text-primary-900 mb-12 text-center">
        Marca sólo los síntomas frecuentes
      </h1>

      {/* Cabeza y rostro card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Cabeza y rostro
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-cabeza"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-cabeza" className="text-sm font-medium text-primary-900">
                  Dolor de cabeza
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="bruxismo"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="bruxismo" className="text-sm font-medium text-primary-900">
                  Bruxismo
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="mareos-vertigo"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="mareos-vertigo" className="text-sm font-medium text-primary-900">
                  Mareos / vértigo
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="problemas-vision"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="problemas-vision" className="text-sm font-medium text-primary-900">
                  Problemas de visión
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-ojos"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-ojos" className="text-sm font-medium text-primary-900">
                  Dolor de ojos
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="ojos-rojos"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="ojos-rojos" className="text-sm font-medium text-primary-900">
                  Ojos rojos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="problemas-audicion"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="problemas-audicion" className="text-sm font-medium text-primary-900">
                  Problemas de audición
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-oidos"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-oidos" className="text-sm font-medium text-primary-900">
                  Dolor de oídos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="pitido-zumbido"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="pitido-zumbido" className="text-sm font-medium text-primary-900">
                  Pitido o zumbido en oídos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="boca-garganta-secas"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="boca-garganta-secas" className="text-sm font-medium text-primary-900">
                  Boca o garganta secas
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="lesiones-labios"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="lesiones-labios" className="text-sm font-medium text-primary-900">
                  Lesiones en labios o lengua
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-garganta"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-garganta" className="text-sm font-medium text-primary-900">
                  Dolor de garganta
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tronco y extremidades card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Tronco y extremidades
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="pesadez-cuerpo"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="pesadez-cuerpo" className="text-sm font-medium text-primary-900">
                  Pesadez en el cuerpo
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="manos-frias"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="manos-frias" className="text-sm font-medium text-primary-900">
                  Manos frías
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="pies-frios"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="pies-frios" className="text-sm font-medium text-primary-900">
                  Pies fríos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hinchazon-manos"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="hinchazon-manos" className="text-sm font-medium text-primary-900">
                  Hinchazón/inflamación de manos
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hinchazon-pies"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="hinchazon-pies" className="text-sm font-medium text-primary-900">
                  Hinchazón/inflamación de pies o tobillos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolores-articulares"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolores-articulares" className="text-sm font-medium text-primary-900">
                  Dolores articulares
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-lumbar"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-lumbar" className="text-sm font-medium text-primary-900">
                  Dolor lumbar
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-debilidad-rodillas"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-debilidad-rodillas" className="text-sm font-medium text-primary-900">
                  Dolor o debilidad de rodillas
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="retencion-liquidos"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="retencion-liquidos" className="text-sm font-medium text-primary-900">
                  Retención de líquidos
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="calambres"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="calambres" className="text-sm font-medium text-primary-900">
                  Calambres
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="debilidad-perdida-fuerza"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="debilidad-perdida-fuerza" className="text-sm font-medium text-primary-900">
                  Debilidad o pérdida de fuerza
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="temblores"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="temblores" className="text-sm font-medium text-primary-900">
                  Temblores
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hormigueo"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="hormigueo" className="text-sm font-medium text-primary-900">
                  Hormigueo
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="varices"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="varices" className="text-sm font-medium text-primary-900">
                  Várices
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Piel cabello y uñas card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Piel cabello y uñas
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="acne"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="acne" className="text-sm font-medium text-primary-900">
                  Acné
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dermatitis"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dermatitis" className="text-sm font-medium text-primary-900">
                  Dermatitis
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="rosacea"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="rosacea" className="text-sm font-medium text-primary-900">
                  Rosácea
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="psoriasis"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="psoriasis" className="text-sm font-medium text-primary-900">
                  Psoriasis
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="piel-seca"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="piel-seca" className="text-sm font-medium text-primary-900">
                  Piel seca
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="picazon"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="picazon" className="text-sm font-medium text-primary-900">
                  Picazón
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="perdida-cabello"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="perdida-cabello" className="text-sm font-medium text-primary-900">
                  Pérdida de cabello
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="unas-fragiles"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="unas-fragiles" className="text-sm font-medium text-primary-900">
                  Uñas frágiles
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-[600px] mt-8 mb-12">
        <Button 
          variant="outline"
          className="px-8 py-3 bg-white text-primary-900 border border-gray-300 rounded-3xl hover:bg-gray-50"
          onClick={handleBack}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Atrás
          </span>
        </Button>

        <Button 
          className="px-8 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          onClick={handleNext}
        >
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );

  const renderRespiratoryAndOtherSymptomsStep = () => (
    <>
      {/* Title */}
      <h1 className="text-3xl font-normal text-primary-900 mb-12 text-center">
        Marca sólo los síntomas frecuentes
      </h1>

      {/* Respiratorio y cardiovascular card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Respiratorio y cardiovascular
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="tos"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="tos" className="text-sm font-medium text-primary-900">
                  Tos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="flema"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="flema" className="text-sm font-medium text-primary-900">
                  Flema
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="falta-aire"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="falta-aire" className="text-sm font-medium text-primary-900">
                  Falta de aire
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="asma"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="asma" className="text-sm font-medium text-primary-900">
                  Asma
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="opresion-pecho"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="opresion-pecho" className="text-sm font-medium text-primary-900">
                  Opresión de pecho
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="rinitis"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="rinitis" className="text-sm font-medium text-primary-900">
                  Rinitis
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="congestion-nasal"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="congestion-nasal" className="text-sm font-medium text-primary-900">
                  Congestión nasal
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="sinusitis"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="sinusitis" className="text-sm font-medium text-primary-900">
                  Sinusitis
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="alergia"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="alergia" className="text-sm font-medium text-primary-900">
                  Alergia
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="palpitaciones"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="palpitaciones" className="text-sm font-medium text-primary-900">
                  Palpitaciones
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-pecho"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-pecho" className="text-sm font-medium text-primary-900">
                  Dolor de pecho
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gastrointestinal card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Gastrointestinal
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="nauseas"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="nauseas" className="text-sm font-medium text-primary-900">
                  Náuseas
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="vomitos"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="vomitos" className="text-sm font-medium text-primary-900">
                  Vómitos
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="acidez"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="acidez" className="text-sm font-medium text-primary-900">
                  Acidez
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hipo"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="hipo" className="text-sm font-medium text-primary-900">
                  Hipo
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="flatulencia"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="flatulencia" className="text-sm font-medium text-primary-900">
                  Flatulencia
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-abdominal"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-abdominal" className="text-sm font-medium text-primary-900">
                  Dolor abdominal
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hinchazon-abdominal"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="hinchazon-abdominal" className="text-sm font-medium text-primary-900">
                  Hinchazón abdominal
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="estrenimiento"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="estrenimiento" className="text-sm font-medium text-primary-900">
                  Estreñimiento
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="heces-secas"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="heces-secas" className="text-sm font-medium text-primary-900">
                  Heces secas
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="diarrea"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="diarrea" className="text-sm font-medium text-primary-900">
                  Diarrea
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="heces-disgregadas"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="heces-disgregadas" className="text-sm font-medium text-primary-900">
                  Heces disgregadas
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hemorroides"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="hemorroides" className="text-sm font-medium text-primary-900">
                  Hemorroides
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Genitourinario card */}
      <Card className="w-full max-w-[600px] bg-white rounded-2xl shadow-lg mb-6">
        <CardContent className="p-8">
          <h2 className="text-xl font-semibold text-primary-900 mb-8 text-center">
            Genitourinario
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="orina-frecuente"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="orina-frecuente" className="text-sm font-medium text-primary-900">
                  Orina frecuente
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="orina-escasa"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="orina-escasa" className="text-sm font-medium text-primary-900">
                  Orina escasa
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="orina-concentrada"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="orina-concentrada" className="text-sm font-medium text-primary-900">
                  Orina concentrada
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dolor-orinar"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="dolor-orinar" className="text-sm font-medium text-primary-900">
                  Dolor al orinar
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="calculos-renales"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="calculos-renales" className="text-sm font-medium text-primary-900">
                  Cálculos renales
                </label>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="infecciones-urinarias"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="infecciones-urinarias" className="text-sm font-medium text-primary-900">
                  Infecciones urinarias
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="incontinencia-urinaria"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="incontinencia-urinaria" className="text-sm font-medium text-primary-900">
                  Incontinencia urinaria
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="hongos-genitales"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="hongos-genitales" className="text-sm font-medium text-primary-900">
                  Hongos genitales
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="picazon-genital"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="picazon-genital" className="text-sm font-medium text-primary-900">
                  Picazón genital
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="libido-disminuida"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="libido-disminuida" className="text-sm font-medium text-primary-900">
                  Libido disminuida
                </label>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="libido-aumentada"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="libido-aumentada" className="text-sm font-medium text-primary-900">
                  Libido aumentada
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="sequedad-genital"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="sequedad-genital" className="text-sm font-medium text-primary-900">
                  Sequedad genital
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="flujo-genital-excesivo"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="flujo-genital-excesivo" className="text-sm font-medium text-primary-900">
                  Flujo genital excesivo o anormal
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="problemas-sexuales"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="problemas-sexuales" className="text-sm font-medium text-primary-900">
                  Problemas sexuales
                </label>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="infecciones-transmision"
                  className="w-4 h-4 text-primary-900 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="infecciones-transmision" className="text-sm font-medium text-primary-900">
                  Infecciones de transmisión sexuales
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-[600px] mt-8 mb-12">
        <Button 
          variant="outline"
          className="px-8 py-3 bg-white text-primary-900 border border-gray-300 rounded-3xl hover:bg-gray-50"
          onClick={handleBack}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Atrás
          </span>
        </Button>

        <Button 
          className="px-8 py-3 bg-primary-900 text-white rounded-3xl hover:bg-primary-800"
          onClick={handleNext}
        >
          <span className="font-medium text-sm leading-5 [font-family:'Inter',Helvetica]">
            Siguiente
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );
  const renderMenstruationQuestionStep = () => {
    return (
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">
        <Card className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-200">
          <CardContent className="p-8">
            <h3 className="text-xl font-medium text-primary-900 text-center mb-8">
              ¿Has menstruado durante tu vida?
            </h3>
            
            <div className="flex items-center justify-center gap-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="menstruation"
                  value="si"
                  checked={hasMenstruated === "si"}
                  onChange={(e) => setHasMenstruated(e.target.value)}
                  className="w-4 h-4 text-primary-900 border-gray-300 focus:ring-primary-900"
                />
                <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                  Sí
                </span>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="menstruation"
                  value="no"
                  checked={hasMenstruated === "no"}
                  onChange={(e) => setHasMenstruated(e.target.value)}
                  className="w-4 h-4 text-primary-900 border-gray-300 focus:ring-primary-900"
                />
                <span className="font-paragraph-p3 font-[number:var(--paragraph-p3-font-weight)] text-primary-900 text-[length:var(--paragraph-p3-font-size)] tracking-[var(--paragraph-p3-letter-spacing)] leading-[var(--paragraph-p3-line-height)] [font-style:var(--paragraph-p3-font-style)]">
                  No
                </span>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Navigation buttons */}
        <div className="flex justify-between w-full max-w-2xl">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            className="flex items-center gap-2 px-6 py-2 text-primary-900 hover:bg-primary-100 rounded-3xl"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span className="font-medium text-sm">Atrás</span>
          </Button>

          <Button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 bg-primary-900 text-white hover:bg-primary-800 rounded-3xl"
          >
            <span className="font-medium text-sm">Siguiente</span>
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Breadcrumb */}
      <div className="flex items-center justify-center py-8 px-4">
        {breadcrumbSteps.map((step, index) => (
          <div key={`step-${index}`} className="flex items-center gap-1">
            <span className={`text-sm ${
                (step.label === "Información General" && currentStep === 1) || 
                (step.label === "Historial médico" && currentStep > 1) || 
                (step.label === "Selección Servicio" && currentStep === 0) ? "font-semibold" : ""
              } ${
                (step.label === "Historial médico" && currentStep > 1) || 
                (step.label === "Selección Servicio" && currentStep === 0) ? "" : "opacity-25"
              }`}
            >
              {step.label}
            </span>
            {index < breadcrumbSteps.length - 1 && (
              <ChevronRightIcon className={`w-4 h-4 text-shadow-800 ${
                  (step.label === "Información General" && currentStep === 1) || 
                  (step.label === "Historial médico" && currentStep > 1) || 
                  (step.label === "Selección Servicio" && currentStep === 0) ? "" : "opacity-25"
                }`} />
            )}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center px-4">
        {currentStep === 0 && renderPersonalDataStep()}
        {currentStep === 1 && renderMedicalHistoryStep()}
        {currentStep === 2 && renderConsultationReasonStep()}
        {currentStep === 3 && renderSymptomsStep()}
        {currentStep === 4 && renderSpecificSymptomsStep()}
        {currentStep === 5 && renderRespiratoryAndOtherSymptomsStep()}
        {currentStep === 6 && renderMenstruationQuestionStep()}
      </div>
    </div>
  );
};