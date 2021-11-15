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
import PortraitCard from "components/Frontend/PortraitCard";

function Index() {
  return (
    <>
      <IndexNavbar />

      <div className="main-content">
        <HeroBranding />
        <Showcase />
        <HeroMetrics />
        <GenericCTA />
        <SideBySide />
        <SideBySide reverse />
        <div
          className="org-chart"
          style={{ maxWidth: "1300px", margin: "0 auto", padding: "5rem 1rem" }}
        >
          <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>
            board of directors
          </h2>
          <Row className="justify-content-center">
            <Col lg={4} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={4} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={4} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={4} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={4} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={4} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={4} sm={6} xs={12}>
              <PortraitCard />
            </Col>
          </Row>
        </div>
        <div
          className="org-chart"
          style={{ maxWidth: "1300px", margin: "0 auto", padding: "5rem 1rem" }}
        >
          <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>
            Key officers
          </h2>
          <Row className="justify-content-center">
            <Col lg={3} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <PortraitCard />
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <PortraitCard />
            </Col>
          </Row>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}

export default Index;
