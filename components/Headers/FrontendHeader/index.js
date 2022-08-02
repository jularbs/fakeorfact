import "./styles.scss";

const FrontendHeader = () => {
  return (
    <>
      <div className="frontend-header-container">
        <img src="/logos/rn-logo-circle.svg" className="logo" height="50px" />

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>About Us</li>
            <li>Our Stations</li>
          </ul>
          <a href="https://radyonatin.com/" target="_blank">
            <div className="button-link">
              Visit News Website
              <img src="/common/arrow-black.svg" />
            </div>
          </a>
        </nav>
        {/* Mobile Navigation */}
      </div>
    </>
  );
};

export default FrontendHeader;
