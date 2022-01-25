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
  const showcaseRef = useRef(null);
  const genericCtaRef = useRef(null);
  const heroMetricsRef = useRef(null);
  const heroBrandingRef = useRef(null);

  const branding = {
    logoLocation: "/common/mbc-media-group.svg",
    bgLocation: "/bg/index-branding-bg.svg",
    title: "",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    ctaText: "learn about us",
    ctaLink: "/",
    videoLink: "https://www.youtube.com/watch?v=6fWU0e6W8QY",
  };
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBranding
          ref={heroBrandingRef}
          next={showcaseRef}
          data={branding}
        />
        <Showcase ref={showcaseRef} next={heroMetricsRef} />
        <HeroMetrics ref={heroMetricsRef} next={genericCtaRef} />
        <GenericCTA ref={genericCtaRef} />
        <LogoShowcase />
      </div>
    </>
  );
}

export default Index;
