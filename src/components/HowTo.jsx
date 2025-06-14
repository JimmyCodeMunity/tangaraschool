import { Check, Eye, MessageCircle } from "lucide-react";
import React from "react";

const HowTo = () => {
  return (
    <div className="sm:py-16 py-6">
      <section class="relative overflow-hidden bg-white sm:px-16 px-6 max-auto w-full">
        {/* explain */}
        <section id="more" class="py-24 relative">
          <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full">
                <img
                  class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                  src="../images/tangara.png"
                  alt="about Us image"
                />
              </div>
              <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Tangara Meaning
                  </h2>
                  <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Tangara School Ruiru offers the current Competency Based
                    Curriculum but integrates other learning techniques for the
                    early years’ education with emphasis on learning through
                    play to increase the children’s love for school while
                    preparing them for smooth transition to the Grade school.
                    Our integrated education program emphasizes both on
                    self-directed and teacher guided activities which help in
                    both independence and interdependence. We have vast indoor
                    and outdoor activities which foster a child’s imagination,
                    creativity and motor skills..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center w-full flex flex-col justify-center items-center space-y-3">
          <h2 class="text-2xl font-bold text-gray-900 tracking-tight">
            Admission Process
          </h2>
          <p class="max-w-xl text-base text-gray-500 sm:text-lg md:text-xl">
            With our easy-to-use platform, you can create a personalized mental
            wellness journey that helps you stay focused, motivated, and
            resilient.
          </p>
        </div>
        <div class="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div class="relative mt-12 lg:mt-20">
              <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <svg
                  class="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#D4D4D8"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray="1 12"
                  />
                </svg>
              </div>
              <div class="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div class="flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">
                       <Eye size={30} color="lightgreen"/>
                    </span>
                  </div>
                  <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10">
                    Visit
                  </h3>
                  <p class="mt-3 sm:mt-4 text-base text-gray-600">
                    Visit the school for a tour.
                  </p>
                </div>
                <div>
                  <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white bg-green-500 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">
                       <MessageCircle size={30} color="white"/>
                    </span>
                  </div>
                  <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10">
                    Chat
                  </h3>
                  <p class="mt-3 sm:mt-4 text-base text-gray-600">
                    chat with the headteacher.
                  </p>
                </div>
                <div>
                  <div class="flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                    <span class="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      <Check size={30} color="lightgreen"/>
                    </span>
                  </div>
                  <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900 md:mt-10">
                    Admitted
                  </h3>
                  <p class="mt-3 sm:mt-4 text-base text-gray-600">
                    Confirming the placement and the start date..
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

export default HowTo;
