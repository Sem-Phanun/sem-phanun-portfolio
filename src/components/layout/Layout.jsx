import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Helmet } from 'react-helmet'

const Layout = ({children, title}) => {
  return (
    <>
        <Helmet>
            <meta charSet='utf-8'/>
            <meta name='description' content='description'/>
            <meta name='keyword' content='keyword'/>
            <meta name='authur' content='authur'/>
            <title>{title}</title>
        </Helmet>
        <Navbar/>
        <main style={{ minHeight: "80vh"}}>
            {children}
        </main>
        <Footer/>
    </>
  )
}

Layout.defaultProps = {
    title: "SEM PHANUN - PORTFOLIO"
}

export default Layout