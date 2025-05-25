import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AccType from '../components/AccType'
import HowTo from '../components/HowTo'
import PayMethods from '../components/PayMethods'

const MembershipPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
            </div>
            <AccType/>
            <HowTo/>
            <PayMethods/>
            <Footer/>
            
        </div>
    )
}

export default MembershipPage
