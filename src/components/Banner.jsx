import React from 'react'
import * as Icon from 'react-feather'

const Banner = () => {
    return (
        <div className='w-full bg-black '>
            <div className="md:flex hidden max-w-7xl mx-auto sm:px-16 px-6 flex justify-between items-center py-2">
                <a href="" className='flex flex-row space-x-4'>
                <Icon.MapPin color="white" size={25} />
                    <p className="text-white text-sm">ruiru, 200 meters
from st.peters kwihota catholic church</p>
                    
                </a>
                
                <div className='flex flex-row space-x-2'>
                    <p className="text-white flex flex-row items-center space-x-4 text-sm"> <Icon.Mail color="white" size={20} />{"  "}  info@tangaraschools.sc.ke</p>
                    <a target='_blank' href="https://wa.me/+254705279373?text=I'm%20interested%20in%20school" className="text-white text-sm flex items-center flex-row">
                        <img src="../images/whatsapp.png" alt="" className="h-4 w-4" />
                        +254 110 295 577 |
 0724 914098</a>
                </div>
            </div>

            <div className="w-full bg-gradient-to-r from-white via-gray-900 to-amber-300">
                <div className="md:hidden block max-w-7xl mx-auto sm:px-16 px-6 flex justify-between items-center py-2">
                    
                    <div>
                        <p className="text-white">Open Mon-Sat 8.00am-5.00pm</p>
                    </div>
                    {/* <div className='flex flex-row space-x-2'>
                        <p className="text-white flex flex-row items-center space-x-4"> <Icon.PhoneCall color="white" size={20} />{"  "} +254705279373</p>
                        <a target='_blank' href="https://wa.me/+254705279373?text=I'm%20interested%20in%20your%20car%20for%20sale" className="text-white flex items-center flex-row">
                            <img src="../images/whatsapp.png" alt="" className="h-4 w-4" />
                            +254705279373</a>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Banner
