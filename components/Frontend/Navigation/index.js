import "./styles.scss";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const logoLocation =
    "https://www.pinclipart.com/picdir/big/380-3806630_uploads-images-nufarm-logo-horizontal-green-rgb-nufarm.png";

  const [activeDropdown, setActiveDropdown] = useState("");
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="navigation-container">
          {visible? "true": "false"}
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
        <nav className={`nav-wrapper ${visible ? "" : ""}`}>
          <div className="nav-item"> {visible ? "true" : "false"}</div>
          <div
            className={`dropdown-nav ${
              activeDropdown == "our-story" ? "active" : ""
            }`}
            onClick={() => {
              setActiveDropdown(
                `${activeDropdown == "our-story" ? "" : "our-story"}`
              );
            }}
          >
            <div className="nav-item">Our Story</div>
            <div className="dropdown-nav-wrapper">
              <div className="dropdown-item">Our Story</div>
              <div className="dropdown-item">Our Story</div>
              <div className="dropdown-item">Our Story</div>
            </div>
          </div>
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
              <div className="dropdown-item">Our Story</div>
              <div className="dropdown-item">Our Story</div>
              <div className="dropdown-item">Our Story</div>
            </div>
          </div>
          <div
            className={`dropdown-nav ${
              activeDropdown == "our-businesses" ? "active" : ""
            }`}
            onClick={() => {
              setActiveDropdown(
                `${activeDropdown == "our-businesses" ? "" : "our-businesses"}`
              );
            }}
          >
            <div className="nav-item">Our Businesses</div>
            <div className="dropdown-nav-wrapper">
              <div className="dropdown-item">Our Story</div>
              <div className="dropdown-item">Our Story</div>
              <div className="dropdown-item">Our Story</div>
            </div>
          </div>
          <div className="nav-item">Collaborate With Us</div>
          <div className="nav-item">Contact Us</div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
