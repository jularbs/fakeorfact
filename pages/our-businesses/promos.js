import React from "react";
import { Row, Col } from "reactstrap";

import Navigation from "components/Frontend/Navigation";
import HeroBranding from "components/Frontend/HeroBranding";
import SideBySide from "components/Frontend/SideBySide";
import GenericCard from "components/Frontend/GenericCard";
import OurBusinessesSection from "components/Frontend/Sections/OurBusinessesSection";
import ContactUsSection from "components/Frontend/Sections/ContactUsSection";

import { useRef } from "react";

function PromosPage() {
  const beforeAfterRef = useRef(null);
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBranding next={beforeAfterRef} />
        <OurBusinessesSection />
        <div className="posts-section" style={{ overflowX: "hidden" }}>
          <Row className="px-3">
            <Col lg={3}>
              <GenericCard />
            </Col>
            <Col lg={3}>
              <GenericCard />
            </Col>
            <Col lg={3}>
              <GenericCard />
            </Col>
            <Col lg={3}>
              <GenericCard />
            </Col>
          </Row>
          <Row className="px-3">
            <Col lg={6}>
              <GenericCard />
            </Col>
            <Col lg={6}>
              <GenericCard />
            </Col>
          </Row>
        </div>
        <SideBySide />
        <SideBySide reverse />
        <SideBySide />
        <ContactUsSection />
      </div>
    </>
  );
}

export default PromosPage;
