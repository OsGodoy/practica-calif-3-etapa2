import React from "react";
import "@fontsource-variable/nunito";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import Details from "./pages/Details";
import Proyects from "./pages/Proyects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import MainLayouts from "./layouts/MainLayouts";

export default function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-between"
      style={{fontFamily: "Nunito Variable, sans-serif"}}>
        <Routes>
          <Route element={<MainLayouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/features" element={<Features />} />
            <Route path="/details" element={<Details />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
