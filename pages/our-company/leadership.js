import React from "react";

import Navigation from "components/Frontend/Navigation";
import HeroBasic from "components/Frontend/HeroBasic";
import OrgChartSection from "components/Frontend/Sections/OrgChartSection";

import SideBySide from "components/Frontend/SideBySide";

import { useRef } from "react";

function LeadershipPage() {
  const beforeAfterRef = useRef(null);
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBasic next={beforeAfterRef} />
        <OrgChartSection />
      </div>
    </>
  );
}

export default LeadershipPage;
