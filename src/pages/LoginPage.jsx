import React from 'react'
import Login from '../components/Login'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import StickyNavbar from '../components/StickyNav'
// import TestCarousel from '../components/TestCarousel'

const LoginPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
                <StickyNavbar/>
            </div>
            <Login />
        </div>
    )
}

export default LoginPage
