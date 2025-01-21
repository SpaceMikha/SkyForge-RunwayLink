import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./routes/LandingPage";
import AirportSelection from "./routes/AirportSelection";
import CallsignInput from "./routes/CallsignInput";
import GateAssignment from "./routes/GateAssignment";
import About from "./routes/About";
import Changelog from "./routes/Changelog";
import Products from "./routes/Products";
import Join from "./routes/Join";
import SkyForgeLanding from "./routes/SkyForge";
import UnderDevelopment from "./routes/development";

import { useEffect } from "react";

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <RoutesWithTransition />
      </AnimatePresence>
    </Router>
  );
}

function RoutesWithTransition() {
  const location = useLocation();

  useEffect(() => {
    document.title = "SkyForge"; 
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute("href", "/sflogo.png"); 
    }
  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<SkyForgeLanding />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/select-airport" element={<AirportSelection />} />
      <Route path="/callsigninput" element={<CallsignInput />} />
      <Route path="/gate-assignment" element={<GateAssignment />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/products" element={<Products />} />
      <Route path="/join" element={<Join />} />
      <Route path="/about" element={<About />} />
      <Route path="/skyforge" element={<SkyForgeLanding />} />
      <Route path="/development" element={<UnderDevelopment />} />

    </Routes>
  );
}
