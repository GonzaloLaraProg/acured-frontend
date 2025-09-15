// src/layouts/WithTopNav.tsx
import * as React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav"; // 👈 ajusta la ruta si es distinta

export default function WithTopNav() {
  return (
    <>
      <TopNav />
      {/* Empuja contenido para no quedar debajo del navbar */}
      <main className="pt-[0px]">
        <Outlet />
      </main>
    </>
  );
}

