import React from "react";

import Navigation from "components/Frontend/Navigation";
import HeroBasic from "components/Frontend/HeroBasic";

import StoryCard from "components/Frontend/StoryCard";

import { useRef } from "react";

function HistoryPage() {
  const beforeAfterRef = useRef(null);
  const leadershipRef = useRef(null);
  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBasic next={beforeAfterRef} />
        <StoryCard next={beforeAfterRef} />
        <StoryCard ref={beforeAfterRef} next={leadershipRef} />
        <StoryCard ref={leadershipRef} />
        <StoryCard ref={leadershipRef} />
        <StoryCard ref={leadershipRef} />
      </div>
    </>
  );
}

export default HistoryPage;
