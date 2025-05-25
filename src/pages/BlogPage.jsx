import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const BlogPage = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <Banner />
                <Navbar />
            </div>
            <Blog/>
            <Footer/>
            
        </div>
    )
}

export default BlogPage
