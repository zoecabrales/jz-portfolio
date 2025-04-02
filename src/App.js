import React from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import WorkExp from "./routes/WorkExp";
import Certs from "./routes/Certs";

import "./index.css";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/work" element={<WorkExp />} />
        <Route path="/certifications" element={<Certs />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
