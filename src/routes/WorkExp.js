import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeroImg2 from "../components/Project/HeroImg2";
import ExpCard from "../components/Cards/ExpCard/ExpCard";

const WorkExp = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="WORK EXP"
        text="Listed below are some of my Professional Career highlights as a Frontend Developer"
      />
      <ExpCard />
      <Footer />
    </div>
  );
};

export default WorkExp;
