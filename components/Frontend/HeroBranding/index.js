import "./styles.scss";

import { forwardRef } from "react";
import ReactPlayer from "react-player/lazy";
import { Row, Col } from "reactstrap";
import Link from "next/link";
const HeroBranding = forwardRef(
  (
    { preTitle, title, logo, content, ctaName, ctaLink, media, bgImage, next },
    myRef
  ) => {
    const bgLocation = "/bg/index-branding-bg.svg";

    const logoLocation = "/common/mbc-media-group.svg";
    const buttonText = "learn about us";
    const sampleContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
    const sampleCtaLink = "/";
    const sampleVideoLink = "https://www.youtube.com/watch?v=6fWU0e6W8QY";
    const sampleTitle = "";

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
          <div className="bg-overlay-blue" />
          <div className="arrow-placement">
            <div className="arrow-wrapper" onClick={scrollNext} />
          </div>
          <Row>
            <Col lg={6} sm={12} className="w-100">
              <div className="content-container justify-content-center">
                <div className="title" style={{ width: "100%" }}>
                  <div className="main-title">{sampleTitle}</div>
                  <img className="logo" src={logoLocation} width="100%" />
                </div>
                <div className="content">{sampleContent}</div>
                <Link href={sampleCtaLink}>
                  <button className="cta-button btn btn-block">
                    <span>{buttonText}</span>{" "}
                    <img src="/common/arrow-white.svg" />
                  </button>
                </Link>
              </div>
            </Col>
            <Col lg={6} sm={12} className="w-100">
              <div className="media-container">
                <div className="embed-responsive embed-responsive-16by9">
                  <ReactPlayer
                    url={sampleVideoLink}
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
