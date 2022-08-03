import "./styles.scss";

import { forwardRef } from "react";

import "swiper/swiper.scss";

import {
  IoPlayCircleOutline,
  IoArrowRedo,
  IoVolumeHigh,
} from "react-icons/io5";
const RadioPlayer = forwardRef(({}, myRef) => {
  return (
    <>
      <section className="radio-player-container" ref={myRef}>
        <div className="content-wrapper">
          <div className="live-placeholder">LIVE</div>
          <div className="title">Radyo Natin</div>
        </div>
        <div className="control-wrapper">
          <IoPlayCircleOutline className="icon" />
          <div className="share-button">
            <span>Share</span>
            <IoArrowRedo />
          </div>
          <div className="volume-control-wrapper">
            <IoVolumeHigh className="icon__volume" />
            <input
              type="range"
            //   value="1"
              min="0"
              max="1"
              step=".001"
              className="volume-input-wrapper"
            ></input>
          </div>
        </div>
      </section>
    </>
  );
});

export default RadioPlayer;
