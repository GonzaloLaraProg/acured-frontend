import React from "react";
import { Footer } from "../../components/Footer";
import TopNav from "../../components/TopNav";
import { MainContentSection } from "./sections/MainContentSection";

export const ConfirmationPayment = (): JSX.Element => {

  return (
    <>
      <TopNav isPrefilledView />
      <div className="relative w-full bg-white overflow-hidden">
      
      <div className="w-full relative z-10 bg-white">
        <div className="flex flex-col w-full items-center relative bg-white">
          <MainContentSection />
          <Footer />
        </div>
      </div>
    </div>

    </>
  );
};