import "./styles.scss";

import { forwardRef } from "react";

import "swiper/swiper.scss";

const RadioPlayer = forwardRef(({}, myRef) => {
  return (
    <>
      <section className="radio-player-container" ref={myRef}>
        <div className="content-wrapper">
            <div className="live-placeholder">LIVE</div>
            <div className="title">Radyo Natin</div>
        </div>
        <div className="control-wrapper">
            
        </div>

      </section>
    </>
  );
});

export default RadioPlayer;
