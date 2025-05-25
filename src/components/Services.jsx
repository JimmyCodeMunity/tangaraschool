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
              <p class="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">
                Mentheal Ventures provides you with a variety of services to
                help you through your mental wellness journey as much as we can.
              </p>
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="">
                    <img
                      src="../images/meet.png"
                      className="h-12 w-12"
                      alt=""
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Virtual Meetings
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    Get an online therapy sessions at the comfort of your home
                    or workplace.
                  </p>
                </div>
              </div>
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="">
                    <img
                      src="../images/therapy.png"
                      alt=""
                      className="h-12 w-12"
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Therapy Sessions
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    We have professional therapists who provide their sessions
                    and are always available to you.{" "}
                  </p>
                </div>
              </div>
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="">
                    <img
                      src="../images/calender.png"
                      alt=""
                      className="w-12 h-12"
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Session Scheduling
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    You can book a session you need to attend in the future at
                    an earlier date and get notified when its time.
                  </p>
                </div>
              </div>
              <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
                <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                  <a href="" class="w-10 h-10 flex items-center justify-center">
                    <img
                      src="../images/secure.png"
                      alt=""
                      className="h-12 w-12"
                    />
                  </a>
                  <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">
                    Privacy
                  </h4>
                  <p class="text-center text-gray-500 text-sm font-normal leading-snug">
                    Your data and sessions are all private and secure.No session
                    is recorded by either parties.
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
