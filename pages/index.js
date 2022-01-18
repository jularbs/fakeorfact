import React from "react";
// reactstrap components
import { Row, Col } from "reactstrap";
// core components
import HeroBranding from "components/Frontend/HeroBranding";
import Showcase from "components/Frontend/Showcase";
import HeroMetrics from "components/Frontend/HeroMetrics";
import GenericCTA from "components/Frontend/GenericCTA";
import LogoShowcase from "components/Frontend/LogoShowcase/LogoShowcase";
import Navigation from "components/Frontend/Navigation";
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
      <div className="main">
        <HeroBranding ref={heroBrandingRef} next={showcaseRef} />
        <Showcase ref={showcaseRef} next={heroMetricsRef} />
        <HeroMetrics ref={heroMetricsRef} next={genericCtaRef} />
        <GenericCTA ref={genericCtaRef} />
        <LogoShowcase />
      </div>
    </>
  );
}

export default Index;
