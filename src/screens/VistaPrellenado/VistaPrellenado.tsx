import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import { Button } from "../../components/ui/button";
import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { ConsultationReasonSection } from "./sections/ConsultationReasonSection/ConsultationReasonSection";
import { AIQuestionSection } from "./sections/AIQuestionSection/AIQuestionSection";
import { MedicalHistorySection } from "./sections/MedicalHistorySection/MedicalHistorySection";
import { SymptomsSection } from "./sections/SymptomsSection/SymptomsSection";
import { TemperatureSymptomsSection } from "./sections/TemperatureSymptomsSection/TemperatureSymptomsSection";
import { DetailedSymptomsSection } from "./sections/DetailedSymptomsSection/DetailedSymptomsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { PersonalDataFormSection } from "./sections/PersonalDataFormSection/PersonalDataFormSection";
import { ProgressIndicatorSection } from "./sections/ProgressIndicatorSection/ProgressIndicatorSection";
import { SymptomsFormSection } from "./sections/SymptomsFormSection/SymptomsFormSection";
import { MenstruationSection } from "./sections/MenstruationSection/MenstruationSection";
import { MenstruationFormSection } from "./sections/MenstruationFormSection/MenstruationFormSection";
import { MenstruationAgeSection } from "./sections/MenstruationAgeSection/MenstruationAgeSection";
import { MenstrualPainSection } from "./sections/MenstrualPainSection/MenstrualPainSection";
import { PregnancySection } from "./sections/PregnancySection/PregnancySection";
import { MenopauseSection } from "./sections/MenopauseSection/MenopauseSection";
import { PainMappingSection } from "./sections/PainMappingSection/PainMappingSection";
import { DetailedPainMappingSection } from "./sections/DetailedPainMappingSection/DetailedPainMappingSection";
import { MedicalExamsSection } from "./sections/MedicalExamsSection/MedicalExamsSection";
import { ConfirmationSection } from "./sections/ConfirmationSection/ConfirmationSection";

export const VistaPrellenado = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [temperatureAnswer, setTemperatureAnswer] = useState<string>("");
  const [menstruationAnswer, setMenstruationAnswer] = useState<string>("");
  const [menstruationEverAnswer, setMenstruationEverAnswer] = useState<string>("");
  const [lastMenstruationTiming, setLastMenstruationTiming] = useState<string>("");
  const [pregnancyReason, setPregnancyReason] = useState<string>("");
  const [showDetailedPainMapping, setShowDetailedPainMapping] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev === 9) {
        if (lastMenstruationTiming === "less-than-1-month" || lastMenstruationTiming === "1-3-months") {
          return 10;
        }
        if (lastMenstruationTiming === "more-than-3-months") {
          if (pregnancyReason !== "") return 12;
          return prev;
        }
      }
      if (prev === 7 && !shouldShowMenstruationSection()) return prev + 1;
      if (prev === 8 && menstruationAnswer === "si") return prev + 1;
      if (prev === 8 && menstruationAnswer === "no") return prev + 2;
      return prev + 1;
    });
  };

  const handleBack = () => {
    setCurrentStep((prev) => {
      if (prev === 12) {
        if (lastMenstruationTiming === "more-than-3-months") return 9;
        if (lastMenstruationTiming === "less-than-1-month" || lastMenstruationTiming === "1-3-months") return 11;
      }
      if (prev === 13 && shouldShowMenstruationSection() && menstruationEverAnswer === "no") return 8;
      if (prev === 8 && !shouldShowMenstruationSection()) return prev - 1;
      return prev - 1;
    });
  };

  const shouldShowPregnancySection = () =>
    lastMenstruationTiming === "more-than-3-months" && pregnancyReason === "pregnancy";

  const shouldShowMenopauseSection = () =>
    lastMenstruationTiming === "more-than-3-months" && pregnancyReason === "menopause";

  const shouldShowPainMappingSection = () => {
    if (currentStep === 8 && !shouldShowMenstruationSection()) return true;
    if (currentStep === 13 && shouldShowMenstruationSection() && menstruationEverAnswer === "no") return true;
    if (
      currentStep === 12 &&
      shouldShowMenstruationSection() &&
      menstruationEverAnswer === "si" &&
      lastMenstruationTiming === "more-than-3-months" &&
      pregnancyReason !== "pregnancy" &&
      pregnancyReason !== "menopause" &&
      pregnancyReason !== ""
    )
      return true;
    if (currentStep === 13 && (shouldShowPregnancySection() || shouldShowMenopauseSection())) return true;
    return false;
  };

  const shouldShowMenstruationSection = () =>
    selectedGender &&
    ["femenino", "no-binario", "transmasculino", "otro", "prefiero-no-informar"].includes(selectedGender);

  const shouldShowNextButton = () => {
    if (currentStep === 5) return temperatureAnswer === "si";
    if (currentStep === 8 && shouldShowMenstruationSection()) return false;
    return true;
  };

  const handleTemperatureAutoAdvance = () => setCurrentStep((prev) => prev + 1);
  const handleTemperatureAnswerChange = (answer: string) => setTemperatureAnswer(answer);
  const handleMenstruationAnswerChange = (answer: string) => setMenstruationAnswer(answer);

  const handleMenstruationEverAnswerChange = (answer: string) => {
    setMenstruationEverAnswer(answer);
    setTimeout(() => {
      setCurrentStep(answer === "si" ? 9 : 13);
    }, 300);
  };

  const handleMenstruationDataChange = (timing: string, reason: string) => {
    setLastMenstruationTiming(timing);
    setPregnancyReason(reason);
  };

  const handlePainMappingImageClick = () => setShowDetailedPainMapping(true);
  const handleBackToMainPainMapping = () => setShowDetailedPainMapping(false);

  const handleMarkMorePains = () => {
    if (currentStep === 14) {
      if (!shouldShowMenstruationSection()) setCurrentStep(8);
      else if (menstruationEverAnswer === "no") setCurrentStep(13);
      else setCurrentStep(12);
    }
    setShowDetailedPainMapping(false);
  };

  const handleDetailedPainNext = () => {
    setShowDetailedPainMapping(false);
    setCurrentStep(14);
  };

  const handleDetailedPainBack = () => {
    setShowDetailedPainMapping(false);
    if (currentStep === 14) {
      if (!shouldShowMenstruationSection()) setCurrentStep(8);
      else if (menstruationEverAnswer === "no") setCurrentStep(13);
      else setCurrentStep(12);
    }
  };

  if (showDetailedPainMapping) {
    return (
      <div className="relative min-h-screen w-full bg-primary-50">
        <TopNav isPrefilledView />
        <DetailedPainMappingSection
          onBack={handleDetailedPainBack}
          onMarkMorePains={handleMarkMorePains}
          onNext={currentStep === 14 ? () => setCurrentStep(14) : handleDetailedPainNext}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-primary-50">
      <TopNav isPrefilledView />

      {/* Botones superiores: idioma y menú */}
      {/* ... puedes dejar tu lógica de botones aquí ... */}

      <div className="flex w-full items-start justify-center bg-primary-50">
        <div className="flex flex-col w-full max-w-[780px] items-center gap-12 pt-24 pb-16 px-16 relative">
          <ProgressIndicatorSection currentStep={currentStep} />
          {currentStep === 0 && <PersonalDataFormSection onGenderChange={setSelectedGender} />}
          {currentStep === 1 && <ConsultationReasonSection />}
          {currentStep === 2 && <AIQuestionSection />}
          {currentStep === 3 && <MedicalHistorySection selectedGender={selectedGender} />}
          {currentStep === 4 && <SymptomsSection />}
          {currentStep === 5 && (
            <TemperatureSymptomsSection
              onAutoAdvance={handleTemperatureAutoAdvance}
              onAnswerChange={handleTemperatureAnswerChange}
            />
          )}
          {currentStep === 6 && <DetailedSymptomsSection />}
          {currentStep === 7 && <SymptomsFormSection />}
          {currentStep === 8 && shouldShowMenstruationSection() && (
            <MenstruationSection onAnswerChange={handleMenstruationEverAnswerChange} onBack={handleBack} />
          )}
          {currentStep === 9 && menstruationEverAnswer === "si" && (
            <MenstruationAgeSection onDataChange={handleMenstruationDataChange} />
          )}
          {currentStep === 10 && <MenstruationFormSection />}
          {currentStep === 11 && <MenstrualPainSection />}
          {currentStep === 12 && shouldShowPregnancySection() && (
            <PregnancySection onBack={handleBack} onNext={handleNext} />
          )}
          {currentStep === 12 && shouldShowMenopauseSection() && (
            <MenopauseSection onBack={handleBack} onNext={handleNext} />
          )}
          {currentStep === 12 && !shouldShowPregnancySection() && !shouldShowMenopauseSection() && (
            <PainMappingSection onImageClick={handlePainMappingImageClick} onBack={handleBack} />
          )}
          {currentStep === 8 && !shouldShowMenstruationSection() && (
            <PainMappingSection onImageClick={handlePainMappingImageClick} onBack={handleBack} />
          )}
          {currentStep === 13 && shouldShowPainMappingSection() && (
            <PainMappingSection onImageClick={handlePainMappingImageClick} onBack={handleBack} />
          )}
          {currentStep === 14 && <MedicalExamsSection />}
          {currentStep === 15 && <ConfirmationSection />}
          {![8, 12, 13, 14, 15].includes(currentStep) && (
            <ActionButtonsSection onNext={handleNext} onBack={handleBack} currentStep={currentStep} showNextButton={shouldShowNextButton()} />
          )}
          {currentStep === 14 && !showDetailedPainMapping && (
            <ActionButtonsSection
              onNext={handleNext}
              onBack={() => setShowDetailedPainMapping(true)}
              currentStep={currentStep}
              showNextButton={true}
            />
          )}

        </div>
      </div>
    </div>
  );
};
