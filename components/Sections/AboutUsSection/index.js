import "./styles.scss";
import { forwardRef } from "react";
const AboutUsSection = forwardRef(({ data, next }, myRef) => {
  return (
    <>
      <section className="about-us-container" ref={myRef}>
        <div className="excerpt">
          <h2 className="title">About Us</h2>
          <div className="content">
            A network of AM stations operating in key provincial cities
            throughout the Philippines. Aksyon Radyo stations are one of the
            most trusted sources of local, national, and international news in
            the areas where they operate. The Aksyon Radyo network focuses on
            delivering the latest news and fair and balanced public affairs
            analysis supplemented by music, entertainment, and educational
            programs.
          </div>
        </div>
        <div className="showcase">
          <div className="showcase-item">
            <div className="title">
              <div className="__icon">
                <img src="/icons/news-icon.svg" />
              </div>
              The Latest News
            </div>
            <div className="description">
              The Aksyon Radyo network focuses on delivering the latest news and
              fair and balanced public affairs analysis supplemented by music,
              entertainment, and educational programs.
            </div>
          </div>
          <div className="showcase-item">
            <div className="title">
              <div className="__icon">
                <img src="/icons/mic-icon.svg" />
              </div>
              Hard-Hitting Commentaries
            </div>
            <div className="description">
              The Aksyon Radyo network focuses on delivering the latest news and
              fair and balanced public affairs analysis supplemented by music,
              entertainment, and educational programs.
            </div>
          </div>
          <div className="showcase-item">
            <div className="title">
              <div className="__icon">
                <img src="/icons/megaphone-icon.svg" />
              </div>
              Public Affairs
            </div>
            <div className="description">
              The Aksyon Radyo network focuses on delivering the latest news and
              fair and balanced public affairs analysis supplemented by music,
              entertainment, and educational programs.
            </div>
          </div>
          <div className="showcase-item">
            <div className="title">
              <div className="__icon">
                <img src="/icons/trophy-icon.svg" />
              </div>
              Award-Winning Dramas
            </div>
            <div className="description">
              The Aksyon Radyo network focuses on delivering the latest news and
              fair and balanced public affairs analysis supplemented by music,
              entertainment, and educational programs.
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default AboutUsSection;
