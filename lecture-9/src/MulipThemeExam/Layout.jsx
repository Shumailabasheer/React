import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ThemeSelector from '../Context/ThemeSelector'

const Layout = () => {
  return (
    <>
    
     <Header />
     <div style={{minHeight:"400px"}}>
      <ThemeSelector/>
       <Outlet />
     </div>
      <Footer />
    </>
  )
}

export default Layout
