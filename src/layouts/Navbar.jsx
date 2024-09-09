import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import menu from "../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="container-md py-3 d-flex justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <img src={logo} alt="logo" className="img-fluid" />
          <h2>Innoson Group</h2>
        </div>
        <ul className="list-unstyled d-lg-flex align-items-center gap-5 d-none ">
          <li>Home</li>
          <li>Companines</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* offcanvas */}
        <div className="d-md-block d-lg-none  mt-2 ">
          <div className="d-lg-none" onClick={handleShow}>
            <img className="menu-img" src={menu} alt="menu" />
          </div>

          <Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            style={{ width: "300px" }}
          >
            <Offcanvas.Header >
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="mt-5 ms-3">
                <ul className="list-unstyled d-flex row gap-3">
                  <li>Home</li>
                  <li>Companines</li>
                  <li>Product</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
