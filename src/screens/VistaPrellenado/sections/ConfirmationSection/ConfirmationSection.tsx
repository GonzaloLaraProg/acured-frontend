import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ConfirmationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
      <Card className="w-[780px] h-[313px] bg-white rounded-lg shadow-shadow-sm">
        <CardContent className="flex flex-col items-center justify-center gap-8 p-6 h-full">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-primary-900 text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
              ¡Listo! muchas gracias por responder.
            </h1>
          </div>

          <div className="flex items-start gap-2.5">
            <Button className="h-auto justify-center px-4 py-2 bg-primary-900 rounded-3xl">
              <div className="gap-1 flex items-center">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-neutralswhite text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Confirmar y pagar
                </span>
                <ChevronRightIcon className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};