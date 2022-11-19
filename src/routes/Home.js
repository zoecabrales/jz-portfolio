import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/Home/HeroImg";
import Footer from "../components/Footer/Footer";
import Work from "../components/data/Work";
import About from "../components/About/AboutContent";
import WorkExp from "../components/Cards/ExpCard/ExpCard";

const Home = ({ heading, text }) => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <About />
      <WorkExp
        heading="Work Experiences"
        text="Professional career highlights"
      />
      <Footer />
    </div>
  );
};

export default Home;
