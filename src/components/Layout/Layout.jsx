import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {

  let location = useLocation()
    let bgComponent={
      
      '/':'#1ABC9C',
      '/about' :'#1ABC9C',
      '/portfolio':'#fff',
      '/contact':'#fff',
    };
  let bgColor= bgComponent[location.pathname]
  return (
    <div className=" min-vh-100 d-flex flex-column justify-content-between" style={{backgroundColor:bgColor}}>
      <Navbar />
      <div className="flex-grow-1">

        <Outlet /> 
         
      </div>
      <Footer />
    </div>
  );
}

export default Layout