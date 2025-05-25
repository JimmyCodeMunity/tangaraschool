import React from "react";

const WhyUs = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-xl">
      <section class="w-full bg-white">
        <div class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              
              <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Tangara School
              </p>
              <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                In embodying the typical characteristics of the Tanager birds, the Tangara School family endeavors to;
              </p>
            </div>

            <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Express.
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Openly and authentically, express ourselves.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Channel
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Channel our emotions into constructive and creative outlets, key in  helping identify and nurture our talents.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Uplift
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Maintain an upbeat, cheery and positive learning attitude and create a positive environment for us and our friends.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Serve
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Use our talents and gifts to serve God and spread joy and compassion both in our communities and globally.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Create
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Use our skills, talents and passions to perform, design, write, and create without fear.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
