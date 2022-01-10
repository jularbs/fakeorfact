import "./styles.scss";
import { useState } from "react";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="navigation-container">
        <img src="/logos/main-color.png"  height="40px" style={{marginLeft: "20px"}} />
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
        <nav className={`nav-wrapper ${visible ? "true" : "false"}`}>
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
