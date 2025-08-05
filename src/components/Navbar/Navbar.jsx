import React from 'react'
import {NavLink,Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mynav">
  <div className="container p-3">

    <Link className="navbar-brand slog fw-bolder"  to="/">
     START FRAMEWORK


      </Link>

    <button className="navbar-toggler"
     type="button"
      data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" 
       aria-controls="navbarSupportedContent" 
       aria-expanded="false"
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <NavLink className="nav-Navlink  " aria-current="page" to="/home">
            Home
            </NavLink>
        </li> */}



        <li className="nav-item">
          <NavLink className="nav-Navlink  fw-bolder" to="/about">
           ABOUT
            </NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-Navlink  fw-bolder" to="/portfolio">
           PORTFOLIO
            </NavLink>
        </li>


       <li className="nav-item">
          <NavLink className="nav-Navlink  fw-bolder" to="/contact">
            CONTACT
            </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar