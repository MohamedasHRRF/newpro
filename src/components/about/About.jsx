import React from 'react'
import Navbar from "../Navbar/Navbar";
import style from "./about.module.css"
const About = () => {
  return (
    <>
    <Navbar />
    <div className={`container-fluid ${style.pad , style.wrapper}`} >
      <div className={`row ${style.about}`}>

      <div className='header'>
     <h1 className="pt-5 mb-4 text-center fw-bolder">ABOUT COMPONENT</h1>
      <div className={`${style.line } m-auto bg-light `}>
        <i className={`fa-solid fa-star mx-auto ${ style.icon}`} ></i>
      </div>
      </div>

      <div className={` ${style.par} row row-cols-1 row-cols-md-2 `} >
      
        <p className='col g-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
        <p className='col g-4'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
      </div>


</div>

      </div>
      
  </>)
}

export default About