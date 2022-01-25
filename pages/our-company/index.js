import React from "react";

import Navigation from "components/Frontend/Navigation";
import HeroBasic from "components/Frontend/HeroBasic";

import StoryCard from "components/Frontend/StoryCard/exp";

import { useRef } from "react";

function HistoryPage() {
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);
  const timeline7 = useRef(null);
  const timeline8 = useRef(null);

  return (
    <>
      <Navigation />
      <div className="main">
        <HeroBasic
          next={timeline1}
          // black
          blue
          data={{
            title: "our history",
            content:
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.",
            bgLocation: "/bg/our-leadership.png",
          }}
        />
        <StoryCard
          ref={timeline1}
          next={timeline2}
          timeline={{
            current: "1930's",
            nextLabel: "1940's",
            futures: ["1950's - 1960's", "1970's", "1980's"],
          }}
        />
        <StoryCard
          ref={timeline2}
          next={timeline3}
          timeline={{
            before: ["1930's"],
            current: "1940's",
            nextLabel: "1950's - 1960's",
            futures: ["1970's", "1980's"],
          }}
        />
        <StoryCard
          ref={timeline3}
          next={timeline4}
          timeline={{
            before: ["1940's"],
            current: "1950's - 1960's",
            nextLabel: "1970's",
            futures: ["1980's", "1990's"],
          }}
        />
        <StoryCard
          ref={timeline4}
          next={timeline5}
          timeline={{
            before: ["1950's - 1960's"],
            current: "1970's",
            nextLabel: "1980's",
            futures: ["1990's", "2000's"],
          }}
        />
        <StoryCard
          ref={timeline5}
          next={timeline6}
          timeline={{
            before: [ "1970's"],
            current: "1980's",
            nextLabel: "1990's",
            futures: ["2000's", "PRESENT"],
          }}
        />
        <StoryCard
          ref={timeline6}
          next={timeline7}
          timeline={{
            before: ["1970's", "1980's"],
            current: "1990's",
            nextLabel: "2000's",
            futures: ["PRESENT"],
          }}
        />
        <StoryCard
          ref={timeline7}
          next={timeline8}
          timeline={{
            before: ["1970's", "1980's", "1990's"],
            current: "2000's",
            nextLabel: "PRESENT",
          }}
        />
        <StoryCard
          ref={timeline8}
          timeline={{
            current: "PRESENT",
            before: ["1980's", "1990's", "2000's"],
          }}
        />
      </div>
    </>
  );
}

export default HistoryPage;
