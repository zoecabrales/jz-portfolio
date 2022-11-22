import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import HeroImg2 from "../components/Project/HeroImg2";
import CertCard from "../components/Cards/CertCard/CertCard";

const Certs = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="CERTIFICATES"
        text="Here are few of the UDEMY certifications I have acquired so far."
      />
      <CertCard heading="Certificates" />
      <Footer />
    </div>
  );
};

export default Certs;
