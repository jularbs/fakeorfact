import React from "react";

import Navigation from "components/Frontend/Navigation";
import HeroBasic from "components/Frontend/HeroBasic";

import SideBySide from "components/Frontend/SideBySide";

import { useRef } from "react";

function VisionAndCulturePage() {
  const beforeAfterRef = useRef(null);
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBasic next={beforeAfterRef} />
        <SideBySide />
        <SideBySide reverse />
        <SideBySide />
      </div>
    </>
  );
}

export default VisionAndCulturePage;
