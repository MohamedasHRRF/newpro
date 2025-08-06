import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className={`upper-footer ${style.upperfooter}  text-white`}>
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-md-4 text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 text-center">
              <h3>AROUND THE WEB</h3>
              <ul className="list-unstyled d-flex justify-content-center p-4 gap-3">
                <li className={`${style.icons}`}>
                  <i class="fa-brands fa-facebook "></i>
                </li>

                <li className={`${style.icons}`}>
                  <i class="fa-brands fa-youtube "></i>
                </li>

                <li className={`${style.icons}`}>
                  <i class="fa-brands fa-linkedin "></i>
                </li>

                <li className={`${style.icons}`}>
                  <i class="fa-brands fa-pinterest "></i>
                </li>
              </ul>
            </div>

            <div className="col-md-4 text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`lower-footer text-center py-3 ${style.lowerfooter}`}>
        <p>Copyright © Your Website 2021</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
