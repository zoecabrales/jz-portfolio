import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/Home/HeroImg";
import Footer from "../components/Footer/Footer";
import Work from "../components/data/Work";
import About from "../components/About/AboutContent";
import CertCard from "../components/Cards/CertCard/CertCard";
import Exp from "../components/data/Exp";

const Home = ({ heading, text }) => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Exp />
      <About />
      <CertCard />
      <Footer />
    </div>
  );
};

export default Home;
