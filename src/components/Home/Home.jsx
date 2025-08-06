import React from 'react'

import Navbar from '../Navbar/Navbar';
 
import style from "./home.module.css";
import avatar from "../../assets/avatar.svg"
const Home = () => {
  return (
    <>
    <Navbar />
    <div className={`container-fluid ${ style.pad , style.wrapper}`}>

      <div className={`${style.home}`}>
      <img src={avatar} className='w-25' alt="" />
      </div>
    </div>
        </>
  )
}

export default Home