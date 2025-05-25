import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import Footer from '../components/Footer'
import StickyNavbar from '../components/StickyNav'

const TeamsPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
                <StickyNavbar/>
            </div>
            <Team/>
            <Footer/>
            
        </div>
    )
}

export default TeamsPage
