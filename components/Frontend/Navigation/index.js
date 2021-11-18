import "./styles.scss";

import Link from "next/link";

const Navigation = () => {
  const logoLocation =
    "https://www.pinclipart.com/picdir/big/380-3806630_uploads-images-nufarm-logo-horizontal-green-rgb-nufarm.png";

  return (
    <>
      <div className="navigation-container">
        <div className="logo-container">
          <img src={logoLocation} alt="starcity-logo" className="logo-wrapper" />
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
