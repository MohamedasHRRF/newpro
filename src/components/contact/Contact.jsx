import React from 'react'
import Navbar from "../Navbar/Navbar";
import style from  "./contact.module.css"
const Contact = () => {
  return (
    <>
    
    <div className={`container ${style.pad} `}>

      <h1 className="pt-5 mb-4 text-center fw-bolder">CONTACT SECTION</h1>
      <div className={`${style.line} m-auto`}>
        <i className={`fa-solid fa-star mx-auto ${style.icon}`} ></i>
      </div>
        <form className='row gy-3 my-auto px-5 justify-content-center'>
            <input className={` p-3 my-4 rounded ${style.input}`} type="text" placeholder='userName' />
            <input className={` p-3 my-4 rounded ${style.input}`}type="text" placeholder='userAge' />
            <input className={` p-3 my-4 rounded ${style.input}`}type="email" placeholder='userEmail' />
            <input className={` p-3 my-4 rounded ${style.input}`}type="password" placeholder='userPassword' />
             <div  className={` px-0 ${style.input}`} >
   <button className={`${style.btn}`}>Send Message</button>
            </div>
        </form>

    </div>
    </>
  )
}

export default Contact