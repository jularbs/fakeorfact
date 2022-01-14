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
import HeroBeforeAfter from "components/Frontend/HeroBeforeAfter";
import Navigation from "components/Frontend/Navigation";
import FrontendHeader from "../components/Headers/FrontendHeader";
import { useRef } from "react";

function Index() {
  const storyCardRef = useRef(null);
  const showcaseRef = useRef(null);
  const genericCtaRef = useRef(null);
  const heroMetricsRef = useRef(null);
  const heroBrandingRef = useRef(null);
  return (
    <>
      <Navigation />
      {/* <FrontendHeader /> */}
      <div className="main">
        <HeroBeforeAfter next={heroBrandingRef} />
        <HeroBranding ref={heroBrandingRef} next={storyCardRef} />
        <StoryCard ref={storyCardRef} />
        <HeroBasic next={showcaseRef} />
        <Showcase ref={showcaseRef} next={heroMetricsRef} />
        <HeroMetrics ref={heroMetricsRef} next={genericCtaRef} />
        <GenericCTA ref={genericCtaRef} />
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
