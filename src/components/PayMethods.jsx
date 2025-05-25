import React from 'react'

const PayMethods = () => {
    return (
        <div>
            <section class="py-24 ">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="mb-14 text-center">
                        <h4 class="text-xl text-gray-400 text-center font-medium">Our Payment Methods</h4>
                    </div>
                    <div
                        class="grid grid-cols-2  justify-center  items-center  gap-12 md:grid-cols-3  xl:grid-cols-none xl:flex xl:justify-between">
                        <a href="#" class="flex justify-center items-center">
                            <img className="h-32 w-full" src="../images/mpesa.png" alt="" />

                        </a><a href="#" class="flex justify-center items-center">
                            <img className="h-32 w-full" src="../images/visa.jpg" alt="" />

                        </a><a href="#" class="flex justify-center items-center">
                            <img className="h-full w-full" src="../images/pesapal.jpg" alt="" />

                        </a>
                        
                        
                        
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PayMethods
