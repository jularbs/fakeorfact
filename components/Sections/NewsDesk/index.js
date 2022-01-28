import "./styles.scss";

import { forwardRef, useRef } from "react";

import {
  IoLogoTwitter,
  IoChevronBackSharp,
  IoHeartSharp,
  IoChevronForwardSharp,
} from "react-icons/io5";

import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import Head from "next/head";

const NewsDesk = forwardRef(({}, myRef) => {
  const swiperRef = useRef(null);

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
        <div className="image-wrapper">
          <img src={data.imgLocation} alt="" />
        </div>
        <div className="text-wrapper">
          <div className="name">{data.name}</div>
          <div className="handle">{data.handle}</div>
          <div className="content">{data.content}</div>
          <div className="meta">
            <div className="data">23 Jan</div>
            <div className="likes">
              <IoHeartSharp /> 100K
            </div>
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
          <div className="__icon">
            <IoLogoTwitter />
          </div>
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
            {sampleData && sampleData.map((item, i) => showCard(item, i))}
          </Swiper>
        </div>
      </section>
    </>
  );
});

export default NewsDesk;
