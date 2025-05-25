import React from 'react'
import Login from '../components/Login'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import AllFaqs from '../components/AllFaqs'
import Footer from '../components/Footer'
import StickyNavbar from '../components/StickyNav'

const FaqPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
                <StickyNavbar/>
            </div>
            <AllFaqs />
            <Footer/>
        </div>
    )
}

export default FaqPage
