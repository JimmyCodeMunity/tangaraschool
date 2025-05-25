import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Programs from '../components/Programs'
import Footer from '../components/Footer'

const ServicesPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
            </div>
            <Programs/>
            <Footer/>
            
        </div>
    )
}

export default ServicesPage
