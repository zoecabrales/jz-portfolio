import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/Home/HeroImg";
import Footer from "../components/Footer/Footer";
import Work from "../components/data/Work";
import About from "../components/About/AboutContent";
import CertCard from "../components/Cards/CertCard/CertCard";
import Exp from "../components/data/Exp";
import MobileCardData from "../components/data/MobileCardData";
import WorkCard from "../components/Cards/WorkCard/WorkCard";
import YouTubeSection from "../components/YouTube/YouTubeSection";
import FigmaSection from "../components/Figma/FigmaSection";
import "../components/common/SectionHeadingStyles.css";

const Home = ({ heading, text }) => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <About />
      <Exp />
      {/* Mobile Projects Section */}
      <div className="work-container">
        <div className="section-container">
          <h1 className="section-heading project-heading">Mobile Projects</h1>
          <div className="project-container">
            {MobileCardData.map((item, index) => (
              <WorkCard
                key={index}
                imgsrc={item.imgsrc}
                screenshots={item.screenshots}
                title={item.title}
                text={item.text}
                view={item.view}
                source={item.source}
                tools={item.tools}
                dep={item.dep}
              />
            ))}
          </div>
        </div>
      </div>
      <YouTubeSection />
      <FigmaSection />
      <Footer />
    </div>
  );
};

export default Home;
