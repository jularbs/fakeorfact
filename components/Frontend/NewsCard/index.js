import "./styles.scss";

import { useState, useEffect } from "react";
import { el } from "date-fns/locale";
const NewsCard = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [userAnswers, setUserAnswers] = useState([
    { questionID: "1", answer: "" },
    { questionID: "2", answer: "" },
    { questionID: "3", answer: "" },
    { questionID: "4", answer: "" },
    { questionID: "5", answer: "" },
    { questionID: "6", answer: "" },
    { questionID: "7", answer: "" },
    { questionID: "8", answer: "" },
    { questionID: "9", answer: "" },
    { questionID: "10", answer: "" },
  ]);

  const showPegs = () => {
    return userAnswers
      .sort((a, b) => a.questionID - b.questionID)
      .map((item, key) => {
        return (
          <div
            className={`peg-item ${
              item.answer == "fake"
                ? "red"
                : item.answer == "fact"
                ? "green"
                : ""
            }
          ${item.questionID == activeQuestion ? "active" : ""}
          `}
          />
        );
      });
  };

  const handleNext = () => {
    if (activeQuestion < userAnswers.length)
      setActiveQuestion(activeQuestion + 1);
  };

  const handlePrev = () => {
    if (activeQuestion > 1) setActiveQuestion(activeQuestion - 1);
  };

  const handleAnswer =
    ({ questionID, answer }) =>
    () => {
      let newAnswer = userAnswers.filter(
        (item) => item.questionID != questionID
      );

      setUserAnswers([...newAnswer, { questionID, answer }]);
      handleNext();
    };

  const isActive = (keyword) => () => {
    const questionIndex = userAnswers.findIndex(
      (el) => el.questionID == activeQuestion
    );
    const answer = userAnswers[questionIndex].answer;

    // if (keyword === answer) return true;

    // return false;
  };

  useEffect(() => {}, [activeQuestion]);

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
        <div className="button-nav prev" onClick={handlePrev}>
          Prev
        </div>
        <div className="pegs-container">{showPegs()}</div>
        <div className="button-nav next" onClick={handleNext}>
          Next
        </div>
      </div>

      <div className="button-answers-container">
        <div
          className={`fact-button red ${isActive("fake") ? "active" : ""}`}
          onClick={handleAnswer({ questionID: activeQuestion, answer: "fake" })}
        >
          Fake
        </div>
        <div
          className={`fact-button green ${isActive("fact") ? "" : ""}`}
          onClick={handleAnswer({ questionID: activeQuestion, answer: "fact" })}
        >
          Fact
        </div>
      </div>

      <div className="ad-space">ADVERTISEMENT SPACE</div>
    </>
  );
};

export default NewsCard;
