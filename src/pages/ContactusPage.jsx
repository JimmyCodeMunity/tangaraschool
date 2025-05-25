import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const ContactusPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
            </div>
            <ContactUs/>
            <Footer/>
            
        </div>
    )
}

export default ContactusPage
