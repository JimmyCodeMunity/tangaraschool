import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  // Observe the visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const section = document.querySelector("#stats-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Trigger the animation when the section is in view
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    } else {
      controls.start({ opacity: 0, scale: 0.5 });
    }
  }, [isInView, controls]);

  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "App Downloads",
    },
    {
      data: "1",
      title: "Country",
    },
    {
      data: "1M+",
      title: "People Helped",
    },
  ];

  return (
    <section id="stats-section" className="py-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controls}
          className="sm:hidden lg:block lg:max-w-xl"
        >
          <img
            src="../images/tangara.png"
            className="rounded-lg"
            alt="Therapy"
          />
        </motion.div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We do our best to make customers always happy
            </h3>
            <p className="mt-3 max-w-xl">
            "At Mentheal, we take pride in empowering our community through mental health awareness and personalized guidance.."
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx}>
                  <h4 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-amber-300 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
