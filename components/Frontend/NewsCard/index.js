import "./styles.scss";

import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
const NewsCard = () => {
  return (
    <>
      <div
        className="news-card-container"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511898634545-c01af8a54dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3351&q=80')`,
        }}
      >
        <div className="content">
          <div className="headline">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className="game-navigation-container">
        <div className="button-nav prev">Prev</div>
        <div className="pegs-container">
          <div className="peg-item green"></div>
          <div className="peg-item red"></div>
          <div className="peg-item red"></div>
          <div className="peg-item green"></div>
          <div className="peg-item"></div>
          <div className="peg-item"></div>
          <div className="peg-item"></div>
          <div className="peg-item active"></div>
          <div className="peg-item"></div>
          <div className="peg-item"></div>
        </div>
        <div className="button-nav next">Next</div>
      </div>

      <div className="button-answers-container">
        <div className="fake-button red">Fake</div>
        <div className="fact-button green">Fact</div>
      </div>

      <div className="ad-space">ADVERTISEMENT SPACE</div>
    </>
  );
};

export default NewsCard;
