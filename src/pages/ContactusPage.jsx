import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import StickyNavbar from '../components/StickyNav'

const ContactusPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
                <StickyNavbar/>
            </div>
            <ContactUs/>
            <div className="w-full max-w-7xl mx-auto">
                <img src="../images/map.jpg" className='w-full h-full object-fit rounded-xl' alt="" />
            </div>
            <Footer/>
            
        </div>
    )
}

export default ContactusPage
