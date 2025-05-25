import React from "react";
import ValueTabs from "./ValueTabs";

const About = () => {
  return (
    <div>
      <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                    About Tangara School
                  </h6>
                  <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      The Tale of Our Achievement Story
                    </h2>
                    <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Our achievement story is a testament to teamwork and
                      perseverance. Together, we've overcome challenges,
                      celebrated victories, and created a narrative of progress
                      and success.
                    </p>
                  </div>
                </div>
                <div class="w-full flex-col justify-center items-start gap-6 flex">
                  <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Our Motto
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">
                        Fostering innovation, creativity & talent to nurture a
                        million dreams.
                      </p>
                    </div>
                    <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Our Vision
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">
                        We envision a next generation of self-driven, innovative
                        and solution oriented individuals, responsible for own
                        actions to enable a life of health and wellness for self
                        and others..
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-1 grid-cols-1">
                    <div class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Our Mission
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">
                        To help children develop and flourish holistically in a
                        happy, supportive and secure environment and prepare
                        them to become productive, responsible and ethical
                        global citizens.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#more">
                <button class="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span class="px-1.5 text-blue-900 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                    Read More
                  </span>
                  <svg
                    class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                      stroke="#060331FF"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
              <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="../../images/enroll.jpg"
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features */}
      <div className="w-full mx-auto flex flex-col space-y-5 justify-center items-center max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">Values & Objectives</h2>
        </div>
        <ValueTabs />
      </div>

      {/* approach */}
      <section id="more" class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full">
              <img
                class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src="../images/team.jpg"
                alt="about Us image"
              />
            </div>
            <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Tangara Meaning
                </h2>
                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  ﻿Tangara also referred to as Tanager is a large genus of birds
                  of the Tanager family. This genus includes some of the most
                  spectacularly colored birds of the world known for their
                  beautifully colored feathers, with vivid combinations of reds,
                  oranges, yellows, blues, purples, blacks, and greens. Tanagers
                  are highly social and form large flocks as they forage
                  together from tree to tree while communicating in a series of
                  chatters, chirps and sweet lyrical calls. They portray
                  acrobatic abilities and energetic nature radiating a sense of
                  joy and liveliness in their forests homes. .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
