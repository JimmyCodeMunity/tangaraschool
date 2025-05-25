import React from "react";

const services = [
  {
    title: "Parental enrichment programs",
    description: [
      "Parents play an integral role in the education of their children. The school organizes termly enrichment programs to help them become active participants in the progress of their children as well as well as equip them with tools and skills to build positive relationships with the school and their children and support character and good values",
    ],
    image: "../images/tangara-30.jpg",
  },
  {
    title: "After school and Weekend programs (Children from 3 – 11 years)",
    description: [
      "Our after school and weekend programs provide care before and after school. We provide a variety of enrichment and fun activities which include physical fitness, games, stories, arts & crafts, cooking and music. In special instances we will have homework help and literacy programs running during the weekend program.",
      
    ],
    image: "../images/tangara-40.jpg",
  },
  {
    title: "Holiday camps",
    description: [
      "Holiday camps allow children to explore a variety of interests and talents. These give an opportunity to children to receive care during school holidays and have fun exploring both indoor and outdoor activities. The activities    will enable children to identify, explore and hone their skills and talents in preparation for   their specified fields of interest as well as gain life skills. The holiday activities include; indoor sports, computer coding for children, table games, homemaking and cookery, art and crafts, public speaking, rites of passage experiences, martial arts and music.",
      
    ],
    image:
      "../images/tangara-50.jpg",
  },
  
];

const Programs = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 space-y-24">
      <div className="w-full sm:py-16 py-6 flex-col justify-start items-center gap-2.5 flex">
        <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
          Community Outreach Programs
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
                  } lg:h-full lg:w-auto lg:max-w-none`}
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

export default Programs;
