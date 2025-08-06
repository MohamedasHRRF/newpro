import React from 'react'
import Navbar from "../Navbar/Navbar";
import dragons from"../../assets/dragons.jpg"
const Portfolio = () => {
  return (
    <>
 
    <div className="container port pad">
   <div className='mb-5'>
       <h1 className="pt-5 mb-4 text-center fw-bolder">PORTFOLIO COMPONENT</h1>
      <div className='line m-auto'>
        <i className='fa-solid fa-star mx-auto' ></i>
      </div>
      </div>

      <div className='row g-5'>
    

         <div className='col-lg-4 col-md-6 position-relative '>
          
          <div className='rounded-3 overflow-hidden position-relative image'>

          <div className='layer position-absolute '>
            <i className='fa-solid fa-plus fa-5x'></i>
          </div>

            <img src={dragons} alt="dragons" className='w-100 rounded-3' />
          </div>
        </div>
        
 <div className='col-lg-4 col-md-6 position-relative '>
          
          <div className='rounded-3 overflow-hidden position-relative image'>

          <div className='layer position-absolute '>
            <i className='fa-solid fa-plus fa-5x'></i>
          </div>

            <img src={dragons} alt="dragons" className='w-100 rounded-3' />
          </div>
        </div>

        <div className='col-lg-4 col-md-6 position-relative '>
          
          <div className='rounded-3 overflow-hidden position-relative image'>

          <div className='layer position-absolute '>
            <i className='fa-solid fa-plus fa-5x'></i>
          </div>

            <img src={dragons} alt="dragons" className='w-100 rounded-3' />
          </div>
        </div>

         <div className='col-lg-4 col-md-6 position-relative '>
          
          <div className='rounded-3 overflow-hidden position-relative image'>

          <div className='layer position-absolute '>
            <i className='fa-solid fa-plus fa-5x'></i>
          </div>

            <img src={dragons} alt="dragons" className='w-100 rounded-3' />
          </div>
        </div>

       <div className='col-lg-4 col-md-6 position-relative '>
          
          <div className='rounded-3 overflow-hidden position-relative image'>

          <div className='layer position-absolute '>
            <i className='fa-solid fa-plus fa-5x'></i>
          </div>

            <img src={dragons} alt="dragons" className='w-100 rounded-3' />
          </div>
        </div>
      
      <div className='col-lg-4 col-md-6 position-relative '>
          
          <div className='rounded-3 overflow-hidden position-relative image'>

          <div className='layer position-absolute '>
            <i className='fa-solid fa-plus fa-5x'></i>
          </div>

            <img src={dragons} alt="dragons" className='w-100 rounded-3' />
          </div>
        </div>
      </div>
      </div></>
  )
}

export default Portfolio