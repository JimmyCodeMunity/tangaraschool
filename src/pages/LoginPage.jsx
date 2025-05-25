import React from 'react'
import Login from '../components/Login'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
// import TestCarousel from '../components/TestCarousel'

const LoginPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
            </div>
            <Login />
        </div>
    )
}

export default LoginPage
