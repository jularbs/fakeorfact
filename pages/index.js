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
import CompanyCard from "components/Frontend/CompanyCard";
function Index() {
  return (
    <>
      <div className="main-content">
        <HeroBranding />
        <HeroBasic />
        <Showcase />
        <HeroMetrics />
        <GenericCTA />
        <SideBySide />
        <SideBySide reverse />
        <OrgChartSection />
        <ContactUsSection />
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
      </div>
    </>
  );
}

export default Index;
