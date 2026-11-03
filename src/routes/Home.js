import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/Home/HeroImg";
import Footer from "../components/Footer/Footer";
import About from "../components/About/AboutContent";
import Exp from "../components/data/Exp";
import MobileCardData from "../components/data/MobileCardData";
import WorkCardData from "../components/data/WorkCardData";
import WorkCard from "../components/Cards/WorkCard/WorkCard";
import YouTubeSection from "../components/YouTube/YouTubeSection";
import FigmaSection from "../components/Figma/FigmaSection";
import "../components/common/SectionHeadingStyles.css";

const FeaturedProjects = [...WorkCardData, ...MobileCardData];

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <section
        className="work-container"
        aria-labelledby="selected-projects-title"
      >
        <div className="section-container">
          <h2
            id="selected-projects-title"
            className="section-heading project-heading"
          >
            Selected Projects
          </h2>
          <p className="projects-intro">
            A selection of web and mobile projects I’ve built.
            <Link to="/project" className="projects-all-link">
              Explore all projects
            </Link>
          </p>
          <div className="project-container">
            {FeaturedProjects.map((item) => (
              <WorkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <About />
      <Exp />
      <YouTubeSection />
      <FigmaSection />
      <Footer />
    </div>
  );
};

export default Home;
