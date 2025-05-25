import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatedSection } from "../components/AnimatedSection";
import HowTo from "../components/HowTo";
import Policy from "../components/Policy";
import StickyNavbar from "../components/StickyNav";

const AdmissionPage = () => {
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
      <HowTo/>
      <Policy/>
      <Footer />
    </div>
  );
};

export default AdmissionPage;
