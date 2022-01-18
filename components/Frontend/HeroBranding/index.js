import "./styles.scss";

import { forwardRef } from "react";
import ReactPlayer from "react-player/lazy";
import { Row, Col } from "reactstrap";
const HeroBranding = forwardRef(
  (
    { preTitle, title, logo, content, ctaName, ctaLink, media, bgImage, next },
    myRef
  ) => {
    const bgLocation =
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3432&q=80";

    const logoLocation = "/logos/mbc-radio-white.svg";
    const buttonText = "learn about us";

    const scrollNext = () => {
      if (next && next.current) {
        console.log("REF WORKING");
        next.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    return (
      <>
        <div
          className="hero-branding-container"
          style={{ backgroundImage: `url(${bgLocation})` }}
          ref={myRef}
        >
          <div className="bg-overlay-black" />
          <div className="bg-overlay-blue" />
          <div className="arrow-placement">
            <div className="arrow-wrapper" onClick={scrollNext} />
          </div>
          <Row>
            <Col lg={6} sm={12} className="w-100">
              <div className="content-container justify-content-center">
                <div className="title" style={{ width: "100%" }}>
                  <div className="pre-title">We are</div>
                  <div className="main-title">
                    <strong>MBC</strong> Media Group
                  </div>
                  {/* <img className="logo" src={logoLocation} width="100%" /> */}
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </div>
                <button className="cta-button btn btn-block">
                  {buttonText}
                </button>
              </div>
            </Col>
            <Col lg={6} sm={12} className="w-100">
              <div className="media-container">
                <div className="embed-responsive embed-responsive-16by9">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=6fWU0e6W8QY"
                    className="player"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
);

export default HeroBranding;
