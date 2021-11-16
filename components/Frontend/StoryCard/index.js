import "./styles.scss";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
const StoryCard = () => {
  const data = {
    bgLocation:
      "https://images.unsplash.com/photo-1578593139775-971441c3c518?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80",
    imgLocation:
      //   "https://www.clipartmax.com/png/full/60-609954_apple-tree-montessori-school-school-logo-design-samples.png",
      //   "https://dzrh.com.ph/logo/logo_main.svg",
      "https://upload.wikimedia.org/wikipedia/en/9/9d/DZMB_%28radio_station%29_logo.svg",
  };
  return (
    <>
      <div
        className="storycard-container"
        style={{ backgroundImage: `url(${data.bgLocation})` }}
      >
        <div className="black-gradient-overlay" />
        <div className="details-card">
          <div className="label">1930's</div>
          <div className="title">RH Goes Television</div>
          <div className="excerpt">
            And anyways, as Cecil Adams reasoned, “[Do you really] think graphic
            arts supply houses were hiring classics scholars in the 1960s?”
            Perhaps. But it seems reasonable to imagine that there was a version
            in use far before the age of Letraset. McClintock wrote to Before &
            After to explain his discovery.
          </div>
        </div>

        <div className="img-container">
          <img className="img-wrapper" src={data.imgLocation} />
        </div>

        <div className="timeline-container">
          <div className="timeline-wrapper">
            <IoChevronBackOutline className="icon" />
            <div className="timeline-line"></div>

            <div className="timeline-item active">
              <div className="label">1930's</div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="label">1950's</div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="label">1970's</div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="label">1970's</div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="label">1970's</div>
            </div>
            <div className="timeline-line"></div>
            <div className="timeline-item">
              <div className="label">present</div>
            </div>
            <div className="timeline-line"></div>
            <IoChevronForwardOutline className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
