import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="footer-items">
        <div className="footer-company-info">
          <h5 className="footer-title ">CS — Ticket System</h5>
          <p className="footer-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="footer-company-links">
          <h5 className="footer-title">Company</h5>
          <p className="footer-subtitle">About Us</p>
          <p className="footer-subtitle">Our Mission</p>
          <p className="footer-subtitle">Contact Sales</p>
        </div>

        <div className="footer-services-links">
          <h5 className="footer-title">Services</h5>
          <p className="footer-subtitle">Products & Services</p>
          <p className="footer-subtitle">Customer Stories</p>
          <p className="footer-subtitle">Download Apps</p>
        </div>

        <div className="footer-information-links">
          <h5 className="footer-title">Information</h5>
          <p className="footer-subtitle">Privacy Policy</p>
          <p className="footer-subtitle">Terms & Conditions</p>
          <p className="footer-subtitle">Join Us</p>
        </div>

        <div className="footer-social-links">
          <h5 className="footer-title">Social Links</h5>
          <button className="footer-contact-btn">
            <img
              className="footer-btn-img"
              src="./assets/footer-x.png"
              alt=""
            />{" "}
            @CS — Ticket System
          </button>
          <button className="footer-contact-btn">
            <img
              className="footer-btn-img"
              src="./assets/footer-linkedin.png"
              alt=""
            />{" "}
            @CS — Ticket System
          </button>
          <button className="footer-contact-btn">
            <img
              className="footer-btn-img"
              src="./assets/footer-fb.png"
              alt=""
            />{" "}
            @CS — Ticket System
          </button>
          <button className="footer-contact-btn">
            <img
              className="footer-btn-img"
              src="./assets/footer-mail.png"
              alt=""
            />{" "}
            support@cst.com
          </button>
        </div>
      </div>

      <hr className="footer-line" />

      <footer className="footer-copyright">
        <p className="footer-copyright-text">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
