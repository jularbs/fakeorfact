import React from "react";
import Link from "next/link";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import HeroBranding from "components/Frontend/HeroBranding";
import Showcase from "components/Frontend/Showcase";
import HeroMetrics from "components/Frontend/HeroMetrics";
import GenericCTA from "components/Frontend/GenericCTA";
import SideBySide from "components/Frontend/SideBySide";
import HeroBasic from "components/Frontend/HeroBasic";
import ContactUsSection from "components/Frontend/Sections/ContactUsSection";
import OrgChartSection from "components/Frontend/Sections/OrgChartSection";
import OurBusinessesSection from "components/Frontend/Sections/OurBusinessesSection";

import GenericCard from "components/Frontend/GenericCard";
import StoryCard from "components/Frontend/StoryCard";
function Index() {
  return (
    <>
      <div className="main-content">
        <HeroBranding />
        <StoryCard />

        <HeroBasic />
        <Showcase />
        <HeroMetrics />
        <GenericCTA />
        <SideBySide />
        <SideBySide reverse />
        <OrgChartSection />
        <ContactUsSection />
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
      </div>
    </>
  );
}

export default Index;
