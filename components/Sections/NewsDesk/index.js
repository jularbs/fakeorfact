import "./styles.scss";

import { forwardRef, useRef, useState, useEffect } from "react";

import {
  IoLogoTwitter,
  IoChevronBackSharp,
  IoHeartSharp,
  IoChevronForwardSharp,
  IoExitOutline,
} from "react-icons/io5";

import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import Head from "next/head";

import axios from "axios";

import { format } from "date-fns";

const NewsDesk = forwardRef(({}, myRef) => {
  const swiperRef = useRef(null);

  const [stories, setStories] = useState([]);

  useEffect(() => {
    // axios.get("https://radyonatin.com/api/mmg-request.php").then((data) => {
    //   console.log(data);
    // });
  }, []);

  const apiResponse = [
    {
      content:
        "A man from Sweden recently earned a world record after achieving the farthest washing machine throw with a distance of 14 feet and 7.2 inches.<br /><br />Johan Espenkrona who is a bodybuilder broke the world record during its one-on-one match with Dutch strongman Kelvin de Ruiter in an episode of Lo Show Dei Record in Milan, Italy.",
      headline:
        "Farthest throw of a washing machine was achieved by a Swedish man",
      imgcaption: "Image from: Guinness World Record | YouTube",
      imguri: "https://radyonatin.net/img/lib/000/045/354/1.jpg",
      postdate: 1659346922,
      storyuri: "https://radyonatin.com/story.php/45354",
    },
    {
      content:
        "A movie theater chain in the United Kingdom offers free tickets to people who are redheads, as the country expects an unprecedented heatwave.<br /><br />Showcase Cinemas is offering help to redhead people who are more vulnerable to the sun by giving them free movie tickets on Monday and Tuesday of this week.",
      headline:
        "Cinema in UK offers a free ticket to redheads amid the upcoming heat wave",
      imgcaption: "Image from: Pixabay, Unsplash",
      imguri: "https://radyonatin.net/img/lib/000/045/333/1.jpg",
      postdate: 1659003051,
      storyuri: "https://radyonatin.com/story.php/45333",
    },
    {
      content:
        "MANILA &ndash; A magnitude 7 earthquake jolted Abra on Wednesday, the Philippine Institute of Volcanology and Seismology (Phivolcs) reported.<br /><br />Phivolcs earlier logged this as magnitude 7.3.",
      headline: "Magnitude 7 quake jolts Abra",
      imgcaption: "Image from: PHIVOLCS-DOST | Facebook",
      imguri: "https://radyonatin.net/img/lib/000/045/314/6.jpg",
      postdate: 1658887433,
      storyuri: "https://radyonatin.com/story.php/45314",
    },
    {
      content:
        "TikTok cooking sensations Lynn 'Lynja' Davis and &quot;Masterchef&quot; finalist Nick DiGiovanni worked together to produce the world's largest chicken nugget.<br /><br />&quot;Nick and Lynn (better known by the name 'Lynja' which is used in her TikTok handle @cookingwithLynja) created the world's largest chicken nugget, weighing in at 20.960 kg (46 lb 3.34 oz), approximately 115 times larger than your average chicken nugget,&quot; according to Guinness World Records.",
      headline:
        "World's largest chicken nugget created by two Tiktok cooking sensations",
      imgcaption: "Image from: Guinness World Records",
      imguri: "https://radyonatin.net/img/lib/000/045/312/1.jpg",
      postdate: 1658828118,
      storyuri: "https://radyonatin.com/story.php/45312",
    },
    {
      content:
        'Gentle parenting is an evidence-based approach to raising happy, confident children. This parenting style is composed of four main elements: empathy, respect, understanding, and boundaries, according to <a href="https://www.verywellfamily.com/what-is-gentle-parenting-5189566">verywellmind</a>.<br /><br />Compare to other types of parenting methods, gentle parenting gives focuses on nurturing qualities you want in your child by being compassionate and enforcing consistent boundaries.',
      headline: "Have you been practicing 'Gentle Parenting'?",
      imgcaption: "Image from: Pixabay",
      imguri: "https://radyonatin.net/img/lib/000/045/280/1.jpg",
      postdate: 1658395046,
      storyuri: "https://radyonatin.com/story.php/45280",
    },
    {
      content:
        "A 17-year-old Chihuahua mix named Mr. Happy Face from Arizona, the United States named the &quot;World's Ugliest Dog&quot;.<br /><br />The hairless dog that has tumors and neurological issues was named the &quot;World's Ugliest Dog&quot; at the Sonoma-Marin Fairgrounds and Event Center in Petaluma, California.",
      headline:
        "17-year-old Chihuahua from Arizona was named the 'World Ugliest Dog'",
      imgcaption: "Image from: jenedabenally | Instagram",
      imguri: "https://radyonatin.net/img/lib/000/045/273/1.jpg",
      postdate: 1658310360,
      storyuri: "https://radyonatin.com/story.php/45273",
    },
    {
      content:
        "Technology Recyclers, a computer and electronics recycling company recently broke a Guinness World Record after putting together a long, curvy line of 2,910 laptops on the floor of Technology Recyclers' headquarters in Indianapolis, Indiana, USA, and toppled them like dominoes.<br /><br />According to Guinness World Record, the Technology Recyclers wanted to share the importance of certified ethical recycling and to try to increase their impact through a volume of e-waste recycled.",
      headline:
        "Company in U.S. toppled 2,910 laptops like dominoes to break a world record",
      imgcaption: "Image from: Guinness World Record",
      imguri: "https://radyonatin.net/img/lib/000/045/258/1.jpg",
      postdate: 1658138016,
      storyuri: "https://radyonatin.com/story.php/45258",
    },
    {
      content:
        "A woman in California discovered $36,000 cash inside a cushion of a sofa that she got online for free.<br /><br />Vicky Umodu said that she is browsing at Craiglist website for some affordable furniture for her new home and she was lucky to find a couch being given away for free.",
      headline:
        "Woman in California discovers $36,000 cash inside sofa she got online for free",
      imgcaption: "Image from: Vicky Umodu",
      imguri: "https://radyonatin.net/img/lib/000/045/245/1.jpg",
      postdate: 1657877974,
      storyuri: "https://radyonatin.com/story.php/45245",
    },
    {
      content:
        "A cat named Suki went viral on social media after graduating from the University of Texas at Austin.<br /><br />According to Francesa Bourdier the owner of Suki, she and her cat attended every Zoom class which is why she suggested including her four-legged furry friend at her graduation.",
      headline:
        "Cat 'graduates' from the University of Texas after attending every online class with her human",
      imgcaption: "Image from: @FrancescaBourdi | Twitter",
      imguri: "https://radyonatin.net/img/lib/000/045/224/1.png",
      postdate: 1657706697,
      storyuri: "https://radyonatin.com/story.php/45224",
    },
    {
      content:
        "Stress does not only affect our mental health but it has also a big impact on our body and weight. In fact, stress has an impact on our ability to sustain a healthy weight.<br /><br />Doctor Charlie Seltzer, a weight loss physician said that our body reacts to stress by increasing levels of cortisol, this hormone gets the body to be ready for &quot;fight or flee.&quot;",
      headline: "Is your weight-gain due to stress? Read this:",
      imgcaption: "Image from: Unsplash",
      imguri: "https://radyonatin.net/img/lib/000/045/214/1.jpg",
      postdate: 1657617858,
      storyuri: "https://radyonatin.com/story.php/45214",
    },
  ];

  const sampleData = [
    {
      imgLocation:
        "https://images.unsplash.com/photo-1643235988160-9aabe50b74ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80",
      name: "Twitter Name",
      handle: "@TwitterHandle",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it",
    },
    {
      imgLocation:
        "https://images.unsplash.com/photo-1643235988160-9aabe50b74ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80",
      name: "Twitter Name",
      handle: "@TwitterHandle",
      content: "A small river named Duden flows by their place and supplies it",
    },
    {
      imgLocation:
        "https://images.unsplash.com/photo-1643235988160-9aabe50b74ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80",
      name: "Twitter Name",
      handle: "@TwitterHandle",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it",
    },
    {
      imgLocation:
        "https://images.unsplash.com/photo-1643235988160-9aabe50b74ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80",
      name: "Twitter Name",
      handle: "@TwitterHandle",
      content: "A small river named Duden flows by their place and supplies it",
    },
    {
      imgLocation:
        "https://images.unsplash.com/photo-1643235988160-9aabe50b74ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80",
      name: "Twitter Name",
      handle: "@TwitterHandle",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it",
    },
    {
      imgLocation:
        "https://images.unsplash.com/photo-1643235988160-9aabe50b74ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80",
      name: "Twitter Name",
      handle: "@TwitterHandle",
      content: "A small river named Duden flows by their place and supplies it",
    },
  ];

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 4,
    observer: true,
    observeParents: true,
    rebuildOnUpdate: true,
    spaceBetween: 30,
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  const showCard = (data, index) => {
    return (
      <div className="twitter-card-container" key={index}>
        <div
          className="image-wrapper"
          style={{ backgroundImage: `url('${data.imguri}')` }}
        ></div>
        <div className="text-wrapper">
          <a href={data.storyuri} target="_blank">
            <div className="name">{data.headline}</div>
          </a>
          <div className="handle">
            {format(new Date(data.postdate * 1000), "MMM d, yyyy")}
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
          <div className="meta">
            <div className="data"></div>
            <a href={data.storyuri} target="_blank">
              <div className="likes">
                <span>Read Article</span> <IoExitOutline />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head></Head>
      <section className="news-desk-container" ref={myRef}>
        <h2>
          <div className="__icon">{/* <IoLogoTwitter /> */}</div>
          <span>Newsdesk</span>
        </h2>

        <div className="cards-wrapper px-1">
          <div className="slider left" onClick={goPrev}>
            <IoChevronBackSharp />
          </div>
          <div className="slider right" onClick={goNext}>
            <IoChevronForwardSharp />
          </div>
          <Swiper ref={swiperRef} {...params}>
            {apiResponse && apiResponse.map((item, i) => showCard(item, i))}
          </Swiper>
        </div>
      </section>
    </>
  );
});

export default NewsDesk;
