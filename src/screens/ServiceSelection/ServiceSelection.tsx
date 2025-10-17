import React from "react";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { MainContentSection } from "./sections/MainContentSection";

export const ServiceSelection = (): JSX.Element => {


  return (
    <>
      <TopNav />
      <div className="relative w-full bg-primary-50 overflow-hidden">
      
      <div className="w-full relative z-10">
        <div className="flex flex-col w-full items-center relative">
          <MainContentSection />
          <Footer />
        </div>
      </div>
    </div>

    </>
  );
};