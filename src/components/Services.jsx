import React from "react";

const Services = () => {
  return (
    <div>
      <section class="py-10 relative bg-white">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full flex-col justify-start items-center lg:gap-11 gap-8 inline-flex">
            <div class="w-full flex-col justify-start items-center gap-2.5 flex">
              <h2 class="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Services
              </h2>
              
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="">
                    <img
                      src="../images/education.png"
                      className="h-12 w-12"
                      alt=""
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Education Programs
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    Holistic education programs in an academic, talents and technology rich environment.
                  </p>
                </div>
              </div>
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="">
                    <img
                      src="../images/tour-guide.png"
                      alt=""
                      className="h-12 w-12"
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Guidance
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    We delight in guiding children to become successful life-long learners, thinkers, innovators and responsible.{" "}
                  </p>
                </div>
              </div>
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="">
                    <img
                      src="../images/humility.png"
                      alt=""
                      className="w-12 h-12"
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Humility & Appreciation
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    Our students are well-prepared to thrive in with humility and an appreciation of social responsibility..
                  </p>
                </div>
              </div>
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="" class="w-10 h-10 flex items-center justify-center">
                    <img
                      src="../images/solution.png"
                      alt=""
                      className="h-12 w-12"
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Empower & Inspire
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    Our teachers demonstrate unwavering determination to empower and inspire their students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
