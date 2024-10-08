import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/Project/HeroImg2";
import Work from "../components/data/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="PROJECTS"
        text="I will be posting some of my personal projects soon..."
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
