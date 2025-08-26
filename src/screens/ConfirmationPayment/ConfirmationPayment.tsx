import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";

export const ConfirmationPayment = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { text: "Agenda tu hora", active: true },
    { text: "Planes", active: false },
    { text: "Demo gratis", active: false },
  ];

  return (
    <div className="relative w-full bg-primary-50 overflow-hidden">
      <NavigationMenu className="fixed top-[29px] left-1/2 transform -translate-x-1/2 bg-primary-50 rounded-[32px] border border-solid border-[#d3e0d7] shadow-shadow-sm backdrop-blur-[5.85px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.85px)_brightness(100%)] z-50">
        <NavigationMenuList className="flex items-center gap-2.5 pl-3 pr-0 py-0">
          <NavigationMenuItem>
            <Link
              className="relative w-[92px] h-[21px] bg-[url(/acured-logo-1.png)] bg-cover bg-[50%_50%] block"
              to="/"
            />
          </NavigationMenuItem>

          <NavigationMenuItem className="inline-flex items-center gap-2 pl-0.5 pr-1 py-0.5 rounded-[40px]">
            <div className="inline-flex items-center">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`inline-flex items-center justify-center gap-1 px-4 py-2 rounded-[25px] ${
                    item.active ? "bg-primary-50" : "bg-shadow-50"
                  }`}
                >
                  <span
                    className={`[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-lg ${
                      item.active ? "text-primary-900" : "text-shadow-900"
                    }`}
                  >
                    {item.text}
                  </span>
                </Button>
              ))}
            </div>

            <Button className="inline-flex flex-col justify-center gap-4 px-4 py-2 bg-primary-900 items-center rounded-3xl">
              <Link to="/therapist-dashboard" className="text-decoration-none">
              <span className="[font-family:'Neue_Haas_Grotesk_Display_Pro-65Md',Helvetica] font-normal text-neutralswhite text-lg leading-[normal] whitespace-nowrap">
                Eres terapeuta
              </span>
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="w-full relative z-10">
        <div className="flex flex-col w-full items-center relative">
          <MainContentSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};