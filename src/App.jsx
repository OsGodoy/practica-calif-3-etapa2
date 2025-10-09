import React, { useState } from "react";
import "@fontsource-variable/nunito";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Route, Routes, useLocation } from "react-router-dom";
import Features from "./pages/Features";
import Details from "./pages/Details";
import Proyects from "./pages/Proyects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import MainLayouts from "./layouts/MainLayouts";
import ToggleNavetagorContext from "./contexts/ToggleNavetagorContext";
import ModalNavegator from "./components/ModalNavegator";

// Importamos Framer Motion
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [isToggleNavegator, setIsToggleNavegator] = useState(false);
  const location = useLocation();

  // Variantes de animación para todas las páginas
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <>
      <ToggleNavetagorContext.Provider value={isToggleNavegator}>
        <main
          className="min-h-screen flex flex-col justify-between"
          style={{ fontFamily: "Nunito Variable, sans-serif" }}
        >
          <ModalNavegator setIsToggleNavegator={setIsToggleNavegator} />

          {/* AnimatePresence detecta los cambios de ruta */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                element={
                  <MainLayouts setIsToggleNavegator={setIsToggleNavegator} />
                }
              >
                <Route
                  path="/"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <Home />
                    </motion.div>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <Services />
                    </motion.div>
                  }
                />
                <Route
                  path="/features"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <Features />
                    </motion.div>
                  }
                />
                <Route
                  path="/details"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <Details />
                    </motion.div>
                  }
                />
                <Route
                  path="/proyects"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <Proyects />
                    </motion.div>
                  }
                />
                <Route
                  path="/team"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <Team />
                    </motion.div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <motion.div
                      variants={pageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <Contact />
                    </motion.div>
                  }
                />
              </Route>
            </Routes>
          </AnimatePresence>
        </main>
      </ToggleNavetagorContext.Provider>
    </>
  );
}
