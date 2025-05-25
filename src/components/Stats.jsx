import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CircleX } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
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
              Welcome Once Again..
            </h3>
            <p className="mt-3 max-w-xl">
              "Thank you for your interest in our school. We are delighted to
              introduce to you, Tangara School Ruiru, a lovely home away from
              home for children offering great early years and Primary school
              education, extra curriculum activities and personal development
              initiatives that enhance individual and collective children
              growth. Our delight is to guide children to become successful
              life-long learners, thinkers, innovators and responsible global
              citizens by supporting and encouraging them to explore their
              potential and stimulate their curiosity. Our amiable school
              facilities designed creatively......"
            </p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("karibu").showModal()}
            >
              Read More
            </button>
            <dialog
              id="karibu"
              className="modal bg-black text-white w-[550px] rounded-xl p-4"
            >
              <div className="modal-box">
                <div className="absolute top-5 right-10">
                  <form method="dialog" className="modal-backdrop">
                    <button>
                      <CircleX size={30} color="white" />
                    </button>
                  </form>
                </div>
                <h3 className="font-bold text-lg text-green-500">Welcome</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
                <p className="text-white">
                  Thank you for your interest in our school. We are delighted to
                  introduce to you, Tangara School Ruiru, a lovely home away
                  from home for children offering great early years and Primary
                  school education, extra curriculum activities and personal
                  development initiatives that enhance individual and collective
                  children growth. Our delight is to guide children to become
                  successful life-long learners, thinkers, innovators and
                  responsible global citizens by supporting and encouraging them
                  to explore their potential and stimulate their curiosity. Our
                  amiable school facilities designed creatively to enable our
                  children to enjoy learning and develop interests and talents.
                  Being in a metropolitan area, we embrace an abundance of
                  cultures, traditions and celebrations to celebrate diversity
                  and inclusivity. We celebrate each child’s individual
                  uniqueness, potential, possibilities and capabilities and
                  support their intellectual, emotional and social growth and
                  development in all areas throughout their learning journey.
                  Since inception in 2022, we have enjoyed warm friendships and
                  collaborations from our Tangara parents and guardians,
                  financial supporters, private education trainers, the Ministry
                  of Education, our community members among other stakeholders.
                  Together, we have made remarkable progress in supporting the
                  Government efforts to improve the education outcomes in our
                  community. Our stakeholders have made contributions ranging
                  from support supervision, funding, and capacity building among
                  others; all in support of SDG 4 Inclusive education for all.
                  To all of you our friends, we say Asante sana. We extend this
                  call to you to collaborate with us by supporting our
                  individual programs or if a parent enrolling your child to be
                  part of this wholesome educational experience, which
                  identifies and nurtures a million dreams. Karibu, Winifred
                  Mutuku, Ms.
                </p>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
