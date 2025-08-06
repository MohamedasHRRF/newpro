import React from 'react'

import Navbar from '../Navbar/Navbar';
import style from "./home.module.css";
import avatar from "../../assets/avatar.svg"
const Home = () => {
  return (
    <>
      <div className={`d-flex align-items-center justify-content-center flex-column ${style.pad} text-white `}>
        <img src={avatar} className={`${style.image}`} alt="" />
        <h1 className="text-uppercase mb-3 ">Start Framework</h1>
        <div className={`${style.line } m-auto bg-light`}>
                <i className={`fa-solid fa-star mx-auto ${ style.icon}`} ></i>
              </div>
        <p className='mt-2'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}

export default Home