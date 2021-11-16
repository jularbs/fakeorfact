import "./styles.scss";

import { Row, Col } from "reactstrap";
import CompanyCard from "components/Frontend/CompanyCard";

const OurBusinessesSection = () => {
  return (
    <>
      <div className="business-showcase" style={{ padding: "3rem 3rem" }}>
        <Row>
          <Col lg={3}>
            <CompanyCard
              title="DZRH"
              logoLocation="https://dzrh.com.ph/logo/logo_main.svg"
              content="It's difficult to find examples of lorem ipsum in use before Letraset
          made it popular as a dummy text in the 1960s, although McClintock says
          he remembers coming across the lorem ipsum passage in a book of old
          metal type samples. So far he hasn't relocated where he once saw the
          passage, but the popularity of Cicero in the 15th century supports the
          theory that the filler text has been used for centuries. And anyways,
          as Cecil Adams reasoned, “[Do you really] think graphic arts supply
          houses were hiring classics scholars in the 1960s?” Perhaps. But it
          seems reasonable to imagine that there was a version in use far before
          the age of Letraset."
              ctaLabel="VISIT WEBSITE"
              ctaLink="/"
            />
          </Col>
          <Col lg={3}>
            <CompanyCard
              title="Yes FM"
              logoLocation="https://www.yesthebest.com.ph/wp-content/uploads/2021/11/ytb-logo2021.png"
              content="It's difficult to find examples of lorem ipsum in use before Letraset
          made it popular as a dummy text in the 1960s, although McClintock says
          he remembers coming.“[Do you really] think graphic arts supply
          houses were hiring classics scholars in the 1960s?” Perhaps. But it
          seems reasonable to imagine."
              ctaLabel="VISIT WEBSITE"
              ctaLink="/"
            />
          </Col>
          <Col lg={3}>
            <CompanyCard
              title="Love Radio"
              logoLocation="https://www.loveradio.com.ph/wp-content/uploads/2021/11/love-logo2021.png"
              content="It's difficult to find examples of lorem ipsum in use before Letraset
          made it popular as a dummy text in the 1960s, although McClintock says
          he remembers coming.“[Do you really] think graphic arts supply
          houses were hiring classics scholars in the 1960s?” Perhaps. But it
          seems reasonable to imagine. [Do you really] think graphic arts supply
          houses were hiring classics scholars in the 1960s?” Perhaps. But it
          seems reasonable to imagine."
              ctaLabel="VISIT WEBSITE"
              ctaLink="/"
            />
          </Col>
          <Col lg={3}>
            <CompanyCard
              title="Easy Rock"
              logoLocation="https://www.easyrock.com.ph/wp-content/uploads/2021/11/easy-logo2021.png"
              content="It's difficult to find examples of lorem ipsum in use before Letraset
          made it popular as a dummy text in the 1960s, although McClintock says
          he remembers coming.“[Do you really] think graphic arts supply
          houses were hiring classics scholars in the 1960s?” Perhaps. But it
          seems reasonable to imagine. [Do you really] think graphic arts supply
          houses were hiring classics scholars in the 1960s?” Perhaps. But it
          seems reasonable to imagine."
              ctaLabel="VISIT WEBSITE"
              ctaLink="/"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OurBusinessesSection;
