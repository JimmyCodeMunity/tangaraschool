import React, { useRef } from "react";
import * as motion from "motion/react-client";
import TestCarousel from "./TestCarousel";
import { AnimatePresence } from "framer-motion";
import { Camera, GraduationCap, PhoneCall, School, User } from "lucide-react";

const Hero = () => {
  const scrollRef = useRef(null);
  return (
    <div
      className="w-full h-full bg-transparent"
      ref={scrollRef}
      //   style={{ overflow: "scroll" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <section className="bg-transparent w-full md:grid flex flex-col space-y-4 grid-cols-2 max-w-7xl mx-auto">
          <div class="relative flex flex-row items-center pt-12 bg-transparent sm:pt-16 lg:py-36 xl:py-48">
            {/* <div class="absolute inset-0 hidden lg:block">
                            <img class="object-cover object-right w-full h-full" src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/4/background.png" alt="" />
                        </div> */}

            <div class="relative mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                class="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left"
              >
                <h1 class="mt-3 text-4xl font-bold text-white sm:mt-8 sm:text-5xl xl:text-6xl">
                  Welcome To Tangara School - Ruiru{" "}
                </h1>

                <div class="mt-8 sm:mt-12">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-green-400
                            border border-transparent
                            rounded-full
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            hover:bg-white
                            hover:text-green-500
                            focus:ring-offset-[#FFE942]
                        "
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Enroll Today
                  </button>

                  <dialog
                    id="my_modal_2"
                    className="modal bg-white text-black p-4 w-[500px] rounded-xl"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Fill in your details and we shall get back to you.
                      </h3>
                      <p className="py-4">
                        Press ESC key or click outside to close
                      </p>
                      <form action="" class="">
                        <div class="relative text-gray-500 focus-within:text-gray-900 mb-6">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <User
                              color="gray"
                              className="text-neutral-400"
                              size={15}
                            />
                          </div>
                          <input
                            type="text"
                            id="default-search"
                            class="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                            placeholder="Parent Name"
                          />
                        </div>
                        <div class="relative text-gray-500 focus-within:text-gray-900 mb-6">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <GraduationCap
                              color="gray"
                              className="text-neutral-400"
                              size={15}
                            />
                          </div>
                          <input
                            type="text"
                            id="default-search"
                            class="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                            placeholder="Student Name"
                          />
                        </div>
                        <div class="relative text-gray-500 focus-within:text-gray-900 mb-6">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <School color="gray" className="text-neutral-400" size={15} />
                          </div>
                          <input
                            type="text"
                            id="default-search"
                            class="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                            placeholder="Grade"
                          />
                        </div>
                        <div class="relative text-gray-500 focus-within:text-gray-900 mb-2">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                            <PhoneCall
                              color="gray"
                              className="text-neutral-400"
                              size={15}
                            />
                          </div>
                          <input
                            type="text"
                            id="default-search"
                            class="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                            placeholder="phone Number"
                          />
                        </div>
                        
                        <div class="flex mt-7 mb-5">
                          <button class="w-full h-12 bg-green-600 hover:bg-green-900 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6">
                            Submit
                          </button>
                        </div>
                        
                        
                      </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full h-full flex flex-row justify-center items-center">
            <motion.div
              // whileHover={{ scale: 1.2 }}
              // whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              <TestCarousel />
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Hero;
