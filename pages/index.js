import React from "react";
// reactstrap components

// core components
import NewsDesk from "components/Sections/NewsDesk";
import AboutUsSection from "components/Sections/AboutUsSection";
import HeroBasic from "components/Frontend/HeroBasic";
function Index() {
  return (
    <>
      <div className="main-content">
        <HeroBasic black />
        <NewsDesk />
        <AboutUsSection />
      </div>
    </>
  );
}

export default Index;
