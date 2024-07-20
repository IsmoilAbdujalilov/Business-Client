import React from "react";
import Logo from "../assets/rasm.jpg";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/">
            <img style={{ width: "150px" }} src={Logo} alt="British Analytic" />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            <li>
              <a href="#about" className="page-scroll">
                About us
              </a>
            </li>
            <li>
              <a href="#values" className="page-scroll">
                OUR Values
              </a>
            </li>
            <li>
              <a href="#sertificate" className="page-scroll">
                OUR Sertificates
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                OUR Services
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                OUR Team
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
