import "./styles.scss";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navigation = () => {
  const logoLocation =
    "https://www.pinclipart.com/picdir/big/380-3806630_uploads-images-nufarm-logo-horizontal-green-rgb-nufarm.png";

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // new function:
  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 50);

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <div
        className="navigation-container"
        style={{ top: visible ? "0" : "-70px" }}
      >
        <div className="logo-container">
          <img
            src={logoLocation}
            alt="starcity-logo"
            className="logo-wrapper"
          />
        </div>
        <div className="nav-container">
          <nav>
            <Link href="/">
              <a>our story</a>
            </Link>
            <Link href="/">
              <a>our company</a>
            </Link>
            <Link href="/">
              <a>our business</a>
            </Link>
            <Link href="/">
              <a>collaborate with us</a>
            </Link>
            <Link href="/">
              <a>contact-us</a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
