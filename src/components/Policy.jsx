import React from "react";

const services = [
  {
    title: "Daycare & Playgroup (2 – 4 years).",
    description: [
      "Our program is tailored to provide each of these children with safe nurturing environment which stimulates learning. The caregivers actively chart the development of each individual child and give feedback to parents regarding personal care.We focus on development of gross and fine motor skills for children in this stage.We also introduce children to the concept of play in preparation for transition to the pre-primary school program. Simple art, math and literacy skills are introduced at this phase as well. Individual attention is offered to each child to ensure they get right level instructions.",
    ],
    image: "../images/outside.jpg",
  },
  {
    title: "Pre – Primary & Primary School",
    description: [
      "The newly introduced Competence Based Curriculum (CBC) introduces learning concepts like literacy, critical thinking skills, mathematics, arts & crafts and music.Children begin to learn the art of reading and writing. In addition, we introduce a foreign language, ICT, life skills, chores and community service components in our learning methods to ensure a holistic experience for the learners.Parents and teacher conferences and open exhibition days enable parents keep tab of their children academic and co-curricular progress.This is suitable for children aged between 4 – 9 years but other factors may alter the age bracket.The learning concepts for Grade 4-6 are physical and health education, mathematics, indigenous and foreign languages, science and technology, home science and agriculture, art, craft and music.It is aimed at preparing students for specialization and branching into the specific careers subjects at the Junior secondary level. Learners in this phase are introduced to more complex experiences to become problem solvers, thinkers and innovators in their own capacity.",
    ],
    image: "../images/mass.jpg",
  },
  {
    title: "Talent Academy & Digital Skills",
    description: [
      "Our talent program is accessible both at our facility and at the community level and consists of chess, musical instruments, dance, martial arts. It also integrates both indoor and outdoor games (table and lawn tennis, track and ball games).Digital skills and coding is a major part of our learning and it helps the learners adopt new learning methodologies and introduce them to global issues.",
    ],
    image: "../images/comp.jpg",
  },
  {
    title: "Sustainable Development Goals (SDGs) & Innovative Projects",
    description: [
      "Our school undertakes child centered innovative projects designed around the SDGs aimed at familiarizing them with both local and global challenges and helping them develop solutions as an insight into the world they hope to create.Every school term, the facilitators adopt a different theme and guide their learners to come up with a project creating goals and solution contributing to the development goals. We especially focus on those that affect the children directly which are; Goal 1; No poverty; Goal 2: Zero Hunger: Goal 3: Good Health and wellbeing; Goal 4: Quality Education; Goal 5; Gender equality; Goal: Clean Water & Sanitation; and Goal 13: Climate change.",
    ],
    image: "../images/sport.jpg",
  },
];

const Policy = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      <div className="w-full sm:py-16 py-6 flex-col justify-start items-center gap-2.5 flex">
        <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
          Admission Policy
        </h2>
      </div>
      {services.map((service, index) => (
        <div key={index} className="relative">
          <div
            className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8 ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div
              className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-7xl lg:py-16 lg:px-0 ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-black">
                    {service.title}
                  </h2>
                  <ul className="mt-4 text-lg text-neutral-500 list-disc pl-5">
                    {service.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div
                className={`${
                  index % 2 === 1 ? " pr-6 md:-ml-16" : " pl-6 md:-mr-2"
                } lg:relative lg:m-0 lg:h-full lg:px-0`}
              >
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className={`w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute ${
                    index % 2 === 1 ? "lg:right-0" : "lg:left-0"
                  } lg:h-full object-cover`}
                  src={service.image}
                  alt={service.title}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policy;
