import "./styles.scss";
import Link from "next/link";

const SideBySide = ({ data, reverse }) => {
  const testData = {
    imgLocation:
      "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3870&q=80",
    logoLocation:
      "https://www.pinclipart.com/picdir/big/380-3806630_uploads-images-nufarm-logo-horizontal-green-rgb-nufarm.png",
    title: "Our Mission",
    content:
      "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero. It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.",
    ctaLabel: "Inquire Now",
    ctaLink: "/",
  };

  return (
    <>
      <div className={`side-by-side-container ${reverse ? "reverse" : ""}`}>
        <div className="content-container">
          {testData.logoLocation && (
            <img src={testData.logoLocation} className="logo" />
          )}
          {testData.title && <div className="title">{testData.title}</div>}
          {testData.content && (
            <div className="content">{testData.content}</div>
          )}
          {testData.ctaLabel && testData.ctaLink && (
            <Link href={testData.ctaLink}>
              <button className="btn btn-cta">{testData.ctaLabel}</button>
            </Link>
          )}
        </div>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${testData.imgLocation})` }}
        ></div>
      </div>
    </>
  );
};

export default SideBySide;
