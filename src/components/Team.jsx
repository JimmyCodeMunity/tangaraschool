import React from "react";
import "animate.css"
import { chair, midlevel, teammembers } from "../constants";
const Team = () => {
  return (
    <div>
      <section class="py-24 bg-white animate__animated animate__bounce animate__delay-2s">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="md:py-5 py-3">
            <h2 class=" font-manrope text-5xl text-center font-bold text-gray-900 mb-6">
              Meet the Team
            </h2>
            <p class="text-lg text-gray-500 text-center">
              These people work on making Mentheal the best.
            </p>
          </div>
          <div className="space-y-5">
            <div className="w-full text-center md:py-8 py-5">
              <p className="text-3xl text-amber-500">Advisory Board</p>
            </div>
            <div class="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">

              {
                chair.map((member) => {
                  return (
                    <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                      <div class="relative mb-5">
                        <img
                          src={member.image}
                          alt="Guy image"
                          class="w-32 h-32 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-amber-400"
                        />
                      </div>
                      <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-amber-400">
                        {member.name}
                      </h4>
                      <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                        {member.role}
                      </span>
                      <span class="text-gray-500 text-md text-center block transition-all duration-500 group-hover:text-gray-900">
                        {member.other}
                      </span>
                    </div>
                  )
                })
              }

            </div><div class="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">

              {
                midlevel.map((member) => {
                  return (
                    <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                      <div class="relative mb-5">
                        <img
                          src={member.image}
                          alt="Guy image"
                          class="w-32 h-32 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-amber-400"
                        />
                      </div>
                      <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-amber-400">
                        {member.name}
                      </h4>
                      <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                        {member.role}
                      </span>
                      <span class="text-gray-500 text-md text-center block transition-all duration-500 group-hover:text-gray-900">
                        {member.other}
                      </span>
                    </div>
                  )
                })
              }

            </div>

            <div className="w-full text-center md:py-8 py-5">
              <p className="text-3xl text-amber-500">Operations Team</p>
            </div>
            <div class="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">

              {
                teammembers.map((member) => {
                  return (
                    <div class="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                      <div class="relative mb-5">
                        <img
                          src={member.image}
                          alt="Guy image"
                          class="w-32 h-32 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-amber-400"
                        />
                      </div>
                      <h4 class="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-amber-400">
                        {member.name}
                      </h4>
                      <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                        {member.role}
                      </span>
                      <span class="text-gray-500 text-md text-center block transition-all duration-500 group-hover:text-gray-900">
                        {member.other}
                      </span>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;