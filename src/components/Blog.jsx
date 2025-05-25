import React from 'react'

const Blog = () => {
    return (
        <section class="py-24 ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our popular blogs</h2>
                <div class="flex justify-center items-start mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    <div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                        <div class="flex items-center mb-6">
                            <img src="https://images.pexels.com/photos/1556716/pexels-photo-1556716.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Harsh image" class="rounded-lg w-full object-cover" />
                        </div>
                        <div class="block">
                            <h4 class="text-gray-900 font-medium leading-8 mb-9">Signs of Depression that are Surprising</h4>
                            <p className="text-sm">
                                Back Pain Got a backache that won’t quit? Studies show that depression may be a risk factor for chronic lower back pain. One study showed that up to 42% of people with chronic lower back pain experienced depression before their back pain started. Yet depression can often go ignored or undiagnosed because people don’t associate…
                            </p>
                            <div class="flex items-center justify-between  font-medium">
                                <h6 class="text-sm text-gray-500">By Mentheal.</h6>
                                <span class="text-sm text-indigo-600">2 year ago</span>
                            </div>
                        </div>
                    </div><div class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                        <div class="flex items-center mb-6">
                            <img src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Harsh image" class="rounded-lg w-full object-cover" />
                        </div>
                        <div class="block">
                            <h4 class="text-gray-900 font-medium leading-8 mb-9">Tips of parenting a child with special needs.</h4>
                            <p className="text-sm">
                            Being the parent of a child with special needs is challenging. In fact, it can bring unexpected stresses with spouses, siblings and even within your own belief in your parenting abilities. Maybe you’ve been so busy taking care of your child’s needs, in addition to the rest of your family, that you have not had…
                            </p>
                            <div class="flex items-center justify-between  font-medium">
                                <h6 class="text-sm text-gray-500">By Mentheal.</h6>
                                <span class="text-sm text-indigo-600">2 year ago</span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <a href="javascript:;" class="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View All</a>
            </div>
        </section>

    )
}

export default Blog
