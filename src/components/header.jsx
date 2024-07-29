import React from "react";
import HeroImage from "../assets/hero-image.jpg";

export const Header = (props) => {
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: `url(${HeroImage})`,
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay" style={backgroundImage}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1 style={{ fontSize: "22px", textTransform: "none" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                {/* <p style={{ fontSize: "16px" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p> */}
                <a
                  style={{ marginTop: "20px" }}
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Book a consultation
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
