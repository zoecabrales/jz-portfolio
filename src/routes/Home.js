import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/Home/HeroImg";
import Footer from "../components/Footer/Footer";
import Work from "../components/data/Work";
import About from "../components/About/AboutContent"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
