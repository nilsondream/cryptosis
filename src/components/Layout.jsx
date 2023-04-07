import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children }) => {
    return (
        <div className='layout-styled'>
            <ScrollToTop />
            <Navbar />
            <div className='layout-container'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout