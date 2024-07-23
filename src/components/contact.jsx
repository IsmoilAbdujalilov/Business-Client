import React from "react";
import "../assets/index.css";
import Logo from "../assets/rasm.jpg";

export const Contact = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-column footer-container-brand">
            <img className="footer-logo" src={Logo} alt="British Analytic" />
            <h2 className="phone-number">+998998993515</h2>
            <div className="footer-socials">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/MurodovDiyorbek"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
          {/* <div className="footer-container-column footer-container-courses">
            <h3>
              <small>Our Services</small>
            </h3>

            <p>
              <a href="/uz/data-analytics/course/">EXPRESS DIAGNOSTIC</a>
            </p>

            <p>
              <a href="/uz/data-engineering/course/">PRODUCT SERVICES</a>
            </p>
          </div> */}
          <div className="footer-container-column footer-container-contacts">
            <h3>
              <small>Contact Us</small>
            </h3>
            <div className="column-section">
              <i className="fa-solid fa-location-dot"></i>
              <p>
                <a href="#">Tirsakobod 4/194a, Tashkent, Uzbekistan</a>
              </p>
            </div>
            <div className="column-section">
              <i className="fa-solid fa-envelope"></i>
              <p>
                <a href="mailto:diyorbek.britishanalytica@gmail.com">
                  diyorbek.britishanalytica@gmail.com
                </a>
              </p>
            </div>
            <div className="column-section">
              <i className="fa-solid fa-phone"></i>
              <p>
                <a href="tel:+998998993515">+998998993515</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-meta">
          <p>© {new Date().getFullYear()} BRITISH ANALYTICA</p>
          <span>Barcha huquqlar himoyalangan</span>
        </div>
      </div>
    </footer>
  );
};
