import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface EmailVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerificationComplete: () => void;
}

export const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerificationComplete,
}) => {
  const [verificationCode, setVerificationCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(180); // 5 minutes in seconds

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleConfirm = () => {
    onVerificationComplete();
  };

  const handleResendCode = () => {
    setTimeLeft(180); // Reset timer
    setVerificationCode(["", "", "", "", "", ""]); // Clear code
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[40] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[400px] mx-4 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-normal text-primary-900 mb-6">
            Código de verificación
          </h2>
          
          {/* Code input boxes */}
          <div className="flex justify-center gap-3 mb-6">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                maxLength={1}
              />
            ))}
          </div>

          {/* Timer */}
          <div className="text-sm text-gray-600 mb-4">
            {formatTime(timeLeft)}
          </div>

          {/* Resend link */}
          <div className="text-center mb-6">
            <span className="text-sm text-gray-600">Si aún no has recibido el código</span>
            <br />
            <span className="text-sm text-gray-600">en tu correo </span>
            <button 
              onClick={handleResendCode}
              className="text-sm text-primary-900 underline hover:no-underline"
            >
              ¡Haz click aquí!
            </button>
          </div>

          {/* Confirm button */}
          <Button 
            className="px-6 py-2 bg-primary-900 text-white rounded-3xl hover:bg-primary-800 flex items-center gap-2 mx-auto"
            onClick={handleConfirm}
            disabled={verificationCode.some(digit => !digit)}
          >
            <span>Confirmar</span>
            <span>→</span>
          </Button>
        </div>
      </div>
    </div>
  );
};