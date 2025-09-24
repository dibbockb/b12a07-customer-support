import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <p className="nav-title">CS — Ticket System</p>
      <div className="nav-items">
        <button className="nav-item">Home</button>
        <button className="nav-item">FAQ</button>
        <button className="nav-item">Changelog</button>
        <button className="nav-item">Blog</button>
        <button className="nav-item">Download</button>
        <button className="nav-item">Contact</button>
        <div className="nav-button-container">
          <button className="nav-button">
            <img className="nav-btn-img" src="/assets/nav-add.png" alt="" />
            New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
