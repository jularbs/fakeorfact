import React from "react";
import SideBySide from "components/Frontend/SideBySide";
import Navigation from "components/Frontend/Navigation";
import HeroBasic from "components/Frontend/HeroBasic";
function csrPage() {
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBasic />
        <SideBySide />
        <SideBySide reverse />
        <SideBySide />
      </div>
    </>
  );
}

export default csrPage;
