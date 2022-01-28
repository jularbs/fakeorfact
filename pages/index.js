import React from "react";
import Link from "next/link";
// reactstrap components

// core components
import NewsDesk from "components/Sections/NewsDesk";
import AboutUsSection from "components/Sections/AboutUsSection";
import HeroStation from "components/FrontendHybrid/HeroStation";

function Index() {
  return (
    <>
      <div className="main-content">
        <HeroStation></HeroStation>
        <NewsDesk />
        <AboutUsSection />
      </div>
    </>
  );
}

export default Index;
