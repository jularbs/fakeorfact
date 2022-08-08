import "./styles.scss";

import { IoPersonCircleOutline, IoMenuOutline } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
const MainHeader = () => {
  return (
    <>
      <div className="main-header-container">
        <div className="nav-wrapper">
          <IoMenuOutline className="__icon" />
          <img
            src="/logos/fof-logo.png"
            alt="Fake or Fact"
            className="logo-wrapper"
          />
          {/* <div className="nav-control">
            <span className="text">150</span>
            <GiTwoCoins className="__icon coin" />
          </div> */}
          <div className="nav-control">
            <span className="text sign-in">SIGN IN</span>
            <IoPersonCircleOutline className="__icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
