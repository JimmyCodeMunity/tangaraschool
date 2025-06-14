import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import { AnimatedSection } from "../components/AnimatedSection";
import StickyNavbar from "../components/StickyNav";

const AboutusPage = () => {
  const navcolor = "bg-black";
  return (
    <div>
      <div className="w-full bg-black">
        <Banner />
        <AnimatedSection trans="easeIn">
          <Navbar navcolor={navcolor} />
        </AnimatedSection>
        <StickyNavbar/>
      </div>
      {/* <AnimatedSection trans="easeIn"> */}
        <About />
      {/* </AnimatedSection> */}
      <Footer />
    </div>
  );
};

export default AboutusPage;
