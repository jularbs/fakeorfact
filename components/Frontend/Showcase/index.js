import "./styles.scss";

import { Row, Col } from "reactstrap";

const Showcase = () => {
  const data = [
    {
      bgLocation:
        "https://images.unsplash.com/photo-1598743400863-0201c7e1445b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
      logoLocation: "",
      link: "",
    },
    {
      bgLocation:
        "https://images.unsplash.com/photo-1563208964-a455770abf67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3131&q=80",
      logoLocation: "",
      link: "",
    },
    {
      bgLocation:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
      logoLocation: "",
      link: "",
    },
    {
      bgLocation:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
      logoLocation: "",
      link: "",
    },
    {
      bgLocation:
        "https://images.unsplash.com/photo-1581092787765-e3feb951d987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
      logoLocation: "",
      link: "",
    },
    {
      bgLocation:
        "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
      logoLocation: "",
      link: "",
    },
  ];

  const showBusinesses = () => {
    return data.map((item, key) => {
      return (
        <Col lg={4} className="px-2 py-2" key={key}>
          <div
            className="card-item"
            style={{
              backgroundImage: `url(${item.bgLocation})`,
            }}
          >
            <div className="black-gradient-overlay" />
            <div className="logo">MBC Radio</div>
            <div className="arrow-icon">&#10230;</div>
          </div>
        </Col>
      );
    });
  };
  return (
    <>
      <div className="showcase-container">
        <div className="header-container">
          <div className="header">Our Businesses</div>
          <div className="subheader">
            on-air &#8226; on-ground &#8226; online
          </div>
        </div>
        <div className="showcase-cards-container">
          <Row className="px-4">{showBusinesses()}</Row>
        </div>
      </div>
    </>
  );
};

export default Showcase;
