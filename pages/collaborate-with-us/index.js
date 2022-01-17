import React from "react";
import { Row, Col } from "reactstrap";

import Navigation from "components/Frontend/Navigation";
import HeroBranding from "components/Frontend/HeroBranding";
import SideBySide from "components/Frontend/SideBySide";
import ContactUsSection from "components/Frontend/Sections/ContactUsSection";
import OrgChartSection from "components/Frontend/Sections/OrgChartSection";

import { useRef } from "react";

function cwuPage() {
  const beforeAfterRef = useRef(null);
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBranding next={beforeAfterRef} />
        <OrgChartSection />
        <SideBySide />
        <SideBySide reverse />
        <SideBySide />
        <SideBySide reverse />
        <SideBySide />
        <SideBySide reverse />
        <ContactUsSection />
      </div>
    </>
  );
}

export default cwuPage;
