import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  // Data for the two paragraph columns
  const paragraphs = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 w-full">
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <img
                className="w-[680px] h-[653px] object-cover rounded-[24px]"
                alt="Close up hand holding acupuncture needle"
                src="/close-up-hand-holding-acupuncture-needle-1.png"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between gap-8">
              <h2 className="font-['Neue_Haas_Grotesk_Display_Pro-55Rg',Helvetica] text-primary-900 text-4xl md:text-5xl leading-tight md:leading-[60px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam
              </h2>

              <div className="flex flex-col md:flex-row items-start gap-4 pr-3">
                {paragraphs.map((paragraph, index) => (
                  <div
                    key={index}
                    className="font-paragraph-p3 text-black text-[length:var(--paragraph-p3-font-size)] leading-[var(--paragraph-p3-line-height)] font-[number:var(--paragraph-p3-font-weight)] tracking-[var(--paragraph-p3-letter-spacing)] [font-style:var(--paragraph-p3-font-style)] md:w-[208px]"
                  >
                    {paragraph.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
