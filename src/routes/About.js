import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/Project/HeroImg2";
import AboutContent from "../components/About/AboutContent";
import CertCard from "../components/Cards/CertCard/CertCard";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I'm a friendly Front End Developer." />
      <AboutContent />
      <CertCard />
      <Footer />
    </div>
  );
};

export default About;
