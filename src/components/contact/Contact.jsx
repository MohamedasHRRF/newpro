import React from 'react'
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="container pad ">

      <h1 className="pt-5 mb-4 text-center fw-bolder">CONTACT SECTION</h1>
      <div className='line m-auto'>
        <i className='fa-solid fa-star mx-auto' ></i>
      </div>
        <form className='row gy-3 my-auto px-5 justify-content-center'>
            <input className=" p-3 my-4 rounded input " type="text" placeholder='userName' />
            <input className=" p-3 my-4 rounded input" type="text" placeholder='userAge' />
            <input className=" p-3 my-4 rounded input" type="email" placeholder='userEmail' />
            <input className=" p-3 my-4 rounded input" type="password" placeholder='userPassword' />
            <div  className=" px-0 input" >
            <button className='btn '>Send Message</button>
            </div>
        </form>

    </div>
    </>
  )
}

export default Contact