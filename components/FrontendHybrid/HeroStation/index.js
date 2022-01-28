import "./styles.scss";

import { forwardRef } from "react";

const HeroStation = forwardRef(({ next }, myRef) => {
  const data = {
    bgLocation:
      "https://images.unsplash.com/photo-1569849093193-4f1a293992a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676&q=80",
  };
  return (
    <>
      <div
        className="hero-station-container"
        style={{
          backgroundImage: `url(${data.bgLocation})`,
        }}
        ref={myRef}
      >
        <div className="bg-overlay-black" />
        <div className="content">
          <div className="header">
            <span>We are</span>
            <strong>aksyon radio</strong>
          </div>
          <div className="description">
            The provincial AM network of MBC, operating in key cities throughout
            the Philippines.Far far away, behind the word mountains, far from
            the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it
          </div>

          <div className="cta-button">
            Learn more about us
            <img src="/common/arrow-white.svg" alt="arrow" />
          </div>

          <div className="hr-line" />

          <div className="stations-content">
            <div className="header">our stations</div>
            <div className="dropdown-wrapper">
              <div className="label">Choose location</div>
              <div className="dropdown-control">
                <select>
                  <option value="">Manila</option>
                  <option value="">Cebu</option>
                  <option value="">Laoag</option>
                </select>
                <div className="submit-button">
                  Go
                  <img src="/common/arrow-white.svg" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default HeroStation;
