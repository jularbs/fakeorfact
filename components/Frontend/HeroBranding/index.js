import "./styles.scss";

import ReactPlayer from "react-player/lazy";

const HeroBranding = ({
  preTitle,
  title,
  logo,
  content,
  ctaName,
  ctaLink,
  media,
  bgImage,
}) => {
  return (
    <>
      <div className="hero-branding-container">
        <div className="content-container">
          <div className="title">
            <div className="pre-title">We are</div>
            <div className="main-title">
              <strong>MBC</strong> Media Group
            </div>
            {/* <div className="logo">Hellow</div> */}
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </div>
          <button className="cta-button btn btn-block">Collaborate with us</button>
        </div>
        <div className="media-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </>
  );
};

export default HeroBranding;
