import React from "react";

import Navigation from "components/Frontend/Navigation";
import HeroBasic from "components/Frontend/HeroBasic";
import HeroBeforeAfter from "components/Frontend/HeroBeforeAfter";

import { useRef } from "react";

function OurStoryPage() {
  const beforeAfterRef = useRef(null);
  const leadershipRef = useRef(null);
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBasic next={beforeAfterRef} />
        <HeroBeforeAfter ref={beforeAfterRef} next={leadershipRef} />
        <HeroBasic ref={leadershipRef}/>
      </div>
    </>
  );
}

export default OurStoryPage;
