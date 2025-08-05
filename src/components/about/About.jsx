import React from 'react'
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <div className='container-fluid pad about'>
      <div className='header'>
     <h1 className="pt-5 mb-4 text-center fw-bolder">ABOUT COMPONENT</h1>
      <div className='line m-auto'>
        <i className='fa-solid fa-star mx-auto' ></i>
      </div>
      </div>

      <div className='par'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
     <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
      </div>
      </div>
      
  </>)
}

export default About