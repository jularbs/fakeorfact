import "./styles.scss";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="navigation-container">
        <img
          src="/logos/main-color.png"
          height="50px"
          className="logo-wrapper"
          alt=""
        />

        {/* MOBILE NAVIGATION */}
        <div
          className={`close-wrapper ${visible ? "open" : ""}`}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={`nav-wrapper ${visible ? "visible" : ""}`}>
          <div className="nav-item">Our Story</div>

          <div
            className={`dropdown-nav ${
              activeDropdown == "our-company" ? "active" : ""
            }`}
            onClick={() => {
              setActiveDropdown(
                `${activeDropdown == "our-company" ? "" : "our-company"}`
              );
            }}
          >
            <div className="nav-item">Our Company</div>
            <div className="dropdown-nav-wrapper">
              <div className="dropdown-item">History</div>
              <div className="dropdown-item">Vision and Culture</div>
              <div className="dropdown-item">Leadership</div>
              <div className="dropdown-item">
                Corporate Social Responsibility
              </div>
              <div className="dropdown-item">Investor Relations</div>
            </div>
          </div>
          <div className="nav-item">Our Businesses</div>

          <div className="nav-item">Collaborate With Us</div>
          <div className="nav-item">Contact Us</div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
