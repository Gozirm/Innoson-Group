import React from "react";
import "../styles/Footer.css";
import IVM from "../assets/IVM.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/instagram.png";
import email from "../assets/Email.png";
import arrow from "../assets/Arrow 2.png";
const Footer = () => {
  return (
    <>
      <div className="bg text-light pb-3">
        <div className="container py-4 d-lg-flex align-items-center sec-div">
          <div className="d-md-flex sec-div mt-4">
          <div className="footer-div-1 ">
            <img src={IVM} alt="IVM Logo" className="w-50" />
            <div>
              <p className="footer-p mt-3">
                Subscribe to our newsletter to be one of the first to receive
                updates on Innoson Group
              </p>
              <p className="News-p">Newsletter Sign Up</p>
              <div className="d-lg-flex btn-div gap-2 ">
                <input placeholder="Email" type="text" className="w-100" />
                <button>Email Address</button>
              </div>
            </div>
          </div>
          {/* ADDRESS */}
          <div className="footer-div-2">
            <h5 className="mb-lg-3 mt-5 ">Address</h5>
            <div>
              <h6 className="head">Head Office </h6>
              <p className="footer-p">
                No 95 Owerri Road,P.O. Box 1068, Umudim,
                Nnewi,Anambra State
              </p>
              <h6 className="head">Lagos Office</h6>
              <p className="footer-p">
                Plot 1 Block A,Amuwo Odofin Ind. Estate,Oshodi,
                Apapa,Lagos State
              </p>
            </div>
          </div>
          </div>
          {/* CONTACT */}
          <div className="footer-div-2 mt-4">
            <h5>Contact</h5>
            <div>
              <div className="d-md-flex align-items-center  gap-2">
                <img src={facebook} alt="facebook" />
                <p className="footer-p pt-3">@innosongroup</p>
              </div>
              <div className="d-md-flex align-items-center  gap-2">
                <img src={instagram} alt="instagram" />
                <p className="footer-p pt-3">@innosongroup</p>
              </div>
              <div className="d-md-flex align-items-center  gap-2">
                <img src={email} alt="email" className="" />
                <p className="footer-p pt-3">sales@innosongroup.com</p>
              </div>
            </div>
          </div>
        </div>
        <img src={arrow} alt="arrow" className="container d-flex align-items-center my-5" />
        <p className="footer-p container text-center">© 2016 Innoson Group of Companies</p>
      </div>
    </>
  );
};

export default Footer;
