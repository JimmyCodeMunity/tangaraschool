import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import GetApp from "../components/GetApp";
import Subscribe from "../components/Subscribe";
import Stats from "../components/Stats";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Team from "../components/Team";
import Programs from "../components/Programs";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import { AnimatedSection } from "../components/AnimatedSection";
import WhyUs from "../components/WhyUs";
import StickyNavbar from "../components/StickyNav";

const HomePage = () => {
  const navcolor = "bg-transparent";
  return (
    <div>
      <div id="hero" className="">
        <div className="cover">
          <Banner />
          <AnimatedSection trans="easeIn">
            <Navbar navcolor={navcolor} />
          </AnimatedSection>
            <StickyNavbar navcolor={navcolor} />

          <Hero />

          {/* <Partners/> */}
          {/* <Stats /> */}
          <AnimatedSection trans="easeIn">
            <Services />
          </AnimatedSection>
          <AnimatedSection trans="easeIn">
            <WhyUs />
          </AnimatedSection>

          <AnimatedSection trans="easeOut">
            <Testimonials />
          </AnimatedSection>

          <AnimatedSection trans="easeIn">
            <Stats />
          </AnimatedSection>

          <AnimatedSection trans="easeIn">
            <Faq />
          </AnimatedSection>

          {/* <AnimatedSection trans="easeOut">
            <GetApp />
          </AnimatedSection> */}

          <Subscribe />
          <AnimatedSection trans="easeOut">
            <ContactUs />
          </AnimatedSection>
          <Footer />
        </div>
        <div className="md:hidden absolute bottom-10 right-5">
          <a
            target="_blank"
            href="https://wa.me/+254705279373?text=I'm%20interested%20in%20your%20car%20for%20sale"
            className="text-white flex items-center flex-row"
          >
            <img src="../images/whatsapp.png" alt="" className="h-14 w-14" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
