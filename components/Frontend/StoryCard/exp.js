import "./exp.scss";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { forwardRef } from "react";
import { Row, Col } from "reactstrap";

const StoryCard = forwardRef(({ next, realData, timeline }, myRef) => {
  const data = {
    bgLocation:
      "https://images.unsplash.com/photo-1578593139775-971441c3c518?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2690&q=80",
    imgLocation: "/logos/yes-logo-old.svg",
    label: "1930's",
    title: "RH Goes Television",
    excerpt:
      "And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset. McClintock wrote to Before & After to explain his discovery.",
  };
  const { before, nextLabel, futures, current } = timeline;

  const scrollNext = () => {
    if (next && next.current) {
      next.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const showTimeline = (timeArray) => {
    return timeArray.map((item, index) => {
      return (
        <>
          <div className="timeline-item">
            <div className="label">{item}</div>
          </div>
          <div className="timeline-line" key={index}></div>
        </>
      );
    });
  };

  return (
    <>
      <div
        className="storycard-container"
        style={{ backgroundImage: `url(${data.bgLocation})` }}
        ref={myRef}
      >
        <div className="black-gradient-overlay" />

        <div className="content">
          <Row>
            <Col lg={6} sm={12} xs={12}>
              <div className="img-container">
                <img className="img-wrapper" src={data.imgLocation} />
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <div className="details-card">
                <div className="label">{data.label}</div>
                <div className="title">{data.title}</div>
                <div className="excerpt">{data.excerpt}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="timeline-container">
                <div className="timeline-wrapper">
                  {/* before */}
                  {before && (
                    <>
                      <IoChevronBackOutline className="icon" />
                      <div className="timeline-line"></div>
                      {showTimeline(before)}
                    </>
                  )}

                  {/* next */}
                  {current && (
                    <>
                      <div className="timeline-item active">
                        <div className="label">{current}</div>
                      </div>
                      <div className="timeline-line"></div>
                    </>
                  )}

                  {nextLabel && (
                    <>
                      <div
                        className="timeline-item arrow-wrapper"
                        onClick={scrollNext}
                      >
                        <div className="label">{nextLabel}</div>
                      </div>
                      <div className="timeline-line"></div>
                    </>
                  )}

                  {/* futures */}
                  {futures && (
                    <>
                      {showTimeline(futures)}
                      <IoChevronForwardOutline className="icon" />
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
});

export default StoryCard;
