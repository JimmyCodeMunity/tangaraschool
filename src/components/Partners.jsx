import React from 'react'

const Partners = () => {
    return (
        <div>
            <section class="bg-white">
                <div class="py-8 mx-auto w-full">
                    <div class="max-w-3xl mx-auto px-5 mt-28">
                        <div class="flex flex-col justify-center">

                            <div class="text-center">

                                <h2 class="font-semibold text-3xl">Our Partners</h2>

                                <p class="max-w-md mx-auto mt-2 text-gray-500">
                                    We are thankful to each and every company that is supporting us.
                                </p>

                            </div>


                            <div class="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">


                                <div class="text-gray-400 flex flex-col space-y-4 ">
                                    <img src="../images/babu.jpg" className="h-20 w-full" alt="" />
                                    <p className="text-xl">Kuhu and Babu</p>
                                </div><div class="text-gray-400 flex flex-col space-y-4 ">
                                    <img src="../images/chandaria.png" className="h-20 w-full" alt="" />
                                    <p className="text-xl">Chandaria</p>
                                </div>





                                




                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partners